# function Call

- LLM 调用API 有什么缺点？
      - LLM 提前训练好的，新的知识或服务不知道的
        - LLM 插上隐形的翅膀，调用一些外部的内容或工具
        chat 之外，调用函数
        今天的天气这么样？
      - AIGC 没有足够的上下文，胡说八道
        - 给 LLM 足够的上下文
            Function 调用外部的天气服务
        - MCP 
            给大模型插入的USB
        - Promot 设计
        - 工作流
            设计节点让LLM 流程化
        - 知识库 
      - 我们可以将知识库（私有）交给大模型，LLM 更懂我们的知识
      不安全 。RAG

## Function Call
   让AIGC 从只会生成文本进化为能可靠执行操作，解决了自然语音到结构化
   调用的鸿沟，使模型能安全、可控地调用外部系统（知识库、服务），推动实用化落地。

   例
   “帮我订明天北京到上海的航班”
   
   - 简洁，强大
   - 习惯和依赖

## Function call 的流程

- 传统chat api调用，变成两步
  - 根据promot 和 tools 中的 description 语义关联性分析
        匹配到的function 名字和参数，type function
    - 执行function
    将函数的返回结果，再次交给大模型，分析正常的聊天

- 核心
  - openai 接口能力的升级，LLM 可以和外部系统、工具互动
      LLM 能力增强
  - chatbot 的用户体验更好
  - api 增量式的设计的很简约，学到了接口设计
      - function tool  tools 声明
        type，name，description，parameters
      - 返回结果 function.id
          role:'tool'
      
      