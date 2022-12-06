import { A, F, N, S, pipe } from '@mobily/ts-belt';
import { promises as fs } from 'fs';

const spreadArgs = <T,>(fn: Function) => {
    return function spreadFn(argsArr: T[]) {
        return fn(...argsArr);
    }
}

(async () => {
    pipe(
        await fs.readFile("input", "ascii"),
        S.split("\n\n"),
        A.map(S.split("\n")),
        A.map(A.map(Number)),
        A.map(A.reduce(0, N.add)),
        F.toMutable,
        spreadArgs(Math.max),
        console.log
    );
})();


