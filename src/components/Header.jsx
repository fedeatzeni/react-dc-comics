import Navbar from "./Navbar.jsx"

export default function Header(props) {



    return (
        <header>
            <img src="./img/dc-logo.png" alt="" />

            <Navbar linksProps={props.linksProps} />
        </header>
    )
}