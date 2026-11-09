const INITIAL_BOOKS = [
  {"no": 1, "title": "কোরআন মাজীদ সহজ সরল বাংলা অনুবাদ", "titleEn": "Al Quran Al-Majeed Easy Plain Bengali Translation", "author": "হাফেজ মুনির উদ্দিন আহমদ", "pub": "আল কোরআন একাডেমী লন্ডন", "pages": 732, "copies": 2, "cat": 0},
  {"no": 2, "title": "আল কুরআন সহজ ভাবানুবাদ", "titleEn": "Al Quran Easy Interpretive Translation", "author": "শাইখ মাহফুজ", "pub": "সার্কেল অব কুরআন", "pages": 750, "copies": 1, "cat": 0},
  {"no": 3, "title": "ছহিহ নূরানী কুরআন শরীফ", "titleEn": "Sahih Noorani Quran Sharif", "author": "", "pub": "আল বারাকা লাইব্রেরি", "pages": 611, "copies": 1, "cat": 0},
  {"no": 4, "title": "কোরআন শরীফ সরল বঙ্গানুবাদ", "titleEn": "Quran Sharif Simple Bengali Translation", "author": "মোহাম্মদ হাবিবুর রহমান", "pub": "মাওলা ব্রাদার্স", "pages": 512, "copies": 1, "cat": 0},
  {"no": 5, "title": "আল কুরআন সহজ সরল অনুবাদ", "titleEn": "Al Quran Easy Simple Translation", "author": "মাওলানা আব্দুস শহীদ নাসিম", "pub": "বাংলাদেশ কুরআন শিক্ষা সোসাইটি", "pages": 968, "copies": 1, "cat": 0},
  {"no": 6, "title": "রিয়াযূস সালেহীন", "titleEn": "Riyadus Salihin", "author": "ইমাম আবু যাকারিয়া ইয়াহয়া বিন আশরাফ নববী (রহ)", "pub": "মোহাম্মদী কুতুবখানা", "pages": 888, "copies": 1, "cat": 1},
  {"no": 7, "title": "রিয়াদুস সালেহীন", "titleEn": "Riyadus Salihin (Islamic Center)", "author": "ইমাম আবু যাকারিয়া ইয়াহয়া বিন আশরাফ নববী (রহ)", "pub": "বাংলাদেশ ইসলামিক সেন্টার ঢাকা", "pages": 292, "copies": 1, "cat": 1},
  {"no": 8, "title": "আর রাহীকুল মাখতূম", "titleEn": "Ar-Raheeq Al-Makhtum (The Sealed Nectar)", "author": "সফিউর রহমান মুবারকপুরী", "pub": "তাওহীদ পাবলিকেশন্স", "pages": 559, "copies": 1, "cat": 1},
  {"no": 9, "title": "সীরাহ প্রথম খণ্ড", "titleEn": "Seerah Part 1", "author": "জিম তানভীর", "pub": "রেইনড্রপস", "pages": 341, "copies": 1, "cat": 1},
  {"no": 10, "title": "সীরাহ দ্বিতীয় খন্ড", "titleEn": "Seerah Part 2", "author": "জিম তানভীর", "pub": "রেইনড্রপস", "pages": 440, "copies": 1, "cat": 1},
  {"no": 11, "title": "সিরাতে খাতামুল আম্বিয়া", "titleEn": "Seerat Khatamul Anbiya", "author": "মুফতি মোহাম্মদ শফি (রহ.)", "pub": "কালান্তর প্রকাশনী", "pages": 143, "copies": 2, "cat": 1},
  {"no": 12, "title": "ইসলামী আকিদা", "titleEn": "Islamic Aqeedah", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 720, "copies": 1, "cat": 2},
  {"no": 13, "title": "রাহে বেলায়েত", "titleEn": "Rahe Belayet", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 720, "copies": 1, "cat": 2},
  {"no": 14, "title": "আল- ফিকহুল আকবর", "titleEn": "Al-Fiqh Al-Akbar", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 544, "copies": 1, "cat": 2},
  {"no": 15, "title": "হাদীসের নামে জালিয়াতি", "titleEn": "Fabrications in the Name of Hadith", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 672, "copies": 1, "cat": 2},
  {"no": 16, "title": "এহইয়াউস সুনান", "titleEn": "Ehyaus Sunan", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 656, "copies": 1, "cat": 2},
  {"no": 17, "title": "পোশাক, পর্দা ও দেহসজ্জা", "titleEn": "Attire, Hijab and Adornment", "author": "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর", "pub": "আস-সুন্নাহ পাবলিকেশন", "pages": 384, "copies": 1, "cat": 2},
  {"no": 18, "title": "ইমাম আবু হানিফা (রা.) জীবন ও কর্ম", "titleEn": "Imam Abu Hanifa: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 168, "copies": 1, "cat": 3},
  {"no": 19, "title": "ইমাম শাফিয়ি (রা) জীবন ও কর্ম", "titleEn": "Imam Shafi'i: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 158, "copies": 1, "cat": 3},
  {"no": 20, "title": "ইমাম মালিক (র) জীবন ও কর্ম", "titleEn": "Imam Malik: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 157, "copies": 1, "cat": 3},
  {"no": 21, "title": "ইমাম আহমাদ ইবনু হাম্বল (র) জীবন ও কর্ম", "titleEn": "Imam Ahmad Ibn Hanbal: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 164, "copies": 1, "cat": 3},
  {"no": 22, "title": "আব্দুল্লাহ ইবনুল মুবারক (র) জীবন ও কর্ম", "titleEn": "Abdullah Ibn al-Mubarak: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 170, "copies": 1, "cat": 3},
  {"no": 23, "title": "হাসান আল-বাসরি (র) জীবন ও কর্ম", "titleEn": "Hasan al-Basri: Life and Works", "author": "ইমাম সিরিজ টিম", "pub": "সমকালীন প্রকাশন", "pages": 108, "copies": 1, "cat": 3},
  {"no": 24, "title": "রাসূলুল্লাহ (স.) এর নামাজ", "titleEn": "Prayer of the Prophet (PBUH)", "author": "মুহাম্মদ নাসির উদ্দিন আলবানী", "pub": "মীনা বুক হাউস", "pages": 296, "copies": 1, "cat": 4},
  {"no": 25, "title": "রাসূলুল্লাহ (ছ) কিভাবে নামাজ পড়তেন?", "titleEn": "How Did the Prophet (PBUH) Pray?", "author": "আল্লামা হাফিজ ইবনুল কায়্যিম", "pub": "মীনা বুক হাউস", "pages": 216, "copies": 1, "cat": 4},
  {"no": 26, "title": "ছালাতুর রাসূল (ছাঃ)", "titleEn": "Salat-ur-Rasool", "author": "মুহাম্মদ আসাদুল্লাহ আল গালিব", "pub": "হাদীছ ফাউণ্ডেশন বাংলাদেশ", "pages": 301, "copies": 1, "cat": 4},
  {"no": 27, "title": "জাল হাদিসের কবলে রাসুলুল্লাহ (ছা) এর ছালাত", "titleEn": "Prophet's Prayer Under the Grip of Fabricated Hadiths", "author": "ড. মুযাফফর বিন মুহসিন", "pub": "আছ-ছিরাত প্রকাশনী", "pages": 400, "copies": 1, "cat": 4},
  {"no": 28, "title": "বেলা ফুরাবার আগে", "titleEn": "Before the Sun Sets", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 192, "copies": 2, "cat": 5},
  {"no": 29, "title": "এবার ভিন্ন কিছু হোক", "titleEn": "Let Something Different Happen This Time", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 194, "copies": 1, "cat": 5},
  {"no": 30, "title": "প্যারাডক্সিক্যাল সাজিদ", "titleEn": "Paradoxical Sajid", "author": "আরিফ আজাদ", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 160, "copies": 1, "cat": 6},
  {"no": 31, "title": "প্যারাডক্সিক্যাল সাজিদ-২", "titleEn": "Paradoxical Sajid 2", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 225, "copies": 1, "cat": 6},
  {"no": 32, "title": "মা, মা, মা এবং বাবা", "titleEn": "Mother, Mother, Mother and Father", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 175, "copies": 1, "cat": 5},
  {"no": 33, "title": "নবি জীবনের গল্প", "titleEn": "Stories from the Prophet's Life", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 144, "copies": 1, "cat": 5},
  {"no": 34, "title": "জীবন যেখানে যেমন", "titleEn": "Life As It Is", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 152, "copies": 1, "cat": 5},
  {"no": 35, "title": "প্রত্যাবর্তন", "titleEn": "The Return", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 225, "copies": 1, "cat": 5},
  {"no": 36, "title": "জবাব", "titleEn": "The Reply (Jobab)", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 186, "copies": 1, "cat": 6},
  {"no": 37, "title": "তুমি ফিরবে বলে", "titleEn": "Hoping You Will Return", "author": "জাকারিয়া মাসুদ", "pub": "সাবিল পাবলিকেশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 38, "title": "তুমি ফিরবে বলে ফিমেল ভার্সন", "titleEn": "Hoping You Will Return (Female Version)", "author": "জাকারিয়া মাসুদ", "pub": "সাবিল পাবলিকেশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 39, "title": "হিজাব আমার পরিচয়", "titleEn": "Hijab is My Identity", "author": "জাকারিয়া মাসুদ", "pub": "সন্দীপন প্রকাশন", "pages": 88, "copies": 1, "cat": 5},
  {"no": 40, "title": "ভ্রান্তিবিলাস", "titleEn": "Illusions (Vrantibilas)", "author": "জাকারিয়া মাসুদ", "pub": "সন্দীপন প্রকাশন", "pages": 160, "copies": 1, "cat": 6},
  {"no": 41, "title": "পড়ো-২", "titleEn": "Poro 2", "author": "ওমর আল জাবির", "pub": "সমকালীন প্রকাশন", "pages": 184, "copies": 1, "cat": 5},
  {"no": 42, "title": "পড়ো-৩", "titleEn": "Poro 3", "author": "ওমর আল জাবির", "pub": "সমকালীন প্রকাশন", "pages": 168, "copies": 1, "cat": 5},
  {"no": 43, "title": "ফেরা", "titleEn": "The Return (Phera)", "author": "সিহিন্তা শরীফা", "pub": "সমকালীন প্রকাশন", "pages": 120, "copies": 1, "cat": 5},
  {"no": 44, "title": "ফেরা-২", "titleEn": "The Return 2", "author": "বিনতু আদিল", "pub": "সমকালীন প্রকাশন", "pages": 140, "copies": 2, "cat": 5},
  {"no": 45, "title": "নফসের বিরুদ্ধে লড়াই", "titleEn": "Struggle Against the Nafs", "author": "মাহমুদ বিন নূর", "pub": "রাইয়ান প্রকাশন", "pages": 143, "copies": 1, "cat": 5},
  {"no": 46, "title": "শয়তানের বিরুদ্ধে লড়াই", "titleEn": "Struggle Against Satan", "author": "মাহমুদ বিন নূর", "pub": "রাইয়ান প্রকাশন", "pages": 144, "copies": 1, "cat": 5},
  {"no": 47, "title": "প্রশান্তির খোঁজে", "titleEn": "In Search of Inner Peace", "author": "নোমান আলী খান", "pub": "বুকিশ পাবলিশার", "pages": 272, "copies": 1, "cat": 5},
  {"no": 48, "title": "নবীদের দু'আ", "titleEn": "Duas of the Prophets", "author": "নোমান আলী খান", "pub": "মুসলিম ভিলেজ", "pages": 164, "copies": 1, "cat": 5},
  {"no": 49, "title": "যে আফসোস রয়েই যাবে", "titleEn": "Regrets That Will Remain", "author": "আব্দুল হাই মুহাম্মদ সাইফুল্লাহ", "pub": "সত্যায়ন প্রকাশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 50, "title": "ইনসাইড ইসলাম", "titleEn": "Inside Islam", "author": "আব্দুল হাই মুহাম্মদ সাইফুল্লাহ", "pub": "শব্দশৈলী", "pages": 184, "copies": 1, "cat": 6},
  {"no": 51, "title": "অলসতা জীবনের শত্রু", "titleEn": "Procrastination: Enemy of Life", "author": "ড. খালিদ আবু শাদি", "pub": "সন্দীপন প্রকাশন", "pages": 147, "copies": 1, "cat": 5},
  {"no": 52, "title": "জাহান্নাম অসীম আজাবের হাতছানি", "titleEn": "Hellfire: The Call of Infinite Torment", "author": "ড. খালিদ আবু শাদি", "pub": "রুহামা পাবলিকেশন", "pages": 208, "copies": 1, "cat": 5},
  {"no": 53, "title": "হারিয়ে যাওয়া মুক্তো", "titleEn": "The Lost Pearl", "author": "শিহাব আহমেদ তুহিন", "pub": "সমর্পণ প্রকাশন", "pages": 158, "copies": 1, "cat": 5},
  {"no": 54, "title": "লস্ট ইসলামিক হিস্ট্রি", "titleEn": "Lost Islamic History", "author": "ফিরাস আল খতিব", "pub": "প্রচ্ছদ প্রকাশন", "pages": 268, "copies": 1, "cat": 1},
  {"no": 55, "title": "টাইম ম্যানেজমেন্ট", "titleEn": "Time Management", "author": "আবু মুআবিয়া ইসমাইল কামদার", "pub": "সিয়ান পাবলিকেশন", "pages": 132, "copies": 1, "cat": 5},
  {"no": 56, "title": "ঘরে দাঁড়াও", "titleEn": "Stand Firm at Home", "author": "ওয়ায়েল ইব্রাহিম", "pub": "ওয়াফি পাবলিকেশন", "pages": 224, "copies": 1, "cat": 5},
  {"no": 57, "title": "সেল্ফ রিমাইন্ডার", "titleEn": "Self Reminder", "author": "শাওন আহমেদ", "pub": "বইপল্লি", "pages": 128, "copies": 1, "cat": 5},
  {"no": 58, "title": "বিপদ যখন নিয়ামত", "titleEn": "When Hardship is a Blessing", "author": "শাইখ আহমাদ মুসা জিবরিল", "pub": "সমর্পণ প্রকাশন", "pages": 88, "copies": 1, "cat": 5},
  {"no": 59, "title": "সেই ফুলেরই রৌশনিতে", "titleEn": "In the Glow of That Flower", "author": "আবদুল আযীয আল আমান", "pub": "বইকেন্দ্র পাবলিকেশন", "pages": 112, "copies": 1, "cat": 5},
  {"no": 60, "title": "ঈমান ধ্বংসের কারণ", "titleEn": "Causes That Nullify Iman", "author": "শাইখ আব্দুল আযীয আত তারিফী", "pub": "সত্যায়ন প্রকাশন", "pages": 128, "copies": 1, "cat": 2},
  {"no": 61, "title": "হারিয়ে যাওয়া সুল্লাহ", "titleEn": "The Lost Sunnahs", "author": "শাইখ আব্দুল মালিক আল কাসিম", "pub": "রুহামা পাবলিকেশন", "pages": 127, "copies": 1, "cat": 4},
  {"no": 62, "title": "গুনাহ মাফের ৫০টি আমল", "titleEn": "50 Deeds for Forgiveness of Sins", "author": "মোঃ নুরুল ইসলাম নয়ন", "pub": "আলোকিত প্রকাশনী", "pages": 60, "copies": 1, "cat": 5},
  {"no": 63, "title": "ইখলাস", "titleEn": "Ikhlas (Sincerity)", "author": "শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ", "pub": "কালান্তর প্রকাশনী", "pages": 56, "copies": 1, "cat": 5},
  {"no": 64, "title": "মরেও অমর হওয়ার প্রচেষ্টা", "titleEn": "Striving to Become Immortal Even After Death", "author": "শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ", "pub": "আলোকিত প্রকাশনী", "pages": 104, "copies": 1, "cat": 5},
  {"no": 65, "title": "প্রতিদিন একটি আয়াত", "titleEn": "One Ayah Every Day", "author": "আবু মুআবিয়া ইসমাইল কামদার", "pub": "ওয়াফি পাবলিকেশন", "pages": 48, "copies": 1, "cat": 0},
  {"no": 66, "title": "ইমাম গাযালীর চিঠি", "titleEn": "Letter of Imam al-Ghazali", "author": "হুজ্জাতুল ইসলাম ইমাম গাযযালী রহ.", "pub": "ওয়াফি পাবলিকেশন", "pages": 55, "copies": 1, "cat": 5},
  {"no": 67, "title": "সুরা ইউসুফ", "titleEn": "Surah Yusuf", "author": "শাইখ আলী জাবির আল ফাইফী", "pub": "সমকালীন প্রকাশন", "pages": 128, "copies": 1, "cat": 0},
  {"no": 68, "title": "ফজর আর করব না কাজা", "titleEn": "Never Miss Fajr Again", "author": "ড. রাগিব সারজানি", "pub": "মাকতাবাতুল হাসান", "pages": 188, "copies": 1, "cat": 4},
  {"no": 69, "title": "বিবাহ-পাঠ", "titleEn": "Marriage Guide (Bibah Path)", "author": "ডা. শামসুল আরেফীন", "pub": "মাকতাবাতুল আসলাফ", "pages": 168, "copies": 1, "cat": 5},
  {"no": 70, "title": "অধিকাংশ লোক আল্লাহর প্রতি ঈমান আনা সত্তেও মুশরিক", "titleEn": "Most People Believe in Allah Yet Associate Partners", "author": "খলীলুর রহমান বিন ফযলুর রহমান", "pub": "আত্‌ তাওহীদ প্রকাশনী", "pages": 144, "copies": 1, "cat": 2},
  {"no": 71, "title": "রাসূলুল্লাহ (স.) এর সকাল সন্ধ্যার দু'আ ও ফিকর", "titleEn": "Morning and Evening Duas of the Prophet (PBUH)", "author": "শায়খ আহমাদুল্লাহ", "pub": "আস-সুন্নাহ ফাউন্ডেশন", "pages": 32, "copies": 4, "cat": 4},
  {"no": 72, "title": "খুশু-খুযু", "titleEn": "Khushu and Khuju", "author": "ইমাম ইবনুল কাই্যিম", "pub": "সমকালীন প্রকাশন", "pages": 84, "copies": 1, "cat": 4},
  {"no": 73, "title": "নিষিদ্ধ কর্মকাণ্ড", "titleEn": "Forbidden Deeds", "author": "মোস্তাফিজুর রহমান বিন আব্দুল আজিজ আল-মাদানী", "pub": "তাওহীদ পাবলিকেশন্স", "pages": 192, "copies": 1, "cat": 2},
  {"no": 74, "title": "মা সন্তানের স্বপ্নসাথী", "titleEn": "Mother: Dream Companion of the Child", "author": "শাইখ ড. আব্দুল কারীম বাক্কার", "pub": "দারুল আরকাম", "pages": 72, "copies": 1, "cat": 5},
  {"no": 75, "title": "বি স্মার্ট উইথ মুহাম্মাদ (স.)", "titleEn": "Be Smart with Muhammad (PBUH)", "author": "", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 144, "copies": 1, "cat": 5},
  {"no": 76, "title": "কিতাবুস সুন্নাহ", "titleEn": "Kitab-us-Sunnah", "author": "মুফতী মাওলানা মনসূরুল হক", "pub": "মাকতাবাতুল মানসূর", "pages": 192, "copies": 1, "cat": 4},
  {"no": 77, "title": "প্রোডাক্টিভ মুসলিম", "titleEn": "The Productive Muslim", "author": "মোহাম্মদ ফারিস", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 250, "copies": 1, "cat": 5},
  {"no": 78, "title": "ম্যাসেজ", "titleEn": "The Message", "author": "ড. মিজানুর রহমান আজহারি", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 296, "copies": 1, "cat": 5},
  {"no": 79, "title": "ফিকহুস সিরাহ-১", "titleEn": "Fiqh-us-Seerah Vol. 1", "author": "শায়খ সাইদ রামাদান বুতি", "pub": "তাজকিয়া পাবলিকেশন", "pages": 848, "copies": 1, "cat": 1},
  {"no": 80, "title": "ফিকহুস সিরাহ-২", "titleEn": "Fiqh-us-Seerah Vol. 2", "author": "শায়খ সাইদ রামাদান বুতি", "pub": "তাজকিয়া পাবলিকেশন", "pages": 450, "copies": 1, "cat": 1},
  {"no": 81, "title": "রমাদান আত্মশুদ্ধির বিপ্লব", "titleEn": "Ramadan: Revolution of Self-Purification", "author": "ড. খালিদ আবু শাদি", "pub": "রুহামা পাবলিকেশন", "pages": 304, "copies": 1, "cat": 5},
  {"no": 82, "title": "রমাদান কারীম মাদরাসাতুত তাকওয়া", "titleEn": "Ramadan Kareem: Madrasatut Taqwa", "author": "মোহাম্মদ আতিক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 144, "copies": 1, "cat": 4},
  {"no": 83, "title": "প্রোডাক্টিভ রামাদান", "titleEn": "Productive Ramadan", "author": "মোহাম্মদ ফারিস", "pub": "মাকতাবাতুল আসলাফ", "pages": 196, "copies": 1, "cat": 5},
  {"no": 84, "title": "রমাদান জিজ্ঞাসা ও জবাব", "titleEn": "Ramadan Q&A", "author": "শাইখ আহমাদ মুসা জিবরিল", "pub": "ইলমওয়েব", "pages": 120, "copies": 1, "cat": 4},
  {"no": 85, "title": "সেরা হোক এবারের রামাদান", "titleEn": "Make This Ramadan the Best", "author": "রোদ্রময়ীরা", "pub": "সমকালীন প্রকাশন", "pages": 184, "copies": 1, "cat": 5},
  {"no": 86, "title": "ধূলিমলিন উপহার রামাদান", "titleEn": "Dusty Gift of Ramadan", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সীরাত পাবলিকেশন", "pages": 224, "copies": 1, "cat": 5},
  {"no": 87, "title": "দাইীদের রমাদান ভাবনা", "titleEn": "Ramadan Thoughts for Da'ees", "author": "মুফতি মাহমুদুল হক", "pub": "Wafilife", "pages": 63, "copies": 1, "cat": 5},
  {"no": 88, "title": "হজ যে শিক্ষা সবার জন্য", "titleEn": "Hajj: Lessons for Everyone", "author": "ড. রাগিব সারজানি", "pub": "মাকতাবাতুল হাসান", "pages": 80, "copies": 1, "cat": 4},
  {"no": 89, "title": "স্টেপ বাই স্টেপ উমরা গাইডলাইন", "titleEn": "Step by Step Umrah Guideline", "author": "মাওলানা আব্দুল্লাহ ‍সুহাইব", "pub": "মুআসসাসা ইলমিয়্যাহ বাংলাদেশ", "pages": 80, "copies": 1, "cat": 4},
  {"no": 90, "title": "হজ ও উমরার সহজ গাইড", "titleEn": "Easy Guide to Hajj and Umrah", "author": "মাওলানা মুহাম্মাদ ইকবাল গিলানী", "pub": "মাকতাবাতুল ফুরকান", "pages": 128, "copies": 1, "cat": 4},
  {"no": 91, "title": "আকাশের ওপারে আকাশ", "titleEn": "Beyond the Skies", "author": "লস্ট মডেস্টি ব্লগ", "pub": "ইলমহাউজ পাবলিকেশন", "pages": 287, "copies": 1, "cat": 6},
  {"no": 92, "title": "ওমরাহ কিভাবে করবেন", "titleEn": "How to Perform Umrah", "author": "শায়খ আহমাদুল্লাহ", "pub": "আস-সুন্নাহ ফাউন্ডেশন", "pages": 32, "copies": 1, "cat": 4},
  {"no": 93, "title": "বন্ধন", "titleEn": "The Bond (Bandhan)", "author": "নোমান আলী খান", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 152, "copies": 1, "cat": 5},
  {"no": 94, "title": "কুর'আনের রত্ন", "titleEn": "Gems of the Quran", "author": "নোমান আলী খান", "pub": "বুকিশ পাবলিশার", "pages": 167, "copies": 1, "cat": 0},
  {"no": 95, "title": "আমার জীবনের গল্প", "titleEn": "The Story of My Life", "author": "ডা. জাকির নায়েক", "pub": "ইলহাম", "pages": 64, "copies": 1, "cat": 3},
  {"no": 96, "title": "সালাত", "titleEn": "Salat (Prayer)", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সত্যায়ন প্রকাশন", "pages": 80, "copies": 1, "cat": 4},
  {"no": 97, "title": "কিয়ামুল লাইল", "titleEn": "Qiyam-ul-Lail (Night Prayer)", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সত্যায়ন প্রকাশন", "pages": 32, "copies": 1, "cat": 4},
  {"no": 98, "title": "মাসায়িলে হজ্জ ও উমরাহ", "titleEn": "Rulings on Hajj and Umrah", "author": "হাফেয মাওলানা মুফতী মুহাম্মাদ খাইরুল্লাহ", "pub": "রাহবার", "pages": 304, "copies": 1, "cat": 4},
  {"no": 99, "title": "যে ভালবাসা জান্নাতে নিয়ে যাবে", "titleEn": "The Love That Leads to Jannah", "author": "শাইখ আহমদ ফরিদ", "pub": "সন্দীপন প্রকাশন", "pages": 96, "copies": 2, "cat": 5},
  {"no": 100, "title": "কুরআন থেকে নেয়া জীবনের পাঠ", "titleEn": "Life Lessons from the Quran", "author": "আরিফ আজাদ", "pub": "সত্যায়ন প্রকাশন", "pages": 184, "copies": 1, "cat": 0},
  {"no": 101, "title": "মিউজিক শয়তানের সুর", "titleEn": "Music: The Tune of Satan", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সত্যায়ন প্রকাশন", "pages": 32, "copies": 1, "cat": 2},
  {"no": 102, "title": "মুমিনের ক্যারিয়ার ভাবনা", "titleEn": "Career Thoughts of a Believer", "author": "ডা. শামসুল আরেফীন", "pub": "চেতনা প্রকাশন", "pages": 152, "copies": 1, "cat": 5},
  {"no": 103, "title": "শোনো হে যুবক", "titleEn": "Listen, O Youth", "author": "ড. রাগিব সারজানি", "pub": "মাকতাবাতুল হাসান", "pages": 80, "copies": 1, "cat": 5},
  {"no": 104, "title": "হালাল বিনোদন", "titleEn": "Halal Entertainment", "author": "আবু মুআবিয়া ইসমাইল কামদার", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 79, "copies": 1, "cat": 5},
  {"no": 105, "title": "গল্পগুলো অন্যরকম", "titleEn": "The Stories Are Different", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 216, "copies": 1, "cat": 5},
  {"no": 106, "title": "মুচকি হাসা সুন্নাহ", "titleEn": "Smiling is a Sunnah", "author": "মাওলানা আফজাল ইসমাঈল", "pub": "সত্যায়ন প্রকাশন", "pages": 184, "copies": 1, "cat": 4},
  {"no": 107, "title": "উপমার শৈল্পিকতায় মুগ্ধময় কুরআন", "titleEn": "The Fascinating Quranic Metaphors", "author": "নোমান আলী খান", "pub": "বুকিশ পাবলিশার", "pages": 220, "copies": 1, "cat": 0},
  {"no": 108, "title": "মুসলিমদের পরাজিত মানসিকতা", "titleEn": "Defeated Mentality of Muslims", "author": "ড. আবদুল্লাহ আল খাতির", "pub": "সন্দীপন প্রকাশন", "pages": 48, "copies": 1, "cat": 2},
  {"no": 109, "title": "ভালোবাসার চাদর", "titleEn": "Cloak of Love", "author": "", "pub": "সিয়ান পাবলিকেশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 110, "title": "হুজুর হয়ে হাসো কেন", "titleEn": "Why Do You Smile Like a Hujur", "author": "হুজুর হয়ে টিম", "pub": "সত্যায়ন প্রকাশন", "pages": 120, "copies": 1, "cat": 5},
  {"no": 111, "title": "আসাওউফ ও আত্মশুদ্ধি", "titleEn": "Tasawwuf and Self-Purification", "author": "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী", "pub": "শব্দশিল্প", "pages": 316, "copies": 1, "cat": 5},
  {"no": 112, "title": "ওগো শুনছ", "titleEn": "O Listen", "author": "মুহাম্মাদ আতীক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 128, "copies": 1, "cat": 5},
  {"no": 113, "title": "দুজন দুজনার", "titleEn": "Made for Each Other", "author": "মুহাম্মাদ আতীক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 112, "copies": 1, "cat": 5},
  {"no": 114, "title": "সাহাবীদের চোখে দুনিয়া", "titleEn": "The World Through the Eyes of Sahabah", "author": "আবদুস সাত্তার আইনী", "pub": "মাকতাবাতুল বায়ান", "pages": 230, "copies": 1, "cat": 3},
  {"no": 115, "title": "আই লাভ ইউ", "titleEn": "I Love You", "author": "মুহাম্মাদ আতীক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 128, "copies": 1, "cat": 5},
  {"no": 116, "title": "বুকপকেটে প্রেমপত্র", "titleEn": "Love Letter in the Breastpocket", "author": "মুহাম্মাদ আতীক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 128, "copies": 1, "cat": 5},
  {"no": 117, "title": "আল কুরআনের ঘটনাবলী", "titleEn": "Stories of the Quran", "author": "জায়েদ বিন নূর", "pub": "পুষ্প প্রকাশন", "pages": 184, "copies": 2, "cat": 0},
  {"no": 118, "title": "রাসুলের চোখে দুনিয়া", "titleEn": "The World Through the Prophet's Eyes", "author": "ইমাম আহমাদ ইবনু হাম্বাল (রহিমাহুল্লাহ)", "pub": "মাকতাবাতুল বায়ান", "pages": 209, "copies": 1, "cat": 3},
  {"no": 119, "title": "তাবিয়িদের চোখে দুনিয়া", "titleEn": "The World Through the Eyes of Tabi'in", "author": "ইমাম আহমাদ ইবনু হাম্বাল (রহিমাহুল্লাহ)", "pub": "মাকতাবাতুল বায়ান", "pages": 320, "copies": 1, "cat": 3},
  {"no": 120, "title": "কুরআন ও নবীর আদর্শের আলোকে সুখী দাম্পত্য জীবন", "titleEn": "Happy Married Life in Light of Quran & Sunnah", "author": "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী", "pub": "মুন্তাখাব প্রকাশনী", "pages": 128, "copies": 1, "cat": 5},
  {"no": 121, "title": "নবীজির সংসার", "titleEn": "The Prophet's Household", "author": "শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ", "pub": "মাকতাবাতুল আসলাফ", "pages": 166, "copies": 1, "cat": 3},
  {"no": 122, "title": "ইশকুল অব লাভ", "titleEn": "School of Love", "author": "মুহাম্মাদ আতীক উল্লাহ", "pub": "মাকতাবাতুল আযহার", "pages": 256, "copies": 1, "cat": 5},
  {"no": 123, "title": "স্পিক স্মার্টলি", "titleEn": "Speak Smartly", "author": "আব্দুল মতিন", "pub": "মাকতাবাতুল ওয়াতান", "pages": 232, "copies": 1, "cat": 5},
  {"no": 124, "title": "হজ্বের সফরনামা বাইতুল্লাহর মুসাফির", "titleEn": "Travelogue of Hajj: Traveler of Baitullah", "author": "মাওলানা আবু তাহের মিসবাহ", "pub": "দারুল কলম", "pages": 431, "copies": 1, "cat": 4},
  {"no": 125, "title": "Enjoy your Life", "titleEn": "Enjoy Your Life", "author": "ড.মুহাম্মাদ ইবনে আবদুর রহমান আরিফি", "pub": "দারুত তিবইয়ান", "pages": 400, "copies": 1, "cat": 5},
  {"no": 126, "title": "ফয়জুল কালাম", "titleEn": "Fayzul Kalam", "author": "মুফতিয়ে আজম ফয়জুল্লাহ (রহ)", "pub": "দারুত তিবইয়ান", "pages": 528, "copies": 1, "cat": 2},
  {"no": 127, "title": "আল আযকার", "titleEn": "Al-Adhkar", "author": "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (রহ.)", "pub": "মাকতাবাতুস সুন্নাহ", "pages": 1008, "copies": 1, "cat": 4},
  {"no": 128, "title": "আরজ আলী সমীপে", "titleEn": "To Arz Ali", "author": "আরিফ আজাদ", "pub": "সমকালীন প্রকাশন", "pages": 149, "copies": 1, "cat": 6},
  {"no": 129, "title": "মা, মা, মা এবং বাবা - দ্বিতীয় খণ্ড", "titleEn": "Mother, Mother, Mother and Father Vol. 2", "author": "সমকালীন সংকলন টিম", "pub": "সমকালীন প্রকাশন", "pages": 164, "copies": 1, "cat": 5},
  {"no": 130, "title": "পড়ো", "titleEn": "Poro (Read)", "author": "ওমর আল জাবির", "pub": "সমকালীন প্রকাশন", "pages": 183, "copies": 1, "cat": 5},
  {"no": 131, "title": "পড়ো-৪", "titleEn": "Poro 4", "author": "ওমর আল জাবির", "pub": "সমকালীন প্রকাশন", "pages": 160, "copies": 1, "cat": 5},
  {"no": 132, "title": "শিকড়ের সন্ধানে", "titleEn": "In Search of Roots", "author": "হামিদা মুবাশ্বেরা", "pub": "সমকালীন প্রকাশন", "pages": 296, "copies": 1, "cat": 5},
  {"no": 133, "title": "আরবি রস", "titleEn": "Arabic Flavor", "author": "আব্দুল্লাহ মাহমুদ নজীব", "pub": "সমকালীন প্রকাশন", "pages": 132, "copies": 1, "cat": 5},
  {"no": 134, "title": "মেঘ রোদ্দুর বৃষ্টি", "titleEn": "Clouds, Sunshine and Rain", "author": "রোদ্রময়ীরা", "pub": "সমকালীন প্রকাশন", "pages": 210, "copies": 1, "cat": 5},
  {"no": 135, "title": "বিলিয়ন ডলার মুসলিম", "titleEn": "The Billion Dollar Muslim", "author": "খুরাম মালিক", "pub": "সমকালীন প্রকাশন", "pages": 122, "copies": 1, "cat": 5},
  {"no": 136, "title": "ঈমানের দাবি", "titleEn": "Demands of Iman", "author": "মাওলানা আবু সাবের আবদুল্লাহ", "pub": "মুআসসাসা ইলমিয়্যাহ বাংলাদেশ", "pages": 136, "copies": 1, "cat": 2},
  {"no": 137, "title": "ট্রান্সজেন্ডারিজম", "titleEn": "Transgenderism", "author": "মাওলানা খালেদ সাইফুল্লাহ", "pub": "আল আমান পাবলিকেশন্স", "pages": 64, "copies": 1, "cat": 6},
  {"no": 138, "title": "ঈমান সবার আগে", "titleEn": "Iman Above All", "author": "মাওলানা মুহাম্মাদ আবদুল মালেক", "pub": "রাহনুমা প্রকাশনী", "pages": 79, "copies": 1, "cat": 2},
  {"no": 139, "title": "উম্মাহর ঐক্য পথ ও পন্থা", "titleEn": "Path and Method of Ummah's Unity", "author": "মাওলানা মুহাম্মাদ আবদুল মালেক", "pub": "মারকাযুদ দাওয়াহ আলইসলামিয়া", "pages": 206, "copies": 1, "cat": 2},
  {"no": 140, "title": "খুতুবাতে মাদরাসঃ মুহাম্মদ সা. দি গ্রেটেস্ট", "titleEn": "Khutubat-e-Madras: Muhammad (PBUH) The Greatest", "author": "সাইয়্যেদ সুলাইমান নদভি (রহ.)", "pub": "রাহনুমা প্রকাশনী", "pages": 248, "copies": 1, "cat": 3},
  {"no": 141, "title": "বিয়ের আগে", "titleEn": "Before Marriage", "author": "", "pub": "উমেদ প্রকাশ", "pages": 127, "copies": 1, "cat": 5},
  {"no": 142, "title": "ভালোবাসা (যিনা) কারে কয়", "titleEn": "What is Called Love (Zina)", "author": "জাকারিয়া মাসুদ", "pub": "সন্দীপন প্রকাশন", "pages": 32, "copies": 1, "cat": 5},
  {"no": 143, "title": "ট্রান্সজেন্ডার মতবাদ", "titleEn": "Transgender Ideology", "author": "আসিফ আদনান", "pub": "বাতায়ন", "pages": 52, "copies": 1, "cat": 6},
  {"no": 144, "title": "মিলনতত্ত্ব", "titleEn": "Theory of Union", "author": "ডা. শামসুল আরেফীন", "pub": "মাকতাবাতুল আসলাফ", "pages": 164, "copies": 1, "cat": 5},
  {"no": 145, "title": "তারাবীহর সালাতে কুরআনের বার্তা", "titleEn": "Quranic Message in Tarawih Prayer", "author": "শায়খ আহমাদুল্লাহ", "pub": "আস-সুন্নাহ ফাউন্ডেশন", "pages": 158, "copies": 1, "cat": 4},
  {"no": 146, "title": "ব্যাংকব্যবস্থা ও টাকার গোপন রহস্য", "titleEn": "Banking System and the Secret Mystery of Money", "author": "মোহাইমিন পাটোয়ারী", "pub": "ঐতিহ্য", "pages": 152, "copies": 1, "cat": 2},
  {"no": 147, "title": "ইসলামি ব্যাংকব্যবস্থার শুভংকরের ফাঁকি", "titleEn": "The Flaw in Islamic Banking System", "author": "মোহাইমিন পাটোয়ারী", "pub": "ঐতিহ্য", "pages": 95, "copies": 1, "cat": 2},
  {"no": 148, "title": "সুদ হারাম : কর্জে হাসানা একটি সমাধান", "titleEn": "Riba is Forbidden: Qardh Hasanah is a Solution", "author": "মোহাইমিন পাটোয়ারী", "pub": "ঐতিহ্য", "pages": 176, "copies": 1, "cat": 2},
  {"no": 149, "title": "মা হওয়ার দিনগুলোতে", "titleEn": "During the Days of Motherhood", "author": "উম্মু হাসান বিনতু সালিম", "pub": "সুকুন পাবলিশিং", "pages": 174, "copies": 1, "cat": 5},
  {"no": 150, "title": "দ্য কেয়ারিং ওয়াইফ", "titleEn": "The Caring Wife", "author": "মোঃ মতিউর রহমান", "pub": "মিফতা প্রকাশনী", "pages": 176, "copies": 1, "cat": 5},
  {"no": 151, "title": "দ্য কেয়ারিং হাজবেন্ড", "titleEn": "The Caring Husband", "author": "মোঃ মতিউর রহমান", "pub": "মিফতা প্রকাশনী", "pages": 152, "copies": 1, "cat": 5},
  {"no": 152, "title": "দাম্পত্যের ছন্দপতন", "titleEn": "Rhythm Fall in Conjugal Life", "author": "মাজদি মুহাম্মাদ আশ-শাহাভি সাইদ মুবারক", "pub": "ওয়াফি পাবলিকেশন", "pages": 178, "copies": 1, "cat": 5},
  {"no": 153, "title": "সংসার ভাবনা", "titleEn": "Thoughts on Family Life", "author": "মাহজাবিন খান", "pub": "সন্দীপন প্রকাশন", "pages": 128, "copies": 1, "cat": 5},
  {"no": 154, "title": "প্রস্তুতি প্যাকেজ", "titleEn": "Preparation Package", "author": "উম্মে মুসআব", "pub": "উমেদ প্রকাশ", "pages": 152, "copies": 1, "cat": 5},
  {"no": 155, "title": "নাসিহাহ", "titleEn": "Naseehah (Advice)", "author": "শায়খ মোখতার আহমাদ", "pub": "সন্দীপন প্রকাশন", "pages": 184, "copies": 1, "cat": 5},
  {"no": 156, "title": "উমরাহ সফরের গল্প", "titleEn": "Story of Umrah Journey", "author": "আরিফ আজাদ", "pub": "সুকুন পাবলিশিং", "pages": 184, "copies": 1, "cat": 5},
  {"no": 157, "title": "পরানবন্দি", "titleEn": "Captive of Heart", "author": "ডা. শামসুল আরেফীন", "pub": "সন্দীপন প্রকাশন", "pages": 132, "copies": 1, "cat": 5},
  {"no": 158, "title": "সোনালী যুগের মায়েরা", "titleEn": "Mothers of the Golden Era", "author": "শায়খ মোখতার আহমাদ", "pub": "সন্দীপন প্রকাশন", "pages": 144, "copies": 1, "cat": 3},
  {"no": 159, "title": "নারী সাহাবীদের জীবনকথা", "titleEn": "Lives of Female Sahabah", "author": "আব্দুস সালাম নদভী", "pub": "সন্দীপন প্রকাশন", "pages": 120, "copies": 1, "cat": 3},
  {"no": 160, "title": "অন্দরমহল", "titleEn": "The Inner Mahal", "author": "উম্মে মুসআব", "pub": "উমেদ প্রকাশ", "pages": 174, "copies": 1, "cat": 5},
  {"no": 161, "title": "নবীয়ে রহমত", "titleEn": "Nabi-e-Rahmat (Prophet of Mercy)", "author": "সাইয়্যিদ আব্দুল হাসান আলী নদভী", "pub": "সন্দীপন প্রকাশন", "pages": 460, "copies": 1, "cat": 3},
  {"no": 162, "title": "উইঘুরের মেয়ে", "titleEn": "The Uyghur Girl", "author": "শাহ মুহাম্মদ খালিদ", "pub": "রাহনুমা প্রকাশনী", "pages": 189, "copies": 1, "cat": 5},
  {"no": 163, "title": "আত্মার ওষুধ", "titleEn": "Medicine for the Soul", "author": "ইমাম ইবনুল কাইয়্যিম", "pub": "সন্দীপন প্রকাশন", "pages": 224, "copies": 1, "cat": 5},
  {"no": 164, "title": "রুকইয়াহ", "titleEn": "Ruqyah", "author": "আব্দুল্লাহ আল মাহমুদ", "pub": "সন্দীপন প্রকাশন", "pages": 312, "copies": 1, "cat": 4},
  {"no": 165, "title": "দুনিয়া অনন্ত জীবনের পথ", "titleEn": "Dunya: The Path to Eternal Life", "author": "ইমাম আবু বকর বিন আবিদ্দুনিয়া", "pub": "আবরণ প্রকাশন", "pages": 175, "copies": 1, "cat": 5},
  {"no": 166, "title": "নেক সন্তান গড়বেন যেভাবে", "titleEn": "How to Raise Righteous Children", "author": "শাইখ সালেহ আল মুনাজ্জিদ", "pub": "ওয়াফি পাবলিকেশন", "pages": 47, "copies": 1, "cat": 5},
  {"no": 167, "title": "প্রেমময় দাম্পত্য জীবন", "titleEn": "Loving Conjugal Life", "author": "উসতাজ হাসসান শামসি পাশা", "pub": "রুহামা পাবলিকেশন", "pages": 518, "copies": 1, "cat": 5},
  {"no": 168, "title": "ইমোショナル ইন্টেলিজেন্স", "titleEn": "Emotional Intelligence", "author": "কবির আনোয়ার মুজাহিদ রাসেল", "pub": "সন্দীপন প্রকাশন", "pages": 176, "copies": 1, "cat": 5},
  {"no": 169, "title": "ডাবলস্ট্যান্ড", "titleEn": "Double Standard", "author": "ডা. শামসুল আরেফীন", "pub": "মাকতাবাতুল আযহার", "pages": 192, "copies": 1, "cat": 6},
  {"no": 170, "title": "এই অবেলায়", "titleEn": "In This Untimely Hour", "author": "ডা. শামসুল আরেফীন", "pub": "সন্দীপন প্রকাশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 171, "title": "গুরাব", "titleEn": "Ghurabah (Strangers)", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সন্দীপন প্রকাশন", "pages": 64, "copies": 1, "cat": 5},
  {"no": 172, "title": "ইস্তিগফার", "titleEn": "Istighfar (Seeking Forgiveness)", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সন্দীপন প্রকাশন", "pages": 104, "copies": 1, "cat": 4},
  {"no": 173, "title": "কুড়ানো মানিক", "titleEn": "Picked Up Gems", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "সন্দীপন প্রকাশন", "pages": 80, "copies": 1, "cat": 5},
  {"no": 174, "title": "দরজা এখনো খোলা", "titleEn": "The Door is Still Open", "author": "ইমাম ইবনু আবিদ দুনইয়া", "pub": "সন্দীপন প্রকাশন", "pages": 72, "copies": 1, "cat": 5},
  {"no": 175, "title": "জীবন যদি হতো নারী সাহাবীর মতো", "titleEn": "If Life Were Like a Female Companion", "author": "ড. হানান লাশিন", "pub": "সমকালীন প্রকাশন", "pages": 120, "copies": 1, "cat": 3},
  {"no": 176, "title": "সবর", "titleEn": "Sabr (Patience)", "author": "ইমাম কায়্যিম আল-জাওযিয়্যা", "pub": "সমকালীন প্রকাশন", "pages": 171, "copies": 1, "cat": 5},
  {"no": 177, "title": "নিয়ত ও এখলাস", "titleEn": "Niyyah and Ikhlas", "author": "ইমাম গাযযালী রহ.", "pub": "মোহাম্মদী লাইব্রেরি", "pages": 128, "copies": 1, "cat": 5},
  {"no": 178, "title": "উদর ও লজ্জাস্থান অনিষ্ট ও প্রতিকার", "titleEn": "Evils of Stomach and Private Parts", "author": "ইমাম গাযযালী রহ.", "pub": "মোহাম্মদী লাইব্রেরি", "pages": 110, "copies": 1, "cat": 5},
  {"no": 179, "title": "ফ্যামিলি ম্যানেজমেন্ট ও জন্মনিয়ন্ত্রণ", "titleEn": "Family Management and Birth Control", "author": "ইঞ্জি. খন্দকার মারছুছ", "pub": "হিলফুল ফুযুল প্রকাশনী", "pages": 104, "copies": 1, "cat": 5},
  {"no": 180, "title": "রমযান নির্দেশিকা", "titleEn": "Ramadan Guidelines", "author": "প্রফেসর ড. মো. আব্দুল্লাহেল বাকী", "pub": "কুরআন শিক্ষা গবেষণা ও প্রশিক্ষণ কেন্দ্র", "pages": 96, "copies": 1, "cat": 4},
  {"no": 181, "title": "আত্মজীবনী মূলক সাক্ষাৎকার", "titleEn": "Autobiographical Interview", "author": "মুক্তি যুবায়ের আহমদ", "pub": "হিলফুল ফুযুল প্রকাশনী", "pages": 72, "copies": 1, "cat": 3},
  {"no": 182, "title": "আকিদার মূলনীতি", "titleEn": "Principles of Aqeedah", "author": "শাইখ আহমাদ মূসা জিবরিল", "pub": "ইলমওয়েব", "pages": 162, "copies": 1, "cat": 2},
  {"no": 183, "title": "আমার নবি মুহাম্মদ", "titleEn": "My Prophet Muhammad", "author": "জাকারিয়া মাসুদ", "pub": "সন্দীপন প্রকাশন", "pages": 504, "copies": 1, "cat": 1},
  {"no": 184, "title": "আল কুরআনুল কারীম সাবলীল বাংলা অনুবাদ", "titleEn": "Al-Quran Al-Kareem Fluent Bengali Translation", "author": "প্রফেসর ড. মওলানা মুহাম্মদ আব্দুস সামাদ", "pub": "বাংলাদেশ দাওয়াহ সার্কেল", "pages": 982, "copies": 1, "cat": 0},
  {"no": 185, "title": "তাফসীরে ফুরকান (প্রথম খণ্ড)", "titleEn": "Tafseer-e-Furqan Vol. 1", "author": "অধ্যাপক মো: নুরুল ইসলাম মক্কী", "pub": "তাওহীদ পাবলিকেশন্স", "pages": 477, "copies": 1, "cat": 0},
  {"no": 186, "title": "প্রশ্নোত্তরে ফিকহুল ইবাদাত", "titleEn": "Fiqh-ul-Ibadat in Questions & Answers", "author": "অধ্যাপক মো: নুরুল ইসলাম মক্কী", "pub": "সবুজপত্র পাবলিকেশন্স", "pages": 589, "copies": 1, "cat": 4},
  {"no": 187, "title": "অবক্ষয়কাল", "titleEn": "Era of Decay", "author": "আসিফ আদনান", "pub": "ইলমহাউজ পাবলিকেশন", "pages": 368, "copies": 1, "cat": 6},
  {"no": 188, "title": "চিন্তাপরাধ", "titleEn": "Crime of Thought", "author": "আসিফ আদনান", "pub": "ইলমহাউজ পাবলিকেশন", "pages": 191, "copies": 1, "cat": 6},
  {"no": 189, "title": "মুহসিনীন", "titleEn": "Al-Muhsinoon", "author": "আবদুল্লাহ ইবনে জাফর", "pub": "ইনবাত পাবলিকেশন", "pages": 290, "copies": 1, "cat": 5},
  {"no": 190, "title": "মুমিনের জীবনে আল্লাহর ওয়াদা", "titleEn": "Allah's Promise in a Believer's Life", "author": "মুহাম্মদ ইউসুফ শাহ", "pub": "সন্দীপন প্রকাশন", "pages": 192, "copies": 1, "cat": 5},
  {"no": 191, "title": "মিশন : ইসলাম", "titleEn": "Mission: Islam", "author": "ডা. শামসুল আরেফীন", "pub": "সন্দীপন প্রকাশন", "pages": 184, "copies": 1, "cat": 6},
  {"no": 192, "title": "সম্পদ গড়ার কৌশল", "titleEn": "Strategies of Wealth Generation", "author": "উমার সূল", "pub": "সন্দীপন প্রকাশন", "pages": 220, "copies": 1, "cat": 5},
  {"no": 193, "title": "বিশ্বাসের যৌক্তিকতা", "titleEn": "Rationality of Faith", "author": "রাফান আহমেদ", "pub": "সন্দীপন প্রকাশন", "pages": 136, "copies": 1, "cat": 6},
  {"no": 194, "title": "লিডারশীপ", "titleEn": "Leadership", "author": "মুজাহিদ রাসেল", "pub": "সন্দীপন প্রকাশন", "pages": 200, "copies": 1, "cat": 5},
  {"no": 195, "title": "শেষের অশ্রু", "titleEn": "Tears of the End", "author": "দাঊদ ইবনু সুলাইমান উবাইদি", "pub": "সন্দীপন প্রকাশন", "pages": 104, "copies": 1, "cat": 5},
  {"no": 196, "title": "অন্ধকার থেকে আলোতে", "titleEn": "From Darkness to Light", "author": "মুহাম্মদ মুশফিকুর রহমান মিনার", "pub": "সমর্পণ প্রকাশন", "pages": 168, "copies": 1, "cat": 5},
  {"no": 197, "title": "ঋণের আর্তনাদ", "titleEn": "Cry of Debt", "author": "শাহীনা বেগম", "pub": "সমকালীন প্রকাশন", "pages": 96, "copies": 1, "cat": 5},
  {"no": 198, "title": "ফরায়েজী আন্দোলন", "titleEn": "Faraizi Movement", "author": "ড. মুহাম্মদ আহসানউল্লাহ", "pub": "সন্দীপন প্রকাশন", "pages": 197, "copies": 1, "cat": 3},
  {"no": 199, "title": "সংবিৎ", "titleEn": "Awakening (Songbit)", "author": "জাকারিয়া মাসুদ", "pub": "সাবিল পাবলিকেশন", "pages": 222, "copies": 1, "cat": 5},
  {"no": 200, "title": "জীবন পথে সফল হতে", "titleEn": "To Succeed on Life's Path", "author": "শাইখ ড. আব্দুল কারীম বাক্কার", "pub": "সমকালীন প্রকাশন", "pages": 157, "copies": 1, "cat": 5},
  {"no": 201, "title": "ইসলাম আপনাকে যেভাবে দেখতে চায়", "titleEn": "How Islam Wants to See You", "author": "ড. ইউসুফ আল কারজাভি", "pub": "গার্ডিয়ান পাবলিকেশনস", "pages": 136, "copies": 1, "cat": 2},
  {"no": 202, "title": "শাহরু রমাদান", "titleEn": "Shahr-u-Ramadan", "author": "ইমাম ইবনু রজব হাম্বলী", "pub": "সন্দীপন প্রকাশন", "pages": 128, "copies": 1, "cat": 4},
  {"no": 203, "title": "আমার দেখা আমেরিকা", "titleEn": "America As I Saw It", "author": "সাইয়েদ কুতুব শহীদ", "pub": "সন্দীপন প্রকাশন", "pages": 56, "copies": 1, "cat": 3},
  {"no": 204, "title": "মহিমান্বিত জুমুআ", "titleEn": "The Glorious Jumu'ah", "author": "শাইখ মুস্তফা আল আদাবি", "pub": "সন্দীপন প্রকাশন", "pages": 72, "copies": 1, "cat": 4}
];

const AUTHOR_EN_MAP = {
  "হাফেজ মুনির উদ্দিন আহমদ": "Hafiz Munir Uddin Ahmed",
  "শাইখ মাহফুজ": "Shaikh Mahfuz",
  "মোহাম্মদ হাবিবুর রহমান": "Mohammad Habibur Rahman",
  "মাওলানা আব্দুস শহীদ নাসিম": "Maulana Abdus Shahid Nasim",
  "ইমাম আবু যাকারিয়া ইয়াহয়া বিন আশরাফ নববী (রহ)": "Imam Abu Zakariya Yahya An-Nawawi",
  "ইমাম আবু যাকারিয়া ইয়াহয়া বিন আশরাফ নববী (রহ)": "Imam Abu Zakariya Yahya An-Nawawi",
  "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী": "Imam Muhyiddin Yahya An-Nawawi",
  "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (রহ.)": "Imam Muhyiddin Yahya An-Nawawi",
  "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (রহ.)": "Imam Muhyiddin Yahya An-Nawawi",
  "সফিউর রহমান মোবারকপুরী": "Safi-ur-Rahman Mubarakpuri",
  "সফিউর রহমান মুবারকপুরী": "Safi-ur-Rahman Mubarakpuri",
  "শাইখুল হাদিস আল্লামা সফিউর রহমান মোবারকপুরী": "Allama Safi-ur-Rahman Mubarakpuri",
  "জিম তানভীর": "Jim Tanvir",
  "মুফতি মোহাম্মদ শফি (রহ.)": "Mufti Muhammad Shafi",
  "ডঃ খোন্দকার আব্দুল্লাহ জাহাঙ্গীর": "Dr. Khandaker Abdullah Jahangir",
  "ইমাম সিরিজ টিম": "Imam Series Team",
  "মুহাম্মদ নাসির উদ্দিন আলবানী": "Muhammad Nasiruddin al-Albani",
  "আল্লামা হাফিজ ইবনুল কায়্যিম": "Allama Hafiz Ibn al-Qayyim",
  "ইমাম ইবনুল কায়্যিম": "Imam Ibn al-Qayyim",
  "ইমাম ইবনুল কাই্যিম": "Imam Ibn al-Qayyim",
  "ইমাম ইবনুল কাইয়্যিম": "Imam Ibn al-Qayyim",
  "মুহাম্মদ আসাদুল্লাহ আল গালিব": "Muhammad Asadullah Al-Ghalib",
  "ড. মুযাফফর বিন মুহসিন": "Dr. Muzaffar Bin Muhsin",
  "আরিফ আজাদ": "Arif Azad",
  "জাকারিয়া মাসুদ": "Zakaria Masud",
  "জাকারিয়া মাসুদ": "Zakaria Masud",
  "ওমর আল জাবির": "Umar Al Jabir",
  "সিহিন্তা শরীফা": "Sihinta Sharifa",
  "বিনতু আদিল": "Bintu Adil",
  "মাহমুদ বিন নূর": "Mahmud Bin Nur",
  "নোমান আলী খান": "Nouman Ali Khan",
  "আব্দুল হাই মুহাম্মদ সাইফুল্লাহ": "Abdullah Hayy Muhammad Saifullah",
  "ড. খালিদ আবু শাদি": "Dr. Khalid Abu Shadi",
  "শিহাব আহমেদ তুহিন": "Shihab Ahmed Tuhin",
  "ফিরাস আল খতিব": "Firas Alkhateeb",
  "আবু মুআবিয়া ইসমাইল কামদার": "Abu Muawiyah Ismail Kamdar",
  "আবু মুআবিয়া ইসমাইল কামদার": "Abu Muawiyah Ismail Kamdar",
  "ওয়ায়েল ইব্রাহিম": "Wael Ibrahim",
  "ওয়ায়েল ইব্রাহিম": "Wael Ibrahim",
  "ওয়ায়েল ইব্ৰাহিম": "Wael Ibrahim",
  "ওয়ায়েল ইব্ৰাহিম": "Wael Ibrahim",
  "শাওন আহমেদ": "Shawon Ahmed",
  "আবদুল আযীয আল আমান": "Abdul Aziz Al Aman",
  "শাইখ আব্দুল আযীয আত তারিফী": "Shaikh Abdul Aziz At-Tarefe",
  "শাইখ আব্দুল মালিক আল কাসিম": "Shaikh Abdul Malik Al-Qasim",
  "মোঃ নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "মোঃ নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "মো: নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "মো: নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "মো. নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "মো. নুরুল ইসলাম নয়ন": "Md. Nurul Islam Nayon",
  "শাইখ মুহাম্মাদ সালেহ আল মুনাজ্জিদ": "Shaikh Muhammad Salih Al-Munajjid",
  "হুজ্জাতুল ইসলাম ইমাম গাযযালী রহ.": "Imam Al-Ghazali",
  "শাইখ আলী জাবির আল ফাইফী": "Shaikh Ali Jabir Al-Fifi",
  "ড. রাগিব সারজানি": "Dr. Raghib Sirjani",
  "ডা. শামসুল আরেফীন": "Dr. Shamsul Arefin",
  "খলীলুর রহমান বিন ফযলুর রহমান": "Khalilur Rahman Bin Fazlur Rahman",
  "মোস্তাফিজুর রহমান বিন আব্দুল আজিজ আল-মাদানী": "Mostafizur Rahman Bin Abdul Aziz Al-Madani",
  "শাইখ ড. আব্দুল কারীম বাক্কার": "Shaikh Dr. Abdul Karim Bakkar",
  "মুফতী মাওলানা মনসূরুল হক": "Mufti Maulana Mansurul Haq",
  "মোহাম্মদ ফারিস": "Mohammed Faris",
  "ড. মিজানুর রহমান আজহারি": "Dr. Mizanur Rahman Azhari",
  "শায়খ সাইদ রামাদান বুতি": "Shaikh Said Ramadan Al-Buti",
  "মোহাম্মদ আতিক উল্লাহ": "Muhammad Atiqullah",
  "শাইখ আহমাদ মুসা জিবরিল": "Shaikh Ahmad Musa Jibril",
  "রোদ্রময়ীরা": "Rodromoyira",
  "মুফতি মাহমুদুল হক": "Mufti Mahmudul Haque",
  "মাওলানা আব্দুল্লাহ সুহাইব": "Maulana Abdullah Suhaib",
  "মাওলানা মুহাম্মাদ ইকবাল গিলানী": "Maulana Muhammad Iqbal Gilani",
  "লস্ট মডেস্টি ব্লগ": "Lost Modesty Blog",
  "ডা. জাকির নায়েক": "Dr. Zakir Naik",
  "ডা. জাকির নায়েক": "Dr. Zakir Naik",
  "ড. জাকির নায়েক": "Dr. Zakir Naik",
  "ড. জাকির নায়েক": "Dr. Zakir Naik",
  "শাইখ আহমদ ফরিদ": "Shaikh Ahmad Farid",
  "মাওলানা আফজাল ইসমাঈল": "Maulana Afzal Ismail",
  "ড. আবদুল্লাহ আল খাতির": "Dr. Abdullah Al-Khater",
  "হুজুর হয়ে টিম": "Hujur Hoye Team",
  "শায়খ আহমাদুল্লাহ": "Shaikh Ahmadullah",
  "শাইখুল ইসলাম মুফতী মুহাম্মাদ তাকী উসমানী": "Mufti Muhammad Taqi Usmani",
  "মুহাম্মাদ আতীক উল্লাহ": "Muhammad Atiqullah",
  "আবদুস সাত্তার আইনী": "Abdus Sattar Aini",
  "যায়েদ বিন নূর": "Zayed Bin Nur",
  "জায়েদ বিন নূর": "Zayed Bin Nur",
  "জায়েদ বিন নূর": "Zayed Bin Nur",
  "ইমাম আহমাদ ইবনু হাম্বাল (রহিমাহুল্লাহ)": "Imam Ahmad Ibn Hanbal",
  "আব্দুল মতিন": "Abdul Matin",
  "মাওলানা আবু তাহের মিসবাহ": "Maulana Abu Taher Misbah",
  "ড. মুহাম্মাদ ইবনে আবদুর রহমান আরিফি": "Dr. Muhammad Ibn Abdur Rahman Al-Arifi",
  "মুফতিয়ে আজম ফয়জুল্লাহ (রহ)": "Mufti-e-Azam Faydullah",
  "মুফতিিয়ে আজম ফয়জুল্লাহ (রহ)": "Mufti-e-Azam Faydullah",
  "মুফতীয়ে আজম ফয়জুল্লাহ (রহ)": "Mufti-e-Azam Faydullah",
  "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (রহ.)": "Imam Muhyiddin Yahya An-Nawawi",
  "সমকালীন সংকলন টিম": "Somokalinn Compilation Team",
  "হামিদা মুবাশ্বেরা": "Hamida Mubashwera",
  "আব্দুল্লাহ মাহমুদ নজীব": "Abdullah Mahmud Najeeb",
  "খুরাম মালিক": "Khurram Malik",
  "মাওলানা আবু সাবের আবদুল্লাহ": "Maulana Abu Saber Abdullah",
  "মাওলানা খালেদ সাইফুল্লাহ": "Maulana Khalid Saifullah",
  "মাওলানা মুহাম্মাদ আবদুল মালেক": "Maulana Muhammad Abdul Malek",
  "সাইয়েদ সুলাইমান নদভি (রহ.)": "Sayyid Sulaiman Nadwi",
  "সাইয়েদ সুলাইমান নদভি": "Sayyid Sulaiman Nadwi",
  "সাইয়্যিদ সুলাইমান নদভি (রহ.)": "Sayyid Sulaiman Nadwi",
  "সাইয়্যিদ সুলাইমান নদভি": "Sayyid Sulaiman Nadwi",
  "সাইয়েদ কুতুব শহীদ": "Sayyid Qutb Shaheed",
  "সাইয়্যেদ কুতুব শহীদ": "Sayyid Qutb Shaheed",
  "শায়খ সাইদ রামাদান বুতি": "Shaikh Said Ramadan Al-Buti",
  "শাইখ সাইদ রামাদান বুতি": "Shaikh Said Ramadan Al-Buti",
  "রোদ্রময়ীরা": "Rodromoyira",
  "হুজুর হয়ে টিম": "Hujur Hoye Team",
  "হুজুর হয়ে টীম": "Hujur Hoye Team",
  "আসিফ আদনান": "Asif Adnan",
  "মোহাইমিন পাটোয়ারী": "Mohaimin Patwary",
  "মোহাইমিন পাটোয়ারী": "Mohaimin Patwary",
  "উম্মু হাসান বিনতু সালিম": "Ummu Hasan Bintu Salim",
  "মোঃ মতিউর রহমান": "Md. Motiur Rahman",
  "মাজদি মুহাম্মাদ আশ-শাহাভি সাইদ মুবারক": "Majdi Muhammad Ash-Shahawi",
  "মাহজাবিন খান": "Mahjabin Khan",
  "উম্মে মুসআব": "Umme Musab",
  "শায়খ মোখতার আহমাদ": "Shaikh Mokhtar Ahmad",
  "শায়খ মোখতার আহমাদ": "Shaikh Mokhtar Ahmad",
  "আব্দুস সালাম নদভী": "Abdus Salam Nadwi",
  "সাইয়্যিদ আব্দুল হাসান আলী নদভী": "Sayyid Abul Hasan Ali Nadwi",
  "শাহ মুহাম্মদ খালিদ": "Shah Muhammad Khalid",
  "ইমাম ইবনুল কাইয়্যিম": "Imam Ibn al-Qayyim",
  "আব্দুল্লাহ আল মাহমুদ": "Abdullah Al Mahmud",
  "ইমাম আবু বকর বিন আবিদ্দুনিয়া": "Imam Abu Bakr Ibn Abi Al-Dunya",
  "শাইখ সালেহ আল মুনাজ্জিদ": "Shaikh Salih Al-Munajjid",
  "উসতাজ হাসসান শামসি পাশা": "Ustadh Hassan Shamsi Pasha",
  "কবির আনোয়ার মুজাহিদ রাসেল": "Kabir Anwar Mujahid Rasel",
  "মুজাহিদ রাসেল": "Mujahid Rasel",
  "ইমাম ইবনু আবিদ দুনইয়া": "Imam Ibn Abi Al-Dunya",
  "ড. হানান লাশিন": "Dr. Hanan Lashin",
  "ইমাম কায়্যিম আল-জাওযিয়্যা": "Imam Qayyim Al-Jawziyyah",
  "ইমাম কায়্যিম আল-জাওযিয়্যা": "Imam Qayyim Al-Jawziyyah",
  "ইমাম কাইয়্যিম আল-জাওযিয়্যা": "Imam Qayyim Al-Jawziyyah",
  "ইমাম গাযযালী রহ.": "Imam Al-Ghazali",
  "ইমাম গাযালী রহ.": "Imam Al-Ghazali",
  "হুজ্জাতুল ইসলাম ইমাম গাযযালী রহ.": "Imam Al-Ghazali",
  "ইঞ্জি. খন্দকার মারছুছ": "Engr. Khandaker Marsus",
  "প্রফেসর ড. মো. আব্দুল্লাহেল বাকী": "Prof. Dr. Md. Abdullahel Baki",
  "প্রফেসর ড. মো: আব্দুল্লাহেল বাকী": "Prof. Dr. Md. Abdullahel Baki",
  "মুফতি যুবায়ের আহমদ": "Mufti Zubayer Ahmed",
  "প্রফেসর ড. মওলানা মুহাম্মদ আব্দুস সামাদ": "Prof. Dr. Maulana Muhammad Abdus Samad",
  "অধ্যাপক মো: নুরুল ইসলাম মক্কী": "Prof. Md. Nurul Islam Mokhi",
  "আবদুল্লাহ ইবনে জাফর": "Abdullah Ibn Jafar",
  "মুহাম্মদ ইউসুফ শাহ": "Muhammad Yusuf Shah",
  "উমার সূল": "Umar Sul",
  "রাফান আহমেদ": "Rafan Ahmed",
  "দাঊদ ইবনু সুলাইমান উবাইদি": "Dawood Ibn Sulaiman Ubaidi",
  "মুহাম্মদ মুশফিকুর রহমান মিনার": "Muhammad Mushfiqur Rahman Minar",
  "শাহীনা বেগম": "Shahina Begum",
  "ড. মুহাম্মদ আহসানউল্লাহ": "Dr. Muhammad Ahsanullah",
  "ড. ইউসুফ আল কারজাভি": "Dr. Yusuf Al-Qaradawi",
  "ইমাম ইবনু রজব হাম্বলী": "Imam Ibn Rajab Al-Hanbali",
  "সাইয়েদ কুতুব শহীদ": "Sayyid Qutb Shaheed",
  "শাইখ মুস্তফা আল আদাবি": "Shaikh Mustafa Al-Adawi",
  "হাফেয মাওলানা মুফতী মুহাম্মাদ খাইরুল্লাহ": "Hafiz Maulana Mufti Muhammad Khairullah"
};

const PUB_EN_MAP = {
  "আল কোরআন একাডেমী লন্ডন": "Al Quran Academy London",
  "সার্কেল অব কুরআন": "Circle of Quran",
  "আল বারাকা লাইব্রেরি": "Al Baraka Library",
  "মাওলা ব্রাদার্স": "Mawla Brothers",
  "বাংলাদেশ কুরআন শিক্ষা সোসাইটি": "Bangladesh Quran Education Society",
  "মোহাম্মদী কুতুবখানা": "Mohammadi Kutubkhana",
  "মোহাম্মদী লাইব্রেরি": "Mohammodi Library",
  "বাংলাদেশ ইসলামিক সেন্টার ঢাকা": "Bangladesh Islamic Center Dhaka",
  "বাংলাদেশ দাওয়াহ সার্কেল": "Bangladesh Dawah Circle",
  "তাওহীদ পাবলিকেশন্স": "Tawhid Publications",
  "চেতনা প্রকাশন": "Chetona Prokashon",
  "রেইনড্রপস": "Raindrops",
  "কালান্তর প্রকাশনী": "Kalantor Prokashoni",
  "আস-সুন্নাহ পাবলিকেশন": "As-Sunnah Publication",
  "সমকালীন প্রকাশন": "Somokalinn Prokashon",
  "মীনা বুক হাউস": "Meena Book House",
  "হাদীছ ফাউণ্ডেশন বাংলাদেশ": "Hadith Foundation Bangladesh",
  "আছ-ছিরাত প্রকাশনী": "As-Sirat Prokashoni",
  "গার্ডিয়ান পাবলিকেশনস": "Guardian Publication",
  "সাবিল পাবলিকেশন": "Sabil Publication",
  "সন্দীপন প্রকাশন": "Sandeepon Prokashon",
  "রাইয়ান প্রকাশন": "Raiyan Prokashon",
  "বুকিশ পাবলিশার": "Bookish Publisher",
  "মুসলিম ভিলেজ": "Muslim Village",
  "সত্যায়ন প্রকাশন": "Sattayon Prokashon",
  "শব্দশৈলী": "Shabdashoilee",
  "রুহামা পাবলিকেশন": "Ruhama Publication",
  "সমর্পণ প্রকাশন": "Somorpon Prokashon",
  "প্রচ্ছদ প্রকাশন": "Prochchhod Prokashon",
  "সিয়ান পাবলিকেশন": "SEAN Publication",
  "ওয়াফি পাবলিকেশন": "Wafi Publication",
  "বইপল্লি": "Boipolli",
  "বইকেন্দ্র পাবলিকেশন": "Boikendro Publication",
  "আলোকিত প্রকাশনী": "Alokito Prokashoni",
  "মাকতাবাতুল হাসান": "Maktabatul Hasan",
  "মাকতাবাতুল আসলাফ": "Maktabatul Aslaf",
  "আত্ তাওহীদ প্রকাশনী": "At-Tawhid Prokashoni",
  "আস-সুন্নাহ ফাউন্ডেশন": "As-Sunnah Foundation",
  "দারুল আরকাম": "Darul Arqam",
  "মাকতাবাতুল মানসূর": "Maktabatul Mansur",
  "তাজকিয়া পাবলিকেশন": "Tazkiya Publication",
  "মাকতাবাতুল আযহার": "Maktabatul Azhar",
  "ইলমওয়েব": "Ilmweb",
  "Wafilife": "Wafilife",
  "মুআসসাসা ইলমিয়্যাহ বাংলাদেশ": "Muassasa Ilmiyah Bangladesh",
  "মাকতাবাতুল ফুরকান": "Maktabatul Furqan",
  "ইলমহাউজ পাবলিকেশন": "Ilmhouse Publication",
  "ইলহাম": "Ilham",
  "পুষ্প প্রকাশন": "Pushpo Prokashon",
  "মুন্তাখাব প্রকাশনী": "Muntakhab Prokashoni",
  "মাকতাবাতুল ওয়াতান": "Maktabatul Watan",
  "মাকতাবাতুল বায়ান": "Maktabatul Bayan",
  "দারুল কলম": "Darul Qalam",
  "দারুত তিবইয়ান": "Darut Tibyan",
  "মাকতাবাতুস সুন্নাহ": "Maktabatus Sunnah",
  "আল আমান পাবলিকেশন্স": "Al Aman Publications",
  "রাহনুমা প্রকাশনী": "Rahnuma Prokashoni",
  "মারকাযুদ দাওয়াহ আলইসলামিয়া": "Markazud Dawah Alislamiah",
  "উমেদ প্রকাশ": "Umed Prokash",
  "বাতায়ন": "Batayon",
  "ঐতিহ্য": "Oitijjo",
  "সুকুন পাবলিশিং": "Sukoon Publishing",
  "মিফতা প্রকাশনী": "Miftah Prokashoni",
  "আবরণ প্রকাশন": "Aboron Prokashon",
  "হিলফুল ফুযুল প্রকাশনী": "Hilful Fuzul Prokashoni",
  "কুরআন শিক্ষা গবেষণা ও প্রশিক্ষণ কেন্দ্র": "Quran Education Research & Training Center",
  "সবুজপত্র পাবলিকেশন্স": "Sobujpata Publications",
  "ইনবাত পাবলিকেশন": "Inbat Publication",
  "পুষ্প প্রকাশন": "Pushpo Prokashon",
  "সুকুন পাবলিশিং": "Sukoon Publishing",
  "মিফতা প্রকাশনী": "Miftah Prokashoni",
  "আবরণ প্রকাশন": "Aboron Prokashon",
  "রাহবার": "Rahbar",
  "শব্দশিল্প": "Shabdoshilpa",
  "সীরাত পাবলিকেশন": "Sherat Publicaton",
  "সিয়ান পাবলিকেশন": "SEAN Publication"
};

const PUB_EN_MAP_KEYS = Object.keys(PUB_EN_MAP);

let currentLang = localStorage.getItem("ssl_lang") || "bn";

const INITIAL_CATS_BN = ["আল-কুরআন", "হাদীস ও সুন্নাহ", "আকিদা ও বিশ্বাস", "সীরাতুন্নবী (সা.)", "সালাত ও ইবাদত", "আত্মশুদ্ধি ও জীবনগঠন", "ইসলাম ও সমসাময়িক চিন্তা"];
const INITIAL_CATS_EN = ["Al-Quran", "Hadith & Sunnah", "Aqeedah & Belief", "Seerat-un-Nabi", "Salat & Worship", "Self-Purification & Life", "Islam & Contemporary Thought"];

const I18N = {
  bn: {
    appTitle: "সত্যের সন্ধানে লাইব্রেরি",
    appSub: "সত্য অনুসন্ধানে জ্ঞান অর্জন করুন এবং জীবনকে করুন আলোকিত",
    welcomeBadge: "স্বাগতম জ্ঞান পিয়াসু",
    verseText: '"পড়ো তোমার প্রভুর নামে, যিনি সৃষ্টি করেছেন।"',
    verseRef: '— সূরা আল-আলাক (৯৬:১)',
    allBooks: "সকল বই",
    allAuthors: "সকল লেখক",
    allPubs: "সকল প্রকাশনী",
    searchPlaceholder: "বইয়ের নাম, লেখক বা প্রকাশনী দিয়ে খুঁজুন...",
    favText: "প্রিয় বই",
    adminText: "এডমিন",
    adminPanel: "এডমিন প্যানেল",
    dashTitle: "এডমিন ড্যাশবোর্ড",
    addBook: "নতুন বই যোগ করুন",
    addCat: "নতুন ক্যাটাগরি",
    borrowManage: "বই ধার ব্যবস্থাপনা",
    userMessages: "ব্যবহারকারীর মেসেজ ",
    changePass: "পাসওয়ার্ড পরিবর্তন",
    logout: "লগআউট করুন",
    booksCount: "টি বই",
    copiesCount: "টি কপি",
    authorsCount: "জন লেখক",
    pubsCount: "টি প্রকাশনী",
    noAuthor: "লেখক উল্লেখ নেই",
    noPub: "প্রকাশনী নেই",
    noPage: "প্রযোজ্য নয়",
    resetFilter: "ফিল্টার রিসেট",
    gridCover: "কভার",
    listTable: "তালিকা",
    sortNo: "বই নং অনুযায়ী",
    sortTitle: "নামের ক্রমে",
    sortAuthor: "লেখকের ক্রমে",
    sortPages: "পৃষ্ঠা (বেশি থেকে কম)",
    totalVisitor: "ওয়েবসাইট মোট ভিজিটর",
    borrowedBooks: "ধার দেওয়া বই",
    totalBooks: "মোট বই",
    totalCopies: "মোট কপি",
    totalCats: "মোট ক্যাটাগরি",
    totalAuthors: "মোট লেখক",
    totalPubs: "মোট প্রকাশনী",
    noFound: "কোনো বই পাওয়া যায়নি",
    noFoundSub: "আপনার সার্চ কি-ওয়ার্ড বা ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।",
    bookNo: "নং",
    pagesShort: "পৃ.",
    tableNo: "নং",
    tableTitle: "বইয়ের নাম",
    tableAuthor: "লেখক / সম্পাদক",
    tablePub: "প্রকাশনী",
    tablePages: "পৃষ্ঠা",
    tableCopies: "কপি",
    tableFav: "প্রিয়",
    addFav: "প্রিয় তালিকায় যুক্ত করুন",
    removeFav: "প্রিয় তালিকা থেকে বাদ দিন",
    copyInfo: "তথ্য কপি করুন",
    updateInfo: "তথ্য আপডেট করুন",
    googleSearch: "গুগলে খুঁজুন",
    deleteBook: "বইটি মুছে ফেলুন",
    close: "বন্ধ করুন",
    cancel: "বাতিল",
    lblAuthorModal: "লেখক / সম্পাদক:",
    lblPubModal: "প্রকাশনী:",
    lblPagesModal: "পৃষ্ঠা সংখ্যা:",
    lblCopiesModal: "লাইব্রেরিতে কপি:",
    lblCatModal: "ক্যাটাগরি:",
    contactTitle: "যোগাযোগ করুন",
    contactSub: "মতামত বা যেকোনো প্রয়োজনে বার্তা পাঠান",
    lblName: "আপনার নাম *",
    namePlaceholder: "আপনার পূর্ণ নাম",
    lblPhone: "মোবাইল নম্বর *",
    phonePlaceholder: "01XXXXXXXXX",
    lblMsg: "আপনার বার্তা / মতামত *",
    msgPlaceholder: "আপনার বার্তা এখানে লিখুন...",
    sendMsgBtn: "বার্তা পাঠান",
    footerCopy: "&copy; ২০২৬ সত্যের সন্ধানে লাইব্রেরি - সর্ব স্বত্ব সংরক্ষিত।",
    lblAddr: "ঠিকানা:",
    valAddr: "আগকয়ড়া, উল্লাপাড়া, সিরাজগঞ্জ",
    lblFounder: "প্রতিষ্ঠাতা:",
    valFounder: "মোঃ শাকিল হোসেন",
    lblEst: "প্রতিষ্ঠাকাল:",
    valEst: "০১/০১/২০২১"
  },
  en: {
    appTitle: "Sotter Sondhane Library",
    appSub: "Acquire knowledge in search of truth and enlighten your life.",
    welcomeBadge: "Welcome Knowledge Seeker",
    verseText: '"Recite in the name of your Lord who created."',
    verseRef: '— Surah Al-Alaq (96:1)',
    allBooks: "All Books",
    allAuthors: "All Authors",
    allPubs: "All Publishers",
    searchPlaceholder: "Search by book title, author, or publisher...",
    favText: "Favorites",
    adminText: "Admin",
    adminPanel: "Admin Panel",
    dashTitle: "Admin Dashboard",
    addBook: "Add New Book",
    addCat: "New Category",
    borrowManage: "Borrower Management",
    userMessages: "User Messages ",
    changePass: "Change Password",
    logout: "Logout",
    booksCount: "Books",
    copiesCount: "Copies",
    authorsCount: "Authors",
    pubsCount: "Publishers",
    noAuthor: "No Author",
    noPub: "No Publisher",
    noPage: "N/A",
    resetFilter: "Reset Filters",
    gridCover: "Cover",
    listTable: "List",
    sortNo: "By Book No",
    sortTitle: "By Title",
    sortAuthor: "By Author",
    sortPages: "Pages (High to Low)",
    totalVisitor: "Total Site Visitors",
    borrowedBooks: "Borrowed Books",
    totalBooks: "Total Books",
    totalCopies: "Total Copies",
    totalCats: "Total Categories",
    totalAuthors: "Total Authors",
    totalPubs: "Total Publishers",
    noFound: "No books found",
    noFoundSub: "Try changing your search query or reset filters.",
    bookNo: "No.",
    pagesShort: "p.",
    tableNo: "No.",
    tableTitle: "Book Title",
    tableAuthor: "Author / Editor",
    tablePub: "Publisher",
    tablePages: "Pages",
    tableCopies: "Copies",
    tableFav: "Fav",
    addFav: "Add to Favorites",
    removeFav: "Remove from Favorites",
    copyInfo: "Copy Info",
    updateInfo: "Update Info",
    googleSearch: "Search on Google",
    deleteBook: "Delete Book",
    close: "Close",
    cancel: "Cancel",
    lblAuthorModal: "Author / Editor:",
    lblPubModal: "Publisher:",
    lblPagesModal: "Pages:",
    lblCopiesModal: "Library Copies:",
    lblCatModal: "Category:",
    contactTitle: "Contact Us",
    contactSub: "Send us your feedback or queries",
    lblName: "Your Name *",
    namePlaceholder: "Your Full Name",
    lblPhone: "Mobile Number *",
    phonePlaceholder: "01XXXXXXXXX",
    lblMsg: "Your Message / Feedback *",
    msgPlaceholder: "Write your message here...",
    sendMsgBtn: "Send Message",
    footerCopy: "&copy; 2026 Sotter Sondhane Library - All rights reserved.",
    lblAddr: "Address:",
    valAddr: "Agkoyra, Ullapara, Sirajganj",
    lblFounder: "Founder:",
    valFounder: "Md. Shakil Hossain",
    lblEst: "Established:",
    valEst: "01/01/2021"
  }
};

function transliterateBengaliToEnglish(str) {
  if (!str) return "";
  let s = str.replace(/\(রহ\.?\)/g, "").replace(/\(রহিমাহুল্লাহ\)/g, "").trim();
  
  const map = {
    "ইমাম": "Imam", "আবু": "Abu", "যাকারিয়া": "Zakariya", "যাকারিয়া": "Zakariya",
    "মুআবিয়া": "Muawiyah", "মুআবিয়া": "Muawiyah", "ইসমাইল": "Ismail", "কামদার": "Kamdar",
    "জাকারিয়া": "Zakaria", "জাকারিয়া": "Zakaria", "মাসুদ": "Masud",
    "যায়েদ": "Zayed", "জায়েদ": "Zayed", "নূর": "Nur", "নুর": "Nur",
    "জাকির": "Zakir", "নায়েক": "Naik", "নায়েক": "Naik", "ডা.": "Dr.", "ড.": "Dr.", "ডঃ": "Dr.",
    "প্রফেসর": "Prof.", "প্রফেশর": "Prof.", "মো.": "Md.", "মো:": "Md.", "মোঃ": "Md.", "মো": "Md.",
    "নুরুল": "Nurul", "ইসলাম": "Islam", "নয়ন": "Nayon", "নয়ন": "Nayon",
    "মুক্তি": "Mufti", "মুফতি": "Mufti", "মুফতী": "Mufti", "যুবায়ের": "Zubayer", "জুবায়ের": "Zubayer",
    "আহমদ": "Ahmed", "আহমেদ": "Ahmed",
    "মুফতিয়ে": "Mufti-e-Azam", "আজম": "", "ফয়জুল্লাহ": "Faydullah", "ফয়জুল্লাহ": "Faydullah",
    "মোহাইমিন": "Mohaimin", "পাটোয়ারী": "Patwary", "পাটোয়ারী": "Patwary",
    "আব্দুল্লাহেল": "Abdullahel", "বাকী": "Baki",
    "ইয়ামন": "Yaman", "বিন": "Bin", "আশরাফ": "Ashraf",
    "কায়্যিম": "Qayyim", "আল-জাওযিয়্যা": "Jawziyyah", "আল-জাওযিয়্যা": "Jawziyyah",
    "গাযযালী": "Al-Ghazali", "গাযালী": "Al-Ghazali", "হুজুর": "Hujur", "হয়ে": "Hoye",
    "টিম": "Team", "সাইয়েদ": "Sayyid", "সাইয়্যিদ": "Sayyid", "কুতুব": "Qutb",
    "শহীদ": "Shaheed", "সুলাইমান": "Sulaiman", "নদভি": "Nadwi", "নদভী": "Nadwi",
    "হাফেয": "Hafiz", "মাওলানা": "Maulana", "মুফতী": "Mufti", "মুফতি": "Mufti",
    "মুহাম্মাদ": "Muhammad", "মোহাম্মদ": "Muhammad", "খাইরুল্লাহ": "Khairullah",
    "শায়খ": "Shaikh", "শায়খ": "Shaikh", "শাইখ": "Shaikh", "আহমাদুল্লাহ": "Ahmadullah",
    "ওয়ায়েল": "Wael", "ওয়ায়েল": "Wael", "ইব্রাহিম": "Ibrahim", "ইব্ৰাহিম": "Ibrahim"
  };

  let words = s.split(/\s+/).map(w => {
    const cleanW = w.replace(/[(),]/g, "");
    if (map[cleanW] !== undefined) return map[cleanW];
    return w;
  }).filter(Boolean);

  let res = words.join(" ");

  if (/[\u0980-\u09FF]/.test(res)) {
    res = res
      .replace(/ক/g, "k").replace(/খ/g, "kh").replace(/গ/g, "g").replace(/ঘ/g, "gh")
      .replace(/চ/g, "ch").replace(/ছ/g, "chh").replace(/জ/g, "j").replace(/ঝ/g, "jh")
      .replace(/ট/g, "t").replace(/ঠ/g, "th").replace(/ড/g, "d").replace(/ঢ/g, "dh")
      .replace(/ত/g, "t").replace(/থ/g, "th").replace(/দ/g, "d").replace(/ধ/g, "dh")
      .replace(/ন/g, "n").replace(/প/g, "p").replace(/ফ/g, "f").replace(/ব/g, "b")
      .replace(/ভ/g, "v").replace(/ম/g, "m").replace(/য/g, "z").replace(/র/g, "r")
      .replace(/ল/g, "l").replace(/শ/g, "sh").replace(/ষ/g, "sh").replace(/স/g, "s")
      .replace(/হ/g, "h").replace(/ড়/g, "r").replace(/ঢ়/g, "rh").replace(/য়/g, "y")
      .replace(/য়/g, "y").replace(/অ/g, "a").replace(/আ/g, "a").replace(/ই/g, "i")
      .replace(/ঈ/g, "i").replace(/উ/g, "u").replace(/ঊ/g, "u").replace(/এ/g, "e")
      .replace(/ঐ/g, "oi").replace(/ও/g, "o").replace(/ঔ/g, "ou")
      .replace(/া/g, "a").replace(/ি/g, "i").replace(/ী/g, "i").replace(/ু/g, "u")
      .replace(/ূ/g, "u").replace(/ে/g, "e").replace(/ৈ/g, "oi").replace(/ো/g, "o")
      .replace(/ৌ/g, "ou").replace(/্/g, "").replace(/ং/g, "ng").replace(/ঃ/g, "")
      .replace(/ঁ/g, "");
  }
  return res;
}

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, function(c) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[c];
  }).trim();
}

function safeJSONParse(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error("Error reading localStorage key:", key, e);
    return fallback;
  }
}

function getDisplayAuthor(authorStr) {
  if (!authorStr) return "";
  if (currentLang !== "en") return authorStr;
  const rawA = cleanName(authorStr);
  if (AUTHOR_EN_MAP[rawA]) return AUTHOR_EN_MAP[rawA];
  
  const normalizedA = rawA
    .replace(/[\(\)\,\s]+/g, "")
    .replace(/^প্রফেসর/g, "")
    .replace(/^প্রফেশর/g, "")
    .replace(/^ডা\./, "")
    .replace(/^ড\./, "")
    .replace(/^ডঃ/, "")
    .replace(/^মো\./, "")
    .replace(/^মো\:/, "")
    .replace(/^মোঃ/, "")
    .replace(/রহ/g, "")
    .replace(/রহিমাহুল্লাহ/g, "")
    .replace(/হুজ্জাতুলইসলাম/g, "")
    .replace(/আল-/g, "")
    .replace(/য/g, "জ")
    .replace(/য়/g, "য়")
    .replace(/ব্ৰ/g, "ব্র")
    .replace(/মুক্তি/g, "মুফতি")
    .replace(/শায়খ/g, "শায়খ")
    .replace(/শাইখ/g, "শায়খ")
    .replace(/আহমাদুল্লাহ/g, "আহমাদুল্লাহ")
    .replace(/আহমাদুল্ল্যাহ/g, "আহমাদুল্লাহ")
    .replace(/মুআবিয়া/g, "মুআবিয়া")
    .replace(/কাই্যিম/g, "কাইয়্যিম")
    .replace(/কায়্যিম/g, "কাইয়্যিম")
    .replace(/কায়্যিম/g, "কাইয়্যিম")
    .replace(/সাইয়েদ/g, "সাইয়্যেদ")
    .replace(/নদভি/g, "নদভী")
    .replace(/পাটোয়ারী/g, "পাটোয়ারী")
    .replace(/নায়েক/g, "নায়েক");

  for (const [key, val] of Object.entries(AUTHOR_EN_MAP)) {
    const normKey = cleanName(key)
      .replace(/[\(\)\,\s]+/g, "")
      .replace(/^প্রফেসর/g, "")
      .replace(/^প্রফেশর/g, "")
      .replace(/^ডা\./, "")
      .replace(/^ড\./, "")
      .replace(/^ডঃ/, "")
      .replace(/^মো\./, "")
      .replace(/^মো\:/, "")
      .replace(/^মোঃ/, "")
      .replace(/রহ/g, "")
      .replace(/রহিমাহুল্লাহ/g, "")
      .replace(/হুজ্জাতুলইসলাম/g, "")
      .replace(/আল-/g, "")
      .replace(/য/g, "জ")
      .replace(/য়/g, "য়")
      .replace(/ব্ৰ/g, "ব্র")
      .replace(/মুক্তি/g, "মুফতি")
      .replace(/শায়খ/g, "শায়খ")
      .replace(/শাইখ/g, "শায়খ")
      .replace(/আহমাদুল্লাহ/g, "আহমাদুল্লাহ")
      .replace(/আহমাদুল্ল্যাহ/g, "আহমাদুল্লাহ")
      .replace(/মুআবিয়া/g, "মুআবিয়া")
      .replace(/কাই্যিম/g, "কাইয়্যিম")
      .replace(/কায়্যিম/g, "কাইয়্যিম")
      .replace(/কায়্যিম/g, "কাইয়্যিম")
      .replace(/সাইয়েদ/g, "সাইয়্যেদ")
      .replace(/নদভি/g, "নদভী")
      .replace(/পাটোয়ারী/g, "পাটোয়ারী")
      .replace(/নায়েক/g, "নায়েক");

    if (normKey === normalizedA) return val;
  }

  const keyA = rawA.toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
  const foundKey = Object.keys(AUTHOR_EN_MAP).find(k => k.replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "") === keyA);
  if (foundKey) return AUTHOR_EN_MAP[foundKey];
  
  return transliterateBengaliToEnglish(authorStr);
}

let BOOKS = safeJSONParse("ssl_books_data", INITIAL_BOOKS);
let CATS = safeJSONParse("ssl_categories", currentLang === "en" ? INITIAL_CATS_EN : INITIAL_CATS_BN);
let BORROWERS = safeJSONParse("ssl_borrowers", []);
let USER_MESSAGES = safeJSONParse("ssl_user_messages", []);

const bn = n => {
  if (n === null || n === undefined) return "—";
  if (currentLang === "en") return String(n);
  return String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
};

const esc = s => String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const collator = new Intl.Collator(currentLang === "en" ? "en" : "bn");

let favorites = safeJSONParse("ssl_favorites", []);
let localCovers = safeJSONParse("ssl_covers", {});
let isAdmin = sessionStorage.getItem("ssl_admin") === "true";
let getAdminPass = () => localStorage.getItem("ssl_admin_pass") || "#Ssl@2026";

const state = {
  q: "",
  cat: -1,
  author: "",
  pub: "",
  sort: "no",
  view: "grid",
  onlyFavs: false
};

let curNo = null;
const $ = id => document.getElementById(id);

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  trackVisitor();
  applyLanguageUI();
  populateDropdowns();
  populateCategoryDropdown();
  renderStats();
  bindEvents();
  initStorageEventListener(); // Added cross-tab synchronization listener
  initRemoteListener();       // Added database stream hook
  updateAdminUI();
  render();
  updateFavBadge();
  initScrollToTop();
});

// Real-time synchronization across open browser windows & tabs
function initStorageEventListener() {
  window.addEventListener('storage', (e) => {
    if (['ssl_books_data', 'ssl_categories', 'ssl_covers', 'ssl_user_messages', 'ssl_borrowers'].includes(e.key)) {
      BOOKS = safeJSONParse("ssl_books_data", INITIAL_BOOKS);
      CATS = safeJSONParse("ssl_categories", currentLang === "en" ? INITIAL_CATS_EN : INITIAL_CATS_BN);
      localCovers = safeJSONParse("ssl_covers", {});
      BORROWERS = safeJSONParse("ssl_borrowers", []);
      USER_MESSAGES = safeJSONParse("ssl_user_messages", []);

      populateDropdowns();
      populateCategoryDropdown();
      renderStats();
      updateAdminUI();
      render();
    }
  });
}

// Remote cloud database listener placeholder (Firebase / Supabase)
function initRemoteListener() {
  if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
    firebase.database().ref('books').on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        BOOKS = Object.values(data);
        populateDropdowns();
        renderStats();
        render();
      }
    });
  }
}

// Remote cloud sync trigger placeholder
function syncDataToRemote(path, data) {
  if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
    firebase.database().ref(path).set(data);
  }
}

function initScrollToTop() {
  const scrollBtn = $("scrollToTopBtn");
  if (!scrollBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("opacity-0", "pointer-events-none");
      scrollBtn.classList.add("opacity-100");
    } else {
      scrollBtn.classList.remove("opacity-100");
      scrollBtn.classList.add("opacity-0", "pointer-events-none");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function applyLanguageUI() {
  document.documentElement.setAttribute("lang", currentLang);
  document.title = currentLang === "en" ? "Sotter Sondhane Library" : "সত্যের সন্ধানে লাইব্রেরি | Sotter Sondhane Library";

  const langText = $("langText");
  if (langText) langText.textContent = currentLang === "bn" ? "En" : "বাং";

  const t = I18N[currentLang];

  const mainAppTitle = $("mainAppTitle");
  if (mainAppTitle) {
    mainAppTitle.textContent = t.appTitle;
    mainAppTitle.className = "font-display text-3xl sm:text-5xl font-extrabold text-[var(--fg)] leading-[1.2] tracking-tight";
  }

  const mainAppSub = $("mainAppSub");
  if (mainAppSub) mainAppSub.textContent = t.appSub;

  const welcomeBadge = document.querySelector('span.inline-flex.items-center.gap-1\\.5');
  if (welcomeBadge) {
    welcomeBadge.innerHTML = `<i class="fa-solid fa-star text-[10px] text-brand-700 dark:text-brand-500"></i> ${t.welcomeBadge}`;
  }

  const adminDashBtn = $("adminDashboardBtn");
  if (adminDashBtn) { const span = adminDashBtn.querySelector("span"); if(span) span.textContent = t.dashTitle; }
  
  const addBookBtn = $("addBookBtn");
  if (addBookBtn) { const span = addBookBtn.querySelector("span"); if(span) span.textContent = t.addBook; }
  
  const borrowManageBtn = $("borrowerManageBtn");
  if (borrowManageBtn) { const span = borrowManageBtn.querySelector("span"); if(span) span.textContent = t.borrowManage; }
  
  const adminMessagesBtn = $("adminMessagesBtn");
  if (adminMessagesBtn) { 
    const span = adminMessagesBtn.querySelector("span"); 
    if(span && span.childNodes.length > 0) {
      span.childNodes[0].nodeValue = t.userMessages;
    }
  }
  
  const changePassBtn = $("changePassBtn");
  if (changePassBtn) { const span = changePassBtn.querySelector("span"); if(span) span.textContent = t.changePass; }
  
  const logoutBtn = $("logoutBtn");
  if (logoutBtn) { const span = logoutBtn.querySelector("span"); if(span) span.textContent = t.logout; }

  const verseText = $("verseText");
  if (verseText) verseText.textContent = t.verseText;
  const verseRef = $("verseRef");
  if (verseRef) verseRef.textContent = t.verseRef;

  const qInput = $("q");
  if (qInput) qInput.placeholder = t.searchPlaceholder;

  const favText = $("favText");
  if (favText) favText.textContent = t.favText;

  const sortSelect = $("sort");
  if (sortSelect) {
    const currentSortVal = sortSelect.value;
    sortSelect.innerHTML = `
      <option value="no">${t.sortNo}</option>
      <option value="title">${t.sortTitle}</option>
      <option value="author">${t.sortAuthor}</option>
      <option value="pages">${t.sortPages}</option>
    `;
    sortSelect.value = currentSortVal;
  }

  if ($("txtCover")) $("txtCover").textContent = t.gridCover;
  if ($("txtList")) $("txtList").textContent = t.listTable;
  if ($("txtResetFilter")) $("txtResetFilter").textContent = t.resetFilter;

  if ($("lblModalAuthor")) $("lblModalAuthor").textContent = t.lblAuthorModal;
  if ($("lblModalPub")) $("lblModalPub").textContent = t.lblPubModal;
  if ($("lblModalPages")) $("lblModalPages").textContent = t.lblPagesModal;
  if ($("lblModalCopies")) $("lblModalCopies").textContent = t.lblCopiesModal;
  if ($("lblModalCat")) $("lblModalCat").textContent = t.lblCatModal;
  if ($("txtAddFav")) $("txtAddFav").textContent = t.addFav;
  if ($("txtUpdateInfo")) $("txtUpdateInfo").textContent = t.updateInfo;
  if ($("txtDeleteBook")) $("txtDeleteBook").textContent = t.deleteBook;
  if ($("dGoogleSearchText")) $("dGoogleSearchText").textContent = t.googleSearch;
  if ($("txtCloseModal")) $("txtCloseModal").textContent = t.close;

  if ($("contactTitle")) $("contactTitle").textContent = t.contactTitle;
  if ($("contactSub")) $("contactSub").textContent = t.contactSub;
  if ($("lblContactName")) $("lblContactName").textContent = t.lblName;
  if ($("contactName")) $("contactName").placeholder = t.namePlaceholder;
  if ($("lblContactPhone")) $("lblContactPhone").textContent = t.lblPhone;
  if ($("lblContactMsg")) $("lblContactMsg").textContent = t.lblMsg;
  if ($("contactMsg")) $("contactMsg").placeholder = t.msgPlaceholder;
  if ($("contactSubmitBtn")) $("contactSubmitBtn").textContent = t.sendMsgBtn;

  if ($("footerCopyright")) $("footerCopyright").innerHTML = t.footerCopy;
  if ($("lblAddr")) $("lblAddr").textContent = t.lblAddr;
  if ($("valAddr")) $("valAddr").textContent = t.valAddr;
  if ($("lblFounder")) $("lblFounder").textContent = t.lblFounder;
  if ($("valFounder")) $("valFounder").textContent = t.valFounder;
  if ($("lblEst")) $("lblEst").textContent = t.lblEst;
  if ($("valEst")) $("valEst").textContent = t.valEst;
}

function initTheme() {
  const savedTheme = localStorage.getItem("ssl_theme") || "system";
  const isDark = savedTheme === "dark" || (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const icon = $("themeIcon");
  if (icon) {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

function trackVisitor() {
  let totalVisitors = parseInt(localStorage.getItem("ssl_total_visitors") || "1240", 10);
  if (!sessionStorage.getItem("ssl_visited")) {
    sessionStorage.setItem("ssl_visited", "true");
    totalVisitors += 1;
    localStorage.setItem("ssl_total_visitors", totalVisitors);
  }
  window.sslVisitorCount = totalVisitors;
}

function cleanName(str) {
  if (!str) return "";
  let cleaned = str.replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/\s+/g, " ").trim();
  cleaned = cleaned
    .replace(/যাকারিয়া/g, "যাকারিয়া")
    .replace(/ইয়াহয়া/g, "ইয়াহয়া")
    .replace(/মুআবিয়া/g, "মুআবিয়া")
    .replace(/মুআবিয়া/g, "মুআবিয়া")
    .normalize("NFC");
  return cleaned;
}

function getPubEn(pubStr) {
  if (!pubStr) return "";
  const cleanP = cleanName(pubStr).replace(/[۔.,]+$/, "");
  if (PUB_EN_MAP[cleanP]) return PUB_EN_MAP[cleanP];
  const keyP = cleanP.toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
  const foundKey = Object.keys(PUB_EN_MAP).find(k => k.replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "") === keyP);
  return foundKey ? PUB_EN_MAP[foundKey] : pubStr;
}

function populateDropdowns() {
  const t = I18N[currentLang];
  const rawAuthors = [...new Set(BOOKS.map(b => cleanName(b.author)).filter(Boolean))];
  const authorMap = {};
  rawAuthors.forEach(a => {
    const canonicalKey = cleanName(a)
      .toLowerCase()
      .replace(/[\(\)\,\.\:\-\_۔]/g, "")
      .replace(/^প্রফেসর/g, "").replace(/^প্রফেশর/g, "").replace(/^ডা\./, "").replace(/^ড\./, "").replace(/^ডঃ/, "").replace(/^মো\./, "").replace(/^মো\:/, "").replace(/^মোঃ/, "")
      .replace(/রহ/g, "").replace(/রহিমাহুল্লাহ/g, "").replace(/আল-/g, "")
      .replace(/য/g, "জ").replace(/য়/g, "য়").replace(/ব্ৰ/g, "ব্র")
      .replace(/মুক্তি/g, "মুফতি").replace(/শায়খ/g, "শায়খ").replace(/শাইখ/g, "শায়খ")
      .replace(/\s+/g, "");
    if (!authorMap[canonicalKey]) {
      authorMap[canonicalKey] = cleanName(a);
    }
  });
  const authors = Object.values(authorMap).sort(collator.compare);

  const rawPubs = [...new Set(BOOKS.map(b => cleanName(b.pub).replace(/[۔.,]+$/, "")).filter(Boolean))];
  const pubMap = {};
  rawPubs.forEach(p => {
    let normP = p.replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/\s+/g, " ").trim();
    const canonicalKey = normP.toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
    if (!pubMap[canonicalKey]) {
      pubMap[canonicalKey] = normP;
    }
  });
  const pubs = Object.values(pubMap).sort(collator.compare);

  const authorSelect = $("author");
  if (authorSelect) {
    const curSelectedAuthor = state.author;
    authorSelect.innerHTML = `<option value="">${t.allAuthors}</option>` + authors.map(a => {
      const rawA = cleanName(a);
      let label = a;
      if (currentLang === "en") {
        label = getDisplayAuthor(a);
      }
      return `<option value="${esc(rawA)}"${rawA === curSelectedAuthor ? ' selected' : ''}>${esc(label)}</option>`;
    }).join("");
  }
  
  const pubSelect = $("pub");
  if (pubSelect) {
    const curSelectedPub = state.pub;
    pubSelect.innerHTML = `<option value="">${t.allPubs}</option>` + pubs.map(p => {
      const rawP = cleanName(p);
      let label = p;
      if (currentLang === "en") {
        label = getPubEn(p);
      }
      return `<option value="${esc(rawP)}"${rawP === curSelectedPub ? ' selected' : ''}>${esc(label)}</option>`;
    }).join("");
  }
}

function populateCategoryDropdown() {
  const catSelect = $("newCat");
  if (!catSelect) return;
  catSelect.innerHTML = CATS.map((c, i) => `<option value="${i}">${c}</option>`).join("");
}

function addNewCategory(name) {
  if (!name || !name.trim()) return null;
  const trimmed = name.trim();
  if (CATS.includes(trimmed)) {
    showToast(currentLang === "en" ? "Category already exists!" : "এই ক্যাটাগরি ইতিমধ্যে রয়েছে!");
    return CATS.indexOf(trimmed);
  }
  CATS.push(trimmed);
  localStorage.setItem("ssl_categories", JSON.stringify(CATS));
  syncDataToRemote("categories", CATS);
  populateCategoryDropdown();
  renderChips();
  render();
  showToast(currentLang === "en" ? "Category added successfully!" : "নতুন ক্যাটাগরি সফলভাবে যোগ করা হয়েছে!");
  return CATS.length - 1;
}

function renderStats() {
  const t = I18N[currentLang];
  if ($("sTitles")) $("sTitles").textContent = bn(BOOKS.length);
  const totalCopies = BOOKS.reduce((s, b) => s + (b.copies || 1), 0);
  if ($("sCopies")) $("sCopies").textContent = bn(totalCopies);
  
  const authors = new Set(BOOKS.map(b => b.author).filter(Boolean));
  if ($("sAuthors")) $("sAuthors").textContent = bn(authors.size);
  
  const pubs = new Set(BOOKS.map(b => b.pub).filter(Boolean));
  if ($("sPubs")) $("sPubs").textContent = bn(pubs.size);

  if ($("lblBooks")) $("lblBooks").textContent = t.booksCount;
  if ($("lblCopies")) $("lblCopies").textContent = t.copiesCount;
  if ($("lblAuthors")) $("lblAuthors").textContent = t.authorsCount;
  if ($("lblPubs")) $("lblPubs").textContent = t.pubsCount;
}

function renderChips() {
  const t = I18N[currentLang];
  const counts = CATS.map((_, i) => BOOKS.filter(b => b.cat === i).length);
  const allCount = BOOKS.length;
  const chipsContainer = $("chips");
  if (!chipsContainer) return;

  let html = `
    <button class="chip px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${state.cat === -1 && !state.onlyFavs ? 'bg-gradient-to-r from-brand-700 to-teal-700 text-white border-transparent shadow-sm' : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-brand-500'}" type="button" data-c="-1">
      ${t.allBooks} <span class="ml-1 opacity-80 font-sans">(${bn(allCount)})</span>
    </button>
  `;

  html += CATS.map((cName, i) => {
    const active = state.cat === i && !state.onlyFavs;
    return `
      <button class="chip px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${active ? 'bg-gradient-to-r from-brand-700 to-teal-700 text-white border-transparent shadow-sm' : 'bg-[var(--surface)] text-[var(--fg)] border-[var(--line)] hover:border-brand-500'}" type="button" data-c="${i}">
        ${esc(cName)} <span class="ml-1 opacity-80 font-sans">(${bn(counts[i])})</span>
      </button>
    `;
  }).join("");

  chipsContainer.innerHTML = html;
}

function filteredBooks() {
  const normStr = s => (s || "")
    .toLowerCase()
    .replace(/[\(\)\,\.\:\-\_۔]/g, "")
    .replace(/^প্রফেসর/g, "").replace(/^প্রফেশর/g, "").replace(/^ডা\./, "").replace(/^ড\./, "").replace(/^ডঃ/, "").replace(/^মো\./, "").replace(/^মো\:/, "").replace(/^মোঃ/, "")
    .replace(/রহ/g, "").replace(/রহিমাহুল্লাহ/g, "").replace(/আল-/g, "")
    .replace(/য/g, "জ").replace(/য়/g, "য়").replace(/ব্ৰ/g, "ব্র")
    .replace(/মুক্তি/g, "মুফতি").replace(/শায়খ/g, "শায়খ").replace(/শাইখ/g, "শায়খ")
    .replace(/\s+/g, "");

  let r = BOOKS.filter(b => {
    if (state.onlyFavs && !favorites.includes(b.no)) return false;
    if (state.cat !== -1 && b.cat !== state.cat) return false;
    
    if (state.author) {
      const selAuthorRaw = cleanName(state.author);
      const selAuthorNorm = normStr(state.author);
      const selAuthorEn = normStr(getDisplayAuthor(state.author));
      
      const bookAuthorRaw = cleanName(b.author);
      const bookAuthorNorm = normStr(b.author);
      const bookAuthorEn = getDisplayAuthor(b.author);
      const bookAuthorEnNorm = normStr(bookAuthorEn);

      const matchExact = bookAuthorRaw === selAuthorRaw;
      const matchNorm = (bookAuthorNorm && selAuthorNorm && bookAuthorNorm === selAuthorNorm) || 
                        (bookAuthorEnNorm && selAuthorNorm && bookAuthorEnNorm === selAuthorNorm) ||
                        (bookAuthorEnNorm && selAuthorEn && bookAuthorEnNorm === selAuthorEn) ||
                        (bookAuthorNorm && selAuthorEn && bookAuthorNorm === selAuthorEn);
      const matchContains = (bookAuthorNorm && selAuthorNorm && (bookAuthorNorm.includes(selAuthorNorm) || selAuthorNorm.includes(bookAuthorNorm))) ||
                            (bookAuthorEnNorm && selAuthorNorm && (bookAuthorEnNorm.includes(selAuthorNorm) || selAuthorNorm.includes(bookAuthorEnNorm))) ||
                            (bookAuthorEnNorm && selAuthorEn && (bookAuthorEnNorm.includes(selAuthorEn) || selAuthorEn.includes(bookAuthorEnNorm)));

      if (!matchExact && !matchNorm && !matchContains) return false;
    }

    if (state.pub) {
      const selPubNorm = normStr(state.pub);
      const bookPubNorm = normStr(b.pub);
      const bookPubEnNorm = normStr(getPubEn(b.pub));

      const matchExact = cleanName(b.pub).replace(/[۔.,]+$/, "") === state.pub;
      const matchNorm = bookPubNorm === selPubNorm || bookPubEnNorm === selPubNorm;
      const matchContains = bookPubNorm.includes(selPubNorm) || selPubNorm.includes(bookPubNorm) || bookPubEnNorm.includes(selPubNorm);

      if (!matchExact && !matchNorm && !matchContains) return false;
    }

    if (state.q) {
      const q = state.q.toLowerCase().trim();
      const qNorm = normStr(q);

      const matchTitle = (b.title || "").toLowerCase().includes(q);
      const matchTitleEn = (b.titleEn || "").toLowerCase().includes(q);
      
      const authorBn = (b.author || "").toLowerCase();
      const authorEn = getDisplayAuthor(b.author).toLowerCase();
      const matchAuthor = authorBn.includes(q) || authorEn.includes(q) || normStr(b.author).includes(qNorm) || normStr(authorEn).includes(qNorm);

      const pubBn = (b.pub || "").toLowerCase();
      const pubEn = getPubEn(b.pub).toLowerCase();
      const matchPub = pubBn.includes(q) || pubEn.includes(q) || normStr(b.pub).includes(qNorm) || normStr(pubEn).includes(qNorm);

      const matchNo = String(b.no).includes(q);
      if (!matchTitle && !matchTitleEn && !matchAuthor && !matchPub && !matchNo) return false;
    }
    return true;
  });

  r.sort((a, b) => {
    if (state.sort === "title") return collator.compare(a.title, b.title);
    if (state.sort === "author") return collator.compare(a.author || "", b.author || "");
    if (state.sort === "pages") return (b.pages || 0) - (a.pages || 0);
    return a.no - b.no;
  });

  return r;
}

function render() {
  const t = I18N[currentLang];
  const r = filteredBooks();
  const out = $("out");
  if (!out) return;

  renderChips();
  renderStats();

  if ($("count")) $("count").textContent = currentLang === "en" ? `Showing ${bn(r.length)} books` : `মোট ${bn(r.length)} টি বই পাওয়া গেছে`;
  $("reset")?.classList.toggle("hidden", state.q === "" && state.cat === -1 && state.author === "" && state.pub === "" && !state.onlyFavs);

  if (r.length === 0) {
    out.innerHTML = `
      <div class="text-center py-16 space-y-3 glass-panel rounded-2xl">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-[var(--surface-card)] flex items-center justify-center text-2xl text-[var(--muted)]">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-[var(--fg)]">${t.noFound}</h3>
        <p class="text-xs text-[var(--muted)] max-w-sm mx-auto">${t.noFoundSub}</p>
      </div>
    `;
    return;
  }

  const getDisplayPub = (pubStr) => {
    if (!pubStr) return "";
    if (currentLang !== "en") return pubStr;
    const rawP = cleanName(pubStr).replace(/[۔.,]+$/, "");
    if (PUB_EN_MAP[rawP]) return PUB_EN_MAP[rawP];
    const keyP = rawP.toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
    const foundKey = Object.keys(PUB_EN_MAP).find(k => k.replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "") === keyP);
    if (foundKey) return PUB_EN_MAP[foundKey];
    return pubStr;
  };

  if (state.view === "grid") {
    out.innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        ${r.map(b => {
          const isFav = favorites.includes(b.no);
          const hasCover = localCovers[b.no];
          const catName = CATS[b.cat] || "";
          const catBg = getCatBgClass(b.cat);
          const displayTitle = (currentLang === "en" && b.titleEn) ? b.titleEn : b.title;
          const displayAuthor = getDisplayAuthor(b.author);

          return `
            <div class="book-card group flex flex-col glass-panel rounded-xl overflow-hidden cursor-pointer" data-no="${b.no}">
              <div class="book-card-cover ${hasCover ? '' : catBg} flex flex-col justify-between p-4 text-white relative">
                ${hasCover ? `<img src="${hasCover}" alt="${esc(displayTitle)} - ${esc(displayAuthor || 'Islamic Book')}" class="absolute inset-0 w-full h-full object-cover">` : ''}
                <div class="flex justify-between items-start z-10">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-black/40 backdrop-blur-md">${t.bookNo} ${bn(b.no)}</span>
                  <button type="button" class="fav-icon-btn w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-xs ${isFav ? 'text-rose-500' : 'text-white hover:text-rose-400'} transition-colors" data-fav-no="${b.no}" title="${t.addFav}">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                  </button>
                </div>
                ${hasCover ? '' : `
                  <div class="z-10 my-auto">
                    <h3 class="font-display font-bold text-sm sm:text-base leading-snug line-clamp-3">${esc(displayTitle)}</h3>
                  </div>
                `}
                <div class="z-10 pt-2 border-t border-white/20 mt-2 flex justify-between items-center text-[11px] opacity-90">
                  <span class="truncate max-w-[100px]">${catName}</span>
                  <span>${b.pages ? bn(b.pages) + ' ' + t.pagesShort : ''}</span>
                </div>
              </div>
              <div class="p-3.5 flex flex-col justify-between flex-grow space-y-1">
                <div>
                  <h4 class="text-xs font-bold text-[var(--fg)] truncate" title="${esc(displayTitle)}">${esc(displayTitle)}</h4>
                  <p class="text-[11px] text-[var(--muted)] truncate" title="${esc(displayAuthor)}">${displayAuthor ? esc(displayAuthor) : `<span class="italic">${t.noAuthor}</span>`}</p>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else {
    out.innerHTML = `
      <div class="glass-panel rounded-xl overflow-x-auto shadow-sm">
        <table class="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr class="border-b border-[var(--line)] bg-[var(--surface-card)] text-xs font-bold text-[var(--muted)]">
              <th class="p-3 w-16 text-center">${t.tableNo}</th>
              <th class="p-3">${t.tableTitle}</th>
              <th class="p-3">${t.tableAuthor}</th>
              <th class="p-3">${t.tablePub}</th>
              <th class="p-3 text-center">${t.tablePages}</th>
              <th class="p-3 text-center">${t.tableCopies}</th>
              <th class="p-3 text-center w-16">${t.tableFav}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--line)] text-xs">
            ${r.map(b => {
              const isFav = favorites.includes(b.no);
              const displayTitle = (currentLang === "en" && b.titleEn) ? b.titleEn : b.title;
              const displayAuthor = getDisplayAuthor(b.author);
              const displayPub = getDisplayPub(b.pub);

              return `
                <tr class="hover:bg-brand-500/5 cursor-pointer transition-colors" data-no="${b.no}">
                  <td class="p-3 text-center font-mono font-bold">${bn(b.no)}</td>
                  <td class="p-3 font-semibold text-[var(--fg)]">${esc(displayTitle)}</td>
                  <td class="p-3 text-[var(--muted)]">${displayAuthor ? esc(displayAuthor) : '—'}</td>
                  <td class="p-3 text-[var(--muted)]">${displayPub ? esc(displayPub) : '—'}</td>
                  <td class="p-3 text-center font-mono">${b.pages ? bn(b.pages) : '—'}</td>
                  <td class="p-3 text-center font-semibold text-emerald-600 dark:text-emerald-400 font-sans">${bn(b.copies)}</td>
                  <td class="p-3 text-center">
                    <button type="button" class="fav-icon-btn text-sm ${isFav ? 'text-rose-500 font-bold' : 'text-[var(--muted)] hover:text-rose-500'}" data-fav-no="${b.no}">
                      <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
}

function getCatBgClass(catIdx) {
  const classes = ['cat-bg-0', 'cat-bg-1', 'cat-bg-2', 'cat-bg-3', 'cat-bg-4', 'cat-bg-5', 'cat-bg-6'];
  return classes[catIdx % classes.length];
}

function openBook(no) {
  const t = I18N[currentLang];
  const b = BOOKS.find(x => x.no === no);
  if (!b) return;
  curNo = no;

  const dHead = $("dHead");
  if (dHead) dHead.className = `p-6 text-white relative flex justify-between items-start transition-colors duration-300 ${getCatBgClass(b.cat)}`;
  
  const dNo = $("dNo");
  if (dNo) dNo.textContent = `${t.bookNo} ${bn(b.no)} · ${CATS[b.cat] || ''}`;
  
  const displayTitle = (currentLang === "en" && b.titleEn) ? b.titleEn : b.title;
  const rawAuthor = cleanName(b.author);
  const displayAuthor = (currentLang === "en" && rawAuthor && AUTHOR_EN_MAP[rawAuthor]) ? AUTHOR_EN_MAP[rawAuthor] : (currentLang === "en" ? (() => {
    const normalizedA = rawAuthor.replace(/য়/g, "য়").replace(/কাইয়্যিম/g, "কাইয়্যিম").replace(/কায়্যিম/g, "কাইয়্যিম");
    if (AUTHOR_EN_MAP[normalizedA]) return AUTHOR_EN_MAP[normalizedA];
    const keyA = rawAuthor.toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
    const foundKey = Object.keys(AUTHOR_EN_MAP).find(k => k.replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "") === keyA);
    return foundKey ? AUTHOR_EN_MAP[foundKey] : b.author;
  })() : b.author);

  const rawPub = cleanName(b.pub);
  const displayPub = (currentLang === "en" && rawPub && PUB_EN_MAP[rawPub]) ? PUB_EN_MAP[rawPub] : (currentLang === "en" ? (() => {
    const keyP = rawPub.replace(/[۔.,]+$/, "").toLowerCase().replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "");
    const foundKey = Object.keys(PUB_EN_MAP).find(k => k.replace(/[^ভাষাওঅ-হআ-ঔক-হ০-৯a-z]/g, "") === keyP);
    return foundKey ? PUB_EN_MAP[foundKey] : b.pub;
  })() : b.pub);

  const dTitle = $("dTitle");
  if (dTitle) dTitle.textContent = displayTitle;
  
  const dAuthor = $("dAuthor");
  if (dAuthor) dAuthor.textContent = displayAuthor || t.noPage;
  
  const dPub = $("dPub");
  if (dPub) dPub.textContent = displayPub || t.noPage;
  
  const dPages = $("dPages");
  if (dPages) dPages.textContent = b.pages ? bn(b.pages) : t.noPage;
  
  const dCopies = $("dCopies");
  if (dCopies) dCopies.textContent = bn(b.copies || 1);
  
  const dCat = $("dCat");
  if (dCat) dCat.textContent = CATS[b.cat] || t.noPage;

  if ($("dGoogleSearchText")) $("dGoogleSearchText").textContent = t.googleSearch;

  const dGoogleSearchBtn = $("dGoogleSearchBtn");
  if (dGoogleSearchBtn) {
    const queryStr = encodeURIComponent(`${b.title} ${b.author || ""}`);
    dGoogleSearchBtn.href = `https://www.google.com/search?q=${queryStr}`;
  }

  paintDialogCover();
  updateModalFavBtn(favorites.includes(no));

  const delBookBtn = $("dDeleteBookBtn");
  if (delBookBtn) delBookBtn.classList.toggle("hidden", !isAdmin);

  const editBookBtn = $("dEditBookBtn");
  if (editBookBtn) editBookBtn.classList.toggle("hidden", !isAdmin);

  const dlg = $("dlg");
  if (dlg) {
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
  }
}

function paintDialogCover() {
  const box = $("dPhoto");
  if (!box || curNo === null) return;
  const b = BOOKS.find(x => x.no === curNo);
  const hasCover = localCovers[curNo];

  if (hasCover) {
    box.className = "book-card-cover shadow-lg aspect-[3/4] rounded-md overflow-hidden bg-[var(--surface-card)] flex items-center justify-center border border-[var(--line)]";
    box.innerHTML = `<img src="${hasCover}" alt="${esc(b ? b.title : '')}" class="w-full h-full object-cover">`;
  } else {
    const catBg = b ? getCatBgClass(b.cat) : 'cat-bg-0';
    box.className = `book-card-cover shadow-lg aspect-[3/4] rounded-md overflow-hidden flex flex-col justify-between p-3 text-white ${catBg} border border-[var(--line)]`;
    box.innerHTML = `
      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-black/40 backdrop-blur-md self-start">${I18N[currentLang].bookNo} ${bn(curNo)}</span>
      <div class="font-display font-bold text-xs line-clamp-3 my-auto">${b ? esc(b.title) : ''}</div>
      <span class="text-[9px] opacity-80 text-center mt-2 pt-2 border-t border-white/20">${b ? (CATS[b.cat] || '') : ''}</span>
    `;
  }
}

function updateModalFavBtn(isFav) {
  const btn = $("dFavBtn");
  if (!btn) return;
  const t = I18N[currentLang];
  if (isFav) {
    btn.innerHTML = `<i class="fa-solid fa-heart text-rose-500"></i> <span class="text-rose-500">${t.removeFav}</span>`;
  } else {
    btn.innerHTML = `<i class="fa-regular fa-heart"></i> <span>${t.addFav}</span>`;
  }
}

function toggleFav(no) {
  const idx = favorites.indexOf(no);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast(currentLang === "en" ? "Removed from favorites" : "প্রিয় তালিকা থেকে সরানো হয়েছে");
  } else {
    favorites.push(no);
    showToast(currentLang === "en" ? "Added to favorites" : "প্রিয় তালিকায় যুক্ত করা হয়েছে");
  }
  localStorage.setItem("ssl_favorites", JSON.stringify(favorites));
  updateFavBadge();
  render();
  if (curNo === no) {
    updateModalFavBtn(favorites.includes(no));
  }
}

function updateFavBadge() {
  const badge = $("favBadge");
  if (badge) badge.textContent = bn(favorites.length);
}

function showToast(msg) {
  const toast = $("toast");
  const toastMsg = $("toastMsg");
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.remove("translate-y-20", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

function saveBooks() {
  localStorage.setItem("ssl_books_data", JSON.stringify(BOOKS));
  syncDataToRemote("books", BOOKS);
}

function updateAdminUI() {
  const t = I18N[currentLang];
  const adminText = $("adminText");
  const adminCaret = $("adminCaret");
  const adminIcon = $("adminIcon");
  if (!adminText) return;

  if (isAdmin) {
    adminText.textContent = t.adminPanel;
    if (adminCaret) adminCaret.classList.remove("hidden");
    if (adminIcon) adminIcon.className = "fa-solid fa-user-shield text-brand-700 dark:text-brand-500";
    
    const unreadCount = USER_MESSAGES.filter(m => !m.read).length;
    const badge = $("unreadMsgBadge");
    if (badge) {
      if (unreadCount > 0) {
        badge.textContent = bn(unreadCount);
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }
    }
  } else {
    adminText.textContent = t.adminText;
    if (adminCaret) adminCaret.classList.add("hidden");
    if (adminIcon) adminIcon.className = "fa-solid fa-user-lock text-brand-700 dark:text-brand-500";
    const badge = $("unreadMsgBadge");
    if (badge) badge.classList.add("hidden");
  }
}

function bindEvents() {
  const langBtn = $("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "bn" ? "en" : "bn";
      localStorage.setItem("ssl_lang", currentLang);
      CATS = currentLang === "en" ? INITIAL_CATS_EN : INITIAL_CATS_BN;
      applyLanguageUI();
      populateDropdowns();
      populateCategoryDropdown();
      renderStats();
      updateAdminUI();
      render();
      updateFavBadge();
      showToast(currentLang === "en" ? "Language switched to English" : "ভাষা বাংলায় পরিবর্তিত হয়েছে");
    });
  }

  $("q")?.addEventListener("input", e => {
    state.q = e.target.value;
    $("clearSearch")?.classList.toggle("hidden", !state.q);
    render();
  });

  $("clearSearch")?.addEventListener("click", () => {
    if ($("q")) $("q").value = "";
    state.q = "";
    $("clearSearch")?.classList.add("hidden");
    render();
  });

  $("author")?.addEventListener("change", e => {
    state.author = e.target.value;
    render();
  });

  $("pub")?.addEventListener("change", e => {
    state.pub = e.target.value;
    render();
  });

  $("sort")?.addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });

  $("chips")?.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.cat = parseInt(btn.dataset.c, 10);
    state.onlyFavs = false;
    render();
  });

  $("reset")?.addEventListener("click", () => {
    state.q = "";
    state.cat = -1;
    state.author = "";
    state.pub = "";
    state.onlyFavs = false;
    if ($("q")) $("q").value = "";
    if ($("author")) $("author").value = "";
    if ($("pub")) $("pub").value = "";
    $("clearSearch")?.classList.add("hidden");
    render();
  });

  $("vGrid")?.addEventListener("click", () => {
    state.view = "grid";
    if ($("vGrid")) {
      $("vGrid").className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-gradient-to-r from-brand-700 to-teal-700 text-white shadow-sm flex items-center gap-1.5";
      $("vGrid").setAttribute("aria-pressed", "true");
    }
    if ($("vList")) {
      $("vList").className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[var(--muted)] hover:text-[var(--fg)] transition-all flex items-center gap-1.5";
      $("vList").setAttribute("aria-pressed", "false");
    }
    render();
  });

  $("vList")?.addEventListener("click", () => {
    state.view = "list";
    if ($("vList")) {
      $("vList").className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-gradient-to-r from-brand-700 to-teal-700 text-white shadow-sm flex items-center gap-1.5";
      $("vList").setAttribute("aria-pressed", "true");
    }
    if ($("vGrid")) {
      $("vGrid").className = "px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[var(--muted)] hover:text-[var(--fg)] transition-all flex items-center gap-1.5";
      $("vGrid").setAttribute("aria-pressed", "false");
    }
    render();
  });

  $("favToggleFilter")?.addEventListener("click", () => {
    state.onlyFavs = !state.onlyFavs;
    render();
  });

  $("themeToggle")?.addEventListener("click", () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("ssl_theme", nextDark ? "dark" : "light");
    updateThemeIcon(nextDark);
  });

  const adminBtn = $("adminBtn");
  const adminDropdown = $("adminDropdown");

  if (adminBtn) {
    adminBtn.addEventListener("click", e => {
      e.stopPropagation();
      if (!isAdmin) {
        const dlg = $("adminDlg");
        if (dlg) {
          if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
        }
      } else {
        adminDropdown?.classList.toggle("hidden");
      }
    });
  }

  window.addEventListener("click", () => {
    if (adminDropdown) adminDropdown.classList.add("hidden");
  });

  $("adminCloseBtn")?.addEventListener("click", () => $("adminDlg")?.close());
  $("adminCancelBtn")?.addEventListener("click", () => $("adminDlg")?.close());
  
  $("togglePassVisibility")?.addEventListener("click", () => {
    const passInput = $("adminPass");
    if (passInput) passInput.type = passInput.type === "password" ? "text" : "password";
  });

  $("adminLoginForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const passInput = $("adminPass");
    const pass = passInput ? passInput.value : "";
    if (pass === getAdminPass()) {
      isAdmin = true;
      sessionStorage.setItem("ssl_admin", "true");
      updateAdminUI();
      $("adminDlg")?.close();
      if (passInput) passInput.value = "";
      $("adminErrorMsg")?.classList.add("hidden");
      showToast(currentLang === "en" ? "Logged in as Admin!" : "এডমিন হিসেবে সফলভাবে লগইন হয়েছে!");
      render();
    } else {
      const errBox = $("adminErrorMsg");
      if (errBox) {
        errBox.textContent = currentLang === "en" ? "Incorrect Password!" : "ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।";
        errBox.classList.remove("hidden");
      }
    }
  });

  $("logoutBtn")?.addEventListener("click", () => {
    isAdmin = false;
    sessionStorage.removeItem("ssl_admin");
    updateAdminUI();
    adminDropdown?.classList.add("hidden");
    showToast(currentLang === "en" ? "Logged out successfully" : "লগআউট সম্পন্ন হয়েছে");
    render();
  });

  $("adminDashboardBtn")?.addEventListener("click", () => {
    adminDropdown?.classList.add("hidden");
    const totalCopies = BOOKS.reduce((s, b) => s + (b.copies || 1), 0);

    if ($("dashTotalBooks")) $("dashTotalBooks").textContent = bn(BOOKS.length);
    if ($("dashTotalCopies")) $("dashTotalCopies").textContent = bn(totalCopies);
    if ($("dashTotalCats")) $("dashTotalCats").textContent = bn(CATS.length);
    if ($("dashTotalAuthors")) $("dashTotalAuthors").textContent = bn(new Set(BOOKS.map(b => b.author).filter(Boolean)).size);
    if ($("dashTotalPubs")) $("dashTotalPubs").textContent = bn(new Set(BOOKS.map(b => b.pub).filter(Boolean)).size);
    if ($("dashTotalBorrowers")) $("dashTotalBorrowers").textContent = bn(BORROWERS.filter(x => !x.returned).length);
    
    if ($("dashTotalVisitors")) {
      $("dashTotalVisitors").textContent = bn(window.sslVisitorCount || localStorage.getItem("ssl_total_visitors") || 1240);
    }

    const catBreakdownContainer = $("dashCatBreakdown");
    if (catBreakdownContainer) {
      catBreakdownContainer.innerHTML = CATS.map((cName, i) => {
        const catBooks = BOOKS.filter(b => b.cat === i);
        const bookCount = catBooks.length;
        const copyCount = catBooks.reduce((s, b) => s + (b.copies || 1), 0);
        const percent = totalCopies > 0 ? Math.round((copyCount / totalCopies) * 100) : 0;

        return `
          <div class="p-3.5 rounded-xl bg-[var(--surface-card)] border border-[var(--line)] space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-bold text-xs text-[var(--fg)] truncate max-w-[170px]" title="${esc(cName)}">${esc(cName)}</span>
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">${bn(copyCount)} ${currentLang === "en" ? "Copies" : "কপি"}</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-[var(--muted)]">
              <span>${bn(bookCount)} ${currentLang === "en" ? "Titles" : "টি শিরোনাম"}</span>
              <span>${bn(percent)}%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-[var(--line)] overflow-hidden">
              <div class="h-full bg-brand-700 dark:bg-brand-500 rounded-full transition-all duration-500" style="width: ${percent}%;"></div>
            </div>
          </div>
        `;
      }).join("");
    }

    const dlg = $("adminDashboardDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("adminDashCloseBtn")?.addEventListener("click", () => $("adminDashboardDlg")?.close());
  $("adminDashCloseBtn2")?.addEventListener("click", () => $("adminDashboardDlg")?.close());

  let borrowerTabActive = true;

  $("borrowerManageBtn")?.addEventListener("click", () => {
    adminDropdown?.classList.add("hidden");
    
    const bookSelect = $("borrowBookSelect");
    if (bookSelect) {
      bookSelect.innerHTML = BOOKS.map(b => `<option value="${b.no}">নং ${bn(b.no)} - ${esc(b.title)}</option>`).join("");
    }

    const returnDateInput = $("borrowReturnDate");
    if (returnDateInput) {
      const d = new Date();
      d.setDate(d.getDate() + 15);
      returnDateInput.value = d.toISOString().split('T')[0];
    }

    updateBorrowerStatsAndList();

    const dlg = $("borrowerDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("borrowerCloseBtn")?.addEventListener("click", () => $("borrowerDlg")?.close());
  $("borrowerCloseBtn2")?.addEventListener("click", () => $("borrowerDlg")?.close());

  $("tabActiveBorrowers")?.addEventListener("click", () => {
    borrowerTabActive = true;
    if ($("tabActiveBorrowers")) $("tabActiveBorrowers").className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-700 text-white transition-all";
    if ($("tabReturnedBorrowers")) $("tabReturnedBorrowers").className = "px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--muted)] hover:text-[var(--fg)] transition-all";
    renderBorrowerList();
  });

  $("tabReturnedBorrowers")?.addEventListener("click", () => {
    borrowerTabActive = false;
    if ($("tabReturnedBorrowers")) $("tabReturnedBorrowers").className = "px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-700 text-white transition-all";
    if ($("tabActiveBorrowers")) $("tabActiveBorrowers").className = "px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--muted)] hover:text-[var(--fg)] transition-all";
    renderBorrowerList();
  });

  $("borrowerForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const bookNo = parseInt($("borrowBookSelect").value, 10);
    const name = sanitizeInput($("borrowerName").value);
    const phone = sanitizeInput($("borrowerPhone").value);
    const returnDate = sanitizeInput($("borrowReturnDate").value);

    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!bdPhoneRegex.test(phone)) {
      showToast(currentLang === "en" ? "Please enter a valid 11-digit Bangladeshi mobile number!" : "দয়া করে সঠিক ১১ ডিজিটের বাংলাদেশী মোবাইল নম্বর লিখুন (যেমন: 01712345678)");
      return;
    }

    const book = BOOKS.find(b => b.no === bookNo);
    const record = {
      id: 'bor_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      bookNo,
      bookTitle: book ? book.title : '',
      name,
      phone,
      borrowDate: new Date().toLocaleDateString(),
      returnDate,
      returned: false,
      returnedDate: null
    };

    BORROWERS.unshift(record);
    localStorage.setItem("ssl_borrowers", JSON.stringify(BORROWERS));
    syncDataToRemote("borrowers", BORROWERS);
    $("borrowerForm").reset();

    const d = new Date();
    d.setDate(d.getDate() + 15);
    if ($("borrowReturnDate")) $("borrowReturnDate").value = d.toISOString().split('T')[0];

    updateBorrowerStatsAndList();
    showToast(currentLang === "en" ? "Book issued successfully!" : "বইটি সফলভাবে ধার দেওয়া হয়েছে!");
  });

  function updateBorrowerStatsAndList() {
    const activeList = BORROWERS.filter(x => !x.returned);
    const returnedList = BORROWERS.filter(x => x.returned);

    if ($("activeBorrowCount")) $("activeBorrowCount").textContent = bn(activeList.length);
    if ($("totalReturnedCount")) $("totalReturnedCount").textContent = bn(returnedList.length);
    
    const now = new Date();
    const thisMonthCount = BORROWERS.filter(x => {
      const parts = x.borrowDate.split('/');
      if (parts.length === 3) {
        const bDate = new Date(parts[2], parts[1] - 1, parts[0]);
        return bDate.getMonth() === now.getMonth() && bDate.getFullYear() === now.getFullYear();
      }
      return true;
    }).length;
    if ($("thisMonthBorrowCount")) $("thisMonthBorrowCount").textContent = bn(thisMonthCount);

    if ($("activeBorrowerTabCount")) $("activeBorrowerTabCount").textContent = bn(activeList.length);
    if ($("returnedBorrowerTabCount")) $("returnedBorrowerTabCount").textContent = bn(returnedList.length);

    renderBorrowerList();
  }

  function renderBorrowerList() {
    const container = $("borrowerListContainer");
    if (!container) return;

    const list = BORROWERS.filter(x => borrowerTabActive ? !x.returned : x.returned);

    if (list.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 glass-panel rounded-xl space-y-1">
          <i class="fa-solid fa-folder-open text-2xl text-[var(--muted)]"></i>
          <p class="text-xs text-[var(--muted)] italic">${currentLang === "en" ? "No records found." : "কোনো রেকর্ড পাওয়া যায়নি।"}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <div class="p-3.5 rounded-xl bg-[var(--surface-card)] border border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div class="space-y-1">
          <div class="font-bold text-[var(--fg)]">${esc(item.name)} <span class="font-mono text-[var(--muted)] font-normal">(${esc(item.phone)})</span></div>
          <div class="text-brand-700 dark:text-brand-400 font-semibold">বই নং ${bn(item.bookNo)}: ${esc(item.bookTitle)}</div>
          <div class="text-[11px] text-[var(--muted)]">
            ধার: <span class="font-mono">${bn(item.borrowDate)}</span> | ফেরত দিতে হবে: <span class="font-mono text-amber-600 dark:text-amber-400 font-semibold">${bn(item.returnDate)}</span>
            ${item.returned ? `| ফেরত এসেছে: <span class="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">${bn(item.returnedDate)}</span>` : ''}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${!item.returned ? `
            <button type="button" class="return-book-btn px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all shadow-sm" data-borrow-id="${item.id}">
              <i class="fa-solid fa-check mr-1"></i>ফেরত নিন
            </button>
          ` : `
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">ফেরত প্রাপ্ত</span>
          `}
          <button type="button" class="del-borrow-btn p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors" data-borrow-id="${item.id}" title="রেকর্ড মুছে ফেলুন">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join("");
  }

  $("borrowerListContainer")?.addEventListener("click", e => {
    const returnBtn = e.target.closest(".return-book-btn");
    const delBtn = e.target.closest(".del-borrow-btn");

    if (returnBtn) {
      const id = returnBtn.dataset.borrowId;
      const rec = BORROWERS.find(x => x.id === id);
      if (rec) {
        rec.returned = true;
        rec.returnedDate = new Date().toLocaleDateString();
        localStorage.setItem("ssl_borrowers", JSON.stringify(BORROWERS));
        syncDataToRemote("borrowers", BORROWERS);
        updateBorrowerStatsAndList();
        showToast(currentLang === "en" ? "Book marked as returned!" : "বইটি সফলভাবে ফেরত নেওয়া হয়েছে!");
      }
    }

    if (delBtn) {
      const id = delBtn.dataset.borrowId;
      BORROWERS = BORROWERS.filter(x => x.id !== id);
      localStorage.setItem("ssl_borrowers", JSON.stringify(BORROWERS));
      syncDataToRemote("borrowers", BORROWERS);
      updateBorrowerStatsAndList();
      showToast(currentLang === "en" ? "Record deleted" : "রেকর্ড মুছে ফেলা হয়েছে");
    }
  });

  $("contactForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const name = sanitizeInput($("contactName").value);
    const phone = sanitizeInput($("contactPhone").value);
    const msg = sanitizeInput($("contactMsg").value);

    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    if (!bdPhoneRegex.test(phone)) {
      showToast(currentLang === "en" ? "Please enter a valid 11-digit Bangladeshi mobile number!" : "দয়া করে সঠিক ১১ ডিজিটের বাংলাদেশী মোবাইল নম্বর লিখুন (যেমন: 01712345678)");
      return;
    }

    const newMsg = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      name,
      phone,
      msg,
      date: new Date().toLocaleString(),
      read: false
    };

    USER_MESSAGES.unshift(newMsg);
    localStorage.setItem("ssl_user_messages", JSON.stringify(USER_MESSAGES));
    syncDataToRemote("user_messages", USER_MESSAGES);
    $("contactForm").reset();
    showToast(currentLang === "en" ? "Message sent to admin successfully!" : "আপনার বার্তাটি সফলভাবে এডমিনের কাছে পাঠানো হয়েছে!");
    updateAdminUI();
  });

  $("adminMessagesBtn")?.addEventListener("click", () => {
    adminDropdown?.classList.add("hidden");
    renderAdminMessages();
    const dlg = $("adminMessagesDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("adminMsgCloseBtn")?.addEventListener("click", () => $("adminMessagesDlg")?.close());
  $("adminMsgCloseBtn2")?.addEventListener("click", () => $("adminMessagesDlg")?.close());

  function renderAdminMessages() {
    const container = $("adminMsgListContainer");
    if (!container) return;

    USER_MESSAGES.forEach(m => m.read = true);
    localStorage.setItem("ssl_user_messages", JSON.stringify(USER_MESSAGES));
    updateAdminUI();

    if (USER_MESSAGES.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 glass-panel rounded-xl space-y-2">
          <i class="fa-solid fa-inbox text-3xl text-[var(--muted)]"></i>
          <p class="text-xs text-[var(--muted)] italic">${currentLang === "en" ? "No messages from users yet." : "কোনো নতুন বার্তা আসেনি।"}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = USER_MESSAGES.map(m => `
      <div class="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--line)] space-y-2 text-xs">
        <div class="flex items-center justify-between">
          <span class="font-bold text-sm text-[var(--fg)]">${esc(m.name)} <span class="font-normal font-mono text-[var(--muted)] ml-1">(${esc(m.phone)})</span></span>
          <span class="text-[10px] text-[var(--muted)] font-mono">${bn(m.date)}</span>
        </div>
        <p class="text-[var(--fg)] leading-relaxed bg-[var(--surface)] p-3 rounded-lg border border-[var(--line)]">${esc(m.msg)}</p>
        <div class="flex justify-end pt-1">
          <button type="button" class="del-msg-btn px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white font-semibold text-[11px] transition-all" data-msg-id="${m.id}">
            <i class="fa-solid fa-trash-can mr-1"></i>${currentLang === "en" ? "Delete" : "মুছে ফেলুন"}
          </button>
        </div>
      </div>
    `).join("");
  }

  $("adminMsgListContainer")?.addEventListener("click", e => {
    const btn = e.target.closest("[data-msg-id]");
    if (!btn) return;
    const id = btn.dataset.msgId;
    USER_MESSAGES = USER_MESSAGES.filter(m => m.id !== id);
    localStorage.setItem("ssl_user_messages", JSON.stringify(USER_MESSAGES));
    syncDataToRemote("user_messages", USER_MESSAGES);
    renderAdminMessages();
    updateAdminUI();
    showToast(currentLang === "en" ? "Message deleted" : "বার্তাটি মুছে ফেলা হয়েছে");
  });

  $("addBookBtn")?.addEventListener("click", () => {
    adminDropdown?.classList.add("hidden");
    populateCategoryDropdown();
    
    if ($("editBookNo")) $("editBookNo").value = "";
    const maxNo = BOOKS.reduce((m, b) => Math.max(m, b.no), 0);
    if ($("newBookNo")) $("newBookNo").value = maxNo + 1;

    if ($("addBookModalTitle")) $("addBookModalTitle").textContent = currentLang === "en" ? "Add New Book" : "নতুন বই যোগ করুন";
    if ($("addBookModalSub")) $("addBookModalSub").textContent = currentLang === "en" ? "Enter new book details for the library" : "লাইব্রেরিতে নতুন বইয়ের তথ্য যুক্ত করুন";
    if ($("addBookModalHeader")) $("addBookModalHeader").className = "bg-brand-700 p-6 text-white flex justify-between items-center";
    if ($("addBookModalIcon")) $("addBookModalIcon").className = "fa-solid fa-book-medical";
    if ($("addBookSubmitBtn")) $("addBookSubmitBtn").textContent = currentLang === "en" ? "Add Book" : "বই যোগ করুন";
    $("addBookForm")?.reset();
    if ($("newBookNo")) $("newBookNo").value = maxNo + 1;
    if ($("newFileName")) $("newFileName").textContent = currentLang === "en" ? "No file selected" : "কোনো ফাইল নির্বাচন করা হয়নি";
    $("newCoverPreviewBox")?.classList.add("hidden");

    const dlg = $("addBookDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("dEditBookBtn")?.addEventListener("click", () => {
    if (curNo === null || !isAdmin) return;
    const b = BOOKS.find(x => x.no === curNo);
    if (!b) return;

    populateCategoryDropdown();
    if ($("editBookNo")) $("editBookNo").value = b.no;
    if ($("newBookNo")) $("newBookNo").value = b.no;
    if ($("addBookModalTitle")) $("addBookModalTitle").textContent = currentLang === "en" ? "Update Book Details" : "বইয়ের তথ্য আপডেট করুন";
    if ($("addBookModalSub")) $("addBookModalSub").textContent = `${I18N[currentLang].bookNo} ${bn(b.no)}`;
    if ($("addBookModalHeader")) $("addBookModalHeader").className = "bg-amber-600 p-6 text-white flex justify-between items-center";
    if ($("addBookModalIcon")) $("addBookModalIcon").className = "fa-solid fa-pen-to-square";
    if ($("addBookSubmitBtn")) $("addBookSubmitBtn").textContent = currentLang === "en" ? "Update Info" : "আপডেট করুন";

    if ($("newTitle")) $("newTitle").value = b.title || "";
    if ($("newAuthor")) $("newAuthor").value = b.author || "";
    if ($("newPub")) $("newPub").value = b.pub || "";
    if ($("newPages")) $("newPages").value = b.pages || "";
    if ($("newCopies")) $("newCopies").value = b.copies || 1;
    if ($("newCat")) $("newCat").value = b.cat;

    $("dlg")?.close();
    const dlg = $("addBookDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("addBookCloseBtn")?.addEventListener("click", () => $("addBookDlg")?.close());
  $("addBookCancelBtn")?.addEventListener("click", () => $("addBookDlg")?.close());

  let newBookCoverBase64 = "";
  $("newFilePickBtn")?.addEventListener("click", () => $("newFileInput")?.click());
  $("newFileInput")?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    if ($("newFileName")) $("newFileName").textContent = file.name;
    const reader = new FileReader();
    reader.onload = ev => {
      newBookCoverBase64 = ev.target.result;
      if ($("newCoverPreviewImg")) $("newCoverPreviewImg").src = newBookCoverBase64;
      $("newCoverPreviewBox")?.classList.remove("hidden");
      $("newCoverPreviewBox")?.classList.add("flex");
    };
    reader.readAsDataURL(file);
  });

  $("inlineAddCatBtn")?.addEventListener("click", () => {
    $("inlineAddCatBox")?.classList.toggle("hidden");
  });

  $("saveInlineCatBtn")?.addEventListener("click", () => {
    const input = $("inlineCatInput");
    const val = input ? input.value : "";
    const newIdx = addNewCategory(val);
    if (newIdx !== null) {
      if (input) input.value = "";
      $("inlineAddCatBox")?.classList.add("hidden");
      if ($("newCat")) $("newCat").value = newIdx;
    }
  });

  $("addBookForm")?.addEventListener("submit", e => {
    e.preventDefault();
    if (!isAdmin) {
      showToast(currentLang === "en" ? "Unauthorized action!" : "অননুমোদিত চেষ্টা!");
      return;
    }
    const editNoVal = $("editBookNo")?.value;
    const requestedNo = parseInt($("newBookNo")?.value, 10);
    const title = sanitizeInput($("newTitle") ? $("newTitle").value : "");
    const author = sanitizeInput($("newAuthor") ? $("newAuthor").value : "");
    const pub = sanitizeInput($("newPub") ? $("newPub").value : "");
    const pages = $("newPages") ? parseInt($("newPages").value, 10) || null : null;
    const copies = $("newCopies") ? parseInt($("newCopies").value, 10) || 1 : 1;
    const cat = $("newCat") ? parseInt($("newCat").value, 10) : 0;

    if (editNoVal) {
      const targetNo = parseInt(editNoVal, 10);
      const b = BOOKS.find(x => x.no === targetNo);
      if (b) {
        b.no = requestedNo;
        b.title = title;
        b.author = author;
        b.pub = pub;
        b.pages = pages;
        b.copies = copies;
        b.cat = cat;
      }
      saveBooks();

      if (newBookCoverBase64) {
        localCovers[requestedNo] = newBookCoverBase64;
        if (targetNo !== requestedNo) delete localCovers[targetNo];
        localStorage.setItem("ssl_covers", JSON.stringify(localCovers));
        syncDataToRemote("covers", localCovers);
      }

      $("addBookForm")?.reset();
      newBookCoverBase64 = "";
      $("newCoverPreviewBox")?.classList.add("hidden");
      $("addBookDlg")?.close();

      populateDropdowns();
      renderStats();
      render();
      showToast(currentLang === "en" ? "Book updated successfully!" : "বইয়ের তথ্য সফলভাবে আপডেট করা হয়েছে!");
    } else {
      const newBook = { no: requestedNo, title, author, pub, pages, copies, cat };
      BOOKS.unshift(newBook);
      saveBooks();

      if (newBookCoverBase64) {
        localCovers[requestedNo] = newBookCoverBase64;
        localStorage.setItem("ssl_covers", JSON.stringify(localCovers));
        syncDataToRemote("covers", localCovers);
      }

      $("addBookForm")?.reset();
      newBookCoverBase64 = "";
      if ($("newFileName")) $("newFileName").textContent = currentLang === "en" ? "No file selected" : "কোনো ফাইল নির্বাচন করা হয়নি";
      $("newCoverPreviewBox")?.classList.add("hidden");
      $("addBookDlg")?.close();

      populateDropdowns();
      renderStats();
      render();
      showToast(currentLang === "en" ? "New book added!" : "নতুন বই সফলভাবে লাইব্রেরিতে যোগ করা হয়েছে!");
    }
  });

  $("changePassBtn")?.addEventListener("click", () => {
    adminDropdown?.classList.add("hidden");
    const dlg = $("changePassDlg");
    if (dlg) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "true");
    }
  });

  $("changePassCloseBtn")?.addEventListener("click", () => $("changePassDlg")?.close());
  $("changePassCancelBtn")?.addEventListener("click", () => $("changePassDlg")?.close());

  $("changePassForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const curr = $("currPass") ? $("currPass").value : "";
    const nPass = $("newPass") ? $("newPass").value : "";
    const conf = $("confirmPass") ? $("confirmPass").value : "";
    const errBox = $("passErrorMsg");

    if (curr !== getAdminPass()) {
      if (errBox) {
        errBox.textContent = currentLang === "en" ? "Current password incorrect!" : "বর্তমান পাসওয়ার্ড সঠিক নয়!";
        errBox.classList.remove("hidden");
      }
      return;
    }

    if (nPass !== conf) {
      if (errBox) {
        errBox.textContent = currentLang === "en" ? "New passwords do not match!" : "নতুন পাসওয়ার্ড এবং নিশ্চিতকরণ পাসওয়ার্ড মিলছে না!";
        errBox.classList.add("hidden");
      }
      return;
    }

    localStorage.setItem("ssl_admin_pass", nPass);
    $("changePassForm")?.reset();
    errBox?.classList.add("hidden");
    $("changePassDlg")?.close();
    showToast(currentLang === "en" ? "Password updated!" : "এডমিন পাসওয়ার্ড সফলভাবে আপডেট করা হয়েছে!");
  });

  $("out")?.addEventListener("click", e => {
    const favBtn = e.target.closest("[data-fav-no]");
    if (favBtn) {
      e.stopPropagation();
      toggleFav(parseInt(favBtn.dataset.favNo, 10));
      return;
    }

    const bookCard = e.target.closest("[data-no]");
    if (bookCard) {
      openBook(parseInt(bookCard.dataset.no, 10));
    }
  });

  const closeModal = () => {
    const dlg = $("dlg");
    if (dlg) {
      if (dlg.close) dlg.close(); else dlg.removeAttribute("open");
    }
    curNo = null;
  };

  $("dClose")?.addEventListener("click", closeModal);
  $("dCloseTop")?.addEventListener("click", closeModal);
  $("dlg")?.addEventListener("click", e => {
    if (e.target === $("dlg")) closeModal();
  });

  $("dFavBtn")?.addEventListener("click", () => {
    if (curNo !== null) toggleFav(curNo);
  });

  $("dDeleteBookBtn")?.addEventListener("click", () => {
    if (curNo === null || !isAdmin) return;
    const confirmDlg = $("confirmDeleteDlg");
    if (confirmDlg) {
      if (confirmDlg.showModal) confirmDlg.showModal(); else confirmDlg.setAttribute("open", "true");
    }
  });

  $("confirmDlgCancel")?.addEventListener("click", () => {
    const confirmDlg = $("confirmDeleteDlg");
    if (confirmDlg) confirmDlg.close();
  });

  $("confirmDlgYes")?.addEventListener("click", () => {
    const confirmDlg = $("confirmDeleteDlg");
    if (confirmDlg) confirmDlg.close();

    if (curNo !== null && isAdmin) {
      BOOKS = BOOKS.filter(x => x.no !== curNo);
      delete localCovers[curNo];
      saveBooks();
      localStorage.setItem("ssl_covers", JSON.stringify(localCovers));
      syncDataToRemote("covers", localCovers);
      closeModal();
      populateDropdowns();
      renderStats();
      render();
      showToast(currentLang === "en" ? "Book deleted" : "বইটি সফলভাবে মুছে ফেলা হয়েছে।");
    }
  });
}