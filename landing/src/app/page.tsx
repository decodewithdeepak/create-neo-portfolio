import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-blue-950 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        <Image
          src="/favicon.ico"
          alt="Neo Portfolio CLI Logo"
          width={64}
          height={64}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          Neo Portfolio CLI & Template
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-200">
          Instantly create a modern, customizable developer portfolio with a
          single CLI command.
          <br />
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-col items-center gap-2 mb-8">
          <code className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded text-lg font-mono text-blue-700 dark:text-blue-200">
            npx create-neo-portfolio
          </code>
          <span className="text-sm text-gray-500">
            No install required. Just run the command above!
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="https://www.npmjs.com/package/create-neo-portfolio"
            target="_blank"
            rel="noopener"
            className="underline text-blue-600 dark:text-blue-300"
          >
            NPM
          </a>
          <a
            href="https://github.com/decodewithdeepak/create-neo-portfolio"
            target="_blank"
            rel="noopener"
            className="underline text-blue-600 dark:text-blue-300"
          >
            GitHub
          </a>
          <a
            href="https://decodewithdeepak.vercel.app"
            target="_blank"
            rel="noopener"
            className="underline text-blue-600 dark:text-blue-300"
          >
            Example Portfolio
          </a>
        </div>
        <div className="mb-8">
          <Image
            src="/profile-gif.gif"
            alt="Demo Screenshot"
            width={600}
            height={300}
            className="rounded shadow mx-auto"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-200">
          Features
        </h2>
        <ul className="text-left text-gray-700 dark:text-gray-200 mb-8 list-disc list-inside mx-auto max-w-md">
          <li>Minimal, modern design</li>
          <li>Fully responsive</li>
          <li>Easy to customize</li>
          <li>Dark and light theme support</li>
          <li>Dynamic OpenGraph/Twitter images</li>
          <li>Blog, contact form, and more</li>
        </ul>
        <div className="text-center text-gray-500 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://decodewithdeepak.vercel.app"
            className="underline"
          >
            Deepak Modi
          </a>
        </div>
      </div>
    </main>
  );
}
