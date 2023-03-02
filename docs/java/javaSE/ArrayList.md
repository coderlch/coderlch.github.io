---
lang: zh-CN
title: ArrayList
description: ArrayList
---



## ArrayList简介

> - ArrayList 的**底层是数组队列**，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity 操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。
> - ArrayList 继承了AbstractList，实现了List。它是一个数组队列，提供了相关的**添加、删除、修改、遍历**等功能。
> - ArrayList 实现了RandomAccess 接口， RandomAccess 是一个标志接口，表明实现这个这个接口的 List 集合是支持快速随机访问的。在 ArrayList 中，我们即可以通过元素的序号快速获取元素对象，这就是快速随机访问。
> - ArrayList 实现了Cloneable 接口，即覆盖了函数 clone()，能被克隆。
> - ArrayList 实现java.io.Serializable 接口，这意味着**ArrayList支持序列化**，能通过序列化去传输。
> - ArrayList 中的操作**不是线程安全**的！所以，建议在单线程中才使用 ArrayList，而在多线程中可以选择 Vector 或者CopyOnWriteArrayList。
> - [ArrayList  API](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)



## ArrayList常用方法

| 包                  | 方法                  | 说明                                     |
| ------------------- | --------------------- | ---------------------------------------- |
| java.util.ArrayList | boolean add(E e)      | 添加元素，返回值为ture，表示添加成功     |
| java.util.ArrayList | boolean remove(E e)   | 删除指定元素，返回值为ture，表示删除成功 |
| java.util.ArrayList | E remove(int index)   | 删除指定索引处的元素，返回被删除的元素   |
| java.util.ArrayList | E set(int index, E e) | 修改指定索引处的元素，返回原来的元素     |
| java.util.ArrayList | E get(int index)      | 获取指定索引处的元素                     |
| java.util.ArrayList | int size()            | 集合的长度，也就是集合中元素的个数       |



### ArrayList的遍历

> - 迭代器
> - 带有索引的for循环
> - 增强for循环



## ArrayList代码示例

```java
        ArrayList<Integer> integerArrayList = new ArrayList<>();

        integerArrayList.add(1);
        integerArrayList.add(10);
        integerArrayList.add(100);

        // 迭代器循环
        Iterator<Integer> iterator = integerArrayList.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 带有索引的for循环
        for (int i = 0; i < integerArrayList.size(); i++) {
            System.out.println(integerArrayList.get(i));
        }

        //增强for循环
        for (Integer e: integerArrayList) {
            System.out.println(e);
        }

```



## ArrayList底层原理

> 1. 利用空参创建的集合，在底层创建一个默认长度为0的数组。
> 2. 添加第一个元素时，底层会创建一个新的长度为10的数组。
> 3. 存满时，会扩容1.5倍。
> 4. 如果一次添加多个元素，1.5倍还放不下，则新创建的数组长度以实际为准。

![image-20230302133318836](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202303021333021.png)
