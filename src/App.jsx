import './App.css'
import Testimonials from './Components/Testimonials.jsx';
import reviews from './data.js';

function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className='text-center'>      
        <h1 className="font-bold text-4xl">Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonials reviews = {reviews} />
      </div>
    </div>
  );
}

export default App;