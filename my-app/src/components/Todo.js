import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ title }) => {
    const [modal, setModal] = useState(false)


    const deleteHandler = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modal ? <Modal onCancel={closeModal} onConfirm={closeModal} /> : null}
            {modal ? <Backdrop onClick={closeModal} /> : null}
        </div>
    )
}

export default Todo;