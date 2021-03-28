---
title: This is my fifth post.
description: This is my Joanna's post.
date: 2021-03-28
tags: post
layout: layouts/post.njk
---
<ul>
{%- for post in collections.post -%}
<li> {{ post.2021-03-28.title }} </li>
{%- endfor -%}
</ul>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
  </head>
  <body>

  </body>
  </html>
