import type { ItemCard } from '../types'
import { ECard } from './ECard'

interface ItemListProps {
  items: ItemCard[]
}

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <div>
      {items.map((item) => (
        <ECard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 80000}
        />
      ))}
    </div>
  )
}