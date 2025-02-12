# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/mail/v1/shared/mail.proto](#modules_mail_v1_shared_mail-proto)
    - [Mail](#modules-mail-v1-shared-Mail)
  
- [modules/mail/v1/shared/mail_inbox.proto](#modules_mail_v1_shared_mail_inbox-proto)
    - [CreateMailInboxRequest](#modules-mail-v1-shared-CreateMailInboxRequest)
    - [CreateMailInboxResponse](#modules-mail-v1-shared-CreateMailInboxResponse)
    - [DeleteMailInboxRequest](#modules-mail-v1-shared-DeleteMailInboxRequest)
    - [DeleteMailInboxResponse](#modules-mail-v1-shared-DeleteMailInboxResponse)
    - [GetMailInboxRequest](#modules-mail-v1-shared-GetMailInboxRequest)
    - [GetMailInboxResponse](#modules-mail-v1-shared-GetMailInboxResponse)
  
- [modules/mail/v1/shared/mail_outgoing.proto](#modules_mail_v1_shared_mail_outgoing-proto)
    - [DeleteSentMailRequest](#modules-mail-v1-shared-DeleteSentMailRequest)
    - [DeleteSentMailResponse](#modules-mail-v1-shared-DeleteSentMailResponse)
    - [GetMailOutgoingRequest](#modules-mail-v1-shared-GetMailOutgoingRequest)
    - [GetMailOutgoingResponse](#modules-mail-v1-shared-GetMailOutgoingResponse)
  
- [modules/mail/v1/shared/mail_send.proto](#modules_mail_v1_shared_mail_send-proto)
    - [SendMailRequest](#modules-mail-v1-shared-SendMailRequest)
    - [SendMailResponse](#modules-mail-v1-shared-SendMailResponse)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_mail_v1_shared_mail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail.proto



<a name="modules-mail-v1-shared-Mail"></a>

### Mail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| no_ref | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| from | [string](#string) |  |  |
| mail_type | [string](#string) |  |  |
| mail_subject | [string](#string) |  |  |





 

 

 

 



<a name="modules_mail_v1_shared_mail_inbox-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail_inbox.proto



<a name="modules-mail-v1-shared-CreateMailInboxRequest"></a>

### CreateMailInboxRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_ref | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| from | [string](#string) |  |  |
| to | [string](#string) | repeated |  |
| mail_type | [string](#string) |  |  |
| mail_subject | [string](#string) |  |  |






<a name="modules-mail-v1-shared-CreateMailInboxResponse"></a>

### CreateMailInboxResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-mail-v1-shared-DeleteMailInboxRequest"></a>

### DeleteMailInboxRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-mail-v1-shared-DeleteMailInboxResponse"></a>

### DeleteMailInboxResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-mail-v1-shared-GetMailInboxRequest"></a>

### GetMailInboxRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| page | [uint32](#uint32) |  |  |
| size | [uint32](#uint32) |  |  |






<a name="modules-mail-v1-shared-GetMailInboxResponse"></a>

### GetMailInboxResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mails | [Mail](#modules-mail-v1-shared-Mail) | repeated |  |





 

 

 

 



<a name="modules_mail_v1_shared_mail_outgoing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail_outgoing.proto



<a name="modules-mail-v1-shared-DeleteSentMailRequest"></a>

### DeleteSentMailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-mail-v1-shared-DeleteSentMailResponse"></a>

### DeleteSentMailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-mail-v1-shared-GetMailOutgoingRequest"></a>

### GetMailOutgoingRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| page | [uint32](#uint32) |  |  |
| size | [uint32](#uint32) |  |  |






<a name="modules-mail-v1-shared-GetMailOutgoingResponse"></a>

### GetMailOutgoingResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mails | [Mail](#modules-mail-v1-shared-Mail) | repeated |  |





 

 

 

 



<a name="modules_mail_v1_shared_mail_send-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail_send.proto



<a name="modules-mail-v1-shared-SendMailRequest"></a>

### SendMailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_ref | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| from | [string](#string) |  |  |
| to | [string](#string) | repeated |  |
| mail_type | [string](#string) |  |  |
| mail_subject | [string](#string) |  |  |






<a name="modules-mail-v1-shared-SendMailResponse"></a>

### SendMailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 

 



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

