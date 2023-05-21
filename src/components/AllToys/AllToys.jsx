/* eslint-disable no-unused-vars */

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";
import { Vortex } from "react-loader-spinner";
import useSWR from "swr";

import { useEffect, useState } from "react";

function AllToys() {
  console.log(`Rendered Again`);
  let [totapage, setTotaPage] = useState(0);
  let [currentpage, setCurrentPage] = useState(1);
  let [alltoys, setAlltoys] = useState([]);

  let handleView = async (id) => {
    console.log(id);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/all-toys?page=${currentpage}&itemPerPage=2`)
      .then((res) => res.json())
      .then((data) => {
        setTotaPage(data.totalPage);
        setAlltoys(data.result);
      });
  }, [currentpage]);

  //   let All_Toys = async () => {
  //     let res = await fetch(`http://localhost:5000/all-toys`);
  //     let data = await res.json();
  //     return data;
  //   };

  //   let { data: alltoys } = useSWR("all-toys", All_Toys);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const totalPages = Math.ceil(alltoys?.length / 2);
  //   const startIndex = (currentPage - 1) * 2;
  //   const endIndex = startIndex + 2;
  //   const currentItems = alltoys?.slice(startIndex, endIndex);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  if (!alltoys) {
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
                {alltoys.map((entry) => (
                  <tr key={crypto.randomUUID()}>
                    <td>{entry?.sellername}</td>
                    <td>{entry?.product_name}</td>
                    <td>{entry?.sub_category}</td>
                    <td>{entry?.price}</td>
                    <td>{entry?.available}</td>
                    <td>
                      <button
                        className="px-[15px] py-[10px] bg-orange-400 "
                        onClick={() => handleView(entry._id)}
                      >
                        View Details
                      </button>
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
          {currentpage <= totapage && (
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
