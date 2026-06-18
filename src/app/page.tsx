export default function Home() {
  return (
    <>
      {/* ===== Top Navigation ===== */}
      <header className="w-full border-b border-[var(--varnish-brown)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#"
            className="text-lg tracking-[0.08em] text-[var(--bone-paper)] no-underline font-[family-name:var(--font-serif)]"
          >
            未完成之书
          </a>
          <div className="flex gap-6 text-sm tracking-[0.05em] text-[var(--old-canvas)]">
            <a href="#" className="no-underline hover:text-[var(--bone-paper)] transition-colors duration-300">
              未明之问
            </a>
            <a href="#" className="no-underline hover:text-[var(--bone-paper)] transition-colors duration-300">
              告别志
            </a>
            <a href="#" className="no-underline hover:text-[var(--bone-paper)] transition-colors duration-300">
              旧问录
            </a>
            <a href="#" className="no-underline hover:text-[var(--bone-paper)] transition-colors duration-300">
              书后
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
          <p className="mb-6 text-xs tracking-[0.25em] text-[var(--old-canvas)] uppercase">
            THE BOOK OF UNFINISHED THINGS
          </p>
          <h1 className="mb-8 text-4xl leading-tight tracking-[0.06em] text-[var(--bone-paper)] font-[family-name:var(--font-serif)] sm:text-5xl">
            未完成之书
          </h1>
          <p className="mb-4 max-w-xl text-lg leading-relaxed text-[var(--bone-paper)]">
            有些问题没有答案。
            <br />
            它们只是在暗处，慢慢显出形状。
          </p>
          <p className="mb-10 max-w-lg text-sm leading-relaxed text-[var(--old-canvas)]">
            塔罗、雷诺曼，以及关于死亡、仪式与记忆的文化札记。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-block border border-[var(--old-canvas)]/40 px-6 py-3 text-sm tracking-[0.06em] text-[var(--bone-paper)] no-underline transition-all duration-500 hover:border-[var(--oxidized-gold)]/60 hover:text-[var(--bone-paper)] hover:bg-[var(--varnish-brown)]/30"
            >
              写下一个问题
            </a>
            <a
              href="#"
              className="inline-block border border-[var(--old-canvas)]/40 px-6 py-3 text-sm tracking-[0.06em] text-[var(--bone-paper)] no-underline transition-all duration-500 hover:border-[var(--oxidized-gold)]/60 hover:text-[var(--bone-paper)] hover:bg-[var(--varnish-brown)]/30"
            >
              阅读人类如何告别
            </a>
          </div>
        </section>

        {/* ===== Oil Painting Placeholder ===== */}
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          {/* Dark still-life oil painting — CSS + inline SVG composition */}
          <div
            className="relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-sm"
            style={{ background: "radial-gradient(ellipse at 60% 50%, #241C16 0%, #13110F 60%, #0D0B09 100%)" }}
            role="img"
            aria-label="黑暗静物油画：信、花、镜子、戒指、蜡烛、钥匙与石榴的意象组合"
          >
            {/* Vignette overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow:
                  "inset 0 0 120px 40px rgba(13,11,9,0.9), inset 0 0 60px 20px rgba(13,11,9,0.7)",
              }}
            />

            {/* Canvas texture grain */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Still-life SVG composition */}
            <svg
              viewBox="0 0 800 500"
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <filter id="oil-soft">
                  <feGaussianBlur stdDeviation="0.8" />
                </filter>
                <filter id="oil-softer">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
                <linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B9A98F" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0D0B09" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Letter — center-left */}
              <g filter="url(#oil-soft)" opacity="0.5">
                <rect
                  x="200"
                  y="180"
                  width="100"
                  height="70"
                  rx="1"
                  fill="#B9A98F"
                  opacity="0.3"
                />
                <line x1="220" y1="198" x2="280" y2="198" stroke="#E3DAC9" strokeWidth="0.8" opacity="0.4" />
                <line x1="220" y1="210" x2="270" y2="210" stroke="#E3DAC9" strokeWidth="0.8" opacity="0.35" />
                <line x1="220" y1="222" x2="275" y2="222" stroke="#E3DAC9" strokeWidth="0.8" opacity="0.3" />
                <circle cx="280" cy="230" r="4" fill="none" stroke="#9A7B47" strokeWidth="0.6" opacity="0.5" />
              </g>

              {/* Mirror — upper-right */}
              <g filter="url(#oil-softer)" opacity="0.4">
                <ellipse cx="580" cy="140" rx="55" ry="65" fill="none" stroke="#B9A98F" strokeWidth="1" opacity="0.4" />
                <ellipse cx="580" cy="140" rx="48" ry="57" fill="#1D2631" opacity="0.2" />
                <ellipse cx="570" cy="125" rx="15" ry="20" fill="#E3DAC9" opacity="0.08" />
              </g>

              {/* Candle — center, behind other objects */}
              <g filter="url(#oil-soft)" opacity="0.45">
                <rect x="395" y="130" width="14" height="70" rx="2" fill="#E3DAC9" opacity="0.25" />
                <ellipse cx="402" cy="128" rx="7" ry="4" fill="#B9A98F" opacity="0.3" />
                <ellipse cx="402" cy="122" rx="3" ry="6" fill="#9A7B47" opacity="0.3" />
                {/* Warm glow */}
                <radialGradient id="candle-glow">
                  <stop offset="0%" stopColor="#9A7B47" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#9A7B47" stopOpacity="0" />
                </radialGradient>
                <circle cx="402" cy="120" r="50" fill="url(#candle-glow)" />
              </g>

              {/* Pomegranate — lower-right foreground */}
              <g filter="url(#oil-soft)" opacity="0.5">
                <ellipse cx="620" cy="340" rx="40" ry="38" fill="#672F34" opacity="0.35" />
                <ellipse cx="620" cy="340" rx="35" ry="33" fill="#37463B" opacity="0.15" />
                {/* Crown */}
                <path
                  d="M605 310 L610 300 L615 312 L620 298 L625 312 L630 300 L635 310"
                  fill="#9A7B47"
                  opacity="0.3"
                />
                {/* Seeds hint */}
                <circle cx="612" cy="340" r="3" fill="#672F34" opacity="0.4" />
                <circle cx="622" cy="345" r="3" fill="#672F34" opacity="0.35" />
                <circle cx="618" cy="332" r="3" fill="#672F34" opacity="0.35" />
              </g>

              {/* Flower — left side */}
              <g filter="url(#oil-softer)" opacity="0.4">
                <ellipse cx="140" cy="300" rx="4" ry="35" fill="#37463B" opacity="0.5" />
                <circle cx="140" cy="275" r="22" fill="#B9A98F" opacity="0.15" />
                <circle cx="132" cy="268" r="12" fill="#E3DAC9" opacity="0.12" />
                <circle cx="148" cy="268" r="12" fill="#E3DAC9" opacity="0.12" />
                <circle cx="140" cy="262" r="12" fill="#E3DAC9" opacity="0.1" />
                <circle cx="134" cy="276" r="8" fill="#672F34" opacity="0.15" />
              </g>

              {/* Key — lower center */}
              <g filter="url(#oil-soft)" opacity="0.4">
                <circle cx="440" cy="350" r="10" fill="none" stroke="#9A7B47" strokeWidth="1" opacity="0.4" />
                <line x1="450" y1="350" x2="490" y2="350" stroke="#9A7B47" strokeWidth="1.2" opacity="0.35" />
                <line x1="478" y1="350" x2="478" y2="358" stroke="#9A7B47" strokeWidth="1" opacity="0.3" />
                <line x1="485" y1="350" x2="485" y2="356" stroke="#9A7B47" strokeWidth="1" opacity="0.3" />
              </g>

              {/* Ring — on the letter */}
              <g filter="url(#oil-soft)" opacity="0.4">
                <circle cx="255" cy="225" r="8" fill="none" stroke="#9A7B47" strokeWidth="1.2" opacity="0.45" />
                <circle
                  cx="252"
                  cy="220"
                  r="3"
                  fill="#672F34"
                  opacity="0.25"
                />
              </g>

              {/* Water surface — bottom area */}
              <g filter="url(#oil-softer)" opacity="0.25">
                <ellipse cx="350" cy="440" rx="250" ry="30" fill="#1D2631" opacity="0.2" />
                <line x1="150" y1="435" x2="550" y2="438" stroke="#9A7B47" strokeWidth="0.4" opacity="0.2" />
                <line x1="200" y1="445" x2="500" y2="448" stroke="#9A7B47" strokeWidth="0.3" opacity="0.15" />
              </g>

              {/* Book — bottom left */}
              <g filter="url(#oil-soft)" opacity="0.35">
                <rect x="100" y="370" width="80" height="55" rx="2" fill="#241C16" opacity="0.4" />
                <rect x="100" y="370" width="80" height="55" rx="2" fill="none" stroke="#B9A98F" strokeWidth="0.6" opacity="0.3" />
                <line x1="140" y1="375" x2="140" y2="420" stroke="#B9A98F" strokeWidth="0.5" opacity="0.2" />
                <line x1="110" y1="382" x2="133" y2="382" stroke="#E3DAC9" strokeWidth="0.6" opacity="0.25" />
                <line x1="110" y1="390" x2="133" y2="390" stroke="#E3DAC9" strokeWidth="0.6" opacity="0.2" />
              </g>
            </svg>
          </div>

          <p className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-[var(--old-canvas)]">
            每一幅图像，都不负责替你决定。
            <br />
            它只是让问题暂时变得可见。
          </p>
        </section>

        {/* ===== Today's Questions ===== */}
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <h2 className="mb-2 text-2xl tracking-[0.06em] text-[var(--bone-paper)] font-[family-name:var(--font-serif)]">
            今天可以问什么
          </h2>
          <p className="mb-10 text-sm text-[var(--old-canvas)]">
            问题不必完整，犹豫本身也可以成为问题。
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "关于一段关系",
                note: "过去从未被写清的那一行。",
              },
              {
                title: "关于一次选择",
                note: "门已经在眼前，你需要的是停下来。",
              },
              {
                title: "关于正在结束的事情",
                note: "缓慢退潮比决堤更难被辨认。",
              },
              {
                title: "关于一个反复出现的梦",
                note: "重复本身也许就是回答。",
              },
              {
                title: "为创作寻找一个意象",
                note: "画面比定义更先抵达。",
              },
              {
                title: "不设主题，只抽一张",
                note: "让图像先说话。",
              },
            ].map((item) => (
              <a
                key={item.title}
                href="#"
                className="group block border border-[var(--varnish-brown)] bg-[var(--void-brown)]/40 px-6 py-6 no-underline transition-all duration-500 hover:border-[var(--oxidized-gold)]/30 hover:bg-[var(--varnish-brown)]/20"
              >
                <h3 className="mb-2 text-base tracking-[0.04em] text-[var(--bone-paper)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--old-canvas)]">
                  {item.note}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ===== Recent Farewells ===== */}
        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <h2 className="mb-2 text-2xl tracking-[0.06em] text-[var(--bone-paper)] font-[family-name:var(--font-serif)]">
            最近写下的告别
          </h2>
          <p className="mb-10 text-sm text-[var(--old-canvas)]">
            关于死亡、仪式，以及人类如何与失去共处。
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "人为什么把花带到死亡面前",
                category: "仪式",
                summary:
                  "从葬礼花束、墓前供花到纪念仪式中的植物象征。",
              },
              {
                title: "葬礼为什么需要一个具体的时间",
                category: "仪式",
                summary:
                  "送别为何常常需要被安排在某一天、某一处、某一刻。",
              },
              {
                title: "当名字留在网页上以后",
                category: "纪念",
                summary:
                  "数字纪念页面、搜索结果与现代人的记忆方式。",
              },
            ].map((article) => (
              <div
                key={article.title}
                className="flex flex-col border border-[var(--varnish-brown)] bg-[var(--void-brown)]/40 px-6 py-6"
              >
                <span className="mb-3 inline-block w-fit border border-[var(--dried-wine)]/50 px-2 py-0.5 text-xs tracking-[0.08em] text-[var(--dried-wine)]">
                  {article.category}
                </span>
                <h3 className="mb-3 text-base leading-relaxed tracking-[0.04em] text-[var(--bone-paper)] font-[family-name:var(--font-serif)]">
                  {article.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--old-canvas)]">
                  {article.summary}
                </p>
                <a
                  href="#"
                  className="self-start text-sm tracking-[0.06em] text-[var(--old-canvas)] no-underline transition-colors duration-300 hover:text-[var(--bone-paper)]"
                >
                  暂时翻开
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Old Questions ===== */}
        <section className="mx-auto max-w-3xl px-6 pb-24 sm:px-10">
          <div className="border border-[var(--varnish-brown)] bg-[var(--void-brown)]/40 px-8 py-12 text-center">
            <h2 className="mb-4 text-2xl tracking-[0.06em] text-[var(--bone-paper)] font-[family-name:var(--font-serif)]">
              旧问录
            </h2>
            <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed text-[var(--old-canvas)]">
              时间并不会替所有问题作答。
              <br />
              但它会改变我们阅读问题的方式。
            </p>
            <a
              href="#"
              className="inline-block border border-[var(--old-canvas)]/40 px-8 py-3 text-sm tracking-[0.06em] text-[var(--bone-paper)] no-underline transition-all duration-500 hover:border-[var(--oxidized-gold)]/60 hover:bg-[var(--varnish-brown)]/30"
            >
              打开旧问录
            </a>
          </div>
        </section>

        {/* ===== Disclaimer ===== */}
        <section className="mx-auto max-w-3xl px-6 pb-20 sm:px-10">
          <div className="border-t border-[var(--varnish-brown)] pt-12 text-center">
            <p className="mb-4 text-sm leading-relaxed text-[var(--old-canvas)]">
              这里不负责预测命运。
              <br />
              它只负责保存那些原本没有被看见的东西。
            </p>
            <p className="text-xs leading-relaxed text-[var(--old-canvas)]/60">
              抽牌内容仅用于娱乐、创作和自我反思，不提供医疗、法律、投资或生死相关判断。
            </p>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="border-t border-[var(--varnish-brown)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[var(--old-canvas)]/50 sm:px-10">
          <span>未完成之书 · The Book of Unfinished Things</span>
          <div className="flex gap-6">
            <a href="#" className="no-underline hover:text-[var(--old-canvas)] transition-colors duration-300">
              书后
            </a>
            <a href="#" className="no-underline hover:text-[var(--old-canvas)] transition-colors duration-300">
              内容边界
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
