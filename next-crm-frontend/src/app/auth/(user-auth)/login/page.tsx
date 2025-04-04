import { LoginForm } from '@/modules/auth';


export default function LoginPage() {
    return (
        <section className="login__page">
            <div className="container">
                <LoginForm />
            </div>
        </section>
    );
}