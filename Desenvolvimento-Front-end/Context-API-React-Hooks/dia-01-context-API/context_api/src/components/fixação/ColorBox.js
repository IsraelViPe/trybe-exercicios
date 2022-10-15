
import React from 'react';
import '../fixação/styles/box.css'
import MyContext from '../../context/MyContext';

class ColorBox extends React.Component {
  render() {
    const { changeColor } = this.context;
    return(
      <button
        onClick={ changeColor}
        type="button"
        className="box"
        style={ { backgroundColor: 'blue' } }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;