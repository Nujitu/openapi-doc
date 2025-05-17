# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/user/v1/public/school.proto](#modules_user_v1_public_school-proto)
    - [CreateSchoolRequest](#modules-user-v1-public-CreateSchoolRequest)
    - [CreateSchoolResponse](#modules-user-v1-public-CreateSchoolResponse)
    - [GetSchoolByIDRequest](#modules-user-v1-public-GetSchoolByIDRequest)
    - [GetSchoolListRequest](#modules-user-v1-public-GetSchoolListRequest)
    - [GetSchoolListResponse](#modules-user-v1-public-GetSchoolListResponse)
    - [UpdateSchoolInfoRequest](#modules-user-v1-public-UpdateSchoolInfoRequest)
    - [UpdateSchoolInfoResponse](#modules-user-v1-public-UpdateSchoolInfoResponse)
  
    - [SchoolService](#modules-user-v1-public-SchoolService)
  
- [modules/user/v1/public/student.proto](#modules_user_v1_public_student-proto)
    - [GetStudentByIDRequest](#-GetStudentByIDRequest)
    - [GetStudentListRequest](#-GetStudentListRequest)
    - [GetStudentListResponse](#-GetStudentListResponse)
    - [StudentResponse](#-StudentResponse)
    - [UpdateStudentRequest](#-UpdateStudentRequest)
    - [UpdateStudentResponse](#-UpdateStudentResponse)
  
    - [StudentService](#-StudentService)
  
- [modules/user/v1/public/teacher.proto](#modules_user_v1_public_teacher-proto)
    - [GetTeacherByIDRequest](#-GetTeacherByIDRequest)
    - [GetTeacherListRequest](#-GetTeacherListRequest)
    - [GetTeacherListResponse](#-GetTeacherListResponse)
    - [TeacherAchievement](#-TeacherAchievement)
    - [TeacherEducation](#-TeacherEducation)
    - [TeacherInformation](#-TeacherInformation)
    - [TeacherLicense](#-TeacherLicense)
    - [TeacherResponse](#-TeacherResponse)
    - [UpdateTeacherRequest](#-UpdateTeacherRequest)
    - [UpdateTeacherResponse](#-UpdateTeacherResponse)
  
    - [TeacherService](#-TeacherService)
  
- [modules/user/v1/public/user.proto](#modules_user_v1_public_user-proto)
    - [CreateUserPresignedPostUrlRequest](#modules-user-v1-public-CreateUserPresignedPostUrlRequest)
    - [CreateUserPresignedPostUrlResponse](#modules-user-v1-public-CreateUserPresignedPostUrlResponse)
    - [GetUserListRequest](#modules-user-v1-public-GetUserListRequest)
    - [GetUserListResponse](#modules-user-v1-public-GetUserListResponse)
    - [GetUserRequest](#modules-user-v1-public-GetUserRequest)
    - [GetUserResponse](#modules-user-v1-public-GetUserResponse)
    - [InviteUserRequest](#modules-user-v1-public-InviteUserRequest)
    - [InviteUserResponse](#modules-user-v1-public-InviteUserResponse)
    - [NewPasswordRequest](#modules-user-v1-public-NewPasswordRequest)
    - [NewPasswordResponse](#modules-user-v1-public-NewPasswordResponse)
    - [UpdateUserRequest](#modules-user-v1-public-UpdateUserRequest)
    - [UpdateUserResponse](#modules-user-v1-public-UpdateUserResponse)
  
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






<a name="modules-user-v1-public-UpdateSchoolInfoRequest"></a>

### UpdateSchoolInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| school_type | [modules.user.v1.shared.SchoolType](#modules-user-v1-shared-SchoolType) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| education_level | [modules.user.v1.shared.EducationLevel](#modules-user-v1-shared-EducationLevel) |  |  |
| school_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| website | [string](#string) |  |  |






<a name="modules-user-v1-public-UpdateSchoolInfoResponse"></a>

### UpdateSchoolInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-user-v1-public-SchoolService"></a>

### SchoolService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSchool | [CreateSchoolRequest](#modules-user-v1-public-CreateSchoolRequest) | [CreateSchoolResponse](#modules-user-v1-public-CreateSchoolResponse) |  |
| GetSchoolByID | [GetSchoolByIDRequest](#modules-user-v1-public-GetSchoolByIDRequest) | [.modules.user.v1.shared.School](#modules-user-v1-shared-School) |  |
| GetSchoolList | [GetSchoolListRequest](#modules-user-v1-public-GetSchoolListRequest) | [GetSchoolListResponse](#modules-user-v1-public-GetSchoolListResponse) |  |
| UpdateSchoolInfo | [UpdateSchoolInfoRequest](#modules-user-v1-public-UpdateSchoolInfoRequest) | [UpdateSchoolInfoResponse](#modules-user-v1-public-UpdateSchoolInfoResponse) |  |

 



<a name="modules_user_v1_public_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/student.proto



<a name="-GetStudentByIDRequest"></a>

### GetStudentByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="-GetStudentListRequest"></a>

### GetStudentListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="-GetStudentListResponse"></a>

### GetStudentListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| list | [StudentResponse](#StudentResponse) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="-StudentResponse"></a>

### StudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [modules.user.v1.shared.StudentStatus](#modules-user-v1-shared-StudentStatus) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| address | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="-UpdateStudentRequest"></a>

### UpdateStudentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| birth_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| birth_place | [string](#string) |  |  |
| address | [string](#string) |  |  |
| gender | [string](#string) |  |  |






<a name="-UpdateStudentResponse"></a>

### UpdateStudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="-StudentService"></a>

### StudentService
Service for student related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetStudentByID | [.GetStudentByIDRequest](#GetStudentByIDRequest) | [.StudentResponse](#StudentResponse) |  |
| GetStudentList | [.GetStudentListRequest](#GetStudentListRequest) | [.GetStudentListResponse](#GetStudentListResponse) |  |
| UpdateStudent | [.UpdateStudentRequest](#UpdateStudentRequest) | [.UpdateStudentResponse](#UpdateStudentResponse) |  |

 



<a name="modules_user_v1_public_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/teacher.proto



<a name="-GetTeacherByIDRequest"></a>

### GetTeacherByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="-GetTeacherListRequest"></a>

### GetTeacherListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| nip | [string](#string) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="-GetTeacherListResponse"></a>

### GetTeacherListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teachers | [TeacherResponse](#TeacherResponse) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="-TeacherAchievement"></a>

### TeacherAchievement



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| achievement_name | [string](#string) |  |  |
| achievement_date | [string](#string) |  |  |
| organization | [string](#string) |  |  |
| document | [string](#string) |  |  |






<a name="-TeacherEducation"></a>

### TeacherEducation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| school | [string](#string) |  |  |
| title | [string](#string) |  |  |
| major | [string](#string) |  |  |
| year_start | [string](#string) |  |  |
| year_end | [string](#string) |  |  |
| gpa | [string](#string) |  |  |
| id_credential | [string](#string) |  |  |
| document | [string](#string) |  |  |






<a name="-TeacherInformation"></a>

### TeacherInformation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nuptk | [string](#string) |  |  |
| registration_number | [string](#string) |  |  |
| year_of_work | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [string](#string) |  |  |






<a name="-TeacherLicense"></a>

### TeacherLicense



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| license_name | [string](#string) |  |  |
| year_start | [string](#string) |  |  |
| year_end | [string](#string) |  |  |
| organization | [string](#string) |  |  |






<a name="-TeacherResponse"></a>

### TeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| nip | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [modules.user.v1.shared.TeacherStatus](#modules-user-v1-shared-TeacherStatus) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| address | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="-UpdateTeacherRequest"></a>

### UpdateTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_information | [TeacherInformation](#TeacherInformation) |  |  |
| teacher_education | [TeacherEducation](#TeacherEducation) |  |  |
| teacher_license | [TeacherLicense](#TeacherLicense) |  |  |
| teacher_achievement | [TeacherAchievement](#TeacherAchievement) |  |  |






<a name="-UpdateTeacherResponse"></a>

### UpdateTeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="-TeacherService"></a>

### TeacherService
Service for teacher related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetTeacherByID | [.GetTeacherByIDRequest](#GetTeacherByIDRequest) | [.TeacherResponse](#TeacherResponse) |  |
| GetTeacherList | [.GetTeacherListRequest](#GetTeacherListRequest) | [.GetTeacherListResponse](#GetTeacherListResponse) |  |
| UpdateTeacher | [.UpdateTeacherRequest](#UpdateTeacherRequest) | [.UpdateTeacherResponse](#UpdateTeacherResponse) |  |

 



<a name="modules_user_v1_public_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/public/user.proto



<a name="modules-user-v1-public-CreateUserPresignedPostUrlRequest"></a>

### CreateUserPresignedPostUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [common.v1.S3PresignedUrlRequest](#common-v1-S3PresignedUrlRequest) | repeated |  |






<a name="modules-user-v1-public-CreateUserPresignedPostUrlResponse"></a>

### CreateUserPresignedPostUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| presignedUrls | [common.v1.S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse) | repeated |  |






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
| role_id | [string](#string) | optional |  |






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






<a name="modules-user-v1-public-UpdateUserRequest"></a>

### UpdateUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| date_of_birth | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| address | [string](#string) |  |  |
| gender | [modules.authentication.v1.shared.Gender](#modules-authentication-v1-shared-Gender) |  |  |
| place_of_birth | [string](#string) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| full_name | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |






<a name="modules-user-v1-public-UpdateUserResponse"></a>

### UpdateUserResponse



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
| UpdateUser | [UpdateUserRequest](#modules-user-v1-public-UpdateUserRequest) | [UpdateUserResponse](#modules-user-v1-public-UpdateUserResponse) |  |
| CreateUserPresignedPostUrl | [CreateUserPresignedPostUrlRequest](#modules-user-v1-public-CreateUserPresignedPostUrlRequest) | [CreateUserPresignedPostUrlResponse](#modules-user-v1-public-CreateUserPresignedPostUrlResponse) |  |

 



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

