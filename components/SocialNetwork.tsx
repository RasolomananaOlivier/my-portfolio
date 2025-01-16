import { SocialLink } from "@/utils/types";
import Link from "next/link";
import React from "react";

type SocialNetworkProps = {
  social: SocialLink;
};

const SocialNetwork = ({ social }: SocialNetworkProps) => {
  return (
    <Link
      className="bg-neutral-800 py-3 px-4 w-24 rounded-lg flex flex-col gap-1 cursor-pointer"
      href={social.url}
      target="_blank"
    >
      {social.icon}
      <div className="text-gray-300 text-sm">{social.label}</div>
    </Link>
  );
};

export default SocialNetwork;
