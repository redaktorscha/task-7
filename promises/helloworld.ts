const dataArr: string[] = ["hello", "world"];

// забирает данные из массива
const fetchData = (arr: string[], num: number): string => {
  return arr[num];
};

// промис возвращает первую часть строки "hello world!"
const p1 = (): Promise<string> => {
  return new Promise<string>((resolve: (s: string) => void) => {
    const firstHalfWord: string = fetchData(dataArr, 0);
    setTimeout(() => {
      resolve(firstHalfWord + " ");
    }, 2500);
  });
}

// промис возвращает вторую часть строки "hello world!"
const p2 = (txt: string): Promise<string> => {
  return new Promise<string>((resolve: (st:string) => void) => {
    const secondHalfWord: string = fetchData(dataArr, 1);
    setTimeout(() => {
      resolve(txt += secondHalfWord + "!");
    }, 1000);
  });
}

p1()
  .then(p2)
  .then(console.log)