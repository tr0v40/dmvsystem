import React from "react"
import { Button } from "./ui/button"

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
      <div className="modal w-full">
        <div className="modal-content bg-white">
          <p className="text-orange-600 mb-6">
            Deseja realmente excluir este cliente?
          </p>
          <Button
            onClick={onConfirm}
            className="ml-6 px-6 py-2 bg-red-600 border-none hover:bg-red-500 "
          >
            Sim
          </Button>
          <Button
            onClick={onClose}
            className="ml-6 px-6 py-2 bg-green-600 border-none hover:bg-green-500 "
          >
            Cancelar
          </Button>
        </div>
      </div>
    )
  )
}

export default CustomerDeleteConfirmationModal

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"

// export function CustomerDeleteConfirmationModal() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button variant="outline">Show Dialog</Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction>Continue</AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   )
// }
