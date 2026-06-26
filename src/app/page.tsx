export default function Home() {
  return (
    <>
      {/* ============================================================
          Top Navigation — 美术馆指示牌
          ============================================================ */}
      <header className="w-full">
        <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-8 py-6 sm:px-12">
          <a
            href="#"
            className="text-sm tracking-[0.12em] text-[var(--bone-paper)] no-underline font-[family-name:var(--font-serif)] opacity-80 hover:opacity-100 transition-opacity duration-500"
          >
            未完成之书
          </a>
          <div className="flex gap-8">
            {["未明之问", "告别志", "旧问录", "书后"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.12em] text-[var(--old-canvas)] no-underline opacity-50 hover:opacity-80 transition-opacity duration-500"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* ============================================================
            Hero — 展签式标题
            ============================================================ */}
        <section className="mx-auto max-w-[88rem] px-8 pt-28 pb-8 sm:px-12 sm:pt-36">
          <p className="gallery-caption mb-8 animate-fade-rise">
            THE BOOK OF UNFINISHED THINGS
          </p>

          <h1 className="gallery-label mb-10 animate-fade-rise animate-delay-1">
            未完成之书
          </h1>

          <div className="mb-6 animate-fade-rise animate-delay-2">
            <p className="gallery-note">
              有些问题没有答案。
              <br />
              它们只是在暗处，慢慢显出形状。
            </p>
          </div>

          <p className="mb-12 text-sm leading-relaxed text-[var(--old-canvas)] opacity-60 animate-fade-rise animate-delay-2">
            塔罗、雷诺曼，以及关于死亡、仪式与记忆的文化札记。
          </p>

          <div className="flex flex-wrap gap-5 animate-fade-rise animate-delay-3">
            <a href="#" className="portal-btn">
              写下一个问题
            </a>
            <a href="#" className="portal-btn">
              阅读人类如何告别
            </a>
          </div>
        </section>

        {/* ============================================================
            Oil Painting — 古典画框 + 静物油画
            ============================================================ */}
        <div className="silent-passage" aria-hidden="true" />

        <section className="mx-auto max-w-[88rem] px-8 pb-4 sm:px-12">
          <div className="mx-auto w-full max-w-4xl">
            {/* 画框容器 */}
            <div className="oil-frame varnish-sheen" role="img" aria-label="黑暗静物油画：信、花、镜子、戒指、蜡烛、钥匙与石榴的意象组合">
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse at 55% 45%, #2A2016 0%, #1A1510 40%, #0E0C09 70%, #080605 100%)",
                }}
              >
                {/* Canvas grain */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
                  }}
                />

                {/* Vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow:
                      "inset 0 0 140px 50px rgba(8,6,5,0.92), inset 0 0 60px 25px rgba(8,6,5,0.7)",
                  }}
                />

                {/* Candle warm glow behind everything */}
                <div
                  className="pointer-events-none absolute"
                  style={{
                    left: "48%",
                    top: "18%",
                    width: "200px",
                    height: "200px",
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(154,123,71,0.12) 0%, rgba(154,123,71,0.04) 40%, transparent 70%)",
                  }}
                />

                {/* SVG still-life */}
                <svg
                  viewBox="0 0 800 500"
                  className="absolute inset-0 h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="oil-soft">
                      <feGaussianBlur stdDeviation="0.7" />
                    </filter>
                    <filter id="oil-softer">
                      <feGaussianBlur stdDeviation="1.8" />
                    </filter>
                    <filter id="oil-brush">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>

                  {/* === Background drapery hint === */}
                  <g filter="url(#oil-softer)" opacity="0.08">
                    <path d="M0 0 Q200 80 400 40 Q600 0 800 60 L800 0 Z" fill="#241C16" />
                    <path d="M0 60 Q300 140 500 100 Q700 60 800 120 L800 0 L0 0 Z" fill="#1A1510" />
                  </g>

                  {/* === Table surface === */}
                  <g filter="url(#oil-soft)" opacity="0.3">
                    <rect x="0" y="340" width="800" height="160" fill="#1A1510" opacity="0.5" />
                    <line x1="0" y1="340" x2="800" y2="340" stroke="#2A2016" strokeWidth="1" opacity="0.4" />
                  </g>

                  {/* === Letter — center-left === */}
                  <g filter="url(#oil-soft)" opacity="0.55">
                    <rect x="180" y="170" width="110" height="80" rx="1" fill="#D4C8AD" opacity="0.18" />
                    <rect x="180" y="170" width="110" height="80" rx="1" fill="none" stroke="#B9A98F" strokeWidth="0.5" opacity="0.25" />
                    <line x1="200" y1="190" x2="270" y2="190" stroke="#E3DAC9" strokeWidth="0.7" opacity="0.35" />
                    <line x1="200" y1="203" x2="260" y2="203" stroke="#E3DAC9" strokeWidth="0.7" opacity="0.3" />
                    <line x1="200" y1="216" x2="265" y2="216" stroke="#E3DAC9" strokeWidth="0.7" opacity="0.25" />
                    <line x1="200" y1="229" x2="240" y2="229" stroke="#E3DAC9" strokeWidth="0.7" opacity="0.2" />
                    {/* Wax seal */}
                    <circle cx="275" cy="238" r="5" fill="none" stroke="#8B6F3D" strokeWidth="0.7" opacity="0.45" />
                    <circle cx="275" cy="238" r="3" fill="#672F34" opacity="0.25" />
                  </g>

                  {/* === Ring — on the letter === */}
                  <g filter="url(#oil-soft)" opacity="0.5">
                    <circle cx="230" cy="232" r="9" fill="none" stroke="#A8894F" strokeWidth="1" opacity="0.5" />
                    <circle cx="227" cy="227" r="3.5" fill="#672F34" opacity="0.3" />
                  </g>

                  {/* === Mirror — upper-right === */}
                  <g filter="url(#oil-softer)" opacity="0.45">
                    <ellipse cx="590" cy="130" rx="58" ry="68" fill="none" stroke="#8B6F3D" strokeWidth="0.8" opacity="0.3" />
                    <ellipse cx="590" cy="130" rx="50" ry="59" fill="#1D2631" opacity="0.18" />
                    <ellipse cx="578" cy="112" rx="16" ry="22" fill="#E3DAC9" opacity="0.07" />
                    <ellipse cx="578" cy="112" rx="10" ry="14" fill="#E3DAC9" opacity="0.05" />
                  </g>

                  {/* === Candle — center, behind letter === */}
                  <g filter="url(#oil-soft)" opacity="0.5">
                    <rect x="398" y="115" width="16" height="80" rx="2" fill="#E3DAC9" opacity="0.2" />
                    <rect x="398" y="115" width="16" height="80" rx="2" fill="none" stroke="#B9A98F" strokeWidth="0.4" opacity="0.25" />
                    <ellipse cx="406" cy="112" rx="8" ry="4" fill="#D4C8AD" opacity="0.25" />
                    <ellipse cx="406" cy="105" rx="3.5" ry="7" fill="#A8894F" opacity="0.35" />
                    {/* Flame */}
                    <ellipse cx="406" cy="102" rx="2" ry="5" fill="#E3DAC9" opacity="0.3" />
                    <ellipse cx="406" cy="100" rx="1.5" ry="3" fill="#E3DAC9" opacity="0.2" />
                    {/* Dripping wax */}
                    <ellipse cx="402" cy="118" rx="3" ry="5" fill="#D4C8AD" opacity="0.15" />
                    <ellipse cx="410" cy="120" rx="2" ry="4" fill="#D4C8AD" opacity="0.12" />
                  </g>

                  {/* === Pomegranate — lower-right === */}
                  <g filter="url(#oil-soft)" opacity="0.5">
                    <ellipse cx="640" cy="350" rx="42" ry="40" fill="#672F34" opacity="0.3" />
                    <ellipse cx="640" cy="350" rx="36" ry="34" fill="#4A1E25" opacity="0.2" />
                    {/* Highlight */}
                    <ellipse cx="628" cy="335" rx="12" ry="8" fill="#E3DAC9" opacity="0.08" />
                    {/* Crown */}
                    <path d="M622 318 L628 306 L634 320 L640 304 L646 320 L652 306 L658 318" fill="none" stroke="#8B6F3D" strokeWidth="0.8" opacity="0.35" />
                    {/* Seeds visible through crack */}
                    <circle cx="632" cy="352" r="2.5" fill="#672F34" opacity="0.4" />
                    <circle cx="642" cy="348" r="2.5" fill="#672F34" opacity="0.35" />
                    <circle cx="638" cy="358" r="2.5" fill="#672F34" opacity="0.3" />
                    <circle cx="648" cy="354" r="2.5" fill="#672F34" opacity="0.35" />
                  </g>

                  {/* === Flower — left side === */}
                  <g filter="url(#oil-softer)" opacity="0.45">
                    {/* Stem */}
                    <path d="M130 345 Q125 310 135 280 Q138 265 140 255" fill="none" stroke="#37463B" strokeWidth="2.5" opacity="0.45" />
                    {/* Leaves */}
                    <ellipse cx="122" cy="310" rx="18" ry="6" fill="#37463B" opacity="0.3" transform="rotate(-30 122 310)" />
                    <ellipse cx="145" cy="295" rx="15" ry="5" fill="#2E3B32" opacity="0.25" transform="rotate(20 145 295)" />
                    {/* Petals — layered */}
                    <circle cx="140" cy="250" r="24" fill="#D4C8AD" opacity="0.1" />
                    <circle cx="131" cy="242" r="14" fill="#E3DAC9" opacity="0.1" />
                    <circle cx="149" cy="242" r="14" fill="#E3DAC9" opacity="0.1" />
                    <circle cx="135" cy="235" r="12" fill="#E3DAC9" opacity="0.08" />
                    <circle cx="145" cy="235" r="12" fill="#E3DAC9" opacity="0.08" />
                    <circle cx="140" cy="244" r="10" fill="#E3DAC9" opacity="0.09" />
                    {/* Center */}
                    <circle cx="140" cy="248" r="6" fill="#672F34" opacity="0.2" />
                    {/* Drooping petal */}
                    <ellipse cx="128" cy="258" rx="10" ry="5" fill="#D4C8AD" opacity="0.06" transform="rotate(-15 128 258)" />
                  </g>

                  {/* === Key — lower center === */}
                  <g filter="url(#oil-soft)" opacity="0.45">
                    <circle cx="450" cy="365" r="11" fill="none" stroke="#8B6F3D" strokeWidth="0.9" opacity="0.4" />
                    <circle cx="450" cy="365" r="7" fill="none" stroke="#8B6F3D" strokeWidth="0.5" opacity="0.25" />
                    <line x1="461" y1="365" x2="505" y2="365" stroke="#8B6F3D" strokeWidth="1" opacity="0.35" />
                    <line x1="492" y1="365" x2="492" y2="374" stroke="#8B6F3D" strokeWidth="0.9" opacity="0.3" />
                    <line x1="500" y1="365" x2="500" y2="372" stroke="#8B6F3D" strokeWidth="0.9" opacity="0.3" />
                  </g>

                  {/* === Water surface — bottom === */}
                  <g filter="url(#oil-softer)" opacity="0.2">
                    <ellipse cx="360" cy="455" rx="280" ry="25" fill="#1D2631" opacity="0.15" />
                    <path d="M120 452 Q250 448 400 453 Q550 458 680 450" fill="none" stroke="#8B6F3D" strokeWidth="0.3" opacity="0.2" />
                    <path d="M160 462 Q300 456 440 462 Q580 468 640 460" fill="none" stroke="#8B6F3D" strokeWidth="0.25" opacity="0.15" />
                  </g>

                  {/* === Book — bottom left === */}
                  <g filter="url(#oil-soft)" opacity="0.4">
                    <rect x="80" y="375" width="85" height="60" rx="2" fill="#1A1510" opacity="0.5" />
                    <rect x="80" y="375" width="85" height="60" rx="2" fill="none" stroke="#8B6F3D" strokeWidth="0.5" opacity="0.3" />
                    {/* Spine line */}
                    <line x1="122" y1="378" x2="122" y2="432" stroke="#8B6F3D" strokeWidth="0.4" opacity="0.2" />
                    {/* Text lines on left page */}
                    <line x1="90" y1="388" x2="115" y2="388" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.2" />
                    <line x1="90" y1="396" x2="115" y2="396" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.18" />
                    <line x1="90" y1="404" x2="112" y2="404" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.15" />
                    {/* Right page */}
                    <line x1="128" y1="388" x2="158" y2="388" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.2" />
                    <line x1="128" y1="396" x2="158" y2="396" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.18" />
                    <line x1="128" y1="404" x2="155" y2="404" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.15" />
                    <line x1="128" y1="412" x2="150" y2="412" stroke="#E3DAC9" strokeWidth="0.5" opacity="0.12" />
                    {/* Bookmark */}
                    <line x1="158" y1="382" x2="158" y2="410" stroke="#672F34" strokeWidth="1.5" opacity="0.3" />
                  </g>

                  {/* === Dust motes in candlelight === */}
                  <g opacity="0.15">
                    <circle cx="380" cy="130" r="1" fill="#E3DAC9" />
                    <circle cx="420" cy="145" r="0.8" fill="#E3DAC9" />
                    <circle cx="395" cy="155" r="0.6" fill="#E3DAC9" />
                    <circle cx="430" cy="120" r="0.7" fill="#E3DAC9" />
                    <circle cx="370" cy="140" r="0.5" fill="#E3DAC9" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Painting caption */}
            <p className="mt-8 ml-2 text-xs tracking-[0.12em] text-[var(--old-canvas)] opacity-40">
              主油画 · 信、花、戒指、蜡烛、钥匙与石榴
            </p>
          </div>

          <p className="mt-8 max-w-[32ch] text-sm leading-relaxed text-[var(--old-canvas)] opacity-50">
            每一幅图像，都不负责替你决定。
            <br />
            它只是让问题暂时变得可见。
          </p>
        </section>

        {/* ============================================================
            Today's Questions — 不对称列表
            ============================================================ */}
        <div className="silent-passage" aria-hidden="true" />

        <section className="mx-auto max-w-[88rem] px-8 sm:px-12">
          <h2 className="gallery-label mb-4 text-3xl sm:text-4xl">
            今天可以问什么
          </h2>
          <p className="mb-16 text-sm text-[var(--old-canvas)] opacity-50">
            问题不必完整，犹豫本身也可以成为问题。
          </p>

          <div className="grid gap-0 sm:grid-cols-2">
            {[
              { title: "关于一段关系", note: "过去从未被写清的那一行。" },
              { title: "关于一次选择", note: "门已经在眼前，你需要的是停下来。" },
              { title: "关于正在结束的事情", note: "缓慢退潮比决堤更难被辨认。" },
              { title: "关于一个反复出现的梦", note: "重复本身也许就是回答。" },
              { title: "为创作寻找一个意象", note: "画面比定义更先抵达。" },
              { title: "不设主题，只抽一张", note: "让图像先说话。" },
            ].map((item) => (
              <a
                key={item.title}
                href="#"
                className="gold-accent-left group block border-b border-[var(--velvet-shadow)] py-6 pr-6 no-underline"
              >
                <h3 className="mb-1.5 text-base tracking-[0.03em] text-[var(--bone-paper)] transition-colors duration-500 group-hover:text-[var(--parchment)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--old-canvas)] opacity-45 transition-opacity duration-500 group-hover:opacity-65">
                  {item.note}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* ============================================================
            Farewells — 杂志式列表
            ============================================================ */}
        <div className="silent-passage" aria-hidden="true" />

        <section className="mx-auto max-w-[88rem] px-8 sm:px-12">
          <h2 className="gallery-label mb-4 text-3xl sm:text-4xl">
            最近写下的告别
          </h2>
          <p className="mb-16 text-sm text-[var(--old-canvas)] opacity-50">
            关于死亡、仪式，以及人类如何与失去共处。
          </p>

          <div className="max-w-2xl">
            {[
              {
                title: "人为什么把花带到死亡面前",
                category: "仪式",
                summary: "从葬礼花束、墓前供花到纪念仪式中的植物象征。",
              },
              {
                title: "葬礼为什么需要一个具体的时间",
                category: "仪式",
                summary: "送别为何常常需要被安排在某一天、某一处、某一刻。",
              },
              {
                title: "当名字留在网页上以后",
                category: "纪念",
                summary: "数字纪念页面、搜索结果与现代人的记忆方式。",
              },
            ].map((article) => (
              <a key={article.title} href="#" className="farewell-entry no-underline group">
                <span className="category-tag">{article.category}</span>
                <h3 className="entry-title group-hover:text-[var(--parchment)] transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="entry-summary">{article.summary}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ============================================================
            Old Questions — 极度留白
            ============================================================ */}
        <div className="silent-passage" aria-hidden="true" />

        <section className="mx-auto max-w-[88rem] px-8 sm:px-12">
          <div className="old-questions-sanctum">
            <h2 className="gallery-label mb-6 text-3xl sm:text-4xl">
              旧问录
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-[var(--old-canvas)] opacity-50">
              时间并不会替所有问题作答。
              <br />
              但它会改变我们阅读问题的方式。
            </p>
            <a href="#" className="portal-btn">
              打开旧问录
            </a>
          </div>
        </section>

        {/* ============================================================
            Disclaimer
            ============================================================ */}
        <div className="silent-passage" aria-hidden="true" />

        <section className="mx-auto max-w-[88rem] px-8 pb-24 sm:px-12">
          <div className="max-w-[34ch]">
            <p className="mb-5 text-sm leading-relaxed text-[var(--old-canvas)] opacity-40">
              这里不负责预测命运。
              <br />
              它只负责保存那些原本没有被看见的东西。
            </p>
            <p className="text-xs leading-relaxed text-[var(--old-canvas)] opacity-25">
              抽牌内容仅用于娱乐、创作和自我反思，不提供医疗、法律、投资或生死相关判断。
            </p>
          </div>
        </section>
      </main>

      {/* ============================================================
          Footer
          ============================================================ */}
      <footer className="border-t border-[var(--velvet-shadow)]">
        <div className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-4 px-8 py-8 sm:px-12">
          <span className="text-xs tracking-[0.06em] text-[var(--old-canvas)] opacity-30">
            未完成之书 · The Book of Unfinished Things
          </span>
          <div className="flex gap-8">
            {["书后", "内容边界"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.08em] text-[var(--old-canvas)] no-underline opacity-30 hover:opacity-50 transition-opacity duration-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
