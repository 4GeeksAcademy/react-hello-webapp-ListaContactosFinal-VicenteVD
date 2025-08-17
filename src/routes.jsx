import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import Contact from "./views/Contact";
import AddContact from "./views/AddContact";

export default function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <nav className="flex gap-4 bg-gray-200 p-4 shadow-md">
          <Link to="/contacts" className="text-blue-600 font-semibold">
            📒 Contactos
          </Link>
          <Link to="/add" className="text-green-600 font-semibold">
            ➕ Agregar Contacto
          </Link>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/contacts" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
            {/* ruta por defecto */}
            <Route path="*" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContactProvider>
  );
}
