const user1 = {
  friends: [
    { id: 1 },
    { id: 2 }, // общий друг
  ],
};
const user2 = {
  friends: [
    { id: 2 }, // общий друг
    { id: 3 },
  ],
};

const getMutualFriends = (user1, user2) => {
  const mutualFriends = user1.friends.filter((friend1) => {
    return user2.friends.some((friend2) => friend2.id === friend1.id);
  });
  return mutualFriends;
};

export { getMutualFriends };

console.log(getMutualFriends(user1, user2));
