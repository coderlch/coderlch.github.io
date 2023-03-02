---
lang: zh-CN
title: Arrays
description: Arrays
---



## 概述

> - 位于 `java.util.Arrays` 包中
> - [Arrays API](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)



## 常用方法

| 包               | 方法                                                        | 说明                             |
| ---------------- | ----------------------------------------------------------- | -------------------------------- |
| java.util.Arrays | public static String toString(数组)                         | 把数组拼接成一个字符串           |
| java.util.Arrays | public static int binarySearch(数组，查找的元素)            | 二分查找法查找元素               |
| java.util.Arrays | public static int[] copyOf(原数组，新数组长度)              | 拷贝数组                         |
| java.util.Arrays | public static int[] copyOfRange(原数组，起始索引，结束索引) | 拷贝数组（指定范围）             |
| java.util.Arrays | public static void fill(数组，元素)                         | 填充数组                         |
| java.util.Arrays | public static void sort(数组)                               | 按照默认方式进行数组排序（升序） |
| java.util.Arrays | public static void sort(数组，排序规则)                     | 按照指定的排序规则               |



## sort排序方法的底层原理

```java
        Integer[] arrays = {2, 3, 1, 5, 6, 7, 8, 4, 9};

        /**
         * 自定义排序
         *  底层原理：
         *  利用 插入排序 + 二分查找 方式进行排序
         *  默认把0索引当作有序的序列，其余为无序的序列
         *  遍历无序序列每一个元素，假设当前遍历得到的元素为A
         *  把A往有序序列中进行插入，在插入的时候，利用二分查找确定A元素的插入点
         *  拿着A元素跟插入点的元素进行比较，比较的规则就是compare方法中的方法体
         *  如果方法的返回值是负数，拿着A继续跟前面的数据进行比较
         *  如果方法的返回值是正数，拿着A继续跟后面的数据进行比较
         *  如果方法的返回值是0，也拿着A跟后面的数据进行比较
         *  直到能确定A的最终位置为止
         *
         *  compare方法中的形参：
         *  o1: 表示在无序序列中遍历得到的每一个元素
         *  o2: 有序序列中的元素
         */
        Arrays.sort(arrays, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1 - o2;
            }
        });

        System.out.println(Arrays.toString(arrays));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

```

