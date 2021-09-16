---
template: blog-post
title: A collection of my favorites DNS servers
slug: collection-favorites-dns-servers
date: '2020-01-28T20:44:06.133Z'
description: A collection of my favorites DNS servers
featuredImage: /assets/archive/fu7f2geah0ygy2iha5b7.png
---
When you work, especially remotely like me, you need two things: **a fast connection and a secure connection**.
Obviously, for a stable connection, you have to choose the best ISP operator in your zone, but you can optimize the connection with some tips.

The ISP assigns to you a default DNS server and very often it's not the best choice especially regarding the speed.
Luckily, there are many free DNS servers that we can use to speed up the translation from a domain name to an IP address and consequently the speed of the navigation.

# Cloudflare

Maybe it's the most known DNS server on the internet.
It has the best performance and the best privacy levels.

The primary server is 1.1.1.1 and the secondary is 1.0.0.1.
They have also the app for Android and iOS to speed up your mobile connection, as well.

website: https://1.1.1.1

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pfj4j9o3ddwe8qljdudo.PNG)

# OpenDNS

It's one of the first free DNS servers that appeared on the internet.
It started as an independent company and now it's part of Cisco.
It's good to block phishing sites and web filtering.
About the performance, it's not the best but it's not the worst. 

The primary server is 208.67.222.222 and the secondary is 208.67.220.220.

website: https://www.opendns.com

# Quad9

It's one of my favorite DNS because it's really fast when you work with Office 365 (I don't know the real reason, but I tested it a lot).
The quality of the service is very similar to 1.1.1.1 and it blocks also some malicious domain by default.

The primary server is 9.9.9.9 and the secondary is 149.112.112.112.

website: https://www.quad9.net/

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/soznb734at907tsh9mr2.PNG)

# Google DNS

Last but not least. Google DNS is the most used DNS server by people on the internet, just because it's Google. :)
It's a good mix of speed, privacy, and transparency.

The primary server is 8.8.8.8 and the secondary is 8.8.4.4.

## Set the DNS automatically with PowerShell

During the working days, I change the DNS several times to use the best DNS to work on different services.
I created some scripts to switch the DNS on my machine to speed up this operation.
I share it with you and you can find them on my Gist account.

{% gist https://gist.github.com/kasuken/cfd04087e3070a7f8b6a986219d84d24 %}
