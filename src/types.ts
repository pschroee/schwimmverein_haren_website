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
