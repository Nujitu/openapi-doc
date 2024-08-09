# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/shared/class_group.proto](#modules_material_v1_shared_class_group-proto)
    - [ClassGroup](#modules-material-v1-shared-ClassGroup)
  
- [modules/material/v1/shared/curriculum.proto](#modules_material_v1_shared_curriculum-proto)
    - [Curriculum](#modules-material-v1-shared-Curriculum)
    - [Curriculum.ComponentsEntry](#modules-material-v1-shared-Curriculum-ComponentsEntry)
  
    - [CurriculumStatus](#modules-material-v1-shared-CurriculumStatus)
  
- [modules/material/v1/shared/subject.proto](#modules_material_v1_shared_subject-proto)
    - [Subject](#modules-material-v1-shared-Subject)
  
    - [SubjectType](#modules-material-v1-shared-SubjectType)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_material_v1_shared_class_group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/class_group.proto



<a name="modules-material-v1-shared-ClassGroup"></a>

### ClassGroup



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| academic_term | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| group_subject_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_material_v1_shared_curriculum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/curriculum.proto



<a name="modules-material-v1-shared-Curriculum"></a>

### Curriculum



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| logo | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| status | [CurriculumStatus](#modules-material-v1-shared-CurriculumStatus) |  |  |
| notes | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| components | [Curriculum.ComponentsEntry](#modules-material-v1-shared-Curriculum-ComponentsEntry) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-material-v1-shared-Curriculum-ComponentsEntry"></a>

### Curriculum.ComponentsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [common.v1.Dict](#common-v1-Dict) |  |  |





 


<a name="modules-material-v1-shared-CurriculumStatus"></a>

### CurriculumStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| CURRICULUM_STATUS_ACTIVE | 0 | Curriculum status active |
| CURRICULUM_STATUS_INACTIVE | 1 | Curriculum status inactive |


 

 

 



<a name="modules_material_v1_shared_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/subject.proto



<a name="modules-material-v1-shared-Subject"></a>

### Subject



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| description | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-material-v1-shared-SubjectType"></a>

### SubjectType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBJECT_GENERAL | 0 |  |
| SUBJECT_MAJOR | 1 |  |
| SUBJECT_SELECTIVE | 2 |  |


 

 

 



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

