import React from "react"
import { useState, useEffect } from "react"
import { api } from "../../api"
import { UserInterface } from "@/app/interfaces/pages"

const getUsers = async (
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>
) => {
  try {
    const response = await api.get("/user")
    setUsers(response.data)
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
  }
}

export { getUsers }
