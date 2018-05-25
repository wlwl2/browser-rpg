import React from 'react'

const HelpControls = (props) => {
  return (
    <section
      className="help-controls"
      data-hidden="yes"
      data-menuid="helpmenu"
      data-startmenuid="3"
    >
      <p>To open/close the menu, press the escape key.</p>
      <p>Use the arrow keys to move your character.</p>
      <p>Press Enter to select a menu item.</p>
      <div className="back-to-start">Back to Start Menu</div>
    </section>
  )
}

export default HelpControls