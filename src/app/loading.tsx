export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-2 border-[var(--color-sky-3)] border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 font-sans text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
