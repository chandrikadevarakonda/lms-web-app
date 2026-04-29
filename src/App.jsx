import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = ()=> {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<div className="p-8 text-2x1">Home Page</div>} />
            <Route path="/courses" element={<div className="p-8 text-2x1">Courses Page</div>} />
            <Route path="/faculty" element={<div className="p-8 text-2x1">Faculty Page</div>} />
            <Route path="/trial-classes" element={<div className="p-8 text-2x1">Trial Classes Page</div>} />
            <Route path="/batches" element={<div className="p-8 text-2x1">Batch Schedule Page</div>} />
            <Route path="/enroll" element={<div className="p-8 text-2x1">Enrollment Form Page</div>} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App