export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex justify-end">
        <svg
          className="h-12 w-12 text-gray-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          <circle cx="12" cy="12" r="7" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      </div>
    </header>
  );
}
