// customersTable.js

import {
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"
import { useState } from "react"
import getCustomers from "../../tools/customers/get"
import deleteCustomer from "../../tools/customers/delete"
import columns from "./columns"

interface Customer {
  id: number
  name: string
  identifier: string
}

const useCustomersTable = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const [customers, setCustomers] = useState<Customer[]>([])
  const [updateCustomerId, setUpdateCustomerId] = useState<number | null>(null)
  const [deleteCustomerId, setDeleteCustomerId] = useState<number | null>(null)

  const handleUpdateCustomer = (id: number) => {
    setUpdateCustomerId(id)
  }

  const handleDeleteCustomer = async (id: number) => {
    setDeleteCustomerId(id)
  }

  const handleConfirmDelete = async () => {
    try {
      if (deleteCustomerId !== null) {
        await deleteCustomer(deleteCustomerId)
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== deleteCustomerId)
        )
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error)
    } finally {
      setDeleteCustomerId(null)
    }
  }

  const handleCancelDelete = () => {
    setDeleteCustomerId(null)
  }

  const table = useReactTable({
    data: customers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return {
    table,
    deleteCustomerId,
    handleUpdateCustomer,
    handleDeleteCustomer,
    handleConfirmDelete,
    handleCancelDelete,
  }
}

export default useCustomersTable
