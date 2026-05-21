import Navbar from "./components/layout/Navbar";
import BillingForm from "./components/billing/BillingForm";
import OrderSummary from "./components/summary/OrderSummary";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] px-6 py-5">
      <div className="max-w-[1180px] mx-auto">

        <Navbar />

        <div className="grid grid-cols-1 lg:grid-cols-[2.1fr_0.95fr] gap-5 mt-5">

          <div className="bg-white rounded-md border border-[#E5E7EB] p-8">
            <BillingForm />
          </div>

          <div className="bg-white rounded-md border border-[#E5E7EB] p-5 h-fit">
            <OrderSummary />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;