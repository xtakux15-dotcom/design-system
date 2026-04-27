# デザインシステム仕様書
# 参考: 佐久間宣行事務所オフィシャルサイト トンマナ
# version 1.0

---

## 1. デザイン原則

1. **Fun First（面白さを最優先）**
   コーポレートの「礼儀正しさ」を捨て、コンテンツとパーソナリティが爆発するデザインを選ぶ。見た目の統一感より「体験の高揚感」を優先する。

2. **Section as Stage（セクションは独立したステージ）**
   各セクションは背景色・フォント・トーンを変え、スクロールするたびに別の「番組」が始まるような体験を提供する。

3. **Personality-Driven Design（人格をデザインに乗せる）**
   手書き感のあるスタンプ、フキダシ、ステッカーなど、人間が直接語りかける体験設計。UIは主役ではなく人物の延長線。

4. **Mood-by-Color（カラーで感情を切り替える）**
   ライムグリーン＝エネルギー・得意感、ダーク紺グレー＝落ち着き・実績感、オレンジレッド＝熱狂・行動喚起。

5. **Motion as Broadcast Energy（動きはテレビっぽさで）**
   マーキー・グリッチ・無限ループアニメなど、放送の「生感」「ノイズ感」をモーションで表現する。

---

## 2. カラーパレット

### Primary / Secondary / Accent

| トークン | HEX | 用途 |
|---------|-----|------|
| `--color-primary` | `#C2F542` | ブランドカラー。CTA・タグ・強調・ライムセクション背景 |
| `--color-secondary` | `#2B3240` | ダーク紺グレー。実績・バイオセクション背景・カード背景 |
| `--color-accent-red` | `#EE4A2E` | YouTube・問い合わせ背景。熱狂・行動喚起 |
| `--color-accent-blue` | `#1A7AF3` | アーカイブ・リンクアクセント |

### Background / Surface

| トークン | HEX | 用途 |
|---------|-----|------|
| `--bg-base` | `#FFFFFF` | デフォルト背景 |
| `--bg-dark` | `#2B3240` | レギュラー仕事・BIOGRAPHY・フッター系 |
| `--bg-lime` | `#C2F542` | MY POLICYセクション・強調背景 |
| `--bg-red` | `#EE4A2E` | YouTube紹介・CONTACT背景 |
| `--bg-surface` | `#202020` | カード内背景・モーダル背景 |

### Text

| トークン | HEX | 用途 |
|---------|-----|------|
| `--text-primary` | `#202020` | 明るい背景上の本文・見出し |
| `--text-on-dark` | `#FFFFFF` | 暗い背景上のすべてのテキスト |
| `--text-secondary` | `#333333` | 通常リンク・補足テキスト |
| `--text-accent` | `#C2F542` | ダーク背景上の強調テキスト |
| `--text-disabled` | `#B6B6B6` | 非活性テキスト |

### Semantic

| トークン | HEX |
|---------|-----|
| `--color-success` | `#C2F542` |
| `--color-warning` | `#F5C542` |
| `--color-error` | `#EE4A2E` |
| `--color-info` | `#1A7AF3` |

### CSS変数定義（:root）

```css
:root {
  /* Brand */
  --color-primary: #C2F542;
  --color-secondary: #2B3240;
  --color-accent-red: #EE4A2E;
  --color-accent-blue: #1A7AF3;

  /* Background */
  --bg-base: #FFFFFF;
  --bg-dark: #2B3240;
  --bg-lime: #C2F542;
  --bg-red: #EE4A2E;
  --bg-surface: #202020;

  /* Text */
  --text-primary: #202020;
  --text-on-dark: #FFFFFF;
  --text-secondary: #333333;
  --text-accent: #C2F542;
  --text-disabled: #B6B6B6;

  /* Semantic */
  --color-success: #C2F542;
  --color-warning: #F5C542;
  --color-error: #EE4A2E;
  --color-info: #1A7AF3;
}
```

---

## 3. タイポグラフィスケール

### フォントファミリー

```css
:root {
  --font-display-en: 'Neue Machina', sans-serif;   /* 幾何学ディスプレイ。ARCHIVE等の大型見出し */
  --font-heading-en: 'Montserrat', sans-serif;      /* 英語見出し・セクションラベル */
  --font-body-en:    'Inter', sans-serif;           /* UI本文・キャプション */
  --font-heading-ja: 'ゴシックMB101 H JIS2004', sans-serif;
  --font-body-ja:    '秀英角ゴシック銀 B JIS2004', sans-serif;
  --font-pop-ja:     'ハルクラフト', sans-serif;    /* 装飾・ポップテキスト */
}
```

### サイズスケール（4px基準）

| トークン | サイズ | 使用場面 |
|---------|-------|---------|
| `--text-xs` | `12px` | キャプション・メタ情報 |
| `--text-sm` | `14px` | ラベル・補足 |
| `--text-base` | `16px` | 標準UIテキスト |
| `--text-md` | `18px` | 小見出し・強調本文 |
| `--text-lg` | `22px` | リード文 |
| `--text-xl` | `26px` | セクション本文・説明文 |
| `--text-2xl` | `32px` | 小セクション見出し |
| `--text-3xl` | `48px` | H2（セクション見出し）|
| `--text-4xl` | `64px` | ヒーロー・ディスプレイ見出し |

### ウェイト定義

| トークン | 値 | 用途 |
|---------|---|-----|
| `--font-light` | `300` | Neue Machinaの装飾用 |
| `--font-regular` | `400` | 本文全般 |
| `--font-medium` | `500` | InterのUI強調 |
| `--font-bold` | `700` | Montserrat見出し・強調 |
| `--font-heavy` | `900` | ハルクラフト・ポップ強調 |

### 行間・文字間隔

| トークン | 値 | 備考 |
|---------|---|-----|
| `--leading-tight` | `1.2` | ディスプレイ見出し |
| `--leading-snug` | `1.4` | 小見出し |
| `--leading-normal` | `1.5` | H2見出し（実測値） |
| `--leading-relaxed` | `1.6` | 本文・説明文（実測値） |
| `--tracking-tight` | `0` | 通常 |
| `--tracking-wide` | `0.04em` | Montserrat見出し（実測値） |

```css
:root {
  --text-xs:   12px;
  --text-sm:   14px;
  --text-base: 16px;
  --text-md:   18px;
  --text-lg:   22px;
  --text-xl:   26px;
  --text-2xl:  32px;
  --text-3xl:  48px;
  --text-4xl:  64px;

  --font-light:   300;
  --font-regular: 400;
  --font-medium:  500;
  --font-bold:    700;
  --font-heavy:   900;

  --leading-tight:   1.2;
  --leading-snug:    1.4;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;

  --tracking-tight: 0;
  --tracking-wide:  0.04em;
}
```

---

## 4. スペーシング・グリッド

### スペーシングスケール（4px基準）

| トークン | 値 |
|---------|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |

### コンテナ幅・ブレークポイント

| トークン | 値 | 用途 |
|---------|---|-----|
| `--container-padding` | `40px` | 左右パディング（実測値） |
| `--header-height` | `120px` | 固定ヘッダー高さ |
| `--bp-sm` | `480px` | スマートフォン縦 |
| `--bp-md` | `768px` | タブレット |
| `--bp-lg` | `1024px` | ラップトップ |
| `--bp-xl` | `1280px` | デスクトップ |

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  --container-padding: 40px;
  --header-height: 120px;
}

/* ブレークポイント */
/* @media (max-width: 480px)  → スマートフォン */
/* @media (max-width: 768px)  → タブレット     */
/* @media (max-width: 1024px) → ラップトップ   */
/* @media (max-width: 1280px) → デスクトップ   */
```

---

## 5. アニメーション定義

### Duration

| トークン | 値 | 用途 |
|---------|---|-----|
| `--duration-fast` | `150ms` | ホバー・フォーカス変化 |
| `--duration-normal` | `300ms` | 要素出現・UI状態変化 |
| `--duration-medium` | `450ms` | カルーセルトランジション |
| `--duration-slow` | `1000ms` | グリッチ・浮遊ループ |
| `--duration-marquee` | `20000ms` | マーキーテキストループ |

### Easing関数

| トークン | 値 | 特性 |
|---------|---|-----|
| `--ease-studio` | `cubic-bezier(0.4, 0.4, 0, 1)` | 素早く出て、柔らかく着地（デフォルト） |
| `--ease-pop` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | グリッチ系。若干バウンス感 |
| `--ease-linear` | `linear` | マーキー・無限ループ |
| `--ease-out` | `ease-out` | 浮遊アニメ |

### アニメーションパターン CSS

```css
:root {
  --duration-fast:    150ms;
  --duration-normal:  300ms;
  --duration-medium:  450ms;
  --duration-slow:    1000ms;
  --duration-marquee: 20000ms;

  --ease-studio: cubic-bezier(0.4, 0.4, 0, 1);
  --ease-pop:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-linear: linear;
  --ease-out:    ease-out;
}

/* ① フェードイン（Appear） */
.appear {
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-studio);
}
.appear.is-playing {
  opacity: 1;
}

/* ② マーキー（Ticker） */
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll var(--duration-marquee) var(--ease-linear) infinite;
  will-change: transform;
  backface-visibility: hidden;
}
@keyframes marquee-scroll {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* ③ グリッチ（Glitch） */
.glitch {
  animation: glitch-skew var(--duration-slow) var(--ease-pop) infinite;
}
@keyframes glitch-skew {
  0%  {
    transform: translate(0);
    text-shadow: rgb(255, 0, 193) 0 0, rgb(0, 255, 249) 0 0;
  }
  10% {
    transform: translate(-2px, 1px) skew(-1deg);
    text-shadow: rgb(255, 0, 193) -4px 0, rgb(0, 255, 249) 4px 0;
  }
  20% {
    transform: translate(2px, -1px) skew(0.5deg);
    text-shadow: rgb(255, 0, 193) 3px 0, rgb(0, 255, 249) -3px 0;
  }
  30% {
    transform: translate(0) skew(0deg);
    text-shadow: rgb(255, 0, 193) 0 0, rgb(0, 255, 249) 0 0;
  }
  100% {
    transform: translate(0);
    text-shadow: rgb(255, 0, 193) 0 0, rgb(0, 255, 249) 0 0;
  }
}

/* ④ 浮遊（Float） */
.float {
  animation: float-move 3s var(--ease-out) infinite;
}
@keyframes float-move {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(15px); }
  100% { transform: translateY(0); }
}

/* ⑤ カルーセル拡大（Active Scale） */
.carousel-item {
  transition: transform var(--duration-normal), opacity var(--duration-normal);
  opacity: 0.7;
}
.carousel-item.is-active {
  transform: scale(1.22);
  opacity: 1;
}

/* アクセシビリティ: モーション軽減設定を尊重 */
@media (prefers-reduced-motion: reduce) {
  .marquee-track,
  .glitch,
  .float,
  .appear {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## 6. コンポーネント基本仕様

### ボタン

```css
/* Primary Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background-color: var(--color-primary);
  color: var(--text-primary);
  font-family: var(--font-heading-en);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  transition: transform var(--duration-normal) var(--ease-studio);
}
.btn-primary:hover {
  transform: scale(1.03);
}

/* Secondary Button */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: transparent;
  color: var(--text-on-dark);
  font-family: var(--font-heading-en);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-studio);
}
.btn-secondary:hover {
  background: rgba(194, 245, 66, 0.1);
}

/* Icon Button (SNSリンク) */
.btn-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--duration-normal) var(--ease-studio);
}
.btn-icon:hover {
  background: rgba(194, 245, 66, 0.15);
}
```

### カード

```css
/* ダークカード（レギュラー仕事系） */
.card-dark {
  background: var(--bg-dark);
  color: var(--text-on-dark);
  border-radius: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}
.card-dark__thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.card-dark__body {
  padding: var(--space-4) var(--space-6);
}

/* ライトカード（書籍・アーカイブ系） */
.card-light {
  background: var(--bg-base);
  border-radius: 0;
  overflow: hidden;
}
.card-light__thumbnail {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}
.card-light__body {
  padding: var(--space-3) var(--space-4);
}
```

### ナビゲーション

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--container-padding);
  background: transparent;
  z-index: 100;
}

.header__logo {
  /* 爆発スタンプ型ロゴ */
}

.header__menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-on-dark);
  font-family: var(--font-heading-en);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background: var(--bg-dark);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-normal) var(--ease-studio);
}
.nav-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}
```

### テキストリンク

```css
/* 標準リンク */
.link {
  color: inherit;
  text-decoration: none;
  transition: opacity var(--duration-fast) var(--ease-studio);
}
.link:hover {
  opacity: 0.75;
}

/* VIEW SITEリンク（矢印付き） */
.link-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-on-dark);
  text-decoration: none;
  font-family: var(--font-heading-en);
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
}
.link-cta__arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: background var(--duration-normal) var(--ease-studio);
}
.link-cta:hover .link-cta__arrow {
  background: var(--color-primary);
  color: var(--text-primary);
}
```

---

## 7. グリッドレイアウト

```css
/* フルブリードセクション（基本） */
.section {
  width: 100%;
  padding: var(--space-20) var(--container-padding);
}

/* 2カラムグリッド */
.grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

/* カルーセル（横スクロール） */
.carousel {
  display: flex;
  gap: var(--space-6);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel__item {
  scroll-snap-align: start;
  flex-shrink: 0;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .grid-2col {
    grid-template-columns: 1fr;
  }
  .section {
    padding: var(--space-12) var(--space-4);
  }
}
```

---

## 8. 実装メモ

- Studio（Wix Designer）で構築されたサイトを参考にしているが、独自実装する場合は上記CSSをそのまま使用可能
- GSAPやFramer Motionなどの外部ライブラリは不使用。ネイティブCSSアニメーションで実装
- `prefers-reduced-motion` によるアクセシビリティ対応は必須
- フルブリードセクションの背景色切り替えが本デザインシステムの核心。各セクションに `--bg-*` 変数を適用することで実現
- 日本語フォント（秀英角ゴシック銀B、ゴシックMB101）はWebフォント配信サービス（MORISAWA BIZ+等）の利用を推奨
