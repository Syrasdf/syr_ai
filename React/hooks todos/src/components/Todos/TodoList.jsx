import TodoItem from "./TodoItem"
const TodoList = (props) => {
    const {
        todos={todos},
        onToggle={onToggle},
        onDelete={onDelete}
    } = props
    return (
        <ul>
            {/* TodoList */}
            {
                todos.length > 0 ? (
                    todos.map((todo) => <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() => onToggle(todo.id)}
                    onDelete={() => onDelete(todo.id)} />)
                ): (
                    <p>暂无待办事项</p>
                )
            }
        </ul>
    )
}
export default TodoList