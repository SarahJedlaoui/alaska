import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "ALASKA KENAI ADVENTURES LODGE",
    paragraph:
      "Alaska Kenai Adventures welcomes you with newly updated rooms. ",
    image: "/images/blog/lodge.jpeg",
    author: {
      name: "Maher Khelifi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Accommodation"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Adventures – Salmon Fishing",
    paragraph:
      "Sockeye salmon are of the highest quality of salmon available. Kenai River sockeye salmon average 6-8 pounds.",
    image: "/images/blog/salamon.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Salmon Fishing"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Adventures – Halibut Fishing",
    paragraph:
      "The average Halibut taken by sport anglers in Alaska ranges between 15 and 40 pounds, with fish up to 100 pounds a regular occurrence",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Halibut Fishing"],
    publishDate: "2023",
  },
];
export default blogData;
