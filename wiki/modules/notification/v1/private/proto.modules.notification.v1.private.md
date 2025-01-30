# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/notification/v1/private/notification.proto](#modules_notification_v1_private_notification-proto)
    - [CreateNotificationRequest](#modules-notification-v1-private-CreateNotificationRequest)
    - [CreateNotificationResponse](#modules-notification-v1-private-CreateNotificationResponse)
    - [DeleteNotificationRequest](#modules-notification-v1-private-DeleteNotificationRequest)
    - [DeleteNotificationResponse](#modules-notification-v1-private-DeleteNotificationResponse)
  
    - [NotificationService](#modules-notification-v1-private-NotificationService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_notification_v1_private_notification-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/notification/v1/private/notification.proto



<a name="modules-notification-v1-private-CreateNotificationRequest"></a>

### CreateNotificationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| read | [bool](#bool) |  |  |
| type | [modules.notification.v1.shared.NotificationType](#modules-notification-v1-shared-NotificationType) |  |  |
| account_id | [string](#string) |  |  |
| account_type | [modules.notification.v1.shared.AccountType](#modules-notification-v1-shared-AccountType) |  |  |
| url | [string](#string) |  |  |






<a name="modules-notification-v1-private-CreateNotificationResponse"></a>

### CreateNotificationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notification | [modules.notification.v1.shared.Notification](#modules-notification-v1-shared-Notification) |  |  |
| message | [string](#string) |  |  |






<a name="modules-notification-v1-private-DeleteNotificationRequest"></a>

### DeleteNotificationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| notification_id | [string](#string) |  |  |






<a name="modules-notification-v1-private-DeleteNotificationResponse"></a>

### DeleteNotificationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-notification-v1-private-NotificationService"></a>

### NotificationService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateNotification | [CreateNotificationRequest](#modules-notification-v1-private-CreateNotificationRequest) | [CreateNotificationResponse](#modules-notification-v1-private-CreateNotificationResponse) |  |
| DeleteNotification | [DeleteNotificationRequest](#modules-notification-v1-private-DeleteNotificationRequest) | [DeleteNotificationResponse](#modules-notification-v1-private-DeleteNotificationResponse) |  |

 



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

