import "../styles/header.css"

const Header = (props) => {
    return (
        <header>
            <div id="title-wrapper">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        </header>
    )
}

export default Header