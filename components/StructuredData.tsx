export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Keittisak Phasomsap",
    "jobTitle": "AI Developer & Web3 Expert",
    "description": "AI Developer, Web3 Solana Expert, Game Developer & Udemy Instructor with 5+ years experience in software development",
    "url": "https://emspace.dev",
    "sameAs": [
      "https://github.com/ksomsap",
      "https://www.udemy.com/user/keittisak-phasomsap/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chonburi",
      "addressCountry": "Thailand"
    },
    "email": "keittisakcpm@gmail.com",
    "telephone": "+66899385696",
    "birthDate": "1993",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kasetsart University Sriracha Campus",
      "description": "Bachelor of Computer Engineering (2012-2016)"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Web3 Development",
      "Solana Blockchain",
      "Game Development",
      "Unity",
      "Next.js",
      "TypeScript",
      "Python",
      "JavaScript"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Generative AI for Educators Certificate",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google Digital Academy"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Mastering Amazon S3 with AWS SDK for Python",
        "credentialCategory": "Certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "CodeSignal"
        }
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Udemy",
        "description": "Online Education Platform - Course Instructor"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}