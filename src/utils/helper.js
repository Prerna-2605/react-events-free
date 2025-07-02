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

import profile2 from '../assets/svg/profile2.svg'
import profile3 from '../assets/svg/profile3.svg'
import profile4 from '../assets/svg/profile4.svg'

import guitar from '../assets/svg/guitar.svg'
import ticket from '../assets/svg/ticket.svg'

import grid1 from '../assets/webp/grid1.webp'
import grid2 from '../assets/webp/grid2.webp'
import grid3 from '../assets/webp/grid3.webp'
import grid4 from '../assets/webp/grid4.webp'
import grid5 from '../assets/webp/grid5.webp'
import grid6 from '../assets/webp/grid6.webp'

import profile5 from '../assets/svg/profile5.svg'
import profile6 from '../assets/svg/profile6.svg'
import profile7 from '../assets/svg/profile7.svg'
import profile8 from '../assets/svg/profile8.svg'

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
];

export const Username = [
    {
        name: "Username",
        postname: "Post event name",
        title: "Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.",
        description1: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        description2: "Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",

    },
];

export const Post_Data = [
    {
        profile: profile2,
        name: "Username",
        comment: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        delete: "Remove Comment",

    },
    {
        profile: profile3,
        name: "Username",
        comment: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
        delete: "Remove Comment",
    },
    {
        profile: profile4,
        name: "Username",
        comment: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
        delete: "Remove Comment",
    },
];

export const Username_Hero = [
    {
        icon: date,
        data: '10/02/2022',
    },
    {
        icon: location,
        data: 'Mumbai',
    },
    {
        icon: people,
        data: '1,080',
    },
    {
        icon: guitar,
        data: '1,080',
    },
    {
        icon: ticket,
        data: '1,080',
    },

];

export const Grid = [
    {
        img: grid1,
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        img: grid2,
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        img: grid3,
        colSpan: "col-span-1",
        rowSpan: "row-span-2"
    },
    {
        img: grid4,
        colSpan: "col-span-2",
        rowSpan: "row-span-1"
    },
    {
        img: grid5,
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        img: grid6,
        colSpan: "col-span-2",
        rowSpan: "row-span-1"
    }
];

export const Tell_Us = [
    {
        profile: profile2,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    },
    {
        profile: profile3,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.',
    },
    {
        profile: profile4,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    },
    {
        profile: profile5,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    },
    {
        profile: profile6,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    },
    {
        profile: profile7,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',
    },
    {
        profile: profile8,
        name: 'Username',
        comment: 'Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.',

    },
]