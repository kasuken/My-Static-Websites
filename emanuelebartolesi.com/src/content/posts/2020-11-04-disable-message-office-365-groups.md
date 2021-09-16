---
template: blog-post
title: How to disable welcome message from Office 365 groups
slug: disable-message-office-365-groups
date: '2020-11-04T20:44:06.133Z'
description: How to disable welcome message from Office 365 groups
featuredImage: /assets/archive/zkzau6wscdylkpbbhd10.png
---
Keep this post short and productive.
Request from customer: "I want to disable the welcome message for Office 365 groups in my tenant."
Solution:

The only way to remove the welcome message is connect to Exchange Online with PowerShell.
First of all you have to install the PowerShell module "ExchangeOnlineManagement".

```powershell
Install-Module -Name ExchangeOnlineManagement
```

Now you can connect to Exchange Online with this command:

```powershell
Connect-ExchangeOnline -UserPrincipalName "<YOUR UPN>" -ShowProgress $true
```

When you are connected you can disable the welcome message for the Office 365 (and other settings) with the following command:

```powershell
Set-UnifiedGroup $group.Identity -AlwaysSubscribeMembersToCalendarEvents:$false -AutoSubscribeNewMembers:$false  -SubscriptionEnabled:$false -UnifiedGroupWelcomeMessageEnabled:$false
```

You can disable the welcome message for all the Office 365 Groups in your tenant with the script below:

```powershell
Connect-ExchangeOnline -UserPrincipalName <YOUR UPN> -ShowProgress $true

#$O365Groups = Get-UnifiedGroup | Where-Object { $_.WelcomeMessageEnabled -eq $true }
$O365Groups = Get-UnifiedGroup

foreach ($group in $O365Groups) {
    Write-Host "Disabling Welcome Message on O365 Group: " -NoNewline; Write-Host $group.DisplayName -ForegroundColor Cyan
    Set-UnifiedGroup $group.Identity -AlwaysSubscribeMembersToCalendarEvents:$false -AutoSubscribeNewMembers:$false  -SubscriptionEnabled:$false -UnifiedGroupWelcomeMessageEnabled:$false
}

Disconnect-ExchangeOnline
```
