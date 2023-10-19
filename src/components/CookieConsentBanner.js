import React from 'react';
import CookieConsent from 'react-cookie-consent';
import ToggleSwitch from './ToggleSwitch';

class CookieConsentBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingPref: false,
    };
    this.cookieRef = React.createRef();
  }

  handleDeclineAndClose = () => {
    if (this.cookieRef.current && this.cookieRef.current.decline) {
      this.cookieRef.current.decline();
    }
  };

  handleOpenSettingPref = () => {
    this.handleDeclineAndClose();
    console.log('hello mr ashkan yazdi zadeh');
    this.setState({ showSettingPref: true });
  };

  handleCloseSettingPref = () => {
    this.setState({ showSettingPref: false });
  };

  renderSettingPref() {
    if (!this.state.showSettingPref) return null;

    return (
      <div className="fixed items-center w-1/2 h-1/2 bg-black bg-opacity-70 flex items-center justify-center z-1000">
        <div className="bg-white p-5 rounded-lg w-1/2 h-1/2">
          <h2>Cookie Settings</h2>
          <ToggleSwitch
            label="Strictly Necessary Cookies"
            defaultChecked={true}
          />
          <ToggleSwitch label="Performance Cookies" defaultChecked={true} />
          <ToggleSwitch label="Targeting Cookies" defaultChecked={true} />

          <button onClick={this.handleCloseSettingPref}>Apply</button>
        </div>
      </div>
    );
  }

  render() {
    const modal = this.renderSettingPref();

    if (this.state.showSettingPref) {
      console.log('how are you');
      return modal;
    }

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
          <>
            {modal}
            <CookieConsent
              location="center"
              overlay={true}
              style={blockingStyles}
              buttonStyle={buttonStyles}
              buttonText="Accept"
            >
              This website uses cookies to make the website work properly,
              enhance performance, create personalized functionality, provide us
              with website use information, and deliver targeted ads. You can
              accept cookies using the button below, or you can customize your
              preferences using the « Cookie Settings » button.{' '}
              <button
                style={settingsTextButtonStyles}
                onClick={this.handleOpenSettingPref}
              >
                Cookie Settings
              </button>
              .
            </CookieConsent>
          </>
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
            This website uses cookies to make the website work properly, enhance
            performance, create personalized functionality, provide us with
            website use information, and deliver targeted ads. You can accept or
            reject cookies using the buttons below, or you can customize your
            preferences using the « Cookie Settings » button. Choosing to «
            Reject » cookies will reject all cookies except those that are
            required to maintain minimal necessary website functionality.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={this.handleOpenSettingPref}
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
            Cookies on this website. This website uses cookies to make the
            website work properly, enhance performance, create personalized
            functionality, provide us with website use information, and deliver
            targeted ads. By continuing to use this website, you accept our use
            of cookies. You can customize your preferences using the « Cookie
            Settings » button.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={this.handleOpenSettingPref}
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
            Cookies on this website. This website uses cookies to make the
            website work properly, enhance performance, create personalized
            functionality, provide us with website use information, and deliver
            targeted ads. By continuing to use this website, you accept our use
            of cookies. You can reject cookies using the button below, or you
            can customize your preferences using the « Cookie Settings » button.
            Choosing to « Reject » cookies will reject all cookies except those
            that are required to maintain minimal necessary website
            functionality.{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={this.handleOpenSettingPref}
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
            Cookies on this website. This website uses cookies to make the
            website work properly, enhance performance, create personalized
            functionality, provide us with website use information, and deliver
            targeted ads. By continuing to use this website, you accept our use
            of cookies. You can customize your preferences by modifying the{' '}
            <button
              style={settingsTextButtonStyles}
              onClick={this.handleOpenSettingPref}
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
