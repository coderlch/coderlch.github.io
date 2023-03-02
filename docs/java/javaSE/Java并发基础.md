---
lang: zh-CN
title: Java并发基础
description: Java并发基础
---



## 进程与线程

### 进程

> - 程序由指令和数据组成，但这些指令要运行，数据要读写，就必须将指令加载至 CPU，数据加载至内存。在指令运行过程中还需要用到磁盘、网络等设备。进程就是用来加载指令、管理内存、管理 IO 的。
> - 当一个程序被运行，从磁盘加载这个程序的代码至内存，这时就开启了一个进程。
> - 进程就可以视为程序的一个实例。大部分程序可以同时运行多个实例进程（浏览器），也有的程序只能启动一个实例进程（360 安全卫士）



### 线程

> - 一个进程之内可以分为一到多个线程。
> - 一个线程就是一个指令流，将指令流中的一条条指令以一定的顺序交给 CPU 执行。
> - Java 中，线程作为最小调度单位，进程作为资源分配的最小单位。 在 windows 中进程是不活动的，只是作为线程的容器。



### 线程与进程的对比

| 进程                                           | 线程                                       |
| ---------------------------------------------- | ------------------------------------------ |
| 进程间相互独立                                 | 进程内有一个或者多个线程，是进程的一个子集 |
| 进程拥有共享的资源，如内存空间，供内部线程共享 | 线程更轻量，线程上下文切换开销较进程小     |
| 同一台计算机进程间通信（IPC）                  | 线程间通信较为简单，因为共享进程的内存     |
| 不同计算机间进程通信（网络协议，HTTP）         |                                            |



### 并行与并发

> - 单核 cpu 下，线程实际还是串行执行的。操作系统中有一个组件叫做任务调度器，将 cpu 的时间片（windows下时间片最小约为 15 毫秒）分给不同的程序使用，只是由于 cpu 在线程间（时间片很短）的切换非常快，人类感觉是同时运行的 。
>
> -  微观串行，宏观并行。
> - 一般会将这种线程轮流使用 CPU 的做法称为并发(concurrent)。
> - 并发（concurrent）是**同一段时间内**处理多件事情的能力。
> - 并行（parallel）是**同一时刻**处理做多件事情的能力。



### 应用

> - 同步：需要等待结果返回，才能继续运行。
>
> - 异步：不需要等待结果返回，就能继续运行。
> - 充分利用多核 cpu 的优势，提高运行效率。
> - IO 操作不占用 cpu，只是我们一般拷贝文件使用的是【阻塞 IO】，这时相当于线程虽然不用 cpu，但需要一直等待 IO 结束，没能充分利用线程。所以才有后面的【非阻塞 IO】和【异步 IO】优化。
> - 多线程可以让方法执行变为异步的（即不要巴巴干等着）比如说读取磁盘文件时，假设读取操作花费了 5 秒钟，如果没有线程调度机制，这 5 秒 cpu 什么都做不了，其它代码都得暂停...





## Java线程

### 创建和运行线程

###### 继承Thread类

> - Thread类位于 `java.lang.Thread` 下。
> - [Thread API](https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html)

```java
        /**
         * 1. 自定义一个MyThread类并继承Thread类
         * 2. 重写run方法
         * 3. 创建MyThread类对象，调用start方法启动线程
         */
        MyThread myThread = new MyThread();
        myThread.start();


public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println(this.getName() + " 线程启动了。。。");
    }
}


```



###### 实现Runnable接口

> - Runnable接口位于 `java.lang.Runnable` 中
> - [Runnable API](https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html)

```java
        /**
         * 1. 自定义一个MyThread类并实现Runnable接口
         * 2. 重写run方法
         * 3. 创建MyThread类的对象
         * 4. 创建Thread类的对象，并传入MyThread类的对象
         * 5. 调用start方法启动线程
         */
        MyThread myThread = new MyThread();
        Thread thread = new Thread(myThread);
        thread.start();


public class MyThread implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " 线程启动了。。。");
    }
}
```



###### 实现Callable接口和Future接口

> - Callable接口位于 `java.util.concurrent.Callable` 中
> - Future接口位于 `java.util.concurrent.Future` 中，它的实现类位于 `java.util.concurrent.FutureTask` 中
> - [Callable API](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html)
> - [Future API](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html)
> - [FutureTask API](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/FutureTask.html)

```java
        /**
         * 1. 自定义一个MyThread类并实现Callable接口
         * 2. 重写call方法(有返回值，表示多线程运行的结果)
         * 3. 创建MyThread的一个对象（表示多线程要执行的任务）
         * 4. 创建FutureTask对象（用于管理多线程的运行结果）
         * 5. 创建Thread对象并传入FutureTask对象，然后调用start方法启动线程
         * 6. 获取多线程运行的结果
         */
        MyThread myThread = new MyThread();
        FutureTask<Integer> task = new FutureTask<>(myThread);
        Thread thread = new Thread(task);
        thread.start();

        System.out.println(task.get());  // 100


public class MyThread implements Callable<Integer> {
    @Override
    public Integer call() throws Exception {
        return 100;
    }
}

```



### Thread类常用方法

| 包   | 方法                             | 说明                           |
| ---- | -------------------------------- | ------------------------------ |
|      | String getName()                 | 返回此线程的名称               |
|      | void setName(String name)        | 设置线程的名字                 |
|      | static Thread currentThread()    | 获取当前线程的对象             |
|      | static void sleep(long time)     | 让线程休眠指定的时间，单位为ms |
|      | setPriority(int newPriority)     | 设置线程的优先级               |
|      | final int getPriority()          | 获取线程的优先级               |
|      | final void setDaemon(boolean on) | 设置为守护线程                 |
|      | public static void yield()       | 出让线程                       |
|      | public static void join()        | 插入线程                       |





