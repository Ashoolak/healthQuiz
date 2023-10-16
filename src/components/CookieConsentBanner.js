import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieConsentBanner = ({ type }) => {
  const commonStyles = {
    background: '#2B373B',
    fontSize: '1rem',
    padding: '20px',
  };

  const buttonStyles = {
    backgroundColor: '#3498db', // Accept and setting button color
    color: 'white',
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '20px',
    margin: '0 5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const settingsTextButtonStyles = {
    background: 'none', // No background
    color: 'white', // Color to match the text
    fontSize: '1rem', // Same font size as the text
    textDecoration: 'underline', // Underlined
    border: 'none', // No border
    cursor: 'pointer', // Cursor change on hover
  };

  const invisibleButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#2B373B',
    color: '#2B373B',
    border: 'none',
    cursor: 'default',
  };

  const declineButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#7f8c8d', // Decline button color
  };

  const blockingStyles = {
    ...commonStyles,
    zIndex: 9999,
    borderRadius: '20px', // Rounded edges
    position: 'fixed',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column', // Changed to column for better alignment and spacing
  };

  switch (type) {
    case 1:
      return (
        <CookieConsent
          location="center"
          overlay={true}
          style={blockingStyles}
          buttonStyle={buttonStyles}
          buttonText="Accept"
          onAccept={() => {
            // Handle acceptance
          }}
        >
          This website uses cookies to enhance the user experience.{' '}
          <button
            style={settingsTextButtonStyles}
            onClick={() => window.open('/cookie-settings', '_blank')}
          >
            Settings
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
          onAccept={() => {
            // Handle acceptance
          }}
        >
          This website uses cookies to enhance the user experience.{' '}
          <button
            style={settingsTextButtonStyles}
            onClick={() => window.open('/cookie-settings', '_blank')}
          >
            Settings
          </button>
          .
        </CookieConsent>
      );

    case 3:
      return (
        <CookieConsent
          location="bottom"
          overlay={false}
          style={{
            ...commonStyles,
          }}
          buttonStyle={buttonStyles}
          buttonText="Accept"
          onAccept={() => {
            // Handle acceptance
          }}
        >
          This website uses cookies to enhance the user experience.{' '}
          <button
            style={settingsTextButtonStyles}
            onClick={() => window.open('/cookie-settings', '_blank')}
          >
            Settings
          </button>
          .
        </CookieConsent>
      );

    case 4:
      return (
        <CookieConsent
          location="bottom"
          overlay={false}
          style={commonStyles}
          buttonStyle={buttonStyles}
          buttonText="Accept"
          enableDeclineButton
          declineButtonStyle={declineButtonStyles}
          declineButtonText="Reject"
          onAccept={() => {
            // Handle acceptance
          }}
          onDecline={() => {
            // Handle rejection
          }}
        >
          This website uses cookies to enhance the user experience.{' '}
          <button
            style={settingsTextButtonStyles}
            onClick={() => window.open('/cookie-settings', '_blank')}
          >
            Settings
          </button>
          .
        </CookieConsent>
      );

    case 5:
      return (
        <CookieConsent
          location="bottom"
          overlay={false}
          style={commonStyles}
          buttonStyle={invisibleButtonStyles} // Apply the invisible button styles
          buttonText="I understand"
        >
          This website uses cookies to enhance the user experience. For
          settings, see our{' '}
          <button
            style={settingsTextButtonStyles}
            onClick={() => window.open('/cookie-settings', '_blank')}
          >
            Settings
          </button>
          .
        </CookieConsent>
      );

    default:
      return null;
  }
};

export default CookieConsentBanner;
