/* eslint-disable no-unused-vars */
import React from 'react'

const navItems = [
  'Link 1',
  'Link 2',
  'Link 3',
  'Link 4',
  'Link 5',
  'Link 6',
  'Link 7'
]
const Navbar = props => {
  const { menus } = props
  return (
    <nav className='navbar navbar-expand-lg navbar-light pb-0 pt-0'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {menus.map((menu, index) => {
            return (
              <li className='nav-item' key={index}>
                <a
                  className='nav-link p-2 m-0 font-weight-bold'
                  href={menu.url}
                >
                  {menu.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
