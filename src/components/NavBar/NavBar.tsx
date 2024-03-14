import { Button } from '../Button/Button'
import { MdArticle, MdBuildCircle, MdEmail, MdPalette } from "react-icons/md"
import Resume from '../../docs/aaron-gertler_resume.pdf'
import './navbar.sass'

export const NavBar = () => {
    function sendEmail() {
        window.location.href = "mailto:aaron.gertler@gmail.com?subject=Let's Work Together"
    }
    
    function openResume() {
        window.location.href = Resume
    }

    return (
        <div id='navbar'>
            <Button transparent icon={<MdPalette />} label='Design' />
            <Button transparent icon={<MdBuildCircle />} label='Development' />
            <Button transparent icon={<MdArticle />} label='Résumé' onClick={() => openResume()} />
            <Button primary icon={<MdEmail />} label='Contact' onClick={() => sendEmail()} />
        </div>
    )
}