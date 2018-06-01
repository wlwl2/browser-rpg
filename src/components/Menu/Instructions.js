import React, {Component} from 'react'

class Instructions extends Component {
  render () {
    return (
      <div className="instructions">
        <p className="instructions__desktop-only">ESC: MENU</p>
        <p className="instructions__mobile-only">Tap screen with 3 fingers to open MENU.</p>
        <p className="instructions__desktop-only"><a href="https://github.com/wlwl2/browser-rpg">Source</a></p>
        <p className="instructions__desktop-only"><a href="https://wlwl2.com">wlwl2</a></p>
      </div>
    )
  }
}

export default Instructions
