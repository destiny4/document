### 启动容器

> docker attach [containerid]

上述命令进入容器使用exit退出容器时会停止容器,不会进入终端

> docker exec -it [containerid] bash  

### 打包

> docker build -t [name] .

### 启动镜像

> docker run -p 8008:80 -d [name]

### 其他命令

- docker images 展示所有镜像
- docker kill [containerid] 关闭镜像
- docker rm [containerid] 删除容器
- docker rmi [imageid] 删除镜像
- docker rmi/kill/rm $(docker images/ps [-a] -q) 删除所有
- docker ls/ps -a 列举所有镜像，容器 

