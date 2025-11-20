import type { ConfigStoryblok } from "../../../types/storyblok-components"
import type { PostProps } from "../Card/Card"
import type { TagDatasourceEntry } from "./CardsFilterClient"

export const mockPosts: PostProps[] = [
  {
    uuid: "post-1",
    full_slug: "blog/lorem-ipsum-dolor",
    name: "Lorem Ipsum Dolor",
    published_at: "2024-01-15T10:00:00Z",
    content: {
      _uid: "content-1",
      component: "page_post",
      Heading: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      published_date: "2024-01-15T10:00:00Z",
      tags: ["lorem", "ipsum", "dolor"],
      view_transition_name: "post-1",
    },
  },
  {
    uuid: "post-2",
    full_slug: "blog/ut-enim-ad-minim",
    name: "Ut Enim Ad Minim",
    published_at: "2024-02-20T14:30:00Z",
    content: {
      _uid: "content-2",
      component: "page_post",
      Heading: "Ut Enim Ad Minim",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      published_date: "2024-02-20T14:30:00Z",
      tags: ["veniam", "exercitation", "laboris"],
      view_transition_name: "post-2",
    },
  },
  {
    uuid: "post-3",
    full_slug: "blog/duis-aute-irure",
    name: "Duis Aute Irure",
    published_at: "2024-01-10T09:00:00Z",
    content: {
      _uid: "content-3",
      component: "page_post",
      Heading: "Duis Aute Irure",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      published_date: "2024-01-10T09:00:00Z",
      tags: ["irure", "reprehenderit", "voluptate"],
      view_transition_name: "post-3",
    },
  },
  {
    uuid: "post-4",
    full_slug: "blog/excepteur-sint-occaecat",
    name: "Excepteur Sint Occaecat",
    published_at: "2024-03-05T16:45:00Z",
    content: {
      _uid: "content-4",
      component: "page_post",
      Heading: "Excepteur Sint Occaecat",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      published_date: "2024-03-05T16:45:00Z",
      tags: ["excepteur", "cupidatat", "proident"],
      view_transition_name: "post-4",
    },
  },
]

export const mockTags: TagDatasourceEntry[] = [
  { id: 1, name: "Lorem", value: "lorem" },
  { id: 2, name: "Ipsum", value: "ipsum" },
  { id: 3, name: "Dolor", value: "dolor" },
  { id: 4, name: "Veniam", value: "veniam" },
  { id: 5, name: "Laboris", value: "laboris" },
  { id: 6, name: "Irure", value: "irure" },
]

export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  root_name_space: "blog",
}

export const additionalMockPosts: PostProps[] = [
  {
    uuid: "post-5",
    full_slug: "blog/sed-ut-perspiciatis",
    name: "Sed Ut Perspiciatis",
    published_at: "2024-04-12T11:20:00Z",
    content: {
      _uid: "content-5",
      component: "page_post",
      Heading: "Sed Ut Perspiciatis",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      published_date: "2024-04-12T11:20:00Z",
      tags: ["perspiciatis", "natus", "voluptatem"],
      view_transition_name: "post-5",
    },
  },
  {
    uuid: "post-6",
    full_slug: "blog/totam-rem-aperiam",
    name: "Totam Rem Aperiam",
    published_at: "2024-05-18T13:15:00Z",
    content: {
      _uid: "content-6",
      component: "page_post",
      Heading: "Totam Rem Aperiam",
      description:
        "Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi.",
      published_date: "2024-05-18T13:15:00Z",
      tags: ["totam", "aperiam", "veritatis"],
      view_transition_name: "post-6",
    },
  },
]

export const additionalMockTags: TagDatasourceEntry[] = [
  { id: 7, name: "Perspiciatis", value: "perspiciatis" },
  { id: 8, name: "Aperiam", value: "aperiam" },
  { id: 9, name: "Veritatis", value: "veritatis" },
]
