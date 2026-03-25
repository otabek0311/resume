import { SkillCategory, Project, Experience, Education, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Otabek Abdullayev",
  title: "Backend Dasturchi",
  summary: "Node.js asosida backend tizimlar ishlab chiqaman. Amaliy loyihalarda barqaror va tushunarli yechimlar yaratishga e’tibor qarataman.",
  about: "Backend dasturlash yo‘nalishida ishlayman. Node.js va NestJS yordamida API lar ishlab chiqish tajribasiga egaman. RESTful va GraphQL bilan ishlaganman. Kodni sodda va qo‘llab-quvvatlash oson bo‘lishiga e’tibor beraman. PostgreSQL va MongoDB bilan ishlash, oddiy arxitektura yechimlari va autentifikatsiya jarayonlarini tashkil qilish bo‘yicha tajribam bor. Yangi texnologiyalarni o‘rganishga doim harakat qilaman.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Dasturlash Tillari",
    skills: ["TypeScript", "JavaScript (ES6+)", "SQL", "MySQL"]
  },
  {
    title: "Freymvorklar va Muhitlar",
    skills: ["Node.js", "NestJS", "Express.js"]
  },
  {
    title: "Ma'lumotlar Bazasi",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "ORM va Asboblar",
    skills: ["Prisma", "TypeORM"]
  },
  {
    title: "DevOps va Asosiy Vositalar",
    skills: ["Docker", "AWS (EC2, S3)", "GitHub Actions"]
  },
  {
    title: "Yumshoq Ko'nikmalar",
    skills: ["Tez o‘rganish",  "Jamoada ishlash", "Mas’uliyat"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "TimePlus erp",
    description: "FaceID asosida ishlovchi CRM tizimi. Ishchilarning kelib-ketishini nazorat qilish va hisobotlarni yuritish uchun mo‘ljallangan. Telegram bot orqali kunlik va oylik ma’lumotlarni olish imkoniyati mavjud.",
    techStack: ["Node.js", "NestJS", "React", "TypeScript"],
    githubUrl: "https://timeplus.uz/",
    imageUrl: "./images/crmpanel.jpg",
    objectFit: "contain"
  },
  {
    id: "2",
    title: "Phone Market CRM",
    description: "Telefon savdosi uchun backend CRM tizimi. Mahsulotlar, buyurtmalar va foydalanuvchilarni boshqarish imkonini beradi. NestJS asosida ishlab chiqilgan, PostgreSQL va MongoDB ishlatilgan.",
    techStack: ["NestJS", "PostgreSQL", "MongoDB", "TypeORM", "JWT"],
    githubUrl: "https://phonemarket.otabekbackend.uz/api",
    imageUrl: "./images/Marketphones-Logo-Vector.svg-.png",
    objectFit: "contain"
  },
  {
    id: "3",
    title: "UzAutoMotors",
    description: "Avtomobillarni ko‘rish va boshqarish uchun web platforma. Foydalanuvchilar qidiruv va filterdan foydalanishi mumkin. Admin panel orqali ma’lumotlar boshqariladi. JWT autentifikatsiya va email tasdiqlash mavjud.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    githubUrl: "https://uzautomotors.otabekbackend.uz/",
    imageUrl: "./images/crmauto.png",
    objectFit: "contain"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Backend (Node.js)",
    institution: "Najot Ta'lim",
    period: "2025 - 2026",
    description: "Node.js, NestJS va ma’lumotlar bazalari bilan ishlash. API yaratish va backend asoslarini o‘rganish.",
    logoUrl: "https://api.logobank.uz/media/logos_png/Najot_Talim-01.png"
  },
  {
    degree: "Frontend va Kompyuter Savodxonligi",
    institution: "To'rtko'l IT Markazi",
    period: "2021 - 2022",
    description: "Dasturlash asoslari va JavaScript bo‘yicha boshlang‘ich bilimlar.",
    logoUrl: "https://api.logobank.uz/media/logos_png/IT_park-01.png"
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: "abdullayevotabek414@gmail.com",
  github: "https://github.com/otabek0311",
  telegram: "https://t.me/Otabek_Abdullayevvvv",
};
