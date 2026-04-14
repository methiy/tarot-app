# 塔罗牌占卜应用设计

## 概述

纯前端塔罗牌占卜 Web 应用。用户输入出生年月日、性别、问题，选择牌阵（单牌/三牌），抽取塔罗牌后获得个性化解读。支持三种视觉主题。

## 用户流程

1. **首页** — 选择主题风格 → 输入出生年月日 + 性别 + 问题文本 → 选择牌阵
2. **抽牌页** — 牌背朝上展示，点击翻牌，有翻转动画，每张牌随机正/逆位
3. **结果页** — 展示牌面 + 每张牌的解读 + 综合解读 + 星座加成

## 三套视觉主题

### 主题一：神秘塔罗（Mystic）

- **色调**：深紫 `#1a0a2e` + 金色 `#c9a84c` + 暗紫 `#2d1b4e`
- **字体**：Cinzel（标题）+ Noto Serif SC（正文）
- **装饰**：星星粒子、神秘符文边框、光晕效果
- **牌背**：深紫底 + 金色五芒星阵
- **氛围**：黑暗神秘，传统塔罗风

### 主题二：百变小樱（Sakura）

- **色调**：樱花粉 `#F4A6C0` + 星金 `#F5D76E` + 薰衣草 `#C3A6D8` + 奶白 `#FFFEF5`
- **字体**：Playfair Display（标题）+ Quicksand（正文）
- **装饰**：五角星散落、翅膀图案、魔法阵水印、丝带元素
- **牌背**：粉色底 + 金色魔法阵（参考小樱牌背面的十角星阵）
- **氛围**：魔法少女，优雅闪亮

### 主题三：小水豚噜噜（Capybara）

- **色调**：芒果黄 `#F5C87A` + 奶油白 `#FFF9F0` + 暖棕 `#5C4033` + 腮红粉 `#F4B4B4`
- **字体**：Nunito / Varela Round（全局圆体）
- **装饰**：橘子🍊、爱心、蒸汽泡泡、波浪分隔线
- **牌背**：暖黄底 + 水豚剪影圆点图案
- **氛围**：治愈系，毛茸茸的温暖感，圆润无棱角

## 数据架构

### 塔罗牌数据

共 78 张：22 大阿卡纳 + 56 小阿卡纳

```ts
interface TarotCard {
  id: number                    // 0-77
  name: string                  // 中文名
  nameEn: string                // 英文名
  arcana: 'major' | 'minor'
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles'  // 小阿卡纳花色
  number: number                // 大阿卡纳 0-21，小阿卡纳 1-14
  keywords: {
    upright: string[]           // 正位关键词
    reversed: string[]          // 逆位关键词
  }
  meanings: {
    // 每种问题类型 × 正/逆位的解读模板
    love: { upright: string; reversed: string }
    career: { upright: string; reversed: string }
    wealth: { upright: string; reversed: string }
    health: { upright: string; reversed: string }
    general: { upright: string; reversed: string }
  }
  description: string           // 牌面图像描述（用于 CSS/SVG 呈现）
  element?: string              // 对应元素：火/水/风/土
  zodiacLink?: string           // 关联星座
}
```

### 星座数据

```ts
interface ZodiacSign {
  id: string
  name: string
  nameEn: string
  dateRange: [string, string]  // ["03-21", "04-19"]
  element: string              // 火/土/风/水
  traits: string[]             // 性格特质
  tarotAffinity: string        // 与塔罗的关联描述
  luckyCards: number[]         // 幸运牌 id 列表
}
```

### 问题分类

自动通过关键词匹配分类用户问题：

```ts
type QuestionCategory = 'love' | 'career' | 'wealth' | 'health' | 'general'
```

关键词映射：
- **love**：爱情、恋爱、感情、对象、暧昧、分手、复合、桃花、喜欢、表白、婚姻
- **career**：工作、事业、职业、升职、跳槽、面试、考试、学业、前途
- **wealth**：财运、赚钱、投资、收入、理财、薪资
- **health**：健康、身体、生病、精神、睡眠、压力
- **general**：以上都不匹配时的默认类别

## 牌阵

### 单牌占卜

抽 1 张牌，给出直接解答。

### 三牌占卜（时间之流）

- **位置一**：过去（影响现状的过去因素）
- **位置二**：现在（当前状况）
- **位置三**：未来（发展趋势）

每张牌的解读会结合其位置含义。

## 解读生成逻辑

### 单牌解读

1. 从牌的 `meanings[category][upright/reversed]` 取基础解读
2. 附加星座特质补充（如 "作为白羊座的你，XX 的特质让这张牌对你有特别的启示..."）
3. 如果牌的 `zodiacLink` 匹配用户星座，增加"命运共鸣"提示

### 三牌解读

1. 每张牌独立解读（同单牌，但融入位置含义 "在过去的位置上..."）
2. 综合解读：三张牌联合叙事，描述过去→现在→未来的故事线
3. 综合建议：基于三牌组合给出行动建议

### 综合解读模板

三牌综合解读需要模板来连接三张牌的叙事。按位置组合的正/逆位模式（8种）各准备一个连接模板：

- 正正正：整体顺遂型
- 正正逆：需要警惕未来
- 正逆正：当前有阻碍但终会好转
- ...以此类推

## 抽牌机制

- 使用 Fisher-Yates 洗牌算法打乱 78 张牌
- 每张牌 50% 概率正位 / 50% 概率逆位
- 用户点击牌背触发翻转（CSS 3D transform）
- 翻转动画时长 0.8s

## 牌面视觉

不使用图片文件。用 CSS + SVG 创建风格化的牌面：
- 牌的名称 + 编号 + 关键词组成的抽象设计
- 每套主题有不同的牌面配色和装饰
- 牌背图案根据主题不同（五芒星/魔法阵/水豚图案）

## 页面结构

```
app/
  pages/
    index.vue          — 首页（主题选择 + 信息输入）
  components/
    ThemeSelector.vue   — 三种主题选择
    InputForm.vue       — 出生信息 + 问题 + 牌阵选择
    CardSpread.vue      — 抽牌区域（翻牌交互）
    TarotCardFace.vue   — 单张牌面渲染
    TarotCardBack.vue   — 单张牌背渲染
    ReadingResult.vue   — 解读结果展示
    ZodiacBadge.vue     — 星座徽章
  composables/
    useTarot.ts         — 核心逻辑：洗牌、抽牌、翻牌状态
    useReading.ts       — 解读生成：根据牌+问题+星座生成文案
    useZodiac.ts        — 星座计算：日期→星座+特质
    useTheme.ts         — 主题切换管理
  data/
    majorArcana.ts      — 22 张大阿卡纳数据
    minorArcana.ts      — 56 张小阿卡纳数据
    zodiac.ts           — 12 星座数据
    keywords.ts         — 问题分类关键词
    spreadTemplates.ts  — 三牌综合解读模板
  styles/
    themes/
      mystic.css        — 神秘主题
      sakura.css        — 小樱主题
      capybara.css      — 水豚主题
    global.css          — 全局基础样式
```

## 技术栈

- Nuxt 4 + Vue 3
- 纯前端，无后端
- CSS 变量驱动主题切换
- CSS 3D Transform 做翻牌动画
- Google Fonts 引入各主题字体

## 不做的事

- 不接入 AI API
- 不做用户账户/历史记录持久化
- 不使用塔罗牌图片（纯 CSS/SVG 渲染牌面）
- 不做付费功能
