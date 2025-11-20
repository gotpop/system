import type {
  ConfigStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"

export const mockConfig: ConfigStoryblok = {
  _uid: "config-1",
  component: "Config",
  app_name: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  root_name_space: "blog",
  primary_content_name_space: "blog",
}

export const mockTextOnlyNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-text-1",
  component: "nav_item_default",
  text: "Lorem",
  type: "text",
  link: {
    cached_url: "/about",
    linktype: "story",
  },
}

export const mockIconTextNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-both-1",
  component: "nav_item_default",
  text: "Dolor",
  icon: "dashboard",
  type: "icon-text",
  link: {
    cached_url: "/dashboard",
    linktype: "story",
  },
}

export const mockExternalNavItem: NavItemDefaultStoryblok = {
  _uid: "nav-item-external-1",
  component: "nav_item_default",
  text: "Consectetur",
  icon: "github",
  type: "external",
  link: {
    url: "https://github.com",
    linktype: "url",
    target: "_blank",
  },
}
