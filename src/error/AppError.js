class AppError extends Error {
    constructor({ message, errorCode = '', statusCode = 400, data = [], internalError } = {}) {
      super();
      if (!!internalError) console.log({ internalError });
      this.code = errorCode;
      this.message = message;
      this.status_code = statusCode;
      this.data = data;
    }
  }

  module.exports = AppError;