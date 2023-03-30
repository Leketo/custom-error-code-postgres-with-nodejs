async function handleErrors(error, functionName) {
    let sqlState = error.code;
    let sqlMessage = error.message;
    let hint = `${sqlMessage} in function ${functionName}`;
    if (!sqlState.startsWith('A')) {
      sqlState = '99999';
      sqlMessage = 'Could not process request';
      hint = `${sqlMessage} in function ${functionName}`;
    }
    throw new Error(hint);
  }

module.exports = handleErrors;
