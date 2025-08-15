# react 面试基础考点

- JSX map key ? 唯一值
  - todos 响应式状态改变了，界面更新
    - map 返回新数组， 重新渲染
      - 热更新
      - 只有第一个改变了，只热更新第一项
      - 旧状态  新状态  在内存之中
      - 对比差值  让界面更新
      - 性能
        - 重绘重排
      - 默认基于索引的比较 
      - 为什么不能用index作为key
         数组item顺序发生改变，索引发生改变的适合时候，浪费更新
         数组的开始插入新元素
          所以我们用id 唯一值

# 秋招面试

## JS 
  - Object.assign()

  - 响应式底层
    - Object.defineProperty()
    - Proxy

## Git

开发中如何使用git
全局配置
- git config --global user.name "xxx"
    git config --global user.email "xxx"
- 入职 git clone 公司代码
    - 主分支 main/master
        所有人都在用，线上分支
    - 新开一个分支
    在自己工作任务分支
    git checkout -b 分支名 

- 安装开发环境
    - node.js
    - git 环境
    - 公司发一个git 账号，私有项目
  -  
- 常用命令
    git pull origin main每天上班前的动作 
    git status  当前git状态
    git log --oneline 查看提交记录
    git add . 提交到暂存区
    git commit -m "xxx" 提交到本地仓库
    git push origin main 提交到远程仓库
- 场景
    - 回退
      git restore --staged . 取消暂存区的内容

