import type { ChapterDef } from "./types";
import Profile from "../chapters/01-profile/Profile";
import { narrations as profileNarrations } from "../chapters/01-profile/narrations";
import Why from "../chapters/02-why/Why";
import { narrations as whyNarrations } from "../chapters/02-why/narrations";

/**
 * 张鹏翔 · 创始人独立简介 deck。
 * 章节顺序 = 演示顺序；每章 narrations 长度 = 步数。
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "profile",
    title: "履历",
    narrations: profileNarrations,
    Component: Profile,
  },
  {
    id: "why",
    title: "为什么是他",
    narrations: whyNarrations,
    Component: Why,
  },
];
