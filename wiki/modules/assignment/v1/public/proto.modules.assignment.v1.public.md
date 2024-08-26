# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assignment/v1/public/assignment.proto](#modules_assignment_v1_public_assignment-proto)
    - [CreateAssignmentRequest](#modules-assignment-v1-public-CreateAssignmentRequest)
    - [CreateAssignmentResponse](#modules-assignment-v1-public-CreateAssignmentResponse)
    - [DeleteAssignmentRequest](#modules-assignment-v1-public-DeleteAssignmentRequest)
    - [DeleteAssignmentResponse](#modules-assignment-v1-public-DeleteAssignmentResponse)
    - [GetAssignmentRequest](#modules-assignment-v1-public-GetAssignmentRequest)
    - [GetAssignmentResponse](#modules-assignment-v1-public-GetAssignmentResponse)
    - [UpdateAssignmentRequest](#modules-assignment-v1-public-UpdateAssignmentRequest)
    - [UpdateAssignmentResponse](#modules-assignment-v1-public-UpdateAssignmentResponse)
  
    - [AssignmentService](#modules-assignment-v1-public-AssignmentService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assignment_v1_public_assignment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assignment/v1/public/assignment.proto



<a name="modules-assignment-v1-public-CreateAssignmentRequest"></a>

### CreateAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| score | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-assignment-v1-public-CreateAssignmentResponse"></a>

### CreateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assignment.v1.shared.Assignment](#modules-assignment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assignment-v1-public-DeleteAssignmentRequest"></a>

### DeleteAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assignment-v1-public-DeleteAssignmentResponse"></a>

### DeleteAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assignment.v1.shared.Assignment](#modules-assignment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assignment-v1-public-GetAssignmentRequest"></a>

### GetAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assignment-v1-public-GetAssignmentResponse"></a>

### GetAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assignment.v1.shared.Assignment](#modules-assignment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assignment-v1-public-UpdateAssignmentRequest"></a>

### UpdateAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| start_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| due_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| until_date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| score | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |






<a name="modules-assignment-v1-public-UpdateAssignmentResponse"></a>

### UpdateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assignment.v1.shared.Assignment](#modules-assignment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-assignment-v1-public-AssignmentService"></a>

### AssignmentService
Service for assignment related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAssignment | [CreateAssignmentRequest](#modules-assignment-v1-public-CreateAssignmentRequest) | [CreateAssignmentResponse](#modules-assignment-v1-public-CreateAssignmentResponse) |  |
| UpdateAssignment | [UpdateAssignmentRequest](#modules-assignment-v1-public-UpdateAssignmentRequest) | [UpdateAssignmentResponse](#modules-assignment-v1-public-UpdateAssignmentResponse) |  |
| DeleteAssignment | [DeleteAssignmentRequest](#modules-assignment-v1-public-DeleteAssignmentRequest) | [DeleteAssignmentResponse](#modules-assignment-v1-public-DeleteAssignmentResponse) |  |
| GetAssignment | [GetAssignmentRequest](#modules-assignment-v1-public-GetAssignmentRequest) | [GetAssignmentResponse](#modules-assignment-v1-public-GetAssignmentResponse) |  |

 



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

