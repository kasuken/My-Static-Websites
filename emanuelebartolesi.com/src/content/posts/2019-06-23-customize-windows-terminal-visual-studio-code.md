---
template: blog-post
title: How to customize the new Windows Terminal with Visual Studio Code
slug: customize-windows-terminal-visual-studio-code
date: '2019-06-23T20:44:06.133Z'
description: How to customize the new Windows Terminal with Visual Studio Code
featuredImage: /assets/archive/ftsy7xzd6g89ggvjxy24.jpg
---

A few days ago Microsoft released a very early version of the new [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701).
The Windows Terminal is a new, modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL.
Its main features include multiple tabs, Unicode and UTF-8 character support, a GPU accelerated text rendering engine, and custom themes, styles, and configurations.

Obviously, it's an opensource project hosted on GitHub: [https://github.com/microsoft/terminal](https://github.com/microsoft/terminal)
Feel free to participate.

At the moment it's a little bit unstable and more features will come in the future, but I am using it for a few days and I like the idea.
Until now I using [Cmder](https://cmder.net/) but Windows Terminal has some new promising features.

## How to install

You can install Windows Terminal directly from the Windows Store or if you want to understand how it works, you can download the source, build it and launch the terminal.

![](https://thepracticaldev.s3.amazonaws.com/i/rb6x6yo858b6ufdt42vw.PNG)

The link for the Store version: [https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701)
The link for GitHub project: [https://github.com/microsoft/terminal](https://github.com/microsoft/terminal)
The source code and the project are really well documented.

## The first launch

If you launch the app from the Start Menu, it looks like in the screenshot below.

![](https://thepracticaldev.s3.amazonaws.com/i/iut0oi8j4iufgdyi6du6.PNG)

The default terminal is PowerShell.

If you click on the "+" symbol the application launch another terminal in a new tab.
If you click on the down arrow symbol &#x2B07;, you can choose the new terminal from a list.

There is another interesting button below the list, the settings button.

## Settings

If you click on the down arrow and after that click on the button "Settings", at the moment, the settings file (it's a JSON file) will be opened in a new instance of Visual Studio.
If you want, instead, open the file directly, you can open Visual Studio Code and open the file directly from the directory: **%USERPROFILE%\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState**

In this file, you can find all settings for Windows Terminal.
At the moment you can interact with the settings only from this file but in the future, a UI will be added to the application.

## Add new Profile

If you want to add a new profile, go the section "profiles" of the JSON settings file and add a new profile section like this below:

        {
            "acrylicOpacity" : 0.85,
            "background" : "#012456",
            "backgroundImage" : "C:/users/barto/AppData/Local/Packages/Microsoft.WindowsTerminal_8wekyb3d8bbwe/RoamingState/unicorn.gif",
            "backgroundImageOpacity" : 0.7,
            "backgroundImageStretchMode" : "uniformToFill",
            "closeOnExit" : false,
            "colorScheme" : "Solarized Dark",
            "commandline" : "powershell.exe",
            "cursorColor" : "#00FF00",
            "cursorHeight" : 25,
            "cursorShape" : "vintage",
            "fontFace" : "Fira Code",
            "fontSize" : 12,
            "guid" : "{79285a8e-036c-446f-8a9c-78994e34bf78}",
            "historySize" : 9001,
            "icon" : "ms-appdata:///roaming/pwsh-32.png",
            "name" : "PowerShell with Unicorn",
            "padding" : "0, 0, 0, 0",
            "snapOnInput" : true,
            "startingDirectory" : "%USERPROFILE%",
            "useAcrylic" : false
        }

If you want to copy this section from here, pay attention to the guid.
Remember to change it every time you paste in the file.
It is used to set the default terminal, for example, and it must be unique in the file.

As you can see in my profile section, you can add an image as background, change the font size, the cursor shape and much more.
For example, I use Fira Code as font because I like it also in Visual Studio Code.
It adds some awesome experience in the text.
You can download it from here: [https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

If you want to impress your friend or your attendees at a session, you can add a gif as a background.

You can see it in action on the image below.

![](https://thepracticaldev.s3.amazonaws.com/i/uaackzt4yxp854i0l5rl.gif)

## Color Schemes

At the end of the profiles.json file, you can find a section called "schemes".
From here you can add or change the default colors of your terminal.
If you want to use it in your new profile, you have to insert the same scheme name in the property "name" and in the "colorScheme" property for the profile section.

## Share your profiles

I created a new gist on my profile to share my profiles settings and you can find it here: [https://gist.github.com/kasuken/076d68b92e2a67dfda591587c77a40c0#file-profiles-json](https://gist.github.com/kasuken/076d68b92e2a67dfda591587c77a40c0#file-profiles-json).
Share your profiles in the comment!
Together we can create something awesome!

![](https://thepracticaldev.s3.amazonaws.com/i/2k9fw1y21k3sv8q1swr3.gif)


### **Update 27/06/2019

Some users asked for the gif.
I share them below!!!

![](https://thepracticaldev.s3.amazonaws.com/i/s8ysw6hfoj1a61ovz0us.gif)

![](https://thepracticaldev.s3.amazonaws.com/i/3u7x3b3otmyh6kytychp.gif)

![](https://thepracticaldev.s3.amazonaws.com/i/asvdrzeanv9a20jekihr.gif)