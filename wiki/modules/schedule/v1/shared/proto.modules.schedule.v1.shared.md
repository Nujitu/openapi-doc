# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/schedule/v1/shared/enum.proto](#modules_schedule_v1_shared_enum-proto)
    - [Activity](#modules-schedule-v1-shared-Activity)
    - [Day](#modules-schedule-v1-shared-Day)
  
- [modules/schedule/v1/shared/event.proto](#modules_schedule_v1_shared_event-proto)
    - [CreateEventRequest](#modules-schedule-v1-shared-CreateEventRequest)
    - [CreateEventResponse](#modules-schedule-v1-shared-CreateEventResponse)
    - [DeleteEventRequest](#modules-schedule-v1-shared-DeleteEventRequest)
    - [DeleteEventResponse](#modules-schedule-v1-shared-DeleteEventResponse)
    - [GetEventAndScheduleRequest](#modules-schedule-v1-shared-GetEventAndScheduleRequest)
    - [GetEventAndScheduleResponse](#modules-schedule-v1-shared-GetEventAndScheduleResponse)
    - [GetEventDetailResponse](#modules-schedule-v1-shared-GetEventDetailResponse)
    - [UpdateEventRequest](#modules-schedule-v1-shared-UpdateEventRequest)
    - [UpdateEventResponse](#modules-schedule-v1-shared-UpdateEventResponse)
  
- [modules/schedule/v1/shared/schedule_student.proto](#modules_schedule_v1_shared_schedule_student-proto)
    - [CreateScheduleStudentByDayRequest](#modules-schedule-v1-shared-CreateScheduleStudentByDayRequest)
    - [CreateScheduleStudentByDayResponse](#modules-schedule-v1-shared-CreateScheduleStudentByDayResponse)
    - [DeleteScheduleStudentRequest](#modules-schedule-v1-shared-DeleteScheduleStudentRequest)
    - [DeleteScheduleStudentResponse](#modules-schedule-v1-shared-DeleteScheduleStudentResponse)
    - [GetScheduleStudentByDayRequest](#modules-schedule-v1-shared-GetScheduleStudentByDayRequest)
    - [GetScheduleStudentByDayResponse](#modules-schedule-v1-shared-GetScheduleStudentByDayResponse)
    - [GetScheduleStudentNowRequest](#modules-schedule-v1-shared-GetScheduleStudentNowRequest)
    - [GetScheduleStudentNowResponse](#modules-schedule-v1-shared-GetScheduleStudentNowResponse)
    - [UpdateScheduleStudentRequest](#modules-schedule-v1-shared-UpdateScheduleStudentRequest)
    - [UpdateScheduleStudentResponse](#modules-schedule-v1-shared-UpdateScheduleStudentResponse)
  
- [modules/schedule/v1/shared/schedule_teacher.proto](#modules_schedule_v1_shared_schedule_teacher-proto)
    - [CreateScheduleTeacherByDayRequest](#modules-schedule-v1-shared-CreateScheduleTeacherByDayRequest)
    - [CreateScheduleTeacherByDayResponse](#modules-schedule-v1-shared-CreateScheduleTeacherByDayResponse)
    - [DeleteScheduleTeacherRequest](#modules-schedule-v1-shared-DeleteScheduleTeacherRequest)
    - [DeleteScheduleTeacherResponse](#modules-schedule-v1-shared-DeleteScheduleTeacherResponse)
    - [GetScheduleTeacherByDayRequest](#modules-schedule-v1-shared-GetScheduleTeacherByDayRequest)
    - [GetScheduleTeacherByDayResponse](#modules-schedule-v1-shared-GetScheduleTeacherByDayResponse)
    - [GetScheduleTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleTeacherDetailResponse)
    - [GetScheduleTeacherNowRequest](#modules-schedule-v1-shared-GetScheduleTeacherNowRequest)
    - [GetScheduleTeacherNowResponse](#modules-schedule-v1-shared-GetScheduleTeacherNowResponse)
    - [UpdateScheduleTeacherRequest](#modules-schedule-v1-shared-UpdateScheduleTeacherRequest)
    - [UpdateScheduleTeacherResponse](#modules-schedule-v1-shared-UpdateScheduleTeacherResponse)
  
- [modules/schedule/v1/shared/subject_schedule.proto](#modules_schedule_v1_shared_subject_schedule-proto)
    - [CreateSubjectScheduleRequest](#modules-schedule-v1-shared-CreateSubjectScheduleRequest)
    - [CreateSubjectScheduleResponse](#modules-schedule-v1-shared-CreateSubjectScheduleResponse)
    - [GetScheduleDetailResponse](#modules-schedule-v1-shared-GetScheduleDetailResponse)
    - [SubjectSchedule](#modules-schedule-v1-shared-SubjectSchedule)
  
- [modules/schedule/v1/shared/time_schedule.proto](#modules_schedule_v1_shared_time_schedule-proto)
    - [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail)
    - [TimeSchedule](#modules-schedule-v1-shared-TimeSchedule)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_schedule_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/enum.proto


 


<a name="modules-schedule-v1-shared-Activity"></a>

### Activity


| Name | Number | Description |
| ---- | ------ | ----------- |
| OTHERS | 0 |  |
| LEARNING | 1 |  |
| SCHOOL_EVENT | 2 |  |
| EXAM | 3 |  |
| CEREMONY | 4 |  |
| EXTRACURRICULAR | 5 |  |
| STAFF_DEVELOPMENT | 6 |  |



<a name="modules-schedule-v1-shared-Day"></a>

### Day


| Name | Number | Description |
| ---- | ------ | ----------- |
| MONDAY | 0 |  |
| TUESDAY | 1 |  |
| WEDNESDAY | 2 |  |
| THURSDAY | 3 |  |
| FRIDAY | 4 |  |
| SATURDAY | 5 |  |
| SUNDAY | 6 |  |


 

 

 



<a name="modules_schedule_v1_shared_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/event.proto



<a name="modules-schedule-v1-shared-CreateEventRequest"></a>

### CreateEventRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| user_ids | [string](#string) | repeated |  |
| date | [string](#string) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |






<a name="modules-schedule-v1-shared-CreateEventResponse"></a>

### CreateEventResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteEventRequest"></a>

### DeleteEventRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteEventResponse"></a>

### DeleteEventResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetEventAndScheduleRequest"></a>

### GetEventAndScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from | [string](#string) |  |  |
| to | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetEventAndScheduleResponse"></a>

### GetEventAndScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| events | [GetEventDetailResponse](#modules-schedule-v1-shared-GetEventDetailResponse) | repeated |  |
| schedules | [GetScheduleDetailResponse](#modules-schedule-v1-shared-GetScheduleDetailResponse) | repeated |  |






<a name="modules-schedule-v1-shared-GetEventDetailResponse"></a>

### GetEventDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| schedule_type | [string](#string) |  |  |
| start | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| user_ids | [string](#string) | repeated |  |






<a name="modules-schedule-v1-shared-UpdateEventRequest"></a>

### UpdateEventRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| user_ids | [string](#string) | repeated |  |
| date | [string](#string) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |






<a name="modules-schedule-v1-shared-UpdateEventResponse"></a>

### UpdateEventResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 

 



<a name="modules_schedule_v1_shared_schedule_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/schedule_student.proto



<a name="modules-schedule-v1-shared-CreateScheduleStudentByDayRequest"></a>

### CreateScheduleStudentByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |
| detail_activity | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-CreateScheduleStudentByDayResponse"></a>

### CreateScheduleStudentByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleStudentRequest"></a>

### DeleteScheduleStudentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleStudentResponse"></a>

### DeleteScheduleStudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleStudentByDayRequest"></a>

### GetScheduleStudentByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleStudentByDayResponse"></a>

### GetScheduleStudentByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| time_schedules | [TimeSchedule](#modules-schedule-v1-shared-TimeSchedule) | repeated |  |






<a name="modules-schedule-v1-shared-GetScheduleStudentNowRequest"></a>

### GetScheduleStudentNowRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleStudentNowResponse"></a>

### GetScheduleStudentNowResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| time_schedule | [TimeSchedule](#modules-schedule-v1-shared-TimeSchedule) |  |  |






<a name="modules-schedule-v1-shared-UpdateScheduleStudentRequest"></a>

### UpdateScheduleStudentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |






<a name="modules-schedule-v1-shared-UpdateScheduleStudentResponse"></a>

### UpdateScheduleStudentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 

 



<a name="modules_schedule_v1_shared_schedule_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/schedule_teacher.proto



<a name="modules-schedule-v1-shared-CreateScheduleTeacherByDayRequest"></a>

### CreateScheduleTeacherByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-CreateScheduleTeacherByDayResponse"></a>

### CreateScheduleTeacherByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleTeacherRequest"></a>

### DeleteScheduleTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleTeacherResponse"></a>

### DeleteScheduleTeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleTeacherByDayRequest"></a>

### GetScheduleTeacherByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleTeacherByDayResponse"></a>

### GetScheduleTeacherByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| schedules | [GetScheduleTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleTeacherDetailResponse) | repeated |  |






<a name="modules-schedule-v1-shared-GetScheduleTeacherDetailResponse"></a>

### GetScheduleTeacherDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time_schedule_id | [string](#string) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-GetScheduleTeacherNowRequest"></a>

### GetScheduleTeacherNowRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleTeacherNowResponse"></a>

### GetScheduleTeacherNowResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| schedules | [GetScheduleTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleTeacherDetailResponse) |  |  |






<a name="modules-schedule-v1-shared-UpdateScheduleTeacherRequest"></a>

### UpdateScheduleTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-UpdateScheduleTeacherResponse"></a>

### UpdateScheduleTeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 

 



<a name="modules_schedule_v1_shared_subject_schedule-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/subject_schedule.proto



<a name="modules-schedule-v1-shared-CreateSubjectScheduleRequest"></a>

### CreateSubjectScheduleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| time_schedule_id | [string](#string) |  |  |
| subject_schedules | [SubjectSchedule](#modules-schedule-v1-shared-SubjectSchedule) | repeated |  |






<a name="modules-schedule-v1-shared-CreateSubjectScheduleResponse"></a>

### CreateSubjectScheduleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleDetailResponse"></a>

### GetScheduleDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_group_id | [string](#string) |  |  |
| class_group_name | [string](#string) |  |  |
| class_subject_detail_id | [string](#string) |  |  |
| class_subject_detail_name | [string](#string) |  |  |
| schedule_type | [string](#string) |  |  |
| start | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |
| detail_activity | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-SubjectSchedule"></a>

### SubjectSchedule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| class_group_id | [string](#string) |  |  |
| class_group_name | [string](#string) |  |  |
| class_subject_detail_id | [string](#string) |  |  |
| class_subject_detail_name | [string](#string) |  |  |
| teacher_user_id | [string](#string) |  |  |





 

 

 

 



<a name="modules_schedule_v1_shared_time_schedule-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/time_schedule.proto



<a name="modules-schedule-v1-shared-DutyTeacherDetail"></a>

### DutyTeacherDetail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| name | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-TimeSchedule"></a>

### TimeSchedule



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time_schedule_id | [string](#string) |  |  |
| schedule_id | [string](#string) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| subject_schedule | [SubjectSchedule](#modules-schedule-v1-shared-SubjectSchedule) | repeated | time schedule fields for student |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated | duty teachers |





 

 

 

 



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

