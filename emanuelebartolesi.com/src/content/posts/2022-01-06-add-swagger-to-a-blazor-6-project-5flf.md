---
template: blog-post
title: Add Swagger to a Blazor 6 project
slug: add-swagger-to-a-blazor-6-project-5flf
description: null
author: Emanuele Bartolesi
date: '2022-01-06T09:30:49.000Z'
featuredImage: /assets/2022/kruiy5vou287cyxeng7d.jpg
---

If you create a new Blazor project with Visual Studio 2022 and .NET 6, you can have the option to host the webassembly part into an ASP.NET Core application.
Behind the scenes, it creates a solution with three projects: Client, Server and a Shared class with the models.
Among many things, in the server part, you have an API controller to serve data to the webassembly application.
If you start to add other REST API endpoints, after a while you need a documentation for your colleagues and for you as well.
And here, Swagger come to save your life.

## Create the project
Open Visual Studio 2022 and create a new Blazor WebAssembly project.
Choose a name and a directory.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulmb8y4q4nktfy25gmlf.png)
 
During the wizard, remember to check "ASP.NET Core hosted". By default is unchecked.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i4jg8q15zgb2dcagneav.png)

## Add Swagger

Add the NuGet package called "Swashbuckle.AspNetCore" and confirm all the messages.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxcdabmxem5l447szee1.png)

And now a few little steps to add the minimal version of Swagger in your Blazor Server project.
Open the file called "Program.cs" and add the code below after the line 9:

```csharp
builder.Services.AddSwaggerGen();
```
And the code below after the line 32:
```csharp
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Blazor API V1");
});
```
Now you can launch the project and see the result.
Try to add the url segment "/swagger" in the address and you should see an image like this:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azx8q05897i45uisc88r.png)
 
## Customize Swagger for your needs

And now you are ready to add other options to customize Swagger for your project.
You can find additional information at this link: https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle

