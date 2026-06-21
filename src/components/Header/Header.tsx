import { NamePlate } from "../NamePlate/NamePlate"
import { NavBar } from "../NavBar/NavBar"
import Logo from '../../imgs/logos/ag_red.svg'
import './header.sass'

export const Header = () => {
    return (
        <header>
            <NamePlate logo={Logo} name='Design Engineer' />
            <NavBar />
        </header>
    )
}