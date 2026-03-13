import MainSection from "@/components/home-components/mainsection";
import Divider from "@/components/home-components/Divider";
import MainSection2 from "@/components/home-components/mainsection2";
import Attension1 from "@/components/home-components/Attension1";
import Parallalax1 from "@/components/home-components/Parallalax";
import Parallalax2 from "@/components/home-components/Parallalax2";
import Parallalax3 from "@/components/home-components/Parallalax3";

export default function Home() {
  return (
    <div className="pt-5 text-center">
      <MainSection />
      <Parallalax2 />
      <Attension1 />
      <MainSection2 />
      <Parallalax1 />
      <Parallalax3 />
      <Divider />
    </div>
  );
}