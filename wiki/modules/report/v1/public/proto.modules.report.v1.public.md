# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/report/v1/public/absence.proto](#modules_report_v1_public_absence-proto)
    - [AbsenceDetail](#modules-report-v1-public-AbsenceDetail)
    - [DeleteAbsenceRequest](#modules-report-v1-public-DeleteAbsenceRequest)
    - [GeneralAbsenceResponse](#modules-report-v1-public-GeneralAbsenceResponse)
    - [ListAbsencesRequest](#modules-report-v1-public-ListAbsencesRequest)
    - [ListAbsencesResponse](#modules-report-v1-public-ListAbsencesResponse)
    - [StudentAbsenceData](#modules-report-v1-public-StudentAbsenceData)
  
    - [AbsenceService](#modules-report-v1-public-AbsenceService)
  
- [modules/report/v1/public/attendance.proto](#modules_report_v1_public_attendance-proto)
    - [CreateAttendanceRequest](#modules-report-v1-public-CreateAttendanceRequest)
    - [GetAttendanceRequest](#modules-report-v1-public-GetAttendanceRequest)
    - [ListAttendancesRequest](#modules-report-v1-public-ListAttendancesRequest)
    - [ListAttendancesResponse](#modules-report-v1-public-ListAttendancesResponse)
    - [UpdateAttendanceRequest](#modules-report-v1-public-UpdateAttendanceRequest)
  
    - [AttendanceService](#modules-report-v1-public-AttendanceService)
  
- [modules/report/v1/public/finalized_score.proto](#modules_report_v1_public_finalized_score-proto)
    - [GetFinalizedScoreListRequest](#modules-report-v1-public-GetFinalizedScoreListRequest)
    - [GetFinalizedScoreListResponse](#modules-report-v1-public-GetFinalizedScoreListResponse)
  
    - [FinalizedScoreService](#modules-report-v1-public-FinalizedScoreService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_report_v1_public_absence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/absence.proto



<a name="modules-report-v1-public-AbsenceDetail"></a>

### AbsenceDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| date | [int64](#int64) |  |  |
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






<a name="modules-report-v1-public-ListAbsencesRequest"></a>

### ListAbsencesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_id | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






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
| DeleteAbsence | [DeleteAbsenceRequest](#modules-report-v1-public-DeleteAbsenceRequest) | [GeneralAbsenceResponse](#modules-report-v1-public-GeneralAbsenceResponse) |  |

 



<a name="modules_report_v1_public_attendance-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/attendance.proto



<a name="modules-report-v1-public-CreateAttendanceRequest"></a>

### CreateAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| schedule_id | [string](#string) |  |  |
| class_id | [string](#string) |  |  |
| student_attendance | [modules.report.v1.shared.StudentAttendance](#modules-report-v1-shared-StudentAttendance) | repeated |  |






<a name="modules-report-v1-public-GetAttendanceRequest"></a>

### GetAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-report-v1-public-ListAttendancesRequest"></a>

### ListAttendancesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| schedule_id | [string](#string) |  |  |
| date | [string](#string) |  |  |
| class_id | [string](#string) |  |  |






<a name="modules-report-v1-public-ListAttendancesResponse"></a>

### ListAttendancesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| attendances | [modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) | repeated |  |






<a name="modules-report-v1-public-UpdateAttendanceRequest"></a>

### UpdateAttendanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| student_attendance | [modules.report.v1.shared.StudentAttendance](#modules-report-v1-shared-StudentAttendance) | repeated |  |





 

 

 


<a name="modules-report-v1-public-AttendanceService"></a>

### AttendanceService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitAttendance | [CreateAttendanceRequest](#modules-report-v1-public-CreateAttendanceRequest) | [.modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) | Create attendance |
| GetAttendance | [GetAttendanceRequest](#modules-report-v1-public-GetAttendanceRequest) | [.modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) | Get attendance by ID |
| ListAttendances | [ListAttendancesRequest](#modules-report-v1-public-ListAttendancesRequest) | [ListAttendancesResponse](#modules-report-v1-public-ListAttendancesResponse) | List attendances |
| UpdateAttendance | [UpdateAttendanceRequest](#modules-report-v1-public-UpdateAttendanceRequest) | [.modules.report.v1.shared.Attendance](#modules-report-v1-shared-Attendance) | Update attendance |

 



<a name="modules_report_v1_public_finalized_score-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/public/finalized_score.proto



<a name="modules-report-v1-public-GetFinalizedScoreListRequest"></a>

### GetFinalizedScoreListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |






<a name="modules-report-v1-public-GetFinalizedScoreListResponse"></a>

### GetFinalizedScoreListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| finalized_scores | [modules.report.v1.shared.FinalizedScore](#modules-report-v1-shared-FinalizedScore) | repeated |  |





 

 

 


<a name="modules-report-v1-public-FinalizedScoreService"></a>

### FinalizedScoreService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetFinalizedScoreList | [GetFinalizedScoreListRequest](#modules-report-v1-public-GetFinalizedScoreListRequest) | [GetFinalizedScoreListResponse](#modules-report-v1-public-GetFinalizedScoreListResponse) |  |

 



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

