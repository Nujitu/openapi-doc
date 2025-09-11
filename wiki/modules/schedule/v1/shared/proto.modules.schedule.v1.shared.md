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
  
- [modules/schedule/v1/shared/schedule_duty_teacher.proto](#modules_schedule_v1_shared_schedule_duty_teacher-proto)
    - [CreateScheduleDutyTeacherByDayRequest](#modules-schedule-v1-shared-CreateScheduleDutyTeacherByDayRequest)
    - [CreateScheduleDutyTeacherByDayResponse](#modules-schedule-v1-shared-CreateScheduleDutyTeacherByDayResponse)
    - [DeleteScheduleDutyTeacherRequest](#modules-schedule-v1-shared-DeleteScheduleDutyTeacherRequest)
    - [DeleteScheduleDutyTeacherResponse](#modules-schedule-v1-shared-DeleteScheduleDutyTeacherResponse)
    - [GetScheduleDutyTeacherByDayRequest](#modules-schedule-v1-shared-GetScheduleDutyTeacherByDayRequest)
    - [GetScheduleDutyTeacherByDayResponse](#modules-schedule-v1-shared-GetScheduleDutyTeacherByDayResponse)
    - [GetScheduleDutyTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleDutyTeacherDetailResponse)
    - [GetScheduleDutyTeacherNowRequest](#modules-schedule-v1-shared-GetScheduleDutyTeacherNowRequest)
    - [GetScheduleDutyTeacherNowResponse](#modules-schedule-v1-shared-GetScheduleDutyTeacherNowResponse)
    - [UpdateScheduleDutyTeacherRequest](#modules-schedule-v1-shared-UpdateScheduleDutyTeacherRequest)
    - [UpdateScheduleDutyTeacherResponse](#modules-schedule-v1-shared-UpdateScheduleDutyTeacherResponse)
  
- [modules/schedule/v1/shared/schedule_student.proto](#modules_schedule_v1_shared_schedule_student-proto)
    - [CreateScheduleStudentByDayRequest](#modules-schedule-v1-shared-CreateScheduleStudentByDayRequest)
    - [CreateScheduleStudentByDayResponse](#modules-schedule-v1-shared-CreateScheduleStudentByDayResponse)
    - [DeleteScheduleStudentRequest](#modules-schedule-v1-shared-DeleteScheduleStudentRequest)
    - [DeleteScheduleStudentResponse](#modules-schedule-v1-shared-DeleteScheduleStudentResponse)
    - [GetScheduleStudentByDayRequest](#modules-schedule-v1-shared-GetScheduleStudentByDayRequest)
    - [GetScheduleStudentByDayResponse](#modules-schedule-v1-shared-GetScheduleStudentByDayResponse)
    - [GetScheduleStudentOngoingRequest](#modules-schedule-v1-shared-GetScheduleStudentOngoingRequest)
    - [GetScheduleStudentOngoingResponse](#modules-schedule-v1-shared-GetScheduleStudentOngoingResponse)
    - [UpdateScheduleStudentRequest](#modules-schedule-v1-shared-UpdateScheduleStudentRequest)
    - [UpdateScheduleStudentResponse](#modules-schedule-v1-shared-UpdateScheduleStudentResponse)
  
- [modules/schedule/v1/shared/subject_schedule.proto](#modules_schedule_v1_shared_subject_schedule-proto)
    - [CreateSubjectScheduleRequest](#modules-schedule-v1-shared-CreateSubjectScheduleRequest)
    - [CreateSubjectScheduleResponse](#modules-schedule-v1-shared-CreateSubjectScheduleResponse)
    - [DeleteSubjectScheduleByClassSubjectIdRequest](#modules-schedule-v1-shared-DeleteSubjectScheduleByClassSubjectIdRequest)
    - [DeleteSubjectScheduleByClassSubjectIdResponse](#modules-schedule-v1-shared-DeleteSubjectScheduleByClassSubjectIdResponse)
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





 

 

 

 



<a name="modules_schedule_v1_shared_schedule_duty_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/schedule_duty_teacher.proto



<a name="modules-schedule-v1-shared-CreateScheduleDutyTeacherByDayRequest"></a>

### CreateScheduleDutyTeacherByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-CreateScheduleDutyTeacherByDayResponse"></a>

### CreateScheduleDutyTeacherByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleDutyTeacherRequest"></a>

### DeleteScheduleDutyTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteScheduleDutyTeacherResponse"></a>

### DeleteScheduleDutyTeacherResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleDutyTeacherByDayRequest"></a>

### GetScheduleDutyTeacherByDayRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleDutyTeacherByDayResponse"></a>

### GetScheduleDutyTeacherByDayResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| schedules | [GetScheduleDutyTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleDutyTeacherDetailResponse) | repeated |  |






<a name="modules-schedule-v1-shared-GetScheduleDutyTeacherDetailResponse"></a>

### GetScheduleDutyTeacherDetailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time_schedule_id | [string](#string) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-GetScheduleDutyTeacherNowRequest"></a>

### GetScheduleDutyTeacherNowRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleDutyTeacherNowResponse"></a>

### GetScheduleDutyTeacherNowResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| schedules | [GetScheduleDutyTeacherDetailResponse](#modules-schedule-v1-shared-GetScheduleDutyTeacherDetailResponse) |  |  |






<a name="modules-schedule-v1-shared-UpdateScheduleDutyTeacherRequest"></a>

### UpdateScheduleDutyTeacherRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [string](#string) |  |  |
| end_time | [string](#string) |  |  |
| duty_teachers | [DutyTeacherDetail](#modules-schedule-v1-shared-DutyTeacherDetail) | repeated |  |






<a name="modules-schedule-v1-shared-UpdateScheduleDutyTeacherResponse"></a>

### UpdateScheduleDutyTeacherResponse



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






<a name="modules-schedule-v1-shared-GetScheduleStudentOngoingRequest"></a>

### GetScheduleStudentOngoingRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleStudentOngoingResponse"></a>

### GetScheduleStudentOngoingResponse



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






<a name="modules-schedule-v1-shared-DeleteSubjectScheduleByClassSubjectIdRequest"></a>

### DeleteSubjectScheduleByClassSubjectIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| class_subject_id | [string](#string) |  |  |






<a name="modules-schedule-v1-shared-DeleteSubjectScheduleByClassSubjectIdResponse"></a>

### DeleteSubjectScheduleByClassSubjectIdResponse



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
| teacher_id | [string](#string) |  |  |





 

 

 

 



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

