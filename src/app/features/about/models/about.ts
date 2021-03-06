export class Profile {
  name: string;
  about: string;
  pictureUrl: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export class Company {
  name?: string;
  iconUrl?: string;
  headquarters?: Partial<Address>;
  type?: string;
  industry?: string;
  areaServed?: string;
  website?: string;
}

export class Address {
  addressLineOne?: string;
  addressLineTwo?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

export class Education {
  schoolName: string;
  degree: string;
  areaOfStudy: string;
  graduationYear: string;
  iconUrl?: string;
}

export class Position {
  title: string;
  description: string;
}

export class Experience {
  positions: Partial<Position>[];
  company: Partial<Company>;
  location: Partial<Address>;
  startDate?: Date;
  endDate?: Date;
}

export class Certification {
  name: string;
  issuer: string;
  issueDate: string;
  iconUrl?: string;
  experationDate?: string;
  verification?: string;
}
