import MainNav from "./MainNav.jsx"
import ComicsList from "./comics/ComicsList.jsx"


export default function Main() {
    return (
        <main>
            <span className="bg"></span>
            <div>
                <ComicsList />
            </div>
            <MainNav />
        </main>
    )
}