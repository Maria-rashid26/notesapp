import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
// import { MdColorLens } from "react-icons/md";

import { deletNotes } from "../Noteslice";
import { Link } from "react-router-dom";

const Notescontent = () => {
  const Notes = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/NotesForm">
        <div className=" border-2  rounded-lg w-[300px] mt-5 space-y-3 h-[260px] flex justify-center items-center bg-white absolute left-32">
          <button className="bg-gray-800 space-x-5 text-white h-10 w-10 rounded-full flex items-center p-1 active:bg-gray-600 duration-100">
            <span> {<AiOutlinePlus size={30} />}</span>
          </button>
        </div>
      </Link>

      <div className="grid grid-cols-3  gap-1 mx-32 pb-8 my-24">
        {Notes.map((note, index) => {
          const handleDelet = () => {
            dispatch(deletNotes({ id: note.id }));
          };

          return (
            <div
              key={index}
              className={`border-2 rounded-lg w-[300px] mt-5 space-y-3 h-[250px] px-2  shadow-inner ${Notes[0].color} `}
            >
              <div className="space-x-2 mt-2 flex items-end justify-end px-2 ">
                <button
                  onClick={handleDelet}
                  className="bg-gray-800 text-white w-8 rounded-full px-3 py-2 pl-2 active:bg-gray-600 duration-100"
                >
                  <AiOutlineDelete size={15} />
                </button>
                <Link
                  to={`/Edit/${note.id}`}
                  className="bg-gray-800 text-white w-8 rounded-full px-3 py-2 pl-2 active:bg-gray-600 duration-100"
                >
                  <AiOutlineEdit size={15} />
                </Link>
              </div>
              <div className={`space-y-1 font-serif px-2 ${note.color}`}>
                <h1 className="font-semibold text-gray-700 text-[1.7rem] capitalize line-clamp-1">
                  {note.title}
                </h1>
                <h3 className="font-semibold text-gray-700 text-[1rem] capitalize line-clamp-2">
                  {note.subtitle}
                </h3>
                <p className="text-gray-900 line-clamp-4">{note.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notescontent;
