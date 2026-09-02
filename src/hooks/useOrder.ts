import { createContext, useContext } from 'react'
import type { OrderStep } from '../types'

export type OrderState = {
  open: boolean
  step: OrderStep
  locationId: string | null
  itemId: string | null
  quantity: number
  guestName: string
  confirmed: boolean
}

export type OrderContextValue = {
  order: OrderState
  openOrder: (itemId?: string) => void
  closeOrder: () => void
  setStep: (step: OrderStep) => void
  setLocationId: (id: string) => void
  setItemId: (id: string) => void
  setQuantity: (value: number) => void
  setGuestName: (value: string) => void
  confirm: () => void
  reset: () => void
}

export const initialOrder: OrderState = {
  open: false,
  step: 'location',
  locationId: null,
  itemId: null,
  quantity: 1,
  guestName: '',
  confirmed: false,
}

export const OrderContext = createContext<OrderContextValue | null>(null)

export function useOrder(): OrderContextValue {
  const value = useContext(OrderContext)
  if (!value) {
    throw new Error('useOrder must be used within OrderProvider')
  }
  return value
}
