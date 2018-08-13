

module.exports.responseHandleOK = (message) => {
  const statusCode = 200
  const headers = {
    "Content-Type": "application/json"
  }
  const body = JSON.stringify({
    message: message || "none",
    status: "RESPONSE_STATUS_OK",
    success: true
  });

  const response = {
    statusCode,
    headers,
    body
    }
    return response;
}

module.exports.responseHandleNotFound = (message) => {
  const statusCode = 404
  const headers = {
    "Content-Type": "application/json"
  }
  const body = JSON.stringify({
    "message": message || "none",
    "status": "RESPONSE_STATUS_NOTFOUND",
    "success": "false"
  });

  const response = {
    statusCode,
    headers,
    body
  }

  return response;
}

module.exports.responseHandleUnAuthorized = (message) => {
  const statusCode = 401
  const headers = {
    "Content-Type": "application/json"
  }
  const body = JSON.stringify({
    "message": message || "none",
    "status": "RESPONSE_STATUS_UNAUTHORIZED",
    "success": "false"
  });
  const response = {
    statusCode,
    headers,
    body
    }
  return response

}



module.exports.responseHandleForbidden = (message) => {
  const statusCode = 403
  const headers = {
    "Content-Type": "application/json"
  }
  const body = JSON.stringify({
    "message": message || "none",
    "status": "RESPONSE_STATUS_FORBIDDEN",
    "success": "false"
  });
  const response = {
    statusCode,
    headers,
    body
    }
  return response

}
