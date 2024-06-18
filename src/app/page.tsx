import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeatProduct";
import FeaturedShops from "@/components/FeatShops";
import MainCard from "@/components/MainCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <MainCard />
      <Categories />
      <FeaturedProducts />
      <FeaturedShops />
    </div>
  );
}
