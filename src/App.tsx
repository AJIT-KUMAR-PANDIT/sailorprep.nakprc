import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import BatchesScreen from './screens/BatchesScreen';
import InterviewPrepScreen from './screens/InterviewPrepScreen';
import MockTestsScreen from './screens/MockTestsScreen';
import MyProgressScreen from './screens/MyProgressScreen';
import PyqScreen from './screens/PyqScreen';
import StudyNotesScreen from './screens/StudyNotesScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/batches" element={<BatchesScreen />} />
        <Route path="/interview-prep" element={<InterviewPrepScreen />} />
        <Route path="/mock-tests" element={<MockTestsScreen />} />
        <Route path="/my-progress" element={<MyProgressScreen />} />
        <Route path="/pyq" element={<PyqScreen />} />
        <Route path="/study-notes" element={<StudyNotesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
