---
lang: zh-CN
title: JVM
description: JVM
---

## JVM概述

> - Java Virtual Machine  - Java程序运行环境（java二进制字节码运行环境）
> - 一次编写，到处运行
> - 自动内存管理，垃圾回收功能
> - 数组下标越界检查
> - 多态

![image-20230204133900319](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302041339444.png)



## 内存结构



### 程序计数器

> Program Counter Register 程序计数器（寄存器）
>
> - 作用：记住下一条jvm指令的执行地址
> - 特点：
>     - 线程私有
>     - 不会存在内存溢出



### 虚拟机栈

> Java Virtual Machine Stacks (Java 虚拟机栈)
>
> - 每个线程运行时所需的内存空间，称为虚拟机栈
> - 每个栈由多个栈帧组成，对应着每次方法调用时所占的内存
> - 每个线程只能有一个活动栈帧，对应着当前正在执行的那个方法

<img src="https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302041405764.png" alt="image-20230204140545698" style="zoom:50%;" />



### 本地方法栈

> 



### 堆

> 



### 方法区

> 







