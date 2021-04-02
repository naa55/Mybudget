import React, {useReducer} from "react"
import './App.css';
import TodoList from "./TodoList"
import {v4 as uuidv4} from "uuid"

export const ProductItem = React.createContext()

function App() {

  const intialBughetList = (state, action) => {
    switch(action.type) {
      case "delete": 
        const filterBughet = state.items.filter((item) => item.id !== action.payload.id)
        return {...state, items:filterBughet}
          case "add": 

          const [addText, addPrice] = action.payload
          const newBughet = {id: uuidv4(), product: addText, price: +addPrice}
          const addProduct  = [...state.items, newBughet]
          return {...state, items: addProduct}
            default:
          return bughetList
    }
  }


 const bughetList  = {
    items: [
      {id: 1, product: "cat", price: 200},
      {id: 2, product: "cap", price: 300},
      {id: 3, product: "hat", price: 400}
    ]
   
  }
  console.log(bughetList)

  const [state, dispatch] = useReducer(intialBughetList, bughetList)

  

  return (
    <div className="App">
      <ProductItem.Provider value={{state, dispatch}}>
      <TodoList/>
      </ProductItem.Provider>
    </div>
  );
}

export default App;
