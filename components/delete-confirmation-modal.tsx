import React from "react"

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const CustomerDeleteConfirmationModal: React.FC<
  DeleteConfirmationModalProps
> = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content bg-white">
          <p className="text-orange-600 mb-6">
            Deseja realmente excluir este cliente?
          </p>
          <button
            onClick={onConfirm}
            className="ml-6 px-6 py-2 bg-red-600 border-none hover:bg-red-500 "
          >
            Sim
          </button>
          <button
            onClick={onClose}
            className="ml-6 px-6 py-2 bg-green-600 border-none hover:bg-green-500 "
          >
            Cancelar
          </button>
        </div>
      </div>
    )
  )
}

export default CustomerDeleteConfirmationModal
