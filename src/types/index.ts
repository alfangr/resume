export interface DemoUrl {
  playStore?: string;
  appStore?: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  role: string;
  tech: string[];
  features: string[];
  demoUrl: string | DemoUrl | null;
  sourceUrl: string | null;
  createdAt: string;
  contributions?: string[];
  id_content?: {
    title: string;
    description: string;
    role: string;
    features: string[];
    contributions?: string[];
  };
}

export interface Blog {
  title: string;
  slug: string;
  summary: string;
  id_content?: {
    title: string;
    summary: string;
  };
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
  hoverColor: string;
}

export interface TechItem {
  icon: string;
  text: string;
}

export interface TechCategory {
  titleKey: string;
  items: TechItem[];
}
