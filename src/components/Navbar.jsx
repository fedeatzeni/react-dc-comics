export default function Navbar(props) {

    return (
        <div className="nav">
            {props.linksProps.map((el) => <a href={el.url} key={el.id} className={el.current ? "active" : ""}>{el.name}</a>)}
        </div>
    )
}