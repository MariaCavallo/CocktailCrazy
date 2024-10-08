import { FC, PropsWithChildren } from "react"
import NavbarComponent from "./navbar/NavBar"
import FooterComponent from "./footer/Footer"

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <NavbarComponent />
            <div>
                {children}
            </div>
            <FooterComponent />
        </div>
    )
}

export default Layout