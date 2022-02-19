import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

const NewMeetupForm = () => {
    const titleInputRef = useRef();
    const imgInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        const meetupData = {
            title: titleInputRef.current.value,
            image: imgInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        }

        console.log(meetupData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" required id="image" ref={imgInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;