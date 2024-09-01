# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/teaching_module/v1/shared/learning_goal.proto](#modules_teaching_module_v1_shared_learning_goal-proto)
    - [LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal)
  
- [modules/teaching_module/v1/shared/study_material.proto](#modules_teaching_module_v1_shared_study_material-proto)
    - [StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial)
  
- [modules/teaching_module/v1/shared/teaching_module.proto](#modules_teaching_module_v1_shared_teaching_module-proto)
    - [Approver](#modules-teaching_modules-v1-shared-Approver)
    - [TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule)
  
- [modules/teaching_module/v1/shared/teaching_module_folder.proto](#modules_teaching_module_v1_shared_teaching_module_folder-proto)
    - [TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder)
  
- [Scalar Value Types](#scalar-value-types)



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
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_teaching_module_v1_shared_teaching_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/shared/teaching_module.proto



<a name="modules-teaching_modules-v1-shared-Approver"></a>

### Approver



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |
| is_approved | [bool](#bool) |  |  |






<a name="modules-teaching_modules-v1-shared-TeachingModule"></a>

### TeachingModule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_profile | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| subject_id | [string](#string) |  |  |
| approver | [Approver](#modules-teaching_modules-v1-shared-Approver) | repeated |  |
| learning_goals | [LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal) | repeated |  |
| components | [common.v1.KeyArrayValues](#common-v1-KeyArrayValues) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| cover_image | [string](#string) |  |  |
| time_allocation | [string](#string) |  |  |
| folders | [TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder) | repeated |  |





 

 

 

 



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

