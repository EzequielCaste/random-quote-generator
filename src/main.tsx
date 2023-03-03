import React from 'react'
import { Route } from "wouter";
import ReactDOM from 'react-dom/client'
import Quotes from './Quotes'
import './index.css'
import List from './layout/List';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Route path="/">
      <Quotes />
    </Route>
    <Route path="/list/:author">
        {(params) => <List author={params.author ?? ''} />}
      </Route>
  </React.StrictMode>,
)
