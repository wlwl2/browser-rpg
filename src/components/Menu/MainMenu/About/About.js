import React, {Component} from 'react'

class About extends Component {
  goToLink (event) {
    // event.preventDefault()
    const link = event.target.getAttribute('href')
    window.location.href = link
  }

  render () {
    return (
      <section
        className="about"
        data-hidden="yes"
        data-menuid="aboutmenu"
        data-startmenuid="5"
      >
        <p>
          <a
            href="https://github.com/wlwl2/browser-rpg"
            onTouchEnd={this.goToLink}
          >
            Source
          </a>
        </p>
        <p>
          <a
            href="https://wlwl2.com"
            onTouchEnd={this.goToLink}
          >
            wlwl2
          </a>
        </p>
        <div
          data-selected='yes'
          className="back-to-start"
          data-startmenuid="0"
        >
          Back to Start Menu
        </div>
      </section>
    )
  }
}

export default About
