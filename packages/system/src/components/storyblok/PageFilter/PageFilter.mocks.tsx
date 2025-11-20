import type { PostProps, TagDatasourceEntry } from "../../../types"
import type {
  CardsStoryblok,
  ConfigStoryblok,
  HeroDefaultStoryblok,
  PageFilterStoryblok,
} from "../../../types/storyblok-components"
import { Cards } from "../Cards"
import { HeroDefault } from "../HeroDefault"

// Mock posts data (similar to CardsFilterClient mocks)
export const mockFilterPosts: PostProps[] = [
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
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
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
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
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
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      published_date: "2024-03-05T16:45:00Z",
      tags: ["excepteur", "cupidatat", "proident"],
      view_transition_name: "post-4",
    },
  },
]

export const mockFilterTags: TagDatasourceEntry[] = [
  { id: 1, name: "Lorem", value: "lorem" },
  { id: 2, name: "Ipsum", value: "ipsum" },
  { id: 3, name: "Dolor", value: "dolor" },
  { id: 4, name: "Veniam", value: "veniam" },
  { id: 5, name: "Laboris", value: "laboris" },
  { id: 6, name: "Irure", value: "irure" },
  { id: 7, name: "Excepteur", value: "excepteur" },
]

// Mock content blocks
export const mockFilterHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-filter-1",
  component: "hero_default",
  heading: "Lorem Ipsum Dolor Sit",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
      },
    ],
  },
}

export const mockCardsWithFilter: CardsStoryblok = {
  _uid: "cards-filter-1",
  component: "cards",
  heading: "Ut Enim Ad Minim",
  subheading: "Quis nostrud exercitation ullamco",
  use_filters: true,
}

export const mockCardsWithoutFilter: CardsStoryblok = {
  _uid: "cards-simple-1",
  component: "cards",
  heading: "Duis Aute Irure",
  subheading: "Dolor in reprehenderit in voluptate",
  use_filters: false,
}

export const mockCardsMinimal: CardsStoryblok = {
  _uid: "cards-minimal-1",
  component: "cards",
  heading: "Excepteur Sint",
  use_filters: false,
}

// Mock page configurations
export const mockFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-1",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockFilterHeroBlock, mockCardsWithFilter],
}

export const mockSimpleFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-2",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockFilterHeroBlock, mockCardsWithoutFilter],
}

export const mockMinimalFilterPageBlok: PageFilterStoryblok = {
  _uid: "page-filter-3",
  component: "page_filter",
  header: "header-1",
  footer: "footer-1",
  body: [mockCardsMinimal],
}

// Mock config
export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

// Mock simple header/footer (reusing from PageDefault)
export const mockSimpleHeader = (
  <header
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "4rem",
    }}
  ></header>
)

export const mockSimpleFooter = (
  <footer
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "10rem",
    }}
  ></footer>
)

// Mock page content blocks
export const mockFilterPageBlocks = (
  <>
    <HeroDefault blok={mockFilterHeroBlock} />
    <Cards
      blok={mockCardsWithFilter}
      posts={mockFilterPosts}
      availableTags={mockFilterTags}
      config={mockConfig}
    />
  </>
)

export const mockSimpleFilterPageBlocks = (
  <>
    <HeroDefault blok={mockFilterHeroBlock} />
    <Cards
      blok={mockCardsWithoutFilter}
      posts={mockFilterPosts}
      availableTags={mockFilterTags}
      config={mockConfig}
    />
  </>
)

export const mockMinimalFilterPageBlocks = (
  <>
    <Cards
      blok={mockCardsMinimal}
      posts={mockFilterPosts.slice(0, 2)} // Only 2 posts for minimal
      availableTags={mockFilterTags.slice(0, 3)} // Only 3 tags
      config={mockConfig}
    />
  </>
)
