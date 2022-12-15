import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'


import {BrowserRouter, createBrowserRouter,RouterProvider,} from "react-router-dom";
import { TodoApp } from './08-useReducer/TodoApp'
//import { CallBackHook } from './06-memos/CallBackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import { MemoHook } from './06-memos/MemoHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { SimplreForm } from './02-useEffect/SimplreForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
//import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/*<React.StrictMode>*/}
    <MainApp />
  {/*</React.StrictMode>*/}

  </BrowserRouter>
)