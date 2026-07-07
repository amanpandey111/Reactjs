// this is all upto type for types
type ProductType = {
  id: string,
  name: string,
}

// Now Here We Will describe the type for notification assignment
type NotificationType = {
  id: number,
  type: string,
  description: string,
}

export type { ProductType, NotificationType }