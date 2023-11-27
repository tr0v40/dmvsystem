// import React, { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import api from "../../api"

// interface Customer {
//   id: number
//   name: string
//   identifier: string
// }

// const UpdateCustomerPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>()
//   const customerId = Number(id)
//   const [customer, setCustomer] = useState<Customer | null>(null)
//   const [updatedCustomer, setUpdatedCustomer] = useState({
//     name: "",
//     identifier: "",
//   })

//   useEffect(() => {
//     api.get(`/customer/${customerId}`).then((response) => {
//       setCustomer(response.data)
//       setUpdatedCustomer(response.data)
//     })
//   }, [customerId])

//   const history = useNavigate()

//   const handleUpdateCustomer = async () => {
//     try {
//       const response = await api.put(`/customer/${customerId}`, updatedCustomer)
//       setCustomer(response.data)
//       history.push("/customers") // Retorna para a tela de clientes após a atualização
//     } catch (error) {
//       console.error("Erro ao atualizar cliente:", error)
//     }
//   }

//   if (!customer) {
//     return <div>Carregando...</div>
//   }

//   return (
//     <div className="w-full max-w-screen-xl p-11 h-screen">
//       <h1 className="text-lg font-bold text-orange-700 py-4 px-2 antialiased">
//         Update Customer
//       </h1>
//       <div className="bg-white mb-11 drop-shadow-md">
//         {/* Formulário para atualização */}
//         <label>
//           Nome:
//           <input
//             type="text"
//             value={updatedCustomer.name}
//             onChange={(e) =>
//               setUpdatedCustomer({ ...updatedCustomer, name: e.target.value })
//             }
//           />
//         </label>
//         <br />
//         <label>
//           Identificador:
//           <input
//             type="text"
//             value={updatedCustomer.identifier}
//             onChange={(e) =>
//               setUpdatedCustomer({
//                 ...updatedCustomer,
//                 identifier: e.target.value,
//               })
//             }
//           />
//         </label>
//         <br />
//         <button onClick={handleUpdateCustomer}>Save</button>
//       </div>
//     </div>
//   )
// }

// export default UpdateCustomerPage

export default function CustomerUpdate() {
  return (
    <div>
      <h1>CustomerUpdate</h1>
    </div>
  )
}
