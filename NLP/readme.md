# 机器学习

- notebookllm
  你不知道的JavaScript 深入学习
  AI 播客

- modelscope模型
  阿里开源大模型社区
- python  notebook 学习
  ipynb  后缀
  nlp 机器学习文档格式

- python 
  nlp机器学习 第一语言
  js 也挺好   

- 引入了pipeline模块，用于构建和执行机器学习管道。
  model 中国第一大模型社区
  魔搭
  from modelscope.pipelines import pipeline  # 修正导入模块拼写错误，原 pipelinrs 改为 pipelines
  from modelscope.utils.constant import Tasks  导入Tasks模块，用于定义不同的任务类型。
  semantic_cls = pipeline(Tasks.text_classification, 'damo/
  nlp_structbert_sentiment-classification_chinese-base')

  下载这个大模型
  这个模型是用于文本情感分析的任务。它将输入的文本转换为一个情感类别，如正面、负面或中性。
  
  result = semantic_cls(input = '那天我看了57次日落')
  print(result)

  {'scores': [0.9346097707748413, 0.06539023667573929], 'labels': ['正面', '负面']}
