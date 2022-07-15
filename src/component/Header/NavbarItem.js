export const Nav_items = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        resClass: "menu-item",
        cName: "chlid",
        subItem: false,

    },
    {
        id: 2,
        title: "About us",
        path: "/about_us",
        resClass: "menu-item",
        cName: "chlid",
        resSubMenu: "dl-submenu",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Overview",
                path: "/overview",
                cName: "chlid",
            },
            {
                id: 2,
                title: "Board trustees",
                path: "/board_trustee",
                cName: "chlid",
            },
            {
                id: 3,
                title: "Leadership",
                path: "/leadership",
                cName: "chlid",
            },
        ]
    },
    {
        id: 3,
        title: "Activities",
        path: "/activities",
        resClass: "menu-item",
        cName: "chlid",
        resSubMenu: "dl-submenu",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Permanent Acitvity",
                path: "/permanent",
                cName: "chlid",

            },
            {
                id: 2,
                title: "Other Activity",
                path: "/other",
                cName: "chlid",

            },
        ]
    },
    {
        id: 4,
        title: "Blog",
        path: "/blog",
        resClass: "menu-item",
        cName: "chlid",
        resSubMenu: "dl-submenu",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Blog",
                path: "/blog",
                cName: "sub_nav_item",
            },
            {
                id: 2,
                title: "Stories",
                path: "/stories",
                cName: "chlid",
            },
        ]
    },
    {
        id: 5,
        title: "Media",
        path: "/media",
        resClass: "menu-item",
        cName: "chlid",
        resSubMenu: "dl-submenu",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Media coverage",
                path: "/media_coverage",
            },
            {
                id: 2,
                title: "Events",
                path: "/events",
            },
        ]
    },
    {
        id: 6,
        title: "Career",
        path: "/career",
        resClass: "menu-item",
        cName: "chlid",
        resSubMenu: "dl-submenu",
        subItem: false,
    },
    {
        id: 7,
        title: "Contact us",
        path: "/contact_us",
        cName: "chlid",
        resClass: "menu-item",
        resSubMenu: "dl-submenu",
        subItem: false,
    },
];



