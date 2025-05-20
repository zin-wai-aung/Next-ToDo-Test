"use client"
import React, { useActionState } from 'react'
import createTask from '@/actions/createTask'

const CreateForm = () => {

     const [state, formAction, isPending] = useActionState(createTask);
 
  return (
    <form action={formAction}>
      <div className=" flex justify-center items-center mt-5">
        <input
          name="title"
          type="text"
          className=" grow border border-teal-600 px-3 py-2"
        />
        <button disabled={isPending} className=" border border-teal-600  bg-teal-600 px-3 py-2 text-white cursor-pointer disabled:opacity-50">
          {isPending ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
}

export default CreateForm