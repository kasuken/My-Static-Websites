---
template: blog-post
title: 'Start, Restart and Stop Azure VM from Azure CLI'
slug: start-restart-stop-azure-vm-azure-cli
date: '2019-11-13T20:44:06.133Z'
description: 'Start, Restart and Stop Azure VM from Azure CLI'
featuredImage: /assets/archive/9bcy3i6jc69tgxh8hhgu.png
---
As a developer sometimes I have to use several virtual machines to develop my projects.
My machines, of course, live and run on Azure.
Every time I have to log in on Azure Portal, find the resource group, find the VM, click on "Start" and wait a few minutes to connect to my VM.

The best solution I found is using Azure CLI.

## Install Azure CLI

The Azure CLI is a command-line tool for managing Azure resources from Windows, Mac and Linux (Docker, WSL as well).

The current version is 2.0.76.

### Install on Windows
To install Azure CLI on Windows is very easy.
You can use [this link](https://aka.ms/installazurecliwindows) to download the installer or you can launch this PowerShell script with administrator rights:

```powershell
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'
```

## Install on Mac
To install Azure CLI on Mac, you need [homebrew](https://docs.brew.sh/Installation.html).
From a terminal you can launch this command:
```
brew update && brew install azure-cli
```

## Install on others OS
You can find the full list of supported platform here: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

## Check the installation
To check if Azure CLI is running and the version, you can use this command from a terminal.
```powershell
az --version
```

At the moment my favorite terminal app is [Windows Terminal](https://dev.to/expertsinside/how-to-customize-the-new-windows-terminal-with-visual-studio-code-56b1)

## Sign in
The login command is

```powershell
az login
```

This is an interactive method and you have to open a browser and navigate to this url: https://aka.ms/devicelogin.
Enter the authorization code displayed in the terminal and then the credentials for your Azure Tenant.
In the next terminal session you can use this tenant or you can add more tenants.
I like this feature.

## Start a VM
To start a VM you can use the command below:
```powershell
az vm start -g MyResourceGroup -n MyVm
```
You have to change the parameter -g (or --resource-group) with your value.
Same for -n (or --name) with the name of your VM.

You can start all VMs in a resource group with the command below.
```powershell
az vm start --ids $(az vm list -g MyResourceGroup --query "[].id" -o tsv)
```

If you don't want to wait the end of the operation, you can add the parameter --no-wait to your commands.

## Stop a VM
Command is very similar to the start command:
```powershell
az vm stop -g MyResourceGroup -n MyVm
```

## Restart a VM
Same for the restarting command
```powershell
az vm restart -g MyResourceGroup -n MyVm
```

## Conclusion
With Azure CLI you can manage all resources in Azure and you can do it with cross-platform experience.
You can find the full documentation here: https://docs.microsoft.com/en-us/cli/azure
