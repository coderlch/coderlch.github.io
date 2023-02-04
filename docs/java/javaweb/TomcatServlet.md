---
lang: zh-CN
title: Tomcat&Servlet
discription: Tomcat&Servlet
sidebarDepth: 6
---

## Web相关概念

### 软件架构

- C/S：客户端/服务器端
- B/S：浏览器/服务器端

### 资源分类

- 静态资源：所有用户访问后，得到的结果都一样。静态资源可以直接被浏览器解析（如 html，css，JavaScript）
- 动态资源：不同用户访问相同的资源，得到的结果可能不一样。动态资源被访问后需要先转换为静态资源，再返回给浏览器（如 servlet，jsp，asp，php）

### 网络通信三要素

1. IP：计算机在网络中的唯一标识
2. 端口：应用程序在计算机中的唯一标识（0~65536）
3. 传输协议：规定数据传输的规则（HTTP）



## Servlet

### 概念

1. Servlet就是一个接口，定义了java类被浏览器访问到（tomcat识别）的规则
2. 我们自己自定义一个类，实现Servlet接口，重写方法
3. 运行在服务器端的小程序（server applet）



### 快速开始

1. 创建javaEE项目

2. 自定义一个类，实现Servlet接口

3. 实现Servlet接口中的抽象方法

4. 在Web.xml中配置Servlet

    ```xml
        <servlet>
            <servlet-name>hello-servlet</servlet-name>
            <servlet-class>cn.coderlch.servlet.HelloServlet</servlet-class>
        </servlet>
        <servlet-mapping>
            <servlet-name>hello-servlet</servlet-name>
            <url-pattern>/hello-servlet</url-pattern>
        </servlet-mapping>
    ```



### Servlet执行原理

1. 服务器接收到浏览器的请求后，会解析请求url路径，获取访问Servlet的资源路径
2. 查找web.xml配置文件，是否有匹配 `<url-pattern>` 标签体内容
3. 如果有，则查找对应的 `<servlet-class>` 全限定名
4. tomcat会将该字节码文件加载进内存，然后创建对象，最后调用方法



### Servlet的生命周期

```java
    /**
    *  被创建
    *  执行init()方法，只执行1次
    *  默认情况下，第一次访问时被创建
    */
    @Override
    public void init(ServletConfig servletConfig) { }
    
    @Override
    public ServletConfig getServletConfig() {return null;}
    
    /**
    *  提供服务
    *  每次访问Servlet时，service方法都会被调用1次
    */
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) { }
    
    @Override
    public String getServletInfo() {return null;}
    
    /**
    *  被销毁，执行destroy方法，只执行1次
    *  Servlet被销毁之前执行，服务器正常关闭时执行该方法，非正常关闭不执行该方法
    *  一般用于释放资源
    */
    @Override
    public void destroy() { }

```



### 基于注解的Servlet开发

1. Servlet 3.0版本以上支持注解开发
2. 在Servlet的实现类上使用 @WebServlet 注解，配置 `@WebServlet("资源路径")` ，也可以配置多个路径，如：`@WebServlet({"url1", "url2", "url3"})`



### Servlet的体系结构

![image-20230128100006743](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202301281000959.png)

通常我们自定义类需要继承HttpServlet，然后重写doGet方法和doPost方法



## HTTP

### 基本概念

超文本传输协议：定义客户端和服务器端通信时的数据格式

特点：

1. 基于TCP可靠传输协议
2. 默认端口号为80
3. 基于 请求/响应 模型：一次请求对应一次响应
4. 无状态：每次请求之间都是独立的，不能交互数据

历史版本：

1. HTTP1.0 : 每一次请求响应都会新建立一个连接
2. HTTP1.1 : 复用连接



### HTTP的数据格式

1. 请求消息数据格式
    - 请求行
    - 请求头
    - 请求空行
    - 请求体
2. 响应消息数据格式
    - 响应行
    - 响应头
    - 响应空行
    - 响应体



### Request

当服务器端（tomcat）接收到请求消息后，会创建一个request对象，然后把请求消息中的数据封装到这个request对象，最后把它传递给service方法，我们在重写service方法时可以使用request对象来获取请求消息的数据



###### 获取请求行数据

ps:GET  /servlet/demo?id=123&name=zhangsan  HTTP/1.1

- String getMethod()                                 ----  获取请求方式：GET
- String getContextPath()                         ----  获取虚拟目录：/servlet
- String getServletPath()                          ----  获取Servlet路径：/demo
- String getQueryString()                         ----  获取get方式的请求参数：id=123&name=zhangsan
- String getRequestURI()                         ----  获取请求URI：/servlet/demo
- StringBuffer getRequestURL()              ----  获取请求URL：<http://localhost/servlet/demo>
- String getProtocol()                               ----  获取协议及版本：HTTP/1.1
- String getRemoteAddr()                        ----  获取客户机的IP地址



###### 获取请求头数据

- String getHeader(String name)            ----通过请求头的名称获取请求请求头的值
- Enumeration`<String>` getHeaderNames()        ----获取所有请求头的名称



###### 获取请全体数据

- 请全体：只有POST请求方式，才有请全体，在请全体中封装了POST请求的请求参数
- 步骤：
    1. 获取流对象
        - BufferedReader getReader()          ----获取字符输入流，只能操作字符数据
        - ServletInputStream getInputStream()          ----获取字节输入流，可以操作所有的数据类型
    2. 从流对象中拿数据



###### 获取请求参数通用方式

- String getParameter(String name)          ----根据参数名称获取参数值
- String[] getParameterValues(String name)          ----根据参数名称获取参数值的数组
- Enumeration`<String>` getParameterNames()          ----获取所有请求的参数名称
- Map<String, String[]> getParameterMap()          ----获取所有参数的map集合
- 注意：为解决中文乱码问题，应当在方法开始的位置添加 `request.setCharacterEncoding("UTF-8")` ,原因是tomcat不同版本其实现的默认编码格式不同



###### 请求转发

- 它是一种服务器内部资源跳转的方式
- 使用步骤：
    1. 通过request对象获取请求转发器对象：RequestDispatcher getRequestDispatcher(String path)
    2. 使用requestDispatcher对象来进行转发：forward(ServletRequest request, ServletResponse response)
- 特点：
    1. 浏览器地址栏路径不发生变化
    2. 只能转发到当前服务器内部资源中
    3. 转发是一次请求



###### 共享数据

- 域对象：一个作用范围的对象，可以在范围内共享数据
- request域：代表一次请求的范围，一般用于请求转发多个资源中的共享数据
- 方法：
    1. void setAttribute(String name, Object obj)          ----存储数据
    2. Object getAttribute(String name)          ----通过键获取值
    3. void removeAttribute(String name)          ----通过键移除键值对



###### ServletContext对象

概述：

- 全局对象，拥有作用域，对应一个tomcat中的Web应用
- 当Web服务器启动时，会为每一个web应用程序创建一块共享的存储区域（ServletContext）
- ServletContext在web服务器启动时创建，服务器关闭时销毁

获取ServletContext对象：

- GenericServlet提供了getServletContext()方法
- HttpServletRequest提供了getServletContext()方法
- HttpSession提供了getServletContext()方法

ServletContext应用：

- 获取项目真实路径：`String realPath = servletContext.getRealPath("/")`
- 获取项目上下文路径(应用程序名称)：servletContext.getContextPath()  ==  request.getContextPath()
- 全局容器：
    1. 存储数据：servletContext.setAttribute(String name, Object obj)
    2. 获取数据：servletContext.getAttribute(String name)
    3. 移除数据：servletContext.removeAttribute(String name)



### Response

###### 常用方法

| 方法名称                                  | 作用                               |
| :---------------------------------------- | ---------------------------------- |
| void setHeader(String name, String value) | 设置响应信息头                     |
| void setContentType(String type)          | 设置响应文件类型，响应式的编码格式 |
| void setCharacterEncoding(String charset) | 设置服务端响应内容编码格式         |
| PrintWriter getWriter()                   | 获取字符输出流                     |



###### 重定向

| 方法名称                           | 作用   |
| ---------------------------------- | ------ |
| void sendRedirect(String location) | 重定向 |

- sendRedirect跳转时，地址栏改变，代表客户端重新发送请求，属于2次请求
- response没有作用域，2次请求中的数据无法共享（可以通过URI拼接进行数据传递）
- 重定向是客户端行为
- 重定向是浏览器做了至少2次请求访问
- 重定向2次跳转之间传输的信息会丢失（request范围）
- 重定向可以指向任何资源



### 状态管理



###### 现有问题

> - HTTP协议是无状态的，不能保存每次提交的信息
> - 当客户端发来一个请求，服务器端无法知道它与上一次的请求是否有联系
> - 对于那些需要多次提交数据的web操作，就存在问题（如登录问题）



###### 概念

> 将浏览器与web服务器之间多次交互当作一个整体来处理，并且将多次交互所涉及到的数据（即状态）保存下来



###### 状态的分类

> - 客户端管理技术：将状态保存在客户端，代表性的是Cookie技术
> - 服务器端管理技术：将状态保存在服务端，代表性的是Session技术和application



###### Cookie技术

> - Cookie是在浏览器访问web服务器某个资源时，由web服务器在HTTP响应消息头中附带传送给浏览器的一小段数据
> - 一旦web浏览器保存了某个Cookie，那么以后再访问该资源时，都应在请求头中将这个Cookie回传给web服务器
> - 一个Cookie主要由名称（name）和值（value）组成

![image-20230129162612406](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202301291626711.png)



###### 创建Cookie

```java
Cookie cookie = new Cookie(name, value);          # 创建Cookie
    
cookie.setPath("资源目录")          # 设置Cookie的可访问资源路径
    
cookie.setMaxAge(number)          # >0为有效期，单位是秒; =0表示浏览器关闭就失效; <0表示内存存储，默认值是-1
    
response.addCookie(cookie);          # 添加到response对象中，响应时发送给客户端

```



###### 获取Cookie

```java
Cookie[] cookies = request.getCookies();

if(cookies != null) {
    for(Cookie cookie : cookies) {
        if(cookie.getName().equals("cookie名称")){
            code = cookie.getValue();
            break;
    }
}
```



###### 修改Cookie

> 只需要保证Cookie的名和路径一致，即可覆盖原来的Cookie，否则会新建一个Cookie

```java
Cookie cookie = new Cookie(name, value);
    
cookie.setPath("资源目录");
    
cookie.setMaxAge(number);
    
response.addCookie(cookie);

```



###### Cookie编码与解码

> Cookie默认不支持中文，只能包含ASCII字符，故需要对中文进行编码和解码

| 包                  | 方法                                              | 作用 |
| ------------------- | ------------------------------------------------- | ---- |
| java.net.URLEncoder | public static String encode(String s, String enc) | 编码 |
| java.net.URLDecoder | public static String decode(String s, String enc) | 解码 |



###### Cookie的优点与缺点

| 优点                                                       | 缺点                                             |
| ---------------------------------------------------------- | ------------------------------------------------ |
| 可配置到期规则                                             | 数据存储大小受到限制，大多数浏览器有4k，8k的限制 |
| 简单性：Cookie是一种基于文本的轻量结构，包含简单的键值对   | 客户端浏览器配置为Cookie禁用                     |
| 数据持久性：Cookie默认在过期之前可以一直存在客户端浏览器上 | 潜在的安全风险：Cookie可能被篡改                 |



###### Session技术

> - Session用于记录用户的状态
>
> - Session指的是在一段时间内，单个客户端与服务器的一连串相关的交互过程
>
> - 在一个Session中，客户端可能会多次请求访问同一个资源或者各种不同的服务器资源



###### Session原理

> - 服务器会为每一次会话分配一个Session对象
> - 同一个浏览器发起的多次请求，同属于一次会话(Session)
> - 首次使用Session时，服务器会自动创建Session，并创建Cookie存储SessionID发送回客户端



###### Session作用域

> - 拥有存储数据的空间，作用范围是一次会话
>
> - 一次会话是使用同一浏览器发送的多次请求，一旦浏览器关闭，会话结束
>
> - 可以将数据存入Session中，在一次会话中的任意位置进行获取
>
> - 可以传递任意数据类型（基本数据类型，对象，数组，集合）



###### 获取Session

```java
HttpSession session = request.getSession();
```



###### Session保存数据

```java
session.setAttribute("key", value);	    # 以键值对形式存储在Session作用域中
```



###### Session获取数据

```java
session.getAttribute("key");     # 通过String类型的key来访问Object类型的value
```



###### Session移除数据

```java
session.removeAttribute("key");     # 通过键移除session作用域中的值value
```



###### Session的生命周期

> - 开始：第一次使用到Session的请求产生，则创建Session
> - 结束：
>     - 浏览器关闭，则失效
>     - Session超时，则失效（  session.setMaxInactiveInterval(seconds) ，设置最大有效时间 ）
>     - 手工销毁，则失效（  session.invalidate()，如登录退出，注销  ）





## 过滤器

### 产生的原因

> 每个Servlet中存在冗余的代码

### 概念

> 过滤器（Filter）是处于客户端与服务器目标资源之间的一道过滤技术

![image-20230129095047747](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202301290950849.png)

### 过滤器的作用

> 1. 执行地位在Servlet之前，客户端发送请求时，会先经过Filter，再到达目标Servlet中，响应时，会根据执行流程再次反向执行Filter
> 2. 可以解决多个Servlet共性代码的冗余问题（如：乱码处理，验证登录）

### 编写过滤器

> Servlet API 提供了Filter接口，开发者只需编写一个java类实现这个接口即可，编写的java类称为Filter
>
> 实现步骤：
>
> 1. 编写java类实现Filter接口
> 2. 在doFilter()方法上编写拦截逻辑
> 3. 设置拦截路径（xml配置  /  @WebFilter(value = "/拦截的目标资源")）

### 过滤器配置

###### 注解配置

> 在自定义的Filter类上使用注解 @WebFilter(value = "/拦截的目标资源")

###### xml配置

```xml
<filter>
    <filter-name>xxx</filter-name>
    <filter-class>xxx</filter-class>
</filter>
<filter-mapping>
    <filter-name>xxx</filter-name>
    <url-pattern>/xxx</url-pattern>
</filter-mapping>
```

### 过滤器链与优先级

###### 过滤器链

> - 客户端对服务器请求后，服务器调用Servlet之前会执行一组Filter，这一组Filter称为过滤器链
> - 每个过滤器实现特定的功能，当第一个Filter的doFilter()被调用时，web服务器会创建一个代表Filter链的FilterChain对象传递给该方法（类似request和response）。在doFilter()中如果调用了FilterChain对象的doFilter(),则web服务器会检查FilterChain对象中是否还有Filter，如果有，则调用第二个，如果没有，则调用目标资源

![image-20230129104654010](https://lch-figurebed.oss-cn-shenzhen.aliyuncs.com/202301291046094.png)

###### 过滤器的优先级

> 在一个web应用程序中，	可以开发编写多个Filter，这些Filter组合起来称之为Filter链
>
> 优先级：
>
> - 注解配置时，按照类的全限定名的字符串顺序来决定作用顺序
> - web.xml配置时，按照 `<filter-mapping>`  注册顺序，从上往下
> - web.xml配置高于注解配置



