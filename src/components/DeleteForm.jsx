"use client"
import deleteTask from '@/actions/deleteTask';
import React, { useActionState } from 'react'

const DeleteForm = ({ id }) => {
     
     const [state, fromAction, isPending] = useActionState(deleteTask);

  return (
    <form action={fromAction}>
      <input type="hidden" name="id" value={id} />
      <button disabled={isPending} className=" text-red-600 underline disabled:opacity-50">
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}

export default DeleteForm