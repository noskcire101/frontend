export function formatConvertToSnakeCase(value: string) {
  return value.replace(/\s+/g, '_').toLowerCase();
}

export function formatConvertSnakeToTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

export function formatConvertToTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}