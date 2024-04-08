import Link from 'next/link';
import Button from './button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/todo" className="text-lg font-bold text-gray-900">
              Create Next App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <Link href="/" className="mt-4">
                Home
              </Link>
            </Button>
            <Button>
              <Link href="/todo" className="mt-4">
                To Do
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
