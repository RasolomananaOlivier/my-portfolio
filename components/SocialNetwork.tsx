import React from "react";

type SocialNetworkProps = {
  icon: React.ReactNode;
  label: string;
};

const SocialNetwork = ({ label, icon }: SocialNetworkProps) => {
  return (
    <div className="bg-neutral-800 py-3 px-4 w-24 rounded-lg flex flex-col gap-1">
      {icon}
      <div className="text-gray-300 text-sm">{label}</div>
    </div>
  );
};

export default SocialNetwork;
