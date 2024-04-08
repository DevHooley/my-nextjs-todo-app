'use client';
import Button from '@/components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <article className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold p-10 text-center">
            Next.js To Do App
          </h1>
          <Button>
            <Link href="/todo">To Do</Link>
          </Button>
        </div>
      </article>
    </main>
  );
}
