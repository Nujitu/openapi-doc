# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [modules/mail/v1/public/mail_inbox.proto](#modules_mail_v1_public_mail_inbox-proto)
    - [MailInboxService](#modules-mail-v1-public-MailInboxService)
  
- [modules/mail/v1/public/mail_outgoing.proto](#modules_mail_v1_public_mail_outgoing-proto)
    - [MailOutgoingService](#modules-mail-v1-public-MailOutgoingService)
  
- [modules/mail/v1/public/mail_send.proto](#modules_mail_v1_public_mail_send-proto)
    - [SendMailService](#modules-mail-v1-public-SendMailService)
  
- [modules/mail/v1/public/uploader.proto](#modules_mail_v1_public_uploader-proto)
    - [MailUploaderService](#modules-mail-v1-public-MailUploaderService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="modules_mail_v1_public_mail_inbox-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/public/mail_inbox.proto


 

 

 


<a name="modules-mail-v1-public-MailInboxService"></a>

### MailInboxService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateMailInbox | [.modules.mail.v1.shared.CreateMailInboxRequest](#modules-mail-v1-shared-CreateMailInboxRequest) | [.modules.mail.v1.shared.CreateMailInboxResponse](#modules-mail-v1-shared-CreateMailInboxResponse) |  |
| GetMailInbox | [.modules.mail.v1.shared.GetMailInboxRequest](#modules-mail-v1-shared-GetMailInboxRequest) | [.modules.mail.v1.shared.GetMailInboxResponse](#modules-mail-v1-shared-GetMailInboxResponse) |  |
| DeleteMailInbox | [.modules.mail.v1.shared.DeleteMailInboxRequest](#modules-mail-v1-shared-DeleteMailInboxRequest) | [.modules.mail.v1.shared.DeleteMailInboxResponse](#modules-mail-v1-shared-DeleteMailInboxResponse) |  |

 



<a name="modules_mail_v1_public_mail_outgoing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/public/mail_outgoing.proto


 

 

 


<a name="modules-mail-v1-public-MailOutgoingService"></a>

### MailOutgoingService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetSentMail | [.modules.mail.v1.shared.GetMailOutgoingRequest](#modules-mail-v1-shared-GetMailOutgoingRequest) | [.modules.mail.v1.shared.GetMailOutgoingResponse](#modules-mail-v1-shared-GetMailOutgoingResponse) |  |
| DeleteSentMail | [.modules.mail.v1.shared.DeleteSentMailRequest](#modules-mail-v1-shared-DeleteSentMailRequest) | [.modules.mail.v1.shared.DeleteSentMailResponse](#modules-mail-v1-shared-DeleteSentMailResponse) |  |

 



<a name="modules_mail_v1_public_mail_send-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/public/mail_send.proto


 

 

 


<a name="modules-mail-v1-public-SendMailService"></a>

### SendMailService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendMail | [.modules.mail.v1.shared.SendMailRequest](#modules-mail-v1-shared-SendMailRequest) | [.modules.mail.v1.shared.SendMailResponse](#modules-mail-v1-shared-SendMailResponse) |  |

 



<a name="modules_mail_v1_public_uploader-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## modules/mail/v1/public/uploader.proto


 

 

 


<a name="modules-mail-v1-public-MailUploaderService"></a>

### MailUploaderService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateMailModulePresignedPostUrl | [.modules.mail.v1.shared.CreateMailModulePresignedPostUrlRequest](#modules-mail-v1-shared-CreateMailModulePresignedPostUrlRequest) | [.modules.mail.v1.shared.CreateMailModulePresignedPostUrlResponse](#modules-mail-v1-shared-CreateMailModulePresignedPostUrlResponse) |  |

 



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

