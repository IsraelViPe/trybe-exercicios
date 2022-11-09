import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TextField extends Component {
  render() {
   const {handleError, title,type, name, value, onChange} = this.props;

   
    return (
        <label>
            {title}
            <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      handleError={handleError}
      />
      {!value? 'campo obrigatório': ''}
      {value <0 ? 'numero negativo': ""}
        </label>
      
    );
  }
}

TextField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};