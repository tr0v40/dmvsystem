import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { CaretSortIcon } from "@radix-ui/react-icons"

export type UsersColuns = {
  id: number
  email: string
  passwordHash: string
  level: number
  isActivated: boolean
  createdAt: string
  updatedAt: string
  customerId: number
}
const fields = [
  "id",
  "email",
  "passwordHash",
  "level",
  "isActivated",
  "createdAt",
  "updatedAt",
  "customerId",
]

export const columns: ColumnDef<UsersColuns>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="capitalize"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
]
