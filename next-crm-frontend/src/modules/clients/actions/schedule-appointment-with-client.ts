"use server"
import { Resend } from "resend";
import { ScheduleAppointmentTemplate } from "../components/email/ScheduleAppointmentTemplate";

export const scheduleAppointmentWithClient = async (name: string, email: string, date: string) => {

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "Cita agendada",
            react: ScheduleAppointmentTemplate({ name, date }),
            text: "",
        });
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}