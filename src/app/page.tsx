// src/app/page.tsx

import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Template de site vitrine (Tailwind + Next.js)!</h1>
      <Button className="bg-amber-300 text-black hover:bg-amber-100 hover:text-blue-500" href="/menu">En savoir plus</Button>  
    </>
  );
}
