import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-sea-600">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Strona nie znaleziona</h2>
        <p className="mt-2 text-gray-600">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sea-600 hover:bg-sea-700"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}