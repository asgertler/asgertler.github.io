import { NamePlate } from "../NamePlate/NamePlate"
import { NavBar } from "../NavBar/NavBar"
import Logo from '../../imgs/logos/ag-squircle.svg'
import './header.sass'

export const Header = () => {
    return (
        <header>
            <NamePlate logo={Logo} name='Aaron Gertler' />
            <NavBar />
        </header>
    )
}