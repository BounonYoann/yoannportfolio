import { Button } from "@/components/ui/button";
import Link from "next/link";
// components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Création de sites web sur mesure</span>
            <h1 className="h1 mb-6">
              Bienvenue chez <br />{" "}
              <span className="text-accent">Vision Digital</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Nous concevons des sites performants, esthétiques et adaptés à vos
              objectifs. Du design à la mise en ligne, nous vous accompagnons
              pour propulser votre présence en ligne.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Découvrir nos services</span>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
