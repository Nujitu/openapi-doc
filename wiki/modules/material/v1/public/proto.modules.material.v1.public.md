# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/public/class_group.proto](#modules_material_v1_public_class_group-proto)
    - [CreateClassGroupRequest](#modules-material-v1-public-CreateClassGroupRequest)
    - [GetClassGroupDetailRequest](#modules-material-v1-public-GetClassGroupDetailRequest)
    - [GetClassGroupDetailResponse](#modules-material-v1-public-GetClassGroupDetailResponse)
    - [GetClassGroupListRequest](#modules-material-v1-public-GetClassGroupListRequest)
    - [GetClassGroupListResponse](#modules-material-v1-public-GetClassGroupListResponse)
    - [UpdateClassGroupRequest](#modules-material-v1-public-UpdateClassGroupRequest)
    - [UpdateClassGroupResponse](#modules-material-v1-public-UpdateClassGroupResponse)
  
    - [ClassGroupService](#modules-material-v1-public-ClassGroupService)
  
- [modules/material/v1/public/curriculum.proto](#modules_material_v1_public_curriculum-proto)
    - [CreateCurriculumRequest](#modules-material-v1-public-CreateCurriculumRequest)
  
    - [CurriculumService](#modules-material-v1-public-CurriculumService)
  
- [modules/material/v1/public/subject.proto](#modules_material_v1_public_subject-proto)
    - [CreateSubjectRequest](#modules-material-v1-public-CreateSubjectRequest)
    - [GetStudentSubjectListRequest](#modules-material-v1-public-GetStudentSubjectListRequest)
    - [GetSubjectByIDRequest](#modules-material-v1-public-GetSubjectByIDRequest)
    - [GetSubjectListRequest](#modules-material-v1-public-GetSubjectListRequest)
    - [GetSubjectListResponse](#modules-material-v1-public-GetSubjectListResponse)
    - [GetTeacherSubjectListRequest](#modules-material-v1-public-GetTeacherSubjectListRequest)
    - [SubjectListResponse](#modules-material-v1-public-SubjectListResponse)
    - [UpdateSubjectRequest](#modules-material-v1-public-UpdateSubjectRequest)
  
    - [SubjectService](#modules-material-v1-public-SubjectService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_material_v1_public_class_group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/class_group.proto



<a name="modules-material-v1-public-CreateClassGroupRequest"></a>

### CreateClassGroupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| academic_term | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| subject_ids | [string](#string) | repeated |  |






<a name="modules-material-v1-public-GetClassGroupDetailRequest"></a>

### GetClassGroupDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetClassGroupDetailResponse"></a>

### GetClassGroupDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |  |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |






<a name="modules-material-v1-public-GetClassGroupListRequest"></a>

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
| group_subject_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetClassGroupListResponse"></a>

### GetClassGroupListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-UpdateClassGroupRequest"></a>

### UpdateClassGroupRequest



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
| subject_ids | [string](#string) | repeated |  |






<a name="modules-material-v1-public-UpdateClassGroupResponse"></a>

### UpdateClassGroupResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |  |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |





 

 

 


<a name="modules-material-v1-public-ClassGroupService"></a>

### ClassGroupService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateClassGroup | [CreateClassGroupRequest](#modules-material-v1-public-CreateClassGroupRequest) | [.modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |
| GetClassGroupDetail | [GetClassGroupDetailRequest](#modules-material-v1-public-GetClassGroupDetailRequest) | [GetClassGroupDetailResponse](#modules-material-v1-public-GetClassGroupDetailResponse) |  |
| UpdateClassGroup | [UpdateClassGroupRequest](#modules-material-v1-public-UpdateClassGroupRequest) | [UpdateClassGroupResponse](#modules-material-v1-public-UpdateClassGroupResponse) |  |
| GetClassGroupList | [GetClassGroupListRequest](#modules-material-v1-public-GetClassGroupListRequest) | [GetClassGroupListResponse](#modules-material-v1-public-GetClassGroupListResponse) |  |

 



<a name="modules_material_v1_public_curriculum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/curriculum.proto



<a name="modules-material-v1-public-CreateCurriculumRequest"></a>

### CreateCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |  |





 

 

 


<a name="modules-material-v1-public-CurriculumService"></a>

### CurriculumService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateCurriculum | [CreateCurriculumRequest](#modules-material-v1-public-CreateCurriculumRequest) | [.modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |

 



<a name="modules_material_v1_public_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/subject.proto



<a name="modules-material-v1-public-CreateSubjectRequest"></a>

### CreateSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| description | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetStudentSubjectListRequest"></a>

### GetStudentSubjectListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| class_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetSubjectByIDRequest"></a>

### GetSubjectByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetSubjectListRequest"></a>

### GetSubjectListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetSubjectListResponse"></a>

### GetSubjectListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-GetTeacherSubjectListRequest"></a>

### GetTeacherSubjectListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |
| class_id | [string](#string) |  |  |






<a name="modules-material-v1-public-SubjectListResponse"></a>

### SubjectListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |






<a name="modules-material-v1-public-UpdateSubjectRequest"></a>

### UpdateSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| description | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |





 

 

 


<a name="modules-material-v1-public-SubjectService"></a>

### SubjectService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSubject | [CreateSubjectRequest](#modules-material-v1-public-CreateSubjectRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| UpdateSubject | [UpdateSubjectRequest](#modules-material-v1-public-UpdateSubjectRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| GetSubjectByID | [GetSubjectByIDRequest](#modules-material-v1-public-GetSubjectByIDRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| GetSubjectList | [GetSubjectListRequest](#modules-material-v1-public-GetSubjectListRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| GetStudentSubjectList | [GetStudentSubjectListRequest](#modules-material-v1-public-GetStudentSubjectListRequest) | [SubjectListResponse](#modules-material-v1-public-SubjectListResponse) |  |
| GetTeacherSubjectList | [GetTeacherSubjectListRequest](#modules-material-v1-public-GetTeacherSubjectListRequest) | [SubjectListResponse](#modules-material-v1-public-SubjectListResponse) |  |

 



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

