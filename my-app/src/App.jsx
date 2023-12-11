import React, { useState } from "react"
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400">Tailwind Test</h1>
      <Card username="Rahul Singh" btnText="ClickMe" />
      <Card username="Chai or Panni"  />
    </>
  )
}

export default App
