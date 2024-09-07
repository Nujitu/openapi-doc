# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/public/quiz.proto](#modules_assessment_v1_public_quiz-proto)
    - [CreateQuestionRequest](#modules-assessment-v1-public-CreateQuestionRequest)
    - [CreateQuestionResponse](#modules-assessment-v1-public-CreateQuestionResponse)
    - [CreateQuizRequest](#modules-assessment-v1-public-CreateQuizRequest)
    - [CreateQuizResponse](#modules-assessment-v1-public-CreateQuizResponse)
    - [CreateQuizSettingRequest](#modules-assessment-v1-public-CreateQuizSettingRequest)
    - [CreateQuizSettingResponse](#modules-assessment-v1-public-CreateQuizSettingResponse)
    - [EditQuestionsRequest](#modules-assessment-v1-public-EditQuestionsRequest)
    - [EditQuestionsResponse](#modules-assessment-v1-public-EditQuestionsResponse)
    - [GetQuestionListRequest](#modules-assessment-v1-public-GetQuestionListRequest)
    - [GetQuestionListResponse](#modules-assessment-v1-public-GetQuestionListResponse)
    - [GetQuizDetailRequest](#modules-assessment-v1-public-GetQuizDetailRequest)
    - [GetQuizDetailResponse](#modules-assessment-v1-public-GetQuizDetailResponse)
    - [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest)
    - [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse)
    - [SubmitStudentAnswerRequest](#modules-assessment-v1-public-SubmitStudentAnswerRequest)
    - [SubmitStudentAnswerResponse](#modules-assessment-v1-public-SubmitStudentAnswerResponse)
    - [UpdateQuizRequest](#modules-assessment-v1-public-UpdateQuizRequest)
    - [UpdateQuizResponse](#modules-assessment-v1-public-UpdateQuizResponse)
    - [UpdateQuizSettingRequest](#modules-assessment-v1-public-UpdateQuizSettingRequest)
    - [UpdateQuizSettingResponse](#modules-assessment-v1-public-UpdateQuizSettingResponse)
  
    - [QuizService](#modules-assessment-v1-public-QuizService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_public_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/quiz.proto



<a name="modules-assessment-v1-public-CreateQuestionRequest"></a>

### CreateQuestionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| questions | [modules.assessment.v1.shared.QuizQuestion](#modules-assessment-v1-shared-QuizQuestion) | repeated |  |






<a name="modules-assessment-v1-public-CreateQuestionResponse"></a>

### CreateQuestionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateQuizRequest"></a>

### CreateQuizRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| info | [string](#string) |  |  |
| learing_goal_id | [string](#string) |  |  |
| learning_goal_title | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateQuizResponse"></a>

### CreateQuizResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) |  |  |






<a name="modules-assessment-v1-public-CreateQuizSettingRequest"></a>

### CreateQuizSettingRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| assessmentType | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| category | [modules.assessment.v1.shared.AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory) |  |  |
| timeLimit | [int32](#int32) |  |  |
| randomArrangement | [bool](#bool) |  |  |
| resultView | [bool](#bool) |  |  |
| indexMinimum | [int32](#int32) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-public-CreateQuizSettingResponse"></a>

### CreateQuizSettingResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| setting | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |






<a name="modules-assessment-v1-public-EditQuestionsRequest"></a>

### EditQuestionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| questions | [modules.assessment.v1.shared.QuizQuestion](#modules-assessment-v1-shared-QuizQuestion) | repeated |  |






<a name="modules-assessment-v1-public-EditQuestionsResponse"></a>

### EditQuestionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetQuestionListRequest"></a>

### GetQuestionListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetQuestionListResponse"></a>

### GetQuestionListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| questions | [modules.assessment.v1.shared.QuizQuestion](#modules-assessment-v1-shared-QuizQuestion) | repeated |  |






<a name="modules-assessment-v1-public-GetQuizDetailRequest"></a>

### GetQuizDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetQuizDetailResponse"></a>

### GetQuizDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) |  |  |
| setting | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |
| questions | [modules.assessment.v1.shared.QuizQuestion](#modules-assessment-v1-shared-QuizQuestion) | repeated |  |






<a name="modules-assessment-v1-public-GetQuizListRequest"></a>

### GetQuizListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| learning_goal_title | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-GetQuizListResponse"></a>

### GetQuizListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-assessment-v1-public-SubmitStudentAnswerRequest"></a>

### SubmitStudentAnswerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-SubmitStudentAnswerResponse"></a>

### SubmitStudentAnswerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-UpdateQuizRequest"></a>

### UpdateQuizRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| info | [string](#string) |  |  |
| learing_goal_id | [string](#string) |  |  |
| learning_goal_title | [string](#string) |  |  |






<a name="modules-assessment-v1-public-UpdateQuizResponse"></a>

### UpdateQuizResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) |  |  |






<a name="modules-assessment-v1-public-UpdateQuizSettingRequest"></a>

### UpdateQuizSettingRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| assessmentType | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| category | [modules.assessment.v1.shared.AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory) |  |  |
| timeLimit | [int32](#int32) |  |  |
| randomArrangement | [bool](#bool) |  |  |
| resultView | [bool](#bool) |  |  |
| indexMinimum | [int32](#int32) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-public-UpdateQuizSettingResponse"></a>

### UpdateQuizSettingResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| setting | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |





 

 

 


<a name="modules-assessment-v1-public-QuizService"></a>

### QuizService
Service for quiz related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateQuiz | [CreateQuizRequest](#modules-assessment-v1-public-CreateQuizRequest) | [CreateQuizResponse](#modules-assessment-v1-public-CreateQuizResponse) |  |
| CreateQuizSetting | [CreateQuizSettingRequest](#modules-assessment-v1-public-CreateQuizSettingRequest) | [CreateQuizSettingResponse](#modules-assessment-v1-public-CreateQuizSettingResponse) |  |
| UpdateQuiz | [UpdateQuizRequest](#modules-assessment-v1-public-UpdateQuizRequest) | [UpdateQuizResponse](#modules-assessment-v1-public-UpdateQuizResponse) |  |
| UpdateQuizSetting | [UpdateQuizRequest](#modules-assessment-v1-public-UpdateQuizRequest) | [UpdateQuizResponse](#modules-assessment-v1-public-UpdateQuizResponse) |  |
| GetQuizDetail | [GetQuizDetailRequest](#modules-assessment-v1-public-GetQuizDetailRequest) | [GetQuizDetailResponse](#modules-assessment-v1-public-GetQuizDetailResponse) |  |
| GetQuizList | [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest) | [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse) |  |
| CreateQuestions | [CreateQuestionRequest](#modules-assessment-v1-public-CreateQuestionRequest) | [CreateQuestionResponse](#modules-assessment-v1-public-CreateQuestionResponse) |  |
| EditQuestions | [EditQuestionsRequest](#modules-assessment-v1-public-EditQuestionsRequest) | [EditQuestionsResponse](#modules-assessment-v1-public-EditQuestionsResponse) |  |
| GetQuestionList | [GetQuestionListRequest](#modules-assessment-v1-public-GetQuestionListRequest) | [GetQuestionListResponse](#modules-assessment-v1-public-GetQuestionListResponse) |  |
| SubmitStudentAnswer | [SubmitStudentAnswerRequest](#modules-assessment-v1-public-SubmitStudentAnswerRequest) | [SubmitStudentAnswerResponse](#modules-assessment-v1-public-SubmitStudentAnswerResponse) |  |

 



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

