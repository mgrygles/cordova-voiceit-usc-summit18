function VoiceItCordova(credentials) {
    this.apiKey = credentials.apiKey;
    this.apiToken = credentials.apiToken;
    cordova.exec(function(){
      console.log('VoiceIt SDK initialized');
    }, null, "VoiceItCordova", "init", [credentials.apiKey, credentials.apiToken, credentials.themeColor ? credentials.themeColor : "#FBC132"]);
}

// USER API CALLS
VoiceItCordova.prototype.getAllUsers = function(callback) {
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "getAllUsers", []);
};

VoiceItCordova.prototype.createUser = function(callback) {
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "createUser", []);
};

VoiceItCordova.prototype.checkUserExists = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "checkUserExists", [options.userId]);
};

VoiceItCordova.prototype.deleteUser = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "deleteUser", [options.userId]);
};

VoiceItCordova.prototype.getGroupsForUser = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "getGroupsForUser", [options.userId]);
};

// GROUP API CALLS
VoiceItCordova.prototype.getAllGroups = function(callback) {
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "getAllGroups", []);
};

VoiceItCordova.prototype.getGroup = function(options, callback) {
  if(options.groupId == undefined || options.groupId === ""){
    callback("groupId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "getGroup", [options.groupId]);
};

VoiceItCordova.prototype.createGroup = function(options, callback) {
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "createGroup", [options.description]);
};

VoiceItCordova.prototype.addUserToGroup = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.groupId == undefined || options.groupId === ""){
    callback("groupId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "addUserToGroup", [options.groupId, options.userId]);
};

VoiceItCordova.prototype.removeUserFromGroup = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.groupId == undefined || options.groupId === ""){
    callback("groupId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "removeUserFromGroup", [options.groupId, options.userId]);
};

VoiceItCordova.prototype.deleteGroup = function(options, callback) {
  if(options.groupId == undefined || options.groupId === ""){
    callback("groupId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "deleteGroup", [options.groupId]);
};

// ENROLLMENT API CALLS

VoiceItCordova.prototype.getAllEnrollmentsForUser = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "getAllEnrollmentsForUser", [options.userId]);
};

VoiceItCordova.prototype.deleteEnrollment = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.enrollmentId == undefined || options.enrollmentId === ""){
    callback("enrollmentId required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "deleteEnrollment", [options.userId, options.enrollmentId.toString()]);
};

VoiceItCordova.prototype.createVoiceEnrollment = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.contentLanguage == undefined || options.contentLanguage === ""){
    callback("contentLanguage required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "createVoiceEnrollment", [options.userId, options.contentLanguage]);
};

VoiceItCordova.prototype.encapsulatedVideoEnrollUser = function(options, enrollmentsCancelledCallback, enrollmentsCompletedCallback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.contentLanguage == undefined || options.contentLanguage === ""){
    callback("contentLanguage required");
    return;
  }
  if(options.phrase == undefined || options.phrase === ""){
    callback("phrase required");
    return;
  }
  cordova.exec(function(completedOrNot){
    if(completedOrNot === "Enrollments Cancelled"){
      enrollmentsCancelledCallback();
    }
    if(completedOrNot === "Enrollments Completed"){
      enrollmentsCompletedCallback();
    }
  }, null, "VoiceItCordova", "encapsulatedVideoEnrollUser", [options.userId, options.contentLanguage, options.phrase]);
};

// Verification API Calls

VoiceItCordova.prototype.voiceVerification = function(options, callback) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.contentLanguage == undefined || options.contentLanguage === ""){
    callback("contentLanguage required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "voiceVerification", [options.userId, options.contentLanguage]);
};

VoiceItCordova.prototype.encapsulatedVideoVerification = function(options, verificationCancelled, verificationCompleted) {
  if(options.userId == undefined || options.userId === ""){
    callback("userId required");
    return;
  }
  if(options.contentLanguage == undefined || options.contentLanguage === ""){
    callback("contentLanguage required");
    return;
  }
  if(options.phrase == undefined || options.phrase === ""){
    callback("phrase required");
    return;
  }
  cordova.exec(function(jsonResult){
    if(jsonResult === "Verification Cancelled"){
      verificationCancelled();
    } else {
      verificationCompleted(JSON.parse(jsonResult));
    }
  }, null, "VoiceItCordova", "encapsulatedVideoVerification", [options.userId, options.contentLanguage, options.phrase]);
};

// Identication API Calls

VoiceItCordova.prototype.voiceIdentication = function(options, callback) {
  if(options.groupId == undefined || options.groupId === ""){
    callback("groupId required");
    return;
  }
  if(options.contentLanguage == undefined || options.contentLanguage === ""){
    callback("contentLanguage required");
    return;
  }
  cordova.exec(function(jsonResult){
    callback(JSON.parse(jsonResult));
  }, null, "VoiceItCordova", "voiceIdentication", [options.groupId, options.contentLanguage]);
};

window.VoiceItAPITwo = VoiceItCordova;
