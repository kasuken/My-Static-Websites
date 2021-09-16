---
template: blog-post
title: Use an Azure Function to clean up your Azure Resources
slug: azure-function-clean-azure-resources
date: '2020-01-16T20:44:06.133Z'
description: Use an Azure Function to clean up your Azure Resources
featuredImage: /assets/archive/r8ks5sb6ib8ejyv29dmq.png
---
Every day, as a developer, I create a lot of resources on the cloud (in my case Azure) for developing/test purposes.
And every day I lost some time to remove everything and sometimes I forget something.

Azure doesn't have anything out-of-the-box to mark some resource as "temporary" or to set an expiry date but I found some scripts on the web and with my solution I have tried to create a solution which fits with my goal: deleted all resources marked as "expired" on a certain date and time.

## PowerShell Azure Function and Visual Studio Code
According to my developer background, I decided to create an Azure Function (with PowerShell) with Visual Studio Code.
First of all, you need to install the extension to work with the Azure Functions.
You can find the extension directly on the marketplace: [https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions).
After the installation, you are able to create Azure Function and deploy them directly from Visual Studio Code.

From the command palette, start to write "Create Function" and click on the first entry.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/1lopql6efa6d8bpzoht3.PNG)

In the next steps, choose "PowerShell" and for the template, you have to choose "Timer Trigger".
Type a function name like "AzureResourcesCleaner" and set the cron expression select your favorite time of the day.
For instance, I set 6:00 AM in the morning with this cron expression: "0 0 6 * * *".

Now you have to go in the folder with the name of the function and replace the content of the file run.ps1 with the following piece of code:


```powershell
param($Timer)

$currentUTCtime = (Get-Date).ToUniversalTime()

$expiredResources = Search-AzGraph -Query 'where todatetime(tags.expireOn) < now() | project id, name'

foreach ($r in $expiredResources) {
    Write-Host "==> Deleting  $($r.name)...";
    Remove-AzResource -ResourceId $r.id -Force -WhatIf
}

$expiredResources = Get-AzResourceGroup;

foreach ($resourceGroup in $expiredResources) {
    $count = (Get-AzResource | Where-Object { $_.ResourceGroupName -match $resourceGroup.ResourceGroupName }).Count;
    if ($count -eq 0) {
        Write-Host "==> $($resourceGroup.ResourceGroupName) is empty. Deleting it...";
        Remove-AzResourceGroup -Name $resourceGroup.ResourceGroupName -Force -WhatIf
    }
}

$expiredResources = Get-AzResourceGroup | Where-Object { $_.Tags.expireOn -and [DateTime] $_.Tags.expireOn -lt $currentUTCtime }

Foreach ($resourceGroup in $expiredResources) {
    Write-Host "==> $($resourceGroup.ResourceGroupName) is expired. Deleting it..."
    Remove-AzResourceGroup -Name $resourceGroup.ResourceGroupName -Force -WhatIf
}

# Write an information log with the current time.
Write-Host "Azure Resources Cleaner ran at : $currentUTCtime"
```

The script is very simple.
It deletes all the resources with the tag "expiresOn" set in the past.
It deletes the empty resource groups, as well.
And it deletes also the resource groups expired with a value the tag "expiresOn" set in the past, of course.

(I added the parameter -WhatIf on each "remove" call to simulate the resource removal.
Remove it for the real removal operation.)

If you analyze the code, at the line 5, I use the AzGraph modules.
By default this module is not installed on the Azure Functions environment on Azure but you can add your external modules very easily.
Create a folder in the root of the project called "modules" and copy the modules called: Az.ResourceGraph and Az.Accounts to this folder.
If you don't have these modules installed on your machine, you can install them with the command below:

```powershell
Install-Module -Name Az.ResourceGraph
Install-Module -Name Az.Accounts
```

If you don't want install the modules, you can take them from my repository on GitHub.

## Publish the function on Azure
We are almost at the end.
From the command palette you can choose the command "Deploy to a Function App" or from the command bar you can click on the Azure Functions icon and click on the button on the top of it with the arrow icon.

When prompt, create a Web App and wait one or two minutes.

When the app is deployed, go to the Azure Portal and select your Azure Functions App.
From the **Platform features**, click on **Identity** and turn on the status toggle.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/cm6yl9e6mifieobup29o.PNG)

Finally, we are at the latest step!
We have to allow the Azure Function to access to the Subscription resources.
In order to do that, from the Azure Portal, select **Subscriptions**, and then from the **Access Control (IAM)**, select Add -> Role assignment.
From the dropdown role select **Contributor** and search for your Azure Function name in the text box below.
Click on save and wait until your timer is triggered. :)

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/qfi4tetbahtidrizctrj.PNG)

## Conclusion
There are many solutions to achieve this goal, but I find this way very easy to implement and also from a maintenance point of view.
You can find the source code on my GitHub repository: [https://github.com/kasuken/AzureResourcesCleaner](https://github.com/kasuken/AzureResourcesCleaner)
