import { validateToken } from "@/modules/auth";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {

    const isValidToken = await validateToken();

    if( isValidToken ){
        redirect('/admin/dashboard');
    }

    return (
        <>
            <Toaster
                closeButton
                richColors
                position="top-center"
                style={{
                    position: "absolute",
                }}
            />
            <main>
                {children}
            </main>
        </>
    );
}