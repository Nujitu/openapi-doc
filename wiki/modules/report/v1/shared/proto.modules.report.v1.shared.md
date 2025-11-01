# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/report/v1/shared/absence.proto](#modules_report_v1_shared_absence-proto)
    - [Absence](#modules-report-v1-shared-Absence)
  
- [modules/report/v1/shared/assessment_detail.proto](#modules_report_v1_shared_assessment_detail-proto)
    - [AssessmentDetail](#modules-report-v1-shared-AssessmentDetail)
    - [AssessmentMethodDetail](#modules-report-v1-shared-AssessmentMethodDetail)
    - [ExamAssessment](#modules-report-v1-shared-ExamAssessment)
    - [TeachingModuleAssessment](#modules-report-v1-shared-TeachingModuleAssessment)
    - [TeachingModuleAssessmentDetail](#modules-report-v1-shared-TeachingModuleAssessmentDetail)
    - [TeachingModuleAssessmentTypeDetail](#modules-report-v1-shared-TeachingModuleAssessmentTypeDetail)
  
- [modules/report/v1/shared/attendance.proto](#modules_report_v1_shared_attendance-proto)
    - [Attendance](#modules-report-v1-shared-Attendance)
    - [StudentAttendance](#modules-report-v1-shared-StudentAttendance)
  
- [modules/report/v1/shared/enum.proto](#modules_report_v1_shared_enum-proto)
    - [AssessmentMethod](#modules-report-v1-shared-AssessmentMethod)
    - [AssessmentType](#modules-report-v1-shared-AssessmentType)
    - [FinalizeScoreState](#modules-report-v1-shared-FinalizeScoreState)
  
- [modules/report/v1/shared/finalized_score.proto](#modules_report_v1_shared_finalized_score-proto)
    - [FinalizedScore](#modules-report-v1-shared-FinalizedScore)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_report_v1_shared_absence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/shared/absence.proto



<a name="modules-report-v1-shared-Absence"></a>

### Absence



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| class_id | [string](#string) |  |  |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| status | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="modules_report_v1_shared_assessment_detail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/shared/assessment_detail.proto



<a name="modules-report-v1-shared-AssessmentDetail"></a>

### AssessmentDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module | [TeachingModuleAssessment](#modules-report-v1-shared-TeachingModuleAssessment) |  |  |
| mid_term | [ExamAssessment](#modules-report-v1-shared-ExamAssessment) |  |  |
| final_term | [ExamAssessment](#modules-report-v1-shared-ExamAssessment) |  |  |






<a name="modules-report-v1-shared-AssessmentMethodDetail"></a>

### AssessmentMethodDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| submission_id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| assessment_method | [AssessmentMethod](#modules-report-v1-shared-AssessmentMethod) |  |  |
| score | [float](#float) |  |  |






<a name="modules-report-v1-shared-ExamAssessment"></a>

### ExamAssessment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| final_score | [float](#float) |  |  |
| assessment_method_details | [AssessmentMethodDetail](#modules-report-v1-shared-AssessmentMethodDetail) | repeated |  |






<a name="modules-report-v1-shared-TeachingModuleAssessment"></a>

### TeachingModuleAssessment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| final_score | [float](#float) |  |  |
| teaching_module_details | [TeachingModuleAssessmentDetail](#modules-report-v1-shared-TeachingModuleAssessmentDetail) | repeated |  |






<a name="modules-report-v1-shared-TeachingModuleAssessmentDetail"></a>

### TeachingModuleAssessmentDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| score | [float](#float) |  |  |
| assessment_type_details | [TeachingModuleAssessmentTypeDetail](#modules-report-v1-shared-TeachingModuleAssessmentTypeDetail) | repeated |  |






<a name="modules-report-v1-shared-TeachingModuleAssessmentTypeDetail"></a>

### TeachingModuleAssessmentTypeDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assessment_type | [AssessmentType](#modules-report-v1-shared-AssessmentType) |  |  |
| percentage | [float](#float) |  |  |
| score | [float](#float) |  |  |
| assessment_method_details | [AssessmentMethodDetail](#modules-report-v1-shared-AssessmentMethodDetail) | repeated |  |





 

 

 

 



<a name="modules_report_v1_shared_attendance-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/shared/attendance.proto



<a name="modules-report-v1-shared-Attendance"></a>

### Attendance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| schedule_id | [string](#string) |  |  |
| date | [string](#string) |  |  |
| class_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| present | [int32](#int32) |  |  |
| absent | [int32](#int32) |  |  |
| sick | [int32](#int32) |  |  |
| leave | [int32](#int32) |  |  |
| late | [int32](#int32) |  |  |
| student_attendance | [StudentAttendance](#modules-report-v1-shared-StudentAttendance) | repeated |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-report-v1-shared-StudentAttendance"></a>

### StudentAttendance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| student_id | [string](#string) |  |  |
| student_name | [string](#string) |  |  |
| status | [string](#string) |  |  |





 

 

 

 



<a name="modules_report_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/shared/enum.proto


 


<a name="modules-report-v1-shared-AssessmentMethod"></a>

### AssessmentMethod


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_ASSESSMENT_METHOD | 0 |  |
| ASSIGNMENT | 1 |  |
| OBSERVATION | 2 |  |
| QUIZ | 3 |  |



<a name="modules-report-v1-shared-AssessmentType"></a>

### AssessmentType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_ASSESSMENT_TYPE | 0 |  |
| FORMATIVE | 1 |  |
| SUMMATIVE | 2 |  |
| EXAM | 3 |  |



<a name="modules-report-v1-shared-FinalizeScoreState"></a>

### FinalizeScoreState


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| PROCESSING | 1 |  |
| FAILED | 2 |  |
| COMPLETED | 3 |  |


 

 

 



<a name="modules_report_v1_shared_finalized_score-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/report/v1/shared/finalized_score.proto



<a name="modules-report-v1-shared-FinalizedScore"></a>

### FinalizedScore



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| final_score | [float](#float) |  |  |
| student_user_id | [string](#string) |  |  |
| class_subject_id | [string](#string) |  |  |
| subject_name | [string](#string) |  |  |
| state | [FinalizeScoreState](#modules-report-v1-shared-FinalizeScoreState) |  |  |
| assessment_detail | [AssessmentDetail](#modules-report-v1-shared-AssessmentDetail) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



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

