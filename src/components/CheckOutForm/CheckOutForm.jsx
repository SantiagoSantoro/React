import { useState } from "react";
import "./CheckOutForm.css";

const CheckOutForm = ({ onConfirm }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.phone && formValues.email) {
      onConfirm(formValues);
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  };

  return (
    <div className="divform">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre
          <input
            className="Input"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="Label">
          Teléfono
          <input
            className="Input"
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </label>
        <label className="Label">
          Email
          <input
            className="Input"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
        <div className="Label">
          <button className="btn btn-dark" type="submit">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
