import comics from "../../comics.js"
import ComicsCard from "./ComicCard.jsx"

export default function ComicsList() {
    return (
        <div>
            <h2>CONTENT SERIES</h2>
            <div className="comics-list">
                {comics.map(comic=> <ComicsCard key={comic.id} thumb={comic.thumb} title={comic.title} />)}
            </div>
            <div className="btn"><div>LOAD MORE</div></div>
        </div>
    )
}