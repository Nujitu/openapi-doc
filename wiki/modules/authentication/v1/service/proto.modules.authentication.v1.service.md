# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/authentication/v1/service/auth.proto](#modules_authentication_v1_service_auth-proto)
    - [LoginRequest](#modules-authentication-v1-service-LoginRequest)
    - [LoginResponse](#modules-authentication-v1-service-LoginResponse)
    - [LogoutRequest](#modules-authentication-v1-service-LogoutRequest)
    - [LogoutResponse](#modules-authentication-v1-service-LogoutResponse)
  
    - [AuthService](#modules-authentication-v1-service-AuthService)
  
- [modules/authentication/v1/service/identity.proto](#modules_authentication_v1_service_identity-proto)
    - [DeleteUserRequest](#modules-authentication-v1-service-DeleteUserRequest)
    - [DeleteUserResponse](#modules-authentication-v1-service-DeleteUserResponse)
    - [GetUserByEmailRequest](#modules-authentication-v1-service-GetUserByEmailRequest)
    - [GetUserByEmailResponse](#modules-authentication-v1-service-GetUserByEmailResponse)
    - [GetUserByIdRequest](#modules-authentication-v1-service-GetUserByIdRequest)
    - [GetUserByIdResponse](#modules-authentication-v1-service-GetUserByIdResponse)
    - [GetUserByPhoneRequest](#modules-authentication-v1-service-GetUserByPhoneRequest)
    - [GetUserByPhoneResponse](#modules-authentication-v1-service-GetUserByPhoneResponse)
    - [GetUserListRequest](#modules-authentication-v1-service-GetUserListRequest)
    - [GetUserListResponse](#modules-authentication-v1-service-GetUserListResponse)
    - [RegisterRequest](#modules-authentication-v1-service-RegisterRequest)
    - [RegisterResponse](#modules-authentication-v1-service-RegisterResponse)
    - [UpdateUserRequest](#modules-authentication-v1-service-UpdateUserRequest)
    - [UpdateUserResponse](#modules-authentication-v1-service-UpdateUserResponse)
  
    - [IdentityService](#modules-authentication-v1-service-IdentityService)
  
- [modules/authentication/v1/service/permission.proto](#modules_authentication_v1_service_permission-proto)
    - [AssignUserRoleRequest](#modules-authentication-v1-service-AssignUserRoleRequest)
    - [AssignUserRoleResponse](#modules-authentication-v1-service-AssignUserRoleResponse)
    - [CreatePermissionRequest](#modules-authentication-v1-service-CreatePermissionRequest)
    - [CreatePermissionResponse](#modules-authentication-v1-service-CreatePermissionResponse)
    - [CreateRoleRequest](#modules-authentication-v1-service-CreateRoleRequest)
    - [CreateRoleResponse](#modules-authentication-v1-service-CreateRoleResponse)
    - [DeletePermissionRequest](#modules-authentication-v1-service-DeletePermissionRequest)
    - [DeletePermissionResponse](#modules-authentication-v1-service-DeletePermissionResponse)
    - [DeleteRoleRequest](#modules-authentication-v1-service-DeleteRoleRequest)
    - [DeleteRoleResponse](#modules-authentication-v1-service-DeleteRoleResponse)
    - [GetRoleByIdRequest](#modules-authentication-v1-service-GetRoleByIdRequest)
    - [GetRoleByIdResponse](#modules-authentication-v1-service-GetRoleByIdResponse)
    - [ListPermissionRequest](#modules-authentication-v1-service-ListPermissionRequest)
    - [ListPermissionResponse](#modules-authentication-v1-service-ListPermissionResponse)
    - [ListRoleRequest](#modules-authentication-v1-service-ListRoleRequest)
    - [ListRoleResponse](#modules-authentication-v1-service-ListRoleResponse)
    - [UnassignUserRoleRequest](#modules-authentication-v1-service-UnassignUserRoleRequest)
    - [UnassignUserRoleResponse](#modules-authentication-v1-service-UnassignUserRoleResponse)
  
    - [PermissionService](#modules-authentication-v1-service-PermissionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_authentication_v1_service_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/service/auth.proto



<a name="modules-authentication-v1-service-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="modules-authentication-v1-service-LoginResponse"></a>

### LoginResponse
Response body of Login


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| login_entity | [modules.authentication.v1.shared.LoginEntity](#modules-authentication-v1-shared-LoginEntity) |  |  |
| redirect_to | [string](#string) |  |  |






<a name="modules-authentication-v1-service-LogoutRequest"></a>

### LogoutRequest
Request body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_access_token | [string](#string) |  |  |






<a name="modules-authentication-v1-service-LogoutResponse"></a>

### LogoutResponse
Response body of Logout


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if logout is success |





 

 

 


<a name="modules-authentication-v1-service-AuthService"></a>

### AuthService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#modules-authentication-v1-service-LoginRequest) | [LoginResponse](#modules-authentication-v1-service-LoginResponse) | Logging in user |
| Logout | [LogoutRequest](#modules-authentication-v1-service-LogoutRequest) | [LogoutResponse](#modules-authentication-v1-service-LogoutResponse) | Logging out user by invalidating provided access token |

 



<a name="modules_authentication_v1_service_identity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/service/identity.proto



<a name="modules-authentication-v1-service-DeleteUserRequest"></a>

### DeleteUserRequest
Request body of DeleteUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-service-DeleteUserResponse"></a>

### DeleteUserResponse
Response body of DeleteUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if delete user is success |






<a name="modules-authentication-v1-service-GetUserByEmailRequest"></a>

### GetUserByEmailRequest
Request body of GetUserByEmail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |






<a name="modules-authentication-v1-service-GetUserByEmailResponse"></a>

### GetUserByEmailResponse
Response body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-service-GetUserByIdRequest"></a>

### GetUserByIdRequest
Request body of GetUserById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-service-GetUserByIdResponse"></a>

### GetUserByIdResponse
Response body of GetUserById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-service-GetUserByPhoneRequest"></a>

### GetUserByPhoneRequest
Request body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="modules-authentication-v1-service-GetUserByPhoneResponse"></a>

### GetUserByPhoneResponse
Response body of GetUserByPhone


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |






<a name="modules-authentication-v1-service-GetUserListRequest"></a>

### GetUserListRequest
Request body of GetUserList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| email | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |
| ids | [string](#string) | repeated |  |






<a name="modules-authentication-v1-service-GetUserListResponse"></a>

### GetUserListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-authentication-v1-service-RegisterRequest"></a>

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






<a name="modules-authentication-v1-service-RegisterResponse"></a>

### RegisterResponse
Response body of Register new user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| user | [modules.authentication.v1.shared.User](#modules-authentication-v1-shared-User) |  |  |
| token | [string](#string) |  |  |






<a name="modules-authentication-v1-service-UpdateUserRequest"></a>

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
| update_mask | [google.protobuf.FieldMask](#google-protobuf-FieldMask) |  |  |






<a name="modules-authentication-v1-service-UpdateUserResponse"></a>

### UpdateUserResponse
Response body of UpdateUser


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if update user is success |





 

 

 


<a name="modules-authentication-v1-service-IdentityService"></a>

### IdentityService
IdentityService contains user identity management functionality such as register/read/update/delete.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Register | [RegisterRequest](#modules-authentication-v1-service-RegisterRequest) | [RegisterResponse](#modules-authentication-v1-service-RegisterResponse) |  |
| DeleteUser | [DeleteUserRequest](#modules-authentication-v1-service-DeleteUserRequest) | [DeleteUserResponse](#modules-authentication-v1-service-DeleteUserResponse) | Delete a user by id |
| UpdateUser | [UpdateUserRequest](#modules-authentication-v1-service-UpdateUserRequest) | [UpdateUserResponse](#modules-authentication-v1-service-UpdateUserResponse) |  |
| GetUserById | [GetUserByIdRequest](#modules-authentication-v1-service-GetUserByIdRequest) | [GetUserByIdResponse](#modules-authentication-v1-service-GetUserByIdResponse) | Get a user by id |
| GetUserByPhone | [GetUserByPhoneRequest](#modules-authentication-v1-service-GetUserByPhoneRequest) | [GetUserByPhoneResponse](#modules-authentication-v1-service-GetUserByPhoneResponse) | GetUserByPhone get user by their phone. |
| GetUserByEmail | [GetUserByEmailRequest](#modules-authentication-v1-service-GetUserByEmailRequest) | [GetUserByEmailResponse](#modules-authentication-v1-service-GetUserByEmailResponse) | GetUserByPhone get user by their phone. |
| GetUserList | [GetUserListRequest](#modules-authentication-v1-service-GetUserListRequest) | [GetUserListResponse](#modules-authentication-v1-service-GetUserListResponse) | GetUserByPhone get user by their phone. |

 



<a name="modules_authentication_v1_service_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/authentication/v1/service/permission.proto



<a name="modules-authentication-v1-service-AssignUserRoleRequest"></a>

### AssignUserRoleRequest
Request body of AssignRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | id of user |
| role_id | [string](#string) |  | id of rule to be assigned |






<a name="modules-authentication-v1-service-AssignUserRoleResponse"></a>

### AssignUserRoleResponse
Response body of AssignUserRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if role is assigned to user |






<a name="modules-authentication-v1-service-CreatePermissionRequest"></a>

### CreatePermissionRequest
Request body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  | id of role |
| action | [string](#string) |  | action |
| resource_name | [string](#string) |  | resource name |
| display_name | [string](#string) |  | display name |






<a name="modules-authentication-v1-service-CreatePermissionResponse"></a>

### CreatePermissionResponse
Response body of CreatePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | additional message |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | created permission data |






<a name="modules-authentication-v1-service-CreateRoleRequest"></a>

### CreateRoleRequest
Request body of CreateRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| domain_name | [string](#string) |  | name of domain |
| role_name | [string](#string) |  | name of role |
| type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |






<a name="modules-authentication-v1-service-CreateRoleResponse"></a>

### CreateRoleResponse
Response body of CreateRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | additional message |
| role | [modules.authentication.v1.shared.Role](#modules-authentication-v1-shared-Role) |  | role data |






<a name="modules-authentication-v1-service-DeletePermissionRequest"></a>

### DeletePermissionRequest
Request body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  | id of role |
| permission_id | [string](#string) |  | id of permission to delete |






<a name="modules-authentication-v1-service-DeletePermissionResponse"></a>

### DeletePermissionResponse
Response body of DeletePermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if permission is successfully deleted from role |






<a name="modules-authentication-v1-service-DeleteRoleRequest"></a>

### DeleteRoleRequest
Request body of DeleteRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  | id of role |






<a name="modules-authentication-v1-service-DeleteRoleResponse"></a>

### DeleteRoleResponse
Response body of DeleteRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message if role is successfully deleted |






<a name="modules-authentication-v1-service-GetRoleByIdRequest"></a>

### GetRoleByIdRequest
Request body of GetRoleById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  | role id of the role |






<a name="modules-authentication-v1-service-GetRoleByIdResponse"></a>

### GetRoleByIdResponse
Response body of GetRoleById


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [modules.authentication.v1.shared.Role](#modules-authentication-v1-shared-Role) |  | role information |






<a name="modules-authentication-v1-service-ListPermissionRequest"></a>

### ListPermissionRequest
Request body of ListPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  | id of role |
| limit | [int32](#int32) |  | limit of permission to return |
| cursor | [string](#string) |  | cursor of pagination |






<a name="modules-authentication-v1-service-ListPermissionResponse"></a>

### ListPermissionResponse
Response body of ListPermission


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [modules.authentication.v1.shared.Permission](#modules-authentication-v1-shared-Permission) |  | list of permission |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | metadata |






<a name="modules-authentication-v1-service-ListRoleRequest"></a>

### ListRoleRequest
Request body of ListRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| domain_name | [string](#string) |  | name of domain |
| limit | [int32](#int32) |  | limit of role to return |
| cursor | [string](#string) |  | cursor of pagination |






<a name="modules-authentication-v1-service-ListRoleResponse"></a>

### ListRoleResponse
Response body of ListRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [modules.authentication.v1.shared.Role](#modules-authentication-v1-shared-Role) | repeated | role data |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | metadata |






<a name="modules-authentication-v1-service-UnassignUserRoleRequest"></a>

### UnassignUserRoleRequest
Request body of UnassignUserRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  | user of id |
| role_id | [string](#string) |  | id of role to unassign |






<a name="modules-authentication-v1-service-UnassignUserRoleResponse"></a>

### UnassignUserRoleResponse
Response body of UnassignUserRole


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  | message ig role is unassigned from user |





 

 

 


<a name="modules-authentication-v1-service-PermissionService"></a>

### PermissionService
PermissionService contains role and permission management functionality such as create/read/update/delete Role.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateRole | [CreateRoleRequest](#modules-authentication-v1-service-CreateRoleRequest) | [CreateRoleResponse](#modules-authentication-v1-service-CreateRoleResponse) | Create Role for a domain. Can be accessed by admin only |
| GetRoleById | [GetRoleByIdRequest](#modules-authentication-v1-service-GetRoleByIdRequest) | [GetRoleByIdResponse](#modules-authentication-v1-service-GetRoleByIdResponse) | Get Role by Roll ID. Can be accessed by admin only. |
| ListRole | [ListRoleRequest](#modules-authentication-v1-service-ListRoleRequest) | [ListRoleResponse](#modules-authentication-v1-service-ListRoleResponse) | Get List of Role on a domain. Can be accessed by admin only. |
| DeleteRole | [DeleteRoleRequest](#modules-authentication-v1-service-DeleteRoleRequest) | [DeleteRoleResponse](#modules-authentication-v1-service-DeleteRoleResponse) | Create a Role. Can be accessed by admin only |
| ListPermission | [ListPermissionRequest](#modules-authentication-v1-service-ListPermissionRequest) | [ListPermissionResponse](#modules-authentication-v1-service-ListPermissionResponse) | Get List of Permission on a role. Can be accessed by admin only. |
| CreatePermission | [CreatePermissionRequest](#modules-authentication-v1-service-CreatePermissionRequest) | [CreatePermissionResponse](#modules-authentication-v1-service-CreatePermissionResponse) | Add permission to a role. Can be accessed by admin only. |
| DeletePermission | [DeletePermissionRequest](#modules-authentication-v1-service-DeletePermissionRequest) | [DeletePermissionResponse](#modules-authentication-v1-service-DeletePermissionResponse) | Delete permission from a role. Can be accessed by admin only. |
| AssignUserRole | [AssignUserRoleRequest](#modules-authentication-v1-service-AssignUserRoleRequest) | [AssignUserRoleResponse](#modules-authentication-v1-service-AssignUserRoleResponse) | Assign role to a user. Can be accessed by admin only. |
| UnassignUserRole | [UnassignUserRoleRequest](#modules-authentication-v1-service-UnassignUserRoleRequest) | [UnassignUserRoleResponse](#modules-authentication-v1-service-UnassignUserRoleResponse) | Unassign a role from user. Can be accessed by admin only. |

 



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

