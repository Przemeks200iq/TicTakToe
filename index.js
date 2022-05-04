"use strict";
import { start } from "./src/start.js";
const playAgain = document.getElementById("playAgain");

start();

playAgain.addEventListener("click", start);
