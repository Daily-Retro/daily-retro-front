import { Route, Routes } from 'react-router-dom';
import DiaryPage from './pages/DiaryPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import QuestionPage from './pages/QuestionPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
