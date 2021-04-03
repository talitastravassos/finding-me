export const validateSearch = (search: string): string | undefined => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
  const regexIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (regexEmail.test(search)) {
    return `email=${search}`;
  }
  if (regexDomain.test(search)) {
    return `domain=${search}`;
  }

  if (regexIP.test(search)) {
    return `ipAddress=${search}`;
  }

  return undefined;
};
