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

import participants from '../assets/svg/participants.svg'
import topics from '../assets/svg/topics.svg'
import speakers from '../assets/svg/speakers.svg'
import awards from '../assets/svg/awards.svg'

import explore_card1 from '../assets/png/explore-card1.png'
import explore_card2 from '../assets/png/explore-card2.png'

import date from '../assets/svg/date.svg'
import location from '../assets/svg/location.svg'
import people from '../assets/svg/people.svg'
import concert from '../assets/webp/concert.webp'

import followingcardimg1 from '../assets/webp/following1.webp'
import followingcardimg2 from '../assets/webp/following2.webp'

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
    }
];

export const footer = [
    {
        title: "SERVICES",
        list: ["About", "News", "ullamcorper", "Contact"],
    },
    {
        title: "EVENTS",
        list: ["ullamcorper", "ullamcorper", "ullamcorper", "ullamcorper"],
    }
];

export const gallery = [
    {
        title: "GALLERY",
        image: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
    }
];

export const navbar = [
    {
        name: "home",
        link: "home",
    },
    {
        name: "events",
        link: "events",
    },
    {
        name: "feed",
        link: "feed",
    },
    {
        name: "user name",
        link: "username",
    }
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
    }
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
    }
];

export const bluesection = [
    {
        icon: participants,
        head: "8800",
        subhead: "participants",
    },
    {
        icon: topics,
        head: "300",
        subhead: "topics",
    },
    {
        icon: speakers,
        head: "50",
        subhead: "speakers",
    },
    {
        icon: awards,
        head: "30",
        subhead: "awards",
    }
];

export const explore = [
    {
        image: explore_card1,
    },
    {
        image: explore_card2,
    }
];

export const Events = Array(9).fill(
    {
        image: concert,
        title: "Lorem ipsum dolar sit de",
        details: [
            {
                svg: date,
                text: "10/02/2022",
            },
            {
                svg: location,
                text: "Mumbai",
            },
            {
                svg: people,
                text: "1,080",
            },
        ]
    }
);

export const following = [
    {
        image: followingcardimg1,
    },
    {
        image: followingcardimg2,
    }
]