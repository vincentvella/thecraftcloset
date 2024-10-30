type Config = {
  title: string;
  footer: string;
  url: string;
  github: string;
};

export const config: Config = {
  title: "The Craft Closet",
  footer: "Made by Vellapps",
  url: "https://vellapps.com",
  github: "https://github.com/vincentvella",
};

type Item = {
  title: string;
  url: string;
};

export const items: Record<string, Item> = {
  tiktok: {
    title: "Tiktok",
    url: "https://www.tiktok.com/@thecraftcloset",
  },
  facebook: {
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61567371376441",
  },
  venmo: {
    title: "Venmo",
    url: "https://venmo.com/u/Mia-Vella",
  },
  paypal: {
    title: "Paypal",
    url: "https://www.paypal.com/qrcodes/p2pqrc/4Y9D2WF6MXR2N",
  },
};
