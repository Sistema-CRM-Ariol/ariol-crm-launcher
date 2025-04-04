import { RecoveryPasswordForm } from "@/modules/auth";

export default function RecoveryPasswordPage() {


    return (
        <section className='recovery__page'>
            <div className="container">
                <RecoveryPasswordForm/>
            </div>
        </section>
    );
}