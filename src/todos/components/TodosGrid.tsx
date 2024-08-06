'use client';

import { TodoItem } from "./TodoItem";
import { ITodos } from "../interfaces/interfaces";
// import * as todosApi from "../helpers/todos";
import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

export const TodosGrid = ({ todos = [] }: ITodos) => {

    const router = useRouter();

    // const toggleTodo = async (id: string, completed: boolean) => {
    //     const updateTodo = await todosApi.updateTodo(id, completed);
    //     router.refresh();
    // }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}
