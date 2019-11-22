---
layout: post
comments: true
title: "4.美化你的图表-饼图"
date: 2019-11-15 01:38:08
image: '/assets/img/dataAnalyze/'
description: 没啥事儿别动不动就用饼图
main-class: 'svg'
color:
tags:
- 饼图
- 数据可视化
- 图表美化
categories:
- 数据可视化
twitter_text:
introduction: 一个好的饼图对作者的美术功底是一个挑战，反正我是不敢用
---
## 饼图的使用场景
饼图跟柱状图一样，都是针对离散型数据的统计图。柱状图多用于展示频数，饼图多用于展示频率（也就是比例）。先展示一个中规中矩的饼图：
![饼图demo]({{"04/pie-demo.png" | prepend: page.image | prepend: site.baseurl}})

## 为什么不想使用饼图
你在设计原型时候是这个样子：
![设想的饼图]({{"04/baby.png" | prepend: page.image | prepend: site.baseurl}})
但是实际数据的场景很可能是这个样子的：
![真实数据饼图]({{"04/isCollage.png" | prepend: page.image | prepend: site.baseurl}})
设想总是很丰满，但现实很骨感，并且一直都是。
> 写给业务设计人员的话：你觉得在表现数据类目组成的时候应该是饼图最合适，但是真实数据可能会跟你的效果图差的很远。

## 如果一定要使用饼图，有几点要注意的
### 1. 如果变量只有两个的时候，不要使用饼图，除非你可以做成这样：
![胜率]({{"04/rote.jpeg" | prepend: page.image | prepend: site.baseurl}})
### 2. 如果变量太多，不要使用饼图
如果变量太多的话，展现出来很可能是这个效果：
![变量太多的图]({{"04/pie-ugly.png" | prepend: page.image | prepend: site.baseurl}})
我们先除去美观不谈，首先这个图表就不够直观，让人阅读起来很费劲。
面对这种情况这里给出三点建议：
1. 使用条形图代替。
2. 尽量不要在图旁边放置提示标签，这样只会更不直观。
3. 饼的标签，一般只标注百分比，如果频数和百分比都标注就会很乱。
以上三点不用照单全收，但是可以根据具体情况进行组合。  

### 3.变量的观测数据差距较大时候，不要使用饼图，至少常规的不行
先看一个常规方式做出来的饼图
![bug]({{"04/bug.jpeg" | prepend: page.image | prepend: site.baseurl}})
这张图虽然是系统自动生成的，但是在我看来就是一张很失败的饼图，那有人就要问了，**数据就是这样，你还要让人家怎么办嘛**
下面是我的解决方案（顺便普及一下jira的bug管理知识）：
![bug]({{"04/bug-list.png" | prepend: page.image | prepend: site.baseurl}})
> jira上bug的分类：
1. Blocker:
即系统无法执行、崩溃或严重资源不足、应用模块无法启动或异常退出、无法测试、造成系统不稳定。
* 严重花屏
* 内存泄漏
* 用户数据丢失或破坏
* 系统崩溃/死机/冻结
* 模块无法启动或异常退出
* 严重的数值计算错误
* 功能设计与需求严重不符
* 其它导致无法测试的错误, 如服务器500错误
2. Critical：
即影响系统功能或操作，主要功能存在严重缺陷，但不会影响到系统稳定性。
* 功能未实现
* 功能错误
* 系统刷新错误
* 数据通讯错误
* 轻微的数值计算错误
* 影响功能及界面的错误字或拼写错误
* 安全性问题
3. Major：
即界面、性能缺陷、兼容性。
* 操作界面错误（包括数据窗口内列名定义、含义是否一致）
* 边界条件下错误
* 提示信息错误（包括未给出信息、信息提示错误等）
* 长时间操作无进度提示
* 系统未优化（性能问题）
* 光标跳转设置不好，鼠标（光标）定位错误
* 兼容性问题
4. Minor/Trivial:
即易用性及建议性问题。
* 界面格式等不规范
* 辅助说明描述不清楚
* 操作时未给用户提示
* 可输入区域和只读区域没有明显的区分标志
* 个别不影响产品理解的错别字
* 文字排列不整齐等一些小问题  

## 3D的饼图别考虑了你能做出来这样的
![立体饼图]({{"04/3D-pie.jpg" | prepend: page.image | prepend: site.baseurl}})