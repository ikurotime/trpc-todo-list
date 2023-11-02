import { string, z } from 'zod'

import { publicProcedure, router } from './trpc'
import { prisma } from '../../prisma/prismaClient'

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await prisma.todo.findMany()
  }),
  deletePost: publicProcedure
    .input(
      z.object({
        id: string()
      })
    )
    .mutation(async ({ input }) => {
      console.log(input.id)
      await prisma.todo.delete({
        where: {
          id: input.id
        }
      })
    }),
  setTodo: publicProcedure
    .input(
      z.object({
        content: z.string()
      })
    )
    .mutation(async ({ input }) => {
      // Add things
      const res = await prisma.todo.create({ data: { content: input.content } })
      return { res: 'created: ' + res.id }
    })
})
// This type will be used as a reference later...
export type AppRouter = typeof appRouter
