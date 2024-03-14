import { NamePlate } from "../NamePlate/NamePlate"
import { NavBar } from "../NavBar/NavBar"
import Logo from '../../imgs/ag-logo_grn-blu.png'
import './header.sass'

export const Header = () => {
    return (
        <div id='header'>
            <NamePlate logo={Logo} name='Aaron Gertler' />
            <NavBar />
        </div>
    )
}