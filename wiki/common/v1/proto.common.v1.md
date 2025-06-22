# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [common/v1/error.proto](#common_v1_error-proto)
    - [ErrorInfo](#common-v1-ErrorInfo)
    - [ErrorResponse](#common-v1-ErrorResponse)
  
- [common/v1/meta.proto](#common_v1_meta-proto)
    - [AsyncMetadata](#common-v1-AsyncMetadata)
    - [CursorPagination](#common-v1-CursorPagination)
    - [OffsetPagination](#common-v1-OffsetPagination)
    - [ResponseMetadata](#common-v1-ResponseMetadata)
  
- [common/v1/s3.proto](#common_v1_s3-proto)
    - [S3PresignedUrlRequest](#common-v1-S3PresignedUrlRequest)
    - [S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse)
    - [S3PresignedValues](#common-v1-S3PresignedValues)
  
- [common/v1/type.proto](#common_v1_type-proto)
    - [AttachmentFile](#common-v1-AttachmentFile)
    - [Dict](#common-v1-Dict)
    - [KeyArrayValues](#common-v1-KeyArrayValues)
    - [NullableAttachmentFile](#common-v1-NullableAttachmentFile)
  
- [Scalar Value Types](#scalar-value-types)



<a name="common_v1_error-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common/v1/error.proto



<a name="common-v1-ErrorInfo"></a>

### ErrorInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| code | [string](#string) |  |  |
| field | [string](#string) |  |  |






<a name="common-v1-ErrorResponse"></a>

### ErrorResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| errors | [ErrorInfo](#common-v1-ErrorInfo) | repeated |  |





 

 

 

 



<a name="common_v1_meta-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common/v1/meta.proto



<a name="common-v1-AsyncMetadata"></a>

### AsyncMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| request_id | [string](#string) |  |  |
| event_id | [string](#string) |  |  |
| client_id | [string](#string) |  |  |
| actor_id | [string](#string) |  |  |
| source_ip | [string](#string) |  |  |
| service_name | [string](#string) |  |  |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| tenant_id | [string](#string) |  |  |
| idempotency_key | [string](#string) |  |  |






<a name="common-v1-CursorPagination"></a>

### CursorPagination



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| limit | [uint32](#uint32) |  |  |
| next_cursor | [string](#string) |  |  |
| prev_cursor | [string](#string) |  |  |
| curr_cursor | [string](#string) |  |  |






<a name="common-v1-OffsetPagination"></a>

### OffsetPagination



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |
| total | [uint32](#uint32) |  |  |






<a name="common-v1-ResponseMetadata"></a>

### ResponseMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| offset_pagination | [OffsetPagination](#common-v1-OffsetPagination) |  |  |
| cursor_pagination | [CursorPagination](#common-v1-CursorPagination) |  |  |





 

 

 

 



<a name="common_v1_s3-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common/v1/s3.proto



<a name="common-v1-S3PresignedUrlRequest"></a>

### S3PresignedUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filename | [string](#string) |  |  |
| filesize | [uint64](#uint64) |  |  |






<a name="common-v1-S3PresignedUrlResponse"></a>

### S3PresignedUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) |  |  |
| values | [S3PresignedValues](#common-v1-S3PresignedValues) |  |  |






<a name="common-v1-S3PresignedValues"></a>

### S3PresignedValues



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| X_Amz_Algorithm | [string](#string) |  |  |
| X_Amz_Credential | [string](#string) |  |  |
| X_Amz_Date | [string](#string) |  |  |
| X_Amz_Signature | [string](#string) |  |  |
| key | [string](#string) |  |  |
| policy | [string](#string) |  |  |





 

 

 

 



<a name="common_v1_type-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## common/v1/type.proto



<a name="common-v1-AttachmentFile"></a>

### AttachmentFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| display_name | [string](#string) |  |  |
| unique_name | [string](#string) |  |  |
| file_extension | [string](#string) |  |  |
| file_size | [uint64](#uint64) |  |  |
| link | [string](#string) |  |  |






<a name="common-v1-Dict"></a>

### Dict



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="common-v1-KeyArrayValues"></a>

### KeyArrayValues



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [Dict](#common-v1-Dict) | repeated |  |






<a name="common-v1-NullableAttachmentFile"></a>

### NullableAttachmentFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_null | [bool](#bool) |  |  |
| file | [AttachmentFile](#common-v1-AttachmentFile) |  |  |





 

 

 

 



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

