import { FooterSection } from '@/typings/interfaces';




export const footer_items: FooterSection[] = [
  {
    title: 'Resources',
    links: [
      { href: '/', label: 'Home', id: 'home' },
      { href: '/#products', label: 'Products', id: 'products' },
      { href: '/#about_us', label: 'About Us', id: 'about_us' },
      { href: '/#why_us', label: 'Why Us', id: 'why_us' },
    ],
  },
  {
    title: 'CONTACT US',
    links: [
      { href: '/#', label: 'Address:morocco', id: 'address' },
      { href: '/#', label: 'Phone:+212600000000', id: 'phone' },
      { href: '/#a', label: 'Email:contact@devadh.com', id: 'email' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { href: '/', label: 'Privacy Policy', id: 'Privacy' },
      { href: '/#', label: 'Shopping Policy', id: 'Shopping' },
      { href: '/#', label: 'Terms & Conditions', id: 'Terms' },
      { href: '/#', label: 'Refund Policy', id: 'Refund' },
    ],
  },
];

