---
template: blog-post
title: From a Windows 10 clean installation to a Dev Environment in 30 minutes with Boxstarter
slug: windows-10-clean-installation-dev-environment-30-minutes-boxstarter
date: '2019-11-04T20:44:06.133Z'
description: From a Windows 10 clean installation to a Dev Environment in 30 minutes with Boxstarter
featuredImage: /assets/archive/bze9oaeckx5b1b5irulg.jpg
---
Setting up a development machine is always a big time-consuming task and every developer hates this activity.
But sometimes you have to do it because as a developer you have to install third-party software, beta releases, and other unstable pieces of stuff.

With Boxstarter I found a solution to solve this issue.
In almost one hour I have a dev machine up and running from a clean Windows installation.
It is also useful if you want to set up some virtual dev environment on the cloud.

## Install Boxstarter

PowerShell is installed by default on a clean installation of Windows 10, so you can easily open a new instance in a terminal and type this command:

```powershell
. { iwr -useb https://boxstarter.org/bootstrapper.ps1 } | iex; Get-Boxstarter -Force
```

This command will install Boxstarter directly from the web.

If you have some issues to run remote script from PowerShell, you can run the command below to enabling remote script on your machine:

```powershell
Set-ExecutionPolicy Unrestricted -Force
```

## Install your software from a gist

You have the best results with Boxstarter if you use a gist to store your machine setup.
For my purpose, I have this script below stored on gist.
The syntax is very simple.
The word "cinst" means "install this package" and you can find your favorite packages directly from the Chocolatey packages repository [https://chocolatey.org/packages](https://chocolatey.org/packages).
You have to use the Chocolatey packages because Boxstarter is built on top of it.

{% gist https://gist.github.com/kasuken/d5e2ce84a9108002e81603fc3d42e492 %}

To run this gist, you have to use this command in a PowerShell terminal window:

```powershell
Install-BoxstarterPackage -PackageName https://gist.githubusercontent.com/kasuken/d5e2ce84a9108002e81603fc3d42e492/raw/b5c5175ffa90c7665200a061db739a051abf0f74/devmachine.ps1 -DisableReboots
```

## Advanced settings

There are many advanced commands to customize Windows or install Windows features.
For example you can use these two commands below:

```powershell
cinst Microsoft-Hyper-V-All -source windowsFeatures
Install-ChocolateyPinnedTaskBarItem "$env:windir\system32\mstsc.exe"
```

The first one, install Hyper-V and you have to specify the source.
By default the source is Chocolatey but in this case, you force Boxstarter to use the source WindowsFeatures.
With the second one, you can pinned some apps or files to the taskbar directly.
I don't use this command because I like to do it manually after the overall installation.

Have a good Boxstarting!!!