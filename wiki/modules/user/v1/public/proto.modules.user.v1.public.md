# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/user/v1/public/school.proto](#modules_user_v1_public_school-proto)
    - [CreateSchoolRequest](#modules-user-v1-public-CreateSchoolRequest)
    - [CreateSchoolResponse](#modules-user-v1-public-CreateSchoolResponse)
    - [GetSchoolByIDRequest](#modules-user-v1-public-GetSchoolByIDRequest)
    - [GetSchoolListRequest](#modules-user-v1-public-GetSchoolListRequest)
    - [GetSchoolListResponse](#modules-user-v1-public-GetSchoolListResponse)
  
    - [SchoolService](#modules-user-v1-public-SchoolService)
  
- [modules/user/v1/public/student.proto](#modules_user_v1_public_student-proto)
    - [GetStudentInstanceRequest](#-GetStudentInstanceRequest)
    - [GetStudentInstanceResponse](#-GetStudentInstanceResponse)
    - [RegisterStudentRequest](#-RegisterStudentRequest)
    - [RegisterStudentResponse](#-RegisterStudentResponse)
    - [UpdateStudentStatusRequest](#-UpdateStudentStatusRequest)
    - [UpdateStudentStatusResponse](#-UpdateStudentStatusResponse)
  
    - [StudentService](#-StudentService)
  
- [modules/user/v1/public/user.proto](#modules_user_v1_public_user-proto)
    - [CreateUserRequest](#modules-user-v1-public-CreateUserRequest)
    - [GetUserListRequest](#modules-user-v1-public-GetUserListRequest)
    - [GetUserListResponse](#modules-user-v1-public-GetUserListResponse)
    - [GetUserRequest](#modules-user-v1-public-GetUserRequest)
    - [GetUserResponse](#modules-user-v1-public-GetUserResponse)
    - [InviteUserRequest](#modules-user-v1-public-InviteUserRequest)
    - [InviteUserResponse](#modules-user-v1-public-InviteUserResponse)
    - [NewPasswordRequest](#modules-user-v1-public-NewPasswordRequest)
    - [NewPasswordResponse](#modules-user-v1-public-NewPasswordResponse)
  
    - [UserService](#modules-user-v1-public-UserService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_user_v1_public_school-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/school.proto



<a name="modules-user-v1-public-CreateSchoolRequest"></a>

### CreateSchoolRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| type | [modules.user.v1.shared.SchoolType](#modules-user-v1-shared-SchoolType) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| level | [modules.user.v1.shared.EducationLevel](#modules-user-v1-shared-EducationLevel) |  |  |
| province | [string](#string) |  |  |
| img_url | [string](#string) |  |  |






<a name="modules-user-v1-public-CreateSchoolResponse"></a>

### CreateSchoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| school | [modules.user.v1.shared.School](#modules-user-v1-shared-School) |  |  |






<a name="modules-user-v1-public-GetSchoolByIDRequest"></a>

### GetSchoolByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-user-v1-public-GetSchoolListRequest"></a>

### GetSchoolListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| type | [modules.user.v1.shared.SchoolType](#modules-user-v1-shared-SchoolType) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| level | [modules.user.v1.shared.EducationLevel](#modules-user-v1-shared-EducationLevel) |  |  |
| province | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-user-v1-public-GetSchoolListResponse"></a>

### GetSchoolListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| schools | [modules.user.v1.shared.School](#modules-user-v1-shared-School) |  |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |





 

 

 


<a name="modules-user-v1-public-SchoolService"></a>

### SchoolService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSchool | [CreateSchoolRequest](#modules-user-v1-public-CreateSchoolRequest) | [CreateSchoolResponse](#modules-user-v1-public-CreateSchoolResponse) |  |
| GetSchoolByID | [GetSchoolByIDRequest](#modules-user-v1-public-GetSchoolByIDRequest) | [.modules.user.v1.shared.School](#modules-user-v1-shared-School) |  |
| GetSchoolList | [GetSchoolListRequest](#modules-user-v1-public-GetSchoolListRequest) | [GetSchoolListResponse](#modules-user-v1-public-GetSchoolListResponse) |  |

 



<a name="modules_user_v1_public_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/student.proto



<a name="-GetStudentInstanceRequest"></a>

### GetStudentInstanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="-GetStudentInstanceResponse"></a>

### GetStudentInstanceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student | [modules.user.v1.shared.Student](#modules-user-v1-shared-Student) | repeated |  |






<a name="-RegisterStudentRequest"></a>

### RegisterStudentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student | [modules.user.v1.shared.Student](#modules-user-v1-shared-Student) |  |  |






<a name="-RegisterStudentResponse"></a>

### RegisterStudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="-UpdateStudentStatusRequest"></a>

### UpdateStudentStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| status | [modules.user.v1.shared.StudentStatus](#modules-user-v1-shared-StudentStatus) |  |  |






<a name="-UpdateStudentStatusResponse"></a>

### UpdateStudentStatusResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [modules.user.v1.shared.StudentStatus](#modules-user-v1-shared-StudentStatus) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="-StudentService"></a>

### StudentService
Service for student related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetStudentRegisteredInstances | [.GetStudentInstanceRequest](#GetStudentInstanceRequest) | [.GetStudentInstanceResponse](#GetStudentInstanceResponse) |  |
| RegisterStudentToInstance | [.RegisterStudentRequest](#RegisterStudentRequest) | [.RegisterStudentResponse](#RegisterStudentResponse) |  |
| UpdateStudentStatus | [.UpdateStudentStatusRequest](#UpdateStudentStatusRequest) | [.UpdateStudentStatusResponse](#UpdateStudentStatusResponse) |  |

 



<a name="modules_user_v1_public_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/user.proto



<a name="modules-user-v1-public-CreateUserRequest"></a>

### CreateUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.user.v1.shared.User](#modules-user-v1-shared-User) |  |  |






<a name="modules-user-v1-public-GetUserListRequest"></a>

### GetUserListRequest
Request body of GetUserList


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| email | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-user-v1-public-GetUserListResponse"></a>

### GetUserListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.user.v1.shared.User](#modules-user-v1-shared-User) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-user-v1-public-GetUserRequest"></a>

### GetUserRequest
Represents request payload to retrieve user


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| username | [string](#string) |  |  |






<a name="modules-user-v1-public-GetUserResponse"></a>

### GetUserResponse
Represents user&#39;s detail


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [modules.user.v1.shared.User](#modules-user-v1-shared-User) |  |  |






<a name="modules-user-v1-public-InviteUserRequest"></a>

### InviteUserRequest
Response body of Invite


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| instance | [string](#string) |  |  |
| role | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |






<a name="modules-user-v1-public-InviteUserResponse"></a>

### InviteUserResponse
Response body of Invite


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-user-v1-public-NewPasswordRequest"></a>

### NewPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |






<a name="modules-user-v1-public-NewPasswordResponse"></a>

### NewPasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-user-v1-public-UserService"></a>

### UserService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUser | [GetUserRequest](#modules-user-v1-public-GetUserRequest) | [GetUserResponse](#modules-user-v1-public-GetUserResponse) |  |
| InviteUser | [InviteUserRequest](#modules-user-v1-public-InviteUserRequest) | [InviteUserResponse](#modules-user-v1-public-InviteUserResponse) |  |
| GetUserList | [GetUserListRequest](#modules-user-v1-public-GetUserListRequest) | [GetUserListResponse](#modules-user-v1-public-GetUserListResponse) |  |
| NewPassword | [NewPasswordRequest](#modules-user-v1-public-NewPasswordRequest) | [NewPasswordResponse](#modules-user-v1-public-NewPasswordResponse) |  |

 



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

