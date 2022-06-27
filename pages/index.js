import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { client } from "../sanity/client";
import { getClient } from "../sanity/server";

export default function Home({ products }) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name,
      product.name.toLowerCase,
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  const searchProducts = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <input
        className="text-center form-control block w-full px-3 py-1.5 text-base font-normal text-gray-100 bg-black bg-clip-padding transition ease-in-out m-0 focus:text-white focus:outline-none"
        type="text"
        value={search}
        placeholder="search products"
        onChange={searchProducts.bind(this)}
      />
      <div className="grid grid-cols-4 border-2">
        {filteredProducts.map((product, i) => (
          <div className="m-1 border-2 border-black" key={i}>
            <div className="flex flex-col justify-center items-center p-2">
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Name</p>
                <p>{product.name}</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Serving Size</p>
                <p>{product.servingSize}</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Weight</p>
                <p>{product.weight} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Calories</p>
                <p>{product.nutrients.calories} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Fiber</p>
                <p>{product.nutrients.fiber} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Vitamin A</p>
                <p>{product.nutrients.vitaminA} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Vitamin C</p>
                <p>{product.nutrients.vitaminC} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Potassium</p>
                <p>{product.nutrients.potassium} g</p>
              </span>
              <span className="flex justify-between w-full whitespace-nowrap">
                <p>Folate</p>
                <p>{product.nutrients.folate} g</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};
