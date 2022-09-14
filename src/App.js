import './App.css';
import { GitHub, Linkedin, Mail, Twitter, MapPin, Settings } from 'react-feather';

function App() {
  return (
    <div className="App">

      <div className="overflow-hidden w-screen h-screen bg-gradient-to-r from-[#0F1A20] to-[#1e343f] flex justify-center items-center box-border">
      
        {/* Naming */}
        <div className="text-left absolute left-0 top-0 ml-16 mt-12">
          <span className="text-[#f42c04] text-[3em] font-bold">Konst</span> 
          <br />
          <span className="text-slate-300 text-[1.4em]">Kostiantyn Bielienko</span>
          <br />
          
          {/* Social links */}
          <div className="flex justify-start text-gray-500 pt-3">
            <GitHub size={18} className="cursor-pointer" onClick={()=> window.open("https://github.com/KonstantinBelenko", "_blank")} />
            <Linkedin size={18} className="ml-5 cursor-pointer" onClick={()=> window.open("https://www.linkedin.com/in/konstantin-belenko-bb54631b9/", "_blank")} />
            <Twitter size={18} className="ml-5 cursor-pointer" onClick={()=> window.open("https://twitter.com/KonstantinBele7", "_blank")}/>
            <Mail size={18} className="ml-5 cursor-pointer" onClick={()=> window.open("mailto: konstantinbelenko@gmail.com", "_blank")} />
          </div>

          <br />
          <br />

          {/* Location */}
          <div className='text-gray-400 flex items-center text-[18px]'>
            <MapPin size={18} /> <span className='ml-2'>Barcelona, Catalonia, Spain</span>
          </div>

          {/* Position */}
          <div className='text-gray-400 flex items-center text-[18px] mt-2'>
            <Settings size={18} /> <span className='ml-2'>DevOps Engineer</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
