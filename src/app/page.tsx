import Hero from "@/app/ui/home/hero";
import Visit from "@/app/ui/home/goto-visit";
import Footer from "@/app/ui/global/footer";
import Collection from "@/app/ui/home/collection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Visit />
      <Collection />
      <Footer />
    </div>
  );
}
