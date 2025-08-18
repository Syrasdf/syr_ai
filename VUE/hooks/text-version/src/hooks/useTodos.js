import {
  ref,
  computed // 计算属性
} from "vue"

export function useTodos() {
  let title = ref("");
  let todos = ref([
    {
      title: "学习Vue",
      done: false
    }
  ])
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = "";
  }

  function clear() {
    // done false 留下，已完成的清楚
    todos.value = todos.value.filter((v) => !v.done);
  }

  // 未完成的 todos 
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  })

  let all = computed(() => {
    return todos.value.length;
  })
  let allDone = computed({
    get() {
      return active.value === 0;
    },
    set(value) {
      todos.value.forEach(todo => {
        todo.done = value;
      })
    }
  })
  return {
    title,
    todos,
    addTodo,
    clear,
    all,
    active,
    allDone
  }
}