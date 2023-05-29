import { useState } from "react";
import "./CheckOutForm.css";

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (e) => {
        e.preventDefault()
        const buyer = {
            name, phone, email
        }
        onConfirm(buyer)
    }

    return (
        <div className="divform">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input className="Input" type="text" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label className="Label">
                    Teléfono
                    <input className="Input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="Label">
                    Email
                    <input className="Input" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className="Label">
                    <button className="btn btn-dark" type="submit">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutForm;