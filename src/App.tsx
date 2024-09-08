import "./App.css";
import { Ldiv } from "./components/Ldiv";
import { Rdiv } from "./components/Rdiv";

function App() {
  return (
    <div>
      <div className="h-full bg-stone-900 xl:pt-16 selection:bg-highlight selection:text-stone-900 pt-4 pb-0.5">
        <div className="xl:grid xl:grid-cols-12 xl:mx-40 h-full gap-7 xl:relative  xl:w-[1200px] md:w[300px]  mx-3">
          <div className="col-span-3 border bg-stone-950 border-stone-1000 rounded-3xl overflow-hidden xl:sticky inset-y-16 mb-10 lg:h-[750px] h-[550px]">
            <Ldiv />
          </div>
          <div className="col-span-9 border bg-stone-950 border-stone-1000 rounded-3xl overflow-hidden   mb-10">
            <Rdiv />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
