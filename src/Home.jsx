import React,{useState,useEffect} from 'react';
import './home.css'
import img1 from './assests/apna.png'
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuFileSearch } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import img2 from './assests/phone.png';
import img3 from './assests/jack.png';
import img4 from './assests/april.jpeg';
import img5 from './assests/john.png';
import img6 from './assests/rachel.png';
import img7 from './assests/william.jpeg';
import img8 from './assests/winter.jpeg';
import img9 from './assests/Stella.png';
import img10 from './assests/freshers-jobs.png';
import img11 from './assests/work-from-home-jobs.png'
import img12 from './assests/part-time-jobs.png';
import img13 from './assests/women-jobs.png';
import img14 from './assests/international-jobs.png'
function Home() {

  const toggleNavbar = function () {
    var items = document.querySelector('.togglebutton');
    
    console.log('welcome')
    if (items.style.display === 'flex') {
        items.style.display = 'none';
    } else {
        items.style.display = 'flex';
    }
  }


  //for placeholdertext changing

  const placeholderText=[
    'skills',
    'title',
    'company'
  ];
  //state to track current placeholder index
  const [currentIndex,setCurrentIndex]= useState(0);

  useEffect(()=>{
    const changePlaceholder=()=>{
      setCurrentIndex((prevIndex)=>(prevIndex+1)%placeholderText.length);
    };

    const intervalId=setInterval(changePlaceholder,1500);

    return()=>clearInterval(intervalId);
  },[placeholderText.length]);
  
    const [selectedCity, setSelectedCity] = useState('');
  
    // Array of popular cities in India
    const popularCities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Jaipur",
      "Pune",
      "Ahmedabad",
      "Lucknow",
    ];
  
    // Function to handle city selection
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
    };
  

   


  return (
    <>
    <header className='head'>
      <div className="headmain">
      <div className="fnav">
        
      <img id='img1' src={img1} alt={'err'} height={'50px'} width={'50px'} />


      <button className='hamburger' onClick={toggleNavbar}>☰</button>
      <div className="togglebutton" >
      <button className="closeButton" onClick={toggleNavbar}>✕</button>
      <div className="dropdown">
          <Link className='dropdownbtn' to='/jobs'>Jobs <FaChevronDown /></Link>
       <div className="dropdowncontainer">
       <div className="container">
        <Link className='nav' to='/jobs/work_from_home_jobs' >Work From Home Jobs</Link>
          <Link className='nav' to='/jobs/partTime_jobs'>PartTime Jobs</Link>
          <Link className='nav' to='/jobs/freshers_jobs'>Freshers Jobs</Link>
          <Link className='nav' to='/jobs/jobs_for_women' >Jobs for women</Link>
          <Link className='nav' to='/jobs/jobs_Fulltime_jobs' >FullTime Jobs</Link>
          <Link className='nav' to='/jobs/Night_shift_jobs' >Night shift Jobs</Link>
          <Link className='nav' to='/jobs/Inernational_jobs' >International Jobs</Link>
        </div>
        <div className="line"></div>
        <div className="container1">
        <Link className='nav' to='/jobs/jobs_by_city' >Jobs By City <span className='rarrow'><FaChevronRight /></span> </Link>
          <Link className='nav' to='/jobs/jobs_by_department'>Jobs By Department <span className='rarrow'><FaChevronRight /></span> </Link>
          <Link className='nav' to='/jobs/jobs_by_company'>Jobs By Company <span className='rarrow'><FaChevronRight /></span> </Link>
          <Link className='nav' to='/jobs/jobs_by_qualification' >Jobs By Qualification <span className='rarrow'><FaChevronRight /></span> </Link>
          <Link className='nav' to='/jobs/others' >Others <span className='rarrow'><FaChevronRight /></span> </Link>
          </div>  
          </div>     
      </div>


      <div className="dropdown">
          <Link className='dropdownbtn' to='/Careercompus'>Career Compass <FaChevronDown /></Link>
       <div className="dropdowncontainer">
       <div className="container">
     
        <Link className='navbar' to='/Careercompus/Ai_Resumebuilder' >
        <span id='ai'>< HiOutlineClipboardDocumentList /></span> 
        <div className="textcontainer">
        <p className='navbar-title'>AI Resume builder</p>
        <p className='ptag'>Create your best resume using AI</p>
        </div>
            </Link>
         
            <Link className='navbar' to='/Careercompus/Ai_Resumechecker' >
        <span id='check'><LuFileSearch /></span> 
        <div className="textcontainer">
        <p className='navbar-title'>AI Resume checker</p>
        <p className='ptag'>Get instant resume feedback</p>
        </div>
            </Link>


            <Link className='navbar' to='/Careercompus/Ai_Coverletter' >
        <span id='letter'><IoNewspaperOutline /></span> 
        <div className="textcontainer">
        <p className='navbar-title'>AI Cover letter generator</p>
        <p className='ptag'>Stand out and get hired faster</p>
        </div>
            </Link>

            <Link className='navbar' to='/Careercompus/Ai_Interview' >
        <span id='msg'><MdMessage /></span> 
        <div className="textcontainer">
        <p className='navbar-title'>Al Interview</p><button id='btn'>coming soon</button>
        <p className='pptag'>Your strategy to success</p>
        </div>
            </Link>

            <Link className='navbar' to='/Careercompus/Blog' >
        <span id='book'><PiBookOpenText /></span> 
        <div className="textcontainer">
        <p className='navbar-title'>Blog</p>
        <p className='ptag'>Guidance for securing your dream job</p>
        </div>
            </Link>
        </div>
      </div>
      </div>

      <div className="dropdown">
        <Link className='nav1' to='/community' >Community</Link>
    </div>
      </div>
      </div>


    <div className="rnav">
    <div className="employee">
      <button className='elogin'>Employer Login</button>
      <button className='clogin'>Candidate Login</button>
    </div>
      </div>
    </div>
   </header>
<br />
   <body>
    <div className='section1'>
    <div className='bodymain'>
      <h2 id='one'>INDIA’S #1 JOB PLATFORM</h2>

      <p id='two'>
      Your job search ends here
      </p>
      <p id='discover'>Discover 50 lakh+ career opportunities</p>
    </div>


    <div className='sec2'>
    <div className='searchbox' style={{ display: 'flex' }}>
    <FaSearch id='searchicon'/>
            <input className='inputbox'
            id='dynamicplaceholder'
                type="text" 
                placeholder={'search for '+placeholderText[currentIndex]} 
                style={{ marginRight: '20px' }}
            />
  <div className="line1"></div>
  <FaLocationDot id='location'/>
            
            <br />
            <select className='selection' value={selectedCity} onChange={handleCityChange}>
        <option className='option' value="">Search for cities</option>
        {popularCities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
           
            <button id='searchbtn'>Search box</button>
        </div>
        <div className='image2'>
          <img id='img2' src={img2} alt={'err'} />
        </div>
    </div>

    <div className="marquee-container">
      <div className="marquee" >
        <div className="members">
        <img className='ppl' src={img3} alt={'err'} />
        <pre className='paratag'>Jack has fixed 
        an interview</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img4} alt={'err'} />
        <pre className='paratag'>April has fixed 
        an interview</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img5} alt={'err'} />
        <pre className='paratag'>John has fixed an interview</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img6} alt={'err'} />
        <pre className='paratag'>rachel has fixed an <br /> interview</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img7} alt={'err'} />
        <pre className='paratag'>William has got
                                 <br /> placed 2-hours before</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img8} alt={'err'} />
        <pre className='paratag'>Winter has fixed 
        an <br /> interview</pre>
        </div>
        <div className="members">
        <img className='ppl' src={img9} alt={'err'} />
        <pre className='paratag'>Stella has fixed 
        an interview</pre>
        </div>
      </div>
    </div>
<br />

    <div className='second'>
    <div className="containerone">
      <p className='popular'>Popular <br />Searchers On <br /> Apna</p>
      <div className='freshers'>
        <div className="freshersdiv">
        <p className='trending'>TRENDING AT #1</p>
        <p id='freshers'>Jobs for Freshers</p>
        <p className='jobs'>Jobs for Freshers</p>
        <button id='va1'>View all <span className='grtthan'><FaChevronRight /></span></button>
        </div>
        <div className="imgdiv">
          <img className='images' src={img10} alt={'err'} />
        </div>
      </div>
      

      <div className='freshers1'>
        <div className="freshersdiv">
        <p className='trending'>TRENDING AT #2</p>
        <p id='wfh'>Work from home Jobs</p>
        <p className='jobs1'>Work from Home</p>
        <button id='va2'>View all <span className='grtthan'><FaChevronRight /></span></button>
        </div>
        <div className="imgdiv">
          <img className='images' src={img11} alt={'err'} />
        </div>
      </div>
    </div>

    <div className="containertwo">
      {/* <p className='popular'>Popular <br />Searchers On <br /> Apna</p> */}
      <div className='freshers2'>
        <div className="freshersdiv">
        <p className='trending'>TRENDING AT #3</p>
        <p id='ptj'>Part time Jobs</p>
        <p className='jobs'>Part Time Jobs</p>
        <button id='va3'>View all <span className='grtthan'><FaChevronRight /></span></button>
        </div>
        <div className="imgdiv">
          <img className='images' src={img12} alt={'err'} />
        </div>
      </div>
      

      <div className='freshers3'>
        <div className="freshersdiv">
        <p className='trending'>TRENDING AT #4</p>
        <p id='jfw'>Jobs for Women</p>
        <p className='jobs2'>Jobs for women</p>
        <button id='va4'>View all <span className='grtthan'><FaChevronRight /></span></button>
        </div>
        <div className="imgdiv">
          <img className='images' src={img13} alt={'err'} />
        </div>
      </div>

      <div className='freshers4'>
        <div className="freshersdiv">
        <p className='trending'>TRENDING AT #5</p>
        <p id='inj'>International Jobs</p>
        <p className='jobs3'>International Jobs</p>
        <button id='va5'>View all <span className='grtthan'><FaChevronRight /></span></button>
        </div>
        <div className="imgdiv">
          <img className='images1' src={img14} alt={'err'} />
        </div>
      </div>
    </div>
    </div>
    </div>
   </body>

    </>
  )
}

export default Home