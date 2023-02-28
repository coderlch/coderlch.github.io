---
lang: zh-CN
title: 基础IO流
description: 基础IO流
---



## 字节流

> 
>



## 字符流

> 
>



## 字节缓冲流

> 
>



## 字符缓冲流

> 
>



## 转换流

> 转换流是字节流和字符流之间的桥梁。
>
> 转换流可以指定字符集读写数据。
>
> 字节流想要使用字符流中的方法。

<img src="https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302191029637.png" alt="image-20230219102936502"  />



```java
        // 以GBK格式读取文件，以UTF-8格式写入文件

        InputStreamReader isr = new InputStreamReader(new FileInputStream("a.txt"), "GBK");
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream("b.txt"), "UTF-8");

        int len;
        while ((len = isr.read()) != -1) {
            osw.write(len);
        }

        osw.close();
        isr.close();

```



## 序列化流

> - 序列化：可以把java中的对象写入到本地文件中。
> - 反序列化：把序列化到文件中的对象，读取到内存中来。
> - 序列化后的对象的数据一旦更改，就无法再次读取回来。
> - 在使用序列化流时，注意序列化的对象需要实现 Serializable 接口。
> - 定义类时，需要固定序列化的版本号（private static final long serialVersionUID = 123L;）
> - 给成员变量添加transient关键字修饰，表示该成员变量不参与序列化过程。

<img src="https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302191126890.png" alt="image-20230219112636743"  />



| 包                         | 方法                                        | 说明                           |
| -------------------------- | ------------------------------------------- | ------------------------------ |
| java.io.ObjectOutputStream | public ObjectOutputStream(OutputStream out) | 把基本流包装成高级流           |
| java.io.ObjectOutputStream | public final void writeObject(Object obj)   | 把对象序列化(写出)到文件中去   |
| java.io.ObjectInputStream  | public ObjectInputStream(InputStream in)    | 把基本流包装成高级流           |
| java.io.ObjectInputStream  | public final Object readObject()            | 把文件中序列化的对象读取到内存 |



```java
        // 创建对象
        Student s = new Student("coderlch", 18);
        // 创建序列化流对象
        ObjectOutput objectOutput = new ObjectOutputStream(new FileOutputStream("c.txt"));
        // 调用方法
        objectOutput.writeObject(s);
        objectOutput.close();

```

```java
        // 创建反序列化流对象
        ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream("c.txt"));
        // 调用方法
        Student o = (Student)objectInputStream.readObject();
        System.out.println(o);
        //关闭资源
        objectInputStream.close();

```



## 字节打印流

> - 打印流一般指 PrintStream、PrintWriter 两个类。
> - 打印流只操作文件目的地，不操作数据源。
> - 特有的写出方法，可以实现数据的原样写出、自动刷新、自动换行。

<img src="https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302191243520.png" alt="image-20230219124310393"  />

| 包                  | 方法                                                  | 说明                             |
| ------------------- | ----------------------------------------------------- | -------------------------------- |
| java.io.PrintStream | public PrintStream(OutputStream/File/String)          | 关联字节输出流/文件/文件路径     |
| java.io.PrintStream | public PrintStream(String fileName, Charset charset)  | 指定字符编码                     |
| java.io.PrintStream | public void write(int b)                              | 常规方法将指定字节数据写出       |
| java.io.PrintStream | **public void println(Xxx, xx)**                      | 打印任意数据，自动刷新，自动换行 |
| java.io.PrintStream | **public void print(Xxx, xx)**                        | 打印任意数据，不换行             |
| java.io.PrintStream | **public void printf(String format, Object... args)** | 带有占位符的打印语句，不换行     |



## 字符打印流

> - 自动刷新需要开启，特有的println自动换行。

<img src="https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202302191305215.png" alt="image-20230219130517090"  />

| 包                  | 方法                                                         | 说明                         |
| ------------------- | ------------------------------------------------------------ | ---------------------------- |
| java.io.PrintWriter | public PrintWriter(Write/File/String)                        | 关联字节输出流/文件/文件路径 |
| java.io.PrintWriter | public PrintWriter(String fileName, Charset charset)         | 指定字符编码                 |
| java.io.PrintWriter | public PrintWriter(Write w, boolean autoFlush)               | 自动刷新                     |
| java.io.PrintWriter | public PrintWriter(OutputStream out, boolean autoFlush, Charset charset) | 指定字符编码并自动刷新       |
| java.io.PrintWriter | public void write(...)                                       | 常规方法，写出字节或者字符串 |
| java.io.PrintWriter | **public void println(Xxx, xx)**                             | 打印任意类型的数据并换行     |
| java.io.PrintWriter | **public void print(Xxx, xx)**                               | 打印任意类型的数据，不换行   |
| java.io.PrintWriter | **public void printf(String format, Object... args)**        | 带有占位符的打印语句         |



## 工具



