import "../styles/footer.css"

const Footer = (props) => {
    return (
        <footer><a href={props.href}>{props.content}</a></footer>
    )
}

export default Footer