export type NavItem = {
  title: string
  href: string
  external?: boolean
  subnav?: NavItem[]
}

export type NavItems = NavItem[]

export type SocialLinks = {
  facebook: string
  instagram: string
}

export type SingleInternalNews = {
  active: boolean
  title: string
  body: string
  href?: string
}

export type SidebarItem = {
  title: string
  active: boolean
  image: string
  href: string
  external: boolean
}

export type AccordionItem = {
  title: string
  text: string
}

export type FileTypeIcon = "excel" | "pdf" | "word" | "zip" | "image"
