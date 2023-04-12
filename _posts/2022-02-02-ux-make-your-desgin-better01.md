---
layout: post
comments: true
title: "1.1 如何开始一个web设计"
date: 2022-02-02 16:00:56
image: '/assets/img/reflecting-ui/'
description: '小破绽：'
main-class: 'UX'
color:
tags:
- 设计
- B端
- UI
categories:
- 重构UI
twitter_text:
introduction: '第一部分：改造现有的UI'
---
# 一个例子
假设我们现在要做一个个人博客的静态网站，如果是免费的会更好了。
那么你的第一个想法是什么？  
是这样布局？
![sketch1]({{"sketch1.png" | prepend: page.image | prepend: site.baseurl}})
这样布局？  
![sketch2]({{"sketch2.png" | prepend: page.image | prepend: site.baseurl}})
还是这样布局？  
![sketch3]({{"sketch3.png" | prepend: page.image | prepend: site.baseurl}})

其实这些都是错的。
## 不要从布局开始，先聚焦功能

我们应该先考虑我们要实现什么功能。
1. 首先我们是静态网站，所以我们常规的增删改查就只剩下查寻功能了。
2. 我们肯定要分类，比如前端技术、随笔、设计等等。
3. 要可以展示详情。
4. 一篇文章要可以添加多个标签以便查找。
5. 要为自己的系列课程重新分组。

那么我们现在就来设计这个主体部分。  

我习惯与先从数据开始，当然这只是个人习惯，先从样式开始也是完全没有问题的。列表的数据格式如下：
```json
{
  data:[
    {
      title:'1.1 如何开始一个web设计',
      date:'2022-02-02',
      introduction:'改造现有的UI,从设计规范开始。',
      tags: ['web设计','博客'],
      categories:['重构UI'],
      themeClass:'UX'
    },
    {
      title:'1.2 排版',
      date:'2022-02-02',
      introduction:'文字排版是最快速提升web页面高级感的方法，没有之一。',
      tags: ['排版','文字'],
      categories:['重构UI'],
      themeClass:'UX'
    },
    {
      title:'1.3 留白',
      date:'2022-02-02',
      introduction:'',
      tags: ['页面设计','留白'],
      categories:['重构UI'],
      themeClass:'UX'
    },
    //...
  ]
}

```
首先无论你是否有开发基础，你都应该可以设计出这样的table：
![table1]({{"table1.png" | prepend: page.image | prepend: site.baseurl}})
而后你会觉得可以把各个按钮都放在各自的文字上会节省一些空间
![table2]({{"table2.png" | prepend: page.image | prepend: site.baseurl}})
而后你会觉得标题和介绍的文字长度不可控，所以不太适合table形式的展示。所以第一时间我想到了cardlist的展现形式。
![cardList1]({{"cardList1.png" | prepend: page.image | prepend: site.baseurl}})
这种形式我借鉴了antdesgin的模版，但是发现操作区域又过于繁琐，于是想把它去掉，而我的文章都是以课程为主的，所以再把图片精缩为主题，而且我个人不希望搞得那么酷炫，越酷炫就越容易过时，最终变成了这样。
![cardList2]({{"cardList2.png" | prepend: page.image | prepend: site.baseurl}})

值得注意的是，直到现在，我都没有着手去设计header和sidebar。

## 原型到底要做到多逼真
以上我的心路历程就是一个原型的迭代，那么我们可以看到，我在画原型时候有用到框线稿，用到了代码，用到了sketch，其实主要是根据你自己的技术栈，选择你最快速的实现方式即可，但是一定要遵循的是我们的产出一定是可以最大限度的表达自己的想法。

## 在没有设计规范的时候，不要过度的设计交互
在前端设计的领域里面，我们通常分为UI设计师（俗称做平面的）、UE设计师和动效设计师。要知道一套完整的设计规范是需要团队各个角色花费很长时间，经过很多次迭代才能趋于稳定，而在众多公司里面，比较重视视觉这一方面的公司会有一个交互设计师的岗位，而几乎每个技术驱动型的企业都会坚称公司有一套自己的设计及交互规范。但据我多年的经验来看，要么就是不懂什么是设计和交互规范，要么就是有一套缺乏维护的规范做做样子，真正的产品中根本不会按照这种规范执行的;而最好的情况就是沿用了一套开源的规范，然后稍加修改一下主色变成自己的规范，之所以说这一套好主要是因为他能用。  
所以我们更多的时候在设计一个功能的时候，都会不自觉的把交互交给现有的UI框架，比如一个模态窗的弹出方式，到底是从屏幕边缘移动到指定位置还是从点击的位置逐渐展开？展开的速度是怎样的？是匀速还是变速？如果这些细节都是每个功能都设计一遍的话，那对于团队的任何角色来说都是灾难。

<div style="width:100%">
<video 
  src="https://os.alipayobjects.com/rmsportal/gSNilqbiXOufDXF.mp4" 
  autoplay="autoplay" 
  controls="controls"
  type="video/mp4" 
  loop="loop" 
  style="margin:0 auto;display:inherit">
  </video>
</div>

# 从建立设计规范开始