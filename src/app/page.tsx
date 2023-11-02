import { revalidatePath } from 'next/cache'
import { serverClient } from './_trpc/serverClient'
import Form from './components/Form'
import Posts from './components/Posts'

const addPost = async (formData: FormData) => {
  'use server'
  try {
    await serverClient.setTodo({
      content: formData.get('postInfo')?.toString() ?? ''
    })
    revalidatePath('/')
  } catch (error) {
    throw Error('An error has ocurred')
  } finally {
    console.log('Post created')
  }
}
const deletePost = async (formData: FormData) => {
  'use server'
  await serverClient.deletePost({ id: formData.get('id')?.toString() || '' })
  revalidatePath('/')
}
export default async function Home() {
  return (
    <main className='flex w-full justify-center'>
      <div className='flex flex-col justify-center gap-8 w-full items-center m-auto p-5 '>
        <h1 className='text-3xl'>To do - Next 14 - Prisma - tRCP</h1>
        <Form addPost={addPost} />
        <Posts deletePost={deletePost} />
      </div>
    </main>
  )
}
