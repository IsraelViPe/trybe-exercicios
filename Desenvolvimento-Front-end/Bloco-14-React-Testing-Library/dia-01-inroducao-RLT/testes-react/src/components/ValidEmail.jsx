import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ValidEmail extends Component {
  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };

  render() {
    const { email} = this.props;
    return (
      <div>
        <h2 data-testid="emailText"> {`Email: ${email}`}</h2>
         {
           email && (
             <h3 data-testid="id-is-email-valid"
             className={(this.verifyEmail(email) ? 'normal' : 'red')} >
               {(this.verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
             </h3>
           )
         }
      </div>
    );
  }
}

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};
