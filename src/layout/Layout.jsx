import React, { Component } from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'



export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Outlet/>
      </>
    )
  }
}
