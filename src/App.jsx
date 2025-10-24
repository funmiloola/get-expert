import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionDisplay from "./views/SectionDisplay/SectionDisplay";
import ClientSection from "./views/ClientServer.jsx";
import Client from "./views/ClientServer.jsx/Client.jsx";
import Expert from "./views/ClientServer.jsx/Expert.jsx";
import ClientProfileSection from "./views/ClientServer.jsx/ClientProfile/index.jsx";
import PurchaseSection from "./views/ClientServer.jsx/ClientProfile/Purchase.jsx";
import ClientWorkshop from "./views/ClientServer.jsx/ClientProfile/Workshop.jsx";
import Review from "./views/ClientServer.jsx/ClientProfile/Review.jsx";
import Flag from "./views/ClientServer.jsx/ClientProfile/Flags.jsx";
import Note from "./views/ClientServer.jsx/ClientProfile/Notes.jsx";
import ExpertProfileSection from "./views/ClientServer.jsx/ExpertProfile/index.jsx";
import Product from "./views/ClientServer.jsx/ExpertProfile/Product.jsx";
import ExpertWorkshop from "./views/ClientServer.jsx/ExpertProfile/Workshop.jsx";
import Payout from "./views/ClientServer.jsx/ExpertProfile/Payout.jsx";
import ExpertReview from "./views/ClientServer.jsx/ExpertProfile/Reviews.jsx";
import ExpertFlag from "./views/ClientServer.jsx/ExpertProfile/Flag.jsx";
import ExpertNote from "./views/ClientServer.jsx/ExpertProfile/Note.jsx";
import Workshop from "./views/Workshop/index.jsx";
import WorkshopDetails from "./views/Workshop/WorkshopDetails/index.jsx";
import Transactions from "./views/Transaction/index.jsx";
import ProductManagement from "./views/Product/index.jsx";
import ReportSection from "./views/Reports/ReportSection.jsx";
import ReviewSection from "./views/Reports/ReviewSection.jsx";
import Team from "./views/Team/index.jsx";
import Settings from "./views/Settings/index.jsx";
import SettingsProfile from "./views/Settings/SettingsProfile/index.jsx";
import Password from "./views/Settings/Password.jsx";
import Signin from "./views/Signin.jsx";
import Signup from "./views/Signup.jsx";
import { ToastContainer } from "react-toastify";
import Wallet from "./views/Settings/Wallet.jsx";
import SettingNotification from "./views/Settings/SettingsNotify.jsx";
import DashboardSection from "./views/dashboard";
import Menu from "./views/Menu/index.jsx";
import Support from "./views/Support/index.jsx";
import Reports from "./views/Reports/index.jsx";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<SectionDisplay />}>
          <Route index element={<DashboardSection />} />

          <Route path="clients" element={<ClientSection />}>
            <Route index element={<Client />} />
            <Route path="experts" element={<Expert />} />
            <Route path="client" element={<ClientProfileSection />}>
              <Route index element={<PurchaseSection />} />
              <Route path="workshop" element={<ClientWorkshop />} />
              <Route path="review" element={<Review />} />
              <Route path="flags" element={<Flag />} />
              <Route path="notes" element={<Note />} />
            </Route>
            <Route path="profile-expert" element={<ExpertProfileSection />}>
              <Route index element={<Product />} />
              <Route path="workshop" element={<ExpertWorkshop />} />
              <Route path="payout" element={<Payout />} />
              <Route path="review" element={<ExpertReview />} />
              <Route path="flags" element={<ExpertFlag />} />
              <Route path="notes" element={<ExpertNote />} />
            </Route>
          </Route>
          <Route path="workshops" element={<Workshop />}>
            <Route path="workshop-details" element={<WorkshopDetails />} />
          </Route>
          <Route path="transactions" element={<Transactions />} />
          <Route path="product" element={<ProductManagement />} />
          <Route path="reports" element={<Reports />}>
            <Route index element={<ReportSection />} />
            <Route path="reviews" element={<ReviewSection />} />
          </Route>
          <Route path="teams" element={<Team />} />
          <Route path="menu" element={<Menu/>}/>
          <Route path="settings" element={<Settings />}>
            <Route index element={<SettingsProfile />} />
              <Route path="password" element={<Password />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="notification" element={<SettingNotification/>}/>
          </Route>
          <Route path="support" element={<Support/>} />
  
        </Route>

        <Route>404 Not Found</Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={4000} />
      </>
  );
}

export default App;
