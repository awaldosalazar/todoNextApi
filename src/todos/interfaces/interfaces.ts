import { Todo } from "@prisma/client";

export interface ITodos {
    todos: Todo[];
}

export interface ITodo {
    todo: Todo;
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>
}