---
layout: post
comments: true
title: "响应式布局指南"
date: 2019-06-14 13:03:56
image: '/assets/img/'
description: '响应式Web设计可以让一个网站同时适配多种设备和多个屏幕，可以让网站的布局和功能随用户的使用环境（屏幕大小、输入方式、设备/浏览器能力）而变化。本文主要介绍一些响应式布局容易忽略但又很重要的知识点。'
main-class: 'css'
color: '#2DA0C3'
tags:
- css
- 响应式
categories:
twitter_text:
introduction: '以基础知识为主，其它万变不离其中。'
---

## 视口
移动前端中常说的 viewport （视口）就是浏览器中用于呈现网页的区域。视口通常并不等于屏幕大小，特别是可以缩放浏览器窗口的情况下。手机端与PC端视口存在差异，电脑端的视口宽度等于分辨率，而移动端的视口宽度跟分辨率没有关系,宽度默认值是设备厂家指定的。*iOS, Android基本都将这个视口分辨率设置为 980px。*
### 为什么手机端视口要设为980px?
乔布斯设想：苹果手机如果在市场上火爆了，但是各个网站还没有来得及制作手机端网页，那么用户不得不用手机访问电脑版的网页，如何用小屏幕访问大屏幕的页面也同样可读呢？乔帮主就想着为手机固定一个视口宽度，让手机的视口宽度等于世界上绝大多数PC网页的版心宽度，就是980px。这样，用手机访问电脑版网页的时候，旁边刚好没有留白。不过页面缩放后文字会变得非常小，用户需要手动放大缩小才能看清楚，体验非常差。
### 约束视口
为了解决前面的问题，可以在网页的`head`中添加下面这行代码：
{% highlight html %}
<meta name="viewport" 
    content="width=device-width, 
    initial-scale=1.0,
    maximum-scale=1.0,
    user-scalable=0" />
{% endhighlight %}
* width=device-width 视口为设备宽度（就是人设置的一个宽度）不设置的话默认为980px  
* initial-scale=1.0 初始化的视口大小是1.0倍  
* maximum-scale=1.0 最大的倍数是1.0倍  
* user-scalable=0 不允许缩放视口    

这个视口的标签告诉浏览器怎么渲染网页。在这里，标签想表达的意思是：按照设备的宽度（device-width）来渲染网页内容。
此时如果用document.documentElement.clientWidth来测试浏览器屏幕宽度，你会发现当前视口宽度等于手机屏幕的宽度，约数后的视口宽度都是在320~480之间（手机竖直使用的时候）。
这个视口的尺寸，是手机厂商设置的，能够保证我们的文字比如16px，在自己的这个视口下清晰、大小刚刚合适。所以大屏幕的手机的约束视口 > 小屏幕手机的约束视口。这就能够保证我们的网页可以用px写字号、写行高。
需要注意的是：约束之后的视口宽度，不是自己的分辨率！！每个手机的分辨率，都要比自己的视口宽度大得多得多！
最最重要的一句话：**前端开发工程师，丝毫不关心手机的分辨率，我们只关心视口。**
## 图片
{% highlight css %}
img {
    max-width: 100%;
}
{% endhighlight %}
这里声明max-width规则，就是要保证所有图片最大显示为其自身的100%（即最大只可以显示为自身那么大）。此时，如果包含图片的元素（比如包含图片的body或div）比图片固有宽度小，图片会缩放占满最大可用空间。  
为什么不用width:100%?
要实现图片的自动缩放，也可以使用更通用的 width 属性，比如width:100%。然而，这条规则在这里并不适用。因为这条规则会导致它显示得跟它的容器一样宽。在容器比图片宽得多的情况下，图片会被无谓地拉伸。
## 收集浏览器的内核
在移动端，仅有四个独立的浏览器内核，分别为微软的Trident、火狐的Gecko、开源内核Webkit、Opera的Presto。
目前微软的Trident在移动终端上主要为WP7、8系统内置浏览器。Opera的Presto内核主要为 Opera Mobile、OperaMini、欧朋浏览器以及欧朋HD Beta版。Webkit内核的适用范围则较为广泛，Android原生浏览器、苹果的Safari、谷歌Chrome(Android4.0使用)都是基于Webkit开源内核开发的。  
总之一句话

## 流布局
百分比布局也叫作流式布局、弹性盒布局。手机网页没有版心，都左右撑满。
百分比能够设置的属性是width、height、padding、margin。其他属性比如border、font-size不能用百分比设置的。

* 如果用百分比写width，那么指的是父元素width的百分之多少。
* 如果用百分比写height，那么指的是父元素height的百分之多少。
* 如果用百分比写padding，那么指的是父元素width的百分之多少，无论是水平的padding还是竖直的padding。
* 如果用百分比写margin，那么指的是父元素width的百分之多少，无论是水平的margin还是竖直的margin。
* 不能用百分比写border的宽度

## 媒体查询
### 为什么响应式 Web 设计需要媒体查询
CSS3媒体查询可以让我们针对特定的设备能力或条件为网页应用特定的CSS样式。如果没有媒体查询，光用CSS是无法大大修改网页外观的。这个模块让我们可以提前编写出适应很多不可预测因素的CSS规则，比如屏幕方向水平或垂直、视口或大或小等等。弹性布局虽然可以让设计适应较多场景，也包括某些尺寸的屏幕，但有时候确实不够用，因为我们还需要对布局进行更细致的调整。媒体查询让这一切成为可能，它就相当于CSS中基本的条件逻辑。
### 媒体查询语法
我们在媒体查询外面写的第一条规则，是“基本的"样式，它适用于任何设备。在此基础上，我们再为不同视口、不同能力的设备，渐进增加不同的视觉效果和功能。
{% highlight css %}
body {
    background-color: grey;
 } 
@media screen and (min-width:1200px){
    body{
        background-color: pink;
    }
}
 @media screen and (min-width:700px) and (max-width:1200px){
    body{
    background-color: blue;
    }
}
@media screen and (max-width:700px){
    body{
    background-color: orange;
        }
}
{% endhighlight %}
其中@media就表示媒体查询，查询现在看这个网页的设备是什么，以及它的宽度是多少。screen表示看这个网页的设备是显示器，而不是残疾人听力设备、也不是打印机。后面用and符号罗列所有的可能性。
值得注意：媒体查询只能包裹选择器，不能包裹k:v对儿。
IE6、7、8不支持媒体查询，也为了防止手机端的某些浏览器不支持媒体查询，所以不要把所有的选择器都放在媒体查询里面。
**媒体查询**是一个很大的课题，这里只是粗浅的入门介绍在此我先挖一个坑，我会结合一个真实的大数据项目来做完整的写一期媒体查询的教程。
## rem响应式布局
### rem布局核心思想
1. 一般不要给元素设置具体的宽度,但是对于一些小图标可以设定具体宽度值
2. 高度值可以设置固定值,设计稿有多大,我们就严格写多大
3. 所有设置的固定值都用REM做单位(首先在HTML中设置一个基准值：PX和REM的对应比例,然后在效果图上获取PX值,布局的时候转化为REM值)
4. JS获取真实屏幕的宽度,让其除以设计稿的宽度,算出比例,把之前的基准值按照比例进行重新的设定,这样项目就可以在移动端自适应了

### rem和em的区别
rem:当前页面中元素的REM单位的样式值都是针对于HTML元素的font-size的值进行动态计算的  
em:表示父元素的字号的倍数。(特例：在text-indent属性中，表示文字宽度)
### 具体使用
1. 从UI设计师拿到PSD设计稿,然后在样式中给HTML设定一个font-size的值，我们一般都设置一个方便后面计算的值，例如：100px。
{% highlight css %}
html{
font-size:100px；//1rem=100px
}
{% endhighlight %}
2. 首先按照设计稿的尺寸来写样式，然后在写样式值的时候，需要把得到的像素值除以100计算出对应的REM的值。
值得注意的是：真实项目中外层盒子的宽度我们一般还是不写固定值，沿用流式布局法的思想，我们用百分比的方式布局
{% highlight css %}
margin:0 0.2rem
height:3rem;
{% endhighlight %}
3. 3、根据当前屏幕的宽度和设计稿的宽度来计算我们HTML的font-size的值
例如：设计稿宽度为640px,其中有一个部分是轮播图，它的尺寸是600*300，在样式中给HTML设定一个font-size的值为100px,则轮播图大小应该为 6rem×3rem，那如果手机屏幕宽度为375px,其font-size应该设置为多少。
{% highlight css %}
375/640*100->fontsize=58.59375//此时轮播图能自适应手机屏幕大小
{% endhighlight %}
根据当前屏幕宽度和设计稿宽度的比例，动态计算一下当前宽度下的fontsize值应该是多少，如果fontsize的值改变了，之前设定的所有REM单位的值自动会跟着放大或者缩小。可以通过以下这段代码实现：

但如果当前屏幕宽度大于设计稿宽度，图片会被拉长而失真，所以以上代码需要稍微做些修改：
{% highlight html %}
<section id="main">
<div class="box"></div>
</section>
<script>
function（）{
  var desW=640,
  winW=document.documentElement.clientwidth,
  ratio=winW/desW；
  var oMain=document.getElementById（“main“）;
  if(winW>desW){
  oMain.style.width=desW+"px";
  oMain.style.margin="0 auto";
  return;
}
document.documentElement.style.fontSize=ratio*100+'px';
}();
</script>
{% endhighlight %}
