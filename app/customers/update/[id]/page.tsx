"use client"

import UpdateCustomers from "./form"


export default function CustomerRegister({ params }: { id: string }) {
  return (
    <main className="mt-10 px-12 spacey-14">
      <div>
        <h1 className="text-2xl lg:text-5xl font-bold text-center text-orange-700">
          Update Customer
        </h1>
      </div>
      <div>
        <UpdateCustomers props={params} />
      </div>
    </main>
  )
}
