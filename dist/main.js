/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n//import Canvas from './scripts/canvas';\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  // const ctx = canvas.getContext(\"2d\");\n  // console.log(ctx);\n\n  new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  console.log(ctx);\n\n  // const charOne = new Image();\n  // charOne.src = '';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNxQztBQUVyQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JEO0VBQ0E7O0VBRUEsSUFBSUosd0RBQUksQ0FBQ0csTUFBTSxDQUFDO0VBQ2hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDOztFQUVoQjtFQUNBO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IENhbnZhcyBmcm9tICcuL3NjcmlwdHMvY2FudmFzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAvLyBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyBjb25zb2xlLmxvZyhjdHgpO1xuXG4gIG5ldyBHYW1lKGNhbnZhcyk7XG4gIGNvbnNvbGUubG9nKGN0eCk7XG5cbiAgLy8gY29uc3QgY2hhck9uZSA9IG5ldyBJbWFnZSgpO1xuICAvLyBjaGFyT25lLnNyYyA9ICcnO1xufSkiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/characters.js":
/*!***********************************!*\
  !*** ./src/scripts/characters.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nconst CONSTANTS = {\n  // GRAVITY: ,\n  MOVE_SPEED: 8,\n  // TERMINAL_VEL: ,\n  CHARACTER_WIDTH: 60,\n  CHARACTER_HEIGHT: 30\n};\nclass Character {\n  constructor() {\n    //(dimensions){\n    // this.dimensions = dimensions;\n    // this.vel = 0;\n    this.x = CONSTANTS.CHARACTER_WIDTH;\n    this.y = CONSTANTS.CHARACTER_HEIGHT;\n  }\n  move() {\n    // this.x += this.vel;\n  }\n  animate(ctx) {\n    // this.move();\n    this.drawCharacter(ctx);\n  }\n  drawCharacter(ctx) {\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.CHARACTER_WIDTH, CONSTANTS.CHARACTER_HEIGHT);\n    //change this later!\n  }\n\n  //set boundaries so character don't go off canvas\n  bounds() {\n    return {\n      left: this.x,\n      right: this.x + CONSTANTS.CHARACTER_WIDTH\n    };\n  }\n\n  //prevent movement outside of canvas\n  atBoundary() {\n    //...\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jaGFyYWN0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUc7RUFDaEI7RUFDQUMsVUFBVSxFQUFFLENBQUM7RUFDYjtFQUNBQyxlQUFlLEVBQUUsRUFBRTtFQUNuQkMsZ0JBQWdCLEVBQUU7QUFDcEIsQ0FBQztBQUVjLE1BQU1DLFNBQVMsQ0FBQztFQUM3QkMsV0FBVyxHQUFFO0lBQUM7SUFDWjtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxDQUFDLEdBQUdOLFNBQVMsQ0FBQ0UsZUFBZTtJQUNsQyxJQUFJLENBQUNLLENBQUMsR0FBR1AsU0FBUyxDQUFDRyxnQkFBZ0I7RUFDckM7RUFFQUssSUFBSSxHQUFFO0lBQ0o7RUFBQTtFQUdGQyxPQUFPLENBQUNDLEdBQUcsRUFBQztJQUNWO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUNELEdBQUcsQ0FBQztFQUN6QjtFQUVBQyxhQUFhLENBQUNELEdBQUcsRUFBQztJQUNoQkEsR0FBRyxDQUFDRSxTQUFTLEdBQUcsTUFBTTtJQUN0QkYsR0FBRyxDQUFDRyxRQUFRLENBQUMsSUFBSSxDQUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUVQLFNBQVMsQ0FBQ0UsZUFBZSxFQUFFRixTQUFTLENBQUNHLGdCQUFnQixDQUFDO0lBQ25GO0VBQ0Y7O0VBRUE7RUFDQVcsTUFBTSxHQUFFO0lBQ04sT0FBTTtNQUNKQyxJQUFJLEVBQUUsSUFBSSxDQUFDVCxDQUFDO01BQ1pVLEtBQUssRUFBRSxJQUFJLENBQUNWLENBQUMsR0FBR04sU0FBUyxDQUFDRTtJQUM1QixDQUFDO0VBQ0g7O0VBRUE7RUFDQWUsVUFBVSxHQUFFO0lBQ1Y7RUFBQTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2NoYXJhY3RlcnMuanM/MzliNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVEFOVFMgPSB7XG4gIC8vIEdSQVZJVFk6ICxcbiAgTU9WRV9TUEVFRDogOCxcbiAgLy8gVEVSTUlOQUxfVkVMOiAsXG4gIENIQVJBQ1RFUl9XSURUSDogNjAsXG4gIENIQVJBQ1RFUl9IRUlHSFQ6IDMwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlciB7XG4gIGNvbnN0cnVjdG9yKCl7Ly8oZGltZW5zaW9ucyl7XG4gICAgLy8gdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAvLyB0aGlzLnZlbCA9IDA7XG4gICAgdGhpcy54ID0gQ09OU1RBTlRTLkNIQVJBQ1RFUl9XSURUSDtcbiAgICB0aGlzLnkgPSBDT05TVEFOVFMuQ0hBUkFDVEVSX0hFSUdIVDtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICAvLyB0aGlzLnggKz0gdGhpcy52ZWw7XG4gIH1cblxuICBhbmltYXRlKGN0eCl7XG4gICAgLy8gdGhpcy5tb3ZlKCk7XG4gICAgdGhpcy5kcmF3Q2hhcmFjdGVyKGN0eCk7XG4gIH1cblxuICBkcmF3Q2hhcmFjdGVyKGN0eCl7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgQ09OU1RBTlRTLkNIQVJBQ1RFUl9XSURUSCwgQ09OU1RBTlRTLkNIQVJBQ1RFUl9IRUlHSFQpO1xuICAgIC8vY2hhbmdlIHRoaXMgbGF0ZXIhXG4gIH1cblxuICAvL3NldCBib3VuZGFyaWVzIHNvIGNoYXJhY3RlciBkb24ndCBnbyBvZmYgY2FudmFzXG4gIGJvdW5kcygpe1xuICAgIHJldHVybntcbiAgICAgIGxlZnQ6IHRoaXMueCxcbiAgICAgIHJpZ2h0OiB0aGlzLnggKyBDT05TVEFOVFMuQ0hBUkFDVEVSX1dJRFRIXG4gICAgfVxuICB9XG5cbiAgLy9wcmV2ZW50IG1vdmVtZW50IG91dHNpZGUgb2YgY2FudmFzXG4gIGF0Qm91bmRhcnkoKXtcbiAgICAvLy4uLlxuICB9XG59Il0sIm5hbWVzIjpbIkNPTlNUQU5UUyIsIk1PVkVfU1BFRUQiLCJDSEFSQUNURVJfV0lEVEgiLCJDSEFSQUNURVJfSEVJR0hUIiwiQ2hhcmFjdGVyIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIm1vdmUiLCJhbmltYXRlIiwiY3R4IiwiZHJhd0NoYXJhY3RlciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYm91bmRzIiwibGVmdCIsInJpZ2h0IiwiYXRCb3VuZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/characters.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters */ \"./src/scripts/characters.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nclass Game {\n  //create new canvas and restart the game\n  constructor(canvas) {\n    this.ctx = canvas.getContext('2d');\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.registerEvents();\n    this.restart();\n  }\n\n  //start playing\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  //after game over, restart the game\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.characterOne = new _characters__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.characterTwo = new _characters__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  //adding event listeners\n  registerEvents() {\n    //this.ctx.canvas.addEventListener(\"\", )\n  }\n\n  //pause, stop running animations and score counting\n  pause() {\n    //addEventListener?\n    this.running = false;\n  }\n\n  //you know\n  gameOver() {\n    return this.level.collidesWith(this.characterOne.bounds()) || this.level.collidesWith(this.characterTwo.bounds());\n  }\n  animate() {\n    //draw the level\n    this.level.animate(this.ctx);\n\n    //draw and move the characters\n    this.characterOne.animate(this.ctx);\n    this.characterTwo.animate(this.ctx);\n\n    //check if game over => give player score => restart the game\n    if (this.gameOver()) {\n      alert(this.score);\n      this.restart();\n    }\n\n    //add 1 to the score every second\n    setInterval(() => score++, 1000);\n\n    //draw the score\n    this.drawScore();\n\n    //stop animations if game is not running\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n  drawScore() {\n    //location width and height are based off of canvas dimensions\n    const loc = {\n      x: this.dimensions.width / 2,\n      y: this.dimensions.height / 8\n    };\n    this.ctx.font = \"bold 50pt sans-serif\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.score, loc.x, loc.y);\n    //strokeStyle and linewidth are the color and width of the outline\n    this.ctx.strokeStyle = \"black\";\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeText(this.score, loc.x, loc.y);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMzQixHQUFHLENBQUM0QixRQUFRLENBQUMsSUFBSSxDQUFDbEIsS0FBSyxFQUFFYSxHQUFHLENBQUNDLENBQUMsRUFBRUQsR0FBRyxDQUFDRSxDQUFDLENBQUM7SUFDM0M7SUFDQSxJQUFJLENBQUN6QixHQUFHLENBQUM2QixXQUFXLEdBQUcsT0FBTztJQUM5QixJQUFJLENBQUM3QixHQUFHLENBQUM4QixTQUFTLEdBQUcsQ0FBQztJQUN0QixJQUFJLENBQUM5QixHQUFHLENBQUMrQixVQUFVLENBQUMsSUFBSSxDQUFDckIsS0FBSyxFQUFFYSxHQUFHLENBQUNDLENBQUMsRUFBRUQsR0FBRyxDQUFDRSxDQUFDLENBQUM7RUFDL0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIC8vY3JlYXRlIG5ldyBjYW52YXMgYW5kIHJlc3RhcnQgdGhlIGdhbWVcbiAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgLy9zdGFydCBwbGF5aW5nXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIC8vYWZ0ZXIgZ2FtZSBvdmVyLCByZXN0YXJ0IHRoZSBnYW1lXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5jaGFyYWN0ZXJPbmUgPSBuZXcgQ2hhcmFjdGVyKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5jaGFyYWN0ZXJUd28gPSBuZXcgQ2hhcmFjdGVyKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmRpbWVuc2lvbnMpO1xuXG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICAvL2FkZGluZyBldmVudCBsaXN0ZW5lcnNcbiAgcmVnaXN0ZXJFdmVudHMoKXtcbiAgICAvL3RoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiXCIsIClcbiAgfVxuXG4gIC8vcGF1c2UsIHN0b3AgcnVubmluZyBhbmltYXRpb25zIGFuZCBzY29yZSBjb3VudGluZ1xuICBwYXVzZSgpe1xuICAgIC8vYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8veW91IGtub3dcbiAgZ2FtZU92ZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sZXZlbC5jb2xsaWRlc1dpdGgodGhpcy5jaGFyYWN0ZXJPbmUuYm91bmRzKCkpIHx8XG4gICAgICB0aGlzLmxldmVsLmNvbGxpZGVzV2l0aCh0aGlzLmNoYXJhY3RlclR3by5ib3VuZHMoKSlcbiAgICApO1xuICB9XG5cbiAgYW5pbWF0ZSgpe1xuICAgIC8vZHJhdyB0aGUgbGV2ZWxcbiAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5jdHgpO1xuXG4gICAgLy9kcmF3IGFuZCBtb3ZlIHRoZSBjaGFyYWN0ZXJzXG4gICAgdGhpcy5jaGFyYWN0ZXJPbmUuYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgdGhpcy5jaGFyYWN0ZXJUd28uYW5pbWF0ZSh0aGlzLmN0eCk7XG5cbiAgICAvL2NoZWNrIGlmIGdhbWUgb3ZlciA9PiBnaXZlIHBsYXllciBzY29yZSA9PiByZXN0YXJ0IHRoZSBnYW1lXG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIoKSl7XG4gICAgICBhbGVydCh0aGlzLnNjb3JlKTtcbiAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIC8vYWRkIDEgdG8gdGhlIHNjb3JlIGV2ZXJ5IHNlY29uZFxuICAgIHNldEludGVydmFsKCgpPT5zY29yZSsrLCAxMDAwKTtcblxuICAgIC8vZHJhdyB0aGUgc2NvcmVcbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuXG4gICAgLy9zdG9wIGFuaW1hdGlvbnMgaWYgZ2FtZSBpcyBub3QgcnVubmluZ1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpe1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBkcmF3U2NvcmUoKXtcbiAgICAvL2xvY2F0aW9uIHdpZHRoIGFuZCBoZWlnaHQgYXJlIGJhc2VkIG9mZiBvZiBjYW52YXMgZGltZW5zaW9uc1xuICAgIGNvbnN0IGxvYyA9IHsgeDogKHRoaXMuZGltZW5zaW9ucy53aWR0aCkvMiwgeTogKHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpLzggfTtcbiAgICB0aGlzLmN0eC5mb250ID0gXCJib2xkIDUwcHQgc2Fucy1zZXJpZlwiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICAgIC8vc3Ryb2tlU3R5bGUgYW5kIGxpbmV3aWR0aCBhcmUgdGhlIGNvbG9yIGFuZCB3aWR0aCBvZiB0aGUgb3V0bGluZVxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dCh0aGlzLnNjb3JlLCBsb2MueCwgbG9jLnkpO1xuICB9XG59Il0sIm5hbWVzIjpbIkNoYXJhY3RlciIsIkxldmVsIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsInJlZ2lzdGVyRXZlbnRzIiwicmVzdGFydCIsInBsYXkiLCJydW5uaW5nIiwiYW5pbWF0ZSIsInNjb3JlIiwiY2hhcmFjdGVyT25lIiwiY2hhcmFjdGVyVHdvIiwibGV2ZWwiLCJwYXVzZSIsImdhbWVPdmVyIiwiY29sbGlkZXNXaXRoIiwiYm91bmRzIiwiYWxlcnQiLCJzZXRJbnRlcnZhbCIsImRyYXdTY29yZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJsb2MiLCJ4IiwieSIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Level; }\n/* harmony export */ });\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n  }\n\n  //render the background\n  drawBackground(ctx) {\n    ctx.fillStyle = \"green\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  //render the game level\n  animate(ctx) {\n    this.drawBackground(ctx);\n  }\n\n  //returns true if either character hits a hazard\n  collideswith(characterOne, characterTwo) {\n    //...\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsS0FBSyxDQUFDO0VBQ3pCQyxXQUFXLENBQUVDLFVBQVUsRUFBQztJQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtFQUNBQyxjQUFjLENBQUNDLEdBQUcsRUFBQztJQUNqQkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsT0FBTztJQUN2QkQsR0FBRyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUNKLFVBQVUsQ0FBQ0ssS0FBSyxFQUFFLElBQUksQ0FBQ0wsVUFBVSxDQUFDTSxNQUFNLENBQUM7RUFDbkU7O0VBRUE7RUFDQUMsT0FBTyxDQUFDTCxHQUFHLEVBQUM7SUFDVixJQUFJLENBQUNELGNBQWMsQ0FBQ0MsR0FBRyxDQUFDO0VBQzFCOztFQUVBO0VBQ0FNLFlBQVksQ0FBQ0MsWUFBWSxFQUFFQyxZQUFZLEVBQUM7SUFDdEM7RUFBQTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2xldmVsLmpzPzAxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvciAoZGltZW5zaW9ucyl7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgfVxuXG4gIC8vcmVuZGVyIHRoZSBiYWNrZ3JvdW5kXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCl7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgfVxuXG4gIC8vcmVuZGVyIHRoZSBnYW1lIGxldmVsXG4gIGFuaW1hdGUoY3R4KXtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKGN0eCk7XG4gIH1cblxuICAvL3JldHVybnMgdHJ1ZSBpZiBlaXRoZXIgY2hhcmFjdGVyIGhpdHMgYSBoYXphcmRcbiAgY29sbGlkZXN3aXRoKGNoYXJhY3Rlck9uZSwgY2hhcmFjdGVyVHdvKXtcbiAgICAvLy4uLlxuICB9XG59XG4iXSwibmFtZXMiOlsiTGV2ZWwiLCJjb25zdHJ1Y3RvciIsImRpbWVuc2lvbnMiLCJkcmF3QmFja2dyb3VuZCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIiwiY29sbGlkZXN3aXRoIiwiY2hhcmFjdGVyT25lIiwiY2hhcmFjdGVyVHdvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;