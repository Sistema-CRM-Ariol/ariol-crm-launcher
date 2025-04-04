import { AdditionalMenuItems } from "./AdditionalMenuItems"
import { AppsMenuItems } from "./AppsMenuItems"
import { PrincipalMenuItems } from "./PrincipalMenuItems"

export const SideMenu = () => {
    return (
        <nav className="sidemenu">
            <div className="mb-4">
                <h3 className="sidemenu__logo">CRM Ariol</h3>
            </div>

            <div className="mb-8">
                <p className="text-xs font-medium mb-2">MENU-PRINCIPAL</p>
                <PrincipalMenuItems/>
            </div>

            <div className="mb-8">
                <p className="text-xs font-medium mb-3">APLICACIONES</p>
                <AppsMenuItems/>
            </div>

            <div>
                <p className="text-xs font-medium mb-3">OTROS</p>
                <AdditionalMenuItems/>
            </div>





        </nav>
    )
}
