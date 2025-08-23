# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/notification/v1/shared/enum.proto](#modules_notification_v1_shared_enum-proto)
    - [NotificationType](#modules-notification-v1-shared-NotificationType)
    - [RoleType](#modules-notification-v1-shared-RoleType)
  
- [modules/notification/v1/shared/notification.proto](#modules_notification_v1_shared_notification-proto)
    - [Notification](#modules-notification-v1-shared-Notification)
    - [NotificationPreference](#modules-notification-v1-shared-NotificationPreference)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_notification_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/notification/v1/shared/enum.proto


 


<a name="modules-notification-v1-shared-NotificationType"></a>

### NotificationType


| Name | Number | Description |
| ---- | ------ | ----------- |
| DEFAULT | 0 |  |
| ASSIGNMENT | 1 |  |
| OBSERVATION | 2 |  |
| QUIZ | 3 |  |
| ATTENDANCE | 4 |  |
| STUDY_MATERIAL | 5 |  |
| INBOX_MAIL | 6 |  |
| OUTGOING_MAIL | 7 |  |
| EVENT | 8 |  |
| ANNOUNCEMENT | 9 |  |



<a name="modules-notification-v1-shared-RoleType"></a>

### RoleType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 |  |
| STUDENT | 1 |  |
| PARENT | 2 |  |
| TEACHER | 3 |  |
| STAFF | 4 |  |
| ADMINISTRATOR | 5 |  |
| SUPERADMINISTRATOR | 6 |  |


 

 

 



<a name="modules_notification_v1_shared_notification-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/notification/v1/shared/notification.proto



<a name="modules-notification-v1-shared-Notification"></a>

### Notification



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| read | [bool](#bool) |  |  |
| type | [NotificationType](#modules-notification-v1-shared-NotificationType) |  |  |
| user_id | [string](#string) |  |  |
| user_role | [RoleType](#modules-notification-v1-shared-RoleType) |  |  |
| url | [string](#string) |  |  |
| action | [string](#string) |  |  |
| custom_payload | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-notification-v1-shared-NotificationPreference"></a>

### NotificationPreference



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| fcm_token | [string](#string) | repeated |  |
| email_notification | [bool](#bool) |  |  |
| push_notification | [bool](#bool) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



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

