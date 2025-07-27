# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/mail/v1/shared/mail.proto](#modules_mail_v1_shared_mail-proto)
    - [EmailTemplate](#modules-mail-v1-shared-EmailTemplate)
    - [EmailTemplate.MetadataEntry](#modules-mail-v1-shared-EmailTemplate-MetadataEntry)
    - [Mail](#modules-mail-v1-shared-Mail)
  
- [modules/mail/v1/shared/mail_inbox.proto](#modules_mail_v1_shared_mail_inbox-proto)
    - [CreateMailInboxRequest](#modules-mail-v1-shared-CreateMailInboxRequest)
    - [CreateMailInboxResponse](#modules-mail-v1-shared-CreateMailInboxResponse)
    - [DeleteMailInboxRequest](#modules-mail-v1-shared-DeleteMailInboxRequest)
    - [DeleteMailInboxResponse](#modules-mail-v1-shared-DeleteMailInboxResponse)
    - [GetMailInboxByIdRequest](#modules-mail-v1-shared-GetMailInboxByIdRequest)
    - [GetMailInboxByIdResponse](#modules-mail-v1-shared-GetMailInboxByIdResponse)
    - [ListMailInboxRequest](#modules-mail-v1-shared-ListMailInboxRequest)
    - [ListMailInboxResponse](#modules-mail-v1-shared-ListMailInboxResponse)
  
- [modules/mail/v1/shared/mail_outgoing.proto](#modules_mail_v1_shared_mail_outgoing-proto)
    - [DeleteSentMailRequest](#modules-mail-v1-shared-DeleteSentMailRequest)
    - [DeleteSentMailResponse](#modules-mail-v1-shared-DeleteSentMailResponse)
    - [GetMailOutgoingByIdRequest](#modules-mail-v1-shared-GetMailOutgoingByIdRequest)
    - [GetMailOutgoingByIdResponse](#modules-mail-v1-shared-GetMailOutgoingByIdResponse)
    - [ListMailOutgoingRequest](#modules-mail-v1-shared-ListMailOutgoingRequest)
    - [ListMailOutgoingResponse](#modules-mail-v1-shared-ListMailOutgoingResponse)
  
- [modules/mail/v1/shared/mail_send.proto](#modules_mail_v1_shared_mail_send-proto)
    - [CreateEmailTemplateRequest](#modules-mail-v1-shared-CreateEmailTemplateRequest)
    - [CreateEmailTemplateRequest.MetadataEntry](#modules-mail-v1-shared-CreateEmailTemplateRequest-MetadataEntry)
    - [CreateEmailTemplateResponse](#modules-mail-v1-shared-CreateEmailTemplateResponse)
    - [GetEmailTemplateRequest](#modules-mail-v1-shared-GetEmailTemplateRequest)
    - [GetEmailTemplateResponse](#modules-mail-v1-shared-GetEmailTemplateResponse)
    - [SendEmailTemplateRequest](#modules-mail-v1-shared-SendEmailTemplateRequest)
    - [SendEmailTemplateRequest.MetadataEntry](#modules-mail-v1-shared-SendEmailTemplateRequest-MetadataEntry)
    - [SendEmailTemplateResponse](#modules-mail-v1-shared-SendEmailTemplateResponse)
    - [SendMailRequest](#modules-mail-v1-shared-SendMailRequest)
    - [SendMailResponse](#modules-mail-v1-shared-SendMailResponse)
  
- [modules/mail/v1/shared/uploader.proto](#modules_mail_v1_shared_uploader-proto)
    - [CreateMailModulePresignedPostUrlRequest](#modules-mail-v1-shared-CreateMailModulePresignedPostUrlRequest)
    - [CreateMailModulePresignedPostUrlResponse](#modules-mail-v1-shared-CreateMailModulePresignedPostUrlResponse)
    - [Uploader](#modules-mail-v1-shared-Uploader)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_mail_v1_shared_mail-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail.proto



<a name="modules-mail-v1-shared-EmailTemplate"></a>

### EmailTemplate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| template_name | [string](#string) |  |  |
| content | [string](#string) |  |  |
| metadata | [EmailTemplate.MetadataEntry](#modules-mail-v1-shared-EmailTemplate-MetadataEntry) | repeated |  |
| created_at | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |






<a name="modules-mail-v1-shared-EmailTemplate-MetadataEntry"></a>

### EmailTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






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
| attachments | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| instance_id | [string](#string) |  |  |





 

 

 

 



<a name="modules_mail_v1_shared_mail_inbox-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail_inbox.proto



<a name="modules-mail-v1-shared-CreateMailInboxRequest"></a>

### CreateMailInboxRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_ref | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| sender_name | [string](#string) |  |  |
| receiver_user_ids | [string](#string) | repeated |  |
| mail_type | [string](#string) |  |  |
| mail_subject | [string](#string) |  |  |
| attachments | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| instance_id | [string](#string) |  |  |






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






<a name="modules-mail-v1-shared-GetMailInboxByIdRequest"></a>

### GetMailInboxByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-mail-v1-shared-GetMailInboxByIdResponse"></a>

### GetMailInboxByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mail | [Mail](#modules-mail-v1-shared-Mail) |  |  |






<a name="modules-mail-v1-shared-ListMailInboxRequest"></a>

### ListMailInboxRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| receiver_user_id | [string](#string) | optional |  |
| instance_id | [string](#string) | optional |  |
| admin | [bool](#bool) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-mail-v1-shared-ListMailInboxResponse"></a>

### ListMailInboxResponse



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






<a name="modules-mail-v1-shared-GetMailOutgoingByIdRequest"></a>

### GetMailOutgoingByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |






<a name="modules-mail-v1-shared-GetMailOutgoingByIdResponse"></a>

### GetMailOutgoingByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mail | [Mail](#modules-mail-v1-shared-Mail) |  |  |






<a name="modules-mail-v1-shared-ListMailOutgoingRequest"></a>

### ListMailOutgoingRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| receiver_user_id | [string](#string) | optional |  |
| instance_id | [string](#string) | optional |  |
| admin | [bool](#bool) | optional |  |
| sort | [string](#string) |  |  |
| limit | [uint32](#uint32) |  |  |
| offset | [uint32](#uint32) |  |  |






<a name="modules-mail-v1-shared-ListMailOutgoingResponse"></a>

### ListMailOutgoingResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mails | [Mail](#modules-mail-v1-shared-Mail) | repeated |  |





 

 

 

 



<a name="modules_mail_v1_shared_mail_send-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/mail_send.proto



<a name="modules-mail-v1-shared-CreateEmailTemplateRequest"></a>

### CreateEmailTemplateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| template_name | [string](#string) |  |  |
| metadata | [CreateEmailTemplateRequest.MetadataEntry](#modules-mail-v1-shared-CreateEmailTemplateRequest-MetadataEntry) | repeated |  |






<a name="modules-mail-v1-shared-CreateEmailTemplateRequest-MetadataEntry"></a>

### CreateEmailTemplateRequest.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="modules-mail-v1-shared-CreateEmailTemplateResponse"></a>

### CreateEmailTemplateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |
| email_template | [EmailTemplate](#modules-mail-v1-shared-EmailTemplate) |  |  |






<a name="modules-mail-v1-shared-GetEmailTemplateRequest"></a>

### GetEmailTemplateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| template_name | [string](#string) |  |  |






<a name="modules-mail-v1-shared-GetEmailTemplateResponse"></a>

### GetEmailTemplateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email_template | [EmailTemplate](#modules-mail-v1-shared-EmailTemplate) |  |  |






<a name="modules-mail-v1-shared-SendEmailTemplateRequest"></a>

### SendEmailTemplateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| template_name | [string](#string) |  |  |
| metadata | [SendEmailTemplateRequest.MetadataEntry](#modules-mail-v1-shared-SendEmailTemplateRequest-MetadataEntry) | repeated |  |
| recepients | [string](#string) | repeated |  |
| cc | [string](#string) | repeated |  |
| bcc | [string](#string) | repeated |  |






<a name="modules-mail-v1-shared-SendEmailTemplateRequest-MetadataEntry"></a>

### SendEmailTemplateRequest.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="modules-mail-v1-shared-SendEmailTemplateResponse"></a>

### SendEmailTemplateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="modules-mail-v1-shared-SendMailRequest"></a>

### SendMailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_ref | [string](#string) |  |  |
| date | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| sender_user_id | [string](#string) |  |  |
| receiver_user_ids | [string](#string) | repeated |  |
| mail_type | [string](#string) |  |  |
| mail_subject | [string](#string) |  |  |
| attachments | [common.v1.AttachmentFile](#common-v1-AttachmentFile) | repeated |  |
| instance_id | [string](#string) |  |  |






<a name="modules-mail-v1-shared-SendMailResponse"></a>

### SendMailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 

 



<a name="modules_mail_v1_shared_uploader-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/shared/uploader.proto



<a name="modules-mail-v1-shared-CreateMailModulePresignedPostUrlRequest"></a>

### CreateMailModulePresignedPostUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [Uploader](#modules-mail-v1-shared-Uploader) |  |  |






<a name="modules-mail-v1-shared-CreateMailModulePresignedPostUrlResponse"></a>

### CreateMailModulePresignedPostUrlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| presignedUrls | [common.v1.S3PresignedUrlResponse](#common-v1-S3PresignedUrlResponse) |  |  |






<a name="modules-mail-v1-shared-Uploader"></a>

### Uploader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_name | [string](#string) |  |  |
| file_size | [uint64](#uint64) |  |  |





 

 

 

 



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

