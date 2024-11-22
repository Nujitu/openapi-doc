# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/user/v1/private/student.proto](#modules_user_v1_private_student-proto)
    - [GetStudentByIDRequest](#modules-user-v1-private-GetStudentByIDRequest)
    - [GetStudentByIDResponse](#modules-user-v1-private-GetStudentByIDResponse)
    - [GetStudentByIDsRequest](#modules-user-v1-private-GetStudentByIDsRequest)
    - [GetStudentByIDsResponse](#modules-user-v1-private-GetStudentByIDsResponse)
    - [RegisterRequest](#modules-user-v1-private-RegisterRequest)
    - [RegisterResponse](#modules-user-v1-private-RegisterResponse)
  
    - [StudentPrivateService](#modules-user-v1-private-StudentPrivateService)
  
- [modules/user/v1/private/teacher.proto](#modules_user_v1_private_teacher-proto)
    - [GetTeacherByIDRequest](#modules-user-v1-private-GetTeacherByIDRequest)
    - [GetTeacherByIDResponse](#modules-user-v1-private-GetTeacherByIDResponse)
    - [RegisterTeacherRequest](#modules-user-v1-private-RegisterTeacherRequest)
    - [RegisterTeacherResponse](#modules-user-v1-private-RegisterTeacherResponse)
  
    - [TeacherPrivateService](#modules-user-v1-private-TeacherPrivateService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_user_v1_private_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/private/student.proto



<a name="modules-user-v1-private-GetStudentByIDRequest"></a>

### GetStudentByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-user-v1-private-GetStudentByIDResponse"></a>

### GetStudentByIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student | [modules.user.v1.shared.Student](#modules-user-v1-shared-Student) |  |  |






<a name="modules-user-v1-private-GetStudentByIDsRequest"></a>

### GetStudentByIDsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | repeated |  |






<a name="modules-user-v1-private-GetStudentByIDsResponse"></a>

### GetStudentByIDsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student | [modules.user.v1.shared.Student](#modules-user-v1-shared-Student) | repeated |  |






<a name="modules-user-v1-private-RegisterRequest"></a>

### RegisterRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student | [modules.user.v1.shared.Student](#modules-user-v1-shared-Student) |  |  |






<a name="modules-user-v1-private-RegisterResponse"></a>

### RegisterResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-user-v1-private-StudentPrivateService"></a>

### StudentPrivateService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Register | [RegisterRequest](#modules-user-v1-private-RegisterRequest) | [RegisterResponse](#modules-user-v1-private-RegisterResponse) |  |
| GetStudentByID | [GetStudentByIDRequest](#modules-user-v1-private-GetStudentByIDRequest) | [GetStudentByIDResponse](#modules-user-v1-private-GetStudentByIDResponse) |  |
| GetStudentByIDs | [GetStudentByIDsRequest](#modules-user-v1-private-GetStudentByIDsRequest) | [GetStudentByIDsResponse](#modules-user-v1-private-GetStudentByIDsResponse) |  |

 



<a name="modules_user_v1_private_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/user/v1/private/teacher.proto



<a name="modules-user-v1-private-GetTeacherByIDRequest"></a>

### GetTeacherByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-user-v1-private-GetTeacherByIDResponse"></a>

### GetTeacherByIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher | [modules.user.v1.shared.Teacher](#modules-user-v1-shared-Teacher) |  |  |






<a name="modules-user-v1-private-RegisterTeacherRequest"></a>

### RegisterTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher | [modules.user.v1.shared.Teacher](#modules-user-v1-shared-Teacher) |  |  |






<a name="modules-user-v1-private-RegisterTeacherResponse"></a>

### RegisterTeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-user-v1-private-TeacherPrivateService"></a>

### TeacherPrivateService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Register | [RegisterTeacherRequest](#modules-user-v1-private-RegisterTeacherRequest) | [RegisterTeacherResponse](#modules-user-v1-private-RegisterTeacherResponse) |  |
| GetByID | [GetTeacherByIDRequest](#modules-user-v1-private-GetTeacherByIDRequest) | [GetTeacherByIDResponse](#modules-user-v1-private-GetTeacherByIDResponse) |  |

 



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

