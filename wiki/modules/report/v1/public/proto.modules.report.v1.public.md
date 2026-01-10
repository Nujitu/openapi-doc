# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/report/v1/public/absence.proto](#modules_report_v1_public_absence-proto)
    - [AbsenceDetail](#modules-report-v1-public-AbsenceDetail)
    - [DeleteAbsenceRequest](#modules-report-v1-public-DeleteAbsenceRequest)
    - [GeneralAbsenceResponse](#modules-report-v1-public-GeneralAbsenceResponse)
    - [GetAbsenceHistoryRequest](#modules-report-v1-public-GetAbsenceHistoryRequest)
    - [GetAbsenceHistoryResponse](#modules-report-v1-public-GetAbsenceHistoryResponse)
    - [ListAbsencesRequest](#modules-report-v1-public-ListAbsencesRequest)
    - [ListAbsencesResponse](#modules-report-v1-public-ListAbsencesResponse)
    - [StudentAbsenceData](#modules-report-v1-public-StudentAbsenceData)
  
    - [AbsenceService](#modules-report-v1-public-AbsenceService)
  
- [modules/report/v1/public/attendance.proto](#modules_report_v1_public_attendance-proto)
    - [Assignment](#modules-report-v1-public-Assignment)
    - [BaseResponse](#modules-report-v1-public-BaseResponse)
    - [GetAttendanceRequest](#modules-report-v1-public-GetAttendanceRequest)
    - [GetJournalAttendanceDetailRequest](#modules-report-v1-public-GetJournalAttendanceDetailRequest)
    - [GetJournalAttendanceRequest](#modules-report-v1-public-GetJournalAttendanceRequest)
    - [GetJournalAttendanceResponse](#modules-report-v1-public-GetJournalAttendanceResponse)
    - [LearningGoal](#modules-report-v1-public-LearningGoal)
    - [ListGetJournalAttendanceResponse](#modules-report-v1-public-ListGetJournalAttendanceResponse)
    - [Observation](#modules-report-v1-public-Observation)
    - [Quiz](#modules-report-v1-public-Quiz)
    - [StudyMaterial](#modules-report-v1-public-StudyMaterial)
    - [SubmitAttendanceRequest](#modules-report-v1-public-SubmitAttendanceRequest)
    - [SubmitJournalAttendanceRequest](#modules-report-v1-public-SubmitJournalAttendanceRequest)
    - [TeachingModule](#modules-report-v1-public-TeachingModule)
  
    - [AttendanceService](#modules-report-v1-public-AttendanceService)
  
- [modules/report/v1/public/finalized_score.proto](#modules_report_v1_public_finalized_score-proto)
    - [GenerateSubjectFinalizedScoreForOneStudentRequest](#modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentRequest)
    - [GenerateSubjectFinalizedScoreForOneStudentResponse](#modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentResponse)
    - [GetBulkSubjectFinalizedScoreByStudentUserIDsRequest](#modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsRequest)
    - [GetBulkSubjectFinalizedScoreByStudentUserIDsResponse](#modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsResponse)
    - [GetSubjectFinalizedScoreByStudentUserIDRequest](#modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDRequest)
    - [GetSubjectFinalizedScoreByStudentUserIDResponse](#modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDResponse)
  
    - [FinalizedScoreService](#modules-report-v1-public-FinalizedScoreService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_report_v1_public_absence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/absence.proto



<a name="modules-report-v1-public-AbsenceDetail"></a>

### AbsenceDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| status | [string](#string) |  |  |






<a name="modules-report-v1-public-DeleteAbsenceRequest"></a>

### DeleteAbsenceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| date | [int64](#int64) |  |  |






<a name="modules-report-v1-public-GeneralAbsenceResponse"></a>

### GeneralAbsenceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-report-v1-public-GetAbsenceHistoryRequest"></a>

### GetAbsenceHistoryRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-report-v1-public-GetAbsenceHistoryResponse"></a>

### GetAbsenceHistoryResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| present | [int32](#int32) |  |  |
| absent | [int32](#int32) |  |  |
| sick | [int32](#int32) |  |  |
| leave | [int32](#int32) |  |  |
| late | [int32](#int32) |  |  |
| absences | [AbsenceDetail](#modules-report-v1-public-AbsenceDetail) | repeated |  |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |






<a name="modules-report-v1-public-ListAbsencesRequest"></a>

### ListAbsencesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| status | [string](#string) | repeated |  |






<a name="modules-report-v1-public-ListAbsencesResponse"></a>

### ListAbsencesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [StudentAbsenceData](#modules-report-v1-public-StudentAbsenceData) | repeated |  |






<a name="modules-report-v1-public-StudentAbsenceData"></a>

### StudentAbsenceData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| total | [int32](#int32) |  |  |
| sick | [int32](#int32) |  |  |
| present | [int32](#int32) |  |  |
| absent | [int32](#int32) |  |  |
| leave | [int32](#int32) |  |  |
| late | [int32](#int32) |  |  |
| absences | [AbsenceDetail](#modules-report-v1-public-AbsenceDetail) | repeated |  |





 

 

 


<a name="modules-report-v1-public-AbsenceService"></a>

### AbsenceService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListAbsences | [ListAbsencesRequest](#modules-report-v1-public-ListAbsencesRequest) | [ListAbsencesResponse](#modules-report-v1-public-ListAbsencesResponse) |  |
| GetAbsenceHistory | [GetAbsenceHistoryRequest](#modules-report-v1-public-GetAbsenceHistoryRequest) | [GetAbsenceHistoryResponse](#modules-report-v1-public-GetAbsenceHistoryResponse) |  |
| DeleteAbsence | [DeleteAbsenceRequest](#modules-report-v1-public-DeleteAbsenceRequest) | [GeneralAbsenceResponse](#modules-report-v1-public-GeneralAbsenceResponse) |  |

 



<a name="modules_report_v1_public_attendance-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/attendance.proto



<a name="modules-report-v1-public-Assignment"></a>

### Assignment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-report-v1-public-BaseResponse"></a>

### BaseResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-report-v1-public-GetAttendanceRequest"></a>

### GetAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| schedule_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| class_id | [string](#string) |  |  |






<a name="modules-report-v1-public-GetJournalAttendanceDetailRequest"></a>

### GetJournalAttendanceDetailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-report-v1-public-GetJournalAttendanceRequest"></a>

### GetJournalAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| attendance_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| approver_user_id | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teacher_id | [string](#string) |  |  |
| instance_id | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-report-v1-public-GetJournalAttendanceResponse"></a>

### GetJournalAttendanceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| attendance_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| teaching_module | [TeachingModule](#modules-report-v1-public-TeachingModule) |  |  |
| present | [int32](#int32) |  |  |
| absent | [int32](#int32) |  |  |
| sick | [int32](#int32) |  |  |
| leave | [int32](#int32) |  |  |
| is_submitted | [bool](#bool) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| teacher_attendance | [string](#string) |  |  |
| learning_goals | [LearningGoal](#modules-report-v1-public-LearningGoal) | repeated |  |
| study_materials | [StudyMaterial](#modules-report-v1-public-StudyMaterial) | repeated |  |
| quizzes | [Quiz](#modules-report-v1-public-Quiz) | repeated |  |
| assignments | [Assignment](#modules-report-v1-public-Assignment) | repeated |  |
| observations | [Observation](#modules-report-v1-public-Observation) | repeated |  |
| note | [string](#string) |  |  |






<a name="modules-report-v1-public-LearningGoal"></a>

### LearningGoal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| learning_goals_id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-report-v1-public-ListGetJournalAttendanceResponse"></a>

### ListGetJournalAttendanceResponse
Response for listing journal attendance


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [GetJournalAttendanceResponse](#modules-report-v1-public-GetJournalAttendanceResponse) | repeated |  |






<a name="modules-report-v1-public-Observation"></a>

### Observation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-report-v1-public-Quiz"></a>

### Quiz



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quiz_id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-report-v1-public-StudyMaterial"></a>

### StudyMaterial



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| study_material_id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-report-v1-public-SubmitAttendanceRequest"></a>

### SubmitAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| schedule_id | [string](#string) |  |  |
| class_id | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| student_attendance | [modules.report.v1.shared.StudentAttendance](#modules-report-v1-shared-StudentAttendance) | repeated |  |
| class_subject_id | [string](#string) |  |  |






<a name="modules-report-v1-public-SubmitJournalAttendanceRequest"></a>

### SubmitJournalAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| attendance_id | [string](#string) |  |  |
| teaching_module | [TeachingModule](#modules-report-v1-public-TeachingModule) |  |  |
| learning_goals | [LearningGoal](#modules-report-v1-public-LearningGoal) | repeated |  |
| study_materials | [StudyMaterial](#modules-report-v1-public-StudyMaterial) | repeated |  |
| quizzes | [Quiz](#modules-report-v1-public-Quiz) | repeated |  |
| assignments | [Assignment](#modules-report-v1-public-Assignment) | repeated |  |
| observations | [Observation](#modules-report-v1-public-Observation) | repeated |  |
| note | [string](#string) |  |  |
| journal_status | [string](#string) |  |  |
| teacher_attendance | [string](#string) |  |  |






<a name="modules-report-v1-public-TeachingModule"></a>

### TeachingModule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_id | [string](#string) |  |  |
| name | [string](#string) |  |  |





 

 

 


<a name="modules-report-v1-public-AttendanceService"></a>

### AttendanceService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitAttendance | [SubmitAttendanceRequest](#modules-report-v1-public-SubmitAttendanceRequest) | [.modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) |  |
| SubmitJournalAttendance | [SubmitJournalAttendanceRequest](#modules-report-v1-public-SubmitJournalAttendanceRequest) | [BaseResponse](#modules-report-v1-public-BaseResponse) |  |
| GetJournalAttendance | [GetJournalAttendanceRequest](#modules-report-v1-public-GetJournalAttendanceRequest) | [ListGetJournalAttendanceResponse](#modules-report-v1-public-ListGetJournalAttendanceResponse) |  |
| GetJournalAttendanceDetail | [GetJournalAttendanceDetailRequest](#modules-report-v1-public-GetJournalAttendanceDetailRequest) | [GetJournalAttendanceResponse](#modules-report-v1-public-GetJournalAttendanceResponse) |  |
| GetAttendance | [GetAttendanceRequest](#modules-report-v1-public-GetAttendanceRequest) | [.modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) |  |

 



<a name="modules_report_v1_public_finalized_score-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/finalized_score.proto



<a name="modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentRequest"></a>

### GenerateSubjectFinalizedScoreForOneStudentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subject_id | [string](#string) |  |  |
| student_user_id | [string](#string) |  |  |






<a name="modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentResponse"></a>

### GenerateSubjectFinalizedScoreForOneStudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| finalized_score_id | [string](#string) |  |  |






<a name="modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsRequest"></a>

### GetBulkSubjectFinalizedScoreByStudentUserIDsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subject_id | [string](#string) |  |  |
| student_user_ids | [string](#string) |  |  |






<a name="modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsResponse"></a>

### GetBulkSubjectFinalizedScoreByStudentUserIDsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| finalized_scores | [modules.report.v1.shared.FinalizedScore](#modules-report-v1-shared-FinalizedScore) | repeated |  |






<a name="modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDRequest"></a>

### GetSubjectFinalizedScoreByStudentUserIDRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subject_id | [string](#string) |  |  |
| student_user_id | [string](#string) |  |  |






<a name="modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDResponse"></a>

### GetSubjectFinalizedScoreByStudentUserIDResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| finalized_score | [modules.report.v1.shared.FinalizedScore](#modules-report-v1-shared-FinalizedScore) |  |  |





 

 

 


<a name="modules-report-v1-public-FinalizedScoreService"></a>

### FinalizedScoreService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GenerateSubjectFinalizedScoreForOneStudent | [GenerateSubjectFinalizedScoreForOneStudentRequest](#modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentRequest) | [GenerateSubjectFinalizedScoreForOneStudentResponse](#modules-report-v1-public-GenerateSubjectFinalizedScoreForOneStudentResponse) |  |
| GetBulkSubjectFinalizedScoreByStudentUserIDs | [GetBulkSubjectFinalizedScoreByStudentUserIDsRequest](#modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsRequest) | [GetBulkSubjectFinalizedScoreByStudentUserIDsResponse](#modules-report-v1-public-GetBulkSubjectFinalizedScoreByStudentUserIDsResponse) |  |
| GetSubjectFinalizedScoreByStudentUserID | [GetSubjectFinalizedScoreByStudentUserIDRequest](#modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDRequest) | [GetSubjectFinalizedScoreByStudentUserIDResponse](#modules-report-v1-public-GetSubjectFinalizedScoreByStudentUserIDResponse) |  |

 



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

