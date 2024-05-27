export type MenuInfo = {
  date: Date;
  menus: MenuItem[];
};

export type MenuItem = {
  menu: string[];
  time: [string, string][];
};
