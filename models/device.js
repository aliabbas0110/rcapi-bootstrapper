
'use strict';

class Device {
  constructor (deviceId, environment){

    console.log("From models.device; device created")
    this._deviceId = deviceId
    this._environment = environment

  }
  static getAll(){
    const devices = {}
    return devices
  }

}
