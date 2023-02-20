import React, {FC, useState, useRef} from 'react'

const EventsExample:FC = () => {

    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log (value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

  return (
    <div>
        <input value={value} onChange={changeHandler} type='text' placeholder='Управляемый'/>
        <input ref = {inputRef} type='text' placeholder='Неуправляемый'/>

        <button onClick={clickHandler}>Клик</button>
    </div>
  )
}

export default EventsExample;