// Import the image file directly
import monyImage from '../assets/Mony.jpeg';

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: number;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Award {
  title: string;
  year: number;
  issuer: string;
}

export interface SuccessStory {
  studentName: string;
  program: string;
  institution: string;
  year: number;
  testimonial: string;
}

export interface MentorSchedule {
  day: string;
  slots: string[];
}

export interface Mentor {
  id: number;
  name: string;
  image: string | any; // Allow both string URLs and imported images
  specialty: string;
  rating: number;
  degree: string;
  description: string;
  hourlyRate: number;
  // Additional profile details
  title: string;
  biography: string;
  education: Education[];
  experience: Experience[];
  awards: Award[];
  publications?: string[];
  specialties: string[];
  languages: string[];
  successStories: SuccessStory[];
  schedule: MentorSchedule[];
  calendlyLink: string;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Mony Madlol",
    image: monyImage,
    specialty: "Dental School",
    rating: 4.9,
    degree: "Western University, DDS Candidate",
    description: "First-generation immigrant passionate about improving access to oral healthcare for underserved communities.",
    hourlyRate: 0,
    title: "DDS Candidate & Class President at Schulich School of Medicine & Dentistry",
    biography: "Mony Madlol is a Doctor of Dental Surgery (DDS) candidate at the Schulich School of Medicine & Dentistry at Western University, where he currently serves as Class President for the DDS Class of 2028. As a first-generation immigrant, Mony is deeply committed to improving access to oral healthcare for underserved communities, and he aims to use his career in dentistry to make a meaningful impact on public health. Beyond his academic and leadership roles, Mony actively shares his journey as a dental student through his public Instagram platform, @moony.dentistry, offering insights, inspiration, and guidance to peers and aspiring dental professionals. Prior to entering dentistry, he was a multi-sport athlete, playing as a cornerback and wide receiver for Oakridge Secondary School in London, Ontario. Mony brings a unique blend of community-driven passion, leadership, and dedication to clinical excellence as he pursues a career centered on patient advocacy and healthcare equity.",
    education: [
      {
        institution: "Western University, Schulich School of Medicine & Dentistry",
        degree: "DDS",
        field: "Dentistry",
        year: 2028
      },
      {
        institution: "Western University",
        degree: "BSc",
        field: "Health Sciences",
        year: 2024
      }
    ],
    experience: [
      {
        role: "Class President",
        organization: "DDS Class of 2028, Schulich School of Medicine & Dentistry",
        duration: "2024-Present",
        description: "Represent and advocate for the DDS Class of 2028, coordinating with faculty, organizing class events, and facilitating communication between students and administration."
      },
      {
        role: "Dental Clinic Volunteer",
        organization: "Community Dental Alliance",
        duration: "2022-2024",
        description: "Assisted in providing free dental services to underserved communities, gaining valuable clinical exposure while helping to address healthcare disparities."
      },
      {
        role: "Research Assistant",
        organization: "Oral Health Research Institute",
        duration: "2023-2024",
        description: "Participated in research examining public health initiatives to improve access to dental care in rural and underserved communities."
      }
    ],
    awards: [
      {
        title: "Diversity in Dentistry Scholarship",
        year: 2024,
        issuer: "Canadian Dental Association"
      },
      {
        title: "Community Service Excellence Award",
        year: 2023,
        issuer: "Western University"
      }
    ],
    specialties: [
      "Dental School Application Strategy",
      "DAT Preparation",
      "Personal Statement Development",
      "Interview Preparation",
      "Healthcare Equity Advocacy",
      "Community Engagement in Healthcare"
    ],
    languages: ["English", "Arabic"],
    successStories: [],
    schedule: [
      { day: "Monday", slots: ["6:00 PM - 7:00 PM", "7:30 PM - 8:30 PM"] },
      { day: "Wednesday", slots: ["5:00 PM - 6:00 PM", "6:30 PM - 7:30 PM"] },
      { day: "Saturday", slots: ["10:00 AM - 11:00 AM", "11:30 AM - 12:30 PM"] },
      { day: "Sunday", slots: ["1:00 PM - 2:00 PM", "2:30 PM - 3:30 PM"] }
    ],
    calendlyLink: "https://calendly.com/prepsavvy101"
  }
];
