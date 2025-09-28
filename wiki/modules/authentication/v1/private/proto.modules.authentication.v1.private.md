# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/authentication/v1/private/auth.proto](#modules_authentication_v1_private_auth-proto)
    - [LoginRequest](#modules-authentication-v1-private-LoginRequest)
    - [LoginResponse](#modules-authentication-v1-private-LoginResponse)
    - [LogoutRequest](#modules-authentication-v1-private-LogoutRequest)
    - [LogoutResponse](#modules-authentication-v1-private-LogoutResponse)
    - [RefreshTokenRequest](#modules-authentication-v1-private-RefreshTokenRequest)
    - [RefreshTokenResponse](#modules-authentication-v1-private-RefreshTokenResponse)
    - [ResetPasswordRequest](#modules-authentication-v1-private-ResetPasswordRequest)
    - [ResetPasswordResponse](#modules-authentication-v1-private-ResetPasswordResponse)
  
    - [AuthService](#modules-authentication-v1-private-AuthService)
  
- [modules/authentication/v1/private/identity.proto](#modules_authentication_v1_private_identity-proto)
    - [DeleteUserRequest](#modules-authentication-v1-private-DeleteUserRequest)
    - [DeleteUserResponse](#modules-authentication-v1-private-DeleteUserResponse)
    - [GetUserByEmailRequest](#modules-authentication-v1-private-GetUserByEmailRequest)
    - [GetUserByEmailResponse](#modules-authentication-v1-private-GetUserByEmailResponse)
    - [GetUserByEmailsRequest](#modules-authentication-v1-private-GetUserByEmailsRequest)
    - [GetUserByEmailsResponse](#modules-authentication-v1-private-GetUserByEmailsResponse)
    - [GetUserByIDsRequest](#modules-authentication-v1-private-GetUserByIDsRequest)
    - [GetUserByIDsResponse](#modules-authentication-v1-private-GetUserByIDsResponse)
    - [GetUserByIdRequest](#modules-authentication-v1-private-GetUserByIdRequest)
    - [GetUserByIdResponse](#modules-authentication-v1-private-GetUserByIdResponse)
    - [GetUserByPhoneRequest](#modules-authentication-v1-private-GetUserByPhoneRequest)
    - [GetUserByPhoneResponse](#modules-authentication-v1-private-GetUserByPhoneResponse)
    - [GetUserListRequest](#modules-authentication-v1-private-GetUserListRequest)
    - [GetUserListResponse](#modules-authentication-v1-private-GetUserListResponse)
    - [RegisterRequest](#modules-authentication-v1-private-RegisterRequest)
    - [RegisterResponse](#modules-authentication-v1-private-RegisterResponse)
    - [UpdateUserRequest](#modules-authentication-v1-private-UpdateUserRequest)
    - [UpdateUserResponse](#modules-authentication-v1-private-UpdateUserResponse)
  
    - [IdentityService](#modules-authentication-v1-private-IdentityService)
  
- [modules/authentication/v1/private/permission.proto](#modules_authentication_v1_private_permission-proto)
    - [AssignUserPermissionRequest](#modules-authentication-v1-private-AssignUserPermissionRequest)
    - [AssignUserPermissionResponse](#modules-authentication-v1-private-AssignUserPermissionResponse)
    - [CreatePermissionRequest](#modules-authentication-v1-private-CreatePermissionRequest)
    - [CreatePermissionResponse](#modules-authentication-v1-private-CreatePermissionResponse)
    - [DeletePermissionRequest](#modules-authentication-v1-private-DeletePermissionRequest)
    - [DeletePermissionResponse](#modules-authentication-v1-private-DeletePermissionResponse)
    - [ListPermissionRequest](#modules-authentication-v1-private-ListPermissionRequest)
    - [ListPermissionResponse](#modules-authentication-v1-private-ListPermissionResponse)
    - [UnassignUserPermissionRequest](#modules-authentication-v1-private-UnassignUserPermissionRequest)
    - [UnassignUserPermissionResponse](#modules-authentication-v1-private-UnassignUserPermissionResponse)
  
    - [PermissionService](#modules-authentication-v1-private-PermissionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_authentication_v1_private_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/private/auth.proto



<a name="modules-authentication-v1-private-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="modules-authentication-v1-private-LoginResponse"></a>

### LoginResponse
Response body of Login


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| login_entity | [modules.authentication.v1.shared.LoginEntity](#modules-authentication-v1-shared-LoginEntity) |  |  |
| redirect_to | [string](#string) |  |  |






<a name="modules-authentication-v1-private-LogoutRequest"></a>

### LogoutRequest
Request body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |






<a name="modules-authentication-v1-private-LogoutResponse"></a>

### LogoutResponse
Response body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if logout is success |






<a name="modules-authentication-v1-private-RefreshTokenRequest"></a>

### RefreshTokenRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |






<a name="modules-authentication-v1-private-RefreshTokenResponse"></a>

### RefreshTokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |
| refresh_token | [string](#string) |  |  |






<a name="modules-authentication-v1-private-ResetPasswordRequest"></a>

### ResetPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| current_password | [string](#string) |  |  |
| new_password | [string](#string) |  |  |






<a name="modules-authentication-v1-private-ResetPasswordResponse"></a>

### ResetPasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-authentication-v1-private-AuthService"></a>

### AuthService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#modules-authentication-v1-private-LoginRequest) | [LoginResponse](#modules-authentication-v1-private-LoginResponse) | Logging in user |
| Logout | [LogoutRequest](#modules-authentication-v1-private-LogoutRequest) | [LogoutResponse](#modules-authentication-v1-private-LogoutResponse) | Logging out user by invalidating provided access token |
| RefreshToken | [RefreshTokenRequest](#modules-authentication-v1-private-RefreshTokenRequest) | [RefreshTokenResponse](#modules-authentication-v1-private-RefreshTokenResponse) |  |
| ResetPassword | [ResetPasswordRequest](#modules-authentication-v1-private-ResetPasswordRequest) | [ResetPasswordResponse](#modules-authentication-v1-private-ResetPasswordResponse) |  |

 



<a name="modules_authentication_v1_private_identity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/private/identity.proto



<a name="modules-authentication-v1-private-DeleteUserRequest"></a>

### DeleteUserRequest
Request body of DeleteUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-private-DeleteUserResponse"></a>

### DeleteUserResponse
Response body of DeleteUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if delete user is success |






<a name="modules-authentication-v1-private-GetUserByEmailRequest"></a>

### GetUserByEmailRequest
Request body of GetUserByEmail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |






<a name="modules-authentication-v1-private-GetUserByEmailResponse"></a>

### GetUserByEmailResponse
Response body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-private-GetUserByEmailsRequest"></a>

### GetUserByEmailsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| emails | [string](#string) | repeated |  |






<a name="modules-authentication-v1-private-GetUserByEmailsResponse"></a>

### GetUserByEmailsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) | repeated |  |






<a name="modules-authentication-v1-private-GetUserByIDsRequest"></a>

### GetUserByIDsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated |  |






<a name="modules-authentication-v1-private-GetUserByIDsResponse"></a>

### GetUserByIDsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) | repeated |  |






<a name="modules-authentication-v1-private-GetUserByIdRequest"></a>

### GetUserByIdRequest
Request body of GetUserById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-private-GetUserByIdResponse"></a>

### GetUserByIdResponse
Response body of GetUserById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-private-GetUserByPhoneRequest"></a>

### GetUserByPhoneRequest
Request body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-private-GetUserByPhoneResponse"></a>

### GetUserByPhoneResponse
Response body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-private-GetUserListRequest"></a>

### GetUserListRequest
Request body of GetUserList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instance_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| email | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |
| ids | [string](#string) | repeated |  |






<a name="modules-authentication-v1-private-GetUserListResponse"></a>

### GetUserListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-authentication-v1-private-RegisterRequest"></a>

### RegisterRequest
Request body of Register new user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| login_challenge | [string](#string) |  |  |






<a name="modules-authentication-v1-private-RegisterResponse"></a>

### RegisterResponse
Response body of Register new user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |
| token | [string](#string) |  |  |
| refresh_token | [string](#string) |  |  |






<a name="modules-authentication-v1-private-UpdateUserRequest"></a>

### UpdateUserRequest
Request body of UpdateUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| status | [modules.authentication.v1.shared.UserStatus](#modules-authentication-v1-shared-UserStatus) |  |  |
| date_of_birth | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| address | [string](#string) |  |  |
| gender | [modules.authentication.v1.shared.Gender](#modules-authentication-v1-shared-Gender) |  |  |
| place_of_birth | [string](#string) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| update_mask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |






<a name="modules-authentication-v1-private-UpdateUserResponse"></a>

### UpdateUserResponse
Response body of UpdateUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if update user is success |





 

 

 


<a name="modules-authentication-v1-private-IdentityService"></a>

### IdentityService
IdentityService contains user identity management functionality such as
register/read/update/delete.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Register | [RegisterRequest](#modules-authentication-v1-private-RegisterRequest) | [RegisterResponse](#modules-authentication-v1-private-RegisterResponse) |  |
| DeleteUser | [DeleteUserRequest](#modules-authentication-v1-private-DeleteUserRequest) | [DeleteUserResponse](#modules-authentication-v1-private-DeleteUserResponse) | Delete a user by id |
| UpdateUser | [UpdateUserRequest](#modules-authentication-v1-private-UpdateUserRequest) | [UpdateUserResponse](#modules-authentication-v1-private-UpdateUserResponse) |  |
| GetUserById | [GetUserByIdRequest](#modules-authentication-v1-private-GetUserByIdRequest) | [GetUserByIdResponse](#modules-authentication-v1-private-GetUserByIdResponse) | Get a user by id |
| GetUserByPhone | [GetUserByPhoneRequest](#modules-authentication-v1-private-GetUserByPhoneRequest) | [GetUserByPhoneResponse](#modules-authentication-v1-private-GetUserByPhoneResponse) | GetUserByPhone get user by their phone. |
| GetUserByEmail | [GetUserByEmailRequest](#modules-authentication-v1-private-GetUserByEmailRequest) | [GetUserByEmailResponse](#modules-authentication-v1-private-GetUserByEmailResponse) | GetUserByPhone get user by their phone. |
| GetUserList | [GetUserListRequest](#modules-authentication-v1-private-GetUserListRequest) | [GetUserListResponse](#modules-authentication-v1-private-GetUserListResponse) | GetUserByPhone get user by their phone. |
| GetUserByIDs | [GetUserByIDsRequest](#modules-authentication-v1-private-GetUserByIDsRequest) | [GetUserByIDsResponse](#modules-authentication-v1-private-GetUserByIDsResponse) | GetUserByPhone get user by their phone. |
| GetUserByEmails | [GetUserByEmailsRequest](#modules-authentication-v1-private-GetUserByEmailsRequest) | [GetUserByEmailsResponse](#modules-authentication-v1-private-GetUserByEmailsResponse) |  |

 



<a name="modules_authentication_v1_private_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/private/permission.proto



<a name="modules-authentication-v1-private-AssignUserPermissionRequest"></a>

### AssignUserPermissionRequest
Request body of AssignPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | id of user |
| permission_id | [string](#string) |  | id of rule to be assigned |






<a name="modules-authentication-v1-private-AssignUserPermissionResponse"></a>

### AssignUserPermissionResponse
Response body of AssignUserPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is assigned to user |






<a name="modules-authentication-v1-private-CreatePermissionRequest"></a>

### CreatePermissionRequest
Request body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [string](#string) |  | action |
| permission_name | [string](#string) |  | resource name |
| description | [string](#string) |  | display name |
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |






<a name="modules-authentication-v1-private-CreatePermissionResponse"></a>

### CreatePermissionResponse
Response body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | additional message |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | created permission data |






<a name="modules-authentication-v1-private-DeletePermissionRequest"></a>

### DeletePermissionRequest
Request body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id of permission |






<a name="modules-authentication-v1-private-DeletePermissionResponse"></a>

### DeletePermissionResponse
Response body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is successfully deleted from permission |






<a name="modules-authentication-v1-private-ListPermissionRequest"></a>

### ListPermissionRequest
Request body of ListPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id of permission |
| limit | [int32](#int32) |  | limit of permission to return |
| cursor | [string](#string) |  | cursor of pagination |






<a name="modules-authentication-v1-private-ListPermissionResponse"></a>

### ListPermissionResponse
Response body of ListPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) | repeated | permission data |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | metadata |






<a name="modules-authentication-v1-private-UnassignUserPermissionRequest"></a>

### UnassignUserPermissionRequest
Request body of UnassignUserPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  | id of permission to unassign |
| user_id | [string](#string) |  | user of id |






<a name="modules-authentication-v1-private-UnassignUserPermissionResponse"></a>

### UnassignUserPermissionResponse
Response body of UnassignUserPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message ig permission is unassigned from user |





 

 

 


<a name="modules-authentication-v1-private-PermissionService"></a>

### PermissionService
PermissionService contains permission and permission management functionality such as create/read/update/delete Permission.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListPermission | [ListPermissionRequest](#modules-authentication-v1-private-ListPermissionRequest) | [ListPermissionResponse](#modules-authentication-v1-private-ListPermissionResponse) | Get List of Permission on a permission. Can be accessed by ADMINISTRATOR only. |
| CreatePermission | [CreatePermissionRequest](#modules-authentication-v1-private-CreatePermissionRequest) | [CreatePermissionResponse](#modules-authentication-v1-private-CreatePermissionResponse) | Add permission to a permission. Can be accessed by ADMINISTRATOR only. |
| DeletePermission | [DeletePermissionRequest](#modules-authentication-v1-private-DeletePermissionRequest) | [DeletePermissionResponse](#modules-authentication-v1-private-DeletePermissionResponse) | Delete permission from a permission. Can be accessed by ADMINISTRATOR only. |
| AssignUserPermission | [AssignUserPermissionRequest](#modules-authentication-v1-private-AssignUserPermissionRequest) | [AssignUserPermissionResponse](#modules-authentication-v1-private-AssignUserPermissionResponse) | Assign permission to a user. Can be accessed by ADMINISTRATOR only. |
| UnassignUserPermission | [UnassignUserPermissionRequest](#modules-authentication-v1-private-UnassignUserPermissionRequest) | [UnassignUserPermissionResponse](#modules-authentication-v1-private-UnassignUserPermissionResponse) | Unassign a permission from user. Can be accessed by ADMINISTRATOR only. |

 



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

