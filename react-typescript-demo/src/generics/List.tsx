import React from 'react'

type ListProps<T> = {
    items:T[];
    showValue:(val:T)=> void
}

const List =<T extends {}> ({items,showValue}:ListProps<T>) => {
  return (
    <div>
        <h1>List of different types</h1>
        <ul>
        {items.map((item,index)=> {
            return(
                <React.Fragment key={index}>
                    <li>{String(item)}</li>
                    <button onClick={()=> showValue(item)}>Show info</button>
                </React.Fragment>
            )
        })}
        </ul>
    </div>
  )
}

export default List