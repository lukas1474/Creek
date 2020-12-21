export const getAll = ({ contact }) => contact;

console.log(getAll);

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
