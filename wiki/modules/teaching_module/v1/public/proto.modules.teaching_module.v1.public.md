# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/teaching_module/v1/public/exam.proto](#modules_teaching_module_v1_public_exam-proto)
    - [CreateExamRequest](#modules-teaching_module-v1-public-CreateExamRequest)
    - [CreateExamResponse](#modules-teaching_module-v1-public-CreateExamResponse)
    - [DeleteExamRequest](#modules-teaching_module-v1-public-DeleteExamRequest)
    - [DeleteExamResponse](#modules-teaching_module-v1-public-DeleteExamResponse)
    - [GetExamByIdRequest](#modules-teaching_module-v1-public-GetExamByIdRequest)
    - [GetExamByIdResponse](#modules-teaching_module-v1-public-GetExamByIdResponse)
    - [GetExamByTypeRequest](#modules-teaching_module-v1-public-GetExamByTypeRequest)
    - [GetExamByTypeResponse](#modules-teaching_module-v1-public-GetExamByTypeResponse)
    - [UpdateExamRequest](#modules-teaching_module-v1-public-UpdateExamRequest)
    - [UpdateExamResponse](#modules-teaching_module-v1-public-UpdateExamResponse)
  
    - [ExamService](#modules-teaching_module-v1-public-ExamService)
  
- [modules/teaching_module/v1/public/folder_task.proto](#modules_teaching_module_v1_public_folder_task-proto)
    - [DeleteFolderTaskRequest](#modules-teaching_module-v1-public-DeleteFolderTaskRequest)
    - [DeleteFolderTaskResponse](#modules-teaching_module-v1-public-DeleteFolderTaskResponse)
    - [SubmitFolderTaskRequest](#modules-teaching_module-v1-public-SubmitFolderTaskRequest)
    - [SubmitFolderTaskResponse](#modules-teaching_module-v1-public-SubmitFolderTaskResponse)
  
    - [FolderTaskService](#modules-teaching_module-v1-public-FolderTaskService)
  
- [modules/teaching_module/v1/public/learning_goal.proto](#modules_teaching_module_v1_public_learning_goal-proto)
    - [CreateLearningGoalResponse](#modules-teaching_module-v1-public-CreateLearningGoalResponse)
    - [CreateLearningGoalsRequest](#modules-teaching_module-v1-public-CreateLearningGoalsRequest)
    - [UpdateLearningGoalRequest](#modules-teaching_module-v1-public-UpdateLearningGoalRequest)
    - [UpdateLearningGoalResponse](#modules-teaching_module-v1-public-UpdateLearningGoalResponse)
  
    - [LearningGoalService](#modules-teaching_module-v1-public-LearningGoalService)
  
- [modules/teaching_module/v1/public/study_material.proto](#modules_teaching_module_v1_public_study_material-proto)
    - [CreateStudyMaterialResponse](#modules-teaching_module-v1-public-CreateStudyMaterialResponse)
    - [DeleteStudyMaterialRequest](#modules-teaching_module-v1-public-DeleteStudyMaterialRequest)
    - [DeleteStudyMaterialResponse](#modules-teaching_module-v1-public-DeleteStudyMaterialResponse)
    - [GetStudyMaterialByFolderIDRequest](#modules-teaching_module-v1-public-GetStudyMaterialByFolderIDRequest)
    - [GetStudyMaterialByFolderIDResponse](#modules-teaching_module-v1-public-GetStudyMaterialByFolderIDResponse)
    - [GetStudyMaterialDetailRequest](#modules-teaching_module-v1-public-GetStudyMaterialDetailRequest)
    - [GetStudyMaterialDetailResponse](#modules-teaching_module-v1-public-GetStudyMaterialDetailResponse)
    - [UpdateStudyMaterialResponse](#modules-teaching_module-v1-public-UpdateStudyMaterialResponse)
  
    - [StudyMaterialService](#modules-teaching_module-v1-public-StudyMaterialService)
  
- [modules/teaching_module/v1/public/teaching_module.proto](#modules_teaching_module_v1_public_teaching_module-proto)
    - [ApproveteachingModuleRequest](#modules-teaching_module-v1-public-ApproveteachingModuleRequest)
    - [DeleteTeachingModuleRequest](#modules-teaching_module-v1-public-DeleteTeachingModuleRequest)
    - [GetTeachingModuleDetailRequest](#modules-teaching_module-v1-public-GetTeachingModuleDetailRequest)
    - [GetTeachingModuleListRequest](#modules-teaching_module-v1-public-GetTeachingModuleListRequest)
    - [TeachingModuleListResponse](#modules-teaching_module-v1-public-TeachingModuleListResponse)
    - [TeachingModuleRequest](#modules-teaching_module-v1-public-TeachingModuleRequest)
    - [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse)
  
    - [TeachingModuleService](#modules-teaching_module-v1-public-TeachingModuleService)
  
- [modules/teaching_module/v1/public/teaching_module_folder.proto](#modules_teaching_module_v1_public_teaching_module_folder-proto)
    - [CreateTeachingModuleFolderResponse](#modules-teaching_module-v1-public-CreateTeachingModuleFolderResponse)
    - [DeleteTeachingModuleFolderRequest](#modules-teaching_module-v1-public-DeleteTeachingModuleFolderRequest)
    - [DeleteTeachingModuleFolderResponse](#modules-teaching_module-v1-public-DeleteTeachingModuleFolderResponse)
    - [GetTeachingModuleFolderDetailByIDRequest](#modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDRequest)
    - [GetTeachingModuleFolderDetailByIDResponse](#modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDResponse)
    - [GetTeachingModuleFolderListRequest](#modules-teaching_module-v1-public-GetTeachingModuleFolderListRequest)
    - [GetTeachingModuleFolderListResponse](#modules-teaching_module-v1-public-GetTeachingModuleFolderListResponse)
    - [UpdateTeachingModuleFolderResponse](#modules-teaching_module-v1-public-UpdateTeachingModuleFolderResponse)
  
    - [TeachingModuleFolderService](#modules-teaching_module-v1-public-TeachingModuleFolderService)
  
- [modules/teaching_module/v1/public/uploader.proto](#modules_teaching_module_v1_public_uploader-proto)
    - [CreateTeachingModulePresignedPostUrlRequest](#modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlRequest)
    - [CreateTeachingModulePresignedPostUrlResponse](#modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlResponse)
  
    - [UploaderService](#modules-teaching_module-v1-public-UploaderService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_teaching_module_v1_public_exam-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/exam.proto



<a name="modules-teaching_module-v1-public-CreateExamRequest"></a>

### CreateExamRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| learning_goal_ids | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| exam_type | [modules.teaching_modules.v1.shared.ExamType](#modules-teaching_modules-v1-shared-ExamType) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |
| index_minimum | [float](#float) |  |  |






<a name="modules-teaching_module-v1-public-CreateExamResponse"></a>

### CreateExamResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| exam | [modules.teaching_modules.v1.shared.Exam](#modules-teaching_modules-v1-shared-Exam) |  |  |






<a name="modules-teaching_module-v1-public-DeleteExamRequest"></a>

### DeleteExamRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteExamResponse"></a>

### DeleteExamResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetExamByIdRequest"></a>

### GetExamByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetExamByIdResponse"></a>

### GetExamByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exam | [modules.teaching_modules.v1.shared.Exam](#modules-teaching_modules-v1-shared-Exam) |  |  |






<a name="modules-teaching_module-v1-public-GetExamByTypeRequest"></a>

### GetExamByTypeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exam_type | [modules.teaching_modules.v1.shared.ExamType](#modules-teaching_modules-v1-shared-ExamType) |  |  |
| class_subject_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetExamByTypeResponse"></a>

### GetExamByTypeResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exam | [modules.teaching_modules.v1.shared.Exam](#modules-teaching_modules-v1-shared-Exam) |  |  |






<a name="modules-teaching_module-v1-public-UpdateExamRequest"></a>

### UpdateExamRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) | optional |  |
| learning_goal_ids | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) | optional |  |
| index_minimum | [float](#float) | optional |  |






<a name="modules-teaching_module-v1-public-UpdateExamResponse"></a>

### UpdateExamResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| exam | [modules.teaching_modules.v1.shared.Exam](#modules-teaching_modules-v1-shared-Exam) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-ExamService"></a>

### ExamService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateExam | [CreateExamRequest](#modules-teaching_module-v1-public-CreateExamRequest) | [CreateExamResponse](#modules-teaching_module-v1-public-CreateExamResponse) |  |
| UpdateExam | [UpdateExamRequest](#modules-teaching_module-v1-public-UpdateExamRequest) | [UpdateExamResponse](#modules-teaching_module-v1-public-UpdateExamResponse) |  |
| DeleteExam | [DeleteExamRequest](#modules-teaching_module-v1-public-DeleteExamRequest) | [DeleteExamResponse](#modules-teaching_module-v1-public-DeleteExamResponse) |  |
| GetExamById | [GetExamByIdRequest](#modules-teaching_module-v1-public-GetExamByIdRequest) | [GetExamByIdResponse](#modules-teaching_module-v1-public-GetExamByIdResponse) |  |
| GetExamByType | [GetExamByTypeRequest](#modules-teaching_module-v1-public-GetExamByTypeRequest) | [GetExamByTypeResponse](#modules-teaching_module-v1-public-GetExamByTypeResponse) |  |

 



<a name="modules_teaching_module_v1_public_folder_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/folder_task.proto



<a name="modules-teaching_module-v1-public-DeleteFolderTaskRequest"></a>

### DeleteFolderTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteFolderTaskResponse"></a>

### DeleteFolderTaskResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-SubmitFolderTaskRequest"></a>

### SubmitFolderTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |
| task_type | [string](#string) |  |  |
| task_name | [string](#string) |  |  |
| task_attachment | [string](#string) |  |  |
| student_ids | [string](#string) | repeated |  |
| class_subject_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-SubmitFolderTaskResponse"></a>

### SubmitFolderTaskResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-FolderTaskService"></a>

### FolderTaskService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitFolderTask | [SubmitFolderTaskRequest](#modules-teaching_module-v1-public-SubmitFolderTaskRequest) | [SubmitFolderTaskResponse](#modules-teaching_module-v1-public-SubmitFolderTaskResponse) |  |
| DeleteFolderTask | [DeleteFolderTaskRequest](#modules-teaching_module-v1-public-DeleteFolderTaskRequest) | [DeleteFolderTaskResponse](#modules-teaching_module-v1-public-DeleteFolderTaskResponse) |  |

 



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

 



<a name="modules_teaching_module_v1_public_study_material-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/study_material.proto



<a name="modules-teaching_module-v1-public-CreateStudyMaterialResponse"></a>

### CreateStudyMaterialResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteStudyMaterialRequest"></a>

### DeleteStudyMaterialRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteStudyMaterialResponse"></a>

### DeleteStudyMaterialResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetStudyMaterialByFolderIDRequest"></a>

### GetStudyMaterialByFolderIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetStudyMaterialByFolderIDResponse"></a>

### GetStudyMaterialByFolderIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| study_materials | [modules.teaching_modules.v1.shared.StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial) | repeated |  |






<a name="modules-teaching_module-v1-public-GetStudyMaterialDetailRequest"></a>

### GetStudyMaterialDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetStudyMaterialDetailResponse"></a>

### GetStudyMaterialDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| study_material | [modules.teaching_modules.v1.shared.StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial) |  |  |






<a name="modules-teaching_module-v1-public-UpdateStudyMaterialResponse"></a>

### UpdateStudyMaterialResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-StudyMaterialService"></a>

### StudyMaterialService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateStudyMaterial | [.modules.teaching_modules.v1.shared.StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial) | [CreateStudyMaterialResponse](#modules-teaching_module-v1-public-CreateStudyMaterialResponse) |  |
| GetStudyMaterialByFolderID | [GetStudyMaterialByFolderIDRequest](#modules-teaching_module-v1-public-GetStudyMaterialByFolderIDRequest) | [GetStudyMaterialByFolderIDResponse](#modules-teaching_module-v1-public-GetStudyMaterialByFolderIDResponse) |  |
| GetStudyMaterialDetail | [GetStudyMaterialDetailRequest](#modules-teaching_module-v1-public-GetStudyMaterialDetailRequest) | [GetStudyMaterialDetailResponse](#modules-teaching_module-v1-public-GetStudyMaterialDetailResponse) |  |
| UpdateStudyMaterial | [.modules.teaching_modules.v1.shared.StudyMaterial](#modules-teaching_modules-v1-shared-StudyMaterial) | [UpdateStudyMaterialResponse](#modules-teaching_module-v1-public-UpdateStudyMaterialResponse) |  |
| DeleteStudyMaterial | [DeleteStudyMaterialRequest](#modules-teaching_module-v1-public-DeleteStudyMaterialRequest) | [DeleteStudyMaterialResponse](#modules-teaching_module-v1-public-DeleteStudyMaterialResponse) |  |

 



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






<a name="modules-teaching_module-v1-public-DeleteTeachingModuleRequest"></a>

### DeleteTeachingModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleDetailRequest"></a>

### GetTeachingModuleDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleListRequest"></a>

### GetTeachingModuleListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-TeachingModuleListResponse"></a>

### TeachingModuleListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_modules | [modules.teaching_modules.v1.shared.TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule) | repeated |  |






<a name="modules-teaching_module-v1-public-TeachingModuleRequest"></a>

### TeachingModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module | [modules.teaching_modules.v1.shared.TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule) |  |  |






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
| GetTeachingModuleList | [GetTeachingModuleListRequest](#modules-teaching_module-v1-public-GetTeachingModuleListRequest) | [TeachingModuleListResponse](#modules-teaching_module-v1-public-TeachingModuleListResponse) |  |
| GetTeachingModuleDetail | [GetTeachingModuleDetailRequest](#modules-teaching_module-v1-public-GetTeachingModuleDetailRequest) | [.modules.teaching_modules.v1.shared.TeachingModule](#modules-teaching_modules-v1-shared-TeachingModule) |  |
| ApproveTeachingModule | [ApproveteachingModuleRequest](#modules-teaching_module-v1-public-ApproveteachingModuleRequest) | [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse) |  |
| UpdateTeachingModule | [TeachingModuleRequest](#modules-teaching_module-v1-public-TeachingModuleRequest) | [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse) |  |
| DeleteTeachingModule | [DeleteTeachingModuleRequest](#modules-teaching_module-v1-public-DeleteTeachingModuleRequest) | [TeachingModuleResponse](#modules-teaching_module-v1-public-TeachingModuleResponse) |  |

 



<a name="modules_teaching_module_v1_public_teaching_module_folder-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/teaching_module_folder.proto



<a name="modules-teaching_module-v1-public-CreateTeachingModuleFolderResponse"></a>

### CreateTeachingModuleFolderResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteTeachingModuleFolderRequest"></a>

### DeleteTeachingModuleFolderRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-DeleteTeachingModuleFolderResponse"></a>

### DeleteTeachingModuleFolderResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDRequest"></a>

### GetTeachingModuleFolderDetailByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDResponse"></a>

### GetTeachingModuleFolderDetailByIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| learning_goal_ids | [string](#string) | repeated |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teaching_module_id | [string](#string) |  |  |
| class_group_detail_id | [string](#string) |  |  |
| folder_tasks | [modules.teaching_modules.v1.shared.FolderTask](#modules-teaching_modules-v1-shared-FolderTask) | repeated |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleFolderListRequest"></a>

### GetTeachingModuleFolderListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group_detail_id | [string](#string) |  |  |
| teaching_module_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-public-GetTeachingModuleFolderListResponse"></a>

### GetTeachingModuleFolderListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folders | [modules.teaching_modules.v1.shared.TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder) | repeated |  |






<a name="modules-teaching_module-v1-public-UpdateTeachingModuleFolderResponse"></a>

### UpdateTeachingModuleFolderResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-TeachingModuleFolderService"></a>

### TeachingModuleFolderService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTeachingModuleFolder | [.modules.teaching_modules.v1.shared.TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder) | [CreateTeachingModuleFolderResponse](#modules-teaching_module-v1-public-CreateTeachingModuleFolderResponse) |  |
| UpdateTeachingModuleFolder | [.modules.teaching_modules.v1.shared.TeachingModuleFolder](#modules-teaching_modules-v1-shared-TeachingModuleFolder) | [UpdateTeachingModuleFolderResponse](#modules-teaching_module-v1-public-UpdateTeachingModuleFolderResponse) |  |
| GetTeachingModuleFolderList | [GetTeachingModuleFolderListRequest](#modules-teaching_module-v1-public-GetTeachingModuleFolderListRequest) | [GetTeachingModuleFolderListResponse](#modules-teaching_module-v1-public-GetTeachingModuleFolderListResponse) |  |
| GetTeachingModuleDetailByID | [GetTeachingModuleFolderDetailByIDRequest](#modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDRequest) | [GetTeachingModuleFolderDetailByIDResponse](#modules-teaching_module-v1-public-GetTeachingModuleFolderDetailByIDResponse) |  |
| DeleteTeachingModuleFolder | [DeleteTeachingModuleFolderRequest](#modules-teaching_module-v1-public-DeleteTeachingModuleFolderRequest) | [DeleteTeachingModuleFolderResponse](#modules-teaching_module-v1-public-DeleteTeachingModuleFolderResponse) |  |

 



<a name="modules_teaching_module_v1_public_uploader-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/public/uploader.proto



<a name="modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlRequest"></a>

### CreateTeachingModulePresignedPostUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [modules.teaching_modules.v1.shared.Uploader](#modules-teaching_modules-v1-shared-Uploader) |  |  |






<a name="modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlResponse"></a>

### CreateTeachingModulePresignedPostUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| presignedUrls | [common.v1.S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse) |  |  |





 

 

 


<a name="modules-teaching_module-v1-public-UploaderService"></a>

### UploaderService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTeachingModulePresignedPostUrl | [CreateTeachingModulePresignedPostUrlRequest](#modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlRequest) | [CreateTeachingModulePresignedPostUrlResponse](#modules-teaching_module-v1-public-CreateTeachingModulePresignedPostUrlResponse) |  |

 



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

