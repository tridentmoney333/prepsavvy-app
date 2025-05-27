export interface Review {
  id: number;
  mentorId: number;
  rating: number;
  comment: string;
  userName: string;
  date: Date;
  program: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    mentorId: 1,
    rating: 5,
    comment: "A true master of making sure all of your questions are answered. An honest and straightforward guy.",
    userName: "Matt J.",
    date: new Date('2024-04-01'),
    program: "Business Developer at PrepSavvY"
  }
];
