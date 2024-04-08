import Container from '@/components/container';
import Todo from './todoPage';

export const metadata = {
  title: 'To Do App',
  description: 'My Next.js Todo App',
};

export default function TodoApp() {
  return (
    <>
      <Todo />
    </>
  );
}
