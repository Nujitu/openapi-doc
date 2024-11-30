# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/shared/class_group.proto](#modules_material_v1_shared_class_group-proto)
    - [ClassGroup](#modules-material-v1-shared-ClassGroup)
    - [ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail)
  
    - [ClassGroupType](#modules-material-v1-shared-ClassGroupType)
  
- [modules/material/v1/shared/curriculum.proto](#modules_material_v1_shared_curriculum-proto)
    - [Curriculum](#modules-material-v1-shared-Curriculum)
  
    - [CurriculumStatus](#modules-material-v1-shared-CurriculumStatus)
    - [CurriculumType](#modules-material-v1-shared-CurriculumType)
  
- [modules/material/v1/shared/curriculum_group_component.proto](#modules_material_v1_shared_curriculum_group_component-proto)
    - [CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent)
  
    - [ComponentType](#modules-material-v1-shared-ComponentType)
  
- [modules/material/v1/shared/header_component.proto](#modules_material_v1_shared_header_component-proto)
    - [HeaderComponent](#modules-material-v1-shared-HeaderComponent)
  
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
| homeroom_teacher | [string](#string) |  |  |
| group_subject_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| type | [ClassGroupType](#modules-material-v1-shared-ClassGroupType) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-material-v1-shared-ClassSubjectDetail"></a>

### ClassSubjectDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| classgroup_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| homeroom_teacher_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| subject_type | [SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-material-v1-shared-ClassGroupType"></a>

### ClassGroupType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CLASS_GENERAL | 0 |  |
| CLASS_COMBINED | 1 |  |


 

 

 



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
| academic_term | [string](#string) |  |  |
| semester | [string](#string) |  |  |
| type | [CurriculumType](#modules-material-v1-shared-CurriculumType) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| start_year | [string](#string) |  |  |
| end_year | [string](#string) |  |  |
| components | [CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-material-v1-shared-CurriculumStatus"></a>

### CurriculumStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| CURRICULUM_STATUS_ACTIVE | 0 | Curriculum status active |
| CURRICULUM_STATUS_INACTIVE | 1 | Curriculum status inactive |



<a name="modules-material-v1-shared-CurriculumType"></a>

### CurriculumType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CURRICULUM_NATIONAL | 0 |  |
| CURRICULUM_OTHERS | 99 |  |


 

 

 



<a name="modules_material_v1_shared_curriculum_group_component-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/curriculum_group_component.proto



<a name="modules-material-v1-shared-CurriculumGroupComponent"></a>

### CurriculumGroupComponent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| description | [string](#string) |  |  |
| component_type | [ComponentType](#modules-material-v1-shared-ComponentType) |  |  |
| header_id | [string](#string) |  |  |





 


<a name="modules-material-v1-shared-ComponentType"></a>

### ComponentType


| Name | Number | Description |
| ---- | ------ | ----------- |
| TEXT_INPUT | 0 |  |
| MULTIPLE_TEXT_INPUT | 1 |  |
| TEXT_DESCRIPTION | 2 |  |
| MULTIPLE_TEXT_DESCRIPTION | 3 |  |
| CHECKLIST | 4 |  |
| RADIO_BUTTON | 5 |  |


 

 

 



<a name="modules_material_v1_shared_header_component-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/header_component.proto



<a name="modules-material-v1-shared-HeaderComponent"></a>

### HeaderComponent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |





 

 

 

 



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

