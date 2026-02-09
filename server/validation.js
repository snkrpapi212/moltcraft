/**
 * Input Validation Module for Moltcraft
 * 
 * Provides comprehensive validation for all user inputs to prevent:
 * - Memory exhaustion attacks
 * - Coordinate injection
 * - Data corruption
 * - Rate limiting bypass
 */

const MAX_COORDINATE = 200;
const MIN_HEIGHT = -50;
const MAX_HEIGHT = 256;
const MAX_MESSAGE_LENGTH = 500;
const COLOR_REGEX = /^#[0-9A-Fa-f]{6}$/;

/**
 * Validate block coordinates
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate (height)
 * @param {number} z - Z coordinate
 * @param {number} maxDistance - Maximum distance from origin (default: 200)
 * @throws {Error} If coordinates are invalid
 * @returns {boolean} True if valid
 */
function validateCoordinates(x, y, z, maxDistance = MAX_COORDINATE) {
  // Check for finite numbers
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
    throw new Error('Coordinates must be finite numbers');
  }

  // Check bounds to prevent memory exhaustion
  if (Math.abs(x) > maxDistance || Math.abs(z) > maxDistance) {
    throw new Error(`Coordinates must be within ±${maxDistance}`);
  }

  // Check height bounds
  if (y < MIN_HEIGHT || y > MAX_HEIGHT) {
    throw new Error(`Height must be between ${MIN_HEIGHT} and ${MAX_HEIGHT}`);
  }

  // Ensure integers (block coordinates are discrete)
  if (!Number.isInteger(x) || !Number.isInteger(z)) {
    throw new Error('X and Z coordinates must be integers');
  }

  return true;
}

/**
 * Validate hex color value
 * @param {string} color - Color in hex format (#RRGGBB)
 * @throws {Error} If color is invalid
 * @returns {boolean} True if valid
 */
function validateColor(color) {
  if (typeof color !== 'string' || !COLOR_REGEX.test(color)) {
    throw new Error('Color must be in #RRGGBB format');
  }
  return true;
}

/**
 * Validate block type
 * @param {string} type - Block type name
 * @throws {Error} If type is invalid
 * @returns {boolean} True if valid
 */
function validateBlockType(type) {
  const validTypes = [
    'stone', 'dirt', 'grass', 'wood', 'leaves', 'glass', 
    'brick', 'sand', 'cobblestone', 'torch', 'water', 'snow'
  ];
  
  if (!validTypes.includes(type)) {
    throw new Error(`Invalid block type. Must be one of: ${validTypes.join(', ')}`);
  }
  return true;
}

/**
 * Validate agent name
 * @param {string} name - Agent name
 * @throws {Error} If name is invalid
 * @returns {boolean} True if valid
 */
function validateAgentName(name) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new Error('Agent name must be a non-empty string');
  }
  
  if (name.length > 50) {
    throw new Error('Agent name must be 50 characters or less');
  }
  
  // Prevent control characters
  if (!/^[a-zA-Z0-9\s\-_]*$/.test(name)) {
    throw new Error('Agent name can only contain alphanumeric characters, spaces, hyphens, and underscores');
  }

  return true;
}

/**
 * Validate chat message
 * @param {string} message - Chat message
 * @throws {Error} If message is invalid
 * @returns {boolean} True if valid
 */
function validateMessage(message) {
  if (typeof message !== 'string' || message.length === 0) {
    throw new Error('Message must be a non-empty string');
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`Message must be ${MAX_MESSAGE_LENGTH} characters or less`);
  }

  return true;
}

/**
 * Validate agent position
 * @param {Object} position - Position object {x, y, z}
 * @throws {Error} If position is invalid
 * @returns {boolean} True if valid
 */
function validatePosition(position) {
  if (typeof position !== 'object' || position === null) {
    throw new Error('Position must be an object');
  }

  if (!Number.isFinite(position.x) || !Number.isFinite(position.y) || !Number.isFinite(position.z)) {
    throw new Error('Position coordinates must be finite numbers');
  }

  // Allow larger range for agent movement than block placement
  const agentMaxDistance = 500;
  if (Math.abs(position.x) > agentMaxDistance || Math.abs(position.z) > agentMaxDistance) {
    throw new Error(`Position must be within ±${agentMaxDistance}`);
  }

  if (position.y < -100 || position.y > 512) {
    throw new Error('Position Y must be between -100 and 512');
  }

  return true;
}

/**
 * Validate block placement request
 * @param {Object} data - Block data
 * @throws {Error} If data is invalid
 * @returns {boolean} True if valid
 */
function validateBlockPlacement(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Block data must be an object');
  }

  // Validate coordinates
  validateCoordinates(data.x, data.y, data.z);

  // Validate color
  validateColor(data.color || '#8B4513');

  // Validate type if provided
  if (data.type) {
    validateBlockType(data.type);
  }

  return true;
}

/**
 * Validate block removal request
 * @param {Object} data - Block data (needs x, y, z)
 * @throws {Error} If data is invalid
 * @returns {boolean} True if valid
 */
function validateBlockRemoval(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Block data must be an object');
  }

  validateCoordinates(data.x, data.y, data.z);
  return true;
}

/**
 * Create a middleware for Socket.io that validates and catches errors
 * @param {Function} handler - Original event handler
 * @param {Function} validator - Validation function
 * @returns {Function} Wrapped handler that validates before executing
 */
function createValidatedHandler(validator, handler) {
  return function(data) {
    try {
      validator(data);
      handler.call(this, data);
    } catch (error) {
      console.warn(`Validation error: ${error.message}`, { data, socket: this.id });
      // Optionally emit error to client
      if (this.emit) {
        this.emit('error:validation', { message: error.message });
      }
    }
  };
}

module.exports = {
  validateCoordinates,
  validateColor,
  validateBlockType,
  validateAgentName,
  validateMessage,
  validatePosition,
  validateBlockPlacement,
  validateBlockRemoval,
  createValidatedHandler,
  
  // Constants
  MAX_COORDINATE,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MAX_MESSAGE_LENGTH
};
