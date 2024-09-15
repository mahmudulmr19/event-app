import { AlertCircle } from "lucide-react";

export default function ErrorPage({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <AlertCircle className="text-red-500 mb-4 h-12 w-12" /> {/* Icon */}
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-8">{searchParams.error}</p>
      <a href="/" className="btn-primary">
        Back to Homepage
      </a>
    </div>
  );
}
