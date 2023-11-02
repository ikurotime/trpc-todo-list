'use server'
import { serverClient } from '../_trpc/serverClient'
import { revalidatePath } from 'next/cache'
import DeleteButton from './DeleteButton'

const getPosts = async () => await serverClient.getPosts()
export default async function Posts({
  deletePost
}: {
  deletePost: (formData: FormData) => Promise<void>
}) {
  const posts = await getPosts()
  return (
    <ul className='flex flex-col gap-3 w-full max-w-sm'>
      {posts.map((n) => (
        <li
          className='flex justify-between text-xl border-b-2 py-2 border-[#7d7d7d] w-full'
          key={n.content}
        >
          {n.content}
          <DeleteButton deletePost={deletePost} id={n.id} />
        </li>
      ))}
    </ul>
  )
}
