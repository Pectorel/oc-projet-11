async function fetchJson(path) {
  const res = await fetch(path);
  return await res.json();
}

async function checkData(path, conditions) {
  let data = await fetchJson(path);

  for (let key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      let row = data[key];

      for (let i in conditions) {
        if (Object.prototype.hasOwnProperty.call(conditions, i)) {
          let condition = conditions[i];

          if (
            Object.prototype.hasOwnProperty.call(row, condition["objectField"])
          ) {
            if (row[condition["objectField"]] != condition["paramField"]) {
              row = null;
              break;
            }
          }
        }
      }

      if (row !== null) {
        return row;
      }
    }
  }

  return null;
}

export default {
  fetchJson,
  checkData,
};
