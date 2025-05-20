"use server";
import React from "react";
import DeleteForm from "./DeleteForm";

const TaskList = ({ task: { id, title, completed } }) => {
  
  return (
    <div className=" w-full border border-teal-600 my-3 p-2 flex justify-between items-center">
      <p className=""> {title} </p>
      <DeleteForm id={id} />
    </div> 
  );
};

export default TaskList;
