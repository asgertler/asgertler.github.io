import './nameplate.sass'

interface NamePlateProps {
    logo: string
    name: string
}

export const NamePlate = ({ logo, name }: NamePlateProps) => {
    return (
        <div id='nameplate'>
            <img src={logo} alt='Aaron Gertler logo' id='nameplate--logo' />
            <h1>{name}</h1>
        </div>
    )
}