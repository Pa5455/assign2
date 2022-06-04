export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  products: {
    _model: "Product",
    RoundUpGold: {
      brandName: "RoundUp",
      typeName: "Gold",
      area: "Chemicals",
    },
    RoundUpSilver: {
      brandName: "RoundUp",
      typeName: "Silver",
      area: "Chemicals",
    },
  },
  dosage: {
    _model: "Dose",
    one: {
      amount: 40,
      method: "drum",
      lat: "52.160858",
      lng: "-7.152420",
      donor: "->users.bart",
      product: "->products.RoundUpSilver",
    },
    two: {
      amount: 90,
      method: "bottle",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      product: "->products.RoundUpGold",
    },
    three: {
      amount: 430,
      method: "drum",
      lat: "52.161290",
      lng: "-7.231540",
      donor: "->users.homer",
      product: "->products.RoundUpSilver",
    },
  },
};
