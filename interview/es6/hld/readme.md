# 红绿灯考题

- fetch 能不能终止？
   - 请求结果还没来，用户切换路由了，组件卸载了，内存泄漏
   - 在组件卸载前，把fetch 给干掉

   可以使用 AbortController 来终止请求。
   const controller = new AbortController();

- promise考题
   
- signal 
     信号
     用于对各种异步任务，发送类似中断的信号