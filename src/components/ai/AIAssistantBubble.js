/**
 * @typedef {Object} AIAssistantBubbleProps
 * @property {string} message - The message to display.
 * @property {Date} timestamp - The timestamp of the message.
 */

/**
 * @param {AIAssistantBubbleProps} props
 */
const AIAssistantBubble = ({ message, timestamp }) => {
  return (
    <div>
      <p>{message}</p>
      <span>{timestamp.toLocaleString()}</span>
    </div>
  );
};

export default AIAssistantBubble;