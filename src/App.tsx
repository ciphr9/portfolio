import ThemeButton from './components/ThemeButton';
import logo from './assets/logo.png';
import LinkedinButton from './components/LinkedinButton';
import GithubButton from './components/GithubButton';
import XingButton from './components/XingButton';

function App() {
  return (
    <div className="select-none cursor-default flex flex-col h-screen bg-slate-800 bg-gradient-to-tr from-slate-500 via-white to-slate-300 text-black dark:from-black dark:via-black dark:to-slate-900 dark:text-slate-300">
      <div className="flex items-center p-5">
        <p className="flex-1 font-extrabold text-xl bg-clip-text">Portfolio</p>
        <ThemeButton />
      </div>
      <div className="z-10 flex flex-1 flex-col items-center text-center justify-center">
        <img className="rounded-full h-56 w-56 mb-5" src={logo} alt="logo" />
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300">
          Daniel Brandl
        </h1>
        <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-300">
          Software Developer
        </h2>
      </div>
      <div className="flex items-center justify-end p-5">
        <GithubButton />
        <LinkedinButton />
        <XingButton />
      </div>
    </div>
  );
}

export default App;
