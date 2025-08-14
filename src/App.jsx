/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pform from "./component/Productform";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
      <Pform/>
      </div>
    </>
  )
}

export default App
