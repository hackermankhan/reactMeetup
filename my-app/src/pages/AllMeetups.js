import { useState, useEffect } from "react";
import MeetupList from "../components/layouts/Meetups/MeetupList";

const AllMeetupsPage = () => {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        fetch('https://react-blog-test-a1e99-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = []
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    }
                    meetups.push(meetup)
                }
                setMeetups(meetups)
            })
    }, []);

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </div>
    )
}

export default AllMeetupsPage;