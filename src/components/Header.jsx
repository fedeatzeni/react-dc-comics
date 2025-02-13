import Navbar from "./Navbar.jsx"

export default function Header() {

    const links = [
        { id: 1, name: "CHARACTERS", url: "#", current: false },
        { id: 2, name: "COMICS", url: "#", current: true },
        { id: 3, name: "MOVIES", url: "#", current: false },
        { id: 4, name: "TV", url: "#", current: false },
        { id: 5, name: "GAMES", url: "#", current: false },
        { id: 6, name: "COLLECTIBLES", url: "#", current: false },
        { id: 7, name: "VIDEOS", url: "#", current: false },
        { id: 8, name: "FANS", url: "#", current: false },
        { id: 9, name: "NEWS", url: "#", current: false },
        { id: 10, name: "SHOP", url: "#", current: false },
    ]

    return (
        <header>
            <img src="./img/dc-logo.png" alt="" />

            <Navbar linksProps={links} />
        </header>
    )
}