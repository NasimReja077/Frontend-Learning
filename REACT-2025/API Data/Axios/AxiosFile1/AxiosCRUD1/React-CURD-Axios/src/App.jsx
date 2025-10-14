import { Posts } from "./components/Posts";
import { SiAxios } from "react-icons/si";
<SiAxios />
const App = () => {
  

  return (

    <section className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-[#0f0f0f] dark:via-[#121212] dark:to-[#1a1a1a] transition-all duration-500 p-6">
       <header className="w-full max-w-6xl flex justify-between items-center mb-12">
        <h1 className="flex items-center gap-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          <SiAxios className="text-blue-500 text-4xl" />
          Axios Explorer
        </h1>
        <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">
          Explore
        </button>
       </header>
  
      <Posts />
    </section>
  );
};

export default App;
