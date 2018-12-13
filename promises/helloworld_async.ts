const dataArr: string[] = ["hello", "world"];

// забирает данные из массива
const fetchData = (arr: string[], num: number): string => {
  return arr[num];
};

// промис возвращает первую часть строки "hello world!"
const p1 = (): Promise <string> => {
  return new Promise <string> ((resolve: (s: string) => void) => {
    const firstHalfWord: string = fetchData(dataArr, 0);
    setTimeout(() => {
      resolve(firstHalfWord + " ");
    }, 2500);
  });
}

// промис возвращает вторую часть строки "hello world!"
const p2 = (): Promise <string> => {
  return new Promise <string> ((resolve: (s: string) => void) => {
    const secondHalfWord: string = fetchData(dataArr, 1);
    setTimeout(() => {
      resolve(secondHalfWord + "!");
    }, 1000);
  });
}

async function helloWorld() {
  console.time('timer2');
  const h = p1();
  const w = p2();
  const hello = await h;
  const world = await w;
  console.log(hello + world);
  console.timeEnd('timer2');
}

helloWorld();