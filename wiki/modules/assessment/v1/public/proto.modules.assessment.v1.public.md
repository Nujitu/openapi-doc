# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/public/assignment.proto](#modules_assessment_v1_public_assignment-proto)
    - [AssessAssignmentSubmissionRequest](#modules-assessment-v1-public-AssessAssignmentSubmissionRequest)
    - [AssessAssignmentSubmissionResponse](#modules-assessment-v1-public-AssessAssignmentSubmissionResponse)
    - [CreateAssignmentPresignedPostUrlRequest](#modules-assessment-v1-public-CreateAssignmentPresignedPostUrlRequest)
    - [CreateAssignmentPresignedPostUrlResponse](#modules-assessment-v1-public-CreateAssignmentPresignedPostUrlResponse)
    - [CreateAssignmentRequest](#modules-assessment-v1-public-CreateAssignmentRequest)
    - [CreateAssignmentResponse](#modules-assessment-v1-public-CreateAssignmentResponse)
    - [DeleteAssignmentRequest](#modules-assessment-v1-public-DeleteAssignmentRequest)
    - [DeleteAssignmentResponse](#modules-assessment-v1-public-DeleteAssignmentResponse)
    - [DeleteAssignmentSubmissionRequest](#modules-assessment-v1-public-DeleteAssignmentSubmissionRequest)
    - [DeleteAssignmentSubmissionResponse](#modules-assessment-v1-public-DeleteAssignmentSubmissionResponse)
    - [FinalizeAssignmentSubmissionRequest](#modules-assessment-v1-public-FinalizeAssignmentSubmissionRequest)
    - [FinalizeAssignmentSubmissionResponse](#modules-assessment-v1-public-FinalizeAssignmentSubmissionResponse)
    - [GetAssignmentByIdRequest](#modules-assessment-v1-public-GetAssignmentByIdRequest)
    - [GetAssignmentByIdResponse](#modules-assessment-v1-public-GetAssignmentByIdResponse)
    - [GetAssignmentStatisticByIdRequest](#modules-assessment-v1-public-GetAssignmentStatisticByIdRequest)
    - [GetAssignmentStatisticByIdResponse](#modules-assessment-v1-public-GetAssignmentStatisticByIdResponse)
    - [GetAssignmentSubmissionByIdRequest](#modules-assessment-v1-public-GetAssignmentSubmissionByIdRequest)
    - [GetAssignmentSubmissionByIdResponse](#modules-assessment-v1-public-GetAssignmentSubmissionByIdResponse)
    - [GetAssignmentSubmissionByStudentUserIdRequest](#modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdRequest)
    - [GetAssignmentSubmissionByStudentUserIdResponse](#modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdResponse)
    - [GetBulkAssignmentSubmissionByStudentUserIdRequest](#modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdRequest)
    - [GetBulkAssignmentSubmissionByStudentUserIdResponse](#modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdResponse)
    - [ListAssignmentRequest](#modules-assessment-v1-public-ListAssignmentRequest)
    - [ListAssignmentResponse](#modules-assessment-v1-public-ListAssignmentResponse)
    - [ListAssignmentSubmissionRequest](#modules-assessment-v1-public-ListAssignmentSubmissionRequest)
    - [ListAssignmentSubmissionResponse](#modules-assessment-v1-public-ListAssignmentSubmissionResponse)
    - [ListAssignmentToReviewRequest](#modules-assessment-v1-public-ListAssignmentToReviewRequest)
    - [ListAssignmentToReviewResponse](#modules-assessment-v1-public-ListAssignmentToReviewResponse)
    - [UpdateAssignmentRequest](#modules-assessment-v1-public-UpdateAssignmentRequest)
    - [UpdateAssignmentResponse](#modules-assessment-v1-public-UpdateAssignmentResponse)
    - [UpdateAssignmentSubmissionRequest](#modules-assessment-v1-public-UpdateAssignmentSubmissionRequest)
    - [UpdateAssignmentSubmissionResponse](#modules-assessment-v1-public-UpdateAssignmentSubmissionResponse)
  
    - [AssignmentService](#modules-assessment-v1-public-AssignmentService)
  
- [modules/assessment/v1/public/observation.proto](#modules_assessment_v1_public_observation-proto)
    - [CreateObservationRequest](#modules-observation-v1-public-CreateObservationRequest)
    - [CreateObservationResponse](#modules-observation-v1-public-CreateObservationResponse)
    - [CreateObservationSubmissionRequest](#modules-observation-v1-public-CreateObservationSubmissionRequest)
    - [CreateObservationSubmissionResponse](#modules-observation-v1-public-CreateObservationSubmissionResponse)
    - [DeleteObservationRequest](#modules-observation-v1-public-DeleteObservationRequest)
    - [DeleteObservationResponse](#modules-observation-v1-public-DeleteObservationResponse)
    - [DeleteObservationSubmissionRequest](#modules-observation-v1-public-DeleteObservationSubmissionRequest)
    - [DeleteObservationSubmissionResponse](#modules-observation-v1-public-DeleteObservationSubmissionResponse)
    - [GetBulkObservationSubmissionByStudentUserIdRequest](#modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdRequest)
    - [GetBulkObservationSubmissionByStudentUserIdResponse](#modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdResponse)
    - [GetObservationByIdRequest](#modules-observation-v1-public-GetObservationByIdRequest)
    - [GetObservationByIdResponse](#modules-observation-v1-public-GetObservationByIdResponse)
    - [GetObservationStatisticByIdRequest](#modules-observation-v1-public-GetObservationStatisticByIdRequest)
    - [GetObservationStatisticByIdResponse](#modules-observation-v1-public-GetObservationStatisticByIdResponse)
    - [GetObservationSubmissionByIdRequest](#modules-observation-v1-public-GetObservationSubmissionByIdRequest)
    - [GetObservationSubmissionByIdResponse](#modules-observation-v1-public-GetObservationSubmissionByIdResponse)
    - [GetObservationSubmissionByStudentUserIdRequest](#modules-observation-v1-public-GetObservationSubmissionByStudentUserIdRequest)
    - [GetObservationSubmissionByStudentUserIdResponse](#modules-observation-v1-public-GetObservationSubmissionByStudentUserIdResponse)
    - [ListObservationRequest](#modules-observation-v1-public-ListObservationRequest)
    - [ListObservationResponse](#modules-observation-v1-public-ListObservationResponse)
    - [ListObservationSubmissionRequest](#modules-observation-v1-public-ListObservationSubmissionRequest)
    - [ListObservationSubmissionResponse](#modules-observation-v1-public-ListObservationSubmissionResponse)
    - [ListObservationToReviewRequest](#modules-observation-v1-public-ListObservationToReviewRequest)
    - [ListObservationToReviewResponse](#modules-observation-v1-public-ListObservationToReviewResponse)
    - [UpdateObservationRequest](#modules-observation-v1-public-UpdateObservationRequest)
    - [UpdateObservationResponse](#modules-observation-v1-public-UpdateObservationResponse)
    - [UpdateObservationSubmissionRequest](#modules-observation-v1-public-UpdateObservationSubmissionRequest)
    - [UpdateObservationSubmissionResponse](#modules-observation-v1-public-UpdateObservationSubmissionResponse)
  
    - [ObservationService](#modules-observation-v1-public-ObservationService)
  
- [modules/assessment/v1/public/quiz.proto](#modules_assessment_v1_public_quiz-proto)
    - [Answer](#modules-assessment-v1-public-Answer)
    - [CreateQuestionRequest](#modules-assessment-v1-public-CreateQuestionRequest)
    - [CreateQuestionResponse](#modules-assessment-v1-public-CreateQuestionResponse)
    - [CreateQuizRequest](#modules-assessment-v1-public-CreateQuizRequest)
    - [CreateQuizResponse](#modules-assessment-v1-public-CreateQuizResponse)
    - [EditQuestionsRequest](#modules-assessment-v1-public-EditQuestionsRequest)
    - [EditQuestionsResponse](#modules-assessment-v1-public-EditQuestionsResponse)
    - [GetAllSubmissionListRequest](#modules-assessment-v1-public-GetAllSubmissionListRequest)
    - [GetAllSubmissionListResponse](#modules-assessment-v1-public-GetAllSubmissionListResponse)
    - [GetBulkQuizSubmissionByStudentIdRequest](#modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdRequest)
    - [GetBulkQuizSubmissionByStudentIdResponse](#modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdResponse)
    - [GetQuestionListRequest](#modules-assessment-v1-public-GetQuestionListRequest)
    - [GetQuestionListResponse](#modules-assessment-v1-public-GetQuestionListResponse)
    - [GetQuizDetailRequest](#modules-assessment-v1-public-GetQuizDetailRequest)
    - [GetQuizDetailResponse](#modules-assessment-v1-public-GetQuizDetailResponse)
    - [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest)
    - [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse)
    - [GetQuizListResponse.Quiz](#modules-assessment-v1-public-GetQuizListResponse-Quiz)
    - [GetQuizStatisticsRequest](#modules-assessment-v1-public-GetQuizStatisticsRequest)
    - [GetQuizStatisticsResponse](#modules-assessment-v1-public-GetQuizStatisticsResponse)
    - [GetQuizSubmissionByStudentIdRequest](#modules-assessment-v1-public-GetQuizSubmissionByStudentIdRequest)
    - [GetQuizSubmissionByStudentIdResponse](#modules-assessment-v1-public-GetQuizSubmissionByStudentIdResponse)
    - [GetQuizSubmissionListRequest](#modules-assessment-v1-public-GetQuizSubmissionListRequest)
    - [GetQuizSubmissionListResponse](#modules-assessment-v1-public-GetQuizSubmissionListResponse)
    - [GetStudentAnswerRequest](#modules-assessment-v1-public-GetStudentAnswerRequest)
    - [GetStudentAnswerResponse](#modules-assessment-v1-public-GetStudentAnswerResponse)
    - [GetStudentSubmissionDetailsRequest](#modules-assessment-v1-public-GetStudentSubmissionDetailsRequest)
    - [GetStudentSubmissionDetailsResponse](#modules-assessment-v1-public-GetStudentSubmissionDetailsResponse)
    - [GetStudentSubmissionsRequest](#modules-assessment-v1-public-GetStudentSubmissionsRequest)
    - [GetStudentSubmissionsResponse](#modules-assessment-v1-public-GetStudentSubmissionsResponse)
    - [ManualGradingSubmissionRequest](#modules-assessment-v1-public-ManualGradingSubmissionRequest)
    - [ManualGradingSubmissionRequest.Body](#modules-assessment-v1-public-ManualGradingSubmissionRequest-Body)
    - [ManualGradingSubmissionResponse](#modules-assessment-v1-public-ManualGradingSubmissionResponse)
    - [QuizAssignee](#modules-assessment-v1-public-QuizAssignee)
    - [ScoringQuizJob](#modules-assessment-v1-public-ScoringQuizJob)
    - [ScoringQuizJobPayload](#modules-assessment-v1-public-ScoringQuizJobPayload)
    - [SubmitStudentAnswerRequest](#modules-assessment-v1-public-SubmitStudentAnswerRequest)
    - [SubmitStudentAnswerResponse](#modules-assessment-v1-public-SubmitStudentAnswerResponse)
    - [UpdateQuizRequest](#modules-assessment-v1-public-UpdateQuizRequest)
    - [UpdateQuizResponse](#modules-assessment-v1-public-UpdateQuizResponse)
  
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



<a name="modules-assessment-v1-public-AssessAssignmentSubmissionRequest"></a>

### AssessAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| point | [float](#float) | optional |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) | optional |  |






<a name="modules-assessment-v1-public-AssessAssignmentSubmissionResponse"></a>

### AssessAssignmentSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateAssignmentPresignedPostUrlRequest"></a>

### CreateAssignmentPresignedPostUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [common.v1.S3PresignedUrlRequest](#common-v1-S3PresignedUrlRequest) | repeated |  |






<a name="modules-assessment-v1-public-CreateAssignmentPresignedPostUrlResponse"></a>

### CreateAssignmentPresignedPostUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| presignedUrls | [common.v1.S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse) | repeated |  |






<a name="modules-assessment-v1-public-CreateAssignmentRequest"></a>

### CreateAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| available_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| instruction | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| assignment_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| assignee | [string](#string) | repeated |  |
| instance_id | [string](#string) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| teaching_module_id | [string](#string) |  |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateAssignmentResponse"></a>

### CreateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
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






<a name="modules-assessment-v1-public-DeleteAssignmentSubmissionRequest"></a>

### DeleteAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteAssignmentSubmissionResponse"></a>

### DeleteAssignmentSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-FinalizeAssignmentSubmissionRequest"></a>

### FinalizeAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-FinalizeAssignmentSubmissionResponse"></a>

### FinalizeAssignmentSubmissionResponse



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






<a name="modules-assessment-v1-public-GetAssignmentStatisticByIdRequest"></a>

### GetAssignmentStatisticByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentStatisticByIdResponse"></a>

### GetAssignmentStatisticByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| statistic | [modules.assessment.v1.shared.AssignmentStatistic](#modules-assessment-v1-shared-AssignmentStatistic) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentSubmissionByIdRequest"></a>

### GetAssignmentSubmissionByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentSubmissionByIdResponse"></a>

### GetAssignmentSubmissionByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submission | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdRequest"></a>

### GetAssignmentSubmissionByStudentUserIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| student_user_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdResponse"></a>

### GetAssignmentSubmissionByStudentUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submission | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) |  |  |






<a name="modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdRequest"></a>

### GetBulkAssignmentSubmissionByStudentUserIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| student_user_ids | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdResponse"></a>

### GetBulkAssignmentSubmissionByStudentUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submissions | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) | repeated |  |






<a name="modules-assessment-v1-public-ListAssignmentRequest"></a>

### ListAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| available_date_gt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| available_date_gte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| available_date_lt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| available_date_lte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| due_date_gt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| due_date_gte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| due_date_lt | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| due_date_lte | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| teaching_module_folder_id | [string](#string) | optional |  |
| rubric_id | [string](#string) | optional |  |
| class_subject_id | [string](#string) | optional |  |
| subject_id | [string](#string) | optional |  |
| teacher_user_id | [string](#string) | optional |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) | optional |  |
| assignment_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) | optional |  |
| teaching_module_id | [string](#string) | optional |  |
| exam_id | [string](#string) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentResponse"></a>

### ListAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignments | [modules.assessment.v1.shared.ListAssignment](#modules-assessment-v1-shared-ListAssignment) | repeated |  |






<a name="modules-assessment-v1-public-ListAssignmentSubmissionRequest"></a>

### ListAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) | optional |  |
| student_user_id | [string](#string) | optional |  |
| class_subject_id | [string](#string) | optional |  |
| submission_state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) | optional |  |
| teaching_module_id | [string](#string) | optional |  |
| teaching_module_folder_id | [string](#string) | optional |  |
| teacher_user_id | [string](#string) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentSubmissionResponse"></a>

### ListAssignmentSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submissions | [modules.assessment.v1.shared.ListAssignmentSubmission](#modules-assessment-v1-shared-ListAssignmentSubmission) | repeated |  |






<a name="modules-assessment-v1-public-ListAssignmentToReviewRequest"></a>

### ListAssignmentToReviewRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_user_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentToReviewResponse"></a>

### ListAssignmentToReviewResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lists | [modules.assessment.v1.shared.ListAssignmentStatistic](#modules-assessment-v1-shared-ListAssignmentStatistic) | repeated |  |






<a name="modules-assessment-v1-public-UpdateAssignmentRequest"></a>

### UpdateAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| available_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| instruction | [string](#string) | optional |  |
| index_minimum | [float](#float) | optional |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) | optional |  |
| rubric_id | [string](#string) | optional |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) | optional |  |
| assignment_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) | optional |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| teaching_module_id | [string](#string) | optional |  |
| teaching_module_folder_id | [string](#string) | optional |  |
| remove_available_date | [bool](#bool) |  |  |
| remove_due_date | [bool](#bool) |  |  |






<a name="modules-assessment-v1-public-UpdateAssignmentResponse"></a>

### UpdateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-UpdateAssignmentSubmissionRequest"></a>

### UpdateAssignmentSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| answer_text | [string](#string) | optional |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |






<a name="modules-assessment-v1-public-UpdateAssignmentSubmissionResponse"></a>

### UpdateAssignmentSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| assignment_submission | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) |  |  |





 

 

 


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
| UpdateAssignmentSubmission | [UpdateAssignmentSubmissionRequest](#modules-assessment-v1-public-UpdateAssignmentSubmissionRequest) | [UpdateAssignmentSubmissionResponse](#modules-assessment-v1-public-UpdateAssignmentSubmissionResponse) |  |
| GetBulkAssignmentSubmissionByStudentUserId | [GetBulkAssignmentSubmissionByStudentUserIdRequest](#modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdRequest) | [GetBulkAssignmentSubmissionByStudentUserIdResponse](#modules-assessment-v1-public-GetBulkAssignmentSubmissionByStudentUserIdResponse) |  |
| GetAssignmentSubmissionByStudentUserId | [GetAssignmentSubmissionByStudentUserIdRequest](#modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdRequest) | [GetAssignmentSubmissionByStudentUserIdResponse](#modules-assessment-v1-public-GetAssignmentSubmissionByStudentUserIdResponse) |  |
| GetAssignmentSubmissionById | [GetAssignmentSubmissionByIdRequest](#modules-assessment-v1-public-GetAssignmentSubmissionByIdRequest) | [GetAssignmentSubmissionByIdResponse](#modules-assessment-v1-public-GetAssignmentSubmissionByIdResponse) |  |
| DeleteAssignmentSubmission | [DeleteAssignmentSubmissionRequest](#modules-assessment-v1-public-DeleteAssignmentSubmissionRequest) | [DeleteAssignmentSubmissionResponse](#modules-assessment-v1-public-DeleteAssignmentSubmissionResponse) |  |
| FinalizeAssignmentSubmission | [FinalizeAssignmentSubmissionRequest](#modules-assessment-v1-public-FinalizeAssignmentSubmissionRequest) | [FinalizeAssignmentSubmissionResponse](#modules-assessment-v1-public-FinalizeAssignmentSubmissionResponse) |  |
| AssessAssignmentSubmission | [AssessAssignmentSubmissionRequest](#modules-assessment-v1-public-AssessAssignmentSubmissionRequest) | [AssessAssignmentSubmissionResponse](#modules-assessment-v1-public-AssessAssignmentSubmissionResponse) |  |
| ListAssignmentSubmission | [ListAssignmentSubmissionRequest](#modules-assessment-v1-public-ListAssignmentSubmissionRequest) | [ListAssignmentSubmissionResponse](#modules-assessment-v1-public-ListAssignmentSubmissionResponse) |  |
| GetAssignmentStatisticById | [GetAssignmentStatisticByIdRequest](#modules-assessment-v1-public-GetAssignmentStatisticByIdRequest) | [GetAssignmentStatisticByIdResponse](#modules-assessment-v1-public-GetAssignmentStatisticByIdResponse) |  |
| ListAssignmentToReview | [ListAssignmentToReviewRequest](#modules-assessment-v1-public-ListAssignmentToReviewRequest) | [ListAssignmentToReviewResponse](#modules-assessment-v1-public-ListAssignmentToReviewResponse) |  |
| CreateAssignmentPresignedPostUrl | [CreateAssignmentPresignedPostUrlRequest](#modules-assessment-v1-public-CreateAssignmentPresignedPostUrlRequest) | [CreateAssignmentPresignedPostUrlResponse](#modules-assessment-v1-public-CreateAssignmentPresignedPostUrlResponse) |  |

 



<a name="modules_assessment_v1_public_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/observation.proto



<a name="modules-observation-v1-public-CreateObservationRequest"></a>

### CreateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| observation_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| teaching_module_id | [string](#string) |  |  |
| assignee | [string](#string) | repeated |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |






<a name="modules-observation-v1-public-CreateObservationResponse"></a>

### CreateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-CreateObservationSubmissionRequest"></a>

### CreateObservationSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| student_user_id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |
| submission_state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| class_subject_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-CreateObservationSubmissionResponse"></a>

### CreateObservationSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| observation_submission | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) |  |  |






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






<a name="modules-observation-v1-public-DeleteObservationSubmissionRequest"></a>

### DeleteObservationSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-DeleteObservationSubmissionResponse"></a>

### DeleteObservationSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdRequest"></a>

### GetBulkObservationSubmissionByStudentUserIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| student_user_ids | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdResponse"></a>

### GetBulkObservationSubmissionByStudentUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submissions | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) | repeated |  |






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






<a name="modules-observation-v1-public-GetObservationStatisticByIdRequest"></a>

### GetObservationStatisticByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationStatisticByIdResponse"></a>

### GetObservationStatisticByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| statistic | [modules.assessment.v1.shared.ObservationStatistic](#modules-assessment-v1-shared-ObservationStatistic) |  |  |






<a name="modules-observation-v1-public-GetObservationSubmissionByIdRequest"></a>

### GetObservationSubmissionByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationSubmissionByIdResponse"></a>

### GetObservationSubmissionByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submission | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) |  |  |






<a name="modules-observation-v1-public-GetObservationSubmissionByStudentUserIdRequest"></a>

### GetObservationSubmissionByStudentUserIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| student_user_id | [string](#string) |  |  |






<a name="modules-observation-v1-public-GetObservationSubmissionByStudentUserIdResponse"></a>

### GetObservationSubmissionByStudentUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submission | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) |  |  |






<a name="modules-observation-v1-public-ListObservationRequest"></a>

### ListObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_folder_id | [string](#string) | optional |  |
| rubric_id | [string](#string) | optional |  |
| class_subject_id | [string](#string) | optional |  |
| subject_id | [string](#string) | optional |  |
| teacher_user_id | [string](#string) | optional |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) | optional |  |
| observation_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) | optional |  |
| teaching_module_id | [string](#string) | optional |  |
| exam_id | [string](#string) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-observation-v1-public-ListObservationResponse"></a>

### ListObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observations | [modules.assessment.v1.shared.ListObservation](#modules-assessment-v1-shared-ListObservation) | repeated |  |






<a name="modules-observation-v1-public-ListObservationSubmissionRequest"></a>

### ListObservationSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) | optional |  |
| student_user_id | [string](#string) | optional |  |
| class_subject_id | [string](#string) | optional |  |
| submission_state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) | optional |  |
| teaching_module_id | [string](#string) | optional |  |
| teaching_module_folder_id | [string](#string) | optional |  |
| teacher_user_id | [string](#string) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-observation-v1-public-ListObservationSubmissionResponse"></a>

### ListObservationSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submissions | [modules.assessment.v1.shared.ListObservationSubmission](#modules-assessment-v1-shared-ListObservationSubmission) | repeated |  |






<a name="modules-observation-v1-public-ListObservationToReviewRequest"></a>

### ListObservationToReviewRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_user_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-observation-v1-public-ListObservationToReviewResponse"></a>

### ListObservationToReviewResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lists | [modules.assessment.v1.shared.ListObservationStatistic](#modules-assessment-v1-shared-ListObservationStatistic) | repeated |  |






<a name="modules-observation-v1-public-UpdateObservationRequest"></a>

### UpdateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| index_minimum | [float](#float) | optional |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) | optional |  |
| rubric_id | [string](#string) | optional |  |
| scoring_method | [modules.assessment.v1.shared.ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) | optional |  |
| observation_type | [modules.assessment.v1.shared.AssessmentType](#modules-assessment-v1-shared-AssessmentType) | optional |  |
| teaching_module_id | [string](#string) | optional |  |
| teaching_module_folder_id | [string](#string) | optional |  |






<a name="modules-observation-v1-public-UpdateObservationResponse"></a>

### UpdateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |






<a name="modules-observation-v1-public-UpdateObservationSubmissionRequest"></a>

### UpdateObservationSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| point | [float](#float) | optional |  |
| RubricSubmission | [modules.assessment.v1.shared.RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) | optional |  |






<a name="modules-observation-v1-public-UpdateObservationSubmissionResponse"></a>

### UpdateObservationSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| observation_submission | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) |  |  |





 

 

 


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
| CreateObservationSubmission | [CreateObservationSubmissionRequest](#modules-observation-v1-public-CreateObservationSubmissionRequest) | [CreateObservationSubmissionResponse](#modules-observation-v1-public-CreateObservationSubmissionResponse) |  |
| UpdateObservationSubmission | [UpdateObservationSubmissionRequest](#modules-observation-v1-public-UpdateObservationSubmissionRequest) | [UpdateObservationSubmissionResponse](#modules-observation-v1-public-UpdateObservationSubmissionResponse) |  |
| GetBulkObservationSubmissionByStudentUserId | [GetBulkObservationSubmissionByStudentUserIdRequest](#modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdRequest) | [GetBulkObservationSubmissionByStudentUserIdResponse](#modules-observation-v1-public-GetBulkObservationSubmissionByStudentUserIdResponse) |  |
| GetObservationSubmissionByStudentUserId | [GetObservationSubmissionByStudentUserIdRequest](#modules-observation-v1-public-GetObservationSubmissionByStudentUserIdRequest) | [GetObservationSubmissionByStudentUserIdResponse](#modules-observation-v1-public-GetObservationSubmissionByStudentUserIdResponse) |  |
| GetObservationSubmissionById | [GetObservationSubmissionByIdRequest](#modules-observation-v1-public-GetObservationSubmissionByIdRequest) | [GetObservationSubmissionByIdResponse](#modules-observation-v1-public-GetObservationSubmissionByIdResponse) |  |
| DeleteObservationSubmission | [DeleteObservationSubmissionRequest](#modules-observation-v1-public-DeleteObservationSubmissionRequest) | [DeleteObservationSubmissionResponse](#modules-observation-v1-public-DeleteObservationSubmissionResponse) |  |
| ListObservationSubmission | [ListObservationSubmissionRequest](#modules-observation-v1-public-ListObservationSubmissionRequest) | [ListObservationSubmissionResponse](#modules-observation-v1-public-ListObservationSubmissionResponse) |  |
| GetObservationStatisticById | [GetObservationStatisticByIdRequest](#modules-observation-v1-public-GetObservationStatisticByIdRequest) | [GetObservationStatisticByIdResponse](#modules-observation-v1-public-GetObservationStatisticByIdResponse) |  |
| ListObservationToReview | [ListObservationToReviewRequest](#modules-observation-v1-public-ListObservationToReviewRequest) | [ListObservationToReviewResponse](#modules-observation-v1-public-ListObservationToReviewResponse) |  |

 



<a name="modules_assessment_v1_public_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/quiz.proto



<a name="modules-assessment-v1-public-Answer"></a>

### Answer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| question_id | [string](#string) |  |  |
| answer | [string](#string) |  |  |
| options | [modules.assessment.v1.shared.QuizOption](#modules-assessment-v1-shared-QuizOption) | repeated | for multiple answer |






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
| teaching_module_id | [string](#string) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| exam_id | [string](#string) |  |  |
| settings | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |
| assignee | [QuizAssignee](#modules-assessment-v1-public-QuizAssignee) | repeated |  |






<a name="modules-assessment-v1-public-CreateQuizResponse"></a>

### CreateQuizResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) |  |  |






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






<a name="modules-assessment-v1-public-GetAllSubmissionListRequest"></a>

### GetAllSubmissionListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_name | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| student_name | [string](#string) |  |  |
| quiz_title | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| start_due_date | [string](#string) |  |  |
| end_due_date | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-GetAllSubmissionListResponse"></a>

### GetAllSubmissionListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [modules.assessment.v1.shared.QuizSubmission](#modules-assessment-v1-shared-QuizSubmission) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdRequest"></a>

### GetBulkQuizSubmissionByStudentIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| student_ids | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdResponse"></a>

### GetBulkQuizSubmissionByStudentIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_submissions | [modules.assessment.v1.shared.QuizSubmission](#modules-assessment-v1-shared-QuizSubmission) | repeated |  |






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
| exam_id | [string](#string) |  |  |
| teaching_module_id | [string](#string) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-GetQuizListResponse"></a>

### GetQuizListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz | [GetQuizListResponse.Quiz](#modules-assessment-v1-public-GetQuizListResponse-Quiz) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






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
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-public-GetQuizStatisticsRequest"></a>

### GetQuizStatisticsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetQuizStatisticsResponse"></a>

### GetQuizStatisticsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| statistics | [modules.assessment.v1.shared.QuizStatistics](#modules-assessment-v1-shared-QuizStatistics) |  |  |






<a name="modules-assessment-v1-public-GetQuizSubmissionByStudentIdRequest"></a>

### GetQuizSubmissionByStudentIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetQuizSubmissionByStudentIdResponse"></a>

### GetQuizSubmissionByStudentIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_submission | [modules.assessment.v1.shared.QuizSubmission](#modules-assessment-v1-shared-QuizSubmission) |  |  |






<a name="modules-assessment-v1-public-GetQuizSubmissionListRequest"></a>

### GetQuizSubmissionListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subject_id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) | optional |  |
| student_name | [string](#string) | optional |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-assessment-v1-public-GetQuizSubmissionListResponse"></a>

### GetQuizSubmissionListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_submission_list | [modules.assessment.v1.shared.QuizSubmissionResult](#modules-assessment-v1-shared-QuizSubmissionResult) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-assessment-v1-public-GetStudentAnswerRequest"></a>

### GetStudentAnswerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetStudentAnswerResponse"></a>

### GetStudentAnswerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| answers | [modules.assessment.v1.shared.StudentAnswer](#modules-assessment-v1-shared-StudentAnswer) | repeated |  |






<a name="modules-assessment-v1-public-GetStudentSubmissionDetailsRequest"></a>

### GetStudentSubmissionDetailsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetStudentSubmissionDetailsResponse"></a>

### GetStudentSubmissionDetailsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submission_info | [modules.assessment.v1.shared.QuizSubmission](#modules-assessment-v1-shared-QuizSubmission) |  |  |
| answers | [modules.assessment.v1.shared.StudentAnswer](#modules-assessment-v1-shared-StudentAnswer) | repeated |  |






<a name="modules-assessment-v1-public-GetStudentSubmissionsRequest"></a>

### GetStudentSubmissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| state | [modules.assessment.v1.shared.SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| teaching_module_id | [string](#string) |  |  |
| start_due_date | [string](#string) |  |  |
| end_due_date | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetStudentSubmissionsResponse"></a>

### GetStudentSubmissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submissions | [modules.assessment.v1.shared.StudentSubmissions](#modules-assessment-v1-shared-StudentSubmissions) | repeated |  |






<a name="modules-assessment-v1-public-ManualGradingSubmissionRequest"></a>

### ManualGradingSubmissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body | [ManualGradingSubmissionRequest.Body](#modules-assessment-v1-public-ManualGradingSubmissionRequest-Body) | repeated |  |
| quiz_id | [string](#string) |  |  |
| nisn | [string](#string) |  |  |






<a name="modules-assessment-v1-public-ManualGradingSubmissionRequest-Body"></a>

### ManualGradingSubmissionRequest.Body



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| score | [string](#string) |  |  |
| answer_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-ManualGradingSubmissionResponse"></a>

### ManualGradingSubmissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-QuizAssignee"></a>

### QuizAssignee



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |






<a name="modules-assessment-v1-public-ScoringQuizJob"></a>

### ScoringQuizJob



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| meta | [common.v1.AsyncMetadata](#common-v1-AsyncMetadata) |  |  |
| payload | [ScoringQuizJobPayload](#modules-assessment-v1-public-ScoringQuizJobPayload) |  |  |






<a name="modules-assessment-v1-public-ScoringQuizJobPayload"></a>

### ScoringQuizJobPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| action | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| submission_start_time | [string](#string) |  |  |
| subission_end_time | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| answer | [Answer](#modules-assessment-v1-public-Answer) | repeated |  |






<a name="modules-assessment-v1-public-SubmitStudentAnswerRequest"></a>

### SubmitStudentAnswerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| submission_start_time | [string](#string) |  |  |
| subission_end_time | [string](#string) |  |  |
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
| settings | [modules.assessment.v1.shared.QuizSettings](#modules-assessment-v1-shared-QuizSettings) |  |  |






<a name="modules-assessment-v1-public-UpdateQuizResponse"></a>

### UpdateQuizResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| quiz | [modules.assessment.v1.shared.Quiz](#modules-assessment-v1-shared-Quiz) |  |  |





 

 

 


<a name="modules-assessment-v1-public-QuizService"></a>

### QuizService
Service for quiz related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateQuiz | [CreateQuizRequest](#modules-assessment-v1-public-CreateQuizRequest) | [CreateQuizResponse](#modules-assessment-v1-public-CreateQuizResponse) |  |
| UpdateQuiz | [UpdateQuizRequest](#modules-assessment-v1-public-UpdateQuizRequest) | [UpdateQuizResponse](#modules-assessment-v1-public-UpdateQuizResponse) |  |
| GetQuizDetail | [GetQuizDetailRequest](#modules-assessment-v1-public-GetQuizDetailRequest) | [GetQuizDetailResponse](#modules-assessment-v1-public-GetQuizDetailResponse) |  |
| GetQuizList | [GetQuizListRequest](#modules-assessment-v1-public-GetQuizListRequest) | [GetQuizListResponse](#modules-assessment-v1-public-GetQuizListResponse) |  |
| CreateQuestions | [CreateQuestionRequest](#modules-assessment-v1-public-CreateQuestionRequest) | [CreateQuestionResponse](#modules-assessment-v1-public-CreateQuestionResponse) |  |
| EditQuestions | [EditQuestionsRequest](#modules-assessment-v1-public-EditQuestionsRequest) | [EditQuestionsResponse](#modules-assessment-v1-public-EditQuestionsResponse) |  |
| GetQuestionList | [GetQuestionListRequest](#modules-assessment-v1-public-GetQuestionListRequest) | [GetQuestionListResponse](#modules-assessment-v1-public-GetQuestionListResponse) |  |
| SubmitStudentAnswer | [SubmitStudentAnswerRequest](#modules-assessment-v1-public-SubmitStudentAnswerRequest) | [SubmitStudentAnswerResponse](#modules-assessment-v1-public-SubmitStudentAnswerResponse) |  |
| GetAllSubmissionList | [GetAllSubmissionListRequest](#modules-assessment-v1-public-GetAllSubmissionListRequest) | [GetAllSubmissionListResponse](#modules-assessment-v1-public-GetAllSubmissionListResponse) |  |
| GetBulkQuizSubmissionByStudentId | [GetBulkQuizSubmissionByStudentIdRequest](#modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdRequest) | [GetBulkQuizSubmissionByStudentIdResponse](#modules-assessment-v1-public-GetBulkQuizSubmissionByStudentIdResponse) |  |
| GetQuizSubmissionByStudentId | [GetQuizSubmissionByStudentIdRequest](#modules-assessment-v1-public-GetQuizSubmissionByStudentIdRequest) | [GetQuizSubmissionByStudentIdResponse](#modules-assessment-v1-public-GetQuizSubmissionByStudentIdResponse) |  |
| GetStudentSubmissions | [GetStudentSubmissionsRequest](#modules-assessment-v1-public-GetStudentSubmissionsRequest) | [GetStudentSubmissionsResponse](#modules-assessment-v1-public-GetStudentSubmissionsResponse) |  |
| GetQuizSubmissionList | [GetQuizSubmissionListRequest](#modules-assessment-v1-public-GetQuizSubmissionListRequest) | [GetQuizSubmissionListResponse](#modules-assessment-v1-public-GetQuizSubmissionListResponse) |  |
| ManualGradingSubmission | [ManualGradingSubmissionRequest](#modules-assessment-v1-public-ManualGradingSubmissionRequest) | [ManualGradingSubmissionResponse](#modules-assessment-v1-public-ManualGradingSubmissionResponse) |  |
| GetStudentAnswer | [GetStudentAnswerRequest](#modules-assessment-v1-public-GetStudentAnswerRequest) | [GetStudentAnswerResponse](#modules-assessment-v1-public-GetStudentAnswerResponse) |  |
| GetStudentSubmissionDetails | [GetStudentSubmissionDetailsRequest](#modules-assessment-v1-public-GetStudentSubmissionDetailsRequest) | [GetStudentSubmissionDetailsResponse](#modules-assessment-v1-public-GetStudentSubmissionDetailsResponse) |  |
| GetQuizStatistics | [GetQuizStatisticsRequest](#modules-assessment-v1-public-GetQuizStatisticsRequest) | [GetQuizStatisticsResponse](#modules-assessment-v1-public-GetQuizStatisticsResponse) |  |

 



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

