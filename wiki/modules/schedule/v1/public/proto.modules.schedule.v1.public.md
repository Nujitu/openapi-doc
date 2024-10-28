# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/schedule/v1/public/schedule_student.proto](#modules_schedule_v1_public_schedule_student-proto)
    - [ScheduleStudentService](#modules-schedule-v1-public-ScheduleStudentService)
  
- [modules/schedule/v1/public/schedule_teacher.proto](#modules_schedule_v1_public_schedule_teacher-proto)
    - [ScheduleTeacherService](#modules-schedule-v1-public-ScheduleTeacherService)
  
- [modules/schedule/v1/public/subject_schedule.proto](#modules_schedule_v1_public_subject_schedule-proto)
    - [SubjectScheduleService](#modules-schedule-v1-public-SubjectScheduleService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_schedule_v1_public_schedule_student-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/public/schedule_student.proto


 

 

 


<a name="modules-schedule-v1-public-ScheduleStudentService"></a>

### ScheduleStudentService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateScheduleStudentByDay | [.modules.schedule.v1.shared.CreateScheduleStudentByDayRequest](#modules-schedule-v1-shared-CreateScheduleStudentByDayRequest) | [.modules.schedule.v1.shared.CreateScheduleStudentByDayResponse](#modules-schedule-v1-shared-CreateScheduleStudentByDayResponse) |  |
| GetScheduleStudentByDay | [.modules.schedule.v1.shared.GetScheduleStudentByDayRequest](#modules-schedule-v1-shared-GetScheduleStudentByDayRequest) | [.modules.schedule.v1.shared.GetScheduleStudentByDayResponse](#modules-schedule-v1-shared-GetScheduleStudentByDayResponse) |  |

 



<a name="modules_schedule_v1_public_schedule_teacher-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/public/schedule_teacher.proto


 

 

 


<a name="modules-schedule-v1-public-ScheduleTeacherService"></a>

### ScheduleTeacherService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateScheduleTeacherByDay | [.modules.schedule.v1.shared.CreateScheduleTeacherByDayRequest](#modules-schedule-v1-shared-CreateScheduleTeacherByDayRequest) | [.modules.schedule.v1.shared.CreateScheduleTeacherByDayResponse](#modules-schedule-v1-shared-CreateScheduleTeacherByDayResponse) |  |

 



<a name="modules_schedule_v1_public_subject_schedule-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/public/subject_schedule.proto


 

 

 


<a name="modules-schedule-v1-public-SubjectScheduleService"></a>

### SubjectScheduleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSubjectSchedule | [.modules.schedule.v1.shared.CreateSubjectScheduleRequest](#modules-schedule-v1-shared-CreateSubjectScheduleRequest) | [.modules.schedule.v1.shared.CreateSubjectScheduleResponse](#modules-schedule-v1-shared-CreateSubjectScheduleResponse) |  |

 



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

