/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";
import { Vortex } from "react-loader-spinner";
import useSWR from "swr";

import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllToys() {
  console.log(`Rendered Again`);
  let [totapage, setTotaPage] = useState(0);
  let [currentpage, setCurrentPage] = useState(1);
  let [alltoys, setAlltoys] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);

  let handleView = async (id) => {
    console.log(id);
  };
  useEffect(() => {
    document.title = "Edufun | All Toys";
  }, []);
  let limitperPage = 20;
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-kappa.vercel.app/all-toys?page=${currentpage}&itemPerPage=${limitperPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotaPage(data.totalPage);
        setAlltoys(data.result);
        setSearchQuery(data.result);
        setLoading(false);
      });
  }, [currentpage]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  let handleSearch = (e) => {
    const query = e.target.value;
    console.log(alltoys);
    const filteredResults = alltoys.filter((item) =>
      item.product_name.toLowerCase().includes(query.toLowerCase())
    );
    if (query.length < 1) {
      setAlltoys(searchQuery);
    } else {
      setAlltoys(filteredResults);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <Vortex
          visible={true}
          height="200"
          width="200"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  if (!alltoys) {
    return (
      <>
        <main className="min-h-screen mb-[60px]">
          <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
          <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
          <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
          <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
          <Header navbar={false} />
          <h1 className="flex items-center justify-center leading-[100vh] text-[40px] font-extrabold">
            No Item Found!
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen mb-[60px]">
        <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <Header navbar={false} />
        <div className="mx-[0px] flex items-center justify-center md:mx-[120px] mt-[60px]">
          <div className="bg-[rgba(255,255,255,0.3)] p-[20px] w-[300px] md:w-full overflow-x-auto shadow-2xl rounded-xl ">
            <div class="p-4">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search"
                  onKeyUp={handleSearch}
                  class="py-2 pl-10 pr-4 rounded-full w-full border border-gray-300 focus:outline-none focus:border-orange-400"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    class="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 19l-2.8-2.8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Seller Name</th>
                  <th>Toy Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Available</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {alltoys?.map((entry) => (
                  <tr key={crypto.randomUUID()}>
                    <td>{entry?.sellername}</td>
                    <td>{entry?.product_name}</td>
                    <td>{entry?.sub_category}</td>
                    <td>{entry?.price}</td>
                    <td>{entry?.available}</td>
                    <td>
                      <Link to={`/single/${entry._id}`}>
                        <button
                          className="px-[15px] py-[10px] bg-orange-400 "
                          onClick={() => handleView(entry._id)}
                        >
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-4">
          {currentpage > 1 && (
            <button
              onClick={() => setCurrentPage((c) => c - 1)}
              className="px-4 py-2 mx-1 rounded bg-blue-500 text-white"
            >
              Prev
            </button>
          )}
          {Array.from({ length: totapage }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentpage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {currentpage < totapage && (
            <button
              onClick={() => setCurrentPage((c) => c + 1)}
              className="px-4 py-2 mx-1 rounded bg-blue-500 text-white"
            >
              Next
            </button>
          )}
        </div>
      </main>
      <div className="flex justify-center mt-4"></div>

      <Footer />
    </>
  );
}

export default AllToys;
