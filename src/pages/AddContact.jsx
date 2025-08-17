import { useState, useEffect } from "react";
import { useContacts } from "../context/ContactContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddContact() {
	const { addContact, editContact } = useContacts();
	const navigate = useNavigate();
	const { state } = useLocation(); // aquí llega el contacto a editar si existe

	const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });

	useEffect(() => {
		if (state) setForm(state); // si venimos con un contacto a editar
	}, [state]);

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (state) {
			editContact(state.id, form);
		} else {
			addContact(form);
		}
		navigate("/contacts"); // volvemos a la lista
	};

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">
				{state ? "✏️ Editar Contacto" : "➕ Agregar Contacto"}
			</h1>

			<form onSubmit={handleSubmit} className="flex flex-col gap-2 border p-4 rounded-lg">
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					value={form.name}
					onChange={handleChange}
					required
					className="border p-2 rounded"
				/>
				<input
					type="text"
					name="phone"
					placeholder="Teléfono"
					value={form.phone}
					onChange={handleChange}
					required
					className="border p-2 rounded"
				/>
				<input
					type="email"
					name="email"
					placeholder="Correo"
					value={form.email}
					onChange={handleChange}
					required
					className="border p-2 rounded"
				/>
				<input
					type="text"
					name="address"
					placeholder="Dirección"
					value={form.address}
					onChange={handleChange}
					className="border p-2 rounded"
				/>
				<button className="bg-green-500 text-white py-2 rounded mt-2">
					{state ? "Actualizar" : "Agregar"}
				</button>
			</form>
		</div>
	);
}
