import { InstagramIcon } from "@/svgComponents/instagram";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

export type UserData = {
  socialMediaName: string;
  icon: React.ReactNode;
  color: string;
  username: string;
  followers?: number | string;
  subscribers?: number | string;
  todayFollowers?: number;
  todaySubscribers?: number;
};

export interface OverviewDataType {
  type: string;
  count: number;
  percentage: number;
  icon: string;
}

const colors = {
  "facebook-blue": "hsl(208, 92%, 53%)",
  "twitter-blue": "hsl(203, 89%, 53%)",
  "youtube-red": "hsl(348, 97%, 39%)",
  "instagram-gradient":
    "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
};

export const data: UserData[] = [
  {
    socialMediaName: "facebook",
    icon: <AiFillFacebook />,
    username: "@nathanf",
    followers: 1987,
    todayFollowers: 12,
    color: colors["facebook-blue"],
  },
  {
    socialMediaName: "twitter",
    icon: <AiOutlineTwitter />,
    username: "@nathanf",
    followers: 1044,
    todayFollowers: 99,
    color: colors["twitter-blue"],
  },
  {
    socialMediaName: "instagram",
    icon: <InstagramIcon />,
    username: "@realnathanf",
    followers: "11K",
    todayFollowers: 1099,
    color: colors["instagram-gradient"],
  },
  {
    socialMediaName: "youtube",
    icon: <AiOutlineYoutube />,
    username: "Nathan F.",
    subscribers: 8239,
    todaySubscribers: -144,
    color: colors["youtube-red"],
  },
];

const OverviewData: OverviewDataType[] = [
  {
    type: "Page Views",
    count: 87,
    percentage: 3,
    icon: "<Twitter/>",
  },
  {
    type: "Likes",
    count: 52,
    percentage: 2,
    icon: "<Twitter/>",
  },
  {
    type: "Likes",
    count: 5462,
    percentage: 2257,
    icon: "<Twitter/>",
  },
  {
    type: "Profile Views",
    count: 52000,
    percentage: 1375,
    icon: "<Twitter/>",
  },
  {
    type: "Retweets",
    count: 117,
    percentage: 303,
    icon: "<Twitter/>",
  },
  {
    type: "Likes",
    count: 507,
    percentage: 553,
    icon: "<Twitter/>",
  },
  {
    type: "Likes",
    count: 107,
    percentage: 19,
    icon: "<Twitter/>",
  },
  {
    type: "Total Views",
    count: 1407,
    percentage: 12,
    icon: "<Twitter/>",
  },
];
