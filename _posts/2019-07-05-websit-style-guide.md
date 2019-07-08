---
layout: post
comments: true
title: "课题类管理系统样式指南"
date: 2019-07-05 00:34:20
image: '/assets/img/'
description: '基于Material Design与国内课题的共有特点，设计后台管理系统样式指南'
main-class: UX
color: '#B31917'
tags:
- 指南
- UI
categories:
twitter_text:
introduction: '基于一次从零到一的产品实践'
---
## 版本说明
<table style="width: 800px;">
    <tbody>
        <tr>
            <th>版本号</th>
            <th>改动内容</th>
            <th>日期</th>
            <th>改动人</th>
            <th>审核人</th>
        </tr>
        <tr>
            <td>V0.5</td>
            <td>创建文档</td>
            <td>2019-07-07</td>
            <td>徐健</td>
            <td>徐健</td>
        </tr>
    </tbody>
</table>
## 文档用途
1. 指导前端、UI、UE人员的页面设计。
2. 外包开发任务的验收测试。
3. 特定项目的业务咨询人员做风格演示。

## 前言
1. 本视觉规范经过《随访项目》9.20上线版本（迭代一）的实际验证。
2. 设计稿安全范围：宽度，1080px，高度：不限。
3. 以google的Material Design（物质设计）为基础，添加可以简化用户操作的交互组件，打造高效定制化产品。  

## 基础规范
### 布局
#### 1. 网格  

通用为24栅格布局，如无特殊说明，设计稿的的尺寸为1920px*1080px
![grid]({{"/assets/img/HMI/style-guide/grid.png" | prepend: site.url }})  

#### 2. 整体布局
业务系统布局（面向用户）：  
![layout]({{"/assets/img/HMI/style-guide/layout.png" | prepend: site.url }})  
后台管理系统布局（客户及管理人员）：
![后台管理系统布局]({{"/assets/img/HMI/style-guide/layout.png" | prepend: site.url }})
说明：  
    考虑到整体内容区域采用固定宽度（fixed）布局而非流式（float）布局，这两种布局在1080px及以下宽度的显示器下展示是没有区别的。
    [演示一下](http://localhost:8000/userCenter/Workplace)
#### 3. 间距  
横向间距和网格保持一致，纵向间距如下：
<table style="width: 800px;">
    <tbody>
        <tr>
            <th>数值（px）</th>
            <th>使用场景</th>
        </tr>
        <tr>
            <td>32</td>
            <td>模块间的间距</td>
        </tr>
        <tr>
            <td>16</td>
            <td>模块间的间距</td>
        </tr>
        <tr>
            <td>12</td>
            <td>表格（列表）与文字的间距</td>
        </tr>
        <tr>
            <td>4</td>
            <td>提示信息、次要信息的间距</td>
        </tr>
    </tbody>
</table>

### 颜色  

#### 1.主色（待定）
![color]({{"/assets/img/HMI/style-guide/color.png" | prepend: site.url }})  

#### 2.填充色  
![填充色]({{"/assets/img/HMI/style-guide/fill-color.png" | prepend: site.url }})  
#### 3.提示色
![提示色]({{"/assets/img/HMI/style-guide/alert-color.png" | prepend: site.url }})  
#### 4.状态色
![提示色]({{"/assets/img/HMI/style-guide/state.png" | prepend: site.url }})  
#### 5.其它
- 课题任务状态  
![提示色]({{"/assets/img/HMI/style-guide/other.png" | prepend: site.url }})  

### 字体
采用Material推荐字体，文字间距默认为0，因文字数量少而引起的多行变单行的情况以多行计算
![grid]({{"/assets/img/HMI/style-guide/font.png" | prepend: site.url }})

### 圆角
- 标签使用1px圆角
- 其它通用模块使用4px圆角

## 全局组件
### 按钮（待定）
按钮尺寸以及样式基于bootstrap3.x规范，且三端统一。
### 选项
![radio]({{"/assets/img/HMI/style-guide/radio.png" | prepend: site.url }})
### 输入框
输入框状态、尺寸及样式基于bootstrap3.x规范。
### 表单
#### 1.单列布局与展示
![form1]({{"/assets/img/HMI/style-guide/form1.png" | prepend: site.url }})
#### 2.组合布局与展示
![form2]({{"/assets/img/HMI/style-guide/form2.png" | prepend: site.url }})
#### 3.特殊表单展示
- 个人信息表单
![form2]({{"/assets/img/HMI/style-guide/form3.png" | prepend: site.url }})

### 弹框
弹窗默认为4个尺寸，每个尺寸表达内容如下：
#### 1.用于二次确认等需要提示的小型弹窗
![alert1]({{"/assets/img/HMI/style-guide/alert-320180.png" | prepend: site.url }})
#### 2.承载小于4项表单元素的窗口，如提交审批等
![alert1]({{"/assets/img/HMI/style-guide/alert-560320.png" | prepend: site.url }})
#### 3.承载大于4项的表单元素的窗口
![alert1]({{"/assets/img/HMI/style-guide/alert-560420.png" | prepend: site.url }})
备注：太多表单的情况建议使用页面跳转
#### 4.容纳表格元素的大型弹窗
![alert1]({{"/assets/img/HMI/style-guide/alert-800600.png" | prepend: site.url }})
### 提示
![提示]({{"/assets/img/HMI/style-guide/alertstyle.png" | prepend: site.url }})

## 文档规划
<table style="width: 800px;">
    <tbody>
        <tr>
            <th>节点</th>
            <th>里程碑</th>
            <th>备注</th>
        </tr>
        <tr>
            <td>2019-07-09</td>
            <td>V0.5版</td>
            <td>包含大部分网页元素的初版指南</td>
        </tr>
        <tr>
            <td>2019-09-01</td>
            <td>V1.0测试版</td>
            <td>汇总意见并且修改后，且经过《随访项目》检验的web端完整版</td>
        </tr>
        <tr>
            <td>2019-09-21</td>
            <td>V1.0正式版</td>
            <td>经过测试验证且修改后的可发布版本，此版本包括word、pdf、ppt三种格式</td>
        </tr>
    </tbody>
</table>

## 需要资源
<table style="width: 800px;">
    <tbody>
        <tr>
            <th>序号</th>
            <th>描述</th>
            <th>具体要求</th>
            <th>期望时间</th>
        </tr>
        <tr>
            <td>1</td>
            <td>UI人员</td>
            <td>需要UI制作长宽比为1：1的矢量logo</td>
            <td>越快越好</td>
        </tr>
        <tr>
            <td>2</td>
            <td>经理、UI</td>
            <td>确认产品主样式（颜色、布局、风格等）</td>
            <td>9月1日之前</td>
        </tr>
        <tr>
            <td>3</td>
            <td>0.5个前端开发</td>
            <td>在确定了整体风格之后，做前端UI框架的选型及二次开发</td>
            <td>9月20日之前</td>
        </tr>
          <tr>
            <td>4</td>
            <td>UI框架评审</td>
            <td>基于定稿的样式进行UI框架选型评审</td>
            <td>待定</td>
        </tr>
    </tbody>
</table>