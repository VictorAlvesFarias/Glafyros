import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
import Header from './containers/header'
import Footer from './containers/footer'

function App() {
  return (

    <BrowserRouter>
      <div className='bg-gradient-to-t bg-zinc-800 to-Purple-700 to-100% via-zinc-900 via-40% from-transparent text-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
