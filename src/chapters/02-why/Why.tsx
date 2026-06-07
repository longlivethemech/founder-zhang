import { Reveal } from "../../shared/Reveal";
import { SceneFade } from "../../shared/SceneFade";
import type { ChapterStepProps } from "../../registry/types";
import "./Why.css";

/** 他看到的"缝隙"——两侧现状 */
const GAP = [
  {
    k: "大语言模型",
    en: "LLM",
    body: "再强，也只是抽象的语言推演 —— 无法像人一样，与真实世界持续交互、积累体验。",
  },
  {
    k: "具身机器人",
    en: "ROBOTS",
    body: "有了精密的身体与传感器，真实任务里却仍然初级，泛化能力很有限。",
  },
];

/**
 * 02 · why — 为什么是他（3 step / 3 幕）
 *   A(0) 转身 · 放下新星轨道，回国创办
 *   B(1) 洞察 · 他看到的一道缝隙
 *   C(2) 核心理念 · 让机械生命和人类一起成长 + 署名
 */
export default function Why({ step }: ChapterStepProps) {
  const sceneA = step === 0;
  const sceneGap = step === 1;
  const sceneEnd = step === 2;

  return (
    <div className="wy-root">
      <div className="wy-ambient" aria-hidden />

      {/* ─── A · 转身 ─── */}
      <SceneFade active={sceneA}>
        <div className="wy-turn">
          <Reveal kind="fall" duration={560} className="wy-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;04 · TURN 转身
          </Reveal>
          <Reveal kind="blur" duration={1000} delay={120} className="wy-turn-h serif-cn">
            半年前，他放下了物理学界
            <br />
            一颗<span className="wy-em">新星</span>的轨道。
          </Reveal>
          <Reveal kind="rise" duration={760} delay={520} className="wy-turn-sub">
            回国创办<span className="wy-em">「智械工坊」</span>—— 做一个陪{" "}
            <span className="wy-em">5–10 岁</span> 孩子长大的<span className="wy-em">智能生命伙伴</span>。
          </Reveal>
          <Reveal kind="wipe-r" duration={820} delay={860} className="wy-bridge">
            <span className="wy-bridge-l mono">他研究的</span>
            <span className="wy-bridge-a display-en">neuromorphic spintronics</span>
            <span className="wy-bridge-arrow">→</span>
            <span className="wy-bridge-r">
              一个会<span className="wy-em">记得</span>、会<span className="wy-em">成长</span>的智能
            </span>
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── B · 洞察 · 一道缝隙 ─── */}
      <SceneFade active={sceneGap}>
        <div className="wy-gap">
          <Reveal kind="fall" duration={560} className="wy-eye mono">
            <span className="dot-accent" />
            &nbsp;&nbsp;05 · INSIGHT 洞察
          </Reveal>
          <Reveal kind="rise" duration={720} delay={120} className="wy-gap-h serif-cn">
            他看到的，是一道<span className="wy-em">缝隙</span>。
          </Reveal>
          <div className="wy-gap-cols">
            {GAP.map((g, i) => (
              <Reveal
                key={g.k}
                kind="scale"
                duration={620}
                delay={280 + i * 200}
                className="wy-gap-card"
              >
                <span className="wy-gap-en display-en">{g.en}</span>
                <span className="wy-gap-k serif-cn">{g.k}</span>
                <span className="wy-gap-body">{g.body}</span>
              </Reveal>
            ))}
            <Reveal kind="fade" duration={700} delay={760} className="wy-gap-vs" aria-hidden>
              缝隙
            </Reveal>
          </div>
          <Reveal kind="rise" duration={760} delay={900} className="wy-gap-punch">
            要实现<span className="wy-em">人机协同共生</span>，AI 必须以更
            <span className="wy-em">智慧</span>、更<span className="wy-em">可靠</span>、更
            <span className="wy-em">可亲</span>的形式，真正融入生活。
          </Reveal>
        </div>
      </SceneFade>

      {/* ─── C · 核心理念 ─── */}
      <SceneFade active={sceneEnd}>
        <div className="wy-end">
          <div className="wy-end-glow" aria-hidden />
          <Reveal kind="rise" duration={680} className="wy-end-lead">
            一个能做这些的人，<span className="wy-em">偏偏</span>选了这件事。
          </Reveal>
          <div className="wy-quote serif-cn">
            <Reveal kind="blur" duration={1000} delay={260} className="wy-q-big">
              让<span className="wy-em">机械生命</span>，
            </Reveal>
            <Reveal kind="rise" duration={900} delay={680} className="wy-q-big">
              和<span className="wy-em">人类</span>一起成长。
            </Reveal>
          </div>
          <Reveal kind="fade" duration={720} delay={1180} className="wy-end-note">
            在真实生活里积累经验、彼此陪伴，一起茁壮 —— 这，是智械工坊的核心理念。
          </Reveal>
          <Reveal kind="rise" duration={760} delay={1480} className="wy-sign">
            <span className="wy-sign-name serif-cn">张鹏翔</span>
            <span className="wy-sign-div" />
            <span className="wy-sign-studio mono">PENGXIANG ZHANG · 智械工坊</span>
          </Reveal>
        </div>
      </SceneFade>
    </div>
  );
}
