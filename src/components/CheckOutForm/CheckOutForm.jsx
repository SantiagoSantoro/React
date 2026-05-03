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
    <div className="checkout-form-wrap">
      <form onSubmit={handleConfirm} className="checkout-form" noValidate>
        <h2 className="h5 text-center mb-4 fw-bold">Datos de envío</h2>
        <label className="checkout-label">
          Nombre
          <input
            className="checkout-input"
            type="text"
            name="name"
            autoComplete="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="checkout-label">
          Teléfono
          <input
            className="checkout-input"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </label>
        <label className="checkout-label">
          Email
          <input
            className="checkout-input"
            type="email"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
        <button className="btn btn-dark checkout-submit rounded-pill py-2" type="submit">
          Crear orden
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
