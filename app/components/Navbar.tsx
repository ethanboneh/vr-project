// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-center">
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/tickets"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Tickets
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
