export type Project = {
  projectPic: string;
  title: string;
  description: string;
  techStack: string[];
  codeAvailable: boolean;
  previewUrl: string | null;
};

export type SocialLink = {
  icon: JSX.Element;
  label: string;
  url: string;
};
