import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsroomPage from "./pages/NewsroomPage";
import WritingTipsPage from "./pages/WritingTipsPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SolutionsPage from "./pages/SolutionsPage";
import BeSpokePage from "./pages/BeSpokePage";
import EditorialGuidelinesPage from "./pages/EditorialGuidelinesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import PressReleasePage from "./pages/PressReleasePage";
import AuthorsLaunchpadPage from "./pages/AuthorsLaunchpadPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="newsroom" element={<NewsroomPage />} />
          <Route path="writing-tips" element={<WritingTipsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="bespoke" element={<BeSpokePage />} />
          <Route path="authors-launchpad" element={<AuthorsLaunchpadPage />} />
          <Route path="editorial-guidelines" element={<EditorialGuidelinesPage />} />
          <Route path="press-release/:slug" element={<PressReleasePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
