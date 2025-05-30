# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/private/class_group.proto](#modules_material_v1_private_class_group-proto)
    - [GetTeacherCoursesRequest](#modules-material-v1-private-GetTeacherCoursesRequest)
    - [GetTeacherCoursesResponse](#modules-material-v1-private-GetTeacherCoursesResponse)
  
    - [ClassGroupService](#modules-material-v1-private-ClassGroupService)
  
- [modules/material/v1/private/curriculum.proto](#modules_material_v1_private_curriculum-proto)
    - [GetCurriculumByIdRequest](#modules-material-v1-private-GetCurriculumByIdRequest)
  
    - [CurriculumService](#modules-material-v1-private-CurriculumService)
  
- [modules/material/v1/private/subject.proto](#modules_material_v1_private_subject-proto)
    - [GetSubjectByIdRequest](#modules-material-v1-private-GetSubjectByIdRequest)
  
    - [SubjectService](#modules-material-v1-private-SubjectService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_material_v1_private_class_group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/private/class_group.proto



<a name="modules-material-v1-private-GetTeacherCoursesRequest"></a>

### GetTeacherCoursesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |






<a name="modules-material-v1-private-GetTeacherCoursesResponse"></a>

### GetTeacherCoursesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |





 

 

 


<a name="modules-material-v1-private-ClassGroupService"></a>

### ClassGroupService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetTeacherCourses | [GetTeacherCoursesRequest](#modules-material-v1-private-GetTeacherCoursesRequest) | [GetTeacherCoursesResponse](#modules-material-v1-private-GetTeacherCoursesResponse) |  |

 



<a name="modules_material_v1_private_curriculum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/private/curriculum.proto



<a name="modules-material-v1-private-GetCurriculumByIdRequest"></a>

### GetCurriculumByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |





 

 

 


<a name="modules-material-v1-private-CurriculumService"></a>

### CurriculumService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetCurriculumByID | [GetCurriculumByIdRequest](#modules-material-v1-private-GetCurriculumByIdRequest) | [.modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |

 



<a name="modules_material_v1_private_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/private/subject.proto



<a name="modules-material-v1-private-GetSubjectByIdRequest"></a>

### GetSubjectByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |





 

 

 


<a name="modules-material-v1-private-SubjectService"></a>

### SubjectService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetSubjectByID | [GetSubjectByIdRequest](#modules-material-v1-private-GetSubjectByIdRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |

 



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

