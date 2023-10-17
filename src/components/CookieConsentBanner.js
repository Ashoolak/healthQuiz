import React from 'react';
import CookieConsent from 'react-cookie-consent';

class CookieConsentBanner extends React.Component {
  constructor(props) {
    super(props);
    this.cookieRef = React.createRef();
  }

  handleDeclineAndClose = () => {
    this.cookieRef.current.decline();
  };

  render() {
    const {
      commonStyles,
      buttonStyles,
      settingsTextButtonStyles,
      declineButtonStyles,
      blockingStyles,
      closeXStyle,
      hiddenButtonStyle,
    } = this.stylesAndComponents();

    switch (this.props.type) {
      case 1:
        return (
          <CookieConsent
            location="center"
            overlay={true}
            style={blockingStyles}
            buttonStyle={buttonStyles}
            buttonText="Accept"
          >
            This website uses cookies to enhance the user experience.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={() => window.open('/cookie-settings', '_blank')}
            >
              Cookie Settings
            </button>
            .
          </CookieConsent>
        );

      case 2:
        return (
          <CookieConsent
            location="center"
            overlay={true}
            style={blockingStyles}
            buttonStyle={buttonStyles}
            declineButtonStyle={declineButtonStyles}
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Reject"
          >
            This website uses cookies to enhance the user experience.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={() => window.open('/cookie-settings', '_blank')}
            >
              Cookie Settings
            </button>
            .
          </CookieConsent>
        );
      case 3:
        return (
          <CookieConsent
            ref={this.cookieRef}
            location="bottom"
            overlay={false}
            style={commonStyles}
            buttonStyle={buttonStyles}
            buttonText="Accept"
          >
            This website uses cookies to enhance the user experience.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={() => window.open('/cookie-settings', '_blank')}
            >
              Cookie Settings
            </button>
            .
            <span style={closeXStyle} onClick={this.handleDeclineAndClose}>
              ×
            </span>
          </CookieConsent>
        );

      case 4:
        return (
          <CookieConsent
            location="bottom"
            overlay={false}
            style={commonStyles}
            buttonStyle={buttonStyles}
            declineButtonStyle={declineButtonStyles}
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Reject"
          >
            This website uses cookies to enhance the user experience.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={() => window.open('/cookie-settings', '_blank')}
            >
              Cookie Settings
            </button>
            .
            <span style={closeXStyle} onClick={this.handleDeclineAndClose}>
              ×
            </span>
          </CookieConsent>
        );

      case 5:
        return (
          <CookieConsent
            ref={this.cookieRef} // Ensure the ref is set here
            location="bottom"
            overlay={false}
            style={commonStyles}
            buttonStyle={hiddenButtonStyle}
            buttonText=" "
          >
            This website uses cookies to enhance the user experience.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={() => window.open('/cookie-settings', '_blank')}
            >
              Cookie Settings
            </button>
            .
            <span style={closeXStyle} onClick={this.handleDeclineAndClose}>
              ×
            </span>
          </CookieConsent>
        );

      default:
        return null;
    }
  }

  stylesAndComponents = () => {
    const commonStyles = {
      background: '#2B373B',
      fontSize: '1rem',
      padding: '20px',
    };

    const blockingStyles = {
      ...commonStyles,
      zIndex: 9999,
      borderRadius: '20px',
      position: 'fixed',
      top: '5%',
      left: '5%',
      width: '90%',
      height: '90%', // Kept it at 90%
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    };

    const closeXStyle = {
      position: 'absolute',
      top: '2px', // Adjusted from '5px' to '2px'
      right: '5px',
      cursor: 'pointer',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    };

    const buttonStyles = {
      backgroundColor: '#3498db',
      color: 'white',
      fontSize: '1rem',
      padding: '10px 25px', // Increased right padding
      borderRadius: '15px',
      margin: '0 10px', // Adjusted margin for right spacing
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };

    const declineButtonStyles = {
      ...buttonStyles,
      backgroundColor: '#7f8c8d',
    };

    const settingsTextButtonStyles = {
      background: 'none',
      color: 'white',
      fontSize: '1rem',
      textDecoration: 'underline',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '5px',
      marginRight: '10px', // Added right margin for spacing
    };

    const hiddenButtonStyle = {
      background: '#2B373B', // match the background color
      border: 'none',
      padding: 0,
      margin: 0,
      width: '1px', // minimize the width
      height: '1px', // minimize the height
    };

    return {
      commonStyles,
      buttonStyles,
      settingsTextButtonStyles,
      hiddenButtonStyle,
      declineButtonStyles,
      blockingStyles,
      closeXStyle,
    };
  };
}

export default CookieConsentBanner;
