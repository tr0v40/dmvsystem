"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import CustomerDeleteConfirmationModal from "../../components/delete-confirmation-modal"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import api from "../api"
import {
  DropdownMenu,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UsersColuns from "../users/columns"
// import { UserInterface } from "../interfaces/pages"

// TESTE
// console.log(UsersColuns)
// TESTE
interface UserInterface {
  id: number
  name: string
  identifier: string
}

const minhaInterfaceConfigurations = Object.keys({} as UsersColuns).map(
  (campo) => console.log(campo)
)
console.log(minhaInterfaceConfigurations)
// TESTE

export default function UsersIndex() {
  const columns: ColumnDef<UserInterface>[] = [
    {
      accessorKey: "name", // The accessor key for the cell AQUIII
      header: ({ column }) => {
        return (
          // Criar uma pros
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div> // The value for the cell
      ),
    },
    {
      accessorKey: "identifier",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Identifier
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("identifier")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href={`/customers/update/${payment.id}`}>Update</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleDeleteCustomer(payment.id)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const [customers, setCustomers] = useState<Customer[]>([])
  const [updateCustomerId, setUpdateCustomerId] = useState<number | null>(null)
  const [deleteCustomerId, setDeleteCustomerId] = useState<number | null>(null)

  useEffect(() => {
    api.get("/customer").then((response) => {
      setCustomers(response.data)
    })
  }, [])

  // Update
  const handleUpdateCustomer = (id: number) => {
    setUpdateCustomerId(id)
  }

  // Delete
  const handleDeleteCustomer = async (id: number) => {
    setDeleteCustomerId(id)
  }
  const handleConfirmDelete = async () => {
    try {
      if (deleteCustomerId !== null) {
        await api.delete(`/customer/${deleteCustomerId}`)
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

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Button variant="outline" className="ml-auto">
          <Link href="/customers/register">Register New Customer</Link>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <CustomerDeleteConfirmationModal
            isOpen={deleteCustomerId !== null}
            onClose={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* Pagination */}
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div> */}
      </div>
    </div>
  )
}
