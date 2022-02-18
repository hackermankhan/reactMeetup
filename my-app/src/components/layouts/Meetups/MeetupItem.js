import classes from './MeetupItem.module.css';

const MeetupItem = ({ img, title, address, description }) => {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={img} alt={title} />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem;