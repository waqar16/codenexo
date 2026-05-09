export interface Testimonial {
  id: string;
  clientName: string;
  country: string;
  platform: 'Upwork' | 'Fiverr' | 'Direct';
  rating: number;
  project?: string;
  review: string;
  tags?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Prince Saah",
    country: "United States",
    platform: "Upwork",
    rating: 5.0,
    project: "AWS + Flask Application",
    review: "Another excellent job by Mubashir. He is knowledgeable in his domain, cares about going the extra mile, and delivered exceptional results under tight timelines. His Python, ML, and AWS skills are top notch.",
    tags: ["Python", "AWS", "Machine Learning"]
  },
  {
    id: "t2",
    clientName: "Prince Saah",
    country: "United States",
    platform: "Upwork",
    rating: 5.0,
    project: "Data Science & Python",
    review: "Mubashir was amazing, insightful, knowledgeable, and highly customer focused. He treated our deadline like his own and was always available when needed.",
    tags: ["Data Science", "Python", "AI"]
  },
  {
    id: "t3",
    clientName: "Larry",
    country: "United States",
    platform: "Fiverr",
    rating: 5.0,
    review: "Great job. Very professional and enjoyable to work with."
  },
  {
    id: "t4",
    clientName: "musa_mthembu",
    country: "South Africa",
    platform: "Fiverr",
    rating: 4.3,
    review: "Very quick turnaround time and delivered everything I asked for. Also implemented revisions quickly."
  },
  {
    id: "t5",
    clientName: "robeesfax",
    country: "United Kingdom",
    platform: "Fiverr",
    rating: 5.0,
    review: "Understood the requirements and delivered to a high standard. Very patient and professional."
  },
  {
    id: "t6",
    clientName: "Taha Alhamid",
    country: "United Arab Emirates",
    platform: "Fiverr",
    rating: 5.0,
    review: "Mubashir skills are outstanding. He executed my vision correctly and delivered fast and accurate results."
  },
  {
    id: "t7",
    clientName: "Taha Alhamid",
    country: "United Arab Emirates",
    platform: "Fiverr",
    rating: 5.0,
    review: "Outstanding work implementing payment gateway and DRM systems. High-quality execution and technical problem solving."
  },
  {
    id: "t8",
    clientName: "Fahad",
    country: "Saudi Arabia",
    platform: "Fiverr",
    rating: 5.0,
    review: "Excellent communication and technical skills. Very supportive and flexible with requested changes."
  },
  {
    id: "t9",
    clientName: "daria",
    country: "Netherlands",
    platform: "Fiverr",
    rating: 5.0,
    review: "Mubashir is attentive, professional, friendly, and always looks for the best solution."
  },
  {
    id: "t10",
    clientName: "rene andre",
    country: "United Kingdom",
    platform: "Fiverr",
    rating: 5.0,
    review: "Delivered a clean and structured Flask API with professionalism and enthusiasm."
  },
  {
    id: "t11",
    clientName: "Ben.",
    country: "United Kingdom",
    platform: "Direct",
    rating: 5.0,
    review: "Thank you so much. Your work and attitude are truly appreciated."
  },
  {
    id: "t12",
    clientName: "Ben",
    country: "United Kingdom",
    platform: "Direct",
    rating: 5.0,
    review: "You do good work and deserve the support. Your professionalism and consistency stand out."
  }
];
