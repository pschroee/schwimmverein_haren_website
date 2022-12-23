import { NavItems, SocialLinks, SingleInternalNews, SidebarItem } from "./types"
import homepageSidebarJson from "./data/homepage-sidebar.json"
import homepageNewsJson from "./data/homepage-news.json"

export const internalNews: SingleInternalNews[] = homepageNewsJson.news.filter(
  (item) => item.active
)

export const sidebarItems: SidebarItem[] = homepageSidebarJson.sidebar

export const NAVITEMS: NavItems = [
  { title: "Home", href: "/" },
  // { title: "Google", href: "https://google.de", external: true },
  {
    title: "Über uns",
    href: "/ueber-uns/",
    subnav: [
      { title: "Ansprechpartner", href: "/ueber-uns/ansprechpartner/" },
      {
        title: "Trainer und Betreuer",
        href: "/ueber-uns/trainer-und-betreuer",
      },
      { title: "Mitgliedschaft", href: "/ueber-uns/mitgliedschaft/" },
      { title: "Vereinsmeister", href: "/ueber-uns/vereinsmeister/" },
      {
        title: "Protokolle Jahreshauptversammlung",
        href: "/ueber-uns/protokolle-jahreshauptversammlung/",
      },
      { title: "Satzung", href: "/ueber-uns/satzung/" },
      // { title: "Vereinsbekleidung", href: "/ueber-uns/vereinsbekleidung/" },
    ],
  },
  {
    title: "Breitensport",
    href: "/breitensport/",
    subnav: [
      { title: "Anfängerschwimmen", href: "/breitensport/anfaengerschwimmen/" },
      {
        title: "Intensivschwimmkurs",
        href: "/breitensport/intensivschwimmkurs",
      },
      { title: "Aquafitness", href: "/breitensport/aquafitness/" },
      { title: "Trainingstermine", href: "/breitensport/trainingstermine/" },
    ],
  },
  {
    title: "Wettkampfsport",
    href: "/wettkampfsport/",
    subnav: [
      { title: "1. Mannschaft", href: "/wettkampfsport/1-mannschaft/" },
      { title: "2. Mannschaft", href: "/wettkampfsport/2-mannschaft/" },
      { title: "3. Mannschaft", href: "/wettkampfsport/3-mannschaft/" },
      { title: "Trainingstermine", href: "/wettkampfsport/trainingstermine/" },
    ],
  },
  {
    title: "Fotos",
    href: "http://galerie.schwimmverein-haren.de",
    external: true,
  },
  {
    title: "24h Schwimmen",
    href: "/24h-schwimmen/",
    subnav: [
      { title: "Anmeldung", href: "/24h-schwimmen/anmeldung/" },
      { title: "2019", href: "/24h-schwimmen/2019/" },
      { title: "2017", href: "/24h-schwimmen/2017/" },
      { title: "2015", href: "/24h-schwimmen/2015/" },
      { title: "2013", href: "/24h-schwimmen/2013/" },
      { title: "2011", href: "/24h-schwimmen/2011/" },
      { title: "2009", href: "/24h-schwimmen/2009/" },
      { title: "2008", href: "/24h-schwimmen/2008/" },
      { title: "2007", href: "/24h-schwimmen/2007/" },
      { title: "2006", href: "/24h-schwimmen/2006/" },
      { title: "2005", href: "/24h-schwimmen/2005/" },
      { title: "2004", href: "/24h-schwimmen/2004/" },
    ],
  },
]

export const FOOTERITEMS: NavItems = [
  {
    title: "Impressum",
    href: "/impressum/",
  },
  {
    title: "Datenschutzerklärung",
    href: "/datenschutzerklärung/",
  },
  {
    title: "FAQ",
    href: "/faq/",
  },
  {
    title: "Kontakt",
    href: "/kontakt/",
  },
  {
    title: "Spenden",
    href: "/spenden/",
  },
  {
    title: "Downloads",
    href: "/downloads/",
  },
]

export const SOCIALLINKS: SocialLinks = {
  facebook: "https://www.facebook.com/svharen/",
  instagram: "https://www.instagram.com/schwimmverein_haren_ev/",
}
