# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/teaching_module/v1/shared/exam.proto](#modules_teaching_module_v1_shared_exam-proto)
    - [Exam](#modules-teaching_modules-v1-shared-Exam)
  
    - [ExamType](#modules-teaching_modules-v1-shared-ExamType)
  
- [modules/teaching_module/v1/shared/folder_task.proto](#modules_teaching_module_v1_shared_folder_task-proto)
    - [FolderTask](#modules-teaching_modules-v1-shared-FolderTask)
  
- [modules/teaching_module/v1/shared/learning_goal.proto](#modules_teaching_module_v1_shared_learning_goal-proto)
    - [LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal)
  
- [modules/teaching_module/v1/shared/study_material.proto](#modules_teaching_module_v1_shared_study_material-proto)
    - [StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial)
  
- [modules/teaching_module/v1/shared/teaching_module.proto](#modules_teaching_module_v1_shared_teaching_module-proto)
    - [Approver](#modules-teaching_modules-v1-shared-Approver)
    - [Component](#modules-teaching_modules-v1-shared-Component)
    - [Content](#modules-teaching_modules-v1-shared-Content)
    - [GroupComponent](#modules-teaching_modules-v1-shared-GroupComponent)
    - [PercentageScore](#modules-teaching_modules-v1-shared-PercentageScore)
    - [TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule)
  
    - [ComponentType](#modules-teaching_modules-v1-shared-ComponentType)
  
- [modules/teaching_module/v1/shared/teaching_module_folder.proto](#modules_teaching_module_v1_shared_teaching_module_folder-proto)
    - [TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder)
  
- [modules/teaching_module/v1/shared/uploader.proto](#modules_teaching_module_v1_shared_uploader-proto)
    - [Uploader](#modules-teaching_modules-v1-shared-Uploader)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_teaching_module_v1_shared_exam-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/exam.proto



<a name="modules-teaching_modules-v1-shared-Exam"></a>

### Exam



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_goal_ids | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| exam_type | [ExamType](#modules-teaching_modules-v1-shared-ExamType) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 


<a name="modules-teaching_modules-v1-shared-ExamType"></a>

### ExamType


| Name | Number | Description |
| ---- | ------ | ----------- |
| FINAL_EXAM | 0 |  |
| MIDTERM_EXAM | 1 |  |


 

 

 



<a name="modules_teaching_module_v1_shared_folder_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/folder_task.proto



<a name="modules-teaching_modules-v1-shared-FolderTask"></a>

### FolderTask



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| folder_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| task_type | [string](#string) |  |  |
| task_name | [string](#string) |  |  |
| task_attachment | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| created_at | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |





 

 

 

 



<a name="modules_teaching_module_v1_shared_learning_goal-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/learning_goal.proto



<a name="modules-teaching_modules-v1-shared-LearningGoal"></a>

### LearningGoal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| learning_goal_id | [string](#string) |  |  |
| goal | [string](#string) |  |  |
| teaching_module_id | [string](#string) |  |  |





 

 

 

 



<a name="modules_teaching_module_v1_shared_study_material-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/study_material.proto



<a name="modules-teaching_modules-v1-shared-StudyMaterial"></a>

### StudyMaterial
study material


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| instruction | [string](#string) |  |  |
| attachment_ids | [string](#string) | repeated |  |
| folder_id | [string](#string) |  |  |
| publish_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teaching_module_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| description | [string](#string) |  |  |





 

 

 

 



<a name="modules_teaching_module_v1_shared_teaching_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/teaching_module.proto



<a name="modules-teaching_modules-v1-shared-Approver"></a>

### Approver



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |
| is_approved | [bool](#bool) |  |  |






<a name="modules-teaching_modules-v1-shared-Component"></a>

### Component



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| description | [string](#string) |  |  |
| group_components | [GroupComponent](#modules-teaching_modules-v1-shared-GroupComponent) | repeated |  |






<a name="modules-teaching_modules-v1-shared-Content"></a>

### Content



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  |  |
| value | [bool](#bool) |  |  |






<a name="modules-teaching_modules-v1-shared-GroupComponent"></a>

### GroupComponent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| parent_id | [string](#string) |  |  |
| description | [string](#string) |  |  |
| component_type | [ComponentType](#modules-teaching_modules-v1-shared-ComponentType) |  |  |
| content | [Content](#modules-teaching_modules-v1-shared-Content) | repeated |  |






<a name="modules-teaching_modules-v1-shared-PercentageScore"></a>

### PercentageScore



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| value | [int32](#int32) |  |  |






<a name="modules-teaching_modules-v1-shared-TeachingModule"></a>

### TeachingModule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_profile | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| subject_id | [string](#string) |  |  |
| approver | [Approver](#modules-teaching_modules-v1-shared-Approver) | repeated |  |
| learning_goals | [LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal) | repeated |  |
| components | [Component](#modules-teaching_modules-v1-shared-Component) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| cover_image | [string](#string) |  |  |
| time_allocation | [string](#string) |  |  |
| folders | [TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder) | repeated |  |
| curriculum_id | [string](#string) |  |  |
| description | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| index_minimum | [int32](#int32) |  |  |
| percentage_score | [PercentageScore](#modules-teaching_modules-v1-shared-PercentageScore) | repeated | list of percentage score must be 100 |





 


<a name="modules-teaching_modules-v1-shared-ComponentType"></a>

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


 

 

 



<a name="modules_teaching_module_v1_shared_teaching_module_folder-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/teaching_module_folder.proto



<a name="modules-teaching_modules-v1-shared-TeachingModuleFolder"></a>

### TeachingModuleFolder



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_goal_ids | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teaching_module_id | [string](#string) |  |  |
| class_group_detail_id | [string](#string) |  |  |





 

 

 

 



<a name="modules_teaching_module_v1_shared_uploader-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/uploader.proto



<a name="modules-teaching_modules-v1-shared-Uploader"></a>

### Uploader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_name | [string](#string) |  |  |
| file_size | [int64](#int64) |  |  |
| bucket_name | [string](#string) |  |  |
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

