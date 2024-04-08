'use client';

import useTodos from '@/hooks/useTodos';
import AddTodoForm from '@/components/AddTodoForm';
import Container from '@/components/container';
import TodoList from '@/components/TodoList';
import TodoSummary from '@/components/TodoSummary';

export default function Todo() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTdo,
    deleteAllCompletedTodos,
  } = useTodos();
  return (
    <>
      <Container className="">
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
          <h1 className="font-bold m-10 text-3xl text-center">
            Your Todo List
          </h1>
          <div className="max-w-lg mx-auto bg-slate-100 rounded-lg p-5 space-y-6">
            <AddTodoForm onSubmit={addTodo} />
            <TodoList
              todos={todos}
              onCompletedChange={setTodoCompleted}
              onDeleted={deleteTdo}
            />
          </div>
          <TodoSummary
            todos={todos}
            deleteAllCompleted={deleteAllCompletedTodos}
          />
        </main>
      </Container>
    </>
  );
}
