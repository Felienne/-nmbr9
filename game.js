"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tile = require("./tile");
const cards = require("./cards");
const b = require("./board");
function getRandom(list) {
    if (list.length !== 0) {
        const len = list.length;
        const index = Math.floor(Math.random() * len);
        return list[index];
    }
    else {
        return undefined;
    }
}
const deck = new cards.deck;
const board = new b.board;
let turn_tuple = deck.draw();
let t = tile.getTile(9);
t.turn = 1;
board.place(38, 38, t);
console.log(board.boardToString());
let t2 = tile.getTile(1);
t2.turn = 2;
board.place(36, 38, t2);
console.log(board.boardToString());
let t3 = tile.getTile(8);
t3.turn = 3;
console.log(board.canPlace(37, 38, t3));
console.log(board.boardToString());
// while (turn_tuple !== false)
// {
//     const value = turn_tuple.value;
//     let t:tile.Tile = tile.getTile(value);
//     t.turn = turn_tuple.turn;
//     if (turn_tuple.turn === 1){
//         console.log(t)        
//         board.place(38,38,t)
//     }
//     else{
//         let locs = board.getOptions().filter(p => board.canPlace(p.x, p.y, t));
//         const loc = getRandom(locs);
//         if (loc !== undefined){
//             console.log(loc.x, loc.y, t.value)
//             board.place(loc.x, loc.y, t)
//         }
//     }
//     turn_tuple = deck.draw();
//     console.log("---")
//     console.log(board.boardToString())
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUU3QixTQUFTLFNBQVMsQ0FBSSxJQUFRO0lBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7UUFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0QjtTQUNJO1FBQ0QsT0FBTyxTQUFTLENBQUE7S0FDbkI7QUFDTCxDQUFDO0FBR0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUUxQixJQUFJLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7QUFFN0IsSUFBSSxDQUFDLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtBQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBRWxDLElBQUksRUFBRSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7QUFDWCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUE7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQTtBQUVsQyxJQUFJLEVBQUUsR0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO0FBRWxDLCtCQUErQjtBQUMvQixJQUFJO0FBQ0osc0NBQXNDO0FBQ3RDLDZDQUE2QztBQUM3QyxnQ0FBZ0M7QUFFaEMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsUUFBUTtBQUNSLFlBQVk7QUFDWixrRkFBa0Y7QUFDbEYsdUNBQXVDO0FBRXZDLGtDQUFrQztBQUNsQyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLFlBQVk7QUFDWixRQUFRO0FBQ1IsZ0NBQWdDO0FBRWhDLHlCQUF5QjtBQUN6Qix5Q0FBeUM7QUFFekMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRpbGUgZnJvbSBcIi4vdGlsZVwiO1xuaW1wb3J0ICogYXMgY2FyZHMgZnJvbSBcIi4vY2FyZHNcIjtcbmltcG9ydCAqIGFzIGIgZnJvbSBcIi4vYm9hcmRcIjtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tPFQ+KGxpc3Q6VFtdKXtcbiAgICBpZiAobGlzdC5sZW5ndGggIT09IDApe1xuICAgICAgICBjb25zdCBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xuICAgICAgICByZXR1cm4gbGlzdFtpbmRleF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxufVxuXG5cbmNvbnN0IGRlY2sgPSBuZXcgY2FyZHMuZGVjaztcbmNvbnN0IGJvYXJkID0gbmV3IGIuYm9hcmQ7XG5cbmxldCB0dXJuX3R1cGxlICA9IGRlY2suZHJhdygpXG5cbmxldCB0OnRpbGUuVGlsZSA9IHRpbGUuZ2V0VGlsZSg5KTtcbnQudHVybiA9IDFcbmJvYXJkLnBsYWNlKDM4LDM4LHQpXG5jb25zb2xlLmxvZyhib2FyZC5ib2FyZFRvU3RyaW5nKCkpXG5cbmxldCB0Mjp0aWxlLlRpbGUgPSB0aWxlLmdldFRpbGUoMSk7XG50Mi50dXJuID0gMlxuYm9hcmQucGxhY2UoMzYsMzgsdDIpXG5jb25zb2xlLmxvZyhib2FyZC5ib2FyZFRvU3RyaW5nKCkpXG5cbmxldCB0Mzp0aWxlLlRpbGUgPSB0aWxlLmdldFRpbGUoOCk7XG50My50dXJuID0gM1xuY29uc29sZS5sb2coYm9hcmQuY2FuUGxhY2UoMzcsMzgsdDMpKVxuY29uc29sZS5sb2coYm9hcmQuYm9hcmRUb1N0cmluZygpKVxuXG4vLyB3aGlsZSAodHVybl90dXBsZSAhPT0gZmFsc2UpXG4vLyB7XG4vLyAgICAgY29uc3QgdmFsdWUgPSB0dXJuX3R1cGxlLnZhbHVlO1xuLy8gICAgIGxldCB0OnRpbGUuVGlsZSA9IHRpbGUuZ2V0VGlsZSh2YWx1ZSk7XG4vLyAgICAgdC50dXJuID0gdHVybl90dXBsZS50dXJuO1xuXG4vLyAgICAgaWYgKHR1cm5fdHVwbGUudHVybiA9PT0gMSl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHQpICAgICAgICBcbi8vICAgICAgICAgYm9hcmQucGxhY2UoMzgsMzgsdClcbi8vICAgICB9XG4vLyAgICAgZWxzZXtcbi8vICAgICAgICAgbGV0IGxvY3MgPSBib2FyZC5nZXRPcHRpb25zKCkuZmlsdGVyKHAgPT4gYm9hcmQuY2FuUGxhY2UocC54LCBwLnksIHQpKTtcbi8vICAgICAgICAgY29uc3QgbG9jID0gZ2V0UmFuZG9tKGxvY3MpO1xuXG4vLyAgICAgICAgIGlmIChsb2MgIT09IHVuZGVmaW5lZCl7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2MueCwgbG9jLnksIHQudmFsdWUpXG4vLyAgICAgICAgICAgICBib2FyZC5wbGFjZShsb2MueCwgbG9jLnksIHQpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgdHVybl90dXBsZSA9IGRlY2suZHJhdygpO1xuXG4vLyAgICAgY29uc29sZS5sb2coXCItLS1cIilcbi8vICAgICBjb25zb2xlLmxvZyhib2FyZC5ib2FyZFRvU3RyaW5nKCkpXG4gXG4vLyB9XG5cbiJdfQ==