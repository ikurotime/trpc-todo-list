'use client'

export default function Form({
  addPost
}: {
  addPost: (formData: FormData) => Promise<void>
}) {
  return (
    <form action={addPost}>
      <div className='flex w-full'>
        <input className='p-2 w-64' type='text' name='postInfo' />
        <button className='bg-orange-400  w-24 '>Add</button>
      </div>
    </form>
  )
}
