export default function Modal({ children, onClose, onConfirm }) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-6 rounded-lg shadow-lg w-80">
				<div className="mb-4">{children}</div>
				<div className="flex justify-end gap-2">
					<button className="bg-gray-300 px-3 py-1 rounded" onClick={onClose}>
						Cancelar
					</button>
					<button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onConfirm}>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
}
