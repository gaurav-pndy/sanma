import YokoDesc from "@/components/Products/Yoko/YokoDesc";
import YokoHero from "@/components/Products/Yoko/YokoHero";

export const metadata = {
  title: "Yoko NeVu - Surgical Operating Microscope | Sanma",
  description:
    "Yoko NeVu surgical operating microscope for Neuro, Spine, ENT and Plastic & Reconstructive surgery.",
};

export default function YokoPage() {
  return (
    <>
      <YokoHero />
      <YokoDesc />
    </>
  );
}
