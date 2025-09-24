import React from "react";
import { UserIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/outline";

const StatsCard = ({ title, value, iconType }) => {
  // Choose icons based on type
  const icons = {
    users: UserIcon,
    completed: CheckCircleIcon,
    pending: ClockIcon,
  };

  const IconSmall = icons[iconType];
  const IconBig = icons[iconType];

  return (
    <div className="flex justify-between items-center p-6 bg-white rounded-lg border shadow-md border-[#653F00]">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#653F00]">
          <IconSmall className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#653F00]">{title}</p>
          <h2 className="text-2xl font-bold text-[#653F00] mt-1">{value}</h2>
        </div>
      </div>

      {/* Right side big icon */}
      <IconBig className="w-16 h-16 text-[#653F00] opacity-20" />
    </div>
  );
};

export default StatsCard;
