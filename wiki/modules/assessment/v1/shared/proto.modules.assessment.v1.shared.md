# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/shared/assignment.proto](#modules_assessment_v1_shared_assignment-proto)
    - [Assignment](#modules-assessment-v1-shared-Assignment)
    - [AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission)
  
- [modules/assessment/v1/shared/enum.proto](#modules_assessment_v1_shared_enum-proto)
    - [AnswerScoreState](#modules-assessment-v1-shared-AnswerScoreState)
    - [AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory)
    - [AssessmentQuizQuestionType](#modules-assessment-v1-shared-AssessmentQuizQuestionType)
    - [AssessmentType](#modules-assessment-v1-shared-AssessmentType)
    - [SubmissionState](#modules-assessment-v1-shared-SubmissionState)
  
- [modules/assessment/v1/shared/observation.proto](#modules_assessment_v1_shared_observation-proto)
    - [Observation](#modules-assessment-v1-shared-Observation)
    - [ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission)
  
- [modules/assessment/v1/shared/quiz.proto](#modules_assessment_v1_shared_quiz-proto)
    - [Quiz](#modules-assessment-v1-shared-Quiz)
    - [QuizOption](#modules-assessment-v1-shared-QuizOption)
    - [QuizQuestion](#modules-assessment-v1-shared-QuizQuestion)
    - [QuizSettings](#modules-assessment-v1-shared-QuizSettings)
    - [StudentAnswer](#modules-assessment-v1-shared-StudentAnswer)
  
- [modules/assessment/v1/shared/rubric.proto](#modules_assessment_v1_shared_rubric-proto)
    - [Criterion](#modules-assessment-v1-shared-Criterion)
    - [Level](#modules-assessment-v1-shared-Level)
    - [Rubric](#modules-assessment-v1-shared-Rubric)
    - [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_shared_assignment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/assignment.proto



<a name="modules-assessment-v1-shared-Assignment"></a>

### Assignment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| point | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-AssignmentSubmission"></a>

### AssignmentSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| assignment_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| answer_text | [string](#string) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| point | [float](#float) |  |  |
| RubricSubmission | [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |
| finalized | [bool](#bool) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_assessment_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/enum.proto


 


<a name="modules-assessment-v1-shared-AnswerScoreState"></a>

### AnswerScoreState


| Name | Number | Description |
| ---- | ------ | ----------- |
| NOT_SCORED | 0 |  |
| SCORED | 1 |  |



<a name="modules-assessment-v1-shared-AssessmentQuizCategory"></a>

### AssessmentQuizCategory


| Name | Number | Description |
| ---- | ------ | ----------- |
| PRACTICE_QUIZ | 0 |  |
| QUIZ | 1 |  |
| HOMEWORK | 2 |  |



<a name="modules-assessment-v1-shared-AssessmentQuizQuestionType"></a>

### AssessmentQuizQuestionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| TEXT | 0 |  |
| ESSAY | 1 |  |
| MULIPLE_ANSWER | 2 |  |
| FILE_UPLOAD | 3 |  |



<a name="modules-assessment-v1-shared-AssessmentType"></a>

### AssessmentType


| Name | Number | Description |
| ---- | ------ | ----------- |
| FORMATIVE | 0 |  |
| SUMMATIVE | 1 |  |



<a name="modules-assessment-v1-shared-SubmissionState"></a>

### SubmissionState


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_SUBMISSION | 0 |  |
| NEED_GRADING | 1 |  |
| GRADED | 2 |  |


 

 

 



<a name="modules_assessment_v1_shared_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/observation.proto



<a name="modules-assessment-v1-shared-Observation"></a>

### Observation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| point | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ObservationSubmission"></a>

### ObservationSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| observation_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_assessment_v1_shared_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/quiz.proto



<a name="modules-assessment-v1-shared-Quiz"></a>

### Quiz



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
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-QuizOption"></a>

### QuizOption



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| text | [string](#string) |  |  |
| value | [string](#string) |  |  |
| isAnswer | [bool](#bool) | optional |  |






<a name="modules-assessment-v1-shared-QuizQuestion"></a>

### QuizQuestion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| question | [string](#string) |  |  |
| questionType | [AssessmentQuizQuestionType](#modules-assessment-v1-shared-AssessmentQuizQuestionType) |  |  |
| points | [int32](#int32) |  |  |
| options | [QuizOption](#modules-assessment-v1-shared-QuizOption) | repeated |  |
| answer | [string](#string) | optional |  |






<a name="modules-assessment-v1-shared-QuizSettings"></a>

### QuizSettings



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| assessmentType | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| category | [AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory) |  |  |
| timeLimit | [int32](#int32) |  |  |
| randomArrangement | [bool](#bool) |  |  |
| resultView | [bool](#bool) |  |  |
| indexMinimum | [int32](#int32) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-StudentAnswer"></a>

### StudentAnswer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| question_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| answer | [string](#string) |  |  |
| points | [string](#string) |  |  |
| score_state | [AnswerScoreState](#modules-assessment-v1-shared-AnswerScoreState) |  |  |





 

 

 

 



<a name="modules_assessment_v1_shared_rubric-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/rubric.proto



<a name="modules-assessment-v1-shared-Criterion"></a>

### Criterion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| levels | [Level](#modules-assessment-v1-shared-Level) | repeated |  |






<a name="modules-assessment-v1-shared-Level"></a>

### Level



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| point | [float](#float) |  |  |






<a name="modules-assessment-v1-shared-Rubric"></a>

### Rubric



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| total_point | [float](#float) |  |  |
| criteria | [Criterion](#modules-assessment-v1-shared-Criterion) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-RubricSubmission"></a>

### RubricSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric_id | [string](#string) |  |  |
| total_point | [float](#float) |  |  |
| points | [float](#float) | repeated |  |





 

 

 

 



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

