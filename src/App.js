import './App.css';
import Tag from './Components/Tag';
import Random from './Components/Random';
function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col background items-center overflow-y-auto'>
      <h1 className=' bg-white rounded-lg w-11/12 mt-[40px] text-center font-extrabold px-10 py-2 text-2xl uppercase'> Random Gifs </h1>
      <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <Random></Random>
      <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
