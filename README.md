# svelte-atdd-vitest-playwright
A template for Acceptance-Test-Driven Development with Sveltekit (opinionated, skip/remove whatever you don't like).

## Instructions

- You *must* be using Linux or WSL2
- Install PNPM: `wget -qO- https://get.pnpm.io/install.sh | sh -`
- Install Docker
- Install VSCode
- Install VSCode extensions: Cucumber, Headwind, Jest-cucumber code generator, Rome, Svelte for VS Code, Svelte Intellisense and Tailwind CSS IntelliSense
- Go to VSCode settings, type "Formatter" in the search input and change the Default Formatter to Rome
- Restart VSCode
- Run `pnpm i` on the project root to install all dependencies
- Run Postgres locally using Docker: `docker run --name postgres -e POSTGRES_PASSWORD=test -p 5432:5432 -d postgres:13`
- Enter the Postgres instance terminal: `docker exec -it postgres bash` 
- Now execute the following commands:
  - `createdb onepay --owner=postgres -U postgres`
  - `createdb onepay_shadow --owner=postgres -U postgres`
- Install globally graphile-migrate: `pnpm add -g graphile-migrate`
- Update the newly created database to the most recent state: `pnpm -w run reset:testdb`
- Run `pnpm run -r build` to build this SvelteKit sample
- Run the test suite with `pnpm run test`, you will see the reset DB routine + Vitest + jest-cucumber + Playwright

## Notes

- Features are in packages/dash/features
- There is a simple DB schema in migrations/initial_schema.sql
- When looking at the tests implementation, you might wonder why we are uppercasing the ATDD vars returned by `test`. That's solely for the Cucumber VSCode extension to "glue" the test with its feature so you use "Go to Definition" and see which steps are not implemented yet
