export default function ComicsCard(props) {
    return (
        <div className="comic">
            <img src={props.thumb} alt={props.title} />
            <div>{props.title}</div>
        </div>
    )
}