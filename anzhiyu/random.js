var posts=["2024/05/04/Linux线程/","2024/05/02/Makefile/","2024/04/29/Socket编程/","2024/05/03/嵌入式Linux系统的构建/","2024/05/02/交叉编译工具链配置/","2024/05/03/嵌入式软件面试题/","2024/05/04/简单工厂模式模板/","2024/05/03/线程同步/","2024/04/30/进程/","2024/05/02/踩坑记录/","2024/04/30/进程间通信/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };