import React from 'react'

const About = (props) => {
  return (
    <section
      className="about"
      data-hidden="yes"
      data-menuid="aboutmenu"
      data-startmenuid="5"
    >
      <a href="https://github.com/wlwl2/browser-rpg">
        Source
      </a>
      <a href="https://wlwl2.com">
        wlwl2
      </a>
      <div className="back-to-start">
        Back to Start Menu
      </div>
    </section>
  )
}

export default About
