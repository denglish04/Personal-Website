export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center py-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg rounded-b-2xl">
      <h1 className="text-4xl font-bold mb-2">Djasahn English</h1>
      <h3 className="text-lg opacity-90">
        🚧 This page is currently under construction.  
        For contact info visit{" "}
        <a
          href="https://www.linkedin.com/in/djasahn-english"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-yellow-300 transition-colors"
        >
          LinkedIn
        </a>
      </h3>
    </header>
  );
}

