export interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  featured?: boolean;
}
