export default function removeDuplicates(list) {
  const result = [];
  const ids = [];

  list.forEach(item => {
    if (!ids.includes(item.id)) {
      ids.push(item.id);
      result.push(item);
    }
  });

  return result;
}
