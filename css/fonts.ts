import { Inter, Lusitana, Open_Sans } from "next/font/google";

export const lusitana = Lusitana( { 
  weight:['400', '700'],
  subsets:['latin']
});

export const sans = Open_Sans({
  weight:['400', '500', '700'],
  subsets:['latin']
});

export const inter = Inter({ subsets: ['latin'] });
