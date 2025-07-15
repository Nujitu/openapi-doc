# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/authentication/v1/shared/authentication.proto](#modules_authentication_v1_shared_authentication-proto)
    - [LoginEntity](#modules-authentication-v1-shared-LoginEntity)
  
- [modules/authentication/v1/shared/enumeration.proto](#modules_authentication_v1_shared_enumeration-proto)
    - [UserStatus](#modules-authentication-v1-shared-UserStatus)
  
- [modules/authentication/v1/shared/identity.proto](#modules_authentication_v1_shared_identity-proto)
    - [Address](#modules-authentication-v1-shared-Address)
    - [User](#modules-authentication-v1-shared-User)
  
    - [Gender](#modules-authentication-v1-shared-Gender)
  
- [modules/authentication/v1/shared/permission.proto](#modules_authentication_v1_shared_permission-proto)
    - [Permission](#modules-authentication-v1-shared-Permission)
    - [UserPermission](#modules-authentication-v1-shared-UserPermission)
  
    - [RoleType](#modules-authentication-v1-shared-RoleType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_authentication_v1_shared_authentication-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/shared/authentication.proto



<a name="modules-authentication-v1-shared-LoginEntity"></a>

### LoginEntity
Login entity


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#modules-authentication-v1-shared-User) |  | user data |
| session_token | [string](#string) |  | session token |
| refresh_token | [string](#string) |  |  |





 

 

 

 



<a name="modules_authentication_v1_shared_enumeration-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/shared/enumeration.proto


 


<a name="modules-authentication-v1-shared-UserStatus"></a>

### UserStatus
possible values of UserStatus

| Name | Number | Description |
| ---- | ------ | ----------- |
| USER_STATUS_UNSPECIFIED | 0 | Default user status. It will not be used. |
| USER_STATUS_ACTIVE | 1 | User status active |
| USER_STATUS_INACTIVE | 2 | User status inactive |


 

 

 



<a name="modules_authentication_v1_shared_identity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/shared/identity.proto



<a name="modules-authentication-v1-shared-Address"></a>

### Address
Represents user&#39;s address


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_line_1 | [string](#string) |  | address detail |
| address_line_2 | [string](#string) |  | address detail |
| ADMINISTRATORistrative_area_level_1 | [string](#string) |  | province / provinsi |
| ADMINISTRATORistrative_area_level_2 | [string](#string) |  | city / kota |
| ADMINISTRATORistrative_area_level_3 | [string](#string) |  | area / kecamatan |
| ADMINISTRATORistrative_area_level_4 | [string](#string) |  | district / kelurahan |
| postal_code | [string](#string) |  | postal code / kode pos |
| latitude | [string](#string) |  | stored latitude coordinate in decimal |
| longitude | [string](#string) |  | stored longitude coordinate in decimal |






<a name="modules-authentication-v1-shared-User"></a>

### User
User entity


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| profile_pic | [string](#string) |  |  |
| address | [string](#string) |  |  |
| gender | [Gender](#modules-authentication-v1-shared-Gender) |  |  |
| date_of_birth | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| place_of_birth | [string](#string) |  |  |
| role_type | [RoleType](#modules-authentication-v1-shared-RoleType) |  |  |
| status | [UserStatus](#modules-authentication-v1-shared-UserStatus) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-authentication-v1-shared-Gender"></a>

### Gender


| Name | Number | Description |
| ---- | ------ | ----------- |
| GENDER_UNSPECIFIED | 0 | Unspecified gender |
| MALE | 1 | Male gender |
| FEMALE | 2 | Female gender |


 

 

 



<a name="modules_authentication_v1_shared_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/shared/permission.proto



<a name="modules-authentication-v1-shared-Permission"></a>

### Permission
Permission entity


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id |
| action | [string](#string) |  | action |
| permission_name | [string](#string) |  | resource name |
| description | [string](#string) |  | display name |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | when permission is created |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | when permission is updated |






<a name="modules-authentication-v1-shared-UserPermission"></a>

### UserPermission
RoleWithUserId entity


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id |
| user_id | [string](#string) |  | user_id |
| domain_name | [string](#string) |  | domain name |
| name | [string](#string) |  | role name |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | when role is created |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | when role is updated |





 


<a name="modules-authentication-v1-shared-RoleType"></a>

### RoleType
Enums of role possible value

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 |  |
| STUDENT | 1 |  |
| PARENT | 2 |  |
| TEACHER | 3 |  |
| STAFF | 4 |  |
| ADMINISTRATOR | 5 |  |
| SUPERADMINISTRATOR | 6 |  |


 

 

 



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

