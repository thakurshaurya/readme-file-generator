import Pagetop from "./components/Pagetop";
import Pagemiddle from "./components/Pagemiddle";

export default function Home() {
  return (
    <div className="py-5 px-3 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 min-h-screen flex flex-col items-center ">
      <Pagetop />
      <Pagemiddle />
    </div>
  );
}
