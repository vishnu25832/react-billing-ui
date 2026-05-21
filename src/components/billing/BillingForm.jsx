import InputField from "./InputField";

function BillingForm() {
  return (
    <div>

      <p className="text-[11px] text-gray-400 mb-4">
        ← Back to plans
      </p>

      <h1 className="text-[24px] font-semibold text-[#111827] mb-2">
        Review your details
      </h1>

      <p className="text-[13px] text-gray-500 mb-6">
        Billing Information
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">

        <InputField
          label="Company Name"
          placeholder="Enter company name"
        />

        <InputField
          label="Email"
          placeholder="john.doe@example.com"
        />

        <InputField
          label="GST Number (Optional)"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number (Optional)"
          placeholder="PAN Number"
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <InputField
          label="State"
          placeholder="Select state"
        />

        <InputField
          label="City"
          placeholder="Select city"
        />

        <InputField
          label="Country"
          placeholder="India"
        />

        <InputField
          label="Pin Code"
          placeholder="Pincode"
        />

      </div>

      <div className="flex justify-end gap-3 mt-8">

        <button className="border border-[#E5E7EB] text-[11px] px-5 h-[34px] rounded-sm font-medium">
          Cancel
        </button>

        <button className="bg-[#2563EB] text-white text-[11px] px-5 h-[34px] rounded-sm font-medium">
          Save Details
        </button>

      </div>

    </div>
  );
}

export default BillingForm;