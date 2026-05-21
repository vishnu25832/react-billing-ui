function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">

      <label className="text-[11px] font-medium text-gray-600">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[34px] border border-[#E5E7EB] rounded-sm px-3 text-[11px] outline-none placeholder:text-gray-400"
      />

    </div>
  );
}

export default InputField;