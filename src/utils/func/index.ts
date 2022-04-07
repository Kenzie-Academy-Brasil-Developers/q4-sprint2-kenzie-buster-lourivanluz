const toTitleCase = (phase: string) => {
  const formated = phase
    .split(" ")
    .map(
      (item) =>
        item[0].toLocaleUpperCase() + item.substring(1).toLocaleLowerCase()
    )
    .join(" ");

  return formated;
};

export { toTitleCase };
