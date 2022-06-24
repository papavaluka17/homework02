import { useEffect, useState } from "react"

export default function Counter({ startvalue, increase }) {
    const [inputValue, setinputValue] = useState((startvalue || 0), (increase || 5))

    useEffect(() => {
        if (startvalue) {
            setinputValue(startvalue)
        } else {
            setinputValue(0)
        }
    }, [startvalue]);

    const increment = () => {
        setinputValue(inputValue + (increase || 5))
    }

    const decrement = () => {
        if (inputValue > 0) {
            setinputValue(inputValue - (increase || 5))   
        } else {
            alert('Sorry, Zero Limit Reached))')
            setinputValue(0);
        }
    }


    return (
        <div className="counter">
            <input type="number" value={inputValue} onChange={(e) => setinputValue(parseInt(e.target.value))} className="input" />
            <div className="counterbtn">
                <button className="addition" onClick={increment}>+</button>
                <button className="subtraction" onClick={decrement}>-</button>
            </div>
        </div>
    )
}