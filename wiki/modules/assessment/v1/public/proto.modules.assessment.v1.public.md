# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/public/assignment.proto](#modules_assessment_v1_public_assignment-proto)
    - [AssessSubmissionRequest](#modules-assessment-v1-public-AssessSubmissionRequest)
    - [AssessSubmissionResponse](#modules-assessment-v1-public-AssessSubmissionResponse)
    - [CreateAssignmentRequest](#modules-assessment-v1-public-CreateAssignmentRequest)
    - [CreateAssignmentResponse](#modules-assessment-v1-public-CreateAssignmentResponse)
    - [CreateSubmissionRequest](#modules-assessment-v1-public-CreateSubmissionRequest)
    - [CreateSubmissionResponse](#modules-assessment-v1-public-CreateSubmissionResponse)
    - [DeleteAssignmentRequest](#modules-assessment-v1-public-DeleteAssignmentRequest)
    - [DeleteAssignmentResponse](#modules-assessment-v1-public-DeleteAssignmentResponse)
    - [DeleteSubmissionRequest](#modules-assessment-v1-public-DeleteSubmissionRequest)
    - [DeleteSubmissionResponse](#modules-assessment-v1-public-DeleteSubmissionResponse)
    - [FinalizeSubmissionRequest](#modules-assessment-v1-public-FinalizeSubmissionRequest)
    - [FinalizeSubmissionResponse](#modules-assessment-v1-public-FinalizeSubmissionResponse)
    - [GetAssignmentByIdRequest](#modules-assessment-v1-public-GetAssignmentByIdRequest)
    - [GetAssignmentByIdResponse](#modules-assessment-v1-public-GetAssignmentByIdResponse)
    - [GetSubmissionBySubmissionIdRequest](#modules-assessment-v1-public-GetSubmissionBySubmissionIdRequest)
    - [GetSubmissionBySubmissionIdResponse](#modules-assessment-v1-public-GetSubmissionBySubmissionIdResponse)
    - [ListAssignmentRequest](#modules-assessment-v1-public-ListAssignmentRequest)
    - [ListAssignmentResponse](#modules-assessment-v1-public-ListAssignmentResponse)
    - [ListAssignmentSubmissionRequest](#modules-assessment-v1-public-ListAssignmentSubmissionRequest)
    - [ListAssignmentSubmissionResponse](#modules-assessment-v1-public-ListAssignmentSubmissionResponse)
    - [UpdateAssignmentRequest](#modules-assessment-v1-public-UpdateAssignmentRequest)
    - [UpdateAssignmentResponse](#modules-assessment-v1-public-UpdateAssignmentResponse)
    - [UpdateSubmissionRequest](#modules-assessment-v1-public-UpdateSubmissionRequest)
    - [UpdateSubmissionResponse](#modules-assessment-v1-public-UpdateSubmissionResponse)
  
    - [AssignmentService](#modules-assessment-v1-public-AssignmentService)
  
- [modules/assessment/v1/public/observation.proto](#modules_assessment_v1_public_observation-proto)
    - [AssessObservationRequest](#modules-observation-v1-public-AssessObservationRequest)
    - [AssessObservationResponse](#modules-observation-v1-public-AssessObservationResponse)
    - [CreateObservationRequest](#modules-observation-v1-public-CreateObservationRequest)
    - [CreateObservationResponse](#modules-observation-v1-public-CreateObservationResponse)
    - [DeleteObservationAssessmentRequest](#modules-observation-v1-public-DeleteObservationAssessmentRequest)
    - [DeleteObservationAssessmentResponse](#modules-observation-v1-public-DeleteObservationAssessmentResponse)
    - [DeleteObservationRequest](#modules-observation-v1-public-DeleteObservationRequest)
    - [DeleteObservationResponse](#modules-observation-v1-public-DeleteObservationResponse)
    - [GetObservationAssessmentBySubmissionIdRequest](#modules-observation-v1-public-GetObservationAssessmentBySubmissionIdRequest)
    - [GetObservationAssessmentBySubmissionIdResponse](#modules-observation-v1-public-GetObservationAssessmentBySubmissionIdResponse)
    - [GetObservationByIdRequest](#modules-observation-v1-public-GetObservationByIdRequest)
    - [GetObservationByIdResponse](#modules-observation-v1-public-GetObservationByIdResponse)
    - [ListObservationAssessmentRequest](#modules-observation-v1-public-ListObservationAssessmentRequest)
    - [ListObservationAssessmentResponse](#modules-observation-v1-public-ListObservationAssessmentResponse)
    - [ListObservationRequest](#modules-observation-v1-public-ListObservationRequest)
    - [ListObservationResponse](#modules-observation-v1-public-ListObservationResponse)
    - [UpdateObservationAssessmentRequest](#modules-observation-v1-public-UpdateObservationAssessmentRequest)
    - [UpdateObservationAssessmentResponse](#modules-observation-v1-public-UpdateObservationAssessmentResponse)
    - [UpdateObservationRequest](#modules-observation-v1-public-UpdateObservationRequest)
    - [UpdateObservationResponse](#modules-observation-v1-public-UpdateObservationResponse)
  
    - [ObservationService](#modules-observation-v1-public-ObservationService)
  
- [modules/assessment/v1/public/quiz.proto](#modules_assessment_v1_public_quiz-proto)
    - [Answer](#modules-assessment-v1-public-Answer)
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
  
- [modules/assessment/v1/public/rubric.proto](#modules_assessment_v1_public_rubric-proto)
    - [CreateRubricRequest](#modules-assessment-v1-public-CreateRubricRequest)
    - [CreateRubricResponse](#modules-assessment-v1-public-CreateRubricResponse)
    - [DeleteRubricRequest](#modules-assessment-v1-public-DeleteRubricRequest)
    - [DeleteRubricResponse](#modules-assessment-v1-public-DeleteRubricResponse)
    - [GetRubricByIdRequest](#modules-assessment-v1-public-GetRubricByIdRequest)
    - [GetRubricByIdResponse](#modules-assessment-v1-public-GetRubricByIdResponse)
    - [ListRubricRequest](#modules-assessment-v1-public-ListRubricRequest)
    - [ListRubricResponse](#modules-assessment-v1-public-ListRubricResponse)
    - [UpdateRubricRequest](#modules-assessment-v1-public-UpdateRubricRequest)
    - [UpdateRubricResponse](#modules-assessment-v1-public-UpdateRubricResponse)
  
    - [RubricService](#modules-assessment-v1-public-RubricService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_public_assignment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/assignment.proto



<a name="modules-assessment-v1-public-AssessSubmissionRequest"></a>

### AssessSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |






<a name="modules-assessment-v1-public-AssessSubmissionResponse"></a>

### AssessSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateAssignmentRequest"></a>

### CreateAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| point | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateAssignmentResponse"></a>

### CreateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateSubmissionRequest"></a>

### CreateSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| answer_text | [string](#string) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |






<a name="modules-assessment-v1-public-CreateSubmissionResponse"></a>

### CreateSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteAssignmentRequest"></a>

### DeleteAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteAssignmentResponse"></a>

### DeleteAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteSubmissionRequest"></a>

### DeleteSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteSubmissionResponse"></a>

### DeleteSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-FinalizeSubmissionRequest"></a>

### FinalizeSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-FinalizeSubmissionResponse"></a>

### FinalizeSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentByIdRequest"></a>

### GetAssignmentByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentByIdResponse"></a>

### GetAssignmentByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |






<a name="modules-assessment-v1-public-GetSubmissionBySubmissionIdRequest"></a>

### GetSubmissionBySubmissionIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetSubmissionBySubmissionIdResponse"></a>

### GetSubmissionBySubmissionIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submission | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentRequest"></a>

### ListAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_date_gt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| start_date_gte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| start_date_lt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| start_date_lte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date_gt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date_gte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date_lt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date_lte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date_gt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date_gte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date_lt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date_lte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentResponse"></a>

### ListAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignments | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) | repeated |  |






<a name="modules-assessment-v1-public-ListAssignmentSubmissionRequest"></a>

### ListAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentSubmissionResponse"></a>

### ListAssignmentSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submissions | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) | repeated |  |






<a name="modules-assessment-v1-public-UpdateAssignmentRequest"></a>

### UpdateAssignmentRequest



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






<a name="modules-assessment-v1-public-UpdateAssignmentResponse"></a>

### UpdateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-UpdateSubmissionRequest"></a>

### UpdateSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| answer_text | [string](#string) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |






<a name="modules-assessment-v1-public-UpdateSubmissionResponse"></a>

### UpdateSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-assessment-v1-public-AssignmentService"></a>

### AssignmentService
Service for assignment related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAssignment | [CreateAssignmentRequest](#modules-assessment-v1-public-CreateAssignmentRequest) | [CreateAssignmentResponse](#modules-assessment-v1-public-CreateAssignmentResponse) |  |
| UpdateAssignment | [UpdateAssignmentRequest](#modules-assessment-v1-public-UpdateAssignmentRequest) | [UpdateAssignmentResponse](#modules-assessment-v1-public-UpdateAssignmentResponse) |  |
| DeleteAssignment | [DeleteAssignmentRequest](#modules-assessment-v1-public-DeleteAssignmentRequest) | [DeleteAssignmentResponse](#modules-assessment-v1-public-DeleteAssignmentResponse) |  |
| GetAssignmentById | [GetAssignmentByIdRequest](#modules-assessment-v1-public-GetAssignmentByIdRequest) | [GetAssignmentByIdResponse](#modules-assessment-v1-public-GetAssignmentByIdResponse) |  |
| ListAssignment | [ListAssignmentRequest](#modules-assessment-v1-public-ListAssignmentRequest) | [ListAssignmentResponse](#modules-assessment-v1-public-ListAssignmentResponse) |  |
| CreateSubmission | [CreateSubmissionRequest](#modules-assessment-v1-public-CreateSubmissionRequest) | [CreateSubmissionResponse](#modules-assessment-v1-public-CreateSubmissionResponse) |  |
| UpdateSubmission | [UpdateSubmissionRequest](#modules-assessment-v1-public-UpdateSubmissionRequest) | [UpdateSubmissionResponse](#modules-assessment-v1-public-UpdateSubmissionResponse) |  |
| GetSubmissionBySubmissionId | [GetSubmissionBySubmissionIdRequest](#modules-assessment-v1-public-GetSubmissionBySubmissionIdRequest) | [GetSubmissionBySubmissionIdResponse](#modules-assessment-v1-public-GetSubmissionBySubmissionIdResponse) |  |
| DeleteSubmission | [DeleteSubmissionRequest](#modules-assessment-v1-public-DeleteSubmissionRequest) | [DeleteSubmissionResponse](#modules-assessment-v1-public-DeleteSubmissionResponse) |  |
| FinalizeSubmission | [FinalizeSubmissionRequest](#modules-assessment-v1-public-FinalizeSubmissionRequest) | [FinalizeSubmissionResponse](#modules-assessment-v1-public-FinalizeSubmissionResponse) |  |
| AssessSubmission | [AssessSubmissionRequest](#modules-assessment-v1-public-AssessSubmissionRequest) | [AssessSubmissionResponse](#modules-assessment-v1-public-AssessSubmissionResponse) |  |
| ListAssignmentSubmission | [ListAssignmentSubmissionRequest](#modules-assessment-v1-public-ListAssignmentSubmissionRequest) | [ListAssignmentSubmissionResponse](#modules-assessment-v1-public-ListAssignmentSubmissionResponse) |  |

 



<a name="modules_assessment_v1_public_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/observation.proto



<a name="modules-observation-v1-public-AssessObservationRequest"></a>

### AssessObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |






<a name="modules-observation-v1-public-AssessObservationResponse"></a>

### AssessObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-CreateObservationRequest"></a>

### CreateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| point | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-CreateObservationResponse"></a>

### CreateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-DeleteObservationAssessmentRequest"></a>

### DeleteObservationAssessmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submission_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-DeleteObservationAssessmentResponse"></a>

### DeleteObservationAssessmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-DeleteObservationRequest"></a>

### DeleteObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-DeleteObservationResponse"></a>

### DeleteObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationAssessmentBySubmissionIdRequest"></a>

### GetObservationAssessmentBySubmissionIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submission_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationAssessmentBySubmissionIdResponse"></a>

### GetObservationAssessmentBySubmissionIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submission | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) |  |  |






<a name="modules-observation-v1-public-GetObservationByIdRequest"></a>

### GetObservationByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationByIdResponse"></a>

### GetObservationByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |






<a name="modules-observation-v1-public-ListObservationAssessmentRequest"></a>

### ListObservationAssessmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-observation-v1-public-ListObservationAssessmentResponse"></a>

### ListObservationAssessmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submissions | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) | repeated |  |






<a name="modules-observation-v1-public-ListObservationRequest"></a>

### ListObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_folder_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-observation-v1-public-ListObservationResponse"></a>

### ListObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observations | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) | repeated |  |






<a name="modules-observation-v1-public-UpdateObservationAssessmentRequest"></a>

### UpdateObservationAssessmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |






<a name="modules-observation-v1-public-UpdateObservationAssessmentResponse"></a>

### UpdateObservationAssessmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-UpdateObservationRequest"></a>

### UpdateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| point | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |






<a name="modules-observation-v1-public-UpdateObservationResponse"></a>

### UpdateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-observation-v1-public-ObservationService"></a>

### ObservationService
Service for observation related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateObservation | [CreateObservationRequest](#modules-observation-v1-public-CreateObservationRequest) | [CreateObservationResponse](#modules-observation-v1-public-CreateObservationResponse) |  |
| UpdateObservation | [UpdateObservationRequest](#modules-observation-v1-public-UpdateObservationRequest) | [UpdateObservationResponse](#modules-observation-v1-public-UpdateObservationResponse) |  |
| DeleteObservation | [DeleteObservationRequest](#modules-observation-v1-public-DeleteObservationRequest) | [DeleteObservationResponse](#modules-observation-v1-public-DeleteObservationResponse) |  |
| GetObservationById | [GetObservationByIdRequest](#modules-observation-v1-public-GetObservationByIdRequest) | [GetObservationByIdResponse](#modules-observation-v1-public-GetObservationByIdResponse) |  |
| ListObservation | [ListObservationRequest](#modules-observation-v1-public-ListObservationRequest) | [ListObservationResponse](#modules-observation-v1-public-ListObservationResponse) |  |
| AssessObservation | [AssessObservationRequest](#modules-observation-v1-public-AssessObservationRequest) | [AssessObservationResponse](#modules-observation-v1-public-AssessObservationResponse) |  |
| UpdateObservationAssessment | [UpdateObservationAssessmentRequest](#modules-observation-v1-public-UpdateObservationAssessmentRequest) | [UpdateObservationAssessmentResponse](#modules-observation-v1-public-UpdateObservationAssessmentResponse) |  |
| GetObservationAssessmentBySubmissionId | [GetObservationAssessmentBySubmissionIdRequest](#modules-observation-v1-public-GetObservationAssessmentBySubmissionIdRequest) | [GetObservationAssessmentBySubmissionIdResponse](#modules-observation-v1-public-GetObservationAssessmentBySubmissionIdResponse) |  |
| DeleteObservationAssessment | [DeleteObservationAssessmentRequest](#modules-observation-v1-public-DeleteObservationAssessmentRequest) | [DeleteObservationAssessmentResponse](#modules-observation-v1-public-DeleteObservationAssessmentResponse) |  |
| ListObservationAssessment | [ListObservationAssessmentRequest](#modules-observation-v1-public-ListObservationAssessmentRequest) | [ListObservationAssessmentResponse](#modules-observation-v1-public-ListObservationAssessmentResponse) |  |

 



<a name="modules_assessment_v1_public_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/quiz.proto



<a name="modules-assessment-v1-public-Answer"></a>

### Answer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| question_id | [string](#string) |  |  |
| answer | [string](#string) |  |  |






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
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) | optional |  |
| subject_name | [string](#string) |  |  |
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
| due_date | [string](#string) |  |  |
| until_date | [string](#string) |  |  |






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
| quiz_id | [string](#string) |  |  |
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
| learning_goal_id | [string](#string) |  |  |
| learning_goal_title | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
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
| student_id | [string](#string) |  |  |
| answer | [Answer](#modules-assessment-v1-public-Answer) | repeated |  |






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
| due_date | [string](#string) |  |  |
| until_date | [string](#string) |  |  |






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
| UpdateQuizSetting | [UpdateQuizSettingRequest](#modules-assessment-v1-public-UpdateQuizSettingRequest) | [UpdateQuizSettingResponse](#modules-assessment-v1-public-UpdateQuizSettingResponse) |  |
| GetQuizDetail | [GetQuizDetailRequest](#modules-assessment-v1-public-GetQuizDetailRequest) | [GetQuizDetailResponse](#modules-assessment-v1-public-GetQuizDetailResponse) |  |
| GetQuizList | [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest) | [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse) |  |
| CreateQuestions | [CreateQuestionRequest](#modules-assessment-v1-public-CreateQuestionRequest) | [CreateQuestionResponse](#modules-assessment-v1-public-CreateQuestionResponse) |  |
| EditQuestions | [EditQuestionsRequest](#modules-assessment-v1-public-EditQuestionsRequest) | [EditQuestionsResponse](#modules-assessment-v1-public-EditQuestionsResponse) |  |
| GetQuestionList | [GetQuestionListRequest](#modules-assessment-v1-public-GetQuestionListRequest) | [GetQuestionListResponse](#modules-assessment-v1-public-GetQuestionListResponse) |  |
| SubmitStudentAnswer | [SubmitStudentAnswerRequest](#modules-assessment-v1-public-SubmitStudentAnswerRequest) | [SubmitStudentAnswerResponse](#modules-assessment-v1-public-SubmitStudentAnswerResponse) |  |

 



<a name="modules_assessment_v1_public_rubric-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/rubric.proto



<a name="modules-assessment-v1-public-CreateRubricRequest"></a>

### CreateRubricRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| total_point | [float](#float) |  |  |
| criteria | [modules.assessment.v1.shared.Criterion](#modules-assessment-v1-shared-Criterion) | repeated |  |






<a name="modules-assessment-v1-public-CreateRubricResponse"></a>

### CreateRubricResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric | [modules.assessment.v1.shared.Rubric](#modules-assessment-v1-shared-Rubric) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteRubricRequest"></a>

### DeleteRubricRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteRubricResponse"></a>

### DeleteRubricResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetRubricByIdRequest"></a>

### GetRubricByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetRubricByIdResponse"></a>

### GetRubricByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric | [modules.assessment.v1.shared.Rubric](#modules-assessment-v1-shared-Rubric) |  |  |






<a name="modules-assessment-v1-public-ListRubricRequest"></a>

### ListRubricRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListRubricResponse"></a>

### ListRubricResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubrics | [modules.assessment.v1.shared.Rubric](#modules-assessment-v1-shared-Rubric) | repeated |  |






<a name="modules-assessment-v1-public-UpdateRubricRequest"></a>

### UpdateRubricRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| total_point | [float](#float) |  |  |
| criteria | [modules.assessment.v1.shared.Criterion](#modules-assessment-v1-shared-Criterion) | repeated |  |






<a name="modules-assessment-v1-public-UpdateRubricResponse"></a>

### UpdateRubricResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric | [modules.assessment.v1.shared.Rubric](#modules-assessment-v1-shared-Rubric) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-assessment-v1-public-RubricService"></a>

### RubricService
Service for rubric related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateRubric | [CreateRubricRequest](#modules-assessment-v1-public-CreateRubricRequest) | [CreateRubricResponse](#modules-assessment-v1-public-CreateRubricResponse) |  |
| UpdateRubric | [UpdateRubricRequest](#modules-assessment-v1-public-UpdateRubricRequest) | [UpdateRubricResponse](#modules-assessment-v1-public-UpdateRubricResponse) |  |
| DeleteRubric | [DeleteRubricRequest](#modules-assessment-v1-public-DeleteRubricRequest) | [DeleteRubricResponse](#modules-assessment-v1-public-DeleteRubricResponse) |  |
| GetRubricById | [GetRubricByIdRequest](#modules-assessment-v1-public-GetRubricByIdRequest) | [GetRubricByIdResponse](#modules-assessment-v1-public-GetRubricByIdResponse) |  |
| ListRubric | [ListRubricRequest](#modules-assessment-v1-public-ListRubricRequest) | [ListRubricResponse](#modules-assessment-v1-public-ListRubricResponse) |  |

 



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

