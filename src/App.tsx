import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import WelcomeScreen from './screens/WelcomeScreen';
import BatchesScreen from './screens/BatchesScreen';
import InterviewPrepScreen from './screens/InterviewPrepScreen';
import MockTestsScreen from './screens/MockTestsScreen';
import MyProgressScreen from './screens/MyProgressScreen';
import PyqScreen from './screens/PyqScreen';
import StudyNotesScreen from './screens/StudyNotesScreen';
import AuthScreen from './screens/AuthScreen';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        {/* Welcome screen without navigation layout */}
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        
        {/* Main application screens with navigation layout */}
        <Route element={<MainLayout />}>
          <Route path="/batches" element={<BatchesScreen />} />
          <Route path="/interview-prep" element={<InterviewPrepScreen />} />
          <Route path="/mock-tests" element={<MockTestsScreen />} />
          <Route path="/my-progress" element={<MyProgressScreen />} />
          <Route path="/pyq" element={<PyqScreen />} />
          <Route path="/study-notes" element={<StudyNotesScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
