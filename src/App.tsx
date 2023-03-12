import ThemeButton from './components/ThemeButton';
import danielLogo from './assets/daniel.png';
import LinkedinButton from './components/LinkedinButton';
import GithubButton from './components/GithubButton';
import XingButton from './components/XingButton';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-100 text-black dark:from-black dark:via-black dark:to-slate-900 dark:text-slate-300">
      <div className="flex items-center p-5 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-50">
        <p className="flex-1 font-extrabold text-xl bg-clip-text">Portfolio</p>
        <ThemeButton />
      </div>
      <div className="z-10 flex flex-1 flex-col items-center text-center justify-center">
        <img className="rounded-full h-56 w-56 mb-5 object-cover object-right opacity-100" src={danielLogo} alt="" />
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600">
          Daniel Brandl
        </h1>
        <h2 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-600">
          Software Developer
        </h2>
      </div>
      <div className="flex items-center justify-end p-5 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-50">
        <GithubButton />
        <LinkedinButton />
        <XingButton />
      </div>
    </div>
  );
}

export default App;
