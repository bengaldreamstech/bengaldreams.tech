export const site = {
  name: 'BengalDreams',
  nameBn: 'বেঙ্গলড্রিমস',
  domain: 'bengaldreams.tech',
  url: 'https://bengaldreams.tech',
  description:
    'বেঙ্গলড্রিমস গ্রুপ — সাস, ই-কমার্স, কাস্টম ওয়েবসাইট, সফটওয়্যার ডেভেলপমেন্ট, কৃষি, কারখানা ও আইটি পরামর্শ, সব এক ঠিকানায়।',
  email: 'hello@bengaldreams.tech',
  location: 'ঢাকা, বাংলাদেশ',
  nav: [
    { label: 'প্রতিষ্ঠানসমূহ', href: '/#ventures' },
    { label: 'কেন আমরা', href: '/#why' },
    { label: 'কাজের ধারা', href: '/#process' },
    { label: 'যোগাযোগ', href: '/#contact' },
  ],
  stats: [
    { value: '৮', label: 'টি প্রতিষ্ঠান এক ছাতার নিচে' },
    { value: '১৪৭+', label: 'সম্পন্ন ডিজিটাল প্রকল্প' },
    { value: '৬৪', label: 'জেলায় পণ্য পৌঁছেছে' },
    { value: '২৪/৭', label: 'সাপোর্ট ও পর্যবেক্ষণ' },
  ],
  values: [
    {
      title: 'এক ঠিকানা, অনেক সমাধান',
      description:
        'সফটওয়্যার থেকে সরবরাহ শৃঙ্খল — একই দলের সাথে কথা বলুন, আলাদা আলাদা ভেন্ডর খুঁজতে হবে না।',
    },
    {
      title: 'বাংলায় ভাবি, বিশ্বমানে গড়ি',
      description: 'স্থানীয় বাস্তবতা বুঝে পণ্য তৈরি করি, আর মান রাখি আন্তর্জাতিক মাপকাঠিতে।',
    },
    {
      title: 'স্বচ্ছ ও ধীরস্থির',
      description: 'পরিষ্কার মূল্য, নিয়মিত আপডেট, আর তাড়াহুড়ো ছাড়া মজবুত কাজ।',
    },
  ],
  process: [
    {
      step: '০১',
      title: 'শুনি ও বুঝি',
      description: 'আপনার লক্ষ্য, বাজেট আর সময়সীমা নিয়ে একটি বিনামূল্যের আলাপ।',
    },
    {
      step: '০২',
      title: 'পরিকল্পনা',
      description: 'কোন প্রতিষ্ঠান ও কোন দল কাজটি করবে, ধাপসহ লিখিত প্রস্তাব।',
    },
    {
      step: '০৩',
      title: 'নির্মাণ ও সরবরাহ',
      description: 'ছোট ছোট ধাপে কাজ, প্রতি সপ্তাহে অগ্রগতি দেখানো।',
    },
    {
      step: '০৪',
      title: 'পাশে থাকা',
      description: 'চালুর পরও সাপোর্ট, উন্নয়ন আর নতুন সুযোগের পরামর্শ।',
    },
  ],
} as const

/** Netlify Forms registration. The static `public/__forms.html` mirrors these fields. */
export const enquiryForm = {
  name: 'bengaldreams-enquiry',
  endpoint: '/__forms.html',
} as const
