# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/public/assignment.proto](#modules_assessment_v1_public_assignment-proto)
    - [CreateAssignmentRequest](#modules-assessment-v1-public-CreateAssignmentRequest)
    - [CreateAssignmentResponse](#modules-assessment-v1-public-CreateAssignmentResponse)
    - [DeleteAssignmentRequest](#modules-assessment-v1-public-DeleteAssignmentRequest)
    - [DeleteAssignmentResponse](#modules-assessment-v1-public-DeleteAssignmentResponse)
    - [GetAssignmentByIdRequest](#modules-assessment-v1-public-GetAssignmentByIdRequest)
    - [GetAssignmentByIdResponse](#modules-assessment-v1-public-GetAssignmentByIdResponse)
    - [ListAssignmentByTeachingModuleIdRequest](#modules-assessment-v1-public-ListAssignmentByTeachingModuleIdRequest)
    - [ListAssignmentByTeachingModuleIdResponse](#modules-assessment-v1-public-ListAssignmentByTeachingModuleIdResponse)
    - [UpdateAssignmentRequest](#modules-assessment-v1-public-UpdateAssignmentRequest)
    - [UpdateAssignmentResponse](#modules-assessment-v1-public-UpdateAssignmentResponse)
  
    - [AssignmentService](#modules-assessment-v1-public-AssignmentService)
  
- [modules/assessment/v1/public/observation.proto](#modules_assessment_v1_public_observation-proto)
    - [CreateObservationRequest](#modules-assessment-v1-public-CreateObservationRequest)
    - [CreateObservationResponse](#modules-assessment-v1-public-CreateObservationResponse)
    - [DeleteObservationRequest](#modules-assessment-v1-public-DeleteObservationRequest)
    - [DeleteObservationResponse](#modules-assessment-v1-public-DeleteObservationResponse)
    - [GetObservationByIdRequest](#modules-assessment-v1-public-GetObservationByIdRequest)
    - [GetObservationByIdResponse](#modules-assessment-v1-public-GetObservationByIdResponse)
    - [ListObservationByTeachingModuleIdRequest](#modules-assessment-v1-public-ListObservationByTeachingModuleIdRequest)
    - [ListObservationByTeachingModuleIdResponse](#modules-assessment-v1-public-ListObservationByTeachingModuleIdResponse)
    - [UpdateObservationRequest](#modules-assessment-v1-public-UpdateObservationRequest)
    - [UpdateObservationResponse](#modules-assessment-v1-public-UpdateObservationResponse)
  
    - [ObservationService](#modules-assessment-v1-public-ObservationService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_public_assignment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/assignment.proto



<a name="modules-assessment-v1-public-CreateAssignmentRequest"></a>

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






<a name="modules-assessment-v1-public-CreateAssignmentResponse"></a>

### CreateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteAssignmentRequest"></a>

### DeleteAssignmentRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteAssignmentResponse"></a>

### DeleteAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentByIdRequest"></a>

### GetAssignmentByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetAssignmentByIdResponse"></a>

### GetAssignmentByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentByTeachingModuleIdRequest"></a>

### ListAssignmentByTeachingModuleIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-ListAssignmentByTeachingModuleIdResponse"></a>

### ListAssignmentByTeachingModuleIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignments | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) | repeated |  |






<a name="modules-assessment-v1-public-UpdateAssignmentRequest"></a>

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






<a name="modules-assessment-v1-public-UpdateAssignmentResponse"></a>

### UpdateAssignmentResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-assessment-v1-public-AssignmentService"></a>

### AssignmentService
Service for assignment related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAssignment | [CreateAssignmentRequest](#modules-assessment-v1-public-CreateAssignmentRequest) | [CreateAssignmentResponse](#modules-assessment-v1-public-CreateAssignmentResponse) |  |
| UpdateAssignment | [UpdateAssignmentRequest](#modules-assessment-v1-public-UpdateAssignmentRequest) | [UpdateAssignmentResponse](#modules-assessment-v1-public-UpdateAssignmentResponse) |  |
| DeleteAssignment | [DeleteAssignmentRequest](#modules-assessment-v1-public-DeleteAssignmentRequest) | [DeleteAssignmentResponse](#modules-assessment-v1-public-DeleteAssignmentResponse) |  |
| GetAssignmentById | [GetAssignmentByIdRequest](#modules-assessment-v1-public-GetAssignmentByIdRequest) | [GetAssignmentByIdResponse](#modules-assessment-v1-public-GetAssignmentByIdResponse) |  |
| ListAssignmentByTeachingModuleId | [ListAssignmentByTeachingModuleIdRequest](#modules-assessment-v1-public-ListAssignmentByTeachingModuleIdRequest) | [ListAssignmentByTeachingModuleIdResponse](#modules-assessment-v1-public-ListAssignmentByTeachingModuleIdResponse) |  |

 



<a name="modules_assessment_v1_public_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/public/observation.proto



<a name="modules-assessment-v1-public-CreateObservationRequest"></a>

### CreateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| score | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-CreateObservationResponse"></a>

### CreateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteObservationRequest"></a>

### DeleteObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-DeleteObservationResponse"></a>

### DeleteObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetObservationByIdRequest"></a>

### GetObservationByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-GetObservationByIdResponse"></a>

### GetObservationByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |






<a name="modules-assessment-v1-public-ListObservationByTeachingModuleIdRequest"></a>

### ListObservationByTeachingModuleIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_folder_id | [string](#string) |  |  |






<a name="modules-assessment-v1-public-ListObservationByTeachingModuleIdResponse"></a>

### ListObservationByTeachingModuleIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observations | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) | repeated |  |






<a name="modules-assessment-v1-public-UpdateObservationRequest"></a>

### UpdateObservationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| score | [float](#float) |  |  |
| learning_goals | [string](#string) | repeated |  |
| publish | [bool](#bool) |  |  |






<a name="modules-assessment-v1-public-UpdateObservationResponse"></a>

### UpdateObservationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-assessment-v1-public-ObservationService"></a>

### ObservationService
Service for observation related feature

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateObservation | [CreateObservationRequest](#modules-assessment-v1-public-CreateObservationRequest) | [CreateObservationResponse](#modules-assessment-v1-public-CreateObservationResponse) |  |
| UpdateObservation | [UpdateObservationRequest](#modules-assessment-v1-public-UpdateObservationRequest) | [UpdateObservationResponse](#modules-assessment-v1-public-UpdateObservationResponse) |  |
| DeleteObservation | [DeleteObservationRequest](#modules-assessment-v1-public-DeleteObservationRequest) | [DeleteObservationResponse](#modules-assessment-v1-public-DeleteObservationResponse) |  |
| GetObservationById | [GetObservationByIdRequest](#modules-assessment-v1-public-GetObservationByIdRequest) | [GetObservationByIdResponse](#modules-assessment-v1-public-GetObservationByIdResponse) |  |
| ListObservationByTeachingModuleId | [ListObservationByTeachingModuleIdRequest](#modules-assessment-v1-public-ListObservationByTeachingModuleIdRequest) | [ListObservationByTeachingModuleIdResponse](#modules-assessment-v1-public-ListObservationByTeachingModuleIdResponse) |  |

 



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

