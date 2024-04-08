import cn from '.././../utils/cn';
import React from 'react';
import { useState } from 'react';

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);
    setInput('');
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className={cn(
          'border',
          'border-gray-400',
          'grow',
          'rounded-s-md',
          'p-2' // Add margin to separate input and button
        )}
        placeholder="Add a new todo ?"
      />
      <button
        type="submit"
        className={cn(
          'bg-slate-900',
          'hover:bg-blue-700',
          'text-white',
          'rounded-e-md',
          'w-16',
          'hover:bg-slate-700'
        )}
      >
        Add
      </button>
    </form>
  );
}

// import Button from '@/components/button';

// export default function AddTodoForm() {
//   return (
//     <form className="flex">
//       <input
//         type="text"
//         className="border border-gray-300 rounded-s-md p-2"
//         placeholder="Add a new todo ?"
//       />
//       <Button className="bg-purple-500 hover:bg-purple-700 text-white rounded-s-md p-2">
//         Add
//       </Button>
//     </form>
//   );
// }
