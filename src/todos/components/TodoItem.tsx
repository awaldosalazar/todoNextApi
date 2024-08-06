'use client';

import { startTransition, useOptimistic } from 'react';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import styles from './TodoItem.module.css'
import { ITodo } from "../interfaces/interfaces"

export const TodoItem = ({ todo, toggleTodo }: ITodo) => {
    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({ ...state, completed: newCompleteValue })
    );

    const onToggletodo = async () => {
        try {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed))
            await toggleTodo(todoOptimistic.id, !todoOptimistic.completed)
        } catch (error) {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed))
        }
    }

    return (
        <div className={todoOptimistic.completed ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div
                    onClick={onToggletodo}
                    className={`flex p-2 rounded-md cursor-pointer
                                hover:bg-opacity-60
                                ${todoOptimistic.completed ? 'bg-blue-100' : 'bg-red-100'}`}
                >
                    {
                        todoOptimistic.completed ?
                            <IoCheckboxOutline size={30} />
                            :
                            <IoSquareOutline size={30} />
                    }
                </div>
                <div className="text-center sm:text-left">
                    {todoOptimistic.description}
                </div>
            </div>
        </div>
    )
}
