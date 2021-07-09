

NA
Products
Resources
My Applications
Sign In
Commercial Digital Experiences
Users
Request Sample
Select Method
Retrieves information about an existing user on the Digital Commercial application.
Get Shareable Link
Request URL
/issuing/business/digital/userdetails
Request
Header Parameters
AuthorizationRequired
A combination of the unique Access Id and the HMAC Signature.
Header Parameters
Authorization: Bearer <API KEY>
Content-Type: application/json
Accept: application/json
Body Parameters
userNamestring
Username the user has entered when they sign into the application.
Body Parameters
userName: string
Response
BodyExpand All
firstNamestring
First name of the user.
lastNamestring
Last name of the user.
emailAddressobject
Container for the user’s email address information.
businessUnitNumberstring
Number of the business unit the user will belong to, such as "00000006" for a unit or corporation and "1940" for a bank.
businessUnitAccessarray
Container for information about the business unit access.
userAccessarray
Container for information about the user’s access levels.
userNamestring
Username the user has entered when they sign into the application.
creditCardAccessarray
Container for information about the user’s credit card access.
cellNumberstring
Mobile phone number of the user.
Body
firstName: string
lastName: string
emailAddress: 
cc: string
default: string
bcc: string
businessUnitNumber: string
businessUnitAccess: 
businessUnitNumber: string
securityProfile: string
approvalProfile: string
includeSubunits: boolean
userAccess: 
userName: string
securityProfile: string
approvalProfile: string
userName: string
creditCardAccess: 
isOwner: boolean
securityProfile: string
cardNumber: string
cellNumber: string
Response Status
200
OK
400
Bad Request
401
Unauthorized
403
Forbidden
404
Not Found
422
Unprocessable Entity
Test Scenarios
Select Scenario
Header Parameters
Authorization
TSYS
Path Parameters
Body Parameters
{
    "userName": "UserMultipleUser"
}
Quick Links
Get Started
APIs
Resources
My Application
Sign In
Corporate
About Us
Careers
Terms and Conditions
Privacy Policy

One TSYS Way
Columbus, GA. 31901-4222
+1.844.663.8797 tel
©2021 Total System Services LLC. TSYS® is a federally registered service mark of Total System Services LLC. All rights reserved. TSYS Merchant Solutions is a registered ISO/MSP of Wells Fargo Bank, N.A., Concord, CA; Synovus Bank, Columbus, GA, First National Bank of Omaha, Omaha, NE; and Deutsche Bank, New York, NY for Visa and Mastercard transactions only.