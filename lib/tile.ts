import { Orientation, Point } from "./board";

const v = -1;

export const TILE_WIDTH = 6;
export const TILE_HEIGHT = 6;

//this cache is used for all getones calls, since they are expensive
//this cache is an interesting js construct where arrays are used as keys haha not really they are
//coerced to strings
const getOnesCache:{[key:string]:Point[]} = {};


export class Tile {
    public value: number;
    public form: number[][];
    public turn: number;     // turn represents at which turn this tile is used. This is important to be able to distinguish between different instances
                             // of the same number, since it is not allowed to place a tile on one instance.
                             // since there is only one tile per turn, this serves as identity

    public getOnes(d:Orientation){
        return this.getNumberLocations(1, d);
    }

    public getAdjacencies(d:Orientation) {
        return this.getNumberLocations(v, d);
    }


    private getNumberLocations(num: number, d:Orientation){
        const key = [this.value, num, d].toString();

        if (!(key in getOnesCache)) {
            const ret = [];
            for (let y = 0; y < 6; y++){
                for (let x = 0; x < 5; x++){
                    if (this.form[y][x] === num){
                        switch (d) {
                            case Orientation.Up:
                                ret.push({y:y,x:x});
                                break;
                            case Orientation.Right:
                                ret.push({y:x,x:4-y});
                                break;
                            case Orientation.Down:
                                ret.push({x:5-x,y:4-y});
                                break;
                            case Orientation.Left:
                                ret.push({y:5-x,x:y});
                                break;
                        }
                    }
                }
            }
            getOnesCache[key] = ret
            return ret;
        }

        return getOnesCache[key];

    }
}

export function getTile(n:number): Tile {
    if (n<0 || n>9) throw new Error('Value of a tile can only be from 0 to 9.');

    let t = new Tile;
    t.value = n;

    switch(n) {
        case 0: {
            t.form = [[0,v,v,v,0,0],
                      [v,1,1,1,v,0],
                      [v,1,0,1,v,0],
                      [v,1,0,1,v,0],
                      [v,1,1,1,v,0],
                      [0,v,v,v,0,0]];
            break;
        }
        case 1: {
            t.form = [[0,v,v,0,0,0],
                      [v,1,1,v,0,0],
                      [0,v,1,v,0,0],
                      [0,v,1,v,0,0],
                      [0,v,1,v,0,0],
                      [0,0,v,0,0,0]];
            break;
        }
        case 2: {
            t.form = [[0,0,v,v,0,0],
                      [0,v,1,1,v,0],
                      [0,v,1,1,v,0],
                      [v,1,1,v,0,0],
                      [v,1,1,1,v,0],
                      [0,v,v,v,0,0]];
            break;
        }
        case 3: {
            t.form = [[0,v,v,v,0,0],
                      [v,1,1,1,v,0],
                      [0,v,v,1,v,0],
                      [0,v,1,1,v,0],
                      [v,1,1,1,v,0],
                      [0,v,v,v,0,0]];
            break;
        }
        case 4: {
            t.form = [[0,0,v,v,0,0],
                      [0,v,1,1,v,0],
                      [0,v,1,v,0,0],
                      [v,1,1,1,v,0],
                      [0,v,1,1,v,0],
                      [0,0,v,v,0,0]];
            break;
        }
        case 5: {
            t.form = [[0,v,v,v,0,0],
                      [v,1,1,1,v,0],
                      [v,1,1,1,v,0],
                      [0,v,v,1,v,0],
                      [v,1,1,1,v,0],
                      [0,v,v,v,0,0]];
            break;
        }
        case 6: {
            t.form = [[0,v,v,0,0,0],
                      [v,1,1,v,0,0],
                      [v,1,v,v,0,0],
                      [v,1,1,1,v,0],
                      [v,1,1,1,v,0],
                      [0,v,v,v,0,0]];
            break;
        }
        case 7: {
            t.form = [[0,v,v,v,0,0],
                      [v,1,1,1,v,0],
                      [0,v,1,v,0,0],
                      [v,1,1,v,0,0],
                      [v,1,v,0,0,0],
                      [0,v,0,0,0,0]];
            break;
        }
        case 8: {
            t.form = [[0,0,v,v,0,0],
                      [0,v,1,1,v,0],
                      [0,v,1,1,v,0],
                      [v,1,1,v,0,0],
                      [v,1,1,v,0,0],
                      [0,v,v,0,0,0]];
            break;
        }
        case 9: {
            t.form = [[0,v,v,v,0,0],
                      [v,1,1,1,v,0],
                      [v,1,1,1,v,0],
                      [v,1,1,v,0,0],
                      [v,1,1,v,0,0],
                      [0,v,v,0,0,0]];
            break;
        }
    }

    return t;
}