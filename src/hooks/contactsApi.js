const BASE_URL = "https://playground.4geeks.com/contact";

export async function getContacts() {
    const res = await fetch(`${BASE_URL}/agendas/vicente/contacts`);
    if (!res.ok) throw new Error("Error al obtener contactos");
    return res.json();
}

export async function createContact(contact) {
    const res = await fetch(`${BASE_URL}/agendas/vicente/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
    });
    if (!res.ok) throw new Error("Error al crear contacto");
    return res.json();
}

export async function updateContact(id, contact) {
    const res = await fetch(`${BASE_URL}/agendas/vicente/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
    });
    if (!res.ok) throw new Error("Error al actualizar contacto");
    return res.json();
}

export async function deleteContact(id) {
    const res = await fetch(`${BASE_URL}/agendas/vicente/contacts/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al borrar contacto");
    return res.json();
}
