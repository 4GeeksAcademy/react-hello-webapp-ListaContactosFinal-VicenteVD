import { useState } from "react";
import { useContacts } from "../context/ContactContext";
import Modal from "./Modal";

export default function ContactCard({ contact, onEdit }) {
	const { removeContact } = useContacts();
	const [showModal, setShowModal] = useState(false);

	const handleDelete = () => {
		removeContact(contact.id);
		setShowModal(false);
	};

	return (
		<div className="border rounded-lg p-4 flex justify-between items-center shadow-sm">
			<div>
				<h3 className="text-lg font-bold">{contact.name}</h3>
				<p>{contact.phone}</p>
				<p>{contact.email}</p>
				<p>{contact.address}</p>
			</div>
			<div className="flex gap-2">
				<button
					className="bg-blue-500 text-white px-3 py-1 rounded"
					onClick={() => onEdit(contact)}
				>
					Editar
				</button>
				<button
					className="bg-red-500 text-white px-3 py-1 rounded"
					onClick={() => setShowModal(true)}
				>
					Borrar
				</button>
			</div>

			{showModal && (
				<Modal onClose={() => setShowModal(false)} onConfirm={handleDelete}>
					¿Seguro que deseas eliminar a <b>{contact.name}</b>?
				</Modal>
			)}
		</div>
	);
}
