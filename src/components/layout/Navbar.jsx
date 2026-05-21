import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-md px-4 py-3">

      <div className="flex items-center justify-between">

        <div className="relative">

          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Find influencers to collaborate with"
            className="w-[320px] h-[34px] border border-[#E5E7EB] rounded-sm pl-9 pr-3 text-[12px] outline-none"
          />

        </div>

        <div className="flex items-center gap-2">

          <button className="bg-[#FFF4E5] text-[#F59E0B] text-[10px] px-3 h-[28px] rounded-sm font-medium">
            Upgrade
          </button>

          <button className="bg-[#2563EB] text-white text-[10px] px-3 h-[28px] rounded-sm font-medium">
            + Create Campaign
          </button>

          <div className="w-7 h-7 rounded-full bg-gray-300"></div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;