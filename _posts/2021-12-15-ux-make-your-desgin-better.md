---
layout: post
comments: true
title: "0.课程介绍"
date: 2021-12-15 11:26:04
image: '/assets/img/'
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
introduction: '没有UI时要如何改变已有的设计 '
---
# 课程面向群体

> 所有课程样例均以web设计为基础  

本课程适合群体为以下两类人群：
1. 刚步入职场的设计师，不知道如何与工作流上的其他角色沟通。
2. 有过丰富前端开发经验的程序员，想要脱离被设计UI设计师支配的阴影。

# 什么是Before Coding？
## 两个典型场景
一个很常见的工作场景是，你在工位上摸鱼，突然被领导叫到一个会议室，里面很明显已经开了很久的需求讨论会，而你根本不知道他们讨论的是什么，这时候领导说：“我想要一个数据展示页面，要把我们现在的产品用户的行为数据按照日、周、月三个维度展现出来，基础数据XX部门已经做好了，现在就在库里，你把他们展现出来就行，哦，对了，要有图表啊。这样一个页面，你大概估计一下需要多长时间？”如果你的回答是类似这种“我需要看看先有的数据结构，然后再让UI出一版设计，然后我再考虑考虑”这种的话，你觉的会议室的所有人是不是会很失望？即使在座的大部分人都知道这就是实话。
另外一个场景是，在例会的时候领导follow你的任务进度，而你在犹豫是说50%好呢还是60%好呢，但是明明自己现在只是在做编码之前的需求确认工作以及组件的选型。最后你决定说了60%以后，领导又追问了一句“都60%了，你应该会按时完成吧？”这样的话语。此时你的内心在想又一个加班的周期开始了...  
先说答案，
对于第一个场景，其实没有什么标准答案，主要是你要明白一个道理：* 领导在你毫不知情的情况下叫你进去开会绝不是为了听到你的一大堆质疑，开会是人情事故，你需要根据现场的气氛察言观色，并且给出一个大家要的答案。 * 。比如你感觉到当是的气氛很紧张，好像是两个部门间在打架，那这时候你很明显要毫不犹豫的站在你领导的那边，什么需求不明确，时间紧任务重，UI设计有逻辑冲突，人手不够等等困难就说就对了，反正就是短时间完不成。再比如你发现有公司老板也在场，并且这个提议是老板的一意孤行，在座所有人都有情绪的情况，那你就要左右逢源的说，什么任务非常紧但是可以加班，什么我尽力做到先把需求明确，等等，全是正确的话，但是什么承诺也没给;再比如你突然发现了有客户在座位上，那领导问什么都是没问题，啥都能干，什么时间都能干完，然后再把需求拿回来会后自己人内部讨论...  
对于第二个场景，我一般的采用的是“50-50策略”，在我把任务的需求解读并明确了以后，知道自己要怎么干了，用什么干了，即使一笔代码也没写，也算是50%，其余的50%就是我自己coding的进度了。  
那么这两个场景都是before coding的典型场景，一个是沟通，一个是计划与评估。这两件事情都是非常复杂，复杂到每一个分支单独拿出来都是一门学科。  
以后的课程我也会从沟通与计划这两个方面来讲如何重构你的UI设计。

## Before Codeing 面临的问题
### “我知道这个不好看，但是自己设计可能会更糟"
假设我们已经有了这样一个页面，客户说UI的配色不够丰富，那么现在你作为一个前端开发来重构现有的页面，你会怎么办？
![现有页面]({{"reflecting-ui/1.png" | prepend: page.image | prepend: site.baseurl}})
你的第一个想法是既然配色不喜欢，那我们就换一套配色好了，但是我自己又选不好，所以在知名配色网站上找一套比较流行的配色如下：
![找到的配色]({{"reflecting-ui/palette.png" | prepend: page.image | prepend: site.baseurl}})
然后设计出来的效果是这样的。
![自己做的页面]({{"reflecting-ui/2.png" | prepend: page.image | prepend: site.baseurl}})
你会觉得哪里不对，但是又说不出，其实有美术功底的人一眼就可以看出，其实你的设计缺少灰度，这是一个很专业又很基础的问题。这就是beforeCoding其实一个专业的UI设计师，设计的成品应该是这样的。
![实际要的页面]({{"reflecting-ui/3.png" | prepend: page.image | prepend: site.baseurl}})
这个例子在我们讲颜色的时候还会仔细讲。

> 在编码之前最主要的问题就是，工作流上的每个环节细分都过于专业，专业到不知道问题应该在哪里解决。

# 与其他课程的不同

1. 主要讲解思路，不会把工具的使用作为重点。
对于工具来说，设计会以sketch为主，开发会以vue3为主，其实就是抓到什么就用什么，由于我的素材都是在macbook与win上切换完成的，大家看到我工具使用得如此流畅主要是由于我为了不打断我讲解的思路，后期剪辑而成的，大家主要还是看思路，如果但凡各位有和我不同的思路，或是觉得我讲的不对，都是你对。
2. 我只能尽可能还原职场的工作流程，提炼核心逻辑，而真实的任务远比讲述的要复杂，不要杠。
3. 从产品角度出发解决问题，屁股决定脑袋，把自己当成一个团队。
4. 学完以后你没有学到扎实的技术，但可以更合理的估计自己的工作量。

# 课程概要
## 第一部分：改造现有项目的UI  

很多的课程都失去了要点，是因为他们都做的过于专业了，
大多数课程都是从基础的设计原则来讲的，比如色彩原理或者排版原则之类的。但是这些过于专业的知识除了让我觉得枯燥外，并没有切实的帮助我提高设计能力。  
直到我与UI设计师共事多年以后，我留心总结了一些小技巧，这些小技巧虽然无法让你从零搭建一套优秀的设计规范，但是对于优化你现有的web页面会是立竿见影，所以我决定把这些小技巧整合起来配合简单的理论和素材讲述出来。设计师是一个职业，是为了特定的目标而服务的，并不是艺术家，所以是有固定的方法的。
> 按照方法去设计，而不是靠天分去猜。 

## 第二部分：表单的设计  

表单是UI元素中非常重要的一部分，重要到我必须单独拿出一个部分来详细讲述。这部分我主要分为布局、表单元素以及交互三个方面来详细讲述。

## 第三部分：UI框架比选  

即使我个人觉得整个课程已经都是指导性意见了，但是现在毕竟是短视频时代，对于有些经验的朋友来说，可能还是觉得太枯燥了，那你可以直接跳到这个部分，我会在里面提到前两个部分的知识点我也会尽量标出，大家可以在有需要的时候打乱顺序来听。


