export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string[];
  isMilestone?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Junior Web Developer",
    company: "Sites at Scale",
    date: "Sept, 2025 \u2013 Feb, 2026",
    description: [
      "Hired and absorbed as a full-time Junior Web Developer",
      "Built and maintained client websites at scale",
      "Worked on Wordpress and Webflow Sites"
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Sites at Scale",
    date: "July, 2025 \u2013 Aug, 2025",
    description: [
      "Completed internship as part of 2nd year school requirement",
      "Assisted in web development tasks and client projects"
    ],
  },
  {
    role: "IT Support Intern",
    company: "Ece Contact Centers",
    date: "June 17, 2024 \u2013 July 03, 2024",
    description: [
      "Cleaning and Monitoring PC",
      "Wiring Up Ethernet Plugs"
    ],
  },
  {
    role: "Tasker",
    company: "Remotasks",
    date: "Jan 30, 2024 \u2013 Dec, 2024",
    description: [
      "Data Annotating"
    ],
  },
  {
    role: "A.I Trainer",
    company: "Outlier AI",
    date: "Sept, 2024 \u2013 Nov, 2024",
    description: [
      "Guiding A.I",
      "Correcting the A.I prompt"
    ],
  },
];
