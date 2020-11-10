export function fetchRequest(path, method, params) {
  const ip = "https://api.intocode.ru:8001/api";
  return fetch(ip + path, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(params),
  }).then((res) => res.json());
}

export function post(path, params) {
  return fetchRequest(path, "POST", params);
}

export function del(path, params) {
  return fetchRequest(path, "DELETE", params);
}

export function get(path, params) {
  return fetchRequest(path, "GET", params);
}
