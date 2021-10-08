---
template: blog-post
title: How I rebuilt my development machine(s) in 30 minutes
slug: how-i-rebuilt-my-development-machine(s)-in-30-minutes
description: 
author: Emanuele Bartolesi
date: '2021-10-08T12:05:50.190Z'
lastmod: 2019-08-22T15:20:28.000Z
featuredImage: /assets/2021/IMG_1111.jpg
---

Tuesday 5th October 2021 was the Windows 11 launch day.
Honestly I was excited about this new OS version and I don't feel like this since the release of Windows XP (more or less).
I used for the first time in my life a preview of an operative system on my main development machine.
But Microsoft have spoken "No way to update a preview to the stable", so, I have to recreate my dev machine from scratch.

<div style="text-align:center">
  <img src="https://c.tenor.com/9TLIL9m40n4AAAAM/kuill-ihave-spoken.gif" />
</p>

# Installing Boxstarter

Boxstarter leverages Chocolatey packages to automate the installation of software and create repeatable, scripted Windows environments.
It's a big advantage if you need to install software very quickly and on multiple machines. Especially if you want to have the same software with the same settings everywhere.

You have a lot of way to install BoxStarter locally, but my favorite way is installing it from a zip file.
At this link [https://github.com/chocolatey/boxstarter/releases](https://github.com/chocolatey/boxstarter/releases) you can find the latest release of BoxStarter.
Download it and put it on a temporary folder.

Unzip the folder and launch the file **setup.bat**

![](https://boxstarter.org/Images/setup.png)

After less than 1 minute, you have BoxStarter installed on your machine.

You can also install BoxStarter directly from the web with this PowerShell Script.
PowerShell is included on Windows 11 with the awesome Windows Terminal.

````
  Set-ExecutionPolicy Bypass -Scope Process -Force;
  [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
  iex ((New-Object System.Net.WebClient).DownloadString('https://boxstarter.org/bootstrapper.ps1'));
  Get-Boxstarter -Force
````

# Create a package for BoxStarter and how to use it
To create a BoxStarter is really easy and quick.
Considering that BoxStarter is based on Chocolatey, you can use the same syntax and the same package from it.

The easy and the best way to find the packages for your software is going on the Chocolatey official site and looking for your favorite softwares.
You can search in all library here: [https://community.chocolatey.org/packages](https://community.chocolatey.org/packages).

Now you can copy and paste the the code directly from there.

If you want to speed up your installation on multiple machines and, first of all, have a backup of your script (and versioning) you can save it direcly on a Gist ([https://gist.github.com](https://gist.github.com)).

![](/assets/2021/Screenshot 2021-10-08 152020.png)

After saving the Gist, click on "View Raw" and copy the link from the address bar.
You can choose the extension that you prefer. I use very often the extension ".ps1".

Now you can open a terminal on your machine and launch the command below:

````
Install-BoxstarterPackage -PackageName https://gist.github.com/mwrock/7382880/raw/f6525387b4b524b8eccef6ed4d5ec219c82c0ac7/gistfile1.txt -DisableReboots
````

# Conclusion

If you need a starting point, I have created this script for my new Windows 11 installation.
You can fork it and create your own version.

[https://gist.github.com/kasuken/880d474d9afc0a3b7903774202f3c1ef](https://gist.github.com/kasuken/880d474d9afc0a3b7903774202f3c1ef)