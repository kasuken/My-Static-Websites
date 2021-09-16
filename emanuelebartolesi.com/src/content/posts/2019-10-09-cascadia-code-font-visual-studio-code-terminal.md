---
template: blog-post
title: Cascadia Code - a new font for Visual Studio Code and Terminal
slug: cascadia-code-font-visual-studio-code-terminal
date: '2019-10-09T20:44:06.133Z'
description: Cascadia Code - a new font for Visual Studio Code and Terminal
featuredImage: /assets/archive/wgx1vvpm34xxmcmaopyg.jpg
---
Whether you're a developer or an it pro, you definitely have to deal with Powershell sometimes.
For several year I used to develop PowerShell script into PowerShell ISE.
It worked very well, but it looked like "old".
Since many years, almost four, I started using [Visual Studio Code](https://code.visualstudio.com/) to edit every kind of files, including PowerShell files.
The reason is really simple: Visual Studio Code is more powerful than PowerShell IDE.
I show you the reason why.


## Platform support
PowerShell Core is supported by Linux, OSx and Windows and you can use Visual Studio Code extension for PowerShell in all of these releases.
On Windows you can also PowerShell v3 and higher.

To install PowerShell Core on these platforms, you can follow the installation instructions directly from the Microsoft website:

- [Installing PowerShell Core on Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-6)
- [Installing PowerShell Core on macOS](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-6)
- [Installing PowerShell Core on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-6)

## Installing the extension
Launch Visual Studio Code and press **Ctrl+P** (**Cmd+P** on Mac).
The editor opens a side bar Extensions with the PowerShell extension selected.
Click on **Install** and then **Reload**.

![](https://docs.microsoft.com/en-us/powershell/docs-conceptual/images/vscode.png?view=powershell-6)

## Choose the version of PowerShell for your session
You can install on your machine PowerShell Core side-by-side with PowerShell Vx.
If you have to choose a particular version for your script, you can open the command palette (**Ctrl+Shift+P** or **Cmd+Shift+P** on Mac) and write **PowerShell: Show Session Menu**.
Now you can choose the right version of PowerShell from the dropdown.

You can also select the PowerShell version from the green PowerShell icon on the bottom right of your editor.
If you click on it, the same command pallet appears on the top bar.

## Example Scripts
Now you are ready to play and work with PowerShell and Visual Studio Code.
If you want to try them with some example scripts, you can click on the menu **File->Open Folder** or hit **Ctrl+K Ctrl+O** quickly and navigate to this folder:
```
C:\Users\<USERNAME>\.vscode\extensions\ms-vscode.PowerShell-<VERSION>\examples
```
You can open Code directly from a PowerShell terminal typing this command:
```powershell
code (Get-ChildItem $Home\.vscode\extensions\ms-vscode.PowerShell-*\examples)[-1]
```

## A specific configuration for PowerShell files
In the command palette (**Ctrl+Shift+P** or **Cmd+Shift+P** on Mac) write **Open Settings (JSON)**.
Now you can see your preferences without the pretty UI.
Here you can add some additional settings specific for PowerShell.
```
  "powershell.integratedConsole.focusConsoleOnExecute": false,
  "powershell.integratedConsole.showOnStartup": false,
  "[powershell]": {
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": true,
    "files.trimTrailingWhitespace": true,
    "files.encoding": "utf8bom",
    "files.autoGuessEncoding": true,
    "editor.tabCompletion": "on"
  }
```
Because you have added the language name, the other languages are not affected with these behaviors.

## How to debug PowerShell Script
Since the version 1.9 you can debug single file without open the containing folder of the script.
So, you can open a .ps1 file in VS Code, set a break point (with the click on bar with the mouse or pressing F9 to the line of code) and press F5 to start a debug session.
Quick and easy.

There is another way to debug PowerShell files that add some additional features to the debug experience.
For example you can choose if you want to debug the script in an interactive session or into a PowerShell host process running on your PC.

You can create a debug configuration file following these simple steps:

- Open a folder containing your scripts
- Open the debug side bar and click on the gear icon on the top right.
- Select the Environment called "PowerShell", of course.

Now Visual Studio Code creates a file in your directory called *launch.json* with your debugging settings.
You can replace the content with this JSON:
```
{
  "version": "0.2.0",
  "configurations": [
      {
          "type": "PowerShell",
          "request": "launch",
          "name": "PowerShell Launch (current file)",
          "script": "${file}",
          "args": [],
          "cwd": "${file}"
      },
      {
          "type": "PowerShell",
          "request": "attach",
          "name": "PowerShell Attach to Host Process",
          "processId": "${command.PickPSHostProcess}",
          "runspaceId": 1
      },
      {
          "type": "PowerShell",
          "request": "launch",
          "name": "PowerShell Interactive Session",
          "cwd": "${workspaceRoot}"
      }
  ]
}
```
You can find additional information about debugging to the following links:

- [Debugging PowerShell script in Visual Studio Code – Part 1](https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-1/)
- [Debugging PowerShell script in Visual Studio Code – Part 2](https://devblogs.microsoft.com/scripting/debugging-powershell-script-in-visual-studio-code-part-2/)

## Command Explorer and Module Explorer
If you like PowerShell ISE, you like the Command Explorer bar, for sure.
With the PowerShell extension for VS Code you have the same experience opening the command palette (**Ctrl+Shift+P** or **Cmd+Shift+P** on Mac) and typing "PowerShell Command Explorer".

There isn't a "native" Module Explorer in Visual Studio Code, but you can install another extension called "PowerShell Pro Tools" with this feature.
You need a licence key for it, but the Module Explorer is free.

- [PowerShell Pro Tools Extension](https://marketplace.visualstudio.com/items?itemName=ironmansoftware.powershellprotools)

![](https://ironmansoftware.com/wp-content/uploads/2019/04/updateGif.gif)

## Code Snippets for PowerShell
To be more productive, you have to write more code in less time (and not only this).
Visual Studio Code supports code snippets and it's very easy to add your snippets specific for a language.
From the command palette (**Ctrl+Shift+P** or **Cmd+Shift+P** on Mac) type **snippet** and select **Configure User Snippet** and then **PowerShell**.
Now you can paste the following JSON file with some snippets.
You can add your snippets, as well.

{% gist https://gist.github.com/kasuken/b9a82b6ff3354de89ac35e98d55c250f %}

I will create an extension for these snippet and update this post.

## Conclusion
I hope I helped you to configure Visual Studio Code for a better experience with PowerShell.
Leave a comment if you have some interesting configuration for PowerShell!
