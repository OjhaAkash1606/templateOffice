export const Nav_items = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        resClass: "menu-item",
        subItem: false,

    },
    {
        id: 2,
        title: "About us",
        path: "/about_us",
        resClass: "menu-item",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Overview",
                path: "/overview",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
            {
                id: 2,
                title: "Board trustees",
                path: "/board_trustee",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
            {
                id: 3,
                title: "Leadership",
                path: "/leadership",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
        ]
    },
    {
        id: 3,
        title: "Activities",
        path: "/activities",
        resClass: "menu-item",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Permanent Acitvity",
                path: "/permanent",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
            {
                id: 2,
                title: "Other Activity",
                path: "/other",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
        ]
    },
    {
        id: 4,
        title: "Blog",
        path: "/blog",
        resClass: "menu-item",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Blog",
                path: "/blog",
                cName: "sub_nav_item",
                resSubMenu: "dl-submenu",
            },
            {
                id: 2,
                title: "Stories",
                path: "/stories",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
        ]
    },
    {
        id: 5,
        title: "Media",
        path: "/media",
        resClass: "menu-item",
        subItem: true,
        subnav: [
            {
                id: 1,
                title: "Media coverage",
                path: "/media_coverage",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
            {
                id: 2,
                title: "Events",
                path: "/events",
                cName: "chlid",
                resSubMenu: "dl-submenu",
            },
        ]
    },
    {
        id: 6,
        title: "Career",
        path: "/career",
        resClass: "menu-item",
        subItem: false,
    },
    {
        id: 7,
        title: "Contact us",
        path: "/contact_us",
        resClass: "menu-item",
        subItem: false,
    },
];



