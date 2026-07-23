# Project Guidelines

## Asset Rules

- Store images inside `src/assets/images/`
- Store small videos inside `src/assets/videos/`
- Store large videos inside `public/videos/`
- Never create `.asset.json` files.
- Never use hosted assets.
- Always use local project assets.

## Naming Convention

Use only

- lowercase
- hyphens
- descriptive names

Example

- taiwo-bello.jpg
- care-for-the-elderly.jpg
- community-outreach.mp4

## Coding Rules

- Keep components reusable.
- Remove duplicate imports.
- Remove unused imports.
- Keep TypeScript strict.
- Never duplicate code.
- Never introduce breaking changes.

## Deployment

Publishing should automatically

Lovable

↓

GitHub

↓

GitHub Actions

↓

GiddyHost

Never require manual FTP uploads.

## Build

The project must always build successfully using

bun run build

## Final Rule

Always use local assets.

Never generate `.asset.json` files.
