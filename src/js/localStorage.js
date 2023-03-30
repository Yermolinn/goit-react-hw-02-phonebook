export function load(key) {
  const serialisedData = localStorage.getItem(key);
  return serialisedData === null ? undefined : JSON.parse(serialisedData);
}

export function save(key, value) {
  const serialisedData = JSON.stringify(value);
  localStorage.setItem(key, serialisedData);
}