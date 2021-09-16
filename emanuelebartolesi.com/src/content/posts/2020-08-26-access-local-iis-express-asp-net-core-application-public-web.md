---
template: blog-post
title: Access your local IIS Express  ASP.NET Core application from the public web
slug: access-local-iis-express-asp-net-core-application-public-web
date: '2020-08-26T20:44:06.133Z'
description: Access your local IIS Express  ASP.NET Core application from the public web
featuredImage: /assets/archive/45z2zm6h4iji39o35aes.jpg
---
During the development life cycle of your app, sometimes you need to expose your web server to the public web.
The most commons scenarios are: testing webhooks, testing a chatbot or testing your web application from a mobile device.

For these situations, ngrok can be your answer.
It is tunnelling, reverse proxy software which allows accessing your local development web server from another endpoint on the internet.

#Installing ngrok

To install ngrok, go to the [download page](https://ngrok.com/download) and get the right version for your operating system.
Extract the zip in your favourite folder on your pc (for instance I use c:\tools\ for this kind of tools).
Before you launch ngrok, I recommend you to register on the website (or use your GitHub account, as well) and go to the [Auth section in the dashboard](https://dashboard.ngrok.com/auth/your-authtoken).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ivgpetwlk15knmepn90y.png)

Copy the command line, go to ngrok folder and launch it.

Now you token is saved on your local machine and you don't need to run this step again.

#Publish your local IIS Express to the internet
Now you are ready to publish your local address as a public address.

From Visual Studio or dotnet command-line tool, launch your application debug instance and grab the local address (for instance: https://localhost:5001).

From the command line tool, go to the ngrok application path and launch the command below:

```
.\ngrok.exe http https://localhost:5001 -host-header="localhost:5001"
```

You should view an output like the image below:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2vcd74v5c2qb1y7lepgh.png)

Starting from now, other people or you from another device can access your local environment with the address **https://b191a436e2e0.ngrok.io**

#Get your own website address
ngrok offers his services with a free plan and you can use it forever and 24 hours each day.
But if you need to configure a service with a fixed URL, you have to change the plan from Free to Basic or Pro.
In that case, from the ngrok dashboard, you can choose your public address names and they don't change every time when you launch a new ngrok instance.
It's a time saver and I recommend it to you.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/6svfafsh49g0rgv4tcvu.png)

