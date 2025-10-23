import { ProjectProps } from '@/components/ProjectCard';

export const projects: ProjectProps[] = [
  {
    title: "Nonograms Puzzle",
    description: "A university group project - a Nonograms game that works with different sized and colored puzzles. Includes a presentable UI built in Java Swing, a checker to check the progress of the current puzzle, and a solver that works with a couple of puzzles. My contribution to this project was implementing a fully functional GUI using Java Swing to implement the backend features.",
    image: "/nonograms.png",
    tags: ["Java", "Java Swing", "JSON", "Puzzle"],
    githubUrl: "https://github.com/astoneham1/nonograms",
    liveUrl: ""
  },
  {
    title: "Breakout Game",
    description: "A university group project - a game inspired by Breakout, where the user controls a paddle to bounce a ball into bricks to break them. Contains multiple levels and powers. Built using the Processing environment for Java. My contribution to this project was implementing the game logic and the level system.",
    image: "/breakout.png",
    tags: ["Java", "Processing", "Level Progression", "Game"],
    githubUrl: "https://github.com/astoneham1/brickbreak",
    liveUrl: ""
  },
  {
    title: "EAFC 24 Pack Opener and Minigames",
    description: "A lightweight application where you can pack cards, build drafts, and play an endless amount of minigames with the cards in EA's FC 24.",
    image: "/livefut.png",
    tags: ["Livecode", "SQLite", "EAFC24", "FIFA"],
    githubUrl: "https://github.com/astoneham1/higherlower",
    liveUrl: ""
  },
  {
    title: "Rainbow Six Siege Clip Hub",
    description: "A site to store links to folders containing my gameplay clips from Tom Clancy's Rainbow Six Siege from 2020 onwards.",
    image: "/clips.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/astoneham1/clips",
    liveUrl: "https://clips.alexstoneham.co.uk"
  }
];

export default projects;
