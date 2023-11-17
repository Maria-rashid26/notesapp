import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editNotes } from "../Noteslice";

import { AiOutlinePlus } from "react-icons/ai";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [utitle, setTitle] = useState("");
  const [usubtitle, setSubtitle] = useState("");
  const [ucontent, setContent] = useState("");

  const handlechange = () => {
    if (utitle && usubtitle && ucontent) {
      dispatch(
        editNotes({
          id: parseInt(id),
          title: utitle,
          subtitle: usubtitle,
          content: ucontent,
        })
      );
    } else {
      alert("Something went wrong...! Please fill in all fields");
    }

    navigate("/");
  };
  return (
    <div>
      <div className="border-2  rounded-lg w-[300px] mt-5 space-y-3 h-[260px] flex justify-center items-center bg-white absolute left-32">
        <button className="bg-gray-800 space-x-5 text-white h-10 w-10 rounded-full flex items-center p-1 active:bg-gray-600 duration-100">
          <span> {<AiOutlinePlus size={30} />}</span>
        </button>
      </div>
      <div className="z-10 absolute bg-gray-800 w-[500px] text-white grid space-y-2 mx-[30%] p-7 rounded-md top-24  ">
        <h1 className="mb-2 text-center font-semibold text-xl">Update Notes</h1>
        <input
          className="bg-transparent h-[50px] border border-white rounded px-2 placeholder:font-semibold text-[1rem]"
          type="text"
          placeholder="Title"
          value={utitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="bg-transparent h-[50px] border border-white rounded px-2 placeholder:font-semibold text-[1rem]"
          type="text"
          placeholder="Subtitle"
          value={usubtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <textarea
          className="bg-transparent  border border-white rounded px-2 py-2"
          rows="5"
          placeholder="Write Something Down"
          value={ucontent}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handlechange}
          className="hover:text-white font-medium hover:bg-gray-600 border-2  border-white rounded  mt-8 p-2 text-white bg-gray-800 duration-100"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
