import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './component/layout/Footer';
import Navbar from './component/layout/Navbar';
import { GithubProvider } from './context/github/GithubContext';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';


function App() {
  return (
    <GithubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <main className='container mx-auto px-3 pb-12 '>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/user/:login' element={<User/>} />
                <Route path='/notfound' element={<NotFound/>} />
                <Route path='/*' element={<NotFound/>} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
    </GithubProvider>
  );
}

export default App;
