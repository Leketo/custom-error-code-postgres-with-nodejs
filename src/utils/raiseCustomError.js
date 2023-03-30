async function raiseCustomError(errorCode) {
    const result = await pool.query('SELECT error_message FROM custom_error_messages WHERE error_code = $1', [errorCode]);
    if (result.rowCount > 0) {
      const errorMessage = result.rows[0].error_message;
      throw new Error(errorMessage);
    } else {
      throw new Error('Unknown error occurred');
    }
  }

  module.exports = raiseCustomError;
