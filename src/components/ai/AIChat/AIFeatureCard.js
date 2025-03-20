import React from 'react';

/**
 * @typedef {Object} AIFeatureCardProps
 * @property {string} title - The title of the feature card.
 * @property {string} description - The description of the feature card.
 * @property {React.ReactNode} icon - The icon to display.
 */

/**
 * @param {AIFeatureCardProps} props
 */
const AIFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="ai-feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AIFeatureCard;