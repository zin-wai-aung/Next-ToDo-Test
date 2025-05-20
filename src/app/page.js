import React, { lazy, Suspense } from 'react'
const TaskListsGroup =lazy (() => import("@/components/TaskListsGroup"));
import CreateForm from '@/components/CreateForm'
import Spinner from "@/components/Spinner"
const Page = () => {
  return (
    <section className=' m-10 p-10 w-[30rem]'>
      <h1 className=' text-2xl font-bold'> TODO APP</h1>
      <CreateForm />
      <Suspense fallback={<Spinner/>}>

      <TaskListsGroup/>
      </Suspense>
    </section>
  )
}

export default Page