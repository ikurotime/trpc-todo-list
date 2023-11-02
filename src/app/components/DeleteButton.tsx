'use client'
type Props = {
  deletePost: (formData: FormData) => Promise<void>
  id: string
}
export default function DeleteButton({ deletePost, id }: Props) {
  return (
    <form action={deletePost}>
      <input type='text' hidden value={id} name='id' />
      <button className='bg-red-500 px-2 py-1'>Delete</button>
    </form>
  )
}
