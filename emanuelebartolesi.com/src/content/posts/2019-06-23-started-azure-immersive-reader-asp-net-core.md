---
template: blog-post
title: Getting started with Azure Immersive Reader and ASP.NET Core
slug: started-azure-immersive-reader-asp-net-core
date: '2019-07-19T20:44:06.133Z'
description: Getting started with Azure Immersive Reader and ASP.NET Core
featuredImage: /assets/archive/yqtdo48ombtgxgsre4y7.jpg
---
Immersive Reader is an Azure Cognitive Service for developers who want to embed inclusive capabilities into their apps for enhancing text reading and comprehension for users regardless of age or ability.
Immersive Reader includes features that read the text aloud, translate, focus user attention by design and much more, helping users achieve gains in the classroom and office.

If you want to take an overview of this awesome cloud service, you can see the video below.
{% youtube ZrO-l1IKjbw %}
Now, let's see how is easy to implement an Immersive Reader on your web application.

## Create an Immersive Reader Cognitive Service on Azure Portal
First of all, we have to create a new cognitive service on the Azure Portal.
This service is in preview, at the moment and you can find easily with the following link:
https://portal.azure.com/#create/Microsoft.CognitiveServicesImmersiveReader

At the moment there are only a few locations available, but we hope in the future we have many locations for this service.
![](https://thepracticaldev.s3.amazonaws.com/i/blyl8eku6oc5hg32iba4.PNG)
I suggest using "West US".

Open the Immersive Reader resource in your Resource Group and take the value for the "Endpoint" (in the Overview tab) and the "Primary Key" on the "Keys" tab.
We need these values, later.

## Create an ASP.NET Core Project

From Visual Studio 2019 (or 2017, it's not important), select a new ASP.NET Core project from the New menu items.

![](https://thepracticaldev.s3.amazonaws.com/i/7ie83mcunw402wv6f30q.PNG)

Then, select the template for Model-View-Controller web application.

![](https://thepracticaldev.s3.amazonaws.com/i/9fvz7nhgsejayvcpdkqv.PNG)

From the solution explorer, right click on the web project and select "Manage User Secrets" and then, add these two key with the right values.

~~~~
{
  "SubscriptionKey": YOUR_SUBSCRIPTION_KEY,
  "Endpoint": YOUR_ENDPOINT
}
~~~~

The subscription key is a string similar to this: "cd45ec999e3143f7bb2fe83ad002705f"
and the endpoint like this: https://YOUR RESOURCE NAME.cognitiveservices.azure.com/sts/v1.0/issuetoken

Now in the HomeController.cs you can retrieve these informations using the dependency injection for the Configuration:

~~~~
private readonly string SubscriptionKey;
private readonly string Endpoint;

public HomeController(IConfiguration configuration)
{
    SubscriptionKey = configuration["SubscriptionKey"];
    Endpoint = configuration["Endpoint"];
}
~~~~

To retrieve the access token for the Immersive Reader you can create a new route called "Token" in the same HomeController file.

~~~~
[Route("token")]
public async Task<string> Token()
{
    using (var client = new System.Net.Http.HttpClient())
    {
        client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", SubscriptionKey);
        using (var response = await client.PostAsync(Endpoint, null))
        {
            var content = await response.Content.ReadAsStringAsync();

            return content;
        }
    }
}
~~~~

I prefer this approach because ASP.NET Core runs on the server-side and so basically you can hide your secrets information like the key and the endpoint.
If you write this function on a Javascript function, everyone can take this private information.

Now it's time to add the UI and some example content in our application.

Open the "Index.cshtml" file from the folder "Views" and replate the content with the following code:

~~~~
<div class='immersive-reader-button' data-button-style='iconAndText' onclick='launchImmersiveReader()' value="Read">Read</div>

<h1 id='title'>The Picture of Dorian Gray</h1>
<div id='content'>
    <p>
        In the stately London home of his aunt, Lady Brandon, the well-known artist Basil Hallward meets Dorian Gray. Dorian is a cultured, wealthy, and impossibly beautiful young man who immediately captures Basil’s artistic imagination. Dorian sits for several portraits, and Basil often depicts him as an ancient Greek hero or a mythological figure. When the novel opens, the artist is completing his first portrait of Dorian as he truly is, but, as he admits to his friend Lord Henry Wotton, the painting disappoints him because it reveals too much of his feeling for his subject. Lord Henry, a famous wit who enjoys scandalizing his friends by celebrating youth, beauty, and the selfish pursuit of pleasure, disagrees, claiming that the portrait is Basil’s masterpiece. Dorian arrives at the studio, and Basil reluctantly introduces him to Lord Henry, who he fears will have a damaging influence on the impressionable, young Dorian.
    </p>
</div>

@section scripts {
<script type='text/javascript' src='https://contentstorage.onenote.office.net/onenoteltir/immersivereadersdk/immersive-reader-sdk.0.0.1.js'></script>
<script type='text/javascript'>
    function getImmersiveReaderTokenAsync() {
        return new Promise((resolve) => {
            const url = '/token';
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        resolve(response.text());
                    } else {
                        throw new Error('Server response wasn\'t OK');
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                });

        });
    }

    async function launchImmersiveReader() {

        const content = {
            title: document.getElementById('title').innerText,
            chunks: [{
                content: document.getElementById('content').innerText,
                lang: 'en'
            }]
        };

        const options = {
            uiZIndex: 1000000
        }

        const token = await getImmersiveReaderTokenAsync();
        ImmersiveReader.launchAsync(token, content, options);
    }
</script>
}
~~~~

Basically, I create a button at the top of the page, a title for our content and some paragraphs below: nothing special.

In the "script" section I added the reference to the Immersive Reader SDK.
At the moment I am using the version 0.0.1 (the stable version) but there is also a Canary Build version:

~~~~
<script type='text/javascript' src='https://contentstorage.onenote.office.net/onenoteltir/immersivereadersdk/immersive-reader-sdk.0.0.1.js'></script>
~~~~

~~~~
<script type='text/javascript' src='https://contentstorage.onenote.office.net/onenoteltir/immersivereadersdk/immersive-reader-sdk.preview.js'></script>
~~~~

In the method "launchImmersiveReader" we can start to configure the Immersive Reader.
First of all, we create a new object called "content" with two property.
One is the title of our content and the other one is the "chunks" property.
Inside of the last one we have another two properties with the content of the page and the language.
For the content, you can retrieve it directly from the DOM or you can call a REST API service.

After this part of the configuration, you have to retrieve the authentication token from our server-side function.
I use the Promise and the Fetch because I like the new async/await approach in JavaScript.
It's easier to read and to debug.

If you launch your application, you can see the awesome result with a few lines of code.

![](https://thepracticaldev.s3.amazonaws.com/i/zp72o2bdjqlo8886a5hr.gif)

## Resources

Source Code: https://github.com/kasuken/ImmersiveReaderCore
Demo site: https://immersivereaderexperiments.azurewebsites.net/
Official Documentation: https://azure.microsoft.com/en-gb/services/cognitive-services/immersive-reader/
