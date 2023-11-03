### To Do list - tRCP 📝

## This project is an example of Next 14 using server actions, along with tRCP and Prisma ⭐️

First, create a .env with the database connection

```
DATABASE_URL="mysql://root:mypassword@localhost:3306/mydb"
```

Then, run the migrations:

```
npx prisma db push
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
