/**
 * Return instance of BaseError
 * @param {string} message
 */
class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;

    Error.captureStackTrace(this);
  }
}

export default BaseError;
