import MainNav from "./MainNav.jsx"
import ComicsList from "./comics/ComicsList.jsx"


export default function Main() {
    return (
        <main>
            <div>
                <ComicsList />
            </div>
            <MainNav />
        </main>
    )
}