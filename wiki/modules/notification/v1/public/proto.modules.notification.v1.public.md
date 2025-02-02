# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/notification/v1/public/notification.proto](#modules_notification_v1_public_notification-proto)
    - [GetNotificationPreferenceByUserIdResponse](#modules-notification-v1-public-GetNotificationPreferenceByUserIdResponse)
    - [ListNotificationRequest](#modules-notification-v1-public-ListNotificationRequest)
    - [ListNotificationResponse](#modules-notification-v1-public-ListNotificationResponse)
    - [MarkNotificationAsReadRequest](#modules-notification-v1-public-MarkNotificationAsReadRequest)
    - [MarkNotificationAsReadResponse](#modules-notification-v1-public-MarkNotificationAsReadResponse)
    - [UpdateNotificationPreferenceRequest](#modules-notification-v1-public-UpdateNotificationPreferenceRequest)
    - [UpdateNotificationPreferenceResponse](#modules-notification-v1-public-UpdateNotificationPreferenceResponse)
  
    - [NotificationService](#modules-notification-v1-public-NotificationService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_notification_v1_public_notification-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/notification/v1/public/notification.proto



<a name="modules-notification-v1-public-GetNotificationPreferenceByUserIdResponse"></a>

### GetNotificationPreferenceByUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notification_preference | [modules.notification.v1.shared.NotificationPreference](#modules-notification-v1-shared-NotificationPreference) |  |  |






<a name="modules-notification-v1-public-ListNotificationRequest"></a>

### ListNotificationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-notification-v1-public-ListNotificationResponse"></a>

### ListNotificationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notifications | [modules.notification.v1.shared.Notification](#modules-notification-v1-shared-Notification) | repeated |  |






<a name="modules-notification-v1-public-MarkNotificationAsReadRequest"></a>

### MarkNotificationAsReadRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notification_ids | [string](#string) | repeated |  |






<a name="modules-notification-v1-public-MarkNotificationAsReadResponse"></a>

### MarkNotificationAsReadResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-notification-v1-public-UpdateNotificationPreferenceRequest"></a>

### UpdateNotificationPreferenceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fcm_token | [string](#string) | repeated |  |
| email_notification | [bool](#bool) | optional |  |
| push_notification | [bool](#bool) | optional |  |






<a name="modules-notification-v1-public-UpdateNotificationPreferenceResponse"></a>

### UpdateNotificationPreferenceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notification_preference | [modules.notification.v1.shared.NotificationPreference](#modules-notification-v1-shared-NotificationPreference) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-notification-v1-public-NotificationService"></a>

### NotificationService
Service for notification related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListNotification | [ListNotificationRequest](#modules-notification-v1-public-ListNotificationRequest) | [ListNotificationResponse](#modules-notification-v1-public-ListNotificationResponse) |  |
| MarkNotificationAsRead | [MarkNotificationAsReadRequest](#modules-notification-v1-public-MarkNotificationAsReadRequest) | [MarkNotificationAsReadResponse](#modules-notification-v1-public-MarkNotificationAsReadResponse) |  |
| UpdateNotificationPreference | [UpdateNotificationPreferenceRequest](#modules-notification-v1-public-UpdateNotificationPreferenceRequest) | [UpdateNotificationPreferenceResponse](#modules-notification-v1-public-UpdateNotificationPreferenceResponse) |  |
| GetNotificationPreferenceByUserId | [.google.protobuf.Empty](#google-protobuf-Empty) | [GetNotificationPreferenceByUserIdResponse](#modules-notification-v1-public-GetNotificationPreferenceByUserIdResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

