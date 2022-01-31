---
template: blog-post
title: First steps with WinGet
slug: first-steps-with-winget-26po
description: null
author: Emanuele Bartolesi
date: '2021-12-08T09:30:49.000Z'
featuredImage: /assets/2022/6qblh7to9ora1rbylztp.jpg
---

At Microsoft Build 2021, Microsoft released the version 1.0 of Winget. This tool is a part of the new Windows Package Manager for Windows 10 and Windows 11.
You can use Winget from the command-line to discover new apps, install, update and remove them.

## Installation

If you are running Windows 11 or Windows 10 version 1809 or later, you don't need to install anything. It's shipped with the operative system as update and it's a part of Windows 11 default installation.

In the other cases, you can download it directly from this link: ms-appinstaller:?source=https://aka.ms/getwinget

## Search an application with Winget

To search for applications you can open your favorite terminal application (I use Windows Terminal and I love it) and type the command below:

```powershell
winget search spotify
```

In this case, obiously, winget are searching for spotify.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/al4ae4awed2t6mse0t2e.png) 

## Install an application

With the command below you can install an application

```powershell
winget install vscode
```

you can also you the silent mode with the following command

```powershell
winget install vscode -silent (or -h)
```

You don't see an external UI for the installation, but a progress bar appears directly in the console.
This is useful for automated installations of your machine (after a reset, for example).

(I will talk about automation in a paragraph below)

## List installed apps

It's very easy, you can have a list of all installed application on your machine:

```powershell
winget list
```

There is a column that specifies if the installation comes from winget or a "normal" installation.
Another column at the end of the table, indicates if the application has updates

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5h37hjrta9o3hj8l53gs.png)
 

## Update applications

Keep the applications up-to-date is important for having the latest features released from the developers but it's more important for the security of your machine.

```powershell
winget upgrade
``` 

if you want to update all the application directly you can use the following command:

```powershell
winget upgrade —all
``` 

You can also update a single application

```powershell
winget upgrade —id vs-code
``` 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdw4ux4rdcunltjydbvw.png)
 

## Export and import applications

This is my favorite features of winget. You can export all the installed application of an existing machine to another machine.
This is very useful if you want to have a kind of backup of your applications list and restore that backup in the another machine.

```powershell
winget export -o .\my-applications.json
``` 

You can set the path of the json file in a OneDrive directly, for instance. In this case you can access the latest version of the export everytime from another machine.

If you want to import the same list in an other machine:

```powershell
winget import -i .\my-applications.json
``` 

## Conclusion

In the past, as you know, I really loved Cholately or Boxstarter, but since a few months I am using only winget to have the same goals.