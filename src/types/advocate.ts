export type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
};

export type AdvocateTableProps = {
  advocates: Advocate[];
  isLoading: boolean;
  error: Error | null;
};
