// CookieConsentBanner.js
import React, { useState, useEffect } from 'react';
import CookieSettings from './CookieSettings';

const CookieConsentBanner = ({ type }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accept');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'reject');
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem('cookieConsent', 'closed');
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
    localStorage.setItem('cookieConsent', 'accept');
  };

  const handleCloseSettings = () => {
    setShowBanner(false);
    setShowSettings(false);
  };

  if (type === 6) return null;

  const isBottomBanner = type >= 3 && type <= 5;

  return (
    <div>
      {showSettings ? (
        <CookieSettings onClose={handleCloseSettings} />
      ) : (
        showBanner && (
          <div
            className={`fixed ${
              isBottomBanner ? 'bottom-0' : 'top-0 bottom-auto'
            } left-0 right-0 p-4 text-left z-50 ${
              isBottomBanner
                ? 'bg-white border-blue-500 border'
                : 'bg-transparent'
            }`}
            style={{
              maxWidth: '100%',
            }}
          >
            <div
              className={`mx-auto ${
                type === 1 || type === 2
                  ? 'rounded-md shadow-lg bg-white p-8 border-blue-500 border sm:w-1/2 w-3/4 overflow-y-auto'
                  : ''
              } ${isBottomBanner ? 'w-4/5' : 'bg-white w-1/3 h-1/4'}`}
              style={{
                opacity: type === 1 || type === 2 ? '1' : '',
                maxHeight: isBottomBanner ? '30vh' : '490px',
                overflowY: 'auto',
              }}
            >
              {isBottomBanner && (
                <button
                  className="p-auto absolute top-4 right-4 text-gray-500 text-lg font-bold"
                  onClick={handleClose}
                >
                  ×
                </button>
              )}
              <h1 className="font-bold text-lg text-gray-700 mb-4">
                Cookies on this website
              </h1>
              <p className="text-gray-600 mb-4">
                This website uses cookies to make the website work properly,
                enhance performance, create personalized functionality, provide
                us with website use information, and deliver targeted ads.
              </p>
              {(type === 1 || type === 2) && (
                <p className="text-gray-600 mb-4">
                  You can accept cookies using the button below, or you can
                  customize your preferences using the Cookie Settings.
                </p>
              )}
              {type === 2 && (
                <p className="text-gray-600 mb-4">
                  You can accept or reject cookies using the buttons below, or
                  you can customize your preferences using the Cookie Settings.
                  Choosing to "Reject" cookies will reject all cookies except
                  those that are required to maintain minimal necessary website
                  functionality.
                </p>
              )}
              {type === 3 && (
                <p className="text-gray-600 mb-4">
                  By continuing to use this website, you accept our use of
                  cookies. You can customize your preferences by modifying the{' '}
                  <span className="text-gray-600">cookie settings</span>.
                </p>
              )}
              {type === 4 && (
                <p className="text-gray-600 mb-4">
                  By continuing to use this website, you accept our use of
                  cookies. You can reject cookies using the button below, or you
                  can customize your preferences by modifying the{' '}
                  <span className="text-gray-600">cookie settings</span>.
                  Choosing to "Reject" cookies will reject all cookies except
                  those that are required to maintain minimal necessary website
                  functionality.
                </p>
              )}
              {type === 5 && (
                <p className="text-gray-600 mb-4">
                  By continuing to use this website, you accept our use of
                  cookies. You can customize your preferences by modifying the{' '}
                  <span
                    className="text-blue-500 underline cursor-pointer"
                    onClick={handleOpenSettings}
                  >
                    cookie settings
                  </span>
                  .
                </p>
              )}
              <div className="flex flex-row justify-center mx-auto space-x-2 sm:space-x-4 ">
                {(type === 1 || type === 2 || type === 3 || type === 4) && (
                  <button
                    className="bg-white text-blue-500 border-blue-500 border sm:px-4 py-1 px-2 sm:py-2 rounded-md shadow-md text-xs sm:text-base sm:w-40 w-20 h-10"
                    onClick={handleOpenSettings}
                  >
                    Cookie Settings
                  </button>
                )}
                {(type === 1 || type === 2 || type === 3 || type === 4) && (
                  <div className="flex space-x-2 items-center">
                    <button
                      className="bg-blue-500 text-white sm:px-4 py-1 px-2 sm:py-2 rounded-md shadow-md text-xs sm:text-base sm:w-40 w-20 h-10"
                      onClick={handleAccept}
                    >
                      Accept
                    </button>
                    {(type === 2 || type === 4) && (
                      <button
                        className="bg-blue-500 text-white sm:px-4 py-1 px-2 sm:py-2 rounded-md shadow-md text-xs sm:text-base sm:w-40 w-20 h-10"
                        onClick={handleReject}
                      >
                        Reject
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CookieConsentBanner;
