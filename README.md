# GotPop System

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Lint](https://github.com/gotpop/system/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/lint.yml) [![Format Check](https://github.com/gotpop/system/actions/workflows/format-check.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/format-check.yml) [![Type Check](https://github.com/gotpop/system/actions/workflows/type-check.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/type-check.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9eca32bb-43ad-4899-8f77-4448f7d15c12/deploy-status)](https://app.netlify.com/projects/gotpop-system/deploys)

Design system monorepo for gotpop projects with TypeScript-first distribution via GitHub Packages (Public)

🚀 **Live Storybook**: [system.gotpop.io](https://system.gotpop.io)  
📦 **Component Library**: TypeScript-first design system with Storyblok integration

## 📦 Published Package

**[@gotpop/system](https://github.com/gotpop/gotpop-system/pkgs/npm/system)** - Available on GitHub Packages (Public)

```bash
# Configure .npmrc to use GitHub Packages for @gotpop scope
echo "@gotpop:registry=https://npm.pkg.github.com" >> .npmrc

# Install via npm
npm install @gotpop/system

# Or via yarn
yarn add @gotpop/system
```

## Quick Start

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build all packages
yarn build

# Lint all packages
yarn lint
```

## Structure

- `packages/system` - **Main package published to JSR** 🚀
- `apps/storybook` - Component documentation

## Development

See individual package READMEs for specific development instructions.

## Publishing

The main package is published to **GitHub Packages** as a public package:

### Manual Publishing

```bash
# From root directory
yarn publish:github

# Or from packages/system directory
cd packages/system
npm publish
```

### Automated Publishing

Publishing happens automatically via GitHub Actions when:
- Changes are pushed to `master` branch in `packages/system/`
- Version is auto-incremented (patch version)
- Package is published to GitHub Packages after successful type checking

### GitHub Packages Features

- **Public registry**: Open-source package distribution via GitHub
- **GitHub integration**: Seamless authentication with GitHub tokens
- **Version management**: Full npm-compatible versioning
- **TypeScript support**: Full TypeScript support with type definitions

Visit [@gotpop/system on GitHub Packages](https://github.com/gotpop/gotpop-system/pkgs/npm/system) for the published package.