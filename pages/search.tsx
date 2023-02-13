import type { NextPage, GetServerSideProps } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/router";
import format from "date-fns/format";
import { SearchResult } from "../typings";

interface SearchProps {
  searchResults: SearchResult[];
}

const Search: NextPage<SearchProps> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, peopleNumber } = router.query;

  const formatIsoDate = (date: string) => {
    return format(new Date(date), "dd MMMM yy");
  };

  const formattedStartDate = formatIsoDate(startDate as string);
  const formattedEndDate = formatIsoDate(endDate as string);
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${peopleNumber}`} />

      <main className="py-14 max-w-6xl mx-auto px-2 sm:px-6">
        <h5 className="text-sm">
          300+ Stays - {range} - for {peopleNumber} guests
        </h5>
        <h2 className="text-3xl font-bold pt-2">Stays in {location}</h2>

        <div className="hidden md:inline-flex space-x-2.5 my-8">
          <button className="btn-filters">Cancellation Flexibility</button>
          <button className="btn-filters">Type of Place</button>
          <button className="btn-filters">Price</button>
          <button className="btn-filters">Rooms and Beds</button>
          <button className="btn-filters">More filters</button>
        </div>

        <section className="flex flex-col space-y-3.5">
          {searchResults.map((searchResult: SearchResult) => {
            return <InfoCard key={searchResult.img} {...searchResult} />;
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults = await response.json();

  return {
    props: { searchResults },
  };
};
