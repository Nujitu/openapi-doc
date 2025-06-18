# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/shared/class_group.proto](#modules_material_v1_shared_class_group-proto)
    - [ClassGroup](#modules-material-v1-shared-ClassGroup)
    - [ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail)
    - [StudentCourse](#modules-material-v1-shared-StudentCourse)
    - [TeacherClassCourses](#modules-material-v1-shared-TeacherClassCourses)
  
    - [ClassGroupType](#modules-material-v1-shared-ClassGroupType)
  
- [modules/material/v1/shared/class_subject.proto](#modules_material_v1_shared_class_subject-proto)
    - [ClassSubjectAnnouncement](#modules-material-v1-shared-ClassSubjectAnnouncement)
    - [ClassSubjectDetailPayload](#modules-material-v1-shared-ClassSubjectDetailPayload)
    - [CreateClassSubjectAnnouncementRequest](#modules-material-v1-shared-CreateClassSubjectAnnouncementRequest)
    - [CreateClassSubjectAnnouncementResponse](#modules-material-v1-shared-CreateClassSubjectAnnouncementResponse)
    - [DeleteClassSubjectAnnouncementRequest](#modules-material-v1-shared-DeleteClassSubjectAnnouncementRequest)
    - [DeleteClassSubjectAnnouncementResponse](#modules-material-v1-shared-DeleteClassSubjectAnnouncementResponse)
    - [GetClassSubjectAnnouncementRequest](#modules-material-v1-shared-GetClassSubjectAnnouncementRequest)
    - [GetClassSubjectAnnouncementResponse](#modules-material-v1-shared-GetClassSubjectAnnouncementResponse)
    - [UpdateClassSubjectDetailRequest](#modules-material-v1-shared-UpdateClassSubjectDetailRequest)
    - [UpdateClassSubjectDetailResponse](#modules-material-v1-shared-UpdateClassSubjectDetailResponse)
  
- [modules/material/v1/shared/curriculum.proto](#modules_material_v1_shared_curriculum-proto)
    - [Curriculum](#modules-material-v1-shared-Curriculum)
  
    - [CurriculumStatus](#modules-material-v1-shared-CurriculumStatus)
    - [CurriculumType](#modules-material-v1-shared-CurriculumType)
  
- [modules/material/v1/shared/curriculum_group_component.proto](#modules_material_v1_shared_curriculum_group_component-proto)
    - [CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent)
  
    - [ComponentType](#modules-material-v1-shared-ComponentType)
  
- [modules/material/v1/shared/header_component.proto](#modules_material_v1_shared_header_component-proto)
    - [HeaderComponent](#modules-material-v1-shared-HeaderComponent)
  
- [modules/material/v1/shared/major.proto](#modules_material_v1_shared_major-proto)
    - [Major](#modules-material-v1-shared-Major)
  
- [modules/material/v1/shared/subject.proto](#modules_material_v1_shared_subject-proto)
    - [Subject](#modules-material-v1-shared-Subject)
  
    - [SubjectType](#modules-material-v1-shared-SubjectType)
  
- [modules/material/v1/shared/teaching_tool_document.proto](#modules_material_v1_shared_teaching_tool_document-proto)
    - [ListTeachingToolAttachment](#modules-material-v1-shared-ListTeachingToolAttachment)
    - [ListTeachingToolDocument](#modules-material-v1-shared-ListTeachingToolDocument)
    - [TeachingToolDocument](#modules-material-v1-shared-TeachingToolDocument)
  
- [modules/material/v1/shared/teaching_tools.proto](#modules_material_v1_shared_teaching_tools-proto)
    - [TeachingToolComponent](#modules-material-v1-shared-TeachingToolComponent)
    - [TeachingTools](#modules-material-v1-shared-TeachingTools)
  
- [modules/material/v1/shared/user.proto](#modules_material_v1_shared_user-proto)
    - [UserPublicDetails](#modules-material-v1-shared-UserPublicDetails)
  
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






<a name="modules-material-v1-shared-StudentCourse"></a>

### StudentCourse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| classgroup_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| homeroom_teacher_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| classgroup_name | [string](#string) |  |  |
| major | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |






<a name="modules-material-v1-shared-TeacherClassCourses"></a>

### TeacherClassCourses



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| classgroup_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| homeroom_teacher_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| classgroup_name | [string](#string) |  |  |
| total_students | [string](#string) |  |  |
| major | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |





 


<a name="modules-material-v1-shared-ClassGroupType"></a>

### ClassGroupType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CLASS_DEFAULT | 0 | Default value |
| CLASS_GENERAL | 1 |  |
| CLASS_COMBINED | 2 |  |


 

 

 



<a name="modules_material_v1_shared_class_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/class_subject.proto



<a name="modules-material-v1-shared-ClassSubjectAnnouncement"></a>

### ClassSubjectAnnouncement



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| announcement_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| teacher_name | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-material-v1-shared-ClassSubjectDetailPayload"></a>

### ClassSubjectDetailPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_id | [string](#string) |  |  |
| homeroom_teacher_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| subject_type | [SubjectType](#modules-material-v1-shared-SubjectType) |  |  |






<a name="modules-material-v1-shared-CreateClassSubjectAnnouncementRequest"></a>

### CreateClassSubjectAnnouncementRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| teacher_name | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |






<a name="modules-material-v1-shared-CreateClassSubjectAnnouncementResponse"></a>

### CreateClassSubjectAnnouncementResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-shared-DeleteClassSubjectAnnouncementRequest"></a>

### DeleteClassSubjectAnnouncementRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| announcement_id | [string](#string) |  |  |






<a name="modules-material-v1-shared-DeleteClassSubjectAnnouncementResponse"></a>

### DeleteClassSubjectAnnouncementResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-shared-GetClassSubjectAnnouncementRequest"></a>

### GetClassSubjectAnnouncementRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| offset | [uint32](#uint32) |  |  |
| limit | [uint32](#uint32) |  |  |






<a name="modules-material-v1-shared-GetClassSubjectAnnouncementResponse"></a>

### GetClassSubjectAnnouncementResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| announcements | [ClassSubjectAnnouncement](#modules-material-v1-shared-ClassSubjectAnnouncement) | repeated |  |
| metadata | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  |  |






<a name="modules-material-v1-shared-UpdateClassSubjectDetailRequest"></a>

### UpdateClassSubjectDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| class_subjects | [ClassSubjectDetailPayload](#modules-material-v1-shared-ClassSubjectDetailPayload) | repeated |  |






<a name="modules-material-v1-shared-UpdateClassSubjectDetailResponse"></a>

### UpdateClassSubjectDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subjects | [ClassSubjectDetailPayload](#modules-material-v1-shared-ClassSubjectDetailPayload) | repeated |  |
| message | [string](#string) |  |  |





 

 

 

 



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
| CURRICULUM_STATUS_UNSPECIFIED | 0 |  |
| CURRICULUM_STATUS_INACTIVE | 1 | Curriculum status inactive |
| CURRICULUM_STATUS_ACTIVE | 2 | Curriculum status active |



<a name="modules-material-v1-shared-CurriculumType"></a>

### CurriculumType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CURRICULUM_UNSPECIFIED | 0 |  |
| CURRICULUM_NATIONAL | 1 |  |
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
| DEFAULT | 0 |  |
| MULTIPLE_TEXT_INPUT | 1 |  |
| TEXT_DESCRIPTION | 2 |  |
| MULTIPLE_TEXT_DESCRIPTION | 3 |  |
| CHECKLIST | 4 |  |
| RADIO_BUTTON | 5 |  |
| TEXT_INPUT | 6 |  |


 

 

 



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





 

 

 

 



<a name="modules_material_v1_shared_major-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/major.proto



<a name="modules-material-v1-shared-Major"></a>

### Major



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



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


 

 

 



<a name="modules_material_v1_shared_teaching_tool_document-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/teaching_tool_document.proto



<a name="modules-material-v1-shared-ListTeachingToolAttachment"></a>

### ListTeachingToolAttachment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| attachment_file | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |






<a name="modules-material-v1-shared-ListTeachingToolDocument"></a>

### ListTeachingToolDocument



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| teaching_tools_id | [string](#string) |  |  |
| teacher_user | [UserPublicDetails](#modules-material-v1-shared-UserPublicDetails) |  |  |
| subject | [Subject](#modules-material-v1-shared-Subject) |  |  |
| major_name | [string](#string) |  |  |
| grade_level | [uint32](#uint32) |  |  |
| attachment_files | [ListTeachingToolAttachment](#modules-material-v1-shared-ListTeachingToolAttachment) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-material-v1-shared-TeachingToolDocument"></a>

### TeachingToolDocument



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| teaching_tools_id | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| major_name | [string](#string) |  |  |
| grade_level | [uint32](#uint32) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_material_v1_shared_teaching_tools-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/teaching_tools.proto



<a name="modules-material-v1-shared-TeachingToolComponent"></a>

### TeachingToolComponent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| notes | [string](#string) |  |  |






<a name="modules-material-v1-shared-TeachingTools"></a>

### TeachingTools



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| components | [TeachingToolComponent](#modules-material-v1-shared-TeachingToolComponent) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_material_v1_shared_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/shared/user.proto



<a name="modules-material-v1-shared-UserPublicDetails"></a>

### UserPublicDetails



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| fullname | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| gender | [modules.authentication.v1.shared.Gender](#modules-authentication-v1-shared-Gender) |  |  |
| role_type | [modules.authentication.v1.shared.RoleType](#modules-authentication-v1-shared-RoleType) |  |  |
| status | [modules.authentication.v1.shared.UserStatus](#modules-authentication-v1-shared-UserStatus) |  |  |
| profile_picture | [common.v1.AttachmentFile](#common-v1-AttachmentFile) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



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

