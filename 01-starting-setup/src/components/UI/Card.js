import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div>
        <div className={classes}>
            {props.children}
        </div>
        </div>
    );

}
export default Card;