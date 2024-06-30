export type NavItem = {
    name: string;
    icon: string;
    url: string;
};

export const NAV_ITEMS: NavItem[] = [
    {
        name: 'Home',
        icon: '/icons/btn/home.svg',
        url: '/',
    },
    {
        name: 'Settings',
        icon: '/icons/btn/settings.svg',
        url: '/settings',
    },
    {
        name: 'Help',
        icon: '/icons/btn/help.svg',
        url: '/help',
    },
];
