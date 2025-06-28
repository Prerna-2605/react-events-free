import { BLUE_DATE, BLUE_LOCATION, BLUE_PEOPLE, FACEBOOK, INSTA, TWITTER } from "./Icons";

import gallery1 from '../assets/png/gallery1.png'
import gallery2 from '../assets/png/gallery2.png'
import gallery3 from '../assets/png/gallery3.png'
import gallery4 from '../assets/png/gallery4.png'
import gallery5 from '../assets/png/gallery5.png'
import gallery6 from '../assets/png/gallery6.png'

import sharing from '../assets/svg/sharing.svg'
import info from '../assets/svg/info.svg'
import help from '../assets/svg/help.svg'

export const icons = [
    {
        icon: INSTA,
        link: "https://www.instagram.com/",
    },
    {
        icon: FACEBOOK,
        link: "https://www.facebook.com/",
    },
    {
        icon: TWITTER,
        link: "https://x.com/?lang=en",
    },
];

export const footer = [
    {
        title: "SERVICES",
        list: ["About", "News", "ullamcorper", "Contact"],
    },
    {
        title: "EVENTS",
        list: ["ullamcorper", "ullamcorper", "ullamcorper", "ullamcorper"],
    },
];

export const gallery = [
    {
        title: "GALLERY",
        image: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    },
];

export const navbar = [
    {
        link: "home",
    },
    {
        link: "events",
    },
    {
        link: "feed",
    },
    {
        link: "user name",
    },
];

export const bluebox = [
    {
        icon: BLUE_LOCATION,
        head: "Location",
        subhead: "Search by city",
    },
    {
        icon: BLUE_DATE,
        head: "Date",
        subhead: "09/23/2021",
    },
    {
        icon: BLUE_PEOPLE,
        head: "Capacity",
        subhead: "Search by city",
    },
];

export const special = [
    {
        icon: sharing,
        head: "sharing",
        subhead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
    },
    {
        icon: info,
        head: "info",
        subhead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
    },
    {
        icon: help,
        head: "help",
        subhead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in ",
    },
];