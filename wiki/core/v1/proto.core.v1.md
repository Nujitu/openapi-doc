# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [core/v1/annotations.proto](#core_v1_annotations-proto)
    - [File-level Extensions](#core_v1_annotations-proto-extensions)
    - [File-level Extensions](#core_v1_annotations-proto-extensions)
  
- [core/v1/descriptor.proto](#core_v1_descriptor-proto)
    - [Error](#core-v1-Error)
    - [Error.Details](#core-v1-Error-Details)
    - [ErrorCodes](#core-v1-ErrorCodes)
    - [ErrorExamples](#core-v1-ErrorExamples)
    - [MethodDescriptor](#core-v1-MethodDescriptor)
    - [PathPrefixes](#core-v1-PathPrefixes)
    - [Permission](#core-v1-Permission)
    - [Security](#core-v1-Security)
    - [ServiceDescriptor](#core-v1-ServiceDescriptor)
  
- [Scalar Value Types](#scalar-value-types)



<a name="core_v1_annotations-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## core/v1/annotations.proto


 

 


<a name="core_v1_annotations-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| method_descriptor | MethodDescriptor | .google.protobuf.MethodOptions | 1041 |  |
| service_descriptor | ServiceDescriptor | .google.protobuf.ServiceOptions | 1041 |  |

 

 



<a name="core_v1_descriptor-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## core/v1/descriptor.proto



<a name="core-v1-Error"></a>

### Error
Error represents gRPC error


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grpc_code | [uint32](#uint32) |  | grpc code of the error |
| details | [Error.Details](#core-v1-Error-Details) |  | containing error infos |






<a name="core-v1-Error-Details"></a>

### Error.Details



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| detail | [common.v1.ErrorInfo](#common-v1-ErrorInfo) | repeated |  |






<a name="core-v1-ErrorCodes"></a>

### ErrorCodes
ErrorCodes represents repeated error of codes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [string](#string) | repeated |  |






<a name="core-v1-ErrorExamples"></a>

### ErrorExamples
ErrorExamples represents repeated examples of errors


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [Error](#core-v1-Error) | repeated |  |






<a name="core-v1-MethodDescriptor"></a>

### MethodDescriptor
MethodDescriptor represents annotation on the methods of a protobuf RPC service that consists of several protobuf metadata used in Skoola.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error_codes | [ErrorCodes](#core-v1-ErrorCodes) |  | possible error code that might be occurred when consuming the service method |
| error_examples | [ErrorExamples](#core-v1-ErrorExamples) |  | some examples for the error codes returned from the method |
| security | [Security](#core-v1-Security) |  | service security options |
| permission | [Permission](#core-v1-Permission) |  | custom method descriptor to document necessary permission |






<a name="core-v1-PathPrefixes"></a>

### PathPrefixes
PathPrefixes represents a path configurations for the service.
It will be used by API Gateway for routing configuration.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) | repeated |  |






<a name="core-v1-Permission"></a>

### Permission
Permission represents custom method descriptor to document necessary
permission required to do certain action on a resource in a domain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| domain | [string](#string) |  | domain which belongs to this method |
| resource | [string](#string) |  | resource that is to be accessed |
| action | [string](#string) |  | permission action, e.g. create, list, read, delete |






<a name="core-v1-Security"></a>

### Security
Security represents service security options.
This is needed to differentiate between user token and client token


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token_type | [string](#string) |  | specify type of accepted token possible values: user, client |
| introspected | [bool](#bool) |  | whether this endpoint requires token introspection https://datatracker.ietf.org/doc/html/rfc7662 |






<a name="core-v1-ServiceDescriptor"></a>

### ServiceDescriptor
ServiceDescriptor represents annotation on the protobuf RPC service that consists of several protobuf metadata used in Skoola.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| possible_error_codes | [ErrorCodes](#core-v1-ErrorCodes) |  | all possible error codes that might be returned from the service. |
| common_error_codes | [ErrorCodes](#core-v1-ErrorCodes) |  | error codes that are common to all methods inside a service, so no need to redefine in the method level |
| error_examples | [ErrorExamples](#core-v1-ErrorExamples) |  | some examples of the error codes defined in the service |
| path_prefixes | [PathPrefixes](#core-v1-PathPrefixes) |  | path configurations that will be used by API Gateway for routing requests to the domains. |
| operation_type | [string](#string) |  | operation type of the API, e.g. &#34;buka_api&#34;, or a &#34;partner_webhook&#34;, to tell when to enforce API standard |





 

 

 

 



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

