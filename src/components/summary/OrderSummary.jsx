function OrderSummary() {
  return (
    <div>

      <h2 className="text-[20px] font-semibold text-[#111827] mb-5">
        Order Summary
      </h2>

      <div className="border border-[#E5E7EB] rounded-sm p-4 mb-4">

        <div className="flex justify-between items-start">

          <div>
            <h3 className="text-[32px] font-bold text-[#111827]">
              ₹4,999
            </h3>

            <p className="text-[10px] text-gray-400 mt-1">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">
            <p className="text-[9px] text-[#2563EB] font-medium">
              SELECTED PLAN
            </p>

            <p className="text-[14px] font-semibold text-[#111827] mt-1">
              Startup
            </p>
          </div>

        </div>

        <button className="w-full mt-4 border border-[#2563EB] text-[#2563EB] h-[32px] rounded-full text-[11px] font-medium">
          ⬆ Upgrade to Growth Plan
        </button>

      </div>

      <div className="border border-[#E5E7EB] rounded-sm p-4 mb-4">

        <div className="flex items-center justify-between mb-4">

          <div>
            <p className="text-[11px] font-medium text-[#111827]">
              Wallet Balance
            </p>

            <p className="text-[10px] text-gray-400">
              ₹500 available
            </p>
          </div>

          <button className="text-[#2563EB] text-[11px] font-medium">
            Apply
          </button>

        </div>

        <div className="border-t border-[#F3F4F6] pt-4">

          <div className="flex items-center justify-between mb-3">

            <p className="text-[11px] font-medium text-[#111827]">
              Apply Coupon
            </p>

            <span className="text-gray-400 text-[12px]">
              ˅
            </span>

          </div>

          <div className="flex gap-2 mb-3">

            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 h-[32px] border border-[#E5E7EB] rounded-sm px-3 text-[11px] outline-none"
            />

            <button className="text-[#2563EB] text-[11px] font-medium">
              Apply
            </button>

          </div>

          <div className="space-y-2">

            <div className="border border-[#2563EB] rounded-sm px-3 py-2 flex items-center justify-between">

              <div>
                <p className="text-[11px] font-medium">
                  WELCOME20
                </p>

                <p className="text-[9px] text-gray-400">
                  20% off on first purchase
                </p>
              </div>

              <input type="radio" checked readOnly />
            </div>

            <div className="border border-[#E5E7EB] rounded-sm px-3 py-2 flex items-center justify-between">

              <div>
                <p className="text-[11px] font-medium">
                  ANNUAL50
                </p>

                <p className="text-[9px] text-gray-400">
                  50% off on annual plan
                </p>
              </div>

              <input type="radio" />
            </div>

          </div>

        </div>

      </div>

      <div className="space-y-2 mb-5">

        <div className="flex justify-between text-[11px] text-gray-600">
          <span>Subtotal</span>
          <span>₹4,999.00</span>
        </div>

        <div className="flex justify-between text-[11px] text-gray-600">
          <span>Tax (18% GST)</span>
          <span>₹1,079.64</span>
        </div>

      </div>

      <div className="flex justify-between items-center mb-5">

        <span className="text-[14px] font-semibold text-[#111827]">
          Total due today
        </span>

        <span className="text-[28px] font-bold text-[#2563EB]">
          16,078.64
        </span>

      </div>

      <button className="w-full h-[36px] bg-[#2563EB] text-white rounded-sm text-[11px] font-medium">
        Proceed to Payment
      </button>

    </div>
  );
}

export default OrderSummary;