// Considering a User object as follow:
//
//   const user = {
//     id: 1,
//     name: 'Albert',
//     address: {
//       street: {
//         number: 22,
//         name: 'Walnut St',
//       },
//     },
//   };
//
// Use `safeProp` and `map/join` or `chain` to safely get the street name when given a user

const get = compose(chain, safeProp);

// getStreetName :: User -> Maybe String
const getStreetName = compose(get('name'), get('street'), safeProp('address'));
