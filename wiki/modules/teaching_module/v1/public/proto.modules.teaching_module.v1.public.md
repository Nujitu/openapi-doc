# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/teaching_module/v1/public/learning_goal.proto](#modules_teaching_module_v1_public_learning_goal-proto)
    - [CreateLearningGoalResponse](#modules-teaching_module-v1-public-CreateLearningGoalResponse)
    - [CreateLearningGoalsRequest](#modules-teaching_module-v1-public-CreateLearningGoalsRequest)
    - [UpdateLearningGoalRequest](#modules-teaching_module-v1-public-UpdateLearningGoalRequest)
    - [UpdateLearningGoalResponse](#modules-teaching_module-v1-public-UpdateLearningGoalResponse)
  
    - [LearningGoalService](#modules-teaching_module-v1-public-LearningGoalService)
  
- [modules/teaching_module/v1/public/teaching_module.proto](#modules_teaching_module_v1_public_teaching_module-proto)
    - [ApproveteachingModuleRequest](#modules-teaching_module-v1-public-ApproveteachingModuleRequest)
    - [GetTeachingModuleBySubjectIDRequest](#modules-teaching_module-v1-public-GetTeachingModuleBySubjectIDRequest)
    - [TeachingModuleRequest](#modules-teaching_module-v1-public-TeachingModuleRequest)
    - [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse)
  
    - [TeachingModuleService](#modules-teaching_module-v1-public-TeachingModuleService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_teaching_module_v1_public_learning_goal-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/learning_goal.proto



<a name="modules-teaching_module-v1-public-CreateLearningGoalResponse"></a>

### CreateLearningGoalResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-CreateLearningGoalsRequest"></a>

### CreateLearningGoalsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| learning_goals | [modules.teaching_modules.v1.shared.LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal) | repeated |  |






<a name="modules-teaching_module-v1-public-UpdateLearningGoalRequest"></a>

### UpdateLearningGoalRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| learning_goals | [modules.teaching_modules.v1.shared.LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal) |  |  |






<a name="modules-teaching_module-v1-public-UpdateLearningGoalResponse"></a>

### UpdateLearningGoalResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-LearningGoalService"></a>

### LearningGoalService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateLearningGoals | [CreateLearningGoalsRequest](#modules-teaching_module-v1-public-CreateLearningGoalsRequest) | [CreateLearningGoalResponse](#modules-teaching_module-v1-public-CreateLearningGoalResponse) |  |
| UpdateLearningGoal | [UpdateLearningGoalRequest](#modules-teaching_module-v1-public-UpdateLearningGoalRequest) | [UpdateLearningGoalResponse](#modules-teaching_module-v1-public-UpdateLearningGoalResponse) |  |

 



<a name="modules_teaching_module_v1_public_teaching_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/teaching_module.proto



<a name="modules-teaching_module-v1-public-ApproveteachingModuleRequest"></a>

### ApproveteachingModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| is_approved | [bool](#bool) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleBySubjectIDRequest"></a>

### GetTeachingModuleBySubjectIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-TeachingModuleRequest"></a>

### TeachingModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| start_date | [string](#string) |  |  |
| end_date | [string](#string) |  |  |
| components | [string](#string) |  |  |
| learning_profile | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| approver | [modules.teaching_modules.v1.shared.Approver](#modules-teaching_modules-v1-shared-Approver) | repeated |  |
| learning_goals | [modules.teaching_modules.v1.shared.LearningGoal](#modules-teaching_modules-v1-shared-LearningGoal) | repeated |  |






<a name="modules-teaching_module-v1-public-TeachingModuleResponse"></a>

### TeachingModuleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-TeachingModuleService"></a>

### TeachingModuleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTeachingModule | [TeachingModuleRequest](#modules-teaching_module-v1-public-TeachingModuleRequest) | [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse) |  |
| GetTeachingModulebySubjectID | [GetTeachingModuleBySubjectIDRequest](#modules-teaching_module-v1-public-GetTeachingModuleBySubjectIDRequest) | [.modules.teaching_modules.v1.shared.TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule) |  |
| ApproveTeachingModule | [ApproveteachingModuleRequest](#modules-teaching_module-v1-public-ApproveteachingModuleRequest) | [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse) |  |

 



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

