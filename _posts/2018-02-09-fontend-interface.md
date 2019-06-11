---
layout: post
title: "前后端接口文档规范"
date: 2015-02-09 19:33:48
image: '/assets/img/dica-rapida-2/main.png'
description: '前后台分离势在必行，'
main-class: 'html'
color: '#EB7728'
tags:
- UI
- 模板
- 前端
categories:
twitter_text: 'Aprenda a usar as meta tags sociais.'
introduction: ""
---

## 写在前面
本文仅适合于前后台分离的项目，使用前提是在项目计划初期要先进行接口文档约定。  
对于目前我所经历的所有项目来说，前后台分离一定要尽最大可能让开发人员进行集中开发，因为如果是前后台异地开发的话，到联调或接口更改时简直就是噩梦，就更不用提跨部门或团队的沟通了，我曾经在一个项目中仔细的计算了一下，从需求评审到冒烟测试这段时间中，仅仅是因为异地开发这一点，开发人员的沟通时间成本是3-4小时/天，而如果是集中开发，每天的沟通不会超过一个小时。
## 为何一定要前后端分离
[WEB开发模式](http://blog.jobbole.com/65509/)经历了一代又一代,从最早的内容驱动、后端渲染的模式已经过渡到微服务、[组件化](http://blog.jobbole.com/56161/)的快速迭代，自动化部署的开发模式。
* 前端开发重度依赖开发环境，开发效率低。
这种架构下，前后端协作有两种模式：
一种是前端写demo，写好后，让后端去套模板 。
淘宝早期包括现在依旧有大量业务线是这种模式。
好处很明显，demo 可以本地开发，很高效。
不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大。
另一种协作模式是前端负责浏览器端的所有开发和服务器端的 View 层模板开发，支付宝是这种模式。
好处是 UI 相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。
* 前后端职责依旧纠缠不清。
Velocity 模板还是蛮强大的，变量、逻辑、宏等特性，依旧可以通过拿到的上下文变量来实现各种业务逻辑。
这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码。
还有一个很大的灰色地带是 Controller，页面路由等功能本应该是前端最关注的，但却是由后端来实现。
Controller 本身与 Model 往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在 Controller 层。
这些问题不能全归结于程序员的素养，否则 JSP 就够了。
* 对前端发挥的局限。
性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作才能碰撞出火花，但由于后端框架限制，我们很难使用Comet、Bigpipe等技术方案来优化性能。   

总上所述，就跟为什麽要代码重构一样
* 关注点分离
* 职责分离
* 对的人做对的事
* 更好的共建模式
* 快速的反应变化  

## 如何做分离
前端由于其本身技术的局限，目前还是没有办法做数据、菜单、按钮等权限的业务逻辑，即使有一些解决方案也是会有一些安全问题。所以目前通用的做法还是把业务逻辑放在后端来写。那么本着*业务逻辑端提供数据结构*的开发原则，数据结构应该又后端来提供。
接口约定不能仅仅依赖于SVN、GIT、google doc等工具，最好的方案是依赖于第三方接口平台，目前三个主流的API接口平台；
- RAML
- Swagger
- Blueprint  

当然还有很多这样的平台，这里没接触过所以不推荐了，
对于这三个平台的比较网上有很多，这里我个人的看法是，如果涉及到跨公司之间的开发，比如数据库和后台是一个公司，前台是一个公司那么推荐使用RAML，如果是一个团队开发，推荐使用Swagger，如果开发团队新人较多，推荐使用Blueprint。
### 前端职责
* 接收数据，返回数据
* 处理交互逻辑
* 渲染数据结构并且适配主流浏览器内核  

### 后端职责
* 提供数据（包括分页）
* 处理包括数据、按钮、菜单权限的业务逻辑
* 处理大数据量高并发等服务支撑  

## 一般开发流程
1. 后端编写和维护接口文档，在 API 变化时更新接口文档。
2. 后端根据接口文档进行接口开发。
3. 前端根据接口文档进行开发 + Mock平台。
4. 开发完成后联调和提交测试。
这里面我们为了提高开发效率，我们都是采取前后台并行开发，那么就涉及到在开发阶段有需求变更的情况，**既然需求变更无法避免，那么最小的变更成本就是版本迭代**。  

## 接口模板规范（通用版）

### 基本原则
* 接口返回数据即显示：前端仅做渲染逻辑处理。
* 渲染逻辑禁止跨多个接口调用。
* 前端关注交互、渲染逻辑，尽量避免业务逻辑处理的出现。
* 请求响应传输数据格式：JSON，JSON数据尽量简单轻量，避免多级JSON的出现。  

### 基本格式
#### 请求格式
GET请求、POST请求==必须包含key为body的入参，所有请求数据包装为JSON格式，并存放到入参body中==，示例如下：

GET请求：
{% highlight json %}
xxx/login?body={
    "username":"admin",
    "password":"123456",
    "captcha":"scfd",
    "rememberMe":1
}
{% endhighlight %}
POST请求：
{% highlight json %}
body:{
    "username":"admin",
    "password":"123456", 
    "captcha":"scfd",
    "rememberMe":1
},
{% endhighlight %}
#### 响应基本格式
{% highlight json %}
{
    code: 200,
    data: {
        message: "success"
    }
}
{% endhighlight %}
code : 请求处理状态:
- 200: 请求处理成功
- 500: 请求处理失败
- 401: 请求未认证，跳转登录页
- 406: 请求未授权，跳转未授权提示页  

data.message: 请求处理消息:
- code=200 且 data.message="success": 请求处理成功  
- code=200 且 data.message!="success": 请求处理成功,普通消息提示：messag内容  
- code=500: 请求处理失败，警告消息提示：message内容
### 响应实体格式
{% highlight json %}
{
    code: 200,
    data: {
        message: "success",
        entity: {
            id: 1,
            name: "XXX",
            code: "XXX"
        }
    }
}
{% endhighlight %}
data.entity: 响应返回的实体数据。
### 响应列表格式
data.list:返回列表
### 响应分页格式
{% highlight json %}
{
    code: 200,
    data: {
        recordCount: 2,
        message: "success",
        totalCount: 2,
        pageNo: 1,
        pageSize: 10,
        list: [
            {
                id: 1,
                name: "XXX",
                code: "H001"
            },
            {
                id: 2,
                name: "XXX",
                code: "H001"
            } ],
        totalPage: 1
    }
}
{% endhighlight %}

- data.recordCount: 当前页记录数
- data.totalCount: 总记录数
- data.pageNo: 当前页码
- data.pageSize: 每页大小
- data.totalPage: 总页数  

### 特殊内容规范
*  下拉框、复选框、单选框
由后端接口统一逻辑判定是否选中，通过isSelect标示是否选中，示例如下：
{% highlight json %}
{
    code: 200,
    data: {
        message: "success",
        list: [{
            id: 1,
            name: "XXX",
            code: "XXX",
            isSelect: 1
        }, {
            id: 1,
            name: "XXX",
            code: "XXX",
            isSelect: 0
        }]
    }
}
{% endhighlight %}
禁止下拉框、复选框、单选框判定选中逻辑由前端来处理，统一由后端逻辑判定选中返回给前端展示。
*  Boolean类型
关于Boolean类型，JSON数据传输中一律使用1/0来标示，1为是/True，0为否/False。
* 日期类型
关于日期类型，JSON数据传输中一律使用字符串，具体日期格式因业务而定。
