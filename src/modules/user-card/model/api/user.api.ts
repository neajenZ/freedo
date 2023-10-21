// хз какой бек там будет, но представим, что фетчим юзера тут

import picture from "src/assets/picture.svg";
import { UserResponse } from "../types/user-api.types";

export const fetchUser = (user: string): UserResponse => {
  const userData = {
    name: "Петр Иванов",
    date: "23.05, 23:15",
    views: 30,
    avatar: picture,
    payments: ["", "", "", "", ""],
    languages: ["1", "1", "1", "1", "1", "1"],
    contacts: ["@Harygoter", "@Harygoter", "@geter221"],
    skills: [
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
      "behance",
    ],
  };

  return user === "1"
    ? userData
    : {
        name: "Pedro Иванов",
        date: "23.05, 23:15",
        views: 30,
        avatar: picture,
        payments: ["", "", "", "", ""],
        languages: ["1", "1", "1", "1", "1", "1"],
        contacts: ["@Harygoter", "@Harygoter", "@geter221"],
        skills: [
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
          "behance",
        ],
      };
};
