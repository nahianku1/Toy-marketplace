/* eslint-disable no-unused-vars */

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";

function Mytoys() {
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
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Seller Name</th>
                  <th>Seller Email</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Available</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                  <td>Nahian bin Islam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Mytoys;
