---
lang: zh-CN
title: LinkedList
description: LinkedList
---



## LinkedList集合

> - 底层数据结构是双链表，查询慢，增删快，操作首尾元素也是极快。
> - 具有操作首位元素的特有API。
> - [LinkedList API](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)



## LinkedList独有方法

| 包                   | 方法                      | 说明                             |
| -------------------- | ------------------------- | -------------------------------- |
| java.lang.LinkedList | public void addFirst(E e) | 在该列表开头插入指定元素         |
| java.lang.LinkedList | public void addLast(E e)  | 将指定的元素追加到此列表末尾     |
| java.lang.LinkedList | public E getFirst()       | 返回此列表的第一个元素           |
| java.lang.LinkedList | public E getLast()        | 返回此列表的最后一个元素         |
| java.lang.LinkedList | public E removeFirst()    | 从此列表中删除并返回第一个元素   |
| java.lang.LinkedList | public E removeLast()     | 从此列表中删除并返回最后一个元素 |



## LinkedList底层源码分析

![image-20230302140333953](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202303021403128.png)



## 迭代器源码分析

![image-20230302140703365](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202303021407559.png)