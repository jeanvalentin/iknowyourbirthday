## Happy birthday!

Oh you remembered my birthday, that's so nice of you! How?

Well I remember your birthday because you're important to me, and definitely not because some app told me it was your birthday this morning.

## How it works

Live with my own data: https://iknowyourbirthday.surge.sh/

The page displays the date and everyone whose birthday is today. Now you can wish them a happy birthday when you see them, because you totally remember it is their birthday.

## Build your own

- Clone the repo
- Install dependencies: `npm i`
- Generate prisma client: `npx prisma generate`
- Create the database: `npx prisma db push`
- Fill the SQLite database located at `prisma/birthdays.db` with your data. An entry has a name, a day, a month, and maybe a year.
- Generate a JSON dump to be imported by the application: `npm dump`
- See the results: `npm run dev`

If you wish to host it online, you may use `npm deploy` after changing whatever URL is configured for surge in `package.json`. Or you can do something else entirely, your call.
