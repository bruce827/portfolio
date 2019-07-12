---
layout: post
comments: true
title: "自定义表单插件比选"
date: 2019-07-11 00:39:58
image: '/assets/img/'
description: 房间中的大象
main-class: js
color:
tags:
- 表单
- 自定义
- vue
- bootstrap
categories:
twitter_text:
introduction: 自定义表单的技术选型
---

## 策略问题
- 自定义表单是核心功能
- 9.20上线内容必须包含
- 分成两个项目来做
- 功能是面向开发还是面向用户

## [vue-formbuilder](https://blog.mrabit.com/details/59)
### 介绍
具有iview和element两种UI版本，功能简单只能算是提供了一种实现的思路和demo，源码
[源码](https://github.com/mrabit/vue-formbuilder)比较好懂
### 优势
轻便易上手，没有版权风险
### 劣势
- 项目要在vue的体系下，需要在项目基础上进行二次开发。
- 已经有1年没有更新了，不知道现存的功能bug是否得到了解决。

## [vue-form-making](http://tools.xiaoyaoji.cn/form)
### 介绍
基于element-ui的项目，功能完善且还在[持续更新](https://gitee.com/gavinzhulei/vue-form-making)中。
### 优势
源码上的demo就是一个样例项目，支持在源码基础上自定义修改。在npm上有维护，适合团队开发。
### 劣势
- 代码有些庞大，且没有文档或注释，需要时间来理解源码。 
- 可能会有版权风险

## jquery插件
### 介绍
[源码](https://github.com/wuyongqiang12138/wuyongqiang)，一个个人的项目。
### 优势
不需要Vue环境，集成简单
### 劣势
- 样式需要从新改造
- 有技术难点需要解决

## [雷劈网](http://formdesign.leipi.org/demo.html)
### 介绍
基于百度的Ueditor实现的，交互样式不好且不能改。

## [bootstrap插件](http://www.jq22.com/jquery-info7481)
## 介绍
老外开发的插件，可能会有阅读障碍
## 优势
样式和交互都还可以
## 劣势
存储格式为HTML的格式。  
## 自己开发系统
### 介绍
6人团队半年周期  
开发：4人（3个实习生）
测试：1人
产品：1人
### 优势
有过成熟案例，项目周期可控。
### 劣势
9月份整体上线有难度。