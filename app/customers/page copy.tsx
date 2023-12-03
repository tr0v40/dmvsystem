// "use client"
// import { Button } from "../../components/ui/button"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import CustomerDeleteConfirmationModal from "../../components/delete-confirmation-modal"

// import api from "../api"

// interface Customer {
//   id: number
//   name: string
//   identifier: string
// }

// export default function CustomerPage() {
//   const [customers, setCustomers] = useState<Customer[]>([])
//   const [updateCustomerId, setUpdateCustomerId] = useState<number | null>(null)
//   const [deleteCustomerId, setDeleteCustomerId] = useState<number | null>(null)

//   useEffect(() => {
//     api.get("/customer").then((response) => {
//       setCustomers(response.data)
//     })
//   }, [])

//   // Update
//   const handleUpdateCustomer = (id: number) => {
//     setUpdateCustomerId(id)
//   }

//   // Delete
//   const handleDeleteCustomer = async (id: number) => {
//     setDeleteCustomerId(id)
//   }
//   const handleConfirmDelete = async () => {
//     try {
//       if (deleteCustomerId !== null) {
//         await api.delete(`/customer/${deleteCustomerId}`)
//         setCustomers((prevCustomers) =>
//           prevCustomers.filter((customer) => customer.id !== deleteCustomerId)
//         )
//       }
//     } catch (error) {
//       console.error("Erro ao excluir cliente:", error)
//     } finally {
//       setDeleteCustomerId(null)
//     }
//   }

//   const handleCancelDelete = () => {
//     setDeleteCustomerId(null)
//   }

//   return (
//     <div className="w-full max-w-screen-xl p-11 h-screen">
//       <ul>
//         <li>
//           <Link href="/customers/register">Register New Customer</Link>
//         </li>
//       </ul>
//       <div className="bg-white mb-11 drop-shadow-md">
//         <h1 className="text-lg font-bold text-orange-700 py-4 px-2 antialiased">
//           Customers
//         </h1>
//       </div>
//       <div className="relative overflow-x-auto">
//         <table className="w-full text-sm text-center rtl:text-right text-white font-bold drop-shadow-md">
//           <thead className="text-xs text-white uppercase bg-orange-700 ">
//             <tr>
//               <th className="px-6 py-3">Name</th>
//               <th className="px-6 py-3">Identifier</th>
//               <th className="px-6 py-3">Update</th>
//               <th className="px-6 py-3">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr
//                 className="
//                 bg-white
//                 shadow
//                 hover:shadow-md
//                   border-b border-gray-200
//                   hover:bg-orange-200
//                 "
//                 key={customer.id}
//               >
//                 <td className="px-6 py-4 font-medium text-orange-700">
//                   {customer.name}
//                 </td>
//                 <td className="px-6 py-4 text-orange-700">
//                   {customer.identifier}
//                 </td>
//                 <td className="px-6 py-4 text-orange-700">
//                   <Link href={`/customer/update/${customer.id}`}>Update</Link>
//                 </td>
//                 <td className="px-6 py-4 text-orange-700">
//                   <Button onClick={() => handleDeleteCustomer(customer.id)}>
//                     X
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//           <CustomerDeleteConfirmationModal
//             isOpen={deleteCustomerId !== null}
//             onClose={handleCancelDelete}
//             onConfirm={handleConfirmDelete}
//           />
//         </table>
//       </div>
//     </div>
//   )
// }
export default function CustomerPage() {
  return (
    <>
      <h1>Texto</h1>
    </>
  )
}
