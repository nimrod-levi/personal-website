import { Project } from '../types'

export const projects: Project[] = [
  {
    title: "Identifiers mapper",
    description: "Intelligent ETL solution for mapping identifiers across systems, enabling seamless data ingestion, transformation, storage, and delivery, handling over 1 million monthly requests",
    technologies: ["Python", "Pandas", "FastAPI", "MsSQL", "Docker", "Kubernetes", "Git", "GSLB", "ChronJobs"]
  },
  {
    title: "Geographic Optimization",
    description: "Geographic optimization for finding the best location based on various factors",
    technologies: ["Python", "Pandas", "Shapely", "NumPy", "Plotly Express", "PL/SQL"]
  },
  {
    title: "Youtube Shorts Limiter Extension",
    description: "Extension for Safari and Chrome that reminds you when you've doom-scrolled enough",
    technologies: ["JavaScript", "CSS"],
    link: "https://github.com/nimrod-levi/shorts-limiter-ext"
  },
  {
    title: "Flights Tracker",
    description: "A tool to add your flights to your calendar",
    technologies: ["Base44"],
    link: "https://app--flight-sync-77630628.base44.app"
  },
  {
    title: "Personal Website",
    description: "This one you're looking at right now",
    technologies: ["React", "Vite", "CSS", "TypeScript"],
    link: "https://github.com/nimrod-levi/personal-website"
  },
]

