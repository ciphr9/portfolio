import ThemeButton from './components/ThemeButton';
import danielLogo from './assets/daniel.png';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 bg-gradient-to-tr from-white via-white to-slate-400 text-slate-700 dark:from-black dark:via-black dark:to-slate-900 dark:text-slate-300">
      <div className="flex items-center p-5">
        <p className="flex-1 font-extrabold text-xl bg-clip-text">Portfolio</p>
        <ThemeButton />
      </div>
      <div className="flex flex-1 flex-col items-center text-center justify-center">
        <img
          className="rounded-full h-56 w-56 mb-5 object-cover object-right opacity-100"
          src={danielLogo}
          alt=""
        />
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-600 to-cyan-500">
          Daniel Brandl
        </h1>
        <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-600 to-green-500">
          Software Developer
        </h2>
      </div>
    </div>
  );
}

export default App;
