import logo from './logo-fullname-white-no-bg.png';

const Logo = (props) => {
    return (
        <div>
            <img className={props.className} src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;