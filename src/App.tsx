import { Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import NotFound from './NotFound.tsx';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Service from './Service.tsx';
import DevStage from './DevStage.tsx';
import Amount from './Amount.tsx';
import Opportunity from './Opportunity.tsx';
import Form from './Form.tsx';
import About from './About.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/devStages' element={<DevStage />} />
        <Route path='/amount' element={<Amount />} />
      </Routes>
      <Service />
      <DevStage />
      <Amount />
      <Opportunity />
      <Form />
      <Footer />
    </>
  );
}

export default App;
