import React from 'react'
import { Route, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="nav">
      <Link to="/">New Search</Link>
      </nav>
      <p className="title">Stock Information Finder</p>
    </header>
  )
}
