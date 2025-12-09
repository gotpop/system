# GotPop Component System

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Lint](https://github.com/gotpop/system/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/lint.yml) [![Format Check](https://github.com/gotpop/system/actions/workflows/format-check.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/format-check.yml) [![Type Check](https://github.com/gotpop/system/actions/workflows/type-check.yml/badge.svg?branch=main)](https://github.com/gotpop/system/actions/workflows/type-check.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9eca32bb-43ad-4899-8f77-4448f7d15c12/deploy-status)](https://app.netlify.com/projects/gotpop-system/deploys)

## A component system monorepo featuring:

- Published React Server Component packages for design system distribution
- Storyblok integration utilities with HOC patterns for routing and API data fetching

The `app` dir contains a Storybook 8.4+ instance with React Server Components runtime support.

<details>
<summary><strong>View Technical Diagram</strong></summary>

### Project architecture

<div align="center">
  <img src="https://a.storyblok.com/f/287776322113402/675x661/5d49e34351/architecture.png" alt="System Architecture" />
</div>
</details>

<details open>
<summary><strong>View Architecture Overview</strong></summary>

## 📦 Packages & Apps

| Type | Name | Description | Published |
|------|------|-------------|-----------|
| **Package** | [`@gotpop/system`](https://github.com/gotpop/gotpop-system/pkgs/npm/system) | React design system components for gotpop | ✅ GitHub Packages |
| **Package** | [`@gotpop/storyblok`](https://github.com/gotpop/gotpop-system/pkgs/npm/storyblok) | Storyblok integration utilities and components | ✅ GitHub Packages |
| **App** | `storybook` | Storybook documentation for design system | 🌐 [system.gotpop.io](https://system.gotpop.io) |
