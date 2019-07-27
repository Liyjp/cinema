1.首先将MongoDB安装完成后，建立一个数据库cinema，然后在该数据库下创建一个collection为movies

2.打开该项目，在根目录下的命令行下输入node service

3.成功之后再浏览器中http://127.0.0.1:1003/
![1.PNG](https://upload-images.jianshu.io/upload_images/16223289-b7899bbad760d91c.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.功能说明：

#### 最上面是轮播图，选取了优酷网站中最热门的几部电影（所给的数据库中没有），点击连接后直接跳转至优酷对应的电影播放界面，如下：
![6.png](https://upload-images.jianshu.io/upload_images/16223289-74489213ea6751fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 在搜索框中可以根据ID或者title进行对电影的搜索，如下：
![4.png](https://upload-images.jianshu.io/upload_images/16223289-b6d2b4a6467a6e29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![5.png](https://upload-images.jianshu.io/upload_images/16223289-f62f1ad9f560178a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 电影类型分类，点击某一类型，会出现对应的电影，如下：
![2.png](https://upload-images.jianshu.io/upload_images/16223289-216fd88e78ce767a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 点击某一电影会出现详细信息，如下：

![3.png](https://upload-images.jianshu.io/upload_images/16223289-3d65ec06872c3a24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



5.该系统的一些不足：

部分电影的image无法显示，只能显示出对应的alt;

部分电影的详细信息可能无法显示出来；

点击电影的类型时，有时候会自动刷新界面，回到最初的界面，而最初的界面显示的电影都是rating在9.0以上的电影。






# Final project：思沃影院

## 要求
- 实现原型中的功能，但具体界面设计不作限制
- 每个用户故事的开发尽量以TDD的方式完成（先写测试后实现功能）

## 项目资源

- 产品原型：见代码库根目录的`prototype.svg`文件
- 用户故事：见代码库根目录的`user-stories.md`文件
- 技术选型（仅供参考，不作限制）：见代码库根目录的`technology.md`文件
- 电影数据（仅供参考，不作限制）：见代码库根目录的`movies.csv`文件

## 输出结果

将团队练习代码库地址提交到任务卡。

代码库需包含：

1. 说明如何运行和测试代码的README.md文件
2. 运行结果截图的result.png文件

## 学习资源

- git-recipes：[https://github.com/geeeeeeeeek/git-recipes/wiki](https://github.com/geeeeeeeeek/git-recipes/wiki)
