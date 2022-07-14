import logo from './logo-fullname-white-no-bg.png';
import logoBorder from './logo-fullname-border.png'

const Logo = (props) => {
    return (
        props.preset === "border" ? (
            <div>
                <img className={props.className} src={logoBorder} alt="logo"/>
            </div>
        ) : (
            <div>
                <img className={props.className} src={logo} alt="logo"/>
            </div>
        )
    )
}

export default Logo;