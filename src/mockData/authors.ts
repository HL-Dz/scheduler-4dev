export type IAuthor = {
  id: string;
  author_name: string;
};

export const authors: IAuthor[] = [
  {
    id: "001",
    author_name: "John Smith",
  },
  {
    id: "002",
    author_name: "Sarah Lee",
  },
  {
    id: "003",
    author_name: "James Wilson",
  },
  {
    id: "004",
    author_name: "David Taylor",
  },
  {
    id: "005",
    author_name: "Emma Anderson",
  },
  {
    id: "006",
    author_name: "Ryan Garcia",
  },
];

export const duplAuthors = authors.map((el, ind) => {
  return {
    label: el.author_name,
    value: el.author_name,
  };
});
