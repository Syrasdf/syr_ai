# mcp 

- function call
    可以让LLM 突破自身知识和能力的局限，通过调用外部工具
    或API来获取实时信息、执行计算或操作，从而获取最新数据
    精确计算或外部系统交互的复杂任务。
- mcp Model Context Protocol
    是一个协议，web开发中的Restful 协议，如何将外部 资源
    暴露给LLM 的协议和编程风格

    MCP 是 LLM 与外界之间的通信协议，它就好像USB，LLM 训练完后的不了解的知识

    LLM 本身不知道这么调用地图、数据库、搜索引擎，mcp 规定了标准上下文交换
    方式，让模型能像调用API一样去访问外部能力

## 举例
    高度地图MCP，请帮我规划从公司到机场的路线 
    模型根据高德地图MCP插件，获取实时路径和交通数据

## 意义
- LLM 输出更可靠
- 数据安全可控
高德地图接入mcp，就像大模型的眼睛和耳朵，让AI真正理解和实时世界。


- 安装mcp客户端 cline
- 高德地图apikey

## mcp 的使用
- server 是基于MCP协议的服务器软件
    定义tool......
- LLM
- mcp client cline/cursor
    配置mcp server
- LLM -> cline/cursor -> server Transport 通信
