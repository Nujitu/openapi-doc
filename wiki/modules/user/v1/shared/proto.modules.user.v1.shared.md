# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/user/v1/shared/school.proto](#modules_user_v1_shared_school-proto)
    - [School](#modules-user-v1-shared-School)
  
    - [EducationLevel](#modules-user-v1-shared-EducationLevel)
    - [SchoolType](#modules-user-v1-shared-SchoolType)
  
- [modules/user/v1/shared/student.proto](#modules_user_v1_shared_student-proto)
    - [Student](#modules-user-v1-shared-Student)
  
    - [StudentStatus](#modules-user-v1-shared-StudentStatus)
  
- [modules/user/v1/shared/teacher.proto](#modules_user_v1_shared_teacher-proto)
    - [Teacher](#modules-user-v1-shared-Teacher)
  
    - [TeacherStatus](#modules-user-v1-shared-TeacherStatus)
  
- [modules/user/v1/shared/user.proto](#modules_user_v1_shared_user-proto)
    - [Address](#modules-user-v1-shared-Address)
    - [User](#modules-user-v1-shared-User)
    - [UserProfile](#modules-user-v1-shared-UserProfile)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_user_v1_shared_school-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/shared/school.proto



<a name="modules-user-v1-shared-School"></a>

### School



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| type | [SchoolType](#modules-user-v1-shared-SchoolType) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| level | [EducationLevel](#modules-user-v1-shared-EducationLevel) |  |  |
| province | [string](#string) |  |  |
| img_url | [string](#string) |  |  |
| school_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-user-v1-shared-EducationLevel"></a>

### EducationLevel


| Name | Number | Description |
| ---- | ------ | ----------- |
| EDUCATION_LEVEL_UNSPECIFIED | 0 |  |
| EDUCATION_LEVEL_ELEMENTARY | 1 |  |
| EDUCATION_LEVEL_JUNIOR_HIGH | 2 |  |
| EDUCATION_LEVEL_SENIOR_HIGH | 3 |  |
| EDUCATION_LEVEL_COLLEGE | 4 |  |



<a name="modules-user-v1-shared-SchoolType"></a>

### SchoolType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SCHOOL_TYPE_UNSPECIFIED | 0 |  |
| SCHOOL_TYPE_PUBLIC | 1 |  |
| SCHOOL_TYPE_PRIVATE | 2 |  |


 

 

 



<a name="modules_user_v1_shared_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/shared/student.proto



<a name="modules-user-v1-shared-Student"></a>

### Student



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [StudentStatus](#modules-user-v1-shared-StudentStatus) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-user-v1-shared-StudentStatus"></a>

### StudentStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| STUDENT_STATUS_UNSPECIFIED | 0 | Default Student status. It will not be used. |
| STUDENT_STATUS_ACTIVE | 1 | Student status active |
| STUDENT_STATUS_INACTIVE | 2 | Student status inactive |
| STUDENT_STATUS_ALUMNI | 3 | indicates that the student is now an alumnus or finished their studies |


 

 

 



<a name="modules_user_v1_shared_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/shared/teacher.proto



<a name="modules-user-v1-shared-Teacher"></a>

### Teacher



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| nip | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [TeacherStatus](#modules-user-v1-shared-TeacherStatus) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-user-v1-shared-TeacherStatus"></a>

### TeacherStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| TEACHER_STATUS_UNSPECIFIED | 0 | Default TEACHER status. It will not be used. |
| TEACHER_STATUS_ACTIVE | 1 | TEACHER status active |
| TEACHER_STATUS_INACTIVE | 2 | TEACHER status inactive |
| TEACHER_STATUS_ALUMNI | 3 | indicates that the TEACHER is now an alumnus or finished their studies |


 

 

 



<a name="modules_user_v1_shared_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/shared/user.proto



<a name="modules-user-v1-shared-Address"></a>

### Address
Represents user&#39;s address


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| street | [string](#string) |  |  |
| city | [string](#string) |  |  |
| state | [string](#string) |  |  |
| country | [string](#string) |  |  |
| postal_code | [string](#string) |  |  |






<a name="modules-user-v1-shared-User"></a>

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
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| date_of_birth | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| place_of_birth | [string](#string) |  |  |
| gender | [modules.authentication.v1.shared.Gender](#modules-authentication-v1-shared-Gender) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |






<a name="modules-user-v1-shared-UserProfile"></a>

### UserProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gender | [modules.authentication.v1.shared.Gender](#modules-authentication-v1-shared-Gender) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |





 

 

 

 



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

