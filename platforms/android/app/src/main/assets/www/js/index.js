
const VOICE_IT_API_TWO_KEY = "key_1ebd9b3ff5f84586ab2edcc3deed05a0";
const VOICE_IT_API_TWO_TOKEN = "tok_548714bba96c4daa9e33c3b4d60871c6";
const VOICE_IT_CONTENT_LANGUAGE = "en-US";
const VOICE_IT_PHRASE = "my face and voice identify me";

function disableActivityButtons(){
  var buttons = document.getElementsByClassName('activityButtons');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('disabled');
  }
}

function enableActivityButtons(){
  var buttons = document.getElementsByClassName('activityButtons');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('disabled');
  }
}

function setMessage(message){
  var noShowElements = document.querySelector('.noShow');
  if(noShowElements){
    noShowElements.classList.remove('noShow');
  }
  var messageLabel = document.getElementById('messageLabel');
  messageLabel.innerHTML = message;
}

function doVoiceEnrollment(){
  var voiceEnrollmentButton = document.getElementById('createVoiceEnrollment');
  var counter = 5;
  voiceEnrollmentButton.classList.add('disabled');
  var phrase = VOICE_IT_PHRASE;
  var prompt = 'Please say <br/>"' + phrase + '"<br/> (' + counter + 's)';
  setMessage(prompt);
  var timerRef = setInterval(
    function(){
      counter--;
      prompt = 'Please say <br/>"' + phrase + '"<br/> (' + counter + 's)';
      setMessage(prompt);
      if(counter == 0){
        clearInterval(timerRef);
        setMessage('<div class=\'ui active centered massive inline loader\'></div>');
      }
  }, 1000);

  app.myVoiceIt.createVoiceEnrollment({
    userId : app.currentUserId,
    contentLanguage : VOICE_IT_CONTENT_LANGUAGE}, function(jsonResponse){
    setMessage(JSON.stringify(jsonResponse));
    voiceEnrollmentButton.classList.remove('disabled');
  });
}

function doVoiceVerification(){
  var voiceVerificationButton = document.getElementById('voiceVerification');
  var counter = 5;
  voiceVerificationButton.classList.add('disabled');
  var phrase = VOICE_IT_PHRASE;
  var prompt = 'Please say <br/>"' + phrase + '"<br/> (' + counter + 's)';
  setMessage(prompt);
  var timerRef = setInterval(
    function(){
      counter--;
      prompt = 'Please say <br/>"' + phrase + '"<br/> (' + counter + 's)';
      setMessage(prompt);
      if(counter == 0){
        clearInterval(timerRef);
        setMessage('<div class=\'ui active centered massive inline loader\'></div>');
      }
  }, 1000);

  app.myVoiceIt.voiceVerification({
    userId : app.currentUserId,
    contentLanguage : VOICE_IT_CONTENT_LANGUAGE}, function(jsonResponse){
    setMessage(JSON.stringify(jsonResponse));
    voiceVerificationButton.classList.remove('disabled');
  });
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.getElementById('userButton').addEventListener('click', function(){
          if(app.currentUserId == ""){
            app.myVoiceIt.createUser(function(jsonResponse){
              app.currentUserId = jsonResponse.userId;
              var userButton = document.getElementById('userButton');
              NativeStorage.setItem("currentUserId", app.currentUserId, function(obj){
                setMessage('UserId Set to ' + app.currentUserId);
                userButton.innerHTML = "Delete User";
                enableActivityButtons();
              }, function(error){

              });
            });
          } else {
            app.myVoiceIt.deleteUser({userId:app.currentUserId},function(jsonResponse){
              app.currentUserId = "";
              NativeStorage.remove("currentUserId", function(obj){
                setMessage(jsonResponse.message);
                userButton.innerHTML = "Create User";
                disableActivityButtons();
              }, function(error){

              });
            });
          }
        });

        document.getElementById('createVoiceEnrollment').addEventListener('click', function(){
          console.log('createVoiceEnrollment called');
            doVoiceEnrollment();
        });

        document.getElementById('voiceVerification').addEventListener('click', function(){
          console.log('voiceVerification called');
            doVoiceVerification();
        });

        document.getElementById('enrollUser').addEventListener('click', function(){
            app.myVoiceIt.encapsulatedVideoEnrollUser({
              userId : app.currentUserId,
              contentLanguage : VOICE_IT_CONTENT_LANGUAGE,
              'phrase' : VOICE_IT_PHRASE
            }, function(){
              // Enrollments Cancelled
              setMessage("Enrollments Cancelled");
            }, function(){
              // Enrollments Completed
              setMessage("Enrollments Completed");
            });
        } );

        document.getElementById('verifyUser').addEventListener('click', function(){
            app.myVoiceIt.encapsulatedVideoVerification({
              userId : app.currentUserId,
              contentLanguage : VOICE_IT_CONTENT_LANGUAGE,
              'phrase' : VOICE_IT_PHRASE
            }, function(){
              // Verification Cancelled
              setMessage("Verification Cancelled");
            }, function(jsonResponse){
              if(jsonResponse.responseCode === "SUCC"){
                setMessage('Voice Confidence :' + jsonResponse.voiceConfidence + ', Face Confidence : ' + jsonResponse.faceConfidence);
              } else {
                setMessage(jsonResponse.message);
              }
            });
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        window.LaunchScreen.hide();
        window.screen.orientation.lock('portrait');
        this.receivedEvent('deviceready');
        app.myVoiceIt = new VoiceItAPITwo({ apiKey : VOICE_IT_API_TWO_KEY, apiToken: VOICE_IT_API_TWO_TOKEN, themeColor: '#FBC132' });
        app.currentUserId = "";
        NativeStorage.getItem("currentUserId", function(currentUserId){
          app.currentUserId = currentUserId;
          setMessage('UserId is ' + app.currentUserId);
          var userButton = document.getElementById('userButton');
          userButton.innerHTML = "Delete User";
        }, function(error){
          app.currentUserId = "";
          disableActivityButtons();
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();
