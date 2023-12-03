"use client"

// form
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import api from "../../../api"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AlertSucces } from "@/components/alert-succes"
import { AlertError } from "@/components/alert-error"

interface Customer {
  name: string
  identifier: string
}

const customerSchema = z.object({
  name: z.string().min(3),
  identifier: z.string().min(3),
})

export default function UpdateCustomers({ props }: { id: string }) {
  const [customer, setCustomer] = useState<Customer[]>([])
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    api.get(`/customer/${props.id}`).then((response) => {
      setCustomer(response.data)
    })
  }, [props.id])

  const form = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      identifier: "",
    },
    values: {
      name: customer.name,
      identifier: customer.identifier,
    },
    resetOptions: {
      keepDirtyValues: true,
      keepErrors: true,
    },
  })

  function onSubmit(values: z.infer<typeof customerSchema>) {
    api.put(`/customer/${props.id}`, values).then((response) => {
      if (response.status === 200) {
        setIsSuccess(true)
      } else {
        setIsSuccess(false)
      }
    })
  }

  return (
    <Form {...form}>
      <div>
        {isSuccess === true && (
          <AlertSucces
            props={{
              title: "Succes",
              description: "Customer updated successfully",
            }}
          />
        )}
        {isSuccess === false && (
          <AlertError
            props={{
              title: "Error",
              description: "Customer not updated",
            }}
          />
        )}
      </div>
      <form className="space-y-14" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-700 text-lg">Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription className="text-orange-800">
                Enter Customer Name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-700 text-lg">
                Identifier
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription className="text-orange-800">
                Enter Customer Identifier
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
