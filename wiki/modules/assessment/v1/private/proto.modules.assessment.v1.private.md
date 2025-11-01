# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/assessment/v1/private/assignment.proto](#modules_assessment_v1_private_assignment-proto)
    - [GetAssignmentByIdRequest](#modules-assessment-v1-private-GetAssignmentByIdRequest)
    - [GetAssignmentByIdResponse](#modules-assessment-v1-private-GetAssignmentByIdResponse)
    - [GetAssignmentSubmissionsRequest](#modules-assessment-v1-private-GetAssignmentSubmissionsRequest)
    - [GetAssignmentSubmissionsResponse](#modules-assessment-v1-private-GetAssignmentSubmissionsResponse)
  
    - [AssignmentPrivateService](#modules-assessment-v1-private-AssignmentPrivateService)
  
- [modules/assessment/v1/private/observation.proto](#modules_assessment_v1_private_observation-proto)
    - [GetObservationByIdRequest](#modules-assessment-v1-private-GetObservationByIdRequest)
    - [GetObservationByIdResponse](#modules-assessment-v1-private-GetObservationByIdResponse)
    - [GetObservationSubmissionsRequest](#modules-assessment-v1-private-GetObservationSubmissionsRequest)
    - [GetObservationSubmissionsResponse](#modules-assessment-v1-private-GetObservationSubmissionsResponse)
  
    - [ObservationPrivateService](#modules-assessment-v1-private-ObservationPrivateService)
  
- [modules/assessment/v1/private/quiz.proto](#modules_assessment_v1_private_quiz-proto)
    - [QuizPrivateService](#modules-assessment-v1-private-QuizPrivateService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_assessment_v1_private_assignment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/private/assignment.proto



<a name="modules-assessment-v1-private-GetAssignmentByIdRequest"></a>

### GetAssignmentByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_id | [string](#string) |  |  |






<a name="modules-assessment-v1-private-GetAssignmentByIdResponse"></a>

### GetAssignmentByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment | [modules.assessment.v1.shared.Assignment](#modules-assessment-v1-shared-Assignment) |  |  |






<a name="modules-assessment-v1-private-GetAssignmentSubmissionsRequest"></a>

### GetAssignmentSubmissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_ids | [string](#string) | repeated |  |
| exam_ids | [string](#string) | repeated |  |
| student_user_id | [string](#string) | optional |  |






<a name="modules-assessment-v1-private-GetAssignmentSubmissionsResponse"></a>

### GetAssignmentSubmissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assignment_submissions | [modules.assessment.v1.shared.AssignmentSubmission](#modules-assessment-v1-shared-AssignmentSubmission) | repeated |  |





 

 

 


<a name="modules-assessment-v1-private-AssignmentPrivateService"></a>

### AssignmentPrivateService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAssignmentSubmissions | [GetAssignmentSubmissionsRequest](#modules-assessment-v1-private-GetAssignmentSubmissionsRequest) | [GetAssignmentSubmissionsResponse](#modules-assessment-v1-private-GetAssignmentSubmissionsResponse) |  |
| GetAssignmentById | [GetAssignmentByIdRequest](#modules-assessment-v1-private-GetAssignmentByIdRequest) | [GetAssignmentByIdResponse](#modules-assessment-v1-private-GetAssignmentByIdResponse) |  |

 



<a name="modules_assessment_v1_private_observation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/private/observation.proto



<a name="modules-assessment-v1-private-GetObservationByIdRequest"></a>

### GetObservationByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_id | [string](#string) |  |  |






<a name="modules-assessment-v1-private-GetObservationByIdResponse"></a>

### GetObservationByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation | [modules.assessment.v1.shared.Observation](#modules-assessment-v1-shared-Observation) |  |  |






<a name="modules-assessment-v1-private-GetObservationSubmissionsRequest"></a>

### GetObservationSubmissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| teaching_module_ids | [string](#string) | repeated |  |
| exam_ids | [string](#string) | repeated |  |
| student_user_id | [string](#string) | optional |  |






<a name="modules-assessment-v1-private-GetObservationSubmissionsResponse"></a>

### GetObservationSubmissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| observation_submissions | [modules.assessment.v1.shared.ObservationSubmission](#modules-assessment-v1-shared-ObservationSubmission) | repeated |  |





 

 

 


<a name="modules-assessment-v1-private-ObservationPrivateService"></a>

### ObservationPrivateService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetObservationSubmissions | [GetObservationSubmissionsRequest](#modules-assessment-v1-private-GetObservationSubmissionsRequest) | [GetObservationSubmissionsResponse](#modules-assessment-v1-private-GetObservationSubmissionsResponse) |  |
| GetObservationById | [GetObservationByIdRequest](#modules-assessment-v1-private-GetObservationByIdRequest) | [GetObservationByIdResponse](#modules-assessment-v1-private-GetObservationByIdResponse) |  |

 



<a name="modules_assessment_v1_private_quiz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/assessment/v1/private/quiz.proto


 

 

 


<a name="modules-assessment-v1-private-QuizPrivateService"></a>

### QuizPrivateService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| DeleteQuizAndAttributes | [.modules.assessment.v1.shared.DeleteQuizAndAttributesRequest](#modules-assessment-v1-shared-DeleteQuizAndAttributesRequest) | [.modules.assessment.v1.shared.DeleteQuizAndAttributesResponse](#modules-assessment-v1-shared-DeleteQuizAndAttributesResponse) |  |

 



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

