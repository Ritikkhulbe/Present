import { Routes, Route, useParams, BrowserRouter } from 'react-router-dom';
import Video from './components/Video';
function App() {

  let { taskNumber } = useParams();
  console.log("this is "+taskNumber);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="api/video">
        <Route path=":taskNumber" element={<Video taskNumber={taskNumber}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;