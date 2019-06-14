---
layout: post
comments: true
title: "chrome调试技巧"
date: 2019-06-14 01:40:25
image: '/assets/img/'
description: '虽然VS Code有比较强大的debug功能，但是我还是习惯于在chrome中调试，这里总结了调试的一些效率技巧，适合初学者。'
main-class: 'js'
color: '#D6BA32'
tags: 
- chrome
- debug
- js
categories:
twitter_text:
introduction: '不包括APP应用的调试'
---

## console 基本输出
在封装log日志时会用到的就不仅仅是`console.log()`了。
{% highlight  javascript %}
console.error();//错误
console.info();//信息
console.warn();//警告
console.debug();//调试
console.clear();//清空控制台

//格式化输出
console.log("%s年",2016);//%s表示字符串
console.log("%d年%d月",2016,11);//%d表示整数
console.log("%f",3.1415926);//%f小数
console.log("%o",console);//%o表示对象
console.log("%c自定义样式","font-size:30px;color:#00f");
console.log("%c我是%c自定义样式","font-size:20px;color:green",
"font-size:10px;color:red");
{% endhighlight %}
值得注意的是，error也仅仅是输出样式的改变，并不会捕获该异常；一般情况下我们会用`====`分隔，不会用到更改文字样式。

## console 输出多对象的集合
{% highlight  javascript %}
var stu = [{name:"Bob",age:13,hobby:"playing"},{name:"Lucy",age:14
,hobby:"reading"},{name:"Jane",age:11,hobby:"shopping"}];
console.table(stu);
{% endhighlight %}

## console 堆栈跟踪
{% highlight  javascript %}
function fib(n){ 
//输出前n个斐波那契数列
if(n == 0) return;
  console.count("调用次数");
//放在函数里，每当这句代码运行输出所在函数执行次数
  console.trace();
//显示函数调用轨迹(访问调用栈）
var a = arguments[1] || 1;  
var b = arguments[2] || 1;
  console.log("fib=" + a);
  [a, b] = [b, a + b];
  fib(--n, a, b);
}
fib(6);
{% endhighlight %}
此方法可以根据需求和单步调试交替使用。
或者可以把对象放在watch中也可以达到同样的效果，放在watch中还可以改变变量的值，但是要注意改回来哦。

## console 断言处理
这个由于功能和debugger重叠，其实很少用到。
{% highlight  javascript %}
console.assert(false, "这回真的错了");
{% endhighlight %}

## debugger 技巧
这应该是我们最常用的调试技巧了。基础功能如下：
- Pause/Resume script execution：暂停/恢复脚本执行（程序执行到下一断点停止）。
- Step over next function call：执行到下一步的函数调用（跳到下一行）。
- Step into next function call：进入当前函数。
- Step out of current function：跳出当前执行函数。
- Deactive/Active all breakpoints：关闭/开启所有断点（不会取消）。
- Pause on exceptions：异常情况自动断点设置。  

还有一些隐藏技巧：
- Watch：Watch表达式
- Call Stack: 栈中变量的调用，这里是递归调用，肯定是在内存栈部分调用。
- Scope：当前作用域变量观察。
- BreakPoints：当前断点变量观察。
- XHR BreakPoints：面向Ajax，专为异步而生的断点调试功能。
- DOM BreakPoints：主要包括下列DOM断点，注册方式见下图：
    - 当节点属性发生变化时断点（Break on attributes modifications）
    - 当节点内部子节点变化时断点（Break on subtree modifications）
    - 当节点被移除时断点（Break on node removal）
- Global Listeners：全局事件监听
- Event Listener Breakpoints：事件监听器断点，列出了所有页面及脚本事件，包括：鼠标、键盘、动画、定时器、XHR等等。
这里面我比较常用的有watch、XHR BreakPoints和Event Listener Breakpoints。

## 使用debug(fun)来调试一个函数

## 其它小功能
- Device Mode 可以添加对媒体查询的调试。
- 在Source中按住Alt键并拖动鼠标进行多列内容选择。
- Network面板中选择一张图片，在右侧图片上鼠标右键选择copy it as a Data URI,就可以获取图片的Data URL (base64编码)。
- 按下Alt键并且鼠标双击选择DOM元素前面的箭头，就会展开该DOM元素下的所有字节点元素.
- 元素搜索：快捷键 Ctrl+F(Mac: CMD+F)，试试在搜索栏输入ID选择符或者类选择符就可以定位到元素啦
