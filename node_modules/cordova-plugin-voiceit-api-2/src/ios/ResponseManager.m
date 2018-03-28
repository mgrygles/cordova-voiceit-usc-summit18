//
//  ResponseManager.m
//  TestingVoiceItAPI2iOSSDKCode
//
//  Created by Armaan Bindra on 10/3/17.
//  Copyright © 2017 VoiceIt Technologies LLC. All rights reserved.
//

#import "ResponseManager.h"

@implementation ResponseManager
+(NSString *)getMessage:(NSString*) name{
    NSString *finalString = NSLocalizedStringFromTableInBundle(name, @"Prompts",[NSBundle mainBundle], nil);
    return finalString;
}

+(NSString *)getMessage:(NSString*) name variable:(NSString*)variable{
    NSString *finalString = [[NSString alloc] initWithFormat: NSLocalizedStringFromTableInBundle(name, @"Prompts", [NSBundle mainBundle], nil) ,variable];
    return finalString;
}
@end
