import { useState } from 'react'
import './App.css'
import Navbar from'./components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
import Item from './components/Item/ItemDetail'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div>
        <Navbar />
        <ItemListContainer />
        <Item />
        <ProductCatalog />
      </div>
  );
}

export default App
