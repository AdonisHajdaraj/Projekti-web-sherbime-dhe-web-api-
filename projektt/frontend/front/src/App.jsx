import { BrowserRouter  , Routes, Route } from "react-router-dom";
import Home from '../src/components/Home';
import ChooseUser from '../src/components/ChooseUser';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/choose-user" element={<ChooseUser />} />
              {}
          </Routes>
      </BrowserRouter>
  );
}

export default App;