export async function apiGet(url) {
  return await (await fetch(url)).json();
}

export function apiPost(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
}
