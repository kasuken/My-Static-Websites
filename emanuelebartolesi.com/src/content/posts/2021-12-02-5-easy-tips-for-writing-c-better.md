---
template: blog-post
title: 5 easy tips for writing C# better
slug: 5-easy-tips-for-writing-c-better
description: null
author: Emanuele Bartolesi
date: '2021-12-02T09:30:49.000Z'
featuredImage: /assets/2022/jf0ap56x18c3euc3pcwn.jpg
---

Even if you are late with the project timeline or due date, it's important to write good code.
Writing code is not easy and this is the reason why you have to write a more readable and elegant code as you can.

Let's see some small syntax tips.

## 1. Reduce lines of unuseful code

Bad
```csharp
public ActionResult Index()  
{  
    return View();  
}  
```
Good
```csharp
public ActionResult Index() => View();
```
OR

Bad
```csharp
if (!string.IsNullOrEmpty(yourVar))  
{  
    //your code  
} 
```
Good
```csharp
if (yourVar is { Length: > 0 })
{
    //your code
}
```
## 2. Primitive data type validation
Avoid custom method to validate primary type. 99% of primary types has their own validation type.
```csharp
public bool CheckIfIsNumberic(string value) => int.TryParse(value, out int _);
```

## 3. Use conditional operator
When possible, to improve the readability of the code, use the ternary condition.
They help to read the code after a long period.

Bad
```csharp
public static string CheckFirstName(User user)
{
	var defaultFirstName = "Default";

	if (user.Name != null)
	{
		return user.Name;
	}
	else
	{
		return defaultName;
	}
}
```
Good
```
public static string CheckFirstName(string name) => name ?? "Default";
```

4. Naming Conventions 
Find your rules and be consistent in every projects.
Simple name for a single object, add the suffix List for multiple objects.

```csharp
var item = new Item();
var items = new List<Item>();
```
 
```csharp
var item = new Item();
var items = new List<Item>();
```

Try to follow the table below:
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/urdrnjv06scgy1uvswa4.png)

## 5. Optimizing Queries with LINQ
LINQ is very powerful to query objects in C# but it should be a bottleneck about the performances or, maybe in the worst case, for readability.

This code works, but try to take a look to the best version below this one
```csharp
public List<Article> GetArticlesByPrice(double price)
{
	var articlesList = new List<Article>();

	foreach (Article article in Articles)
	{
		if (article.Price< price)
		{
			articlesList.Add(article);
		}
	}

	return articlesList;
}
```
This is better:
```csharp
public List<Article> GetArticlesByPrice(double price)
{
	var articlesList = new List<Article>();

        IEnumerable<Article> lambdaArticles = Articles.SelectMany(c => c.Articles).Where(p => p.Price < 100);
	articlesList  = lambdaArticles.ToList();

        return articlesList;
}
```

## Conclusion
Feel free to share your tips in the comments and I will update my blog!