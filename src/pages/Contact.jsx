import { useContacts } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const { state } = useContacts();
  const navigate = useNavigate();

  if (state.loading) return <p>Cargando contactos...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📒 Lista de Contactos</h1>
      <div className="grid gap-4">
        {state.contacts.map(c => (
          <ContactCard
            key={c.id}
            contact={c}
            onEdit={(contact) => navigate("/add", { state: contact })}
          />
        ))}
      </div>
    </div>
  );
}