import Navbar from "./Navbar.jsx"

export default function Footer() {

    const linkMain = [
        { id: 1, name: "Characters", url: "#" },
        { id: 2, name: "Comics", url: "#" },
        { id: 3, name: "Movies", url: "#" },
        { id: 4, name: "TV", url: "#" },
        { id: 5, name: "Games", url: "#" },
        { id: 6, name: "Videos", url: "#" },
        { id: 7, name: "News", url: "#" },
    ];

    const linkShop = [
        { id: 1, name: "Shop", url: "#" },
        { id: 2, name: "Shop Collectibles", url: "#" },
    ];

    const linkDC = [
        { id: 1, name: "Terms Of Use", url: "#" },
        { id: 2, name: "Privacy Policy", url: "#" },
        { id: 3, name: "Ad Choices", url: "#" },
        { id: 4, name: "Advertising", url: "#" },
        { id: 5, name: "Jobs", url: "#" },
        { id: 6, name: "Subscription", url: "#" },
        { id: 7, name: "Talent Workshops", url: "#" },
        { id: 8, name: "CPSC Certificates", url: "#" },
        { id: 9, name: "Rating", url: "#" },
        { id: 10, name: "Shop Help", url: "#" },
        { id: 11, name: "Contact Us", url: "#" },
    ];

    const linkSites = [
        { id: 1, name: "DC", url: "#" },
        { id: 2, name: "MAD Magazine", url: "#" },
        { id: 3, name: "DC Kids", url: "#" },
        { id: 4, name: "DC Universe", url: "#" },
        { id: 5, name: "DC Power Visa", url: "#" }
    ];


    return (
        <footer>
            <div className="footer-nav">
                <div>
                    <div className="nav">
                        <div className="col">
                            <h2>DC COMICS</h2>
                            <Navbar linksProps={linkMain}/>

                            <br />
                            <h2>SHOP</h2>
                            <Navbar linksProps={linkShop}/>
                        </div>

                        <div className="col">
                            <h2>DC</h2>
                            <Navbar linksProps={linkDC}/>
                        </div>

                        <div className="col">
                            <h2>SITES</h2>
                            <Navbar linksProps={linkSites}/>

                        </div>
                    </div>

                    <img src="./img/dc-logo-bg.png" alt="logo" />
                </div>
            </div>

            <div className="footer-social">
                <div>
                    <div className="singup">Sing Up</div>
                    <div className="social">
                        <div>Follow Us</div>
                        <img src="./img/footer-facebook.png" alt="" />
                        <img src="./img/footer-twitter.png" alt="" />
                        <img src="./img/footer-youtube.png" alt="" />
                        <img src="./img/footer-pinterest.png" alt="" />
                        <img src="./img/footer-periscope.png" alt="" />
                    </div>
                </div>

            </div>
        </footer>
    )
}