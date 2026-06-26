export default function Home() {
  return (
    <>
      {/* ============================================================
          Hero — 全屏油画背景
          ============================================================ */}
      <section className="relative h-screen overflow-hidden">
        {/* Oil painting background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/main-painting.png')",
          }}
        />

        {/* Radial vignette — darker edges, painting visible at center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 55% 45%, transparent 22%, rgba(13,11,9,0.45) 55%, rgba(13,11,9,0.82) 100%)",
          }}
        />

        {/* Museum-label title — lower right */}
        <div className="absolute bottom-0 right-0 px-8 pb-12 text-right sm:px-20 sm:pb-20">
          <h1
            className="text-[clamp(3rem,8vw,7rem)] font-light leading-[1.08] tracking-[0.05em]"
            style={{
              fontFamily: "var(--font-playfair), 'Noto Serif SC', serif",
              color: "var(--bone-paper)",
            }}
          >
            未完成之书
          </h1>
          <p
            className="mt-3 text-[0.6rem] tracking-[0.35em] uppercase opacity-50"
            style={{ color: "var(--old-canvas)" }}
          >
            THE UNFINISHED BOOK
          </p>
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[150px]" aria-hidden="true" />

      {/* ============================================================
          Section 1 — 油画 : 画中画 + 诗意描述
          ============================================================ */}
      <section className="mx-auto max-w-5xl px-8 sm:px-12">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">
          {/* Small framed painting */}
          <div className="w-full shrink-0 md:w-[340px]">
            <img
              src="/images/main-painting.png"
              alt="黑暗静物油画：信、戒指、钥匙、白花、石榴"
              className="aspect-[16/10] w-full object-cover"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(154,123,71,0.12), 0 0 90px 40px rgba(0,0,0,0.55)",
              }}
            />
          </div>

          {/* Poetic description */}
          <div
            className="space-y-2 text-sm leading-[2.1] opacity-55"
            style={{ color: "var(--old-canvas)" }}
          >
            <p>黑暗中的静物。一封信尚未拆开，</p>
            <p>戒指压着未说出口的话，</p>
            <p>钥匙不知道要开哪扇门，</p>
            <p>白花正在枯萎的边缘，</p>
            <p>石榴裂开，露出种子——</p>
            <p>像时间本身露出了内部的结构。</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[170px]" aria-hidden="true" />

      {/* ============================================================
          Section 2 — 今天可以问什么 : 三列极简网格
          ============================================================ */}
      <section className="mx-auto max-w-5xl px-8 sm:px-12">
        <h2
          className="mb-4 text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.2] tracking-[0.04em]"
          style={{
            fontFamily: "var(--font-cormorant), 'Noto Serif SC', serif",
            color: "var(--bone-paper)",
          }}
        >
          今天可以问什么
        </h2>
        <p
          className="mb-16 text-sm opacity-45"
          style={{ color: "var(--old-canvas)" }}
        >
          问题不必完整，犹豫本身也可以成为问题。
        </p>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3">
          {[
            "关于一段关系",
            "关于一次选择",
            "关于正在结束的事情",
            "关于一个反复出现的梦",
            "为创作寻找一个意象",
            "不设主题，只抽一张",
          ].map((q) => (
            <a
              key={q}
              href="#"
              className="gold-line-hover group block border-b px-0 py-8 no-underline"
              style={{ borderColor: "var(--varnish-brown)" }}
            >
              <span
                className="text-[0.95rem] tracking-[0.03em] transition-colors duration-700 group-hover:text-[var(--oxidized-gold)]"
                style={{ color: "var(--bone-paper)" }}
              >
                {q}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[170px]" aria-hidden="true" />

      {/* ============================================================
          Section 3 — 告别志 : 左对齐极简列表
          ============================================================ */}
      <section className="mx-auto max-w-2xl px-8 sm:px-12">
        <h2
          className="mb-4 text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.2] tracking-[0.04em]"
          style={{
            fontFamily: "var(--font-cormorant), 'Noto Serif SC', serif",
            color: "var(--bone-paper)",
          }}
        >
          告别志
        </h2>
        <p
          className="mb-16 text-sm opacity-45"
          style={{ color: "var(--old-canvas)" }}
        >
          关于死亡、仪式，以及人类如何与失去共处。
        </p>

        <div className="space-y-0">
          {[
            "人为什么把花带到死亡面前",
            "葬礼为什么需要一个具体的时间",
            "当名字留在网页上以后",
            "告别是否需要被看见",
            "遗物与记忆的物理形态",
          ].map((title) => (
            <a
              key={title}
              href="#"
              className="gold-line-hover group block border-b py-7 no-underline"
              style={{ borderColor: "var(--varnish-brown)" }}
            >
              <span
                className="text-[1rem] leading-[1.6] tracking-[0.03em] transition-colors duration-700 group-hover:text-[var(--oxidized-gold)]"
                style={{ color: "var(--bone-paper)" }}
              >
                {title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[170px]" aria-hidden="true" />

      {/* ============================================================
          Section 4 — 旧问录 : 时间线式排列
          ============================================================ */}
      <section className="mx-auto max-w-2xl px-8 sm:px-12">
        <h2
          className="mb-4 text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.2] tracking-[0.04em]"
          style={{
            fontFamily: "var(--font-cormorant), 'Noto Serif SC', serif",
            color: "var(--bone-paper)",
          }}
        >
          旧问录
        </h2>
        <p
          className="mb-16 text-sm opacity-45"
          style={{ color: "var(--old-canvas)" }}
        >
          时间并不会替所有问题作答。但它会改变我们阅读问题的方式。
        </p>

        <div className="space-y-0">
          {[
            {
              date: "2026.05.12",
              question: "塔罗的象征体系如何与荣格心理学对接？",
            },
            {
              date: "2026.04.28",
              question: "为什么雷诺曼比塔罗更直接？",
            },
            {
              date: "2026.04.03",
              question: "镜子在占卜传统中承担什么角色？",
            },
            {
              date: "2026.03.17",
              question: "焚香与塔罗——仪式感从何而来？",
            },
            {
              date: "2026.02.08",
              question: "一幅牌，一个人，一个下午。",
            },
          ].map((entry) => (
            <div
              key={entry.date}
              className="flex gap-6 border-b py-6"
              style={{ borderColor: "var(--varnish-brown)" }}
            >
              <span
                className="w-[6.5rem] shrink-0 pt-0.5 text-xs tracking-[0.08em] opacity-40"
                style={{ color: "var(--old-canvas)" }}
              >
                {entry.date}
              </span>
              <span
                className="text-[0.95rem] leading-[1.6] tracking-[0.02em]"
                style={{ color: "var(--bone-paper)" }}
              >
                {entry.question}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[170px]" aria-hidden="true" />

      {/* ============================================================
          Section 5 — 物的余生 : 意象网格
          ============================================================ */}
      <section className="mx-auto max-w-5xl px-8 sm:px-12">
        <h2
          className="mb-4 text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-[1.2] tracking-[0.04em]"
          style={{
            fontFamily: "var(--font-cormorant), 'Noto Serif SC', serif",
            color: "var(--bone-paper)",
          }}
        >
          物的余生
        </h2>
        <p
          className="mb-16 text-sm opacity-45"
          style={{ color: "var(--old-canvas)" }}
        >
          每个意象在三层中展开：卡牌层、物件层、文化层。
        </p>

        <div className="grid grid-cols-3 gap-x-8 gap-y-5 sm:grid-cols-5">
          {[
            "花",
            "信",
            "镜子",
            "戒指",
            "钥匙",
            "蜡烛",
            "石榴",
            "水面",
            "门",
            "书",
            "鸟",
            "船",
            "丝线",
            "灰烬",
            "空椅子",
          ].map((item) => (
            <span
              key={item}
              className="cursor-default text-sm tracking-[0.08em] opacity-40 transition-all duration-700 hover:opacity-65"
              style={{ color: "var(--old-canvas)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ============================================================
          Passage
          ============================================================ */}
      <div className="h-[200px]" aria-hidden="true" />

      {/* ============================================================
          Section 6 — 声明
          ============================================================ */}
      <section className="mx-auto max-w-xl px-8 pb-24 sm:px-12">
        <p
          className="mb-5 text-sm leading-[1.9] opacity-30"
          style={{ color: "var(--old-canvas)" }}
        >
          这里不负责预测命运。
          <br />
          它只负责保存那些原本没有被看见的东西。
        </p>
        <p
          className="text-xs leading-[1.7] opacity-18"
          style={{ color: "var(--old-canvas)" }}
        >
          抽牌内容仅用于娱乐、创作和自我反思，不提供医疗、法律、投资或生死相关判断。
        </p>
      </section>

      {/* ============================================================
          Footer
          ============================================================ */}
      <footer
        className="border-t"
        style={{ borderColor: "var(--varnish-brown)" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-8 sm:px-12">
          <span
            className="text-xs tracking-[0.06em] opacity-20"
            style={{ color: "var(--old-canvas)" }}
          >
            未完成之书 · The Book of Unfinished Things
          </span>
          <span
            className="text-xs tracking-[0.08em] opacity-20"
            style={{ color: "var(--old-canvas)" }}
          >
            2026
          </span>
        </div>
      </footer>
    </>
  );
}
