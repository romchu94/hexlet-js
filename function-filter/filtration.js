const getGirlFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  const girlFriends = allFriends.filter((friend) => friend.gender === "female");
  return girlFriends;
};

const users = [
  {
    name: "Tirion",
    friends: [
      { name: "Mira", gender: "female" },
      { name: "Ramsey", gender: "male" },
    ],
  },
  { name: "Bronn", friends: [] },
  {
    name: "Sam",
    friends: [
      { name: "Aria", gender: "female" },
      { name: "Keit", gender: "female" },
    ],
  },
  {
    name: "Rob",
    friends: [{ name: "Taywin", gender: "male" }],
  },
];

console.log(getGirlFriends(users));
