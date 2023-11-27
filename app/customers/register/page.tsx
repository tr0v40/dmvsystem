"use client"
import { useState, useEffect } from "react"
import api from "../../api"

export default function CustomerRegister() {
  const [customers, setCustomers] = useState({
    name: "",
    identifier: "",
  })

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setCustomers({ ...customers, [name]: value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!customers.name || !customers.identifier) {
      console.error("Missing fields")
      return
    }
    try {
      api.post("/customer", customers).then((response) => {
        console.log(response)
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="w-full max-w-screen-xl h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Register</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={customers.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Identifier (CNPJ/CUIT)
          </label>
          <input
            type="text"
            name="identifier"
            value={customers.identifier}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex content-center justify-center">
          <button
            className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
