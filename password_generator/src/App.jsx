import Generator from "./components/Generator";
function App() {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-700 flex flex-col gap-4 items-center justify-center text-white text-center">
        <h1 className="text-3xl font-bold text-purple-500 uppercase">password generator</h1>
        <Generator></Generator>
      </div>
    </>
  );
}

export default App;
