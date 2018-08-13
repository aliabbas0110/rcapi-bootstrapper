'use strict'



const responseHandles = require('../utils/responseHandles');
const Device = reqiore('../models/device')

module.exports.Create = (event, context, callback) => {

  const deviceId = "deviceId";
  const environment = {api: "apiendpoint"};
  const devicObject = {deviceId, environment};
  const device = new Device (deviceObject);


  const message = "Create function called";

  const response = responseHandles.responseHandleOK(message)
  console.log(`From handlers.device; ${response}`);
  return callback(null,response)

}


module.exports.Remove = (event, context, callback) => {
  console.log(event.pathParameters.id)
  const deviceId = event.pathParameters.id
  const message = `deviceDelete function called for ${deviceId}`;
  const response = responseHandles.responseHandleOK(message)
  console.log(response);
  return callback(null,response)

}



module.exports.getAll = (event, context, callback) => {
  const message = "deviceGetAll function called";
  const response = responseHandles.responseHandleOK(message)
  console.log(response);
  return callback(null,response)

}


module.exports.getOne = (event, context, callback) => {
  console.log(event.pathParameters.id)
  const deviceId = event.pathParameters.id
  const message = `deviceGetOne function called for ${deviceId}`;
  const response = responseHandles.responseHandleOK(message)
  console.log(response);
  return callback(null,response)

}


module.exports.Update = (event, context, callback) => {
  console.log(event.pathParameters.id)
  const deviceId = event.pathParameters.id
  const message = `deviceUpdate function called for ${deviceId}`;
  const response = responseHandles.responseHandleOK(message)
  console.log(response);
  return callback(null,response)

}
