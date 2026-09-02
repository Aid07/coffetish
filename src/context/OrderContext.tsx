import { useMemo, useState, type ReactNode } from 'react'
import { OrderContext, initialOrder, type OrderState } from '../hooks/useOrder'
import type { OrderStep } from '../types'

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderState>(initialOrder)

  const value = useMemo(
    () => ({
      order,
      openOrder: (itemId?: string) => {
        setOrder((prev) => ({
          ...initialOrder,
          open: true,
          itemId: itemId ?? prev.itemId,
          step: itemId ? 'location' : 'location',
        }))
      },
      closeOrder: () => {
        setOrder((prev) => ({ ...prev, open: false }))
      },
      setStep: (step: OrderStep) => {
        setOrder((prev) => ({ ...prev, step }))
      },
      setLocationId: (id: string) => {
        setOrder((prev) => ({ ...prev, locationId: id }))
      },
      setItemId: (id: string) => {
        setOrder((prev) => ({ ...prev, itemId: id }))
      },
      setQuantity: (quantity: number) => {
        setOrder((prev) => ({ ...prev, quantity: Math.min(8, Math.max(1, quantity)) }))
      },
      setGuestName: (guestName: string) => {
        setOrder((prev) => ({ ...prev, guestName }))
      },
      confirm: () => {
        setOrder((prev) => ({ ...prev, confirmed: true, step: 'done' }))
      },
      reset: () => setOrder(initialOrder),
    }),
    [order],
  )

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}
