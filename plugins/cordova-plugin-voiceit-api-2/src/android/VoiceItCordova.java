package com.voiceittech.plugins;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.Manifest;
import android.content.pm.PackageManager;
import android.media.MediaRecorder;
import android.media.MediaPlayer;
import android.media.AudioManager;
import android.os.Build;
import android.os.CountDownTimer;
import android.os.Environment;
import android.content.Context;
import android.app.Activity;
import java.util.UUID;
import java.io.FileInputStream;
import java.io.File;
import java.io.IOException;
import android.os.AsyncTask;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import java.io.ByteArrayOutputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.FileOutputStream;
import java.io.DataOutputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import com.loopj.android.http.JsonHttpResponseHandler;
import org.json.JSONObject;
import cz.msebera.android.httpclient.Header;
public class VoiceItCordova extends CordovaPlugin {

  private VoiceItAPI2 myVoiceIt;
  private static final int REQUEST_CODE_ENABLE_PERMISSION = 55433;
  private CallbackContext cordovaCallback;
  private String cordovaAction = "";
  private JSONArray cordovaArgs;

  @Override
  public boolean execute(String action,final JSONArray args, final CallbackContext callbackContext) throws JSONException{
    Context context = cordova.getActivity().getApplicationContext();
    Activity activity = cordova.getActivity();
    Integer seconds;
    this.cordovaAction = action;
    this.cordovaArgs = args;
    this.cordovaCallback = callbackContext;

    if (action.equals("init")) {
      myVoiceIt = new VoiceItAPI2(args.getString(0), args.getString(1), args.getString(2));
      callbackContext.success("Successfully Initialized");
      return true;
    }

    if (action.equals("getAllUsers")) {
      myVoiceIt.getAllUsers(new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("createUser")) {
      myVoiceIt.createUser(new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }


    if (action.equals("checkUserExists")) {
      myVoiceIt.checkUserExists(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("deleteUser")) {
      myVoiceIt.deleteUser(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("getGroupsForUser")) {
      myVoiceIt.getGroupsForUser(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("getAllGroups")) {
      myVoiceIt.getAllGroups(new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("getGroup")) {
      myVoiceIt.getGroup(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("createGroup")) {
      myVoiceIt.createGroup(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("addUserToGroup")) {
      myVoiceIt.addUserToGroup(args.getString(0), args.getString(1), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("removeUserFromGroup")) {
      myVoiceIt.removeUserFromGroup(args.getString(0), args.getString(1), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("deleteGroup")) {
      myVoiceIt.deleteGroup(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("getAllEnrollmentsForUser")) {
      myVoiceIt.getAllEnrollmentsForUser(args.getString(0), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("deleteEnrollment")) {
      myVoiceIt.deleteEnrollmentForUser(args.getString(0), args.getString(1), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            callbackContext.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                callbackContext.success(errorResponse.toString());
            }
        }
      });
      return true;
    }

    if (action.equals("createVoiceEnrollment")){
        try{
            requestPermissionForVoiceEnrollment();
        } catch(Exception ex){ }
      return true;
    }

    if (action.equals("voiceVerification")) {
        try{
            requestPermissionForVoiceVerification();
        } catch(Exception ex){ }
      return true;
    }

    if (action.equals("voiceIdentification")) {
      try{
          requestPermissionForVoiceIdentification();
      } catch(Exception ex){ }
      return true;
    }

    if (action.equals("encapsulatedVideoEnrollUser")) {
    myVoiceIt.encapsulatedVideoEnrollment(activity, args.getString(0), args.getString(1), args.getString(2), new JsonHttpResponseHandler() {
    @Override
    public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
        callbackContext.success("Enrollments Completed");
    }
    @Override
    public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
        if (errorResponse != null) {
            callbackContext.success("Enrollments Cancelled");
        }
    }
    });
    return true;
    }

    if (action.equals("encapsulatedVideoVerification")) {
    myVoiceIt.encapsulatedVideoVerification(activity, args.getString(0), args.getString(1), args.getString(2), new JsonHttpResponseHandler() {
    @Override
    public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
        callbackContext.success(response.toString());
    }
    @Override
    public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
        if (errorResponse != null) {
            callbackContext.success("Verification Cancelled");
        }
    }
    });
    return true;
    }

    return false;
}

    private void requestPermissionForVoiceEnrollment() throws Exception {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            callCreateVoiceEnrollment();
        } else if (cordova.hasPermission(Manifest.permission.RECORD_AUDIO)) {
            callCreateVoiceEnrollment();
        } else {
            cordova.requestPermission(this, REQUEST_CODE_ENABLE_PERMISSION, Manifest.permission.RECORD_AUDIO);
        }
    }

    private void requestPermissionForVoiceVerification() throws Exception {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            callVoiceVerification();
        } else if (cordova.hasPermission(Manifest.permission.RECORD_AUDIO)) {
            callVoiceVerification();
        } else {
            cordova.requestPermission(this, REQUEST_CODE_ENABLE_PERMISSION, Manifest.permission.RECORD_AUDIO);
        }
    }

    private void requestPermissionForVoiceIdentification() throws Exception {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            callVoiceIdentification();
        } else if (cordova.hasPermission(Manifest.permission.RECORD_AUDIO)) {
            callVoiceIdentification();
        } else {
            cordova.requestPermission(this, REQUEST_CODE_ENABLE_PERMISSION, Manifest.permission.RECORD_AUDIO);
        }
    }

    private void callCreateVoiceEnrollment() throws JSONException {
        myVoiceIt.createVoiceEnrollment(cordovaArgs.getString(0), cordovaArgs.getString(1), new JsonHttpResponseHandler() {
            @Override
            public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
                cordovaCallback.success(response.toString());
            }
            @Override
            public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
                if (errorResponse != null) {
                    cordovaCallback.success(errorResponse.toString());
                }
            }
        });
    }

    private void callVoiceVerification() throws JSONException {
        myVoiceIt.voiceVerification(cordovaArgs.getString(0), cordovaArgs.getString(1), new JsonHttpResponseHandler() {
            @Override
            public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
                cordovaCallback.success(response.toString());
            }
            @Override
            public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
                if (errorResponse != null) {
                    cordovaCallback.success(errorResponse.toString());
                }
            }
        });
    }

    private void callVoiceIdentification() throws JSONException {
      myVoiceIt.voiceIdentification(cordovaArgs.getString(0), cordovaArgs.getString(1), new JsonHttpResponseHandler() {
        @Override
        public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
            cordovaCallback.success(response.toString());
        }
        @Override
        public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse){
            if (errorResponse != null) {
                cordovaCallback.success(errorResponse.toString());
            }
        }
      });
    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
        if (cordovaCallback == null) {
            return;
        }

        if (permissions != null && permissions.length > 0) {
            //Call checkPermission again to verify
            boolean hasAllPermissions = cordova.hasPermission(Manifest.permission.RECORD_AUDIO);
            if(cordovaAction.equals("createVoiceEnrollment")){
                callCreateVoiceEnrollment();
            } else if (cordovaAction.equals("voiceVerification")){
                callVoiceVerification();
            } else if (cordovaAction.equals("voiceIdentification")){
                callVoiceIdentification();
            }
        } else {
            JSONObject jsonError = new JSONObject();
            jsonError.put("Error", "Record Audio Permission Denied");
            cordovaCallback.success(jsonError.toString());
        }
    }
}
