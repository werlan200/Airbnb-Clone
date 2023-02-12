import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import { MediumCardType, SmallCardType } from "../typings";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
type HomeProps = {
  smallCardData: SmallCardType[];
  mediumCardData: MediumCardType[];
};

const Home: NextPage<HomeProps> = ({ smallCardData, mediumCardData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto px-2">
        <section className="pt-5 pl-1.5 lg:pl-0">
          <h2 className="text-4xl font-semibold pb-4">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {smallCardData.map(
              ({ img, location, distance }: SmallCardType, i) => (
                <SmallCard
                  key={i}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>

        <section className="pt-5 pl-1.5 lg:pl-0">
          <h2 className="text-4xl font-semibold pb-4">Live Anywhere</h2>
          <div className="flex space-x-5 overflow-y-auto scrollbar-hide p-3 -ml-3">
            {mediumCardData.map(({ img, title }: MediumCardType, i) => (
              <MediumCard key={i} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className="relative mt-8">
          <LargeCard
            img={
              "https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
            }
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            btnText="Get inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const smallCardResponse = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const smallCardData = (await smallCardResponse.json()) as SmallCardType;

  const mediumCardResponse = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const mediumCardData = (await mediumCardResponse.json()) as MediumCardType;

  return {
    props: { smallCardData, mediumCardData },
  };
};

export default Home;
