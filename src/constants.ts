import { SkillCategory, Project, Experience, Education, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Otabek Abdullayev",
  title: "Backend Dasturchi",
  summary: "Toza kod, masshtablilik va xavfsizlikka e'tibor qaratgan holda yuqori unumdorlikka ega tizimlarni loyihalashtiraman. Node.js ekotizimi va zamonaviy backend arxitekturalari bo'yicha mutaxassisman.",
  about: "Backend muhandisligi sohasida mutaxassisman, NestJS va Node.js yordamida mustahkam RESTful va GraphQL API-larni yaratishga ixtisoslashganman. Mening yondashuvim SOLID tamoyillari va Domain-Driven Design (DDD) ga asoslangan bo'lib, tizimlarning nafaqat ishlashini, balki ularni saqlash va kengaytirish osonligini ta'minlaydi. Men PostgreSQL optimallashtirish, mikroxizmatlar orkestratsiyasi va xavfsiz autentifikatsiya/avtorizatsiya oqimlarini amalga oshirish bo'yicha bilimga egaman.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Dasturlash Tillari",
    skills: ["TypeScript", "JavaScript (ES6+)", "SQL","MySQL"]
  },
  {
    title: "Freymvorklar va Muhitlar",
    skills: ["Node.js", "NestJS", "Express.js"]
  },
  {
    title: "Ma'lumotlar Bazasi va Kesh",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM"]
  },
  {
    title: "DevOps va Asboblar",
    skills: ["Docker", "AWS (EC2, S3, Lambda)", "CI/CD (GitHub Actions)"]
  },
  {
    title: "Yumshoq Ko'nikmalar",
    skills: ["O`rganuvchanlik qobiliyati", "Mustahkam bilim", "Muammolarni Hal Qilish", "AI bilan ishlash"]
  }
];

export const PROJECTS: Project[] = [
  
  {
    id: "1",
    title: "TimePlus",
    description: "Bu loyixa FaceId orqali ishlaydigan crm panel xisoblanib katta korxonalarda hisob kitob yuritish va ishchilarning o`z vaqtida ishga kelib ketishini nazorat qilish uchun hizmat qiladi. Bunda qoshimcha korxona raxbari o`zi uchun telegram botdan ishchilarning kelib ketish oylik haftalik kunlik malumotlarini olishi mumkin",
    techStack: ["Node.js", "NestJS", "React","Auth", "FaceID", "TypeScript"],
    githubUrl: "https://timeplus.uz/",
    imageUrl: "./images/crmpanel.jpg",
    objectFit: "contain"
  },
 
  {
    id: "2",
    title: "Phone Market CRM",
    description: "Telefon savdosi uchun mo‘ljallangn azamonaviy backend CRM tizimi. NestJS asosida ishlab chiqilgan bo‘lib, yuqori samaradorlik va xavfsizlikni ta’minlaydi.Mahsulotlar, buyurtmalar va foydalanuvchilarni markazlashtirilgan boshqarish imkonini beradi. PostgreSQL va MongoDB orqali moslashuvchan ma’lumotlar ishlovi yo‘lga qo‘yilgan.Modulyar arxitektura real biznes jarayonlarini avtomatlashtirish va tizimni oson kengaytirishni qo‘llab-quvvatlaydi.",
    techStack: ["NestJS",  "PostgreSQL",  "MongoDB" ],
    githubUrl: "https://phonemarket.otabekbackend.uz/api",
    imageUrl: "./images/Marketphones-Logo-Vector.svg-.png",
    objectFit: "contain"
  },
  {
    id: "3",
    title: "UzAutoMotors",
    description: "O'zbekiston avtomobil bozori uchun zamonaviy to'liq funksional veb-platforma. React va Node.js asosida qurilgan bo'lib, foydalanuvchilar avtomobillarni ko'rish, qidirish va filtrlash imkoniyatiga ega. Admin panel orqali markalar va avtomobillarni boshqarish, rasm yuklash va statistika ko'rish mumkin. Email orqali OTP tasdiqlash tizimi va JWT autentifikatsiya joriy etilgan.",
    techStack: ["Express","MongoDB","BCRYPTJS","multer","nodemailer","react" ],
    githubUrl: "https://uzautomotors.otabekbackend.uz/",
    imageUrl: "./images/crmauto.png",
    objectFit: "contain"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Backend (Node.js) Muhandisligi",
    institution: "Najot Ta'lim",
    period: "2025 - 2026",
    description: "Node.js ekotizimi, NestJS, PostgreSQL va Redis yordamida murakkab backend tizimlarini qurish. Tizim dizayni, xavfsizlik va masshtablanuvchanlik bo'yicha chuqur bilimlar.",
    logoUrl: "https://api.logobank.uz/media/logos_png/Najot_Talim-01.png"
  },
  {
    degree: "Frontend Dasturlash va Kompyuter Savodxonligi",
    institution: "To'rtko'l tumani IT Markazi",
    period: "2021 - 2022",
    description: "Dasturlash asoslari, JavaScript (ES6+) va Frontend texnologiyalari bo'yicha intensiv ta'lim. Algoritmlar va muammolarni hal qilish ko'nikmalarini shakllantirish.",
    logoUrl: "https://api.logobank.uz/media/logos_png/IT_park-01.png"
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: "abdullayevotabek414@gmail.com",
  github: "https://github.com/otabek0311",
  telegram: "https://t.me/Otabek_Abdullayevvvv",
};
