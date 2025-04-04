import { Toaster } from "sonner";
import { validateToken } from "@/modules/auth";
import { NavMenu, SideMenu } from "@/modules/shared"
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    const isValidToken = await validateToken();

    if( !isValidToken ){
        redirect('/auth/login');
    }



    return (
        <>
            <div className="admin-layout">
                <Toaster
                    closeButton
                    richColors
                    position="top-center"
                    style={{
                        position: "absolute",
                    }}
                />
                <SideMenu />
                <main className="w-full h-screen overflow-y-auto pb-10 relative">
                    <NavMenu user={ isValidToken.user } />
                    {children}
                </main>
            </div>
        </>
    );
}