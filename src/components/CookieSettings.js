import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

const CookieSettings = ({ onClose }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const handleToggleExpand = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className="bg-white border-2 border-blue-500 p-8 max-w-md w-full text-left overflow-auto max-h-full"
        style={{ maxHeight: '90vh' }}
      >
        <h1 className="font-bold text-lg mb-6">Manage Cookie Settings</h1>
        <div className="space-y-6">
          {renderCookieSection(
            'Necessary',
            handleToggleExpand,
            expandedSections,
            false
          )}
          {renderCookieSection(
            'Advertising',
            handleToggleExpand,
            expandedSections
          )}
          {renderCookieSection(
            'Analytics',
            handleToggleExpand,
            expandedSections
          )}
          {renderCookieSection(
            'Personalization',
            handleToggleExpand,
            expandedSections
          )}
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded"
              onClick={onClose}
            >
              Confirm my choices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderCookieSection = (
  title,
  handleToggleExpand,
  expandedSections,
  isToggleSwitch = true
) => {
  const descriptions = {
    Necessary:
      "These cookies are needed for essential functions such as security, network management, and accessibility. Standard cookies can't be switched off.",
    Advertising:
      'These cookies are set by us and/or our partners and help us build a profile of your interests based on your browsing profile. If you accept these cookies, you will be shown advertisements that match your interests as you browse other sites.',
    Analytics:
      "These cookies gather information such as how many users are using our site or which pages are popular to help us improve user experience. Switching off these cookies means we can't gather information to improve the experience.",
    Personalization:
      'These cookies help us personalize your experience on our website with features like relevant content or information you could be interested in (e.g. based on what you previously viewed). These cookies will be set by us or by third party providers who add features to our sites.',
  };

  return (
    <div className="border-b border-blue-500 bg-gray-300">
      <div className="flex justify-between items-center px-4 py-4 bg-gray-300">
        <button className="px-2 py-1" onClick={() => handleToggleExpand(title)}>
          {expandedSections[title] ? '-' : '+'}
        </button>
        <span>{title} Cookies</span>
        {isToggleSwitch ? (
          <ToggleSwitch />
        ) : (
          <span className="text-gray-500">Always Active</span>
        )}
      </div>
      {expandedSections[title] && (
        <div className="pl-4 bg-gray-200 px-4 py-2">
          <p>{descriptions[title]}</p>
        </div>
      )}
    </div>
  );
};

export default CookieSettings;
