/**
 * Structured Logging Module for Moltcraft
 * 
 * Provides consistent, structured logging across the application.
 * Includes timestamp, severity level, and context.
 */

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, '..', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'moltcraft.log');

// Ensure logs directory exists
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// ANSI color codes for console output
const COLORS = {
  RESET: '\x1b[0m',
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  GREEN: '\x1b[32m',
  GRAY: '\x1b[90m'
};

const LOG_LEVELS = {
  DEBUG: { level: 0, color: COLORS.GRAY, name: 'DEBUG' },
  INFO: { level: 1, color: COLORS.BLUE, name: 'INFO' },
  WARN: { level: 2, color: COLORS.YELLOW, name: 'WARN' },
  ERROR: { level: 3, color: COLORS.RED, name: 'ERROR' }
};

const MIN_LOG_LEVEL = process.env.LOG_LEVEL || 'INFO';

/**
 * Get current timestamp in ISO format
 * @returns {string} Timestamp
 */
function getTimestamp() {
  return new Date().toISOString();
}

/**
 * Format log message for console output
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} context - Additional context
 * @returns {string} Formatted message
 */
function formatConsoleLog(level, message, context) {
  const levelInfo = LOG_LEVELS[level];
  const timestamp = getTimestamp();
  const contextStr = Object.keys(context).length > 0 
    ? ` ${JSON.stringify(context)}`
    : '';
  
  return `${COLORS.GRAY}[${timestamp}]${COLORS.RESET} ${levelInfo.color}${level}${COLORS.RESET} ${message}${contextStr}`;
}

/**
 * Format log message for file output
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} context - Additional context
 * @returns {string} Formatted message
 */
function formatFileLog(level, message, context) {
  const timestamp = getTimestamp();
  return JSON.stringify({
    timestamp,
    level,
    message,
    context,
    pid: process.pid
  });
}

/**
 * Write log to file
 * @param {string} formatted - Formatted log message
 */
function writeToFile(formatted) {
  try {
    fs.appendFileSync(LOG_FILE, formatted + '\n');
  } catch (error) {
    console.error('Failed to write to log file:', error.message);
  }
}

/**
 * Log message at specified level
 * @param {string} level - Log level (DEBUG, INFO, WARN, ERROR)
 * @param {string} message - Log message
 * @param {Object} context - Additional context object
 */
function log(level, message, context = {}) {
  // Check if this log level should be output
  if (LOG_LEVELS[level].level < LOG_LEVELS[MIN_LOG_LEVEL].level) {
    return;
  }

  // Format and output to console
  const consoleLog = formatConsoleLog(level, message, context);
  if (level === 'ERROR') {
    console.error(consoleLog);
  } else if (level === 'WARN') {
    console.warn(consoleLog);
  } else {
    console.log(consoleLog);
  }

  // Format and write to file
  const fileLog = formatFileLog(level, message, context);
  writeToFile(fileLog);
}

/**
 * Log debug message
 * @param {string} message - Message
 * @param {Object} context - Context
 */
function debug(message, context = {}) {
  log('DEBUG', message, context);
}

/**
 * Log info message
 * @param {string} message - Message
 * @param {Object} context - Context
 */
function info(message, context = {}) {
  log('INFO', message, context);
}

/**
 * Log warning message
 * @param {string} message - Message
 * @param {Object} context - Context
 */
function warn(message, context = {}) {
  log('WARN', message, context);
}

/**
 * Log error message
 * @param {string} message - Message
 * @param {Object} context - Context or error
 */
function error(message, context = {}) {
  // If context is an Error, extract message and stack
  if (context instanceof Error) {
    context = {
      error: context.message,
      stack: context.stack.split('\n').slice(0, 3)
    };
  }
  log('ERROR', message, context);
}

/**
 * Create a logger instance scoped to a specific context
 * @param {string} namespace - Logger namespace (e.g., 'socket.io', 'database')
 * @returns {Object} Logger instance
 */
function createLogger(namespace) {
  return {
    debug: (msg, ctx = {}) => debug(msg, { namespace, ...ctx }),
    info: (msg, ctx = {}) => info(msg, { namespace, ...ctx }),
    warn: (msg, ctx = {}) => warn(msg, { namespace, ...ctx }),
    error: (msg, ctx = {}) => error(msg, { namespace, ...ctx })
  };
}

module.exports = {
  debug,
  info,
  warn,
  error,
  createLogger,
  
  // For testing/setup
  _formatConsoleLog: formatConsoleLog,
  _formatFileLog: formatFileLog,
  _getTimestamp: getTimestamp
};
