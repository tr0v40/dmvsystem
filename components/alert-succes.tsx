import { RocketIcon } from "@radix-ui/react-icons"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertSucces({ props }: { title: string; description: string }) {
  return (
    <Alert variant="default">
      <RocketIcon className="h-6 w-6" />
      <AlertTitle className="text-orange-700">{props.title}</AlertTitle>
      <AlertDescription className="text-orange-600">
        {props.description}
      </AlertDescription>
    </Alert>
  )
}
