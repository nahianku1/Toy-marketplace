/* eslint-disable no-unused-vars */

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";
import { Vortex } from "react-loader-spinner";
import useSWR from "swr";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Updatemodal from "../Updatemodal/Updatemodal";
import Swal from "sweetalert2";

function Mytoys() {
  console.log(`Rendered Again`);
  let { user, loading, update, setUpdated } = useContext(AuthContext);
  let [mytoys, setMytoys] = useState([]);
  let [openmodal, setOpenmodal] = useState(false);
  let [modalinfo, setModalinfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMytoys(data);
        console.log(mytoys);
      });
  }, [user, update]);

  let handleEdit = (info) => {
    setModalinfo(info);
    setOpenmodal(true);
  };
  let handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action can't be undone.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, cancel please!",
      closeOnConfirm: false,
      closeOnCancel: false,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/my-toys-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Good Job",
                text: "Deleted Successfully!",
                icon: "success",
              });
              fetch(`http://localhost:5000/my-toys?email=${user.email}`)
              .then((res) => res.json())
              .then((data) => {
                setMytoys(data);
              });
            }
          });
      }
    });
  };

  if (loading || !mytoys?.length > 0) {
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
  } else if (typeof mytoys[0] == "string") {
    return (
      <>
        <main className="min-h-screen mb-[60px]">
          <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
          <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
          <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
          <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
          <Header navbar={false} />
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl">No Item Found!</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen mb-[60px]">
        {openmodal && (
          <Updatemodal
            modalinfo={modalinfo}
            setOpenmodal={setOpenmodal}
            setMytoys={setMytoys}
          />
        )}

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
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Seller Name</th>
                  <th>Seller Email</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Available</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mytoys.map((entry) => (
                  <tr key={crypto.randomUUID()}>
                    <td>
                      <img
                        src={entry.product_photo}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full object-cover object-center"
                      />
                    </td>
                    <td>{entry?.product_name}</td>
                    <td>{entry?.sellername}</td>
                    <td>{entry?.selleremail}</td>
                    <td>{entry?.price}</td>
                    <td>{entry?.rating}</td>
                    <td>{entry?.available}</td>
                    <td>{entry?.sub_category}</td>
                    <td>{entry?.description?.substr(0, 100) + "....."}</td>
                    <td className="space-x-3 text-[20px]">
                      <button onClick={() => handleEdit(entry)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(entry._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
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
