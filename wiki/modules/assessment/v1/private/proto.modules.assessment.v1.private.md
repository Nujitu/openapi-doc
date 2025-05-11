# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/private/quiz.proto](#modules_assessment_v1_private_quiz-proto)
    - [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest)
    - [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse)
    - [GetQuizListResponse.Quiz](#modules-assessment-v1-public-GetQuizListResponse-Quiz)
  
    - [PrivateQuizService](#modules-assessment-v1-public-PrivateQuizService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_private_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/private/quiz.proto



<a name="modules-assessment-v1-public-GetQuizListRequest"></a>

### GetQuizListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group_ids | [string](#string) | repeated |  |
| class_subject_ids | [string](#string) | repeated |  |






<a name="modules-assessment-v1-public-GetQuizListResponse"></a>

### GetQuizListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz | [GetQuizListResponse.Quiz](#modules-assessment-v1-public-GetQuizListResponse-Quiz) | repeated |  |






<a name="modules-assessment-v1-public-GetQuizListResponse-Quiz"></a>

### GetQuizListResponse.Quiz



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| info | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) | optional |  |
| subject_name | [string](#string) |  |  |
| learing_goal_id | [string](#string) |  |  |
| learning_goal_title | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| teaching_module_id | [string](#string) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| exam_id | [string](#string) |  |  |
| settings | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |
| total_submission | [uint32](#uint32) |  |  |
| total_graded | [uint32](#uint32) |  |  |
| total_un_graded | [uint32](#uint32) |  |  |
| total_no_submission | [uint32](#uint32) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 


<a name="modules-assessment-v1-public-PrivateQuizService"></a>

### PrivateQuizService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetCompleteQuizList | [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest) | [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse) |  |

 



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

