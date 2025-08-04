// src/app/information/page.tsx

import Information from "@/components/pages/Information";

export const metadata = {
  title: "Informations",
  description: "Découvrez des informations utiles sur les droits, aides et dispositifs liés aux services de notre activité.",
  alternates: {
    canonical: "https://www.exemple.com/information",
  },
};

export default function InformationPage() {
  return (
    <Information/>
  );
}