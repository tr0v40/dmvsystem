import api from "../../../../api"

export const deleteCustomer = async (customerId: string) => {
  await api.delete(`/customer/${customerId}`)
}
