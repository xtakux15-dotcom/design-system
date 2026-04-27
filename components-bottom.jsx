/* Stats, Voices, FAQ, Company, Contact, Footer */
const { useState: useStateBot } = React;

function StatsBand() {
  const stats = [
    { num: '1,200', unit: '棟', en: 'ANNUAL INSPECTION', ja: '年間点検実績' },
    { num: '15', unit: 'YR', en: 'IN BUSINESS', ja: '創業年数' },
    { num: '30', unit: '+', en: 'QUALIFIED STAFF', ja: '有資格者数' },
    { num: '100', unit: '%', en: 'REPORT FILING', ja: '報告書提出率' },
  ];
  return (
    <section className="stats-band">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="num-huge">{s.num}<small>{s.unit}</small></div>
              <div className="stat-lbl">{s.en}</div>
              <div className="stat-ja">{s.ja}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  const items = [
    {
      text: '複数物件の点検時期がバラバラで管理が大変だったのですが、年間スケジュールを一括管理してもらえるようになり、報告漏れの心配がなくなりました。',
      bldg: '【オフィスビル管理会社・S社】',
      role: 'ASSET MANAGER',
    },
    {
      text: 'クラウドで報告書が確認できるのは、複数支店を運営する立場として非常に助かります。指摘事項の写真もすぐ見られて、改修判断が早くなりました。',
      bldg: '【商業施設運営・K社】',
      role: 'FACILITY DIRECTOR',
    },
    {
      text: '前任業者が報告書提出を怠っていたことが発覚した際、速やかにキャッチアップ対応してもらえました。法令遵守の安心感が違います。',
      bldg: '【マンション管理組合・I邸】',
      role: 'BOARD MEMBER',
    },
  ];
  return (
    <section className="voices">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">VOICE / お客様の声</span>
          <h2 className="section-h2-en">FROM <span style={{color:'var(--t-accent)'}}>THE FIELD.</span></h2>
          <p className="section-h2-ja">建物管理の最前線にいるオーナー様・管理担当者の声</p>
        </div>
        <div className="voices-grid">
          {items.map((v, i) => (
            <div className="voice-card" key={i}>
              <div className="voice-quote-mark">"</div>
              <p className="voice-text">{v.text}</p>
              <div className="voice-meta">
                <span className="building">{v.bldg}</span>
                <span className="role">{v.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_DATA = [
  {
    q: '消防設備点検は何年に何回必要ですか？',
    a: '消防法第17条の3の3により、防火対象物には機器点検（6ヶ月ごと）と総合点検（1年ごと）の実施が義務付けられています。さらに点検結果は、特定防火対象物は1年に1回、非特定防火対象物は3年に1回、所轄消防署長への報告が必要です。',
  },
  {
    q: '点検を怠った場合の罰則はありますか？',
    a: '消防法第44条に基づき、点検報告義務違反には30万円以下の罰金または拘留が科される可能性があります。また、火災発生時に未点検が原因と判断された場合、所有者・管理者の管理責任が問われ、損害賠償リスクが発生する可能性もあります。コンプライアンス面でも事業継続上の重大なリスクとなります。',
  },
  {
    q: '報告書の作成・消防署への提出も依頼できますか？',
    a: 'はい、すべて当社が代行します。点検結果報告書を電子・紙の両形式で作成し、所轄消防署への提出までワンストップで対応。お客様側で書類の取りまとめや窓口対応を行う必要は一切ございません。',
  },
  {
    q: '既存業者からの切り替えは可能ですか？',
    a: 'もちろん可能です。多くのお客様が他社から弊社へ乗り換えていただいています。過去の点検履歴・指摘事項の引き継ぎから、消防署への業者変更届の提出まで、スムーズな移行をサポートします。契約期間中の切り替えについてもご相談ください。',
  },
  {
    q: '複数物件をまとめて契約できますか？',
    a: 'はい。むしろ複数物件をご担当の管理会社様・オーナー様に最も価値を発揮するサービス設計です。年間スケジュールの一括管理、共通の報告書フォーマット、複数物件契約特典（最大15%）など、運用負荷とコストの両方を低減できます。',
  },
  {
    q: '夜間・休日の点検対応は可能ですか？',
    a: '可能です。テナント様の営業時間内に放水試験などの大規模点検を行うのが難しい商業施設・飲食店ビルなどでは、夜間・早朝・休日の対応事例が多数あります。別途オプション料金にて、テナント影響を最小化する点検計画をご提案します。',
  },
];

function FAQ() {
  const [open, setOpen] = useStateBot(0);
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">FAQ / よくある質問</span>
          <h2 className="section-h2-en">FREQUENTLY <span style={{color:'var(--t-accent)'}}>ASKED.</span></h2>
          <p className="section-h2-ja">お問い合わせの多い質問にお答えします</p>
        </div>
        <div className="faq-list">
          {FAQ_DATA.map((it, i) => (
            <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="q-mark">Q.</span>
                <h3 className="q-text">{it.q}</h3>
                <span className="toggle"></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  <span className="a-mark">A.</span>
                  <div className="faq-a-text">{it.a}</div>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section className="company" id="company">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">COMPANY / 会社概要</span>
          <h2 className="section-h2-en">ABOUT <span style={{color:'var(--t-accent)'}}>ADDITIONAL.</span></h2>
        </div>
        <div className="company-grid">
          <dl className="company-table">
            <div className="company-row"><dt>COMPANY</dt><dd><span className="ja-name">株式会社Additional</span> / Additional Inc.</dd></div>
            <div className="company-row"><dt>FOUNDED</dt><dd>2011年【4月】</dd></div>
            <div className="company-row"><dt>CAPITAL</dt><dd>【10,000,000】円</dd></div>
            <div className="company-row"><dt>CEO</dt><dd>代表取締役 【山田 太郎】</dd></div>
            <div className="company-row"><dt>OSAKA HQ</dt><dd>大阪府大阪市【中央区○○ 1-2-3】 Additional Building 5F<br/>TEL 06-XXXX-XXXX</dd></div>
            <div className="company-row"><dt>TOKYO BR</dt><dd>東京都【千代田区○○ 4-5-6】 Additional Tokyo Office 8F<br/>TEL 03-XXXX-XXXX</dd></div>
            <div className="company-row"><dt>BUSINESS</dt><dd>消防用設備等点検 / 報告書作成・提出代行 / 改修工事 / 防災コンサルティング</dd></div>
            <div className="company-row"><dt>QUALIFIED</dt><dd>消防設備士甲種【15名】 / 消防設備士乙種【20名】 / 消防設備点検資格者【28名】<br/>※兼任あり、合計人数ではありません</dd></div>
            <div className="company-row"><dt>LICENSE</dt><dd>大阪府知事許可（般-XX）第【XXXXXX】号<br/>東京都知事許可（般-XX）第【XXXXXX】号</dd></div>
            <div className="company-row"><dt>COVERAGE</dt><dd>大阪府全域 / 東京都全域 / 関西圏・首都圏（近隣府県は要相談）</dd></div>
          </dl>

          <div className="company-mark">
            <div className="big-mark">A<span className="stroke">DD</span></div>
            <div className="tagline">追加で守るのではなく、<br/>標準で守りきる。</div>
            <div className="qual">
              <span>消防設備士甲種</span>
              <span>消防設備士乙種</span>
              <span>消防設備点検資格者</span>
              <span>第二種電気工事士</span>
              <span>防災管理者</span>
            </div>
            <div style={{borderTop:'1px solid var(--t-border)', paddingTop:16, fontFamily:'var(--font-display-en)', fontWeight:800, fontSize:10, letterSpacing:'.22em', color:'var(--t-fg2)'}}>
              SINCE 2011 / OSAKA × TOKYO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [data, setData] = useStateBot({
    company: '', name: '', email: '', phone: '',
    bldgType: '', area: '', location: '', message: '',
  });
  const [errs, setErrs] = useStateBot({});
  const [sent, setSent] = useStateBot(false);

  const setField = (k, v) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrs((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const newErrs = {};
    if (!data.company.trim()) newErrs.company = '会社名・物件名を入力してください';
    if (!data.name.trim()) newErrs.name = 'お名前を入力してください';
    if (!data.email.trim()) newErrs.email = 'メールアドレスを入力してください';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) newErrs.email = 'メールアドレスの形式が正しくありません';
    if (!data.bldgType) newErrs.bldgType = '物件種別を選択してください';
    if (Object.keys(newErrs).length) { setErrs(newErrs); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <h4>SENT.</h4>
        <p>お問い合わせありがとうございます。<br/>1営業日以内に担当よりご連絡いたします。</p>
      </div>
    );
  }

  const types = [['office','オフィスビル'], ['commercial','商業施設'], ['residence','マンション'], ['other','その他']];

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label className="form-label">物件種別 <span className="req">REQUIRED</span></label>
        <div className="form-segment">
          {types.map(([k,l]) => (
            <button type="button" key={k} className={data.bldgType === k ? 'on' : ''} onClick={() => setField('bldgType', k)}>{l}</button>
          ))}
        </div>
        {errs.bldgType && <div className="form-error">{errs.bldgType}</div>}
      </div>

      <div className="form-row two-col">
        <div className="form-row">
          <label className="form-label">延床面積（㎡）</label>
          <input className="form-input" placeholder="例) 2,000" value={data.area} onChange={(e)=>setField('area', e.target.value)} />
        </div>
        <div className="form-row">
          <label className="form-label">物件所在地</label>
          <input className="form-input" placeholder="例) 大阪市北区○○" value={data.location} onChange={(e)=>setField('location', e.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <label className="form-label">会社名・物件名 <span className="req">REQUIRED</span></label>
        <input
          className={'form-input' + (errs.company ? ' error' : '')}
          value={data.company} onChange={(e)=>setField('company', e.target.value)}
          placeholder="株式会社○○ / ○○ビル"
        />
        {errs.company && <div className="form-error">{errs.company}</div>}
      </div>

      <div className="form-row two-col">
        <div className="form-row">
          <label className="form-label">ご担当者名 <span className="req">REQUIRED</span></label>
          <input
            className={'form-input' + (errs.name ? ' error' : '')}
            value={data.name} onChange={(e)=>setField('name', e.target.value)}
            placeholder="山田 太郎"
          />
          {errs.name && <div className="form-error">{errs.name}</div>}
        </div>
        <div className="form-row">
          <label className="form-label">電話番号</label>
          <input className="form-input" placeholder="06-XXXX-XXXX" value={data.phone} onChange={(e)=>setField('phone', e.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <label className="form-label">メールアドレス <span className="req">REQUIRED</span></label>
        <input
          className={'form-input' + (errs.email ? ' error' : '')}
          type="email" value={data.email} onChange={(e)=>setField('email', e.target.value)}
          placeholder="contact@example.com"
        />
        {errs.email && <div className="form-error">{errs.email}</div>}
      </div>

      <div className="form-row">
        <label className="form-label">ご相談内容</label>
        <textarea
          className="form-textarea"
          rows="4"
          value={data.message}
          onChange={(e)=>setField('message', e.target.value)}
          placeholder="既存業者の切り替え検討中、複数物件の一括契約希望、など。任意でご記入ください。"
        />
      </div>

      <button type="submit" className="form-submit">
        無料見積もりを依頼する
        <span>→</span>
      </button>
      <div className="form-meta">
        ご記入いただいた情報は、お見積り対応のみに使用します。<br/>
        通常1営業日以内に担当者よりご連絡いたします。
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-bg">CONTACT</div>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-side">
            <span className="eyebrow">CONTACT / お問い合わせ</span>
            <h3>GET A<br/><span className="accent">QUOTE.</span></h3>
            <div className="ja-tagline">
              現地調査・お見積もりは<br/>
              <span style={{color:'var(--t-accent)'}}>すべて無料</span>です。
            </div>
            <p style={{fontFamily:'var(--font-body)', fontWeight:400, fontSize:14, lineHeight:1.8, color:'var(--t-fg2)', margin:0}}>
              建物の延床面積・所在地・物件種別をお知らせください。1営業日以内に担当者よりご連絡し、現地調査の日程を調整いたします。
            </p>
            <div className="contact-channels">
              <div className="channel">
                <div className="city">OSAKA HQ / 大阪本社</div>
                <div className="num">06-XXXX-XXXX</div>
                <div className="hours">平日 9:00–18:00 / 緊急時 24h対応</div>
              </div>
              <div className="channel">
                <div className="city">TOKYO BR / 東京支社</div>
                <div className="num">03-XXXX-XXXX</div>
                <div className="hours">平日 9:00–18:00 / 緊急時 24h対応</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="lockup">ADDITIONAL<span style={{color:'var(--t-accent)'}}>.</span></div>
            <p>消防設備点検 / 報告書提出代行 / 改修工事。<br/>大阪・東京2拠点で、関西圏・首都圏の建物の安全を守っています。</p>
          </div>
          <div className="footer-col">
            <h5>SERVICE</h5>
            <ul>
              <li><a href="#service">点検サービス</a></li>
              <li><a href="#price">料金体系</a></li>
              <li><a href="#flow">点検の流れ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>COMPANY</h5>
            <ul>
              <li><a href="#area">対応エリア</a></li>
              <li><a href="#company">会社概要</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>CONTACT</h5>
            <ul>
              <li>OSAKA: 06-XXXX-XXXX</li>
              <li>TOKYO: 03-XXXX-XXXX</li>
              <li><a href="#contact">お問い合わせ →</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ADDITIONAL INC. ALL RIGHTS RESERVED.</span>
          <span>BUILT IN OSAKA × TOKYO</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { StatsBand, Voices, FAQ, Company, Contact, Footer });
