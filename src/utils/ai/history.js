import { aiStorage } from './storage.js';

const HISTORY_KEY = 'ai_chat_history';
const MAX_HISTORY_LENGTH = 100;

/**
 * @typedef {Object} AIMessage
 * @property {'user' | 'assistant' | 'system'} role - The role of the message sender.
 * @property {string} content - The content of the message.
 * @property {string} [timestamp] - The timestamp of the message (optional).
 */

/**
 * Saves a message to the chat history.
 *
 * @param {AIMessage} message - The message to save.
 */
export function saveMessageToHistory(message) {
  const history = getMessageHistory();
  history.push({
    ...message,
    timestamp: new Date().toISOString()
  });

  // Keep only the last MAX_HISTORY_LENGTH messages
  if (history.length > MAX_HISTORY_LENGTH) {
    history.shift();
  }

  aiStorage.set(HISTORY_KEY, history);
}

/**
 * Retrieves the chat message history.
 *
 * @returns {AIMessage[]} - The array of chat messages.
 */
export function getMessageHistory() {
  return aiStorage.get(HISTORY_KEY) || [];
}

/**
 * Clears the chat message history.
 */
export function clearMessageHistory() {
  aiStorage.delete(HISTORY_KEY);
}

/**
 * Retrieves the most recent topics from the chat history.
 *
 * @returns {string[]} - An array of recent topics.
 */
export function getRecentTopics() {
  const history = getMessageHistory();
  const topics = new Set();

  history.forEach(message => {
    if (message.role === 'user') {
      const words = message.content.toLowerCase().split(' ');
      words.forEach(word => {
        if (word.length > 3) {
          topics.add(word);
        }
      });
    }
  });

  return Array.from(topics).slice(-5);
}