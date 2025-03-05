# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/shared/assignment.proto](#modules_assessment_v1_shared_assignment-proto)
    - [Assignment](#modules-assessment-v1-shared-Assignment)
    - [AssignmentDetails](#modules-assessment-v1-shared-AssignmentDetails)
    - [AssignmentStatistic](#modules-assessment-v1-shared-AssignmentStatistic)
    - [AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission)
    - [ListAssignment](#modules-assessment-v1-shared-ListAssignment)
    - [ListAssignmentStatistic](#modules-assessment-v1-shared-ListAssignmentStatistic)
    - [ListAssignmentSubmission](#modules-assessment-v1-shared-ListAssignmentSubmission)
  
- [modules/assessment/v1/shared/enum.proto](#modules_assessment_v1_shared_enum-proto)
    - [AnswerScoreState](#modules-assessment-v1-shared-AnswerScoreState)
    - [AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory)
    - [AssessmentQuizQuestionType](#modules-assessment-v1-shared-AssessmentQuizQuestionType)
    - [AssessmentType](#modules-assessment-v1-shared-AssessmentType)
    - [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod)
    - [SubmissionState](#modules-assessment-v1-shared-SubmissionState)
  
- [modules/assessment/v1/shared/observation.proto](#modules_assessment_v1_shared_observation-proto)
    - [ListObservation](#modules-assessment-v1-shared-ListObservation)
    - [ListObservationStatistic](#modules-assessment-v1-shared-ListObservationStatistic)
    - [ListObservationSubmission](#modules-assessment-v1-shared-ListObservationSubmission)
    - [Observation](#modules-assessment-v1-shared-Observation)
    - [ObservationDetails](#modules-assessment-v1-shared-ObservationDetails)
    - [ObservationStatistic](#modules-assessment-v1-shared-ObservationStatistic)
    - [ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission)
  
- [modules/assessment/v1/shared/quiz.proto](#modules_assessment_v1_shared_quiz-proto)
    - [Quiz](#modules-assessment-v1-shared-Quiz)
    - [QuizOption](#modules-assessment-v1-shared-QuizOption)
    - [QuizQuestion](#modules-assessment-v1-shared-QuizQuestion)
    - [QuizSettings](#modules-assessment-v1-shared-QuizSettings)
    - [QuizSubmission](#modules-assessment-v1-shared-QuizSubmission)
    - [QuizSubmissionResult](#modules-assessment-v1-shared-QuizSubmissionResult)
    - [StudentAnswer](#modules-assessment-v1-shared-StudentAnswer)
    - [StudentSubmissions](#modules-assessment-v1-shared-StudentSubmissions)
  
- [modules/assessment/v1/shared/rubric.proto](#modules_assessment_v1_shared_rubric-proto)
    - [Criterion](#modules-assessment-v1-shared-Criterion)
    - [Level](#modules-assessment-v1-shared-Level)
    - [Rubric](#modules-assessment-v1-shared-Rubric)
    - [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission)
  
- [modules/assessment/v1/shared/subject.proto](#modules_assessment_v1_shared_subject-proto)
    - [SubjectDetails](#modules-assessment-v1-shared-SubjectDetails)
  
- [modules/assessment/v1/shared/teaching_module.proto](#modules_assessment_v1_shared_teaching_module-proto)
    - [TeachingModuleSummary](#modules-assessment-v1-shared-TeachingModuleSummary)
  
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
| available_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| instruction | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| assignment_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| assignee | [string](#string) | repeated |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| teaching_module_id | [string](#string) |  |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-AssignmentDetails"></a>

### AssignmentDetails



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| available_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| instruction | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject | [SubjectDetails](#modules-assessment-v1-shared-SubjectDetails) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| assignment_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| assignee | [string](#string) | repeated |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| teaching_module | [TeachingModuleSummary](#modules-assessment-v1-shared-TeachingModuleSummary) |  |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-AssignmentStatistic"></a>

### AssignmentStatistic



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| no_submission | [uint32](#uint32) |  |  |
| need_grading | [uint32](#uint32) |  |  |
| graded | [uint32](#uint32) |  |  |
| submitted_on_time | [uint32](#uint32) |  |  |
| submitted_late | [uint32](#uint32) |  |  |
| teacher_id | [string](#string) |  |  |
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
| submission_state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| class_subject_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ListAssignment"></a>

### ListAssignment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| available_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| instruction | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject | [SubjectDetails](#modules-assessment-v1-shared-SubjectDetails) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| assignment_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| assignee | [string](#string) | repeated |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| teaching_module | [TeachingModuleSummary](#modules-assessment-v1-shared-TeachingModuleSummary) |  |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ListAssignmentStatistic"></a>

### ListAssignmentStatistic



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [AssignmentDetails](#modules-assessment-v1-shared-AssignmentDetails) |  |  |
| no_submission | [uint32](#uint32) |  |  |
| need_grading | [uint32](#uint32) |  |  |
| graded | [uint32](#uint32) |  |  |
| submitted_on_time | [uint32](#uint32) |  |  |
| submitted_late | [uint32](#uint32) |  |  |
| teacher_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ListAssignmentSubmission"></a>

### ListAssignmentSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| assignment | [AssignmentDetails](#modules-assessment-v1-shared-AssignmentDetails) |  |  |
| student_id | [string](#string) |  |  |
| answer_text | [string](#string) |  |  |
| attachment_files | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| point | [float](#float) |  |  |
| RubricSubmission | [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |
| submission_state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| class_subject_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_assessment_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/enum.proto


 


<a name="modules-assessment-v1-shared-AnswerScoreState"></a>

### AnswerScoreState


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| NOT_SCORED | 1 |  |
| SCORED | 2 |  |



<a name="modules-assessment-v1-shared-AssessmentQuizCategory"></a>

### AssessmentQuizCategory


| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSESSMENT_CATEGORY_EMPTY | 0 |  |
| PRACTICE_QUIZ | 1 |  |
| QUIZ | 2 |  |
| HOMEWORK | 3 |  |



<a name="modules-assessment-v1-shared-AssessmentQuizQuestionType"></a>

### AssessmentQuizQuestionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSESSMENT_QUIZ_EMPTY | 0 |  |
| TEXT | 1 |  |
| ESSAY | 2 |  |
| MULTIPLE_ANSWER | 3 | Assignee allow to choose multiple answer |
| SINGLE_ANSWER | 4 | Assignee allow single answer |
| FILE_UPLOAD | 5 | Assignee allow file upload |
| NUMERIC | 6 | Assignee allow numeric answer |
| TRUE_FALSE | 7 | Assignee allow true false answer |
| SORTING | 8 | Assignee allow sorting answer |
| MATCHING | 9 | Assignee allow matching answer |
| MULTIPLE_PARTIAL_ANSWER | 10 | Assignee allow to choose multiple answer with partial score |



<a name="modules-assessment-v1-shared-AssessmentType"></a>

### AssessmentType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSESSMENT_EMPTY | 0 |  |
| FORMATIVE | 1 |  |
| SUMMATIVE | 2 |  |
| EXAM | 3 |  |



<a name="modules-assessment-v1-shared-ScoringMethod"></a>

### ScoringMethod


| Name | Number | Description |
| ---- | ------ | ----------- |
| MANUAL | 0 |  |
| RUBRIC | 1 |  |



<a name="modules-assessment-v1-shared-SubmissionState"></a>

### SubmissionState


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_SUBMISSON | 0 |  |
| NO_SUBMISSION | 1 |  |
| NEED_GRADING | 2 |  |
| GRADED | 3 |  |


 

 

 



<a name="modules_assessment_v1_shared_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/observation.proto



<a name="modules-assessment-v1-shared-ListObservation"></a>

### ListObservation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject | [SubjectDetails](#modules-assessment-v1-shared-SubjectDetails) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| observation_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| teaching_module | [TeachingModuleSummary](#modules-assessment-v1-shared-TeachingModuleSummary) |  |  |
| assignee | [string](#string) | repeated |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ListObservationStatistic"></a>

### ListObservationStatistic



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [ObservationDetails](#modules-assessment-v1-shared-ObservationDetails) |  |  |
| need_grading | [uint32](#uint32) |  |  |
| graded | [uint32](#uint32) |  |  |
| teacher_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ListObservationSubmission"></a>

### ListObservationSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| observation | [ObservationDetails](#modules-assessment-v1-shared-ObservationDetails) |  |  |
| student_id | [string](#string) |  |  |
| point | [float](#float) |  |  |
| RubricSubmission | [RubricSubmission](#modules-assessment-v1-shared-RubricSubmission) |  |  |
| submission_state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| class_subject_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-Observation"></a>

### Observation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| observation_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| teaching_module_id | [string](#string) |  |  |
| assignee | [string](#string) | repeated |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ObservationDetails"></a>

### ObservationDetails



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| rubric_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject | [SubjectDetails](#modules-assessment-v1-shared-SubjectDetails) |  |  |
| teacher_id | [string](#string) |  |  |
| scoring_method | [ScoringMethod](#modules-assessment-v1-shared-ScoringMethod) |  |  |
| observation_type | [AssessmentType](#modules-assessment-v1-shared-AssessmentType) |  |  |
| teaching_module | [TeachingModuleSummary](#modules-assessment-v1-shared-TeachingModuleSummary) |  |  |
| assignee | [string](#string) | repeated |  |
| exam_id | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-ObservationStatistic"></a>

### ObservationStatistic



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| need_grading | [uint32](#uint32) |  |  |
| graded | [uint32](#uint32) |  |  |
| teacher_id | [string](#string) |  |  |
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
| submission_state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| class_subject_id | [string](#string) |  |  |
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
| teaching_module_id | [string](#string) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |
| exam_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-QuizOption"></a>

### QuizOption



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| text | [string](#string) |  |  |
| value | [string](#string) |  |  |
| isAnswer | [bool](#bool) | optional | for single / multiple answer |
| priority | [string](#string) | optional | for sorting answer |






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






<a name="modules-assessment-v1-shared-QuizSubmission"></a>

### QuizSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| quiz_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| attempt | [int32](#int32) |  |  |
| time_spent | [int32](#int32) |  |  |
| score | [float](#float) |  |  |
| points | [int32](#int32) |  |  |
| state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-QuizSubmissionResult"></a>

### QuizSubmissionResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| total_score | [string](#string) |  |  |
| correct_answer | [string](#string) |  |  |
| duration | [string](#string) |  |  |
| state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |






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
| options | [QuizOption](#modules-assessment-v1-shared-QuizOption) | repeated |  |
| score_state | [AnswerScoreState](#modules-assessment-v1-shared-AnswerScoreState) |  |  |






<a name="modules-assessment-v1-shared-StudentSubmissions"></a>

### StudentSubmissions



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_name | [string](#string) |  |  |
| learning_goal | [string](#string) |  |  |
| due_date | [string](#string) |  |  |
| state | [SubmissionState](#modules-assessment-v1-shared-SubmissionState) |  |  |
| category | [AssessmentQuizCategory](#modules-assessment-v1-shared-AssessmentQuizCategory) |  |  |
| score | [float](#float) |  |  |
| points | [int32](#int32) |  |  |
| quiz_id | [string](#string) |  |  |
| submission_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |





 

 

 

 



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
| teacher_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-assessment-v1-shared-RubricSubmission"></a>

### RubricSubmission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rubric_id | [string](#string) |  |  |
| total_point | [float](#float) |  |  |
| points | [float](#float) | repeated |  |





 

 

 

 



<a name="modules_assessment_v1_shared_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/subject.proto



<a name="modules-assessment-v1-shared-SubjectDetails"></a>

### SubjectDetails



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| description | [string](#string) |  |  |





 

 

 

 



<a name="modules_assessment_v1_shared_teaching_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/shared/teaching_module.proto



<a name="modules-assessment-v1-shared-TeachingModuleSummary"></a>

### TeachingModuleSummary



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_profile | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| subject_id | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| cover_image | [string](#string) |  |  |
| time_allocation | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| description | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| index_minimum | [int32](#int32) |  |  |





 

 

 

 



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

