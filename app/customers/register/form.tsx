"use client"
import * as z from "zod"
import api from "../../api"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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

const customerSchema = z.object({
  name: z.string().min(3),
  identifier: z.string().min(3),
})

export default function CustomerForm() {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const form = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      identifier: "",
    },
  })

  function onSubmit(values: z.infer<typeof customerSchema>) {
    console.log(values)
    api.post("/customer", values).then((response) => {
      console.log(response)
      if (response.status === 201) {
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
              description: "Customer create successfully",
            }}
          />
        )}
        {isSuccess === false && (
          <AlertError
            props={{
              title: "Error",
              description: "Customer create failed",
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
