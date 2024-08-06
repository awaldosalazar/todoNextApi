import { Todo } from "@prisma/client";

const sleep = (seconds: number = 0): Promise<Boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}

export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
    // TODO: Actialización optimizta
    // await sleep(2)
    const body = { completed }

    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .catch(err => console.log(err.message));

    return todo;
}

export const createTodo = async (description: string): Promise<Todo> => {

    const body = { description }

    const todo = await fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .catch(err => console.log(err.message));

    return todo;
}

export const deleteCompletedTodos = async () => {
    const todo = await fetch('/api/todos', {
        method: 'DELETE'
    })
        .then(response => response.json())
        .catch(err => console.log(err.message));

    return todo;
}