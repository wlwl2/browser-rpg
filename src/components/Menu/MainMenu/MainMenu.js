import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import About from './About/About'

class MainMenu extends Component {
  render () {
    return (
      <div class="menu" data-hidden="no">
        <div class="menu__container">
          <div class="menu__vertical-middle">
            <div class="menu__horizontal-center">
              <About />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// take this component html and put it on the page (in the DOM)
ReactDOM.render(<MainMenu />, document.querySelector('.container'))
