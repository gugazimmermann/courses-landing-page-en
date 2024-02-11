const TITLE =
  "Zero to Professional: Authentication with React / TypeScript and Jest";
const DESCRIPTION =  "Learn React using TypeScript, quality control tools, best practices, understanding the day-to-day in an Agile development environment, and many forms of testing using Jest.";
const URL = "https://www.zero-to-professional.com";

const sharedMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Authentication",
    "React",
    "TypeScript",
    "Jest",
    "Unit Test",
    "Development",
    "Developer",
    "Programmer",
    "Frontend",
    "Front end",
    "Remote",
    "Job",
    "Remote Job",
    "Learning",
    "Tutorial",
    "Auth",
    "ESLint",
    "Prettier",
    "Agile",
    "Scrum",
    "Ebook",
    "E-book",
    "Course",
  ],
  alternates: {
    canonical: URL,
  },
  authors: [
    {
      name: "Guga Zimmermann - gugazimmermann@gmail.com",
      url: "https://www.linkedin.com/in/guga-zimmermann/",
    },
  ],
  creator: "Guga Zimmermann",
  publisher: "Guga Zimmermann",
  metadataBase: URL,
  openGraph: {
    title: TITLE,
    description:
      "Learn React using TypeScript and many forms of testing using Jest.",
    locale: "us_US",
    type: "website",
    url: URL,
    siteName: TITLE,
    images: [
      {
        url: `${URL}/images/social/800x600.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${URL}/images/social/1800x1600.png`,
        width: 1800,
        height: 1600,
      },
      {
        url: `${URL}/images/social/1200x630.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    siteId: "-",
    creator: "@touchsistemas",
    creatorId: "-",
    images: [`${URL}/images/social/1200x628.png`],
  },
};

export default sharedMetadata;
