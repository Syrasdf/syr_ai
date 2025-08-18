# 居中

如何在常考题中拿高分

- 听清什么居中
    - 水平垂直
- 方式不是关键，区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding，
    - 固定宽高块级盒子
        1.水平垂直居中 absolute + margin 负值
          缺点需要知道盒子宽高
        2.水平垂直居中 absolute + margin auto（重要）
        3.absolute + calc (css calc 计算函数)
          缺点是性能差
    - 不固定宽高块级盒子水平垂直居中
        1.absolute + transform
          一个高效、简洁、兼容性好的居中定位方式，但它会让元素脱离文档流，需要注意响应式与层叠上下文问题。
        2.line-height + vertical-align 较为抽象
          垂直居中简单、无额外结构，性能好，但仅适用于行内/行内块元素，对多行文本或复杂布局不够灵活。
        3.writing-mode 设置书写方式

        4.table-cell 布局
          table-cell 是一种灵活的布局方式，适用于各种复杂布局场景，但需要注意表格结构的复杂性。
          
        5.flex 布局
          垂直居中语义清晰、适用范围广、响应式友好，但在老旧浏览器（如 IE9 及以下）不兼容，且对性能略高于传统布局方式。
        6.grid 布局
          grid 垂直居中功能强大、语义明确、布局灵活，但代码相对冗长，对旧浏览器兼容性差，学习成本也高于 flex。

