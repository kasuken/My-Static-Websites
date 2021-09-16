---
template: blog-post
title: Debug with Visual Studio using all browsers in incognito mode
slug: debug-visual-studio-browsers-incognito-mode
date: '2020-01-14T20:44:06.133Z'
description: Debug with Visual Studio using all browsers in incognito mode
featuredImage: /assets/archive/0ddhpus0gtus6d4mfwfl.png
---
By default, when we debug web applications, **Visual Studio launches a new browser window** which obviously uses cache, cookies and all the rest of the **previous sessions**.

Obviously this sometimes wastes some time, especially when working with applications that have SSO or, as in my case, applications that use the login on Azure Active Directory.

To overcome this problem, we can go to change the settings of Visual Studio and add **the parameters necessary to launch browsers in "Incognito" mode** so as to have a new browser session each time, as if it were at its first use without carrying anything saved.

### Basic configuration
To access the browser configuration, click on the arrow next to the default browser and then on "Browse With" and add the browsers by clicking on "Add"

### Browsers Configuration
#### Chrome
Program: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
Arguments: --incognito
Friendly Name: Chrome - Incognito
#### Chromium
Program: "C:\Program Files (x86)\Chromium\Application\chrome.exe"
Arguments: --incognito
Friendly Name: Chromium - Incognito
#### Firefox
Program: "C:\Program Files\Mozilla Firefox\firefox.exe"
Arguments: -private
Friendly Name: Firefox - Incognito
#### Firefox Developer Edition
Program: "C:\Program Files\Firefox Developer Edition\firefox.exe"
Arguments: -private
Friendly Name: Firefox Developer - Incognito
#### Opera
Program: "C:\Program Files\Opera\launcher.exe"
Arguments: --private
Friendly Name: Opera - Incognito
#### Brave
Program: "C:\Users\barto\AppData\Local\BraveSoftware\Brave
Browser\Application\brave.exe"
Arguments: --incognito
Friendly Name: Brave - Incognito
#### Edge Beta on Chromium
Program: "C:\Program Files (x86)\Microsoft\Edge Beta\Application\msedge.exe"
Arguments: -inprivate
Friendly Name: Edge Beta - Incognito
#### Edge Dev on Chromium
Program: "C:\Program Files (x86)\Microsoft\Edge Dev\Application\msedge.exe"
Arguments: -inprivate
Friendly Name: Edge Dev - Incognito
#### Edge Canary on Chromium
Program: "C:\Users\barto\AppData\Local\Microsoft\Edge SxS\Application\msedge.exe"
Arguments: -inprivate
Friendly Name: Edge Canary - Incognito

![](https://topnewsinworld.com/wp-content/uploads/2019/07/Google-closes-Chrome-Incognito-Mode-loophole-to-improve-privacy.jpg)