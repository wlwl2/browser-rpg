// TileSelector
import React from 'react'

const TileSelector = (props) => {
  return (
    <section
      className="tile-selector"
      data-hidden="yes"
      data-menuid="editormenu"
      data-startmenuid="4"
    >
      <div>Tile selector</div>
      <div className="tile-list">
        <div className="tree3" draggable="true" data-entity-number="0"></div>
        <div className="tree3" draggable="true" data-entity-number="1"></div>
        <div className="monster" draggable="true" data-entity-number="3"></div>
        <div className="tree3" draggable="true" data-entity-number="4"></div>
        <div className="tree3" draggable="true" data-entity-number="5"></div>
      </div>
      <div className="currently-selected-tile">
        Currently selected tile:
      </div>
      <button className="reset-tile-button">Reset currently selected tile</button>
      <div className="back-to-start">Back to Start Menu</div>
    </section>
  )
}

export default TileSelector
