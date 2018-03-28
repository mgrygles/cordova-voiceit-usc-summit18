#import <Cordova/CDV.h>
#import <AVFoundation/AVFoundation.h>
#import <Foundation/Foundation.h>
#import <MobileCoreServices/MobileCoreServices.h>
#import <Cordova/CDVPlugin.h>
#import "VoiceItAPITwo.h"

@interface VoiceItCordova : CDVPlugin {}

@property VoiceItAPITwo * myVoiceIt;
// Constructor
- (void)init:(CDVInvokedUrlCommand*)command;

//USER API CALLS
- (void)getAllUsers:(CDVInvokedUrlCommand*)command;
- (void)createUser:(CDVInvokedUrlCommand*)command;
- (void)checkUserExists:(CDVInvokedUrlCommand*)command;
- (void)deleteUser:(CDVInvokedUrlCommand*)command;
- (void)getGroupsForUser:(CDVInvokedUrlCommand*)command;

//GROUP API CALLS
- (void)getAllGroups:(CDVInvokedUrlCommand*)command;
- (void)getGroup:(CDVInvokedUrlCommand*)command;
- (void)createGroup:(CDVInvokedUrlCommand*)command;
- (void)addUserToGroup:(CDVInvokedUrlCommand*)command;
- (void)removeUserFromGroup:(CDVInvokedUrlCommand*)command;
- (void)deleteGroup:(CDVInvokedUrlCommand*)command;

//ENROLLMENT API CALLS
- (void)getAllEnrollmentsForUser:(CDVInvokedUrlCommand*)command;
- (void)deleteEnrollment:(CDVInvokedUrlCommand*)command;
- (void)createVoiceEnrollment:(CDVInvokedUrlCommand*)command;
- (void)createVideoEnrollment:(CDVInvokedUrlCommand*)command;
- (void)encapsulatedVideoEnrollUser:(CDVInvokedUrlCommand*)command;

//Verification API CALLS
- (void)voiceVerification:(CDVInvokedUrlCommand*)command;
- (void)videoVerification:(CDVInvokedUrlCommand*)command;
- (void)encapsulatedVideoVerification:(CDVInvokedUrlCommand*)command;

// Identification API Calls
//MISCELLANEOUS
- (void)voiceIdentification:(CDVInvokedUrlCommand*)command;
@end
