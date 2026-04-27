/* Services, Pricing + Simulator, Flow, Areas */
const { useState: useStateMid } = React;

function Services() {
  const items = [
    { num: '01', en: 'EQUIPMENT INSPECTION', ja: '消防用設備等点検（機器点検・総合点検）', desc: '6ヶ月ごとの機器点検、1年ごとの総合点検を法定通り実施。消防法第17条の3の3に基づく定期点検を確実に履行します。' },
    { num: '02', en: 'FIRE EXTINGUISHER', ja: '消火器点検・交換・廃棄', desc: '内部点検、機能点検、耐圧性能試験。期限切れ消火器の交換から、適正廃棄までトータルで対応します。' },
    { num: '03', en: 'AUTO FIRE ALARM', ja: '自動火災報知設備点検', desc: '感知器・受信機・地区音響装置の機能確認。誤作動防止のキャリブレーションまで含めた精密点検を実施。' },
    { num: '04', en: 'HYDRANT SYSTEM', ja: '屋内・屋外消火栓設備点検', desc: 'ポンプの作動試験、放水試験、ホース・ノズルの劣化確認。実放水を伴う総合点検にも対応します。' },
    { num: '05', en: 'SPRINKLER', ja: 'スプリンクラー設備点検', desc: 'ヘッド・配管・送水口・ポンプの一連点検。商業施設・大型物件の特定防火対象物にも豊富な実績。' },
    { num: '06', en: 'ESCAPE EQUIPMENT', ja: '避難器具・誘導灯点検', desc: '避難はしご・救助袋・緩降機の動作確認、誘導灯のバッテリー・光度測定までしっかり対応。' },
    { num: '07', en: 'REPORT FILING', ja: '報告書作成・消防署への提出代行', desc: '点検結果報告書を電子・紙の両形式で作成。所轄消防署への提出代行まで含め、提出漏れリスクをゼロに。' },
    { num: '08', en: 'REPAIR & RETROFIT', ja: '不具合箇所の改修工事対応', desc: '点検時に発見された不具合は、自社施工チームが即時改修。複数業者を介さず、責任の所在を一元化します。' },
  ];
  return (
    <section className="services" id="service">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">SERVICE / サービスメニュー</span>
          <h2 className="section-h2-en">8 LINES OF<br/><span style={{color:'var(--t-accent)'}}>DEFENSE.</span></h2>
          <p className="section-h2-ja">消防設備に関わる、すべてを一社で。</p>
        </div>
        <div className="services-list">
          {items.map((it, i) => (
            <div className="service-row" key={i}>
              <div className="num">{it.num}</div>
              <div>
                <div className="name-en">{it.en}</div>
                <div className="name-ja">{it.ja}</div>
              </div>
              <p className="desc">{it.desc}</p>
              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRICE_TABLE = [
  { en: 'UNDER 500㎡',     ja: '〜500㎡',         eq: 35000,  total: 55000  },
  { en: '500-1,000㎡',     ja: '500〜1,000㎡',   eq: 55000,  total: 85000  },
  { en: '1,000-3,000㎡',   ja: '1,000〜3,000㎡', eq: 90000,  total: 140000 },
  { en: '3,000-5,000㎡',   ja: '3,000〜5,000㎡', eq: 140000, total: 220000 },
  { en: '5,000-10,000㎡',  ja: '5,000〜10,000㎡', eq: 220000, total: 340000 },
  { en: 'OVER 10,000㎡',   ja: '10,000㎡〜',     eq: null,   total: null   },
];

function Pricing() {
  const [area, setArea] = useStateMid(2000);
  const [type, setType] = useStateMid('office');     // office / commercial / residence
  const [bldgs, setBldgs] = useStateMid('1');        // 1, 2-5, 6+

  // Linear estimate based on area, modified by type and discount
  const baseRate = 90; // yen / sqm for total inspection (1 round basis)
  const typeMult = { office: 1.0, commercial: 1.18, residence: 0.92 }[type];
  const bldgMult = { '1': 1.0, '2-5': 0.92, '6+': 0.85 }[bldgs];
  // Round to nearest 5000
  const lo = Math.round((area * baseRate * typeMult * bldgMult * 0.85) / 5000) * 5000;
  const hi = Math.round((area * baseRate * typeMult * bldgMult * 1.15) / 5000) * 5000;
  const fmt = (n) => '¥' + n.toLocaleString('ja-JP');

  return (
    <section className="pricing" id="price">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">PRICE / 料金体系</span>
          <h2 className="section-h2-en">CLEAR<br/><span style={{color:'var(--t-accent)'}}>PRICING.</span></h2>
          <p className="section-h2-ja">延床面積別の目安料金。実際の見積りは現地調査後に正式提示します。</p>
        </div>
        <div className="pricing-grid">
          <div>
            <div className="pricing-table">
              <div className="pricing-table-head">
                <div>FLOOR AREA / 延床面積</div>
                <div>機器点検</div>
                <div>総合点検</div>
              </div>
              {PRICE_TABLE.map((r, i) => (
                <div className="pricing-table-row" key={i}>
                  <div className="area">
                    <small>{r.en}</small>
                    {r.ja}
                  </div>
                  <div className="price">
                    {r.eq ? fmt(r.eq) : '個別お見積り'}
                    {r.eq && <small>税抜 / 1回</small>}
                  </div>
                  <div className="price">
                    {r.total ? fmt(r.total) : '—'}
                    {r.total && <small>税抜 / 1回</small>}
                  </div>
                </div>
              ))}
            </div>
            <div className="pricing-notes">
              <ul>
                <li>表示価格は税抜・1回あたりの目安です。建物形状・設備内容により変動します。</li>
                <li>正式金額は<strong style={{color:'var(--t-accent)'}}>無料の現地調査後</strong>に書面でご提示します。</li>
                <li>複数物件（2棟以上）の年間契約には<strong style={{color:'var(--t-accent)'}}>最大15%</strong>の優遇価格を適用。</li>
                <li>夜間・休日の作業は別途オプション。テナント影響を最小化する時間帯設計が可能です。</li>
              </ul>
            </div>
          </div>

          <div className="simulator">
            <div className="sim-label">PRICE SIMULATOR / 概算シミュレーター</div>
            <h3>建物条件から、<br/>概算金額をすぐ算出</h3>

            <div className="sim-field">
              <div className="sim-field-label">
                <span>延床面積</span>
                <b>{area.toLocaleString()} ㎡</b>
              </div>
              <input
                type="range"
                min="100" max="20000" step="100"
                className="sim-slider"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value, 10))}
              />
              <div style={{display:'flex', justifyContent:'space-between', fontSize:11, fontFamily:'var(--font-display-en)', fontWeight:800, letterSpacing:'.18em', color:'var(--t-fg2)', marginTop:4}}>
                <span>100㎡</span>
                <span>20,000㎡</span>
              </div>
            </div>

            <div className="sim-field">
              <div className="sim-field-label"><span>建物タイプ</span></div>
              <div className="sim-radio">
                {[['office','オフィスビル'],['commercial','商業施設'],['residence','マンション']].map(([k,l]) => (
                  <button key={k} className={type === k ? 'on' : ''} onClick={() => setType(k)}>{l}</button>
                ))}
              </div>
            </div>

            <div className="sim-field">
              <div className="sim-field-label"><span>契約棟数</span></div>
              <div className="sim-radio">
                {[['1','1棟'],['2-5','2〜5棟'],['6+','6棟以上']].map(([k,l]) => (
                  <button key={k} className={bldgs === k ? 'on' : ''} onClick={() => setBldgs(k)}>{l}</button>
                ))}
              </div>
            </div>

            <div className="sim-result">
              <div className="label">ANNUAL ESTIMATE / 年間目安（機器点検2回＋総合点検1回）</div>
              <div className="price">{fmt(lo)}<small> 〜 {fmt(hi)}</small></div>
              <div className="price-range">税抜・正式金額は現地調査のうえ提示します</div>
            </div>
            <div className="sim-disclaimer">
              ※ 上記は延床面積・建物タイプ・契約棟数からの簡易試算です。実際の金額は設備内容・立地・夜間対応の有無などで変動します。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const steps = [
    { en: 'STEP 01', ja: 'お問い合わせ', body: 'フォーム・電話でご相談。物件情報を伺います。' },
    { en: 'STEP 02', ja: '現地調査・見積', body: '無料訪問で設備状況を確認、書面で見積提示。' },
    { en: 'STEP 03', ja: 'ご契約', body: '契約書を取り交わし、点検スケジュールを確定。' },
    { en: 'STEP 04', ja: '点検実施', body: '有資格者が現場で機器・総合点検を実施します。' },
    { en: 'STEP 05', ja: '報告書納品・提出', body: '報告書を納品、消防署への提出代行まで完了。' },
  ];
  return (
    <section className="flow" id="flow">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">FLOW / 点検の流れ</span>
          <h2 className="section-h2-en">5 STEPS,<br/><span style={{color:'var(--t-accent)'}}>NO HASSLE.</span></h2>
          <p className="section-h2-ja">お問い合わせから報告書提出まで、5ステップで完結</p>
        </div>
        <div className="flow-track">
          {steps.map((s, i) => (
            <div key={i} className={'flow-step' + (i === 0 ? ' active' : '')}>
              <div className="ring">{String(i+1).padStart(2,'0')}</div>
              <div className="step-en">{s.en}</div>
              <h4>{s.ja}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaMap({ city }) {
  if (city === 'osaka') {
    return (
      <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
        {/* simplified osaka prefecture silhouette */}
        <rect width="320" height="240" fill="transparent"/>
        <g fill="rgba(170,255,0,0.08)" stroke="rgba(170,255,0,0.4)" strokeWidth="1.5">
          <path d="M 130 30 L 165 35 L 195 55 L 215 90 L 220 130 L 210 165 L 195 195 L 175 215 L 150 215 L 125 200 L 110 175 L 95 145 L 90 110 L 100 75 L 115 50 Z" />
        </g>
        {/* HQ pin */}
        <g>
          <circle cx="160" cy="120" r="22" fill="rgba(170,255,0,0.18)" />
          <circle cx="160" cy="120" r="10" fill="#AAFF00" />
          <text x="180" y="115" fill="#AAFF00" fontFamily="Montserrat" fontWeight="900" fontSize="11" letterSpacing="1.5">OSAKA HQ</text>
          <text x="180" y="130" fill="#F0F4F8" fontFamily="Noto Sans JP" fontSize="10">大阪本社</text>
        </g>
        {/* surrounding cities dots */}
        <g fill="rgba(255,255,255,0.4)">
          <circle cx="135" cy="80" r="3"/><text x="143" y="83" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">豊中</text>
          <circle cx="180" cy="160" r="3"/><text x="188" y="163" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">堺</text>
          <circle cx="145" cy="180" r="3"/><text x="115" y="195" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">岸和田</text>
          <circle cx="200" cy="100" r="3"/><text x="208" y="103" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">東大阪</text>
        </g>
        <g fill="none" stroke="rgba(170,255,0,0.2)" strokeWidth="1" strokeDasharray="3 3">
          <circle cx="160" cy="120" r="60"/>
          <circle cx="160" cy="120" r="90"/>
        </g>
        <text x="16" y="226" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Montserrat" fontWeight="700" letterSpacing="2">OSAKA PREFECTURE / 大阪府</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="240" fill="transparent"/>
      <g fill="rgba(170,255,0,0.08)" stroke="rgba(170,255,0,0.4)" strokeWidth="1.5">
        <path d="M 60 110 L 100 100 L 140 95 L 180 95 L 215 100 L 245 115 L 260 140 L 250 165 L 220 175 L 180 175 L 145 170 L 110 165 L 80 155 L 65 135 Z" />
      </g>
      <g>
        <circle cx="180" cy="135" r="22" fill="rgba(170,255,0,0.18)" />
        <circle cx="180" cy="135" r="10" fill="#AAFF00" />
        <text x="200" y="130" fill="#AAFF00" fontFamily="Montserrat" fontWeight="900" fontSize="11" letterSpacing="1.5">TOKYO BR</text>
        <text x="200" y="145" fill="#F0F4F8" fontFamily="Noto Sans JP" fontSize="10">東京支社</text>
      </g>
      <g fill="rgba(255,255,255,0.4)">
        <circle cx="120" cy="125" r="3"/><text x="100" y="118" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">新宿</text>
        <circle cx="220" cy="150" r="3"/><text x="228" y="153" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">江東</text>
        <circle cx="155" cy="155" r="3"/><text x="135" y="170" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">品川</text>
        <circle cx="240" cy="120" r="3"/><text x="248" y="123" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Noto Sans JP">江戸川</text>
      </g>
      <g fill="none" stroke="rgba(170,255,0,0.2)" strokeWidth="1" strokeDasharray="3 3">
        <circle cx="180" cy="135" r="60"/>
        <circle cx="180" cy="135" r="90"/>
      </g>
      <text x="16" y="226" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Montserrat" fontWeight="700" letterSpacing="2">TOKYO METROPOLIS / 東京都</text>
    </svg>
  );
}

function Areas() {
  return (
    <section className="areas" id="area">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">AREA / 対応エリア</span>
          <h2 className="section-h2-en">2 BASES,<br/><span style={{color:'var(--t-accent)'}}>WIDE COVERAGE.</span></h2>
          <p className="section-h2-ja">大阪・東京を起点に、関西圏・首都圏を高品質にカバーします</p>
        </div>
        <div className="areas-grid">
          <div className="area-card osaka">
            <div className="area-card-head">
              <div>
                <h3 className="city-en">OSAKA<br/><span className="accent">/ HQ</span></h3>
                <div className="city-ja">大阪本社</div>
              </div>
              <div className="badge">本社</div>
            </div>
            <div className="area-map"><AreaMap city="osaka" /></div>
            <dl className="area-info">
              <dt>ADDRESS</dt>
              <dd>大阪府大阪市【中央区○○ 1-2-3】 Additional Building 5F</dd>
              <dt>TEL</dt>
              <dd>06-XXXX-XXXX（平日 9:00–18:00 / 緊急 24h対応）</dd>
              <dt>COVERAGE</dt>
              <dd>大阪府全域 / 京都府・兵庫県・奈良県・和歌山県・滋賀県（要相談）</dd>
              <dt>STAFF</dt>
              <dd>有資格者【18名】常駐</dd>
            </dl>
          </div>

          <div className="area-card tokyo">
            <div className="area-card-head">
              <div>
                <h3 className="city-en">TOKYO<br/><span className="accent">/ BR</span></h3>
                <div className="city-ja">東京支社</div>
              </div>
              <div className="badge">支社</div>
            </div>
            <div className="area-map"><AreaMap city="tokyo" /></div>
            <dl className="area-info">
              <dt>ADDRESS</dt>
              <dd>東京都【千代田区○○ 4-5-6】 Additional Tokyo Office 8F</dd>
              <dt>TEL</dt>
              <dd>03-XXXX-XXXX（平日 9:00–18:00 / 緊急 24h対応）</dd>
              <dt>COVERAGE</dt>
              <dd>東京都全域 / 神奈川県・埼玉県・千葉県（要相談）</dd>
              <dt>STAFF</dt>
              <dd>有資格者【12名】常駐</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Pricing, Flow, Areas });
