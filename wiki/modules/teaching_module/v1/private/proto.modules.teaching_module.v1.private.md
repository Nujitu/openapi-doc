# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/teaching_module/v1/private/folder_task.proto](#modules_teaching_module_v1_private_folder_task-proto)
    - [DeleteFolderTaskRequest](#modules-teaching_module-v1-private-DeleteFolderTaskRequest)
    - [DeleteFolderTaskResponse](#modules-teaching_module-v1-private-DeleteFolderTaskResponse)
    - [InsertFolderTaskRequest](#modules-teaching_module-v1-private-InsertFolderTaskRequest)
    - [InsertFolderTaskResponse](#modules-teaching_module-v1-private-InsertFolderTaskResponse)
  
    - [FolderTaskService](#modules-teaching_module-v1-private-FolderTaskService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_teaching_module_v1_private_folder_task-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/teaching_module/v1/private/folder_task.proto



<a name="modules-teaching_module-v1-private-DeleteFolderTaskRequest"></a>

### DeleteFolderTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_id | [string](#string) |  |  |
| task_id | [string](#string) |  |  |






<a name="modules-teaching_module-v1-private-DeleteFolderTaskResponse"></a>

### DeleteFolderTaskResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-teaching_module-v1-private-InsertFolderTaskRequest"></a>

### InsertFolderTaskRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| folder_task | [modules.teaching_modules.v1.shared.FolderTask](#modules-teaching_modules-v1-shared-FolderTask) |  |  |






<a name="modules-teaching_module-v1-private-InsertFolderTaskResponse"></a>

### InsertFolderTaskResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="modules-teaching_module-v1-private-FolderTaskService"></a>

### FolderTaskService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| InsertFolderTask | [InsertFolderTaskRequest](#modules-teaching_module-v1-private-InsertFolderTaskRequest) | [InsertFolderTaskResponse](#modules-teaching_module-v1-private-InsertFolderTaskResponse) |  |
| DeleteFolderTask | [DeleteFolderTaskRequest](#modules-teaching_module-v1-private-DeleteFolderTaskRequest) | [DeleteFolderTaskResponse](#modules-teaching_module-v1-private-DeleteFolderTaskResponse) |  |

 



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

