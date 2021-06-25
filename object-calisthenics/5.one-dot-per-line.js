/**
 * Rule 5: One Dot Per Line
 * You should not chain method calls which doesn’t have the same context or return type
 * */

/** Let this object: */
const session = {
  id: "fd335df2dsa345d566d22d24ds",
  user: {
    name: "Joshua",
    address: {
      street: "1 Microsoft Way",
      city: "Redmond",
      country: "United States",
    },
    phoneNumber: "555-5643",
  },
};

/** Without Calisthenics */
const getCountry_WithoutCalisthenics = () => {
  return session.user.address.country;
};

/** With Calisthenics */
const getCountry_WithoutCalisthenics = () => {
  const user = session.user;
  const userAddress = user.address;
  return userAddress.country;
};
