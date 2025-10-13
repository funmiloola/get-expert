import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionDisplay from "./components/SectionDisplay";
import DashboardSection from "./components/DashboardSection";
import ClientSection from "./components/ClientServer";
import Client from "./components/Client";
import Expert from "./components/Expert";
import ClientProfileSection from "./components/ClientProfileSection";
import PurchaseSection from "./components/Purchase";
import Workshop from "./components/Workshop";
import Review from "./components/Review";
import Flag from "./components/Flag";
import Note from "./components/Note";
import ExpertProfileSection from "./components/ExpertProfileSection";
import Product from "./components/Products";
import ExpertWorkshop from "./components/ExpertWorkshop";
import Payout from "./components/Payout";
import ExpertReview from "./components/ExpertReview";
import ExpertFlag from "./components/ExpertFlag";
import ExpertNote from "./components/ExpertNote";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SectionDisplay />}>
          <Route index element={<DashboardSection />} />
            
          <Route path="/clients" element={<ClientSection />}>
            <Route index element={<Client />} />
            <Route path="experts" element={<Expert />} />
          <Route path="client" element={<ClientProfileSection />}>
            <Route index element={<PurchaseSection />} />
            <Route path="workshop" element={<Workshop />} />
            <Route path="review" element={<Review />} />
            <Route path="flags" element={<Flag />} />
            <Route path="notes" element={<Note/>}/>
            </Route>
             <Route path="profile-expert" element={<ExpertProfileSection />}>
            <Route index element={<Product />} />
            <Route path="workshop" element={<ExpertWorkshop/>}/>
            <Route path="payout" element={<Payout />} />
            <Route path="review" element={<ExpertReview />} />
            <Route path="flags" element={<ExpertFlag />} />
            <Route path="notes" element={<ExpertNote/>}/>
          </Route>
        </Route>
         
          </Route>
          

        <Route>404 Not Found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
