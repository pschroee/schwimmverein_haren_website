import { NavItems, SocialLinks, SingelAnkuendigung, SidebarItem } from "./types"
import homepageSidebarJson from "./data/homepage-sidebar.json"
import homepageAnkuendigungenJson from "./data/homepage-ankuendigungen.json"

export const ankuendigungen: SingelAnkuendigung[] =
  homepageAnkuendigungenJson.ankuendigungen.filter((item) => item.active)

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
      { title: "Teenygruppe", href: "/breitensport/teenygruppe/" },
      {
        title: "Erwachsenenschwimmen",
        href: "/breitensport/erwachsenenschwimmen/",
      },
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
  {
    title: "Fotos",
    href: "http://galerie.schwimmverein-haren.de",
    external: true,
  },
]

export const SOCIALLINKS: SocialLinks = {
  facebook: "https://www.facebook.com/svharen/",
  instagram: "https://www.instagram.com/schwimmverein_haren_ev/",
}
