import React, { useContext, useState } from 'react'
import {ProductItem} from "./App"

const TodoList = () => {

    const [addText, setAddText] = useState("")
    const [addPrice, setAddPrice] = useState(0)

    const {state, dispatch} = useContext(ProductItem);

    const handleSubmit = (e) => {
            e.preventDefault()
            dispatch({type: "add", payload: [addText, addPrice]})
    }


    const getTotol = (item) => {
        const total = item.map((a) => a.price,)
        if(total.length === 0) {
            return `add an item`
        } else {
           return "Total: " + total.reduce((a, b) => a + b)
        }
        // return console.log(total.length)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="product" onChange = {(e) => setAddText(e.target.value)}/>
                <input type="number" placeholder="price" onChange = {(e) => setAddPrice(e.target.value)}/>
                <button type="submit" className="btn">Submit</button>
            </form>
            <div className="para">
            {state.items.map((item) => (
                <div>
            <p key={item.id}>{item.product}<span>{item.price}</span><span>Edit</span><span onClick={() => dispatch({type:"delete", payload: item})}>Delete</span></p>
                </div>
            ))}

            </div>
{console.log(state.items)} 
            <h1 >{getTotol(state.items)}</h1>   

    </div>
    )
}

export default TodoList
