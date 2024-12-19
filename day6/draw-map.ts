const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const drawMap = async (maps: string[]) => {
  let index = 0;
  setInterval(() => {
    console.clear();
    index = index + 1;
    console.log(maps[index]);
  }, 20);
};
