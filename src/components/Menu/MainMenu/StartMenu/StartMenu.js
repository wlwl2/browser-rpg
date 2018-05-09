import React from 'react'

const StartMenu = (props) => {
  return (
    <section className="start-menu" data-hidden="no">
      <div className="start-menu__title">
        Browser RPG
      </div>
      <ul className="start-menu__menu">
        <li tabIndex='0'>New Game</li>
        <li tabIndex='0'>Continue</li>
        <li tabIndex='0'>Help/Controls</li>
        <li tabIndex='0'>Game Editor</li>
        <li tabIndex='0'>About</li>
      </ul>
      <div className="start-menu__controls">
        <p>Use arrow keys to navigate the menu.</p>
        <p>Press Enter to select a menu item.</p>
        <p>Press Escape to cancel or close the menu.</p>
      </div>
    </section>
  )
}

export default StartMenu
