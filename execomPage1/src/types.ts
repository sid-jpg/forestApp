export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Member {
  id: number;
  name: string;
  designation: string;
  society: Society;
  imageUrl: string;
  details: string;
  socialLinks: SocialLinks;
}

export type Society = 'IEEE' | 'ACM' | 'ISTE' | 'CSI';