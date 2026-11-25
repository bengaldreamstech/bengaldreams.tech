import {
  Cloud,
  CodeXml,
  Factory,
  Lightbulb,
  MonitorSmartphone,
  ServerCog,
  ShoppingBag,
  Sprout,
  type LucideIcon,
} from 'lucide-react'

export type Venture = {
  slug: string
  name: string
  brand: string
  category: string
  tagline: string
  description: string
  offerings: string[]
  image: string
  imageAlt: string
  icon: LucideIcon
  tone: string
  externalUrl?: string
}

export const ventures: Venture[] = [
  {
    slug: 'saas',
    name: 'বেঙ্গলড্রিমস ক্লাউড',
    brand: 'bengaldreams.com',
    category: 'সাস প্ল্যাটফর্ম',
    tagline: 'ছোট-বড় ব্যবসার জন্য এক জায়গায় হিসাব, স্টক আর বিক্রয়।',
    description:
      'bengaldreams.com আমাদের নিজস্ব সাস পণ্য — বাংলায় তৈরি, বাংলাদেশের ব্যবসার কথা ভেবে। ইনভেন্টরি, বিক্রয়, কর্মী ও হিসাব এক ড্যাশবোর্ডে, মোবাইল থেকেও সহজে।',
    offerings: [
      'ইনভেন্টরি ও স্টক ব্যবস্থাপনা',
      'পিওএস ও বিক্রয় রিপোর্ট',
      'কর্মী, বেতন ও উপস্থিতি',
      'বাংলা ইনভয়েস ও হিসাব খাতা',
    ],
    image: '/img/software.png',
    imageAlt: 'জানালার পাশে কাঠের টেবিলে ল্যাপটপ ও সবুজ গাছ',
    icon: Cloud,
    tone: '#1f4d40',
    externalUrl: 'https://bengaldreams.com',
  },
  {
    slug: 'shop',
    name: 'বেঙ্গলড্রিমস শপ',
    brand: 'E-commerce',
    category: 'ই-কমার্স ব্যবসা',
    tagline: 'দেশি কারিগর ও খামারের পণ্য, যত্নে প্যাক করে আপনার দরজায়।',
    description:
      'আমাদের ই-কমার্স ব্যবসা দেশি হস্তশিল্প, পাটজাত পণ্য ও খামারের তাজা খাবার অনলাইনে পৌঁছে দেয়। সাথে আছে অন্য ব্যবসার জন্য ফুলফিলমেন্ট ও অনলাইন স্টোর সেটআপ সহায়তা।',
    offerings: [
      'দেশি ও হস্তশিল্প পণ্যের অনলাইন স্টোর',
      'সারা দেশে ডেলিভারি ও ক্যাশ অন ডেলিভারি',
      'বিকাশ, নগদ ও কার্ড পেমেন্ট',
      'অন্য ব্র্যান্ডের জন্য ফুলফিলমেন্ট',
    ],
    image: '/img/ecommerce.png',
    imageAlt: 'ক্রাফট কাগজ ও পাটের ব্যাগে প্যাক করা পণ্য, পাশে মোবাইলে অনলাইন শপ',
    icon: ShoppingBag,
    tone: '#c06a4d',
  },
  {
    slug: 'web-studio',
    name: 'কাস্টম ওয়েবসাইট',
    brand: 'Web Studio',
    category: 'কাস্টম সাইট ডেভেলপমেন্ট',
    tagline: 'আপনার ব্র্যান্ডের মতো দেখতে, দ্রুত চলে এমন ওয়েবসাইট।',
    description:
      'কর্পোরেট সাইট, ল্যান্ডিং পেজ, অনলাইন শপ কিংবা পোর্টাল — ডিজাইন থেকে হোস্টিং পর্যন্ত পুরো কাজ আমরা করি। বাংলা ও ইংরেজি দুই ভাষাতেই, মোবাইলে নিখুঁত।',
    offerings: [
      'ইউআই/ইউএক্স ডিজাইন ও ব্র্যান্ডিং',
      'কর্পোরেট ও ই-কমার্স ওয়েবসাইট',
      'এসইও ও পারফরম্যান্স অপ্টিমাইজেশন',
      'ডোমেইন, হোস্টিং ও রক্ষণাবেক্ষণ',
    ],
    image: '/img/software.png',
    imageAlt: 'শান্ত সফটওয়্যার স্টুডিওতে ল্যাপটপ ও চায়ের কাপ',
    icon: MonitorSmartphone,
    tone: '#2f6b5a',
  },
  {
    slug: 'software',
    name: 'সফটওয়্যার ডেভেলপমেন্ট',
    brand: 'Software Lab',
    category: 'সফটওয়্যার তৈরি',
    tagline: 'আপনার প্রক্রিয়া অনুযায়ী তৈরি ওয়েব ও মোবাইল অ্যাপ।',
    description:
      'ইআরপি, মোবাইল অ্যাপ, এপিআই কিংবা অটোমেশন — ব্যবসার আসল সমস্যা বুঝে আমরা সফটওয়্যার তৈরি করি, ছোট ছোট ধাপে, নিয়মিত ডেমোসহ।',
    offerings: [
      'ওয়েব অ্যাপ ও ইআরপি সমাধান',
      'অ্যান্ড্রয়েড ও আইওএস অ্যাপ',
      'এপিআই ও সিস্টেম ইন্টিগ্রেশন',
      'এআই ও প্রক্রিয়া অটোমেশন',
    ],
    image: '/img/software.png',
    imageAlt: 'কাঠের টেবিলে খোলা ল্যাপটপে কোড, পাশে গাছ',
    icon: CodeXml,
    tone: '#3d5f73',
  },
  {
    slug: 'software-services',
    name: 'সফটওয়্যার সেবা',
    brand: 'Managed Services',
    category: 'সফটওয়্যার সেবা প্রদানকারী',
    tagline: 'চালু হওয়ার পরও আপনার সিস্টেম সচল রাখার দায়িত্ব আমাদের।',
    description:
      'ক্লাউড সার্ভার, ব্যাকআপ, নিরাপত্তা ও দৈনন্দিন সাপোর্ট — আপনার সফটওয়্যার যেন কখনো থেমে না যায়, সেজন্য মাসিক চুক্তিতে নির্ভরযোগ্য সেবা।',
    offerings: [
      'ক্লাউড সার্ভার ও ডেভঅপস',
      'নিয়মিত ব্যাকআপ ও নিরাপত্তা পর্যবেক্ষণ',
      'হেল্পডেস্ক ও বাগ ফিক্স সাপোর্ট',
      'সফটওয়্যার লাইসেন্স ও সাবস্ক্রিপশন',
    ],
    image: '/img/consult.png',
    imageAlt: 'উজ্জ্বল মিটিং রুমে আলোচনারত একটি দল',
    icon: ServerCog,
    tone: '#5b6b4a',
  },
  {
    slug: 'agro',
    name: 'বেঙ্গলড্রিমস অ্যাগ্রো',
    brand: 'Agro',
    category: 'কৃষি ব্যবসা',
    tagline: 'মাঠ থেকে বাজার — ন্যায্য দামে, নিরাপদ খাদ্যে।',
    description:
      'চুক্তিভিত্তিক চাষ, ধান-সবজি ও মাছ চাষে প্রযুক্তির ব্যবহার এবং কৃষকের সাথে সরাসরি সংযোগ। লক্ষ্য একটাই: কৃষক পাবে ন্যায্য দাম, ক্রেতা পাবে নিরাপদ খাবার।',
    offerings: [
      'চুক্তিভিত্তিক ধান ও সবজি চাষ',
      'মৎস্য ও প্রাণিসম্পদ খামার',
      'কৃষকের জন্য ডিজিটাল পরামর্শ',
      'পাইকারি ও খুচরা সরবরাহ',
    ],
    image: '/img/agro.png',
    imageAlt: 'কুয়াশাভেজা ভোরে সবুজ ধানক্ষেতের আল দিয়ে হেঁটে যাচ্ছেন একজন কৃষক',
    icon: Sprout,
    tone: '#4f7a3c',
  },
  {
    slug: 'factory',
    name: 'বেঙ্গলড্রিমস ইন্ডাস্ট্রিজ',
    brand: 'Factory',
    category: 'কারখানা ও উৎপাদন',
    tagline: 'পরিচ্ছন্ন, দক্ষ ও নিয়মমাফিক উৎপাদন।',
    description:
      'আমাদের কারখানায় প্যাকেজিং, কৃষিজাত পণ্য প্রক্রিয়াজাতকরণ ও হালকা শিল্প পণ্য উৎপাদন হয়। আধুনিক যন্ত্র আর ডিজিটাল মান নিয়ন্ত্রণে প্রতিটি ব্যাচ নির্ভুল।',
    offerings: [
      'কৃষিজাত পণ্য প্রক্রিয়াজাতকরণ',
      'প্যাকেজিং ও লেবেলিং',
      'কন্ট্রাক্ট ম্যানুফ্যাকচারিং',
      'ডিজিটাল মান নিয়ন্ত্রণ',
    ],
    image: '/img/factory.png',
    imageAlt: 'জানালার আলোয় পরিপাটি আধুনিক কারখানার ফ্লোর',
    icon: Factory,
    tone: '#7a5a3c',
  },
  {
    slug: 'it-consulting',
    name: 'আইটি পরামর্শ',
    brand: 'IT Consulting',
    category: 'আইটি কনসালটেশন',
    tagline: 'সঠিক প্রযুক্তি, সঠিক সময়ে, সঠিক বাজেটে।',
    description:
      'ডিজিটাল রূপান্তরের পরিকল্পনা, প্রযুক্তি নির্বাচন, নিরাপত্তা অডিট ও টিম প্রশিক্ষণ। আমরা নিরপেক্ষভাবে পরামর্শ দিই — যা আপনার ব্যবসার জন্য সত্যিই দরকার।',
    offerings: [
      'ডিজিটাল রূপান্তর রোডম্যাপ',
      'প্রযুক্তি ও ভেন্ডর নির্বাচন',
      'সাইবার নিরাপত্তা অডিট',
      'টিম প্রশিক্ষণ ও কর্মশালা',
    ],
    image: '/img/consult.png',
    imageAlt: 'কাচের দেয়ালে আঁকা ডায়াগ্রাম ঘিরে আলোচনায় একটি পেশাদার দল',
    icon: Lightbulb,
    tone: '#a0783a',
  },
]

export function getVenture(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug)
}

/** Resized WebP served by the Netlify Image CDN. */
export function imageUrl(src: string, width: number): string {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=78`
}
