---
template: blog-post
title: Turn on runtime compilation for modified views in ASP.NET Core
slug: turn-runtime-compilation-modified-views-asp-net-core
date: '2019-12-11T20:44:06.133Z'
description: Turn on runtime compilation for modified views in ASP.NET Core
featuredImage: /assets/archive/vrz6nivr9vs235mgncue.png
---
As a seasoned ASP.NET developer I used to modify the views when I working on CSS/HTML, hit F5 and see what is changed on the UI.
With ASP.NET Core it's not possible by default because the views are compiled by default and they are included in the bin folder with the others dll files.
The most important advantage of this new behavior is one of the ASP.NET Core feature: performance.
In the other hand you can create, for instance, a lot of default views, put them into a class library and reuse that views in many projects.

But it's still possible to compile views when the files are changed.

## Turn on runtime compilation

There are few steps to make it happens.

- Find and install the NuGet package called **Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation**
- In the ConfigureService method, replace the content with this line:
 
```csharp
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews()
                .AddRazorRuntimeCompilation();
        }
```

Now you can press F5, change something in the views and dotnet recompile them at runtime.
But if you don't want the services in the production environment, you can use the conditional compile options.
Let's see how.

## Compile the views only for Debug

To achieve this goal, we can use an out-of-the-box feature offered by Visual Studio and .NET.
Just add "#if (DEBUG)" in the code and add the runtime compilation only if you on debug.
In this cause you have performance in the production environment because you don't use this service but more productivity when you are on debug.

```csharp
        public void ConfigureServices(IServiceCollection services)
        {
            var mvcviews = services.AddControllersWithViews();

            #if (DEBUG)
            mvcviews.AddRazorRuntimeCompilation();
            #endif
        }
```

Enjoy your compiled views!!!

![](https://media3.giphy.com/media/dWCNjE4AjkDyo/giphy.gif?cid=790b7611299971daf18519d026437a8454135fecda3e088a&rid=giphy.gif)