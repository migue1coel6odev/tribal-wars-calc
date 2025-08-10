import { readdir } from "node:fs/promises";
import { Coord } from "./coord";

let target: Coord;
const sources: Coord[] = [];

async function readFile(path: string) {
    const file = Bun.file(path);
    return await file.text();
}

async function parseCoordFromFiles() {
    const directoryFiles = await readdir('.');
    const filteredFiles = directoryFiles.filter((fileName) => {
        return /(target|source_[0-9]*)\.txt/.test(fileName);
    })

    for (const filename of filteredFiles) {

        const fileContent = await readFile(filename);
        const [x, y] = fileContent.split('|');
        const coord = new Coord(Number(x), Number(y));

        if (filename.startsWith('target')) {
            target = coord;
            continue;
        } 

        sources.push(coord);
    }


} 

await parseCoordFromFiles();

for (const coord of sources) {
    console.log(coord.calculateDistanceToCoord(target));

}