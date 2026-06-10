const emails = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];
const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];

const getFreeDomainsCount = (emails) => {
  return emails
    .map((email) => email.split("@")[1])
    .filter((item) => freeEmailDomains.includes(item))
    .reduce((acc, domain) => {
      if (acc[domain] === undefined) {
        acc[domain] = 1;
      } else {
        acc[domain] += 1;
      }
      return acc;
    }, {});
};

console.log(getFreeDomainsCount(emails));
