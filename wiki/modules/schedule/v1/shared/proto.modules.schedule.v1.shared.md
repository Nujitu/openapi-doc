# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/schedule/v1/shared/enum.proto](#modules_schedule_v1_shared_enum-proto)
    - [Activity](#modules-schedule-v1-shared-Activity)
    - [Day](#modules-schedule-v1-shared-Day)
  
- [modules/schedule/v1/shared/schedule_subject.proto](#modules_schedule_v1_shared_schedule_subject-proto)
    - [CreateScheduleSubjectRequest](#modules-schedule-v1-shared-CreateScheduleSubjectRequest)
    - [GetScheduleSubjectResponse](#modules-schedule-v1-shared-GetScheduleSubjectResponse)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_schedule_v1_shared_enum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/enum.proto


 


<a name="modules-schedule-v1-shared-Activity"></a>

### Activity


| Name | Number | Description |
| ---- | ------ | ----------- |
| LEARNING | 0 |  |
| OTHERS | 1 |  |



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


 

 

 



<a name="modules_schedule_v1_shared_schedule_subject-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/schedule/v1/shared/schedule_subject.proto



<a name="modules-schedule-v1-shared-CreateScheduleSubjectRequest"></a>

### CreateScheduleSubjectRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |






<a name="modules-schedule-v1-shared-GetScheduleSubjectResponse"></a>

### GetScheduleSubjectResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [Day](#modules-schedule-v1-shared-Day) |  |  |
| period | [string](#string) |  |  |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| activity | [Activity](#modules-schedule-v1-shared-Activity) |  |  |





 

 

 

 



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

