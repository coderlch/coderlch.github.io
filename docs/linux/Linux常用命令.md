---
lang: zh-CN
title: Linux常用命令
description: Linux常用命令
---

## 系统服务管理

### 查看系统服务的各个状态

```sh
systemctl list-units --type=service
```

### 查看服务的运行状态

```sh
systemctl status xxx    # xxx表示服务
```

### 启动服务

```sh
systemctl start xxx    # xxx表示服务
```

### 关闭服务

```sh
systemctl stop xxx    # xxx表示服务
```

### 重启服务

```sh
systemctl restart xxx    # xxx表示服务
```

### 重新载入配置信息而不中断服务

```sh
systemctl reload xxx    # xxx表示服务
```

### 禁止开机自启动

```sh
systemctl disable xxx    # xxx表示服务
```

### 设置服务开机自启动

```sh
systemctl enable xxx    # xxx表示服务
```





## 文件管理

```sh
ls -al targetcatalog    # 列出指定目录targetcatalog下的所有文件，包括隐藏文件和当前目录及上一级目录
pwd    # 获取目前所在工作目录的绝对路径
cd targetcatalog    # 更改当前目录到指定目标目录，用于目录切换
date    # 显示或修改系统时间与日期
password username    # 修改设置指定的用户名密码
su -    # 切换到超级用户
clear    # 清除屏幕信息
man commond    # 显示指定命令commond的帮助信息
who -r    # 查询系统处于什么运行级别
who -buT    # 显示目前登录到系统的用户
free -mh   # 显示系统内存状态
ps -ef    # 显示系统进程运行状态
ps -ef | grep xxx    # 查看xxx进程的运行状态
top    # 查看即时活跃的进程，类似windows的任务管理器
mkdir -p xxx    # 递归创建多级目录
more -c -x    # 分页查看文件，x表示每页显示的行数
cat -b    # 查看文件内容并标明行号，适用于文件内容少的情况
touch x    # 创建文件x
rm -rf file | targetcatalog    # 强制删除目标文件或者目录及其子目录
cp -r source target    # 用于复制源目标到指定目标，可用是文件或目录，-r表示可递归复制
mv source target    # 用于移动源目标到指定目标，可以是文件或目录，还具有重命名功能


```

