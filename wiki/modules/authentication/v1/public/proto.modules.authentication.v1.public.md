# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/authentication/v1/public/admin_user.proto](#modules_authentication_v1_public_admin_user-proto)
    - [RegisterUserRequest](#modules-authentication-v1-public-RegisterUserRequest)
    - [RegisterUserResponse](#modules-authentication-v1-public-RegisterUserResponse)
  
    - [AdminUserService](#modules-authentication-v1-public-AdminUserService)
  
- [modules/authentication/v1/public/auth.proto](#modules_authentication_v1_public_auth-proto)
    - [ForceResetPasswordRequest](#modules-authentication-v1-public-ForceResetPasswordRequest)
    - [ForceResetPasswordResponse](#modules-authentication-v1-public-ForceResetPasswordResponse)
    - [LoginRequest](#modules-authentication-v1-public-LoginRequest)
    - [LoginResponse](#modules-authentication-v1-public-LoginResponse)
    - [LogoutRequest](#modules-authentication-v1-public-LogoutRequest)
    - [LogoutResponse](#modules-authentication-v1-public-LogoutResponse)
    - [RefreshTokenRequest](#modules-authentication-v1-public-RefreshTokenRequest)
    - [RefreshTokenResponse](#modules-authentication-v1-public-RefreshTokenResponse)
    - [RegisterParentRequest](#modules-authentication-v1-public-RegisterParentRequest)
    - [RegisterParentResponse](#modules-authentication-v1-public-RegisterParentResponse)
    - [ResetPasswordRequest](#modules-authentication-v1-public-ResetPasswordRequest)
    - [ResetPasswordResponse](#modules-authentication-v1-public-ResetPasswordResponse)
  
    - [AuthService](#modules-authentication-v1-public-AuthService)
  
- [modules/authentication/v1/public/identity.proto](#modules_authentication_v1_public_identity-proto)
    - [RegisterRequest](#modules-authentication-v1-public-RegisterRequest)
    - [RegisterResponse](#modules-authentication-v1-public-RegisterResponse)
  
    - [IdentityService](#modules-authentication-v1-public-IdentityService)
  
- [modules/authentication/v1/public/permission.proto](#modules_authentication_v1_public_permission-proto)
    - [AssignUserPermissionRequest](#modules-authentication-v1-public-AssignUserPermissionRequest)
    - [AssignUserPermissionResponse](#modules-authentication-v1-public-AssignUserPermissionResponse)
    - [CreatePermissionRequest](#modules-authentication-v1-public-CreatePermissionRequest)
    - [CreatePermissionResponse](#modules-authentication-v1-public-CreatePermissionResponse)
    - [DeletePermissionRequest](#modules-authentication-v1-public-DeletePermissionRequest)
    - [DeletePermissionResponse](#modules-authentication-v1-public-DeletePermissionResponse)
    - [GetPermissionRequest](#modules-authentication-v1-public-GetPermissionRequest)
    - [GetPermissionResponse](#modules-authentication-v1-public-GetPermissionResponse)
    - [ListPermissionRequest](#modules-authentication-v1-public-ListPermissionRequest)
    - [ListPermissionResponse](#modules-authentication-v1-public-ListPermissionResponse)
    - [RevokePermissionRequest](#modules-authentication-v1-public-RevokePermissionRequest)
    - [RevokePermissionResponse](#modules-authentication-v1-public-RevokePermissionResponse)
    - [UpdatePermissionRequest](#modules-authentication-v1-public-UpdatePermissionRequest)
    - [UpdatePermissionResponse](#modules-authentication-v1-public-UpdatePermissionResponse)
  
    - [PermissionService](#modules-authentication-v1-public-PermissionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_authentication_v1_public_admin_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/public/admin_user.proto



<a name="modules-authentication-v1-public-RegisterUserRequest"></a>

### RegisterUserRequest
Request body of Register new user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| register_as | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |
| instance_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |
| nip | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="modules-authentication-v1-public-RegisterUserResponse"></a>

### RegisterUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |





 

 

 


<a name="modules-authentication-v1-public-AdminUserService"></a>

### AdminUserService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RegisterUser | [RegisterUserRequest](#modules-authentication-v1-public-RegisterUserRequest) | [RegisterUserResponse](#modules-authentication-v1-public-RegisterUserResponse) |  |

 



<a name="modules_authentication_v1_public_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/public/auth.proto



<a name="modules-authentication-v1-public-ForceResetPasswordRequest"></a>

### ForceResetPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_password | [string](#string) |  |  |
| current_password | [string](#string) |  |  |






<a name="modules-authentication-v1-public-ForceResetPasswordResponse"></a>

### ForceResetPasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-authentication-v1-public-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="modules-authentication-v1-public-LoginResponse"></a>

### LoginResponse
Response body of Login


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| login_entity | [modules.authentication.v1.shared.LoginEntity](#modules-authentication-v1-shared-LoginEntity) |  |  |
| redirect_to | [string](#string) |  |  |






<a name="modules-authentication-v1-public-LogoutRequest"></a>

### LogoutRequest
Request body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |






<a name="modules-authentication-v1-public-LogoutResponse"></a>

### LogoutResponse
Response body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if logout is success |






<a name="modules-authentication-v1-public-RefreshTokenRequest"></a>

### RefreshTokenRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |






<a name="modules-authentication-v1-public-RefreshTokenResponse"></a>

### RefreshTokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |
| refresh_token | [string](#string) |  |  |






<a name="modules-authentication-v1-public-RegisterParentRequest"></a>

### RegisterParentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| relation_role_id | [string](#string) |  |  |






<a name="modules-authentication-v1-public-RegisterParentResponse"></a>

### RegisterParentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| login_entity | [modules.authentication.v1.shared.LoginEntity](#modules-authentication-v1-shared-LoginEntity) |  |  |
| redirect_to | [string](#string) |  |  |






<a name="modules-authentication-v1-public-ResetPasswordRequest"></a>

### ResetPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| new_password | [string](#string) |  |  |






<a name="modules-authentication-v1-public-ResetPasswordResponse"></a>

### ResetPasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-authentication-v1-public-AuthService"></a>

### AuthService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#modules-authentication-v1-public-LoginRequest) | [LoginResponse](#modules-authentication-v1-public-LoginResponse) | Logging in user |
| Logout | [LogoutRequest](#modules-authentication-v1-public-LogoutRequest) | [LogoutResponse](#modules-authentication-v1-public-LogoutResponse) | Logging out user by invalidating provided access token |
| RefreshToken | [RefreshTokenRequest](#modules-authentication-v1-public-RefreshTokenRequest) | [RefreshTokenResponse](#modules-authentication-v1-public-RefreshTokenResponse) |  |
| ResetPassword | [ResetPasswordRequest](#modules-authentication-v1-public-ResetPasswordRequest) | [ResetPasswordResponse](#modules-authentication-v1-public-ResetPasswordResponse) |  |
| ForceResetPassword | [ForceResetPasswordRequest](#modules-authentication-v1-public-ForceResetPasswordRequest) | [ForceResetPasswordResponse](#modules-authentication-v1-public-ForceResetPasswordResponse) |  |
| RegisterParent | [RegisterParentRequest](#modules-authentication-v1-public-RegisterParentRequest) | [RegisterParentResponse](#modules-authentication-v1-public-RegisterParentResponse) |  |

 



<a name="modules_authentication_v1_public_identity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/public/identity.proto



<a name="modules-authentication-v1-public-RegisterRequest"></a>

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






<a name="modules-authentication-v1-public-RegisterResponse"></a>

### RegisterResponse
Response body of Register new user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |
| token | [string](#string) |  |  |
| refresh_token | [string](#string) |  |  |





 

 

 


<a name="modules-authentication-v1-public-IdentityService"></a>

### IdentityService
IdentityService contains user identity management functionality such as register/read/update/delete.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Register | [RegisterRequest](#modules-authentication-v1-public-RegisterRequest) | [RegisterResponse](#modules-authentication-v1-public-RegisterResponse) |  |

 



<a name="modules_authentication_v1_public_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/public/permission.proto



<a name="modules-authentication-v1-public-AssignUserPermissionRequest"></a>

### AssignUserPermissionRequest
Request body of AssignPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | id of user |
| permission_id | [string](#string) |  | id of rule to be assigned |






<a name="modules-authentication-v1-public-AssignUserPermissionResponse"></a>

### AssignUserPermissionResponse
Response body of AssignUserPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is assigned to user |






<a name="modules-authentication-v1-public-CreatePermissionRequest"></a>

### CreatePermissionRequest
Request body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [string](#string) |  | action |
| permission_name | [string](#string) |  | resource name |
| description | [string](#string) |  | display name |
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |






<a name="modules-authentication-v1-public-CreatePermissionResponse"></a>

### CreatePermissionResponse
Response body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | additional message |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | created permission data |






<a name="modules-authentication-v1-public-DeletePermissionRequest"></a>

### DeletePermissionRequest
Request body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id of permission |






<a name="modules-authentication-v1-public-DeletePermissionResponse"></a>

### DeletePermissionResponse
Response body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is successfully deleted from permission |






<a name="modules-authentication-v1-public-GetPermissionRequest"></a>

### GetPermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id of permission |






<a name="modules-authentication-v1-public-GetPermissionResponse"></a>

### GetPermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | permission data |






<a name="modules-authentication-v1-public-ListPermissionRequest"></a>

### ListPermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |
| limit | [int32](#int32) |  |  |
| offset | [int32](#int32) |  |  |






<a name="modules-authentication-v1-public-ListPermissionResponse"></a>

### ListPermissionResponse
Response body of ListPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) | repeated | permission data |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | metadata |






<a name="modules-authentication-v1-public-RevokePermissionRequest"></a>

### RevokePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | id of user |
| permission_id | [string](#string) |  | id of rule to be revoked |






<a name="modules-authentication-v1-public-RevokePermissionResponse"></a>

### RevokePermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is successfully revoked from user |






<a name="modules-authentication-v1-public-UpdatePermissionRequest"></a>

### UpdatePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id of permission |
| action | [string](#string) |  | action |
| permission_name | [string](#string) |  | resource name |
| description | [string](#string) |  | display name |
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |






<a name="modules-authentication-v1-public-UpdatePermissionResponse"></a>

### UpdatePermissionResponse
Response body of UpdatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is successfully updated |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | updated permission data |





 

 

 


<a name="modules-authentication-v1-public-PermissionService"></a>

### PermissionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListPermission | [ListPermissionRequest](#modules-authentication-v1-public-ListPermissionRequest) | [ListPermissionResponse](#modules-authentication-v1-public-ListPermissionResponse) |  |
| CreatePermission | [CreatePermissionRequest](#modules-authentication-v1-public-CreatePermissionRequest) | [CreatePermissionResponse](#modules-authentication-v1-public-CreatePermissionResponse) |  |
| UpdatePermission | [UpdatePermissionRequest](#modules-authentication-v1-public-UpdatePermissionRequest) | [UpdatePermissionResponse](#modules-authentication-v1-public-UpdatePermissionResponse) |  |
| DeletePermission | [DeletePermissionRequest](#modules-authentication-v1-public-DeletePermissionRequest) | [DeletePermissionResponse](#modules-authentication-v1-public-DeletePermissionResponse) |  |
| GetPermission | [GetPermissionRequest](#modules-authentication-v1-public-GetPermissionRequest) | [GetPermissionResponse](#modules-authentication-v1-public-GetPermissionResponse) |  |
| AssignPermission | [AssignUserPermissionRequest](#modules-authentication-v1-public-AssignUserPermissionRequest) | [AssignUserPermissionResponse](#modules-authentication-v1-public-AssignUserPermissionResponse) |  |
| RevokePermission | [RevokePermissionRequest](#modules-authentication-v1-public-RevokePermissionRequest) | [RevokePermissionResponse](#modules-authentication-v1-public-RevokePermissionResponse) |  |

 



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

