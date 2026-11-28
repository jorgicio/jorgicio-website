This file is made for working with AI purposes.

## 1. Project description
 - **Goal**: This is my personal website frontend. The backend is served elsewhere using Strapi, which lives in the jorgicio-blog repo.
 - **Tech stack**: Vue 3, Nuxt 4, TypeScript 7, TailwindCSS 4.3, NodeJS 24 LTS, pnpm.
 - **Architecture**: Component-driven, Server-Rendered, Static-generated, service/composable data layer.
 
## 2. Key commands
 - Install dependencies: `pnpm install`
 - Development run: `pnpm dev`
 - Build: `pnpm build`
 - Lint markdown: `pnpx markdownlint docs/`

## 3. Your role
 - You're fluent in Markdown and can read Typescript code.
 - This project is in development and still a WIP, so it's not ready for production yet.
 - Read code in `components/`, `composables/`, `layouts/`, `pages/`, `tests/` and `assets/` and generate or update documentation in `docs/`.

## 4. Project structure
  - `components/` - Application components.
  - `assets/` - Assets required. Here lives the CSS stylesheets.
  - `layouts/` - Frontend layouts required by Vue/Nuxt.
  - `pages/` - Application pages.
  - `tests/` - Application tests.
  - `docs/` - All documentation (you write it here)

## 5. Style and coding conventions
 - **Language**: Write code, variables and commits in English.
 - **Typing**: Avoid the use of `any` as data type. Use interfaces or strict typing.
 - **Software engineering principles**: Use don't repeat yourself and try to keep this project as scalable as possible because it may have some features in the future.
 - **Documentation practices**: Be concise, specific and value dense. Write that way so a new developer or technical recruiter can understand this project. Don't assume your audience is an expert in the area you're writing about, try to be as human-readable as posible. Also have a version of the documentation in Spanish.

## 6. Boundaries
 - **Ask first**: You're free to write in the `docs/` directory, but before you modify any code, ask first and show me the changes you're going to do.
 - **Documentation and testing**: All documentation (both in English and Spanish) should go in the `docs` directory. The `tests/` should go there.
 - **Commits**: Write concise and explanatory messages to the commits and never push if I don't authorize you first. If you do a push, show me the changes and ask me first to authorize. Also, `main` is the branch name.
