import React, {FC} from 'react'
import '../styles/main.css'

export enum CardVariant {
  outlined='outlined', 
  primary='primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode
    variant: CardVariant; 

}

const Card: FC<CardProps> = ({width, height, variant, children}) => {


  return (
    <div 
      style={{
      width, 
      height, 
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }}>
      {children}
    </div>
  )
}

export default Card;