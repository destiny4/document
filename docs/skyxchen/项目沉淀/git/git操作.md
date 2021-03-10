## 使用补丁

### patch 和 diff 的区别

>   `Git` 提供了两种补丁方案，一是用 `git diff` 生成的 `UNIX` 标准补丁 `.diff` 文件，二是 `git format-patch` 生成的 `Git` 专用 `.patch ` 文件

-  `.diff` 文件只是记录文件改变的内容，不带有 `commit` 记录信息,多个 `commit` 可以合并成一个 `diff` 文件
-  `.patch` 文件带有记录文件改变的内容，也带有 `commit` 记录信息,每个 `commit` 对应一个 `patch` 文件。

> 在 `Git` 下，我们可以使用 `.diff` 文件也可以使用 `.patch ` 文件来打补丁，主要应用场景有： `CodeReview` 、代码迁移等。 

### 创建 patch 和 diff

> 获取 `git commit` 的 `sha1 id` 

```shell
git log
```

#### 创建 patch

1. 某次提交（含）之**前**的几次提交

```shell
git format-patch [commit的sha1 id] -n
```

 `eg` 

```shell
git format-patch ece801f2707eac3c77cc00a7af35fd4556a02e53 -3
```

将会创建包含对应 `id` 在内之前的三个 `patch` 

2. 某两次提交之间的所有 `patch:` 

```shell
git format-patch 9a2998f11dc25cabf335507d9ce5b57a831198af..ece801f2707eac3c77cc00a7af35fd4556a02e53
```

#### 创建 diff

1. 根据 `id` 创建 `diff` 

```shell
git diff [commit的 sha1 id] > filename.diff
```

> 可以有多个 `id` ，用空格隔开

 `eg` 

```shell
git diff 3e91c27840fe09982c9d53f9d927d6d80b9bbc10 a9f6a38a6d7f55b8d7ea9caac6e9550c01c88b51 > new.diff
```

2. 创建两个提交记录之间的 `diff` 

```shell
git diff 3e91c27840fe09982c9d53f9d927d6d80b9bbc10..a9f6a38a6d7f55b8d7ea9caac6e9550c01c88b51 > new.diff
```

> 和上面的区别就是这个操作会创建两个 `id` 之间的 `diff` 

### 应用 patch 和 diff

1. 检查补丁是否能用（因为补丁文件可能会和现有文件有冲突）

```shell
git apply --check filename.[diff/patch]
```

2. 应用补丁

```shell
git [am/apply] filename.[diff/patch]
```

### 冲突解决

在打补丁过程中有时候会出现冲突的情况，有冲突时会打入失败

此时需要解决冲突

1. 首先使用 以下命令行，自动合入 `patch` 中不冲突的代码改动，同时保留冲突的部分：

```shell
git  apply --reject  xxxx.patch
```

在终端中会显示出冲突的大致代码

同时会生成后缀为 `.rej ` 的文件，保存没有合并进去的部分的内容，可以参考这个进行冲突解决。 

2. 解决完冲突后删除后缀为 `.rej  ` 的文件，并执行`git add.`添加改动到暂存区. 
3. 接着执行`git am --resolved`或者`git am --continue`

> 在打入 `patch` 冲突时，可以执行`git am --skip`跳过此次冲突，也可以执行`git am --abort`回退打入 `patch` 的动作，还原到操作前的状态。


