//
//  Styles.h
//  Pods-VoiceItApi2IosSDK_Example
//
//  Created by Armaan Bindra on 10/12/17.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "Utilities.h"

@interface Styles : NSObject
+(NSMutableDictionary *)get;
+(void)set:(NSMutableDictionary*)styleSettings;
+(NSString *)getMainColor;
+(UIColor *)getMainUIColor;
+(CGColorRef)getMainCGColor;
+(UIColor *)getIconUIColor;
@end

