
<h1 align="center"/>📜TCGenie</h1>
<p align="center">
Accelerating Student Certificate Issuance with Automation
</p>
<br/><br/>

This project aims to digitize and automate the process of generating certificates like transfer certificates (TC) and conduct certificates (CC) for students in educational institutions.

Many schools and colleges currently maintain student records manually on paper, making it tedious and time-consuming to search through documents when certificates are requested. This website will allow institutions to store student information in a database online.

#### Key features

- Admin dashboard to manage student records, class/section details
- Searchable database to quickly lookup student information
- Auto-generate TC and CC in standard formats with student details populated
- Print or download certificates in PDF format
- Track certificate requests and generation status
- Secure access control for admin users

This project will benefit educational institutions by reducing paperwork, improving efficiency and making the TC/CC issuance process faster and more convenient. Institutions can maintain digital records that are easily accessible, securely stored and can be utilized for automation.

> **Warning**
> This app is a work in progress. I'm building this in public.
<!-- > See the roadmap below. -->

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js 13 and server components.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- ORM using **Prisma**
- Database on **PlanetScale**
- UI Components built using **Radix UI**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [MIT license](https://github.com/amjed-ali-k/tc-issuer/blob/main/LICENSE.md).
