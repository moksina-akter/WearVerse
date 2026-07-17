import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-gray-900">404</h1>

      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-3 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 bg-gray-800  hover:bg-gray-700 text-white px-6 py-3 hover:scale-105 rounded-2xl transition-all duration-300"
      >
        Back To Home
      </Link>
    </div>
  );
}
