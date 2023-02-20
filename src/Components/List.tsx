import React from 'react'
import '../styles/main.css'

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T> (props: ListProps<T>)  {
  return (
    <div className='user_item'>
        {props.items.map(props.renderItem)}
    </div>
  )
}
