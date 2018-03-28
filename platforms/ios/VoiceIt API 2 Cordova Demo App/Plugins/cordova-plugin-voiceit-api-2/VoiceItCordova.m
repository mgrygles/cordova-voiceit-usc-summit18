#import "VoiceItCordova.h"
#import <Cordova/CDV.h>

@implementation VoiceItCordova

//#define RECORDINGS_FOLDER [NSHomeDirectory() stringByAppendingPathComponent:@"Library/NoCloud"]

// Constructor
- (void)init:(CDVInvokedUrlCommand*)command{
  NSString * apiKey = [command.arguments objectAtIndex:0];
  NSString * apiToken = [command.arguments objectAtIndex:1];
  NSMutableDictionary * styles = [[NSMutableDictionary alloc] init];
  [styles setObject:[command.arguments objectAtIndex:2] forKey:@"kThemeColor"];
  [styles setObject:@"default" forKey:@"kIconStyle"];
  _myVoiceIt = [[VoiceItAPITwo alloc] init:self.viewController apiKey:apiKey apiToken:apiToken styles: styles];
  CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Successfully Initialized"];
  [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

//USER API CALLS
- (void)getAllUsers:(CDVInvokedUrlCommand*)command{
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt getAllUsers:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)createUser:(CDVInvokedUrlCommand*)command{
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt createUser:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)checkUserExists:(CDVInvokedUrlCommand*)command{
   NSString * userId = [command.arguments objectAtIndex:0];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt checkUserExists:userId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)deleteUser:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt deleteUser:userId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)getGroupsForUser:(CDVInvokedUrlCommand*)command{
   NSString * userId = [command.arguments objectAtIndex:0];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt getGroupsForUser:userId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

//GROUP API CALLS
- (void)getAllGroups:(CDVInvokedUrlCommand*)command{
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt getAllGroups:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)getGroup:(CDVInvokedUrlCommand*)command{
  NSString * groupId = [command.arguments objectAtIndex:0];
 [self.commandDelegate runInBackground:^{
   [_myVoiceIt getGroup:groupId callback:^(NSString * jsonResponse){
     CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
     [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
   }];
 }];
}

- (void)createGroup:(CDVInvokedUrlCommand*)command{
  NSString * description = [command.arguments objectAtIndex:0];
 [self.commandDelegate runInBackground:^{
   [_myVoiceIt createGroup:description callback:^(NSString * jsonResponse){
     CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
     [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
   }];
 }];
}

- (void)addUserToGroup:(CDVInvokedUrlCommand*)command{
  NSString * groupId = [command.arguments objectAtIndex:0];
  NSString * userId = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt addUserToGroup:groupId userId:userId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}
- (void)removeUserFromGroup:(CDVInvokedUrlCommand*)command{
  NSString * groupId = [command.arguments objectAtIndex:0];
  NSString * userId = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt removeUserFromGroup:groupId userId:userId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

- (void)deleteGroup:(CDVInvokedUrlCommand*)command{
  NSString * groupId = [command.arguments objectAtIndex:0];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt deleteGroup:groupId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}

//ENROLLMENT API CALLS
- (void)getAllEnrollmentsForUser:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
 [self.commandDelegate runInBackground:^{
   [_myVoiceIt getAllEnrollmentsForUser:userId callback:^(NSString * jsonResponse){
     CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
     [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
   }];
 }];
}

- (void)deleteEnrollment:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
  NSString * enrollmentId = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt deleteEnrollmentForUser:userId enrollmentId:enrollmentId callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
  }];
}
- (void)createVoiceEnrollment:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
  NSString * contentLanguage = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt createVoiceEnrollment:userId contentLanguage: contentLanguage recordingFinished:^(void){
      NSLog(@"Voice Enrollment Recording Finished, now waiting for API Call to respond");
    } callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } ];
  }];
}

- (void)encapsulatedVideoEnrollUser:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
  NSString * contentLanguage = [command.arguments objectAtIndex:1];
  NSString * phrase = [command.arguments objectAtIndex:2];
    [_myVoiceIt encapsulatedVideoEnrollUser:userId contentLanguage:contentLanguage voicePrintPhrase:phrase userEnrollmentsCancelled:^{
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Enrollments Cancelled"];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } userEnrollmentsPassed:^{
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Enrollments Completed"];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
  }];
}

//Verification API CALLS
- (void)voiceVerification:(CDVInvokedUrlCommand*)command{
  NSString * userId = [command.arguments objectAtIndex:0];
  NSString * contentLanguage = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt voiceVerification:userId contentLanguage: contentLanguage recordingFinished:^(void){
      NSLog(@"Voice Verification Recording Finished, now waiting for API Call to respond");
    } callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } ];
  }];
}

- (void)encapsulatedVideoVerification:(CDVInvokedUrlCommand*)command{
    NSString * userId = [command.arguments objectAtIndex:0];
    NSString * contentLanguage = [command.arguments objectAtIndex:1];
    NSString * phrase = [command.arguments objectAtIndex:2];
      [_myVoiceIt encapsulatedVideoVerification:userId contentLanguage:contentLanguage voicePrintPhrase:phrase userVerificationCancelled:^{
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Verification Cancelled"];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
      } userVerificationSuccessful:^(float faceConfidence ,float voiceConfidence, NSString * jsonResponse){
        CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
      } userVerificationFailed:^(float faceConfidence ,float voiceConfidence, NSString * jsonResponse){
        CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
      }];
}

// Identification API Calls
//MISCELLANEOUS
- (void)voiceIdentification:(CDVInvokedUrlCommand*)command{
  NSString * groupId = [command.arguments objectAtIndex:0];
  NSString * contentLanguage = [command.arguments objectAtIndex:1];
  [self.commandDelegate runInBackground:^{
    [_myVoiceIt voiceIdentification:groupId contentLanguage: contentLanguage recordingFinished:^(void){
      NSLog(@"Voice Identification Recording Finished, now waiting for API Call to respond");
    } callback:^(NSString * jsonResponse){
      CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:jsonResponse];
      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } ];
  }];
}
@end
