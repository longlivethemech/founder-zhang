import type { SyntheticEvent } from "react";
import { Reveal } from "../../shared/Reveal";
import { SceneFade } from "../../shared/SceneFade";
import { NumberTicker } from "../../shared/NumberTicker";
import type { ChapterStepProps } from "../../registry/types";
import "./Profile.css";

const ASSET = (n: string) => `${import.meta.env.BASE_URL}assets/${n}`;

/** 图片加载失败 → 隐藏，露出占位框（用户可后补真图） */
function hideOnError(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.classList.add("is-missing");
}

/** 跨学科锚点 */
const FIELDS = ["物理", "材料", "电子", "计算机"];

/** 学术轨迹节点（含硬荣誉） */
const PATH = [
  { yr: "2007–13", cn: "人大附中", en: "RDFZ", deg: "初高中六年 · 海淀", honor: "信息学奥赛 全国决赛铜牌" },
  { yr: "2013–17", cn: "清华大学", en: "TSINGHUA", deg: "材料学院 · 学士", honor: "学分绩年级第一 · 国家奖学金" },
  { yr: "2017–23", cn: "MIT 直博", en: "MIT EECS", deg: "电子与计算机 · 博士", honor: "自旋电子学 · 实验仪器自动化" },
  { yr: "2023–", cn: "阿贡国家实验室", en: "ARGONNE NL", deg: "材料科学部 · 博士后", honor: "自旋电子学 × AI 类脑计算" },
];

/** 学术影响力数字 */
const METRICS = [
  { to: 1502, suffix: "", label: "总被引", en: "CITATIONS" },
  { to: 14, suffix: "", label: "h-index", en: "H-INDEX" },
  { to: 18, suffix: "", label: "i10-index", en: "I10-INDEX" },
];

/** 代表作（venue / 标题 / 年 / 引用） */
const WORKS = [
  { venue: "Science", t: "自旋波与磁畴壁的相互操控", yr: "2019", cite: 221 },
  { venue: "Nature Nanotech.", t: "线偏振反铁磁磁振子的双折射式自旋输运", yr: "2020", cite: 187 },
  { venue: "Nature Materials", t: "非共线反铁磁在自旋轨道矩下的手性反常", yr: "2023", cite: 98 },
  { venue: "Phys. Rev. Lett.", t: "层状晶体中的吉赫兹反铁磁共振与强磁振子耦合", yr: "2019", cite: 249 },
];

/**
 * 01 · profile — 张鹏翔履历（5 step / 5 幕）
 *   A(0) 封面 · 名字 → B(1) 信念 · 物理×数字
 *   → C(2) 学术轨迹时间轴 → D(3) 学术影响力数字 → E(4) 代表作
 */
export default function Profile({ step }: ChapterStepProps) {
  const at = (n: number) => step >= n;
  const sceneA = step === 0;
  const sceneBelief = step === 1;
  const scenePath = step === 2;
  const sceneImpact = step === 3;
  const sceneWorks = step === 4;

  return (
    <div className="pf-root">
      {/* 持续氛围：暖色光晕 */}
      <div className="pf-ambient" aria-hidden />

      {/* ─── A · 封面 ─── */}
      <SceneFade active={sceneA}>
        <div className="pf-cover">
          <div className="pf-cover-l">
            <Reveal kind="fall" duration={620} className="pf-eyebrow mono">
              <span className="dot-accent" />
              &nbsp;&nbsp;智械工坊 · 创始人 / FOUNDER
            </Reveal>
            <Reveal kind="blur" duration={1000} delay={120} className="pf-name serif-cn">
              张鹏翔
            </Reveal>
            <Reveal kind="rise" duration={760} delay={420} className="pf-name-en display-en">
              PENGXIANG ZHANG
            </Reveal>
            <Reveal kind="rise" duration={720} delay={640} className="pf-cover-tag">
              从 <span className="pf-em">Science</span>，到 <span className="pf-em">具身智能</span>。
            </Reveal>
          </div>
          <Reveal kind="scale" duration={820} delay={300} className="pf-portrait-wrap">
            <span className="pf-portrait-frame">
              <span className="pf-portrait-ph" aria-hidden>
                肖像占位
                <br />
                portrait.jpg
              </span>
              <img
                className="pf-portrait-img"
                src={ASSET("zhang-portrait.jpg")}
                alt="张鹏翔"
                onError={hideOnError}
              />
            </span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── B · 信念 · 物理 × 数字 ─── */}
      <SceneFade active={sceneBelief}>
        <div className="pf-belief">
          <Reveal kind="fall" duration={560} className="pf-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;00 · BELIEF 信念
          </Reveal>
          <Reveal kind="blur" duration={1000} delay={120} className="pf-belief-h serif-cn">
            奇迹，诞生在<span className="pf-em">物理世界</span>
            <br />
            与<span className="pf-em">数字世界</span>的交汇处。
          </Reveal>
          <Reveal kind="rise" duration={760} delay={460} className="pf-belief-sub">
            从小痴迷科技 —— 爱<span className="pf-em">科学理论</span>，爱
            <span className="pf-em">动手实践</span>，也爱<span className="pf-em">科幻想象</span>。
          </Reveal>
          <div className="pf-fields">
            {FIELDS.map((f, i) => (
              <Reveal
                key={f}
                kind="scale"
                duration={520}
                delay={760 + i * 120}
                className="pf-field"
              >
                {f}
              </Reveal>
            ))}
            <Reveal kind="fade" duration={620} delay={1280} className="pf-fields-note mono">
              跨学科，是他的底色
            </Reveal>
          </div>
        </div>
      </SceneFade>

      {/* ─── C · 学术轨迹时间轴 ─── */}
      <SceneFade active={scenePath}>
        <div className="pf-path">
          <Reveal kind="fall" duration={560} className="pf-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;01 · PATH 学术轨迹
          </Reveal>
          <Reveal kind="rise" duration={720} delay={120} className="pf-sec-h serif-cn">
            一条很<span className="pf-em">「重」</span>的路。
          </Reveal>
          <div className="pf-tl">
            <span className="pf-tl-axis" />
            {PATH.map((p, i) => (
              <Reveal
                key={p.cn}
                kind="rise"
                duration={620}
                delay={260 + i * 180}
                className="pf-tl-node"
              >
                <span className="pf-tl-dot" />
                <span className="pf-tl-yr mono">{p.yr}</span>
                <span className="pf-tl-cn serif-cn">{p.cn}</span>
                <span className="pf-tl-en display-en">{p.en}</span>
                <span className="pf-tl-deg">{p.deg}</span>
                <span className="pf-tl-honor">{p.honor}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </SceneFade>

      {/* ─── D · 学术影响力数字 ─── */}
      <SceneFade active={sceneImpact}>
        <div className="pf-impact">
          <Reveal kind="fall" duration={560} className="pf-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;02 · IMPACT 学术影响力
          </Reveal>
          <div className="pf-metrics">
            {METRICS.map((m, i) => (
              <Reveal
                key={m.label}
                kind="scale"
                duration={640}
                delay={160 + i * 160}
                className="pf-metric"
              >
                <span className="pf-metric-num hero-num">
                  {at(3) && (
                    <NumberTicker
                      to={m.to}
                      decimals={0}
                      duration={1500}
                      delay={220 + i * 160}
                      suffix={m.suffix}
                    />
                  )}
                </span>
                <span className="pf-metric-label">{m.label}</span>
                <span className="pf-metric-en mono">{m.en}</span>
              </Reveal>
            ))}
          </div>
          <Reveal kind="wipe-r" duration={760} delay={720} className="pf-venues">
            <span className="pf-venue">Science</span>
            <span className="pf-venue-sep" />
            <span className="pf-venue">Nature 子刊</span>
            <span className="pf-venue-sep" />
            <span className="pf-venue">Physical Review Letters</span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── E · 代表作 ─── */}
      <SceneFade active={sceneWorks}>
        <div className="pf-works">
          <Reveal kind="fall" duration={560} className="pf-sec-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;03 · WORKS 代表作
          </Reveal>
          <div className="pf-work-list">
            {WORKS.map((w, i) => (
              <Reveal
                key={w.t}
                kind="wipe-r"
                duration={620}
                delay={180 + i * 160}
                className="pf-work"
              >
                <span className="pf-work-venue display-en">{w.venue}</span>
                <span className="pf-work-t serif-cn">{w.t}</span>
                <span className="pf-work-yr mono">{w.yr}</span>
                <span className="pf-work-cite">
                  <span className="pf-work-cite-n hero-num">{w.cite}</span>
                  <span className="pf-work-cite-l mono">引用</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </SceneFade>
    </div>
  );
}
