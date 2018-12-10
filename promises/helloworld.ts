const dataArr: string[] = ["hello", "world"];

const fetchData = (arr: string[], num: number): string => {
  return arr[num];
};

const p1 = (): Promise<string> => {
  return new Promise<string>((resolve: (s: string) => void) => {
    const firstHalfWord: string = fetchData(dataArr, 0);
    setTimeout(() => {
      resolve(firstHalfWord + " ");
    }, 500);
  });
}

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
  .then(console.log);