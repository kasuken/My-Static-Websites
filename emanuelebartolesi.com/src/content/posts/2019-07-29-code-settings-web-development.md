---
template: blog-post
title: My VS Code settings for Web Development
slug: code-settings-web-development
date: '2019-07-29T20:44:06.133Z'
description: My VS Code settings for Web Development
featuredImage: /assets/archive/jp9phvgxm0ymt31zdo0q.jpg
---
In the past, I used a lot of editors.
Now I use only Visual Studio Code, for everything.

I share my settings optimized for web development.

### Theme
At the moment I am using the theme called: [Noctis](https://marketplace.visualstudio.com/items?itemName=liviuschera.noctis).
More specifically, I use the version *Noctis Obscuro*.

![](https://github.com/liviuschera/noctis/raw/master/images/noctis.png)

I like the good contrast and the colors of this theme.

### Icons
I don't use the default icons for VS Code, but I installed [VS Code Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

![](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/images/screenshot.gif)

There are many icon sets on the marketplace, but I like this package because I can recognize at first sight every kind of files in the solution.

### Font
I am using [Fira Code](https://github.com/tonsky/FiraCode) instead of the default font for Visual Studio Code.
I use this because it supports the font ligatures.
The font ligatures are a "new" format for fonts that support symbol decorations instead of normal characters like =>, <=.
You can see many examples in the image below.

![](https://github.com/tonsky/FiraCode/raw/master/showcases/all_ligatures.png)

After the installation, you have to change the default settings for the font.
This is my settings for fonts.
~~~~
   "editor.fontFamily": "Fira Code",
   "editor.fontLigatures": true,
   "editor.fontSize": 15
~~~~
### The cursor
The first line makes your cursor blink more smooth with a fade-in/fade-out slow animation.
In the third line, I define the cursors style as a "line" because I don't like a "big" cursor when I type the code.
~~~~
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": true,
    "editor.cursorStyle": "line"
~~~~
### Indent Guidelines visible
~~~~
     "editor.renderIndentGuides": true
~~~~
### Unsaved Tabs
With the following settings, the unsaved files have a dot symbol before the file name and a line at the top of the tab.
You can see easily the unsaved files, better than before.
~~~~
     "workbench.editor.highlightModifiedTabs": true
~~~~
### Autosave
Nothing to explain. Autosave files after a delay.
I use 5000 ms because I use very often a "live" server to debug my application and it prevents to recompile the project too many times.
I disabled the formatting function on saving because if you edit the file and it changes under your eyes, you lost some times to find the correct line number.
~~~~
     "files.autoSave": "afterDelay",
     "files.autoSaveDelay": 5000,
     "editor.formatOnSave": false
~~~~
## Extensions
- [Visual Studio Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

The normal intellisense shows functions, methods or parameters in alphabetical orders.
With this extension, Microsoft has added some AI to the intellisense and the functions, methods, and parameters are shown with the most used order.
With this you more productive.

- [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

This extension adds several colors to every indent tab in the code.
It helps to navigate your code with your eyes.

![](https://raw.githubusercontent.com/oderwat/vscode-indent-rainbow/master/assets/example.png)

- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

This extension will display inline in the editor the size of the imported package.

![](https://file-wkbcnlcvbn.now.sh/import-cost.gif)

## Conclusion
I use other extensions specific for every frontend technologies, but these extensions are technology independent.