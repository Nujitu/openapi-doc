# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/material/v1/public/class_group.proto](#modules_material_v1_public_class_group-proto)
    - [AddStudentToClassRequest](#modules-material-v1-public-AddStudentToClassRequest)
    - [AddStudentToClassResponse](#modules-material-v1-public-AddStudentToClassResponse)
    - [CreateClassGroupRequest](#modules-material-v1-public-CreateClassGroupRequest)
    - [DeleteClassGroupRequest](#modules-material-v1-public-DeleteClassGroupRequest)
    - [DeleteClassSubjectRequest](#modules-material-v1-public-DeleteClassSubjectRequest)
    - [DeleteClassSubjectResponse](#modules-material-v1-public-DeleteClassSubjectResponse)
    - [DeleteClassgroupResponse](#modules-material-v1-public-DeleteClassgroupResponse)
    - [GetClassGroupDetailRequest](#modules-material-v1-public-GetClassGroupDetailRequest)
    - [GetClassGroupDetailResponse](#modules-material-v1-public-GetClassGroupDetailResponse)
    - [GetClassGroupListRequest](#modules-material-v1-public-GetClassGroupListRequest)
    - [GetClassGroupListResponse](#modules-material-v1-public-GetClassGroupListResponse)
    - [GetClassSubjectDetailsRequest](#modules-material-v1-public-GetClassSubjectDetailsRequest)
    - [GetClassSubjectDetailsResponse](#modules-material-v1-public-GetClassSubjectDetailsResponse)
    - [GetStudentClassesRequest](#modules-material-v1-public-GetStudentClassesRequest)
    - [GetStudentClassesResponse](#modules-material-v1-public-GetStudentClassesResponse)
    - [GetStudentCoursesRequest](#modules-material-v1-public-GetStudentCoursesRequest)
    - [GetStudentCoursesResponse](#modules-material-v1-public-GetStudentCoursesResponse)
    - [GetStudentsInClassRequest](#modules-material-v1-public-GetStudentsInClassRequest)
    - [GetStudentsInClassResponse](#modules-material-v1-public-GetStudentsInClassResponse)
    - [GetTeacherActiveSubjectsRequest](#modules-material-v1-public-GetTeacherActiveSubjectsRequest)
    - [GetTeacherActiveSubjectsResponse](#modules-material-v1-public-GetTeacherActiveSubjectsResponse)
    - [GetTeacherClassesRequest](#modules-material-v1-public-GetTeacherClassesRequest)
    - [GetTeacherClassesResponse](#modules-material-v1-public-GetTeacherClassesResponse)
    - [GetTeacherCoursesStatsRequest](#modules-material-v1-public-GetTeacherCoursesStatsRequest)
    - [GetTeacherCoursesStatsResponse](#modules-material-v1-public-GetTeacherCoursesStatsResponse)
    - [GetTeacherCoursesStatsResponse.Stats](#modules-material-v1-public-GetTeacherCoursesStatsResponse-Stats)
    - [RemoveStudentFromClassRequest](#modules-material-v1-public-RemoveStudentFromClassRequest)
    - [RemoveStudentFromClassResponse](#modules-material-v1-public-RemoveStudentFromClassResponse)
    - [StudentClass](#modules-material-v1-public-StudentClass)
    - [StudentDetailResponse](#modules-material-v1-public-StudentDetailResponse)
    - [UpdateClassGroupRequest](#modules-material-v1-public-UpdateClassGroupRequest)
    - [UpdateClassGroupResponse](#modules-material-v1-public-UpdateClassGroupResponse)
  
    - [ClassGroupService](#modules-material-v1-public-ClassGroupService)
  
- [modules/material/v1/public/class_subject.proto](#modules_material_v1_public_class_subject-proto)
    - [ClassSubjectService](#modules-material-v1-public-ClassSubjectService)
  
- [modules/material/v1/public/curriculum.proto](#modules_material_v1_public_curriculum-proto)
    - [CreateCurriculumRequest](#modules-material-v1-public-CreateCurriculumRequest)
    - [DeleteCurriculumRequest](#modules-material-v1-public-DeleteCurriculumRequest)
    - [DeleteCurriculumResponse](#modules-material-v1-public-DeleteCurriculumResponse)
    - [GetActiveCurriculumRequest](#modules-material-v1-public-GetActiveCurriculumRequest)
    - [GetActiveCurriculumResponse](#modules-material-v1-public-GetActiveCurriculumResponse)
    - [GetCurriculumListRequest](#modules-material-v1-public-GetCurriculumListRequest)
    - [GetCurriculumListResponse](#modules-material-v1-public-GetCurriculumListResponse)
    - [SetActiveCurriculumRequest](#modules-material-v1-public-SetActiveCurriculumRequest)
    - [SetActiveCurriculumResponse](#modules-material-v1-public-SetActiveCurriculumResponse)
    - [UpdateCurriculumRequest](#modules-material-v1-public-UpdateCurriculumRequest)
    - [UpdateCurriculumResponse](#modules-material-v1-public-UpdateCurriculumResponse)
  
    - [CurriculumService](#modules-material-v1-public-CurriculumService)
  
- [modules/material/v1/public/curriculum_group_component.proto](#modules_material_v1_public_curriculum_group_component-proto)
    - [CreateCurriculumGroupComponentRequest](#modules-material-v1-public-CreateCurriculumGroupComponentRequest)
    - [CurriculumGroupComponentResponse](#modules-material-v1-public-CurriculumGroupComponentResponse)
    - [DeleteCurriculumGroupComponentRequest](#modules-material-v1-public-DeleteCurriculumGroupComponentRequest)
    - [GetCurriculumGroupComponentDetailByHeaderRequest](#modules-material-v1-public-GetCurriculumGroupComponentDetailByHeaderRequest)
    - [GetCurriculumGroupComponentDetailRequest](#modules-material-v1-public-GetCurriculumGroupComponentDetailRequest)
    - [GetCurriculumGroupComponentResponse](#modules-material-v1-public-GetCurriculumGroupComponentResponse)
    - [UpdateCurriculumGroupComponentRequest](#modules-material-v1-public-UpdateCurriculumGroupComponentRequest)
  
    - [CurriculumGroupComponentService](#modules-material-v1-public-CurriculumGroupComponentService)
  
- [modules/material/v1/public/header_component.proto](#modules_material_v1_public_header_component-proto)
    - [CreateHeaderComponentRequest](#modules-material-v1-public-CreateHeaderComponentRequest)
    - [DeleteHeaderComponentRequest](#modules-material-v1-public-DeleteHeaderComponentRequest)
    - [GetHeaderComponentByCurriculumIDRequest](#modules-material-v1-public-GetHeaderComponentByCurriculumIDRequest)
    - [GetHeaderComponentDetailRequest](#modules-material-v1-public-GetHeaderComponentDetailRequest)
    - [GetHeaderComponentResponse](#modules-material-v1-public-GetHeaderComponentResponse)
    - [HeaderComponentResponse](#modules-material-v1-public-HeaderComponentResponse)
    - [UpdateHeaderComponentRequest](#modules-material-v1-public-UpdateHeaderComponentRequest)
  
    - [HeaderComponentService](#modules-material-v1-public-HeaderComponentService)
  
- [modules/material/v1/public/major.proto](#modules_material_v1_public_major-proto)
    - [CreateMajorRequest](#modules-material-v1-public-CreateMajorRequest)
    - [CreateMajorResponse](#modules-material-v1-public-CreateMajorResponse)
    - [DeleteMajorRequest](#modules-material-v1-public-DeleteMajorRequest)
    - [DeleteMajorResponse](#modules-material-v1-public-DeleteMajorResponse)
    - [GetMajorByIDRequest](#modules-material-v1-public-GetMajorByIDRequest)
    - [GetMajorByIDResponse](#modules-material-v1-public-GetMajorByIDResponse)
    - [ListMajorRequest](#modules-material-v1-public-ListMajorRequest)
    - [ListMajorResponse](#modules-material-v1-public-ListMajorResponse)
  
    - [MajorService](#modules-material-v1-public-MajorService)
  
- [modules/material/v1/public/subject.proto](#modules_material_v1_public_subject-proto)
    - [CreateSubjectRequest](#modules-material-v1-public-CreateSubjectRequest)
    - [GetSubjectByIDRequest](#modules-material-v1-public-GetSubjectByIDRequest)
    - [GetSubjectListRequest](#modules-material-v1-public-GetSubjectListRequest)
    - [GetSubjectListResponse](#modules-material-v1-public-GetSubjectListResponse)
    - [SubjectListResponse](#modules-material-v1-public-SubjectListResponse)
    - [UpdateSubjectRequest](#modules-material-v1-public-UpdateSubjectRequest)
  
    - [SubjectService](#modules-material-v1-public-SubjectService)
  
- [modules/material/v1/public/teaching_tools.proto](#modules_material_v1_public_teaching_tools-proto)
    - [CreateTeachingToolDocumentPresignedPostUrlRequest](#modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlRequest)
    - [CreateTeachingToolDocumentPresignedPostUrlResponse](#modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlResponse)
    - [CreateTeachingToolDocumentRequest](#modules-material-v1-public-CreateTeachingToolDocumentRequest)
    - [CreateTeachingToolDocumentResponse](#modules-material-v1-public-CreateTeachingToolDocumentResponse)
    - [CreateTeachingToolsRequest](#modules-material-v1-public-CreateTeachingToolsRequest)
    - [CreateTeachingToolsResponse](#modules-material-v1-public-CreateTeachingToolsResponse)
    - [DeleteTeachingToolDocumentRequest](#modules-material-v1-public-DeleteTeachingToolDocumentRequest)
    - [DeleteTeachingToolDocumentResponse](#modules-material-v1-public-DeleteTeachingToolDocumentResponse)
    - [DeleteTeachingToolsRequest](#modules-material-v1-public-DeleteTeachingToolsRequest)
    - [DeleteTeachingToolsResponse](#modules-material-v1-public-DeleteTeachingToolsResponse)
    - [GetTeachingToolDocumentByIdRequest](#modules-material-v1-public-GetTeachingToolDocumentByIdRequest)
    - [GetTeachingToolDocumentByIdResponse](#modules-material-v1-public-GetTeachingToolDocumentByIdResponse)
    - [GetTeachingToolsByCurriculumIdRequest](#modules-material-v1-public-GetTeachingToolsByCurriculumIdRequest)
    - [GetTeachingToolsByCurriculumIdResponse](#modules-material-v1-public-GetTeachingToolsByCurriculumIdResponse)
    - [GetTeachingToolsByIdRequest](#modules-material-v1-public-GetTeachingToolsByIdRequest)
    - [GetTeachingToolsByIdResponse](#modules-material-v1-public-GetTeachingToolsByIdResponse)
    - [ListTeachingToolDocumentRequest](#modules-material-v1-public-ListTeachingToolDocumentRequest)
    - [ListTeachingToolDocumentResponse](#modules-material-v1-public-ListTeachingToolDocumentResponse)
    - [UpdateTeachingToolDocumentRequest](#modules-material-v1-public-UpdateTeachingToolDocumentRequest)
    - [UpdateTeachingToolDocumentResponse](#modules-material-v1-public-UpdateTeachingToolDocumentResponse)
    - [UpdateTeachingToolsRequest](#modules-material-v1-public-UpdateTeachingToolsRequest)
    - [UpdateTeachingToolsResponse](#modules-material-v1-public-UpdateTeachingToolsResponse)
  
    - [TeachingToolsService](#modules-material-v1-public-TeachingToolsService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_material_v1_public_class_group-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/class_group.proto



<a name="modules-material-v1-public-AddStudentToClassRequest"></a>

### AddStudentToClassRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| students | [StudentClass](#modules-material-v1-public-StudentClass) | repeated |  |






<a name="modules-material-v1-public-AddStudentToClassResponse"></a>

### AddStudentToClassResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-CreateClassGroupRequest"></a>

### CreateClassGroupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| group_subject_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| type | [modules.material.v1.shared.ClassGroupType](#modules-material-v1-shared-ClassGroupType) |  |  |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetailPayload](#modules-material-v1-shared-ClassSubjectDetailPayload) | repeated |  |






<a name="modules-material-v1-public-DeleteClassGroupRequest"></a>

### DeleteClassGroupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteClassSubjectRequest"></a>

### DeleteClassSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteClassSubjectResponse"></a>

### DeleteClassSubjectResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteClassgroupResponse"></a>

### DeleteClassgroupResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-GetClassGroupDetailRequest"></a>

### GetClassGroupDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetClassGroupDetailResponse"></a>

### GetClassGroupDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |  |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail) | repeated |  |






<a name="modules-material-v1-public-GetClassGroupListRequest"></a>

### GetClassGroupListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| academic_term | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetClassGroupListResponse"></a>

### GetClassGroupListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-GetClassSubjectDetailsRequest"></a>

### GetClassSubjectDetailsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetClassSubjectDetailsResponse"></a>

### GetClassSubjectDetailsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail) |  |  |






<a name="modules-material-v1-public-GetStudentClassesRequest"></a>

### GetStudentClassesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetStudentClassesResponse"></a>

### GetStudentClassesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |






<a name="modules-material-v1-public-GetStudentCoursesRequest"></a>

### GetStudentCoursesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetStudentCoursesResponse"></a>

### GetStudentCoursesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courses | [modules.material.v1.shared.StudentCourse](#modules-material-v1-shared-StudentCourse) | repeated |  |






<a name="modules-material-v1-public-GetStudentsInClassRequest"></a>

### GetStudentsInClassRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetStudentsInClassResponse"></a>

### GetStudentsInClassResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| students | [StudentDetailResponse](#modules-material-v1-public-StudentDetailResponse) | repeated |  |






<a name="modules-material-v1-public-GetTeacherActiveSubjectsRequest"></a>

### GetTeacherActiveSubjectsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeacherActiveSubjectsResponse"></a>

### GetTeacherActiveSubjectsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| courses | [modules.material.v1.shared.TeacherClassCourses](#modules-material-v1-shared-TeacherClassCourses) | repeated |  |






<a name="modules-material-v1-public-GetTeacherClassesRequest"></a>

### GetTeacherClassesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeacherClassesResponse"></a>

### GetTeacherClassesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) | repeated |  |






<a name="modules-material-v1-public-GetTeacherCoursesStatsRequest"></a>

### GetTeacherCoursesStatsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teacher_id | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetTeacherCoursesStatsResponse"></a>

### GetTeacherCoursesStatsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GetTeacherCoursesStatsResponse.Stats](#modules-material-v1-public-GetTeacherCoursesStatsResponse-Stats) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-GetTeacherCoursesStatsResponse-Stats"></a>

### GetTeacherCoursesStatsResponse.Stats



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| subject | [string](#string) |  |  |
| class_name | [string](#string) |  |  |
| teaching_module | [string](#string) |  |  |
| due_date | [string](#string) |  |  |
| total_assigned | [string](#string) |  |  |
| total_completed | [string](#string) |  |  |
| total_graded | [string](#string) |  |  |






<a name="modules-material-v1-public-RemoveStudentFromClassRequest"></a>

### RemoveStudentFromClassRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |






<a name="modules-material-v1-public-RemoveStudentFromClassResponse"></a>

### RemoveStudentFromClassResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-StudentClass"></a>

### StudentClass



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |






<a name="modules-material-v1-public-StudentDetailResponse"></a>

### StudentDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| instance_name | [string](#string) |  |  |
| status | [modules.user.v1.shared.StudentStatus](#modules-user-v1-shared-StudentStatus) |  |  |
| student_name | [string](#string) |  |  |
| username | [string](#string) |  |  |
| phone_number | [string](#string) |  |  |
| email | [string](#string) |  |  |
| profile_pic | [string](#string) |  |  |
| address | [modules.user.v1.shared.Address](#modules-user-v1-shared-Address) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-material-v1-public-UpdateClassGroupRequest"></a>

### UpdateClassGroupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) |  |  |
| curriculum_id | [string](#string) |  |  |
| homeroom_teacher | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| type | [modules.material.v1.shared.ClassGroupType](#modules-material-v1-shared-ClassGroupType) |  |  |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetailPayload](#modules-material-v1-shared-ClassSubjectDetailPayload) | repeated |  |






<a name="modules-material-v1-public-UpdateClassGroupResponse"></a>

### UpdateClassGroupResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group | [modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |  |
| class_subjects | [modules.material.v1.shared.ClassSubjectDetail](#modules-material-v1-shared-ClassSubjectDetail) | repeated |  |





 

 

 


<a name="modules-material-v1-public-ClassGroupService"></a>

### ClassGroupService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateClassGroup | [CreateClassGroupRequest](#modules-material-v1-public-CreateClassGroupRequest) | [.modules.material.v1.shared.ClassGroup](#modules-material-v1-shared-ClassGroup) |  |
| GetClassGroupDetail | [GetClassGroupDetailRequest](#modules-material-v1-public-GetClassGroupDetailRequest) | [GetClassGroupDetailResponse](#modules-material-v1-public-GetClassGroupDetailResponse) |  |
| UpdateClassGroup | [UpdateClassGroupRequest](#modules-material-v1-public-UpdateClassGroupRequest) | [UpdateClassGroupResponse](#modules-material-v1-public-UpdateClassGroupResponse) |  |
| GetClassGroupList | [GetClassGroupListRequest](#modules-material-v1-public-GetClassGroupListRequest) | [GetClassGroupListResponse](#modules-material-v1-public-GetClassGroupListResponse) |  |
| AddStudentToClass | [AddStudentToClassRequest](#modules-material-v1-public-AddStudentToClassRequest) | [AddStudentToClassResponse](#modules-material-v1-public-AddStudentToClassResponse) |  |
| RemoveStudentFromClass | [RemoveStudentFromClassRequest](#modules-material-v1-public-RemoveStudentFromClassRequest) | [RemoveStudentFromClassResponse](#modules-material-v1-public-RemoveStudentFromClassResponse) |  |
| GetStudentClasses | [GetStudentClassesRequest](#modules-material-v1-public-GetStudentClassesRequest) | [GetStudentClassesResponse](#modules-material-v1-public-GetStudentClassesResponse) |  |
| GetTeacherClasses | [GetTeacherClassesRequest](#modules-material-v1-public-GetTeacherClassesRequest) | [GetTeacherClassesResponse](#modules-material-v1-public-GetTeacherClassesResponse) |  |
| GetStudentsInClass | [GetStudentsInClassRequest](#modules-material-v1-public-GetStudentsInClassRequest) | [GetStudentsInClassResponse](#modules-material-v1-public-GetStudentsInClassResponse) |  |
| GetTeacherCourses | [GetTeacherActiveSubjectsRequest](#modules-material-v1-public-GetTeacherActiveSubjectsRequest) | [GetTeacherActiveSubjectsResponse](#modules-material-v1-public-GetTeacherActiveSubjectsResponse) |  |
| GetTeacherCoursesStats | [GetTeacherCoursesStatsRequest](#modules-material-v1-public-GetTeacherCoursesStatsRequest) | [GetTeacherCoursesStatsResponse](#modules-material-v1-public-GetTeacherCoursesStatsResponse) |  |
| GetStudentCourses | [GetStudentCoursesRequest](#modules-material-v1-public-GetStudentCoursesRequest) | [GetStudentCoursesResponse](#modules-material-v1-public-GetStudentCoursesResponse) |  |
| GetClassSubjectDetails | [GetClassSubjectDetailsRequest](#modules-material-v1-public-GetClassSubjectDetailsRequest) | [GetClassSubjectDetailsResponse](#modules-material-v1-public-GetClassSubjectDetailsResponse) |  |
| DeleteClassGroup | [DeleteClassGroupRequest](#modules-material-v1-public-DeleteClassGroupRequest) | [DeleteClassgroupResponse](#modules-material-v1-public-DeleteClassgroupResponse) |  |
| DeleteClassSubject | [DeleteClassSubjectRequest](#modules-material-v1-public-DeleteClassSubjectRequest) | [DeleteClassSubjectResponse](#modules-material-v1-public-DeleteClassSubjectResponse) |  |

 



<a name="modules_material_v1_public_class_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/class_subject.proto


 

 

 


<a name="modules-material-v1-public-ClassSubjectService"></a>

### ClassSubjectService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateClassSubjectDetail | [.modules.material.v1.shared.UpdateClassSubjectDetailRequest](#modules-material-v1-shared-UpdateClassSubjectDetailRequest) | [.modules.material.v1.shared.UpdateClassSubjectDetailResponse](#modules-material-v1-shared-UpdateClassSubjectDetailResponse) |  |
| CreateClassSubjectAnnouncement | [.modules.material.v1.shared.CreateClassSubjectAnnouncementRequest](#modules-material-v1-shared-CreateClassSubjectAnnouncementRequest) | [.modules.material.v1.shared.CreateClassSubjectAnnouncementResponse](#modules-material-v1-shared-CreateClassSubjectAnnouncementResponse) |  |
| DeleteClassSubjectAnnouncementByClassSubjectId | [.modules.material.v1.shared.DeleteClassSubjectAnnouncementByClassSubjectIdRequest](#modules-material-v1-shared-DeleteClassSubjectAnnouncementByClassSubjectIdRequest) | [.modules.material.v1.shared.DeleteClassSubjectAnnouncementResponse](#modules-material-v1-shared-DeleteClassSubjectAnnouncementResponse) |  |
| DeleteClassSubjectAnnouncementById | [.modules.material.v1.shared.DeleteClassSubjectAnnouncementByIdRequest](#modules-material-v1-shared-DeleteClassSubjectAnnouncementByIdRequest) | [.modules.material.v1.shared.DeleteClassSubjectAnnouncementResponse](#modules-material-v1-shared-DeleteClassSubjectAnnouncementResponse) |  |
| GetClassSubjectAnnouncement | [.modules.material.v1.shared.GetClassSubjectAnnouncementRequest](#modules-material-v1-shared-GetClassSubjectAnnouncementRequest) | [.modules.material.v1.shared.GetClassSubjectAnnouncementResponse](#modules-material-v1-shared-GetClassSubjectAnnouncementResponse) |  |

 



<a name="modules_material_v1_public_curriculum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/curriculum.proto



<a name="modules-material-v1-public-CreateCurriculumRequest"></a>

### CreateCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |  |






<a name="modules-material-v1-public-DeleteCurriculumRequest"></a>

### DeleteCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteCurriculumResponse"></a>

### DeleteCurriculumResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-GetActiveCurriculumRequest"></a>

### GetActiveCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instance_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetActiveCurriculumResponse"></a>

### GetActiveCurriculumResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |  |






<a name="modules-material-v1-public-GetCurriculumListRequest"></a>

### GetCurriculumListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetCurriculumListResponse"></a>

### GetCurriculumListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculums | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-SetActiveCurriculumRequest"></a>

### SetActiveCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-SetActiveCurriculumResponse"></a>

### SetActiveCurriculumResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-UpdateCurriculumRequest"></a>

### UpdateCurriculumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| curriculum | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |  |






<a name="modules-material-v1-public-UpdateCurriculumResponse"></a>

### UpdateCurriculumResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum | [modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |  |





 

 

 


<a name="modules-material-v1-public-CurriculumService"></a>

### CurriculumService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateCurriculum | [CreateCurriculumRequest](#modules-material-v1-public-CreateCurriculumRequest) | [.modules.material.v1.shared.Curriculum](#modules-material-v1-shared-Curriculum) |  |
| GetCurriculumList | [GetCurriculumListRequest](#modules-material-v1-public-GetCurriculumListRequest) | [GetCurriculumListResponse](#modules-material-v1-public-GetCurriculumListResponse) |  |
| DeleteCurriculum | [DeleteCurriculumRequest](#modules-material-v1-public-DeleteCurriculumRequest) | [DeleteCurriculumResponse](#modules-material-v1-public-DeleteCurriculumResponse) |  |
| UpdateCurriculum | [UpdateCurriculumRequest](#modules-material-v1-public-UpdateCurriculumRequest) | [UpdateCurriculumResponse](#modules-material-v1-public-UpdateCurriculumResponse) |  |
| SetActiveCurriculum | [SetActiveCurriculumRequest](#modules-material-v1-public-SetActiveCurriculumRequest) | [SetActiveCurriculumResponse](#modules-material-v1-public-SetActiveCurriculumResponse) |  |
| GetActiveCurriculum | [GetActiveCurriculumRequest](#modules-material-v1-public-GetActiveCurriculumRequest) | [GetActiveCurriculumResponse](#modules-material-v1-public-GetActiveCurriculumResponse) |  |

 



<a name="modules_material_v1_public_curriculum_group_component-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/curriculum_group_component.proto



<a name="modules-material-v1-public-CreateCurriculumGroupComponentRequest"></a>

### CreateCurriculumGroupComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_group_component | [modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) |  |  |






<a name="modules-material-v1-public-CurriculumGroupComponentResponse"></a>

### CurriculumGroupComponentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteCurriculumGroupComponentRequest"></a>

### DeleteCurriculumGroupComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetCurriculumGroupComponentDetailByHeaderRequest"></a>

### GetCurriculumGroupComponentDetailByHeaderRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetCurriculumGroupComponentDetailRequest"></a>

### GetCurriculumGroupComponentDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetCurriculumGroupComponentResponse"></a>

### GetCurriculumGroupComponentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| components | [modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) | repeated |  |






<a name="modules-material-v1-public-UpdateCurriculumGroupComponentRequest"></a>

### UpdateCurriculumGroupComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_group_component | [modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) |  |  |





 

 

 


<a name="modules-material-v1-public-CurriculumGroupComponentService"></a>

### CurriculumGroupComponentService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateCurriculumGroupComponent | [CreateCurriculumGroupComponentRequest](#modules-material-v1-public-CreateCurriculumGroupComponentRequest) | [.modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) |  |
| UpdateCurriculumGroupComponent | [UpdateCurriculumGroupComponentRequest](#modules-material-v1-public-UpdateCurriculumGroupComponentRequest) | [.modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) |  |
| DeleteCurriculumGroupComponent | [DeleteCurriculumGroupComponentRequest](#modules-material-v1-public-DeleteCurriculumGroupComponentRequest) | [CurriculumGroupComponentResponse](#modules-material-v1-public-CurriculumGroupComponentResponse) |  |
| GetCurriculumGroupComponentDetail | [GetCurriculumGroupComponentDetailRequest](#modules-material-v1-public-GetCurriculumGroupComponentDetailRequest) | [.modules.material.v1.shared.CurriculumGroupComponent](#modules-material-v1-shared-CurriculumGroupComponent) |  |
| GetCurriculumGroupComponentByHeader | [GetCurriculumGroupComponentDetailByHeaderRequest](#modules-material-v1-public-GetCurriculumGroupComponentDetailByHeaderRequest) | [GetCurriculumGroupComponentResponse](#modules-material-v1-public-GetCurriculumGroupComponentResponse) |  |

 



<a name="modules_material_v1_public_header_component-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/header_component.proto



<a name="modules-material-v1-public-CreateHeaderComponentRequest"></a>

### CreateHeaderComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_component | [modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) |  |  |






<a name="modules-material-v1-public-DeleteHeaderComponentRequest"></a>

### DeleteHeaderComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetHeaderComponentByCurriculumIDRequest"></a>

### GetHeaderComponentByCurriculumIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetHeaderComponentDetailRequest"></a>

### GetHeaderComponentDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetHeaderComponentResponse"></a>

### GetHeaderComponentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_components | [modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) | repeated |  |






<a name="modules-material-v1-public-HeaderComponentResponse"></a>

### HeaderComponentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-UpdateHeaderComponentRequest"></a>

### UpdateHeaderComponentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header_component | [modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) |  |  |





 

 

 


<a name="modules-material-v1-public-HeaderComponentService"></a>

### HeaderComponentService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateHeaderComponent | [CreateHeaderComponentRequest](#modules-material-v1-public-CreateHeaderComponentRequest) | [.modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) |  |
| UpdateHeaderComponent | [UpdateHeaderComponentRequest](#modules-material-v1-public-UpdateHeaderComponentRequest) | [.modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) |  |
| DeleteHeaderComponent | [DeleteHeaderComponentRequest](#modules-material-v1-public-DeleteHeaderComponentRequest) | [HeaderComponentResponse](#modules-material-v1-public-HeaderComponentResponse) |  |
| GetHeaderComponentDetail | [GetHeaderComponentDetailRequest](#modules-material-v1-public-GetHeaderComponentDetailRequest) | [.modules.material.v1.shared.HeaderComponent](#modules-material-v1-shared-HeaderComponent) |  |
| GetHeaderComponentByCurriculumID | [GetHeaderComponentByCurriculumIDRequest](#modules-material-v1-public-GetHeaderComponentByCurriculumIDRequest) | [GetHeaderComponentResponse](#modules-material-v1-public-GetHeaderComponentResponse) |  |

 



<a name="modules_material_v1_public_major-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/major.proto



<a name="modules-material-v1-public-CreateMajorRequest"></a>

### CreateMajorRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |






<a name="modules-material-v1-public-CreateMajorResponse"></a>

### CreateMajorResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| major | [modules.material.v1.shared.Major](#modules-material-v1-shared-Major) |  |  |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteMajorRequest"></a>

### DeleteMajorRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteMajorResponse"></a>

### DeleteMajorResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-GetMajorByIDRequest"></a>

### GetMajorByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetMajorByIDResponse"></a>

### GetMajorByIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| major | [modules.material.v1.shared.Major](#modules-material-v1-shared-Major) |  |  |






<a name="modules-material-v1-public-ListMajorRequest"></a>

### ListMajorRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instance_id | [string](#string) |  |  |






<a name="modules-material-v1-public-ListMajorResponse"></a>

### ListMajorResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| majors | [modules.material.v1.shared.Major](#modules-material-v1-shared-Major) | repeated |  |





 

 

 


<a name="modules-material-v1-public-MajorService"></a>

### MajorService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateMajor | [CreateMajorRequest](#modules-material-v1-public-CreateMajorRequest) | [CreateMajorResponse](#modules-material-v1-public-CreateMajorResponse) |  |
| GetMajorByID | [GetMajorByIDRequest](#modules-material-v1-public-GetMajorByIDRequest) | [GetMajorByIDResponse](#modules-material-v1-public-GetMajorByIDResponse) |  |
| DeleteMajor | [DeleteMajorRequest](#modules-material-v1-public-DeleteMajorRequest) | [DeleteMajorResponse](#modules-material-v1-public-DeleteMajorResponse) |  |
| ListMajor | [ListMajorRequest](#modules-material-v1-public-ListMajorRequest) | [ListMajorResponse](#modules-material-v1-public-ListMajorResponse) |  |

 



<a name="modules_material_v1_public_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/subject.proto



<a name="modules-material-v1-public-CreateSubjectRequest"></a>

### CreateSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| description | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetSubjectByIDRequest"></a>

### GetSubjectByIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetSubjectListRequest"></a>

### GetSubjectListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) |  |  |
| grade_level | [string](#string) |  |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) |  |  |
| subject_code | [string](#string) |  |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) |  |  |
| index_minimum | [uint32](#uint32) |  |  |
| meetings_per_week | [uint32](#uint32) |  |  |
| lesson_hours_per_week | [uint32](#uint32) |  |  |
| lesson_minutes | [uint32](#uint32) |  |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-GetSubjectListResponse"></a>

### GetSubjectListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |
| meta | [common.v1.ResponseMetadata](#common-v1-ResponseMetadata) |  | Contains offset pagination |






<a name="modules-material-v1-public-SubjectListResponse"></a>

### SubjectListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subjects | [modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) | repeated |  |






<a name="modules-material-v1-public-UpdateSubjectRequest"></a>

### UpdateSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| teacher_id | [string](#string) | optional |  |
| grade_level | [string](#string) | optional |  |
| major | [string](#string) | repeated |  |
| name | [string](#string) | optional |  |
| subject_code | [string](#string) | optional |  |
| subject_type | [modules.material.v1.shared.SubjectType](#modules-material-v1-shared-SubjectType) | optional |  |
| description | [string](#string) | optional |  |





 

 

 


<a name="modules-material-v1-public-SubjectService"></a>

### SubjectService
Service for user related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSubject | [CreateSubjectRequest](#modules-material-v1-public-CreateSubjectRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| UpdateSubject | [UpdateSubjectRequest](#modules-material-v1-public-UpdateSubjectRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| GetSubjectByID | [GetSubjectByIDRequest](#modules-material-v1-public-GetSubjectByIDRequest) | [.modules.material.v1.shared.Subject](#modules-material-v1-shared-Subject) |  |
| GetSubjectList | [GetSubjectListRequest](#modules-material-v1-public-GetSubjectListRequest) | [GetSubjectListResponse](#modules-material-v1-public-GetSubjectListResponse) |  |

 



<a name="modules_material_v1_public_teaching_tools-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/material/v1/public/teaching_tools.proto



<a name="modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlRequest"></a>

### CreateTeachingToolDocumentPresignedPostUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [common.v1.S3PresignedUrlRequest](#common-v1-S3PresignedUrlRequest) | repeated |  |






<a name="modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlResponse"></a>

### CreateTeachingToolDocumentPresignedPostUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| presignedUrls | [common.v1.S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse) | repeated |  |






<a name="modules-material-v1-public-CreateTeachingToolDocumentRequest"></a>

### CreateTeachingToolDocumentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| teaching_tools_id | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |
| subject_id | [string](#string) |  |  |
| major_name | [string](#string) |  |  |
| grade_level | [uint32](#uint32) |  |  |
| attachment_files | [common.v1.NullableAttachmentFile](#common-v1-NullableAttachmentFile) | repeated |  |






<a name="modules-material-v1-public-CreateTeachingToolDocumentResponse"></a>

### CreateTeachingToolDocumentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_document | [modules.material.v1.shared.TeachingToolDocument](#modules-material-v1-shared-TeachingToolDocument) |  |  |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-CreateTeachingToolsRequest"></a>

### CreateTeachingToolsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| components | [modules.material.v1.shared.TeachingToolComponent](#modules-material-v1-shared-TeachingToolComponent) | repeated |  |






<a name="modules-material-v1-public-CreateTeachingToolsResponse"></a>

### CreateTeachingToolsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools | [modules.material.v1.shared.TeachingTools](#modules-material-v1-shared-TeachingTools) |  |  |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteTeachingToolDocumentRequest"></a>

### DeleteTeachingToolDocumentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_document_id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteTeachingToolDocumentResponse"></a>

### DeleteTeachingToolDocumentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteTeachingToolsRequest"></a>

### DeleteTeachingToolsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools_id | [string](#string) |  |  |






<a name="modules-material-v1-public-DeleteTeachingToolsResponse"></a>

### DeleteTeachingToolsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeachingToolDocumentByIdRequest"></a>

### GetTeachingToolDocumentByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_document_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeachingToolDocumentByIdResponse"></a>

### GetTeachingToolDocumentByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_document | [modules.material.v1.shared.TeachingToolDocument](#modules-material-v1-shared-TeachingToolDocument) |  |  |






<a name="modules-material-v1-public-GetTeachingToolsByCurriculumIdRequest"></a>

### GetTeachingToolsByCurriculumIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeachingToolsByCurriculumIdResponse"></a>

### GetTeachingToolsByCurriculumIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools | [modules.material.v1.shared.TeachingTools](#modules-material-v1-shared-TeachingTools) |  |  |






<a name="modules-material-v1-public-GetTeachingToolsByIdRequest"></a>

### GetTeachingToolsByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools_id | [string](#string) |  |  |






<a name="modules-material-v1-public-GetTeachingToolsByIdResponse"></a>

### GetTeachingToolsByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools | [modules.material.v1.shared.TeachingTools](#modules-material-v1-shared-TeachingTools) |  |  |






<a name="modules-material-v1-public-ListTeachingToolDocumentRequest"></a>

### ListTeachingToolDocumentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| curriculum_id | [string](#string) | optional |  |
| teaching_tools_id | [string](#string) | optional |  |
| teacher_user_id | [string](#string) | optional |  |
| subject_id | [string](#string) | optional |  |
| major_name | [string](#string) | optional |  |
| grade_level | [uint32](#uint32) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-material-v1-public-ListTeachingToolDocumentResponse"></a>

### ListTeachingToolDocumentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_documents | [modules.material.v1.shared.ListTeachingToolDocument](#modules-material-v1-shared-ListTeachingToolDocument) | repeated |  |






<a name="modules-material-v1-public-UpdateTeachingToolDocumentRequest"></a>

### UpdateTeachingToolDocumentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| attachment_files | [common.v1.NullableAttachmentFile](#common-v1-NullableAttachmentFile) | repeated |  |






<a name="modules-material-v1-public-UpdateTeachingToolDocumentResponse"></a>

### UpdateTeachingToolDocumentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tool_document | [modules.material.v1.shared.TeachingToolDocument](#modules-material-v1-shared-TeachingToolDocument) |  |  |
| message | [string](#string) |  |  |






<a name="modules-material-v1-public-UpdateTeachingToolsRequest"></a>

### UpdateTeachingToolsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| components | [modules.material.v1.shared.TeachingToolComponent](#modules-material-v1-shared-TeachingToolComponent) | repeated |  |






<a name="modules-material-v1-public-UpdateTeachingToolsResponse"></a>

### UpdateTeachingToolsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_tools | [modules.material.v1.shared.TeachingTools](#modules-material-v1-shared-TeachingTools) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-material-v1-public-TeachingToolsService"></a>

### TeachingToolsService
Service for teaching-tools related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTeachingTools | [CreateTeachingToolsRequest](#modules-material-v1-public-CreateTeachingToolsRequest) | [CreateTeachingToolsResponse](#modules-material-v1-public-CreateTeachingToolsResponse) |  |
| UpdateTeachingTools | [UpdateTeachingToolsRequest](#modules-material-v1-public-UpdateTeachingToolsRequest) | [UpdateTeachingToolsResponse](#modules-material-v1-public-UpdateTeachingToolsResponse) |  |
| DeleteTeachingTools | [DeleteTeachingToolsRequest](#modules-material-v1-public-DeleteTeachingToolsRequest) | [DeleteTeachingToolsResponse](#modules-material-v1-public-DeleteTeachingToolsResponse) |  |
| GetTeachingToolsById | [GetTeachingToolsByIdRequest](#modules-material-v1-public-GetTeachingToolsByIdRequest) | [GetTeachingToolsByIdResponse](#modules-material-v1-public-GetTeachingToolsByIdResponse) |  |
| GetTeachingToolsByCurriculumId | [GetTeachingToolsByCurriculumIdRequest](#modules-material-v1-public-GetTeachingToolsByCurriculumIdRequest) | [GetTeachingToolsByCurriculumIdResponse](#modules-material-v1-public-GetTeachingToolsByCurriculumIdResponse) |  |
| CreateTeachingToolDocument | [CreateTeachingToolDocumentRequest](#modules-material-v1-public-CreateTeachingToolDocumentRequest) | [CreateTeachingToolDocumentResponse](#modules-material-v1-public-CreateTeachingToolDocumentResponse) |  |
| UpdateTeachingToolDocument | [UpdateTeachingToolDocumentRequest](#modules-material-v1-public-UpdateTeachingToolDocumentRequest) | [UpdateTeachingToolDocumentResponse](#modules-material-v1-public-UpdateTeachingToolDocumentResponse) |  |
| DeleteTeachingToolDocument | [DeleteTeachingToolDocumentRequest](#modules-material-v1-public-DeleteTeachingToolDocumentRequest) | [DeleteTeachingToolDocumentResponse](#modules-material-v1-public-DeleteTeachingToolDocumentResponse) |  |
| GetTeachingToolDocumentById | [GetTeachingToolDocumentByIdRequest](#modules-material-v1-public-GetTeachingToolDocumentByIdRequest) | [GetTeachingToolDocumentByIdResponse](#modules-material-v1-public-GetTeachingToolDocumentByIdResponse) |  |
| ListTeachingToolDocument | [ListTeachingToolDocumentRequest](#modules-material-v1-public-ListTeachingToolDocumentRequest) | [ListTeachingToolDocumentResponse](#modules-material-v1-public-ListTeachingToolDocumentResponse) |  |
| CreateTeachingToolDocumentPresignedPostUrl | [CreateTeachingToolDocumentPresignedPostUrlRequest](#modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlRequest) | [CreateTeachingToolDocumentPresignedPostUrlResponse](#modules-material-v1-public-CreateTeachingToolDocumentPresignedPostUrlResponse) |  |

 



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

