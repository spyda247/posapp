import React from 'react'
import SidebarA from '../SidebarA/SidebarA'
import Display from '../Display/Display'
import Items from '../Items/Items'
import './Content.css'

const Content = () => {
  return (
    <div className="content">
        <SidebarA />
        <Display />
        <Items />
    </div>
  )
}

export default Content
