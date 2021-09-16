---
template: blog-post
title: 0365 CLI on Windows Terminal
slug: 0365-cli-windows-terminal
date: '2020-01-20T20:44:06.133Z'
description: 0365 CLI on Windows Terminal
featuredImage: /assets/archive/1tm8osglzp57ut24whzi.png
---
Since a few months, I like to manage my Office 365 development tenants with the command line tool instead of the Office 365 portal.
The main reason is I created some scripts to clean up everything after deploy and to reset all the settings from a team or something similar.

In addition, I fell in love with Windows Terminal since the firsts beta version. :)

## Create an O365 CLI Profile
Basically the only requirement to run an O365 CLI is a command prompt.
For this reason, create a profile on Windows Terminal is very easy.
In my profile, I launch a Powershell Core instance with the parameter o365.
I also configured Cascadia Code as font to have some addinational features during the reading of the console commands and results.
I added an image as background to recognize instantly the 0365 CLI.

I shared my Json configuration below.
You can just copy and paste on your Windows Terminal profile. :)

```json
    {
      "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bd}",
      "name": "O365 CLI",
      "commandline": "pwsh.exe o365",
      "icon": "https://www.pinclipart.com/picdir/big/7-77422_microsoft-office-365-icon-clipart.png",
      "hidden": false,
      "cursorColor": "#FFFFFF",
      "cursorShape": "bar",
      "fontFace": "Cascadia Code",
      "fontSize": 10,
      "acrylicOpacity": 0.5,
      "background": "#012456",
      "closeOnExit": true,
      "colorScheme": "Dracula",
      "padding": "0, 0, 0, 0",
      "snapOnInput": true,
      "tabTitle": "O365 CLI",
      "startingDirectory": "%USERPROFILE%",
      "useAcrylic": true,
      "backgroundImage": "https://tech4logic.com/Content/Images/office365.png",
      "backgroundImageOpacity": 0.5,
      "backgroundImageStretchMode": "uniform"
    }
```

This is how my O365 CLI looks like.
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/wrzepxkzoagw21799vu0.PNG)
