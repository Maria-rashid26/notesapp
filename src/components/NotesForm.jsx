import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../Noteslice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const NotesForm = () => {
  const Notes = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [subtitle, setsubTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const handlechange = () => {
    if (title && subtitle && content) {
      dispatch(
        addNotes({
          id: Notes[Notes.length - 1].id + 1,
          title: title,
          subtitle: subtitle,
          content: content,
        })
      );
      setTitle(title);
      setsubTitle(subtitle);
      setContent(content);
    } else {
      alert("Something went wrong...! Please fill in all fields");
    }
    navigate("/");
  };

  return (
    <div className="z-10 absolute w-[500px] bg-gray-800 text-white grid space-y-2 mx-[30%] p-7 rounded-md top-24">
      <h1 className="mb-2 text-center font-semibold text-xl">Add Notes</h1>
      <input
        className="bg-transparent h-[50px] border border-white rounded px-2 placeholder:font-semibold text-[1rem]"
        type="text"
        placeholder="Title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        className="bg-transparent h-[50px] border border-white rounded px-2 placeholder:font-semibold text-[1rem]"
        type="text"
        placeholder="Subtitle"
        onChange={(event) => {
          setsubTitle(event.target.value);
        }}
      />
      <textarea
        className="bg-transparent  border border-white rounded px-2 py-2"
        rows="5"
        placeholder="Write Something Down"
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></textarea>
      <button
        onClick={handlechange}
        className="hover:text-white font-medium hover:bg-gray-600 border-2  border-white rounded  mt-8 p-2 text-white bg-gray-800 duration-100"
      >
        Submit
      </button>
    </div>
  );
};

export default NotesForm;
