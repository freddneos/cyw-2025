import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6 hover:drop-shadow-lg transition-all" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} className="h-24 p-6 hover:drop-shadow-lg transition-all" alt="Preact logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-6 mb-4">Vite + Preact</h1>
      <div className="p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-dark-pastel-green hover:bg-dark-pastel-green-600 text-white font-medium py-2 px-4 rounded mb-4 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-eerie-black-3 px-2 py-1 rounded text-sm">src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mb-2">
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
          className="text-dark-pastel-green hover:underline"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p className="text-gray-500 text-sm">
        Click on the Vite and Preact logos to learn more
      </p>
    </div>
  )
}
