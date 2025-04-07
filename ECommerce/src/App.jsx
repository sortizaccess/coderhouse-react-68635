import { useState } from 'react'
import { Header, ItemListContainer } from "./components";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Greetings!" style={{ color: "red", margin: "10px" }} />
    </>
  )
}

export default App
