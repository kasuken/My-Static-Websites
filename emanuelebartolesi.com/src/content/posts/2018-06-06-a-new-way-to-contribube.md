---
template: blog-post
title: A new way to contribute to Open Source Projects
slug: /a-new-way-to-contribute-to-open-source-projects
date: 2018-06-13 12:46
description: 
featuredImage: /assets/bench-accounting-nvzvopqw0gc-unsplash.jpg
---


Sometimes I want to learn something new or challenge myself but I don't have any new idea.
Often I go to GitHub and search for something new to contribute.

Some days ago Shayne Boyer (https://github.com/spboyer) had created a new tool for .NET Core Global tool to help people like to find a new project to contribute.

The project is called UpForGrabs (https://github.com/spboyer/dotnet-upforgrabs).

## Requirements

First of all this tool is only available for .NET Core 2.2.

![alt text](https://dotnet.microsoft.com/images/redesign/downloads-dot-net-core.svg ".NET Core Logo")

To install it, you can go to the official page on the .NET site: https://dotnet.microsoft.com/download

You can verify the correct installation with the command:

```
dotnet --info
```

After that, you can install the tool with the command:

```
dotnet tool install -g upforgrabs
```
## How to use

Open your favourite terminal (I use Hyper, for example) and type:

```
upforgrabs
```
You can change the number of the results with the parameter -n:

```
upforgrabs -n 15
```

You can also decide to open the issue automatically with the parameter -o:

```
upforgrabs -n 15 -o
```

Below you see this tool in action:

<img src="https://thepracticaldev.s3.amazonaws.com/i/pgeqb5wldz7yhsiftp1g.gif">