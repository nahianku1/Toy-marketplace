import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";

function Updatemodal({ modalinfo, setOpenmodal, setMytoys }) {
  let { user } = useContext(AuthContext);
  let handleSubmit = async (e) => {
    e.preventDefault();
    let id = e.target.id.value;
    let price = e.target.price.value;
    let available = e.target.available.value;
    let description = e.target.description.value;

    let res = await fetch(`http://localhost:5000/my-toys-update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price, available, description }),
    });
    let data = await res.json();
    console.log(data);
    if (data.modifiedCount) {
      setOpenmodal(false);
      Swal.fire({
        title: "Good Job",
        text: "Updated Successfully!",
        icon: "success",
      });
      fetch(`http://localhost:5000/my-toys?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMytoys(data);
        });
    }
  };
  return (
    <div className="flex  [backdrop-filter:blur(5px)] fixed top-0 left-0 w-full h-screen items-center justify-center ">
      <div className="bg-white shadow-2xl relative w-[320px] md:w-[400px] py-[30px] rounded-md ">
        <button
          onClick={() => setOpenmodal(false)}
          className="mx-auto  z-10 absolute right-[4%] top-[2%] [line-height:20px] p-[10px] w-[40px] h-[40px] bg-black text-white rounded-full"
        >
          X
        </button>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-4"
        >
          <div className=" mb-5 text-[20px] flex items-center justify-center flex-col font-bold text-black">
            <FaEdit className="text-[30px]" />
            <p>Update entry</p>
          </div>

          <div>
            <label htmlFor="" className="block">
              Price:
            </label>
            <input
              type="text"
              name="price"
              defaultValue={modalinfo.price}
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Price"
            />
          </div>
          <input type="text" name="id" hidden defaultValue={modalinfo._id} />

          <div>
            <label htmlFor="" className="block">
              Available Quantity:
            </label>
            <input
              type="text"
              name="available"
              defaultValue={modalinfo.available}
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Available Quantity"
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Description:
            </label>
            <textarea
              type="text"
              name="description"
              defaultValue={modalinfo.description}
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Toy Description"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-lg text-white font-bold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updatemodal;
