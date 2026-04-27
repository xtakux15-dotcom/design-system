/* Header, Hero, Marquee, Issues, Reasons */
const { useState, useEffect, useRef } = React;

function Header({ theme, setTheme }) {
  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <div className="brand-mark">A</div>
        <div className="brand-name">
          ADDITIONAL
          <small>FIRE SAFETY INSPECTION</small>
        </div>
      </a>
      <nav className="nav">
        <a href="#service">SERVICE</a>
        <a href="#price">PRICE</a>
        <a href="#flow">FLOW</a>
        <a href="#area">AREA</a>
        <a href="#faq">FAQ</a>
        <a href="#company">COMPANY</a>
        <button className="nav-cta" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'start'})}>
          無料見積もり →
        </button>
      </nav>
    </header>
  );
}

function MarqueeDivider({ items }) {
  const arr = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-divider">
      <div className="xtk-marquee-track">
        {arr.map((t, i) => (
          <span key={i}>
            {t}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div>
          <div className="hero-tag">
            <span className="dot" />
            OSAKA × TOKYO / 2 BASE OPERATION
          </div>
          <h1>
            <span className="stroke">建物の</span><span className="accent">命綱</span>を、<br/>
            一棟も<br/>
            <span className="accent">見落とさない。</span>
          </h1>
          <p className="hero-sub">
            消防法に基づく機器点検・総合点検から、消防署への報告書提出代行まで。<br/>
            <strong>有資格者【30名以上】</strong>が、大阪・東京の2拠点体制で、年間【1,200棟】の建物を守っています。
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
              無料見積もりを依頼する
              <span className="arrow">→</span>
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('price').scrollIntoView({behavior:'smooth'})}>
              SEE PRICING
            </button>
          </div>
          <div className="hero-phones">
            <div className="phone-card">
              <div className="city">OSAKA HQ</div>
              <div className="number">06-XXXX-XXXX</div>
              <div className="hours">平日 9:00–18:00 / 緊急 24h対応</div>
            </div>
            <div className="phone-card">
              <div className="city">TOKYO BR</div>
              <div className="number">03-XXXX-XXXX</div>
              <div className="hours">平日 9:00–18:00 / 緊急 24h対応</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img xtk-float">
            <div className="hero-img-label">FIELD / 2026</div>
            <div className="hero-img-meta">
              <span>大阪市内 / 商業ビル</span>
              <b>SCAN 04</b>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">1,200<small>棟</small></div>
              <div className="lbl">ANNUAL INSPECTION</div>
            </div>
            <div className="hero-stat">
              <div className="num">15<small>YR</small></div>
              <div className="lbl">SINCE 2011</div>
            </div>
            <div className="hero-stat">
              <div className="num">30<small>+</small></div>
              <div className="lbl">QUALIFIED STAFF</div>
            </div>
            <div className="hero-stat">
              <div className="num">100<small>%</small></div>
              <div className="lbl">REPORT FILING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Issues() {
  const items = [
    { num: 'PROBLEM 01', title: '点検業者の質に\nバラつきがある', body: '報告書の内容、現場の対応、納期。同じ法定点検でも業者によって品質が大きく異なり、複数物件を抱えるオーナーほど管理負荷が増える。' },
    { num: 'PROBLEM 02', title: '法令遵守の確実な\n履行が不安', body: '消防法の改正、機器点検と総合点検の頻度、消防署への報告書提出。一つでも抜けるとコンプライアンス違反のリスクに直結する。' },
    { num: 'PROBLEM 03', title: '報告書のスピード・\n柔軟な対応がない', body: 'テナントの営業時間外、夜間・休日の点検対応、不具合発見時の改修工事の段取り。既存業者では対応しきれない課題が積み上がる。' },
  ];
  return (
    <section className="issues">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">ISSUE / 課題</span>
          <h2 className="section-h2-en">SAME LAW.<br/><span style={{color:'var(--t-accent)'}}>DIFFERENT QUALITY.</span></h2>
          <p className="section-h2-ja">建物オーナー・管理会社が、いま抱えている3つの課題</p>
        </div>
        <div className="issues-grid">
          {items.map((it, i) => (
            <div key={i} className="issue-card">
              <div className="num">{it.num}</div>
              <h3>{it.title.split('\n').map((s,j)=><span key={j}>{s}<br/></span>)}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
        <div className="issues-arrow">SOLUTION</div>
        <div className="issues-solution">
          <span className="stroke">点検は、</span><span className="accent">全棟・全部屋</span>、<br/>
          <span className="stroke">同じ品質で。</span>
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  const items = [
    {
      num: 'REASON 01',
      en: <>QUALIFIED<br/><span className="accent">EYES.</span></>,
      ja: '有資格者による確実な点検',
      body: '消防設備士甲種・乙種、消防設備点検資格者を【30名以上】配置。全ての点検は資格者責任のもと、機器点検・総合点検の両方を一貫して実施します。',
      tags: ['消防設備士甲種', '消防設備士乙種', '点検資格者'],
    },
    {
      num: 'REASON 02',
      en: <>OSAKA × <span className="accent">TOKYO.</span></>,
      ja: '2拠点体制による広域対応',
      body: '大阪本社・東京支社の2拠点運営により、関西圏・首都圏を高品質に同時カバー。全国展開する管理会社様の物件も、一元窓口で対応可能です。',
      tags: ['大阪府全域', '東京都全域', '近隣府県対応'],
    },
    {
      num: 'REASON 03',
      en: <>DIGITAL<br/><span className="accent">REPORT.</span></>,
      ja: 'クラウド報告書による透明性',
      body: '点検結果はクラウドで一元管理。物件ごとの履歴・指摘事項・写真を、いつでも管理画面で閲覧可能。複数物件を抱えるオーナー様の管理負荷を大幅に削減します。',
      tags: ['クラウド管理', '写真付報告書', '履歴閲覧'],
    },
    {
      num: 'REASON 04',
      en: <>ONE<br/><span className="accent">STOP.</span></>,
      ja: '報告書提出までワンストップ',
      body: '点検実施・報告書作成・消防署への提出代行・不具合箇所の改修工事まで、すべて自社対応。複数業者を束ねる手間が一切不要になります。',
      tags: ['報告書提出代行', '改修工事対応', '夜間休日対応'],
    },
  ];
  return (
    <section className="reasons">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">REASON / 選ばれる理由</span>
          <h2 className="section-h2-en">WHY <span style={{color:'var(--t-accent)'}}>ADDITIONAL</span>?</h2>
          <p className="section-h2-ja">なぜ管理会社・オーナーから選ばれ続けるのか</p>
        </div>
        <div className="reasons-grid">
          {items.map((it, i) => (
            <div key={i} className="reason-card">
              <div className="num-big">{it.num}</div>
              <h3 className="title-en">{it.en}</h3>
              <h4 className="title-ja">{it.ja}</h4>
              <p>{it.body}</p>
              <div className="reason-tag-row">
                {it.tags.map((t,j) => <span key={j} className="reason-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, MarqueeDivider, Hero, Issues, Reasons });
