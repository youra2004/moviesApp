import { createContext } from "react";

export const filmContext = [
  {
    id: "1",
    film: "Spider man",
    title: "Spider man: no way home",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIymEGGzoCY7lw56EHnF-hv_3fe7NO5gzn_hK_9foCwA1rkmZO",
    favourite: false,
    visible: true,
  },
  {
    id: "2",
    film: "Harry Potter",
    title: "Harry Potter and the philosopher's stone",
    description:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world..",
    img: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
    favourite: false,
    visible: true,
  },
  {
    id: "3",
    film: "Forage",
    title: "Forage: Bandits",
    description:
      "boatman - a drug lord from Rio, makes a common mistake: orders his henchmen to chase, and then follows them into danger",
    img: "https://uafilm.tv/uploads/mini/fullstory/90/158135411958_los_bandoleros.webp",
    favourite: false,
    visible: true,
  },
  {
    id: "4",
    film: "Batman",
    title: "Batman 2022",
    description:
      "boatman - a drug lord from Rio, makes a common mistake: orders his henchmen to chase, and then follows them into danger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqtNgPuLiYRJvslYEJFl2ckHhSiJ50wxunXIRmZl91KxPDacJ",
    favourite: false,
    visible: true,
  },
];

export const ThemContext = createContext(filmContext);
