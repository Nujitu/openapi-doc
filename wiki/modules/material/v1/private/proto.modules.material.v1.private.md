# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/private/class_group.proto](#modules_material_v1_private_class_group-proto)
    - [GetClassGroupListRequest](#modules-material-v1-private-GetClassGroupListRequest)
    - [GetClassGroupListResponse](#modules-material-v1-private-GetClassGroupListResponse)
    - [GetClassGroupSubjectsRequest](#modules-material-v1-private-GetClassGroupSubjectsRequest)
    - [GetClassGroupSubjectsResponse](#modules-material-v1-private-GetClassGroupSubjectsResponse)
  
    - [ClassGroupService](#modules-material-v1-private-ClassGroupService)
  
- [modules/material/v1/private/curriculum.proto](#modules_material_v1_private_curriculum-proto)
    - [GetCurriculumByIdRequest](#modules-material-v1-private-GetCurriculumByIdRequest)
  
    - [CurriculumService](#modules-material-v1-private-CurriculumService)
  
- [modules/material/v1/private/subject.proto](#modules_material_v1_private_subject-proto)
    - [GetByIdsRequest](#modules-material-v1-private-GetByIdsRequest)
    - [GetByIdsResponse](#modules-material-v1-private-GetByIdsResponse)
    - [GetByTeacherIdsRequest](#modules-material-v1-private-GetByTeacherIdsRequest)
    - [GetByTeacherIdsResponse](#modules-material-v1-private-GetByTeacherIdsResponse)
  
    - [PrivateSubjectService](#modules-material-v1-private-PrivateSubjectService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_material_v1_private_class_group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/private/class_group.proto



<a name="modules-material-v1-private-GetClassGroupListRequest"></a>

### GetClassGroupListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| academic_term | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-private-GetClassGroupListResponse"></a>

### GetClassGroupListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-private-GetClassGroupSubjectsRequest"></a>

### GetClassGroupSubjectsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group_id | [string](#string) |  |  |






<a name="modules-material-v1-private-GetClassGroupSubjectsResponse"></a>

### GetClassGroupSubjectsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail) | repeated |  |





 

 

 


<a name="modules-material-v1-private-ClassGroupService"></a>

### ClassGroupService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetClassGroupList | [GetClassGroupListRequest](#modules-material-v1-private-GetClassGroupListRequest) | [GetClassGroupListResponse](#modules-material-v1-private-GetClassGroupListResponse) |  |
| GetClassGroupSubjects | [GetClassGroupSubjectsRequest](#modules-material-v1-private-GetClassGroupSubjectsRequest) | [GetClassGroupSubjectsResponse](#modules-material-v1-private-GetClassGroupSubjectsResponse) |  |

 



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



<a name="modules-material-v1-private-GetByIdsRequest"></a>

### GetByIdsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated |  |






<a name="modules-material-v1-private-GetByIdsResponse"></a>

### GetByIdsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |






<a name="modules-material-v1-private-GetByTeacherIdsRequest"></a>

### GetByTeacherIdsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [string](#string) | repeated |  |






<a name="modules-material-v1-private-GetByTeacherIdsResponse"></a>

### GetByTeacherIdsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |





 

 

 


<a name="modules-material-v1-private-PrivateSubjectService"></a>

### PrivateSubjectService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetByIds | [GetByIdsRequest](#modules-material-v1-private-GetByIdsRequest) | [GetByIdsResponse](#modules-material-v1-private-GetByIdsResponse) |  |
| GetByTeacherIds | [GetByTeacherIdsRequest](#modules-material-v1-private-GetByTeacherIdsRequest) | [GetByTeacherIdsResponse](#modules-material-v1-private-GetByTeacherIdsResponse) |  |

 



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

