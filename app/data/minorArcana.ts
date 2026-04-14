import type { TarotCard } from './majorArcana'

const wandsNames: Record<number, { name: string; nameEn: string }> = {
  1: { name: '权杖王牌', nameEn: 'Ace of Wands' },
  2: { name: '权杖二', nameEn: 'Two of Wands' },
  3: { name: '权杖三', nameEn: 'Three of Wands' },
  4: { name: '权杖四', nameEn: 'Four of Wands' },
  5: { name: '权杖五', nameEn: 'Five of Wands' },
  6: { name: '权杖六', nameEn: 'Six of Wands' },
  7: { name: '权杖七', nameEn: 'Seven of Wands' },
  8: { name: '权杖八', nameEn: 'Eight of Wands' },
  9: { name: '权杖九', nameEn: 'Nine of Wands' },
  10: { name: '权杖十', nameEn: 'Ten of Wands' },
  11: { name: '权杖侍从', nameEn: 'Page of Wands' },
  12: { name: '权杖骑士', nameEn: 'Knight of Wands' },
  13: { name: '权杖王后', nameEn: 'Queen of Wands' },
  14: { name: '权杖国王', nameEn: 'King of Wands' },
}

const cupsNames: Record<number, { name: string; nameEn: string }> = {
  1: { name: '圣杯王牌', nameEn: 'Ace of Cups' },
  2: { name: '圣杯二', nameEn: 'Two of Cups' },
  3: { name: '圣杯三', nameEn: 'Three of Cups' },
  4: { name: '圣杯四', nameEn: 'Four of Cups' },
  5: { name: '圣杯五', nameEn: 'Five of Cups' },
  6: { name: '圣杯六', nameEn: 'Six of Cups' },
  7: { name: '圣杯七', nameEn: 'Seven of Cups' },
  8: { name: '圣杯八', nameEn: 'Eight of Cups' },
  9: { name: '圣杯九', nameEn: 'Nine of Cups' },
  10: { name: '圣杯十', nameEn: 'Ten of Cups' },
  11: { name: '圣杯侍从', nameEn: 'Page of Cups' },
  12: { name: '圣杯骑士', nameEn: 'Knight of Cups' },
  13: { name: '圣杯王后', nameEn: 'Queen of Cups' },
  14: { name: '圣杯国王', nameEn: 'King of Cups' },
}

const swordsNames: Record<number, { name: string; nameEn: string }> = {
  1: { name: '宝剑王牌', nameEn: 'Ace of Swords' },
  2: { name: '宝剑二', nameEn: 'Two of Swords' },
  3: { name: '宝剑三', nameEn: 'Three of Swords' },
  4: { name: '宝剑四', nameEn: 'Four of Swords' },
  5: { name: '宝剑五', nameEn: 'Five of Swords' },
  6: { name: '宝剑六', nameEn: 'Six of Swords' },
  7: { name: '宝剑七', nameEn: 'Seven of Swords' },
  8: { name: '宝剑八', nameEn: 'Eight of Swords' },
  9: { name: '宝剑九', nameEn: 'Nine of Swords' },
  10: { name: '宝剑十', nameEn: 'Ten of Swords' },
  11: { name: '宝剑侍从', nameEn: 'Page of Swords' },
  12: { name: '宝剑骑士', nameEn: 'Knight of Swords' },
  13: { name: '宝剑王后', nameEn: 'Queen of Swords' },
  14: { name: '宝剑国王', nameEn: 'King of Swords' },
}

const pentaclesNames: Record<number, { name: string; nameEn: string }> = {
  1: { name: '星币王牌', nameEn: 'Ace of Pentacles' },
  2: { name: '星币二', nameEn: 'Two of Pentacles' },
  3: { name: '星币三', nameEn: 'Three of Pentacles' },
  4: { name: '星币四', nameEn: 'Four of Pentacles' },
  5: { name: '星币五', nameEn: 'Five of Pentacles' },
  6: { name: '星币六', nameEn: 'Six of Pentacles' },
  7: { name: '星币七', nameEn: 'Seven of Pentacles' },
  8: { name: '星币八', nameEn: 'Eight of Pentacles' },
  9: { name: '星币九', nameEn: 'Nine of Pentacles' },
  10: { name: '星币十', nameEn: 'Ten of Pentacles' },
  11: { name: '星币侍从', nameEn: 'Page of Pentacles' },
  12: { name: '星币骑士', nameEn: 'Knight of Pentacles' },
  13: { name: '星币王后', nameEn: 'Queen of Pentacles' },
  14: { name: '星币国王', nameEn: 'King of Pentacles' },
}

export const minorArcana: TarotCard[] = [
  // ==================== WANDS (权杖) ====================
  {
    id: 22,
    name: '权杖王牌',
    nameEn: 'Ace of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    keywords: {
      upright: ['新开始', '灵感', '潜力', '创造力'],
      reversed: ['延迟', '缺乏动力', '犹豫', '错失良机'],
    },
    meanings: {
      love: {
        upright: '一段充满激情的新恋情即将点燃，或现有关系迎来新的火花。',
        reversed: '感情中缺乏激情，关系可能陷入沉闷和停滞。',
      },
      career: {
        upright: '新的事业机会或项目即将出现，充满创造力和热情。',
        reversed: '工作中缺乏灵感和动力，新项目可能遇到延迟。',
      },
      wealth: {
        upright: '财务上有新的机遇出现，大胆把握可能带来丰厚回报。',
        reversed: '投资时机尚未成熟，不宜贸然行动。',
      },
      health: {
        upright: '精力充沛，活力四射，适合开始新的运动计划。',
        reversed: '精力不足，需要注意补充能量和休息。',
      },
      general: {
        upright: '新的火种已经点燃，充满无限可能的开始就在眼前。',
        reversed: '灵感的火花尚未点燃，需要耐心等待正确的时机。',
      },
    },
    description: '一只手从云中伸出，握着一根发芽的权杖，背景是丘陵和城堡，树叶从权杖上飘落。',
    element: 'Fire',
  },
  {
    id: 23,
    name: '权杖二',
    nameEn: 'Two of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 2,
    keywords: {
      upright: ['规划', '决策', '远见', '探索'],
      reversed: ['恐惧', '缺乏规划', '局限', '犹豫不决'],
    },
    meanings: {
      love: {
        upright: '正在思考感情的未来方向，可能面临重要的情感选择。',
        reversed: '对感情的未来感到迷茫，不敢做出承诺。',
      },
      career: {
        upright: '站在事业的十字路口，远大的规划正在形成。',
        reversed: '缺乏职业规划，对未来方向感到迷茫和犹豫。',
      },
      wealth: {
        upright: '制定长远的财务计划，眼光放远将有丰厚回报。',
        reversed: '财务规划混乱，缺乏长远眼光。',
      },
      health: {
        upright: '适合制定健康计划，为长期健康打下基础。',
        reversed: '健康管理缺乏规划，需要更系统地关注。',
      },
      general: {
        upright: '手握世界，规划未来。大胆的愿景需要勇敢的行动来实现。',
        reversed: '因恐惧而困在舒适区，错过了更广阔的世界。',
      },
    },
    description: '一位身穿红袍的人站在城墙上，一手握着权杖，另一手持着地球仪，眺望远方的大海和山脉。',
    element: 'Fire',
  },
  {
    id: 24,
    name: '权杖三',
    nameEn: 'Three of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 3,
    keywords: {
      upright: ['扩展', '远见', '领导', '进展'],
      reversed: ['障碍', '延迟', '受挫', '缺乏远见'],
    },
    meanings: {
      love: {
        upright: '感情向更开阔的方向发展，可能涉及异地恋或跨文化的情缘。',
        reversed: '感情发展受阻，可能因距离或沟通不畅而产生隔阂。',
      },
      career: {
        upright: '事业正在扩展，海外机会或更大的平台向你招手。',
        reversed: '事业扩展计划遇到阻碍，需要重新评估策略。',
      },
      wealth: {
        upright: '投资开始见到回报，财务版图正在扩大。',
        reversed: '预期的回报未能如期而至，需要调整投资策略。',
      },
      health: {
        upright: '健康状况持续改善，之前的努力开始见效。',
        reversed: '健康恢复速度比预期慢，需要更多耐心。',
      },
      general: {
        upright: '船帆已经升起，你的视野正在扩展到更广阔的天地。',
        reversed: '扩展的计划受到阻碍，需要重新审视方向。',
      },
    },
    description: '一个人背对观者站在悬崖上，三根权杖插在地上，他眺望远方驶来的船只和广阔的海洋。',
    element: 'Fire',
  },
  {
    id: 25,
    name: '权杖四',
    nameEn: 'Four of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 4,
    keywords: {
      upright: ['庆祝', '和谐', '家庭', '里程碑'],
      reversed: ['不安', '过渡期', '缺乏和谐', '基础不稳'],
    },
    meanings: {
      love: {
        upright: '感情迎来值得庆祝的里程碑，如订婚、结婚或乔迁新居。',
        reversed: '感情中的不安定感让人无法真正放松和享受。',
      },
      career: {
        upright: '工作上取得了值得庆贺的成就，团队氛围和谐融洽。',
        reversed: '工作环境不够稳定，团队和谐受到影响。',
      },
      wealth: {
        upright: '财务状况稳定向好，有理由为此庆祝。',
        reversed: '财务基础尚不牢固，不宜过度消费。',
      },
      health: {
        upright: '身心愉悦，健康状况令人满意。',
        reversed: '内心的不安影响了身体状态，需要寻找安宁。',
      },
      general: {
        upright: '花环和欢庆的时刻已经到来，享受你努力的成果和温馨的时光。',
        reversed: '庆祝的时机尚未成熟，根基还需要继续巩固。',
      },
    },
    description: '四根权杖组成一个花门，上面装饰着花环和水果。远处可以看到一座城堡，两个人举起花束欢庆。',
    element: 'Fire',
  },
  {
    id: 26,
    name: '权杖五',
    nameEn: 'Five of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 5,
    keywords: {
      upright: ['竞争', '冲突', '挑战', '争论'],
      reversed: ['避免冲突', '内在冲突', '和解', '妥协'],
    },
    meanings: {
      love: {
        upright: '感情中出现争吵和摩擦，双方各持己见，需要找到共识。',
        reversed: '逃避感情中的问题，表面和平但暗流涌动。',
      },
      career: {
        upright: '工作中竞争激烈，需要展现实力才能脱颖而出。',
        reversed: '试图避免职场冲突，但压抑的矛盾可能在积累。',
      },
      wealth: {
        upright: '财务上面临多方竞争，需要更有策略地行动。',
        reversed: '财务纠纷有望和解，寻求妥协比对抗更明智。',
      },
      health: {
        upright: '压力和紧张情绪影响健康，需要找到释放的出口。',
        reversed: '内心冲突影响身心状态，需要正视和解决。',
      },
      general: {
        upright: '混乱的战场上，每个人都在为自己的立场而战。这是成长的考验。',
        reversed: '选择退出争斗或内心在与自己交战，需要找到平衡。',
      },
    },
    description: '五个年轻人各持一根权杖，看似在混乱地争斗或比试，但没有人真正受伤，更像是一场激烈的竞赛。',
    element: 'Fire',
  },
  {
    id: 27,
    name: '权杖六',
    nameEn: 'Six of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 6,
    keywords: {
      upright: ['胜利', '认可', '荣誉', '成就'],
      reversed: ['失败', '自大', '缺乏认可', '名不副实'],
    },
    meanings: {
      love: {
        upright: '在感情中获得对方的认可和赞赏，关系进入甜蜜期。',
        reversed: '在感情中感到不被认可或赏识，自信心受挫。',
      },
      career: {
        upright: '工作上取得令人瞩目的成功，获得同事和上级的认可。',
        reversed: '努力未能得到应有的认可，或者成功只是表面的。',
      },
      wealth: {
        upright: '投资或生意获得成功，财务上迎来胜利。',
        reversed: '预期的财务成功未能实现，需要重新评估。',
      },
      health: {
        upright: '战胜了健康挑战，身体状况得到明显改善。',
        reversed: '健康恢复不如预期，不要过早宣布胜利。',
      },
      general: {
        upright: '骑着白马凯旋归来，胜利和荣耀属于你。享受这份来之不易的成就。',
        reversed: '胜利的桂冠尚未到手，或者表面的成功掩盖了深层的问题。',
      },
    },
    description: '一位骑者头戴月桂花环，骑着白马凯旋而归，手持权杖上系着胜利的花环。人群欢呼着迎接他的归来。',
    element: 'Fire',
  },
  {
    id: 28,
    name: '权杖七',
    nameEn: 'Seven of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 7,
    keywords: {
      upright: ['坚守', '防御', '勇气', '坚持立场'],
      reversed: ['退缩', '不堪重负', '放弃', '妥协'],
    },
    meanings: {
      love: {
        upright: '为感情而战，坚守自己对爱的信念，不被外界干扰所动摇。',
        reversed: '在感情中感到精疲力竭，考虑是否值得继续坚持。',
      },
      career: {
        upright: '工作中面临挑战但不退缩，坚守自己的专业立场。',
        reversed: '面对职场压力感到力不从心，考虑是否需要退让。',
      },
      wealth: {
        upright: '坚定地捍卫自己的财务利益，不让他人占便宜。',
        reversed: '财务压力让人想要放弃，需要重新评估是否值得坚持。',
      },
      health: {
        upright: '以顽强的意志力对抗健康挑战。',
        reversed: '身心疲惫，坚持的压力正在影响健康。',
      },
      general: {
        upright: '站在高处捍卫你的阵地，勇敢面对来自四面八方的挑战。',
        reversed: '持续的战斗让人筋疲力尽，有时明智的退让也是一种策略。',
      },
    },
    description: '一个人站在山丘上，手持权杖抵御来自下方六根权杖的挑战，表情坚毅，穿着不匹配的鞋子暗示仓促应战。',
    element: 'Fire',
  },
  {
    id: 29,
    name: '权杖八',
    nameEn: 'Eight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 8,
    keywords: {
      upright: ['快速', '行动', '进展', '消息'],
      reversed: ['延迟', '受阻', '等待', '仓促'],
    },
    meanings: {
      love: {
        upright: '感情快速升温，好消息即将传来，心动的邂逅可能突然发生。',
        reversed: '感情进展受到延迟，期待的消息迟迟未到。',
      },
      career: {
        upright: '工作节奏加快，多个项目同时推进，好消息纷至沓来。',
        reversed: '项目进度延迟，等待中的审批或决定被搁置。',
      },
      wealth: {
        upright: '资金快速流动，财务上有利好消息到来。',
        reversed: '预期的收入延迟到账，需要耐心等待。',
      },
      health: {
        upright: '身体恢复速度加快，精力充沛。',
        reversed: '康复过程不如预期快，需要更多时间。',
      },
      general: {
        upright: '八根权杖疾飞而过，一切都在加速前进。把握这股急速前进的能量。',
        reversed: '前进的势头被打断，需要耐心应对突如其来的延迟。',
      },
    },
    description: '八根权杖如箭矢般在空中飞翔，穿越晴朗的天空，向着远方的大地急速前进。下方是宁静的河流和绿色的山丘。',
    element: 'Fire',
  },
  {
    id: 30,
    name: '权杖九',
    nameEn: 'Nine of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 9,
    keywords: {
      upright: ['坚韧', '毅力', '警惕', '最后的考验'],
      reversed: ['疲惫', '放弃', '偏执', '防御过度'],
    },
    meanings: {
      love: {
        upright: '经历了感情中的风雨后依然坚持，最后的考验即将过去。',
        reversed: '在感情中伤痕累累，开始对爱情失去信心。',
      },
      career: {
        upright: '工作中虽然疲惫但不放弃，胜利就在最后一步。',
        reversed: '长期的工作压力让人身心俱疲，考虑是否值得继续。',
      },
      wealth: {
        upright: '财务上虽经挫折但坚持到底，回报即将到来。',
        reversed: '对财务前景感到悲观，长期的紧缩让人疲惫。',
      },
      health: {
        upright: '虽然身体疲惫但保持着坚韧的意志力。',
        reversed: '身心极度疲惫，需要认真对待休息和恢复。',
      },
      general: {
        upright: '伤痕累累但依然站立，这是黎明前最后的黑暗。再坚持一下。',
        reversed: '连续的打击消磨了你的意志，也许该考虑换一种方式前进。',
      },
    },
    description: '一个头缠绷带的人疲惫地倚靠着一根权杖，身后整齐排列着八根权杖如栅栏般守卫，他的眼神警惕而坚毅。',
    element: 'Fire',
  },
  {
    id: 31,
    name: '权杖十',
    nameEn: 'Ten of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 10,
    keywords: {
      upright: ['负担', '责任', '压力', '过度承担'],
      reversed: ['释放', '减负', '学会拒绝', '分担'],
    },
    meanings: {
      love: {
        upright: '感情中承担了太多责任和压力，让人喘不过气。',
        reversed: '开始学会在感情中放下不必要的负担和期待。',
      },
      career: {
        upright: '工作量超负荷，承担了太多任务和责任。',
        reversed: '学会分担工作和说"不"，减轻不必要的负担。',
      },
      wealth: {
        upright: '财务负担沉重，可能承担着多重经济压力。',
        reversed: '开始减轻财务负担，理清债务和支出。',
      },
      health: {
        upright: '身体因过度劳累而发出警报，急需减压。',
        reversed: '意识到需要减轻身体负担，开始调整节奏。',
      },
      general: {
        upright: '肩上的担子太重了，你不需要独自扛起所有。学会放手和求助。',
        reversed: '终于开始放下不属于你的重担，轻装前行。',
      },
    },
    description: '一个人弯腰负重前行，怀中抱着十根权杖，步履艰难地走向远方的城镇，看不清前方的路。',
    element: 'Fire',
  },
  {
    id: 32,
    name: '权杖侍从',
    nameEn: 'Page of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 11,
    keywords: {
      upright: ['探索', '热情', '好消息', '自由精神'],
      reversed: ['缺乏方向', '浮躁', '延迟的消息', '虎头蛇尾'],
    },
    meanings: {
      love: {
        upright: '可能收到令人兴奋的感情消息，或遇到一个充满活力的新对象。',
        reversed: '感情上缺乏耐心，热情来得快去得也快。',
      },
      career: {
        upright: '对新的工作机会或项目充满热情和好奇心。',
        reversed: '工作中缺乏持续的热情，容易半途而废。',
      },
      wealth: {
        upright: '可能收到关于财务的好消息或新的赚钱点子。',
        reversed: '财务上的好消息延迟，急躁只会适得其反。',
      },
      health: {
        upright: '精力充沛，对新的运动或健康方式充满兴趣。',
        reversed: '运动热情不持久，需要找到能坚持的方式。',
      },
      general: {
        upright: '一个充满冒险精神的新开始，带着孩童般的好奇心去探索世界。',
        reversed: '热情容易消退，需要学会坚持和专注。',
      },
    },
    description: '一位年轻人站在荒漠中，双手握着一根发芽的权杖，好奇地打量着它。他穿着装饰着蝾螈图案的衣服，神情充满热忱。',
    element: 'Fire',
  },
  {
    id: 33,
    name: '权杖骑士',
    nameEn: 'Knight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 12,
    keywords: {
      upright: ['冒险', '行动', '热情', '勇往直前'],
      reversed: ['鲁莽', '冲动', '挫折', '方向不明'],
    },
    meanings: {
      love: {
        upright: '一段充满激情的冒险式恋情，对方热烈而勇敢。',
        reversed: '感情中过于冲动，来去匆匆的恋人让人捉摸不定。',
      },
      career: {
        upright: '大胆采取行动推进事业，充满冒险精神的机会到来。',
        reversed: '工作中过于鲁莽，缺乏计划的行动可能带来麻烦。',
      },
      wealth: {
        upright: '大胆的财务行动可能带来快速回报。',
        reversed: '冲动投资可能导致损失，三思而后行。',
      },
      health: {
        upright: '精力旺盛，适合进行高强度运动。',
        reversed: '运动时注意安全，避免因冲动而受伤。',
      },
      general: {
        upright: '骑士策马疾驰，带着不可阻挡的热情和勇气向前冲。',
        reversed: '过于急躁的行动可能让你偏离正确方向，冷静下来。',
      },
    },
    description: '一位骑士骑着奔腾的战马，高举权杖向前冲锋。他穿戴着蝾螈纹饰的铠甲，背景是荒凉的沙漠和金字塔。',
    element: 'Fire',
  },
  {
    id: 34,
    name: '权杖王后',
    nameEn: 'Queen of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 13,
    keywords: {
      upright: ['自信', '魅力', '独立', '热情'],
      reversed: ['嫉妒', '自私', '控制欲', '不安全感'],
    },
    meanings: {
      love: {
        upright: '在感情中展现出迷人的自信和魅力，吸引力十足。',
        reversed: '感情中嫉妒心或控制欲过强，需要给对方空间。',
      },
      career: {
        upright: '以强大的个人魅力和领导力在职场上发光发热。',
        reversed: '职场中的不安全感可能导致争强好胜或排斥他人。',
      },
      wealth: {
        upright: '以自信和果断的态度管理财务，收益可观。',
        reversed: '可能因为虚荣而过度消费，需要控制开支。',
      },
      health: {
        upright: '精力充沛，自信的心态带来良好的身体状态。',
        reversed: '情绪波动影响身体，嫉妒和焦虑消耗精力。',
      },
      general: {
        upright: '像火焰女王般散发着温暖和光芒，自信是你最大的武器。',
        reversed: '内在的不安全感让你变得尖锐和防御，找回真正的自信。',
      },
    },
    description: '一位自信的女王端坐宝座上，一手持向日葵，另一手握权杖。宝座上雕刻着狮子和向日葵，一只黑猫蹲在她脚边。',
    element: 'Fire',
  },
  {
    id: 35,
    name: '权杖国王',
    nameEn: 'King of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 14,
    keywords: {
      upright: ['领袖', '远见', '企业家精神', '大胆'],
      reversed: ['专横', '鲁莽', '刚愎自用', '高期待低执行'],
    },
    meanings: {
      love: {
        upright: '在感情中展现出成熟的领导力和慷慨的热情。',
        reversed: '感情中过于强势和霸道，忽视对方的感受。',
      },
      career: {
        upright: '以领袖般的气魄推动事业前进，适合创业和领导。',
        reversed: '领导风格过于专制，团队可能因此而不满。',
      },
      wealth: {
        upright: '以企业家精神创造财富，大胆的决策带来丰厚回报。',
        reversed: '过于冒险的财务决策可能导致损失。',
      },
      health: {
        upright: '以积极主动的态度管理健康，效果显著。',
        reversed: '因过于忙碌而忽视健康，需要注意心血管。',
      },
      general: {
        upright: '真正的领袖以远见和勇气引领方向，你就是那个开拓者。',
        reversed: '权力的傲慢可能让你失去追随者，真正的王者懂得倾听。',
      },
    },
    description: '一位威严的国王坐在宝座上，手持权杖，身穿火焰色的长袍。宝座上雕刻着狮子和蝾螈的图案，一只小蝾螈趴在他脚边。',
    element: 'Fire',
  },
  // ==================== CUPS (圣杯) ====================
  {
    id: 36,
    name: '圣杯王牌',
    nameEn: 'Ace of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 1,
    keywords: {
      upright: ['新感情', '爱', '直觉', '心灵开启'],
      reversed: ['情感封闭', '空虚', '感情受阻', '拒绝爱'],
    },
    meanings: {
      love: {
        upright: '崭新而纯粹的爱情即将降临，心灵被深深触动。',
        reversed: '心门紧闭，拒绝接受新的感情或情感表达。',
      },
      career: {
        upright: '在工作中找到了情感的满足和创造的喜悦。',
        reversed: '对工作缺乏热情和情感投入。',
      },
      wealth: {
        upright: '情感上的富足将带来意想不到的物质回报。',
        reversed: '内心的空虚不是物质能填满的。',
      },
      health: {
        upright: '情感的滋养让身心焕发活力。',
        reversed: '情感压抑影响了身心健康。',
      },
      general: {
        upright: '圣杯溢出了爱与祝福之水，打开心门接受这份神圣的恩赐。',
        reversed: '心灵之泉干涸了，需要重新打开情感的通道。',
      },
    },
    description: '一只手从云中伸出托着一个金色圣杯，杯中溢出五道水流。一只白鸽叼着圆饼飞向杯中，杯下是莲花盛开的水面。',
    element: 'Water',
  },
  {
    id: 37,
    name: '圣杯二',
    nameEn: 'Two of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 2,
    keywords: {
      upright: ['结合', '伙伴关系', '互吸', '和谐'],
      reversed: ['分离', '失衡', '不和', '误解'],
    },
    meanings: {
      love: {
        upright: '两颗心的完美结合，深层的情感连接和相互吸引。',
        reversed: '感情中出现裂痕和不和谐，需要沟通和理解。',
      },
      career: {
        upright: '与他人建立了良好的合作伙伴关系。',
        reversed: '合作关系出现问题，需要重新协调。',
      },
      wealth: {
        upright: '合作投资或共同理财将带来好的结果。',
        reversed: '合伙人之间的财务纠纷需要解决。',
      },
      health: {
        upright: '与他人一起运动或相互鼓励有助于健康。',
        reversed: '关系中的紧张影响了心理健康。',
      },
      general: {
        upright: '两个灵魂的和谐相遇，无论是爱情还是友谊，都是命运的馈赠。',
        reversed: '曾经和谐的关系出现了裂痕，需要用心修复。',
      },
    },
    description: '一男一女面对面站立，各持一只圣杯向对方敬献。他们之间浮起带着双蛇杖的狮子头徽章，象征着神圣的结合。',
    element: 'Water',
  },
  {
    id: 38,
    name: '圣杯三',
    nameEn: 'Three of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 3,
    keywords: {
      upright: ['庆祝', '友谊', '欢聚', '社交'],
      reversed: ['过度放纵', '八卦', '孤立', '第三者'],
    },
    meanings: {
      love: {
        upright: '与朋友们分享爱情的喜悦，或在社交场合遇到心仪的人。',
        reversed: '感情中可能有第三者介入，或者社交过多影响了亲密关系。',
      },
      career: {
        upright: '团队合作愉快，项目圆满完成值得庆祝。',
        reversed: '职场中的八卦和小圈子影响了工作氛围。',
      },
      wealth: {
        upright: '通过社交活动或合作获得财务收益。',
        reversed: '社交花费过多，需要控制聚会和娱乐开支。',
      },
      health: {
        upright: '社交活动带来愉悦心情，对身心有益。',
        reversed: '社交过度或酗酒影响了健康。',
      },
      general: {
        upright: '三位女性举杯共庆，这是友谊和欢乐的时刻。珍惜身边的人。',
        reversed: '快乐过后可能是空虚，或者欢聚的表面下隐藏着问题。',
      },
    },
    description: '三位年轻女子在花园中举起圣杯欢庆，脚边散落着丰收的果实和鲜花。她们的表情欢乐而亲密。',
    element: 'Water',
  },
  {
    id: 39,
    name: '圣杯四',
    nameEn: 'Four of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 4,
    keywords: {
      upright: ['冥想', '不满', '重新评估', '冷漠'],
      reversed: ['觉醒', '接受', '感恩', '新视角'],
    },
    meanings: {
      love: {
        upright: '对感情现状感到不满或冷淡，但可能忽视了眼前的美好。',
        reversed: '重新认识到感情的价值，打开心门接受爱。',
      },
      career: {
        upright: '对工作感到倦怠和不满，但可能忽略了新的机会。',
        reversed: '从工作倦怠中醒来，重新发现职业的意义。',
      },
      wealth: {
        upright: '对财务状况不满意，但可能对眼前的机遇视而不见。',
        reversed: '重新评估财务状况，发现之前忽略的机遇。',
      },
      health: {
        upright: '情绪低落影响了身心状态，需要找到内心的平衡。',
        reversed: '从低落中恢复，重新感受生命的活力。',
      },
      general: {
        upright: '沉浸在自己的世界里，对云中伸出的圣杯视而不见。睁开眼看看吧。',
        reversed: '终于注意到了一直在眼前的恩赐，感恩是治愈的开始。',
      },
    },
    description: '一个年轻人坐在树下冥想，双臂交叉，面前有三个圣杯。一只手从云中伸出递来第四个圣杯，但他视而不见。',
    element: 'Water',
  },
  {
    id: 40,
    name: '圣杯五',
    nameEn: 'Five of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 5,
    keywords: {
      upright: ['失落', '悲伤', '遗憾', '失去'],
      reversed: ['释怀', '接受', '向前看', '恢复'],
    },
    meanings: {
      love: {
        upright: '在感情中经历了失去和悲伤，沉浸在过去的遗憾中。',
        reversed: '开始从感情的伤痛中恢复，学会释怀和向前看。',
      },
      career: {
        upright: '工作上遭遇挫败，为失去的机会而懊悔。',
        reversed: '从职业挫折中恢复，重新出发。',
      },
      wealth: {
        upright: '财务上遭受损失，为失去的金钱而悲伤。',
        reversed: '接受财务损失的事实，关注仍然拥有的资产。',
      },
      health: {
        upright: '悲伤和消极情绪影响身心健康。',
        reversed: '情绪逐渐好转，身心开始恢复。',
      },
      general: {
        upright: '你只看到了翻倒的三个杯子，却忘了身后还有两个完好的。回头看看。',
        reversed: '终于转过身来，发现失去的虽多，留下的已足够重新开始。',
      },
    },
    description: '一个穿黑色斗篷的人低头注视着地上翻倒的三个圣杯，悲伤不已。他身后还有两个完好的圣杯，远处有一座桥通向对岸的房屋。',
    element: 'Water',
  },
  {
    id: 41,
    name: '圣杯六',
    nameEn: 'Six of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 6,
    keywords: {
      upright: ['怀旧', '童年', '纯真', '旧情'],
      reversed: ['活在过去', '不成熟', '放下旧情', '前进'],
    },
    meanings: {
      love: {
        upright: '旧情重温或充满纯真美好的感情回忆，初恋般的甜蜜。',
        reversed: '沉溺在过去的感情中无法自拔，需要面对现实向前走。',
      },
      career: {
        upright: '过去的经验和人脉在当下发挥重要作用。',
        reversed: '过于依赖过去的成就，需要跟上新的变化。',
      },
      wealth: {
        upright: '可能从过去的投资或旧交中获得意外收益。',
        reversed: '不要因为怀旧而做出不理性的财务决定。',
      },
      health: {
        upright: '回归简单纯粹的生活方式对健康有益。',
        reversed: '不要用不成熟的方式逃避健康问题。',
      },
      general: {
        upright: '纯真的回忆如花园中的花朵般美好。珍惜过去，但也别忘了活在当下。',
        reversed: '是时候放下对过去的执念了，未来比回忆更值得期待。',
      },
    },
    description: '在一个古老的花园中，一个年长的孩子将一杯装满鲜花的圣杯递给一个年幼的孩子。周围有六个盛满花朵的圣杯，场景温馨而怀旧。',
    element: 'Water',
  },
  {
    id: 42,
    name: '圣杯七',
    nameEn: 'Seven of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 7,
    keywords: {
      upright: ['幻想', '选择', '诱惑', '白日梦'],
      reversed: ['清醒', '聚焦', '做出选择', '脚踏实地'],
    },
    meanings: {
      love: {
        upright: '对感情有太多不切实际的幻想，难以看清真实的关系。',
        reversed: '从恋爱幻想中醒来，开始面对感情的真实面貌。',
      },
      career: {
        upright: '面对太多选择而无法决定，容易被不切实际的机会迷惑。',
        reversed: '回归现实，专注于最可行的职业目标。',
      },
      wealth: {
        upright: '对财富有不切实际的幻想，容易被虚假的投资承诺吸引。',
        reversed: '清醒地看待财务状况，做出务实的决定。',
      },
      health: {
        upright: '可能用幻想来逃避健康问题，需要正视现实。',
        reversed: '不再自欺欺人，开始认真对待健康。',
      },
      general: {
        upright: '云中浮现出七个充满诱惑的幻象，但并非所有都是真实的。看清你真正想要的。',
        reversed: '迷雾散去，你终于能分辨幻象与现实，做出明智的选择。',
      },
    },
    description: '一个人的剪影面对着云中浮现的七个圣杯，每个杯中都有不同的幻象——城堡、珠宝、桂冠、龙、蛇、鬼魂和神秘面纱。',
    element: 'Water',
  },
  {
    id: 43,
    name: '圣杯八',
    nameEn: 'Eight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 8,
    keywords: {
      upright: ['离开', '放下', '寻找更深意义', '失望'],
      reversed: ['犹豫', '害怕改变', '留恋', '漫无目的'],
    },
    meanings: {
      love: {
        upright: '意识到这段感情无法再满足内心的需求，选择离开去寻找更深层的连接。',
        reversed: '明知感情不对却舍不得离开，在走与留之间挣扎。',
      },
      career: {
        upright: '决定离开无法再带来满足感的工作，去追寻内心的召唤。',
        reversed: '对工作不满但不敢改变，在离开和留下之间犹豫。',
      },
      wealth: {
        upright: '放弃表面的财务安全，去追求更有意义的目标。',
        reversed: '因为经济顾虑而不敢做出改变。',
      },
      health: {
        upright: '为了身心健康主动放弃一些不良习惯或有害的环境。',
        reversed: '知道需要改变却迟迟不行动。',
      },
      general: {
        upright: '在月光下转身离去，留下了八个堆叠的圣杯。有些东西虽然珍贵，但你需要更多。',
        reversed: '想走却走不了，想留又不甘心。鼓起勇气面对你内心真正的渴望。',
      },
    },
    description: '一个人在月光下转身离去，背后留下了整齐排列的八个圣杯。他拄着拐杖向山中走去，月亮上有一张人脸在注视着他。',
    element: 'Water',
  },
  {
    id: 44,
    name: '圣杯九',
    nameEn: 'Nine of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 9,
    keywords: {
      upright: ['满足', '愿望成真', '幸福', '享受'],
      reversed: ['贪婪', '不满足', '物质主义', '自满'],
    },
    meanings: {
      love: {
        upright: '感情上的愿望即将实现，幸福和满足感充盈内心。',
        reversed: '在感情中过于贪心或自满，需要珍惜当下拥有的。',
      },
      career: {
        upright: '工作上的目标即将达成，内心充满成就感和满足。',
        reversed: '即使达成了目标也感到空虚，真正的满足不仅仅来自成就。',
      },
      wealth: {
        upright: '财务愿望即将实现，物质生活令人满意。',
        reversed: '物质的丰富无法填满内心的空虚。',
      },
      health: {
        upright: '身心状态良好，享受健康带来的幸福感。',
        reversed: '过度享乐可能影响健康，注意节制。',
      },
      general: {
        upright: '"许愿牌"——你的愿望正在被宇宙聆听和回应。享受这份满足和幸福。',
        reversed: '得到了想要的一切，却发现内心仍然不满足。真正的幸福在哪里？',
      },
    },
    description: '一位满足的人双臂交叉端坐在椅子上，身后是一个弧形架子，上面整齐排列着九个金色圣杯。他的表情自得而满意。',
    element: 'Water',
  },
  {
    id: 45,
    name: '圣杯十',
    nameEn: 'Ten of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 10,
    keywords: {
      upright: ['幸福', '家庭', '圆满', '和睦'],
      reversed: ['家庭矛盾', '破裂', '不和谐', '价值观冲突'],
    },
    meanings: {
      love: {
        upright: '爱情和家庭达到圆满和幸福的顶点，彩虹般美好。',
        reversed: '家庭中出现矛盾和不和谐，需要用爱来修复。',
      },
      career: {
        upright: '工作与家庭达到完美的平衡，事业和生活都令人满足。',
        reversed: '工作与家庭之间的矛盾需要解决。',
      },
      wealth: {
        upright: '家庭财务状况和谐稳定，共同的富足让人幸福。',
        reversed: '家庭内部的财务分歧需要沟通解决。',
      },
      health: {
        upright: '家庭的温暖和爱是最好的健康良药。',
        reversed: '家庭矛盾影响了身心健康。',
      },
      general: {
        upright: '彩虹下的幸福家庭，这是塔罗中最温馨的画面。珍惜这份来之不易的圆满。',
        reversed: '表面的幸福下隐藏着裂痕，家庭和谐需要每个人的努力。',
      },
    },
    description: '一对夫妇手牵手仰望天空中的彩虹，彩虹上排列着十个圣杯。两个孩子在旁边快乐地玩耍，远处有温馨的小屋和流水。',
    element: 'Water',
  },
  {
    id: 46,
    name: '圣杯侍从',
    nameEn: 'Page of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 11,
    keywords: {
      upright: ['创意', '直觉', '情感消息', '浪漫'],
      reversed: ['情感不成熟', '幻想', '逃避', '创造力受阻'],
    },
    meanings: {
      love: {
        upright: '可能收到令人惊喜的情感告白或浪漫的消息。',
        reversed: '在感情上过于天真或不成熟，容易陷入幻想。',
      },
      career: {
        upright: '工作中展现出创意和灵感，新的创意项目值得关注。',
        reversed: '在工作中过于情绪化，缺乏专业性。',
      },
      wealth: {
        upright: '可能收到意外的小额收益或财务好消息。',
        reversed: '对财务持有不切实际的期望。',
      },
      health: {
        upright: '情感的滋润对身心健康有积极影响。',
        reversed: '情绪不稳定影响了身心状态。',
      },
      general: {
        upright: '一条小鱼从杯中跃出，带来了意想不到的惊喜和灵感。保持孩童般的好奇。',
        reversed: '沉溺在情感幻想中，需要回到现实面对真实的感受。',
      },
    },
    description: '一位穿着华丽的年轻人惊讶地看着手中圣杯里跳出的一条鱼。他站在海边，浪花轻拍着岸边。',
    element: 'Water',
  },
  {
    id: 47,
    name: '圣杯骑士',
    nameEn: 'Knight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 12,
    keywords: {
      upright: ['浪漫', '追求', '理想主义', '提议'],
      reversed: ['不切实际', '情感操控', '虚假承诺', '善变'],
    },
    meanings: {
      love: {
        upright: '浪漫的追求者带着真诚的心前来，可能收到深情的表白或求婚。',
        reversed: '表面浪漫但缺乏真诚，或者做出了无法兑现的感情承诺。',
      },
      career: {
        upright: '用创意和热情推动项目，艺术类工作将有好的进展。',
        reversed: '工作中过于理想化，承诺多于实际行动。',
      },
      wealth: {
        upright: '可能收到吸引人的投资邀约或商业提议。',
        reversed: '警惕看似美好的财务提议，可能暗藏风险。',
      },
      health: {
        upright: '积极的情感状态促进身心健康。',
        reversed: '情感波动影响了身体平衡。',
      },
      general: {
        upright: '白马王子踏着祥云而来，带着爱与理想的邀请。',
        reversed: '美丽的承诺可能只是空中楼阁，看清表象下的真实。',
      },
    },
    description: '一位骑士骑着白马缓步前行，手中小心翼翼地托着一个圣杯。他穿着鱼鳞花纹的铠甲，表情温柔而专注。',
    element: 'Water',
  },
  {
    id: 48,
    name: '圣杯王后',
    nameEn: 'Queen of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 13,
    keywords: {
      upright: ['同理心', '直觉', '温柔', '情感深度'],
      reversed: ['情绪化', '依赖', '控制情绪', '失去自我'],
    },
    meanings: {
      love: {
        upright: '以深厚的同理心和温柔来滋养感情，是理想的伴侣。',
        reversed: '在感情中过度情绪化或过度依赖对方，失去了自我。',
      },
      career: {
        upright: '以直觉和共情能力在工作中发挥优势，适合心理咨询等工作。',
        reversed: '工作中情绪化影响了专业判断。',
      },
      wealth: {
        upright: '依靠直觉做出的财务决定往往是正确的。',
        reversed: '情绪影响了财务判断，需要更理性。',
      },
      health: {
        upright: '丰富的情感生活滋养着身心健康。',
        reversed: '情绪的过山车影响了身心平衡。',
      },
      general: {
        upright: '水之女王端坐在海边宝座上，用无限的慈悲和直觉感知世界。',
        reversed: '情感的海洋让你溺水，需要找回内在的平静和界限。',
      },
    },
    description: '一位温柔的王后坐在水边的宝座上，手捧精美的封闭圣杯。宝座上刻着海洋生物的图案，她的目光温柔而深邃。',
    element: 'Water',
  },
  {
    id: 49,
    name: '圣杯国王',
    nameEn: 'King of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 14,
    keywords: {
      upright: ['情感智慧', '包容', '外交', '沉稳'],
      reversed: ['情绪压抑', '操控', '冷漠', '情感利用'],
    },
    meanings: {
      love: {
        upright: '以成熟和智慧驾驭情感，是稳定可靠的伴侣。',
        reversed: '在感情中压抑真实情感或暗中操控对方。',
      },
      career: {
        upright: '以情商和外交手腕出色地处理职场关系。',
        reversed: '利用他人的情感来达成自己的职业目的。',
      },
      wealth: {
        upright: '以冷静和智慧管理财务，不被情绪左右。',
        reversed: '可能因为情感因素做出不理性的财务决定。',
      },
      health: {
        upright: '良好的情绪管理为健康打下了坚实基础。',
        reversed: '长期压抑情绪可能导致身心问题。',
      },
      general: {
        upright: '坐在波涛汹涌大海中的宝座上，却依然从容不迫。情感的主人而非奴隶。',
        reversed: '在平静的外表下隐藏着汹涌的情绪暗流，迟早会决堤。',
      },
    },
    description: '一位国王端坐在漂浮于大海中的宝座上，一手持圣杯，一手持权杖。海面波涛汹涌，但他的表情依然沉稳从容。',
    element: 'Water',
  },
  // ==================== SWORDS (宝剑) ====================
  {
    id: 50,
    name: '宝剑王牌',
    nameEn: 'Ace of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 1,
    keywords: {
      upright: ['真相', '清晰', '突破', '新思维'],
      reversed: ['混乱', '误解', '暴力', '不公正'],
    },
    meanings: {
      love: {
        upright: '在感情中获得清晰的洞察，以真相和诚实面对关系。',
        reversed: '感情中存在误解和沟通障碍，真相被扭曲。',
      },
      career: {
        upright: '思维上的突破带来新的工作方向和解决方案。',
        reversed: '思维混乱，无法做出清晰的职业判断。',
      },
      wealth: {
        upright: '清晰的思维带来明智的财务决策。',
        reversed: '混乱的判断可能导致财务失误。',
      },
      health: {
        upright: '以清醒的头脑面对健康问题，找到正确的解决方法。',
        reversed: '对健康状况的判断不清晰，需要寻求专业意见。',
      },
      general: {
        upright: '真理之剑刺破迷雾，带来清晰和突破。用智慧去面对一切。',
        reversed: '思维的利剑被误用，可能带来伤害而非启迪。',
      },
    },
    description: '一只手从云中伸出，握着一把直指天空的利剑，剑尖戴着金冠和月桂花环。背景是崎岖的山脉。',
    element: 'Air',
  },
  {
    id: 51,
    name: '宝剑二',
    nameEn: 'Two of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 2,
    keywords: {
      upright: ['僵局', '抉择', '蒙蔽', '平衡'],
      reversed: ['信息浮现', '做出决定', '过度分析', '情绪倾斜'],
    },
    meanings: {
      love: {
        upright: '面临感情中的两难选择，内心在理性和感性之间拉扯。',
        reversed: '隐藏的真相浮出水面，帮助你做出感情决定。',
      },
      career: {
        upright: '在两个职业选择之间犹豫不决，需要更多信息。',
        reversed: '终于获得足够的信息来做出职业选择。',
      },
      wealth: {
        upright: '财务决策陷入僵局，需要权衡利弊。',
        reversed: '新的信息帮助你做出财务决定。',
      },
      health: {
        upright: '可能在两种治疗方案之间犹豫。',
        reversed: '获得了做出健康决定所需的关键信息。',
      },
      general: {
        upright: '蒙着眼睛在做抉择，也许你需要先摘下眼罩看清现实。',
        reversed: '障碍被移除，真相开始显现，是时候做出你的决定了。',
      },
    },
    description: '一位蒙着眼的女子坐在海边，双手交叉各持一把宝剑。身后是一弯新月和平静的水面，暗示着隐藏的情感。',
    element: 'Air',
  },
  {
    id: 52,
    name: '宝剑三',
    nameEn: 'Three of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 3,
    keywords: {
      upright: ['心碎', '悲痛', '背叛', '分离'],
      reversed: ['恢复', '原谅', '释放痛苦', '疗愈'],
    },
    meanings: {
      love: {
        upright: '经历心碎和背叛的痛苦，感情遭受重创。',
        reversed: '从感情的伤痛中逐渐恢复，学会原谅和释怀。',
      },
      career: {
        upright: '工作中遭受打击或背叛，心灵受到伤害。',
        reversed: '从职场伤痛中恢复，重新振作。',
      },
      wealth: {
        upright: '财务上遭受损失带来的心痛。',
        reversed: '从财务损失中恢复，伤口在愈合。',
      },
      health: {
        upright: '心理上的痛苦影响了身体健康，特别是心脏。',
        reversed: '心理创伤开始愈合，身体也在恢复。',
      },
      general: {
        upright: '三把剑刺穿了心脏，在暴风雨中经历着深刻的痛苦。允许自己悲伤。',
        reversed: '暴风雨过后，伤口在慢慢愈合。疗愈的过程已经开始。',
      },
    },
    description: '三把宝剑刺穿一颗红色的心脏，背景是阴沉的暴风雨天空，大雨倾盆而下。',
    element: 'Air',
  },
  {
    id: 53,
    name: '宝剑四',
    nameEn: 'Four of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 4,
    keywords: {
      upright: ['休息', '恢复', '冥想', '退隐'],
      reversed: ['不安', '过度休息', '焦躁', '恢复受阻'],
    },
    meanings: {
      love: {
        upright: '感情需要一段冷静和休息的时间来恢复。',
        reversed: '试图休息但内心无法平静，焦虑影响了关系。',
      },
      career: {
        upright: '工作中需要暂停和休息，给大脑充电的时间。',
        reversed: '过度焦虑工作而无法真正休息。',
      },
      wealth: {
        upright: '财务上适合保守策略，暂时不宜大动作。',
        reversed: '因财务焦虑而无法放松身心。',
      },
      health: {
        upright: '身体需要彻底的休息和恢复，不要勉强。',
        reversed: '即使在休息中也感到不安，需要解决内心的焦虑。',
      },
      general: {
        upright: '骑士安息在教堂中，这是修复和恢复的神圣时刻。让自己好好休息。',
        reversed: '无法获得真正的安宁和休息，内心的躁动需要被面对。',
      },
    },
    description: '一位骑士安静地躺在教堂的石棺上，双手合十。三把剑挂在墙上，一把剑横放在他身边。彩色玻璃窗投下柔和的光。',
    element: 'Air',
  },
  {
    id: 54,
    name: '宝剑五',
    nameEn: 'Five of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 5,
    keywords: {
      upright: ['冲突', '失败', '自私', '残忍'],
      reversed: ['和解', '放下', '学会妥协', '既往不咎'],
    },
    meanings: {
      love: {
        upright: '感情中的争吵升级，赢了争论却输了感情。',
        reversed: '放下争执，选择和解和修复关系。',
      },
      career: {
        upright: '职场中的勾心斗角让人心寒，得不偿失的胜利。',
        reversed: '决定放下职场恩怨，以大局为重。',
      },
      wealth: {
        upright: '不道德的竞争手段可能短期获利但长期有害。',
        reversed: '接受财务上的妥协，比鱼死网破更明智。',
      },
      health: {
        upright: '冲突和紧张情绪严重影响身心健康。',
        reversed: '放下敌意后身心状态逐渐改善。',
      },
      general: {
        upright: '赢得了战斗，却失去了人心。这样的胜利真的值得吗？',
        reversed: '选择放下武器，接受并非所有战斗都值得打。',
      },
    },
    description: '一个人得意地拿着三把宝剑，脚边还有两把。两个失败者垂头丧气地离去，天空阴沉，风起云涌。',
    element: 'Air',
  },
  {
    id: 55,
    name: '宝剑六',
    nameEn: 'Six of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 6,
    keywords: {
      upright: ['过渡', '离开', '走向平静', '前进'],
      reversed: ['无法放下', '困在过去', '抗拒改变', '回归'],
    },
    meanings: {
      love: {
        upright: '离开一段不健康的关系，向着更平静的感情生活前行。',
        reversed: '无法离开不健康的感情环境，或者离开后又想回头。',
      },
      career: {
        upright: '离开不适合的工作环境，向着更好的职业前景过渡。',
        reversed: '想要改变工作环境却无法下定决心。',
      },
      wealth: {
        upright: '财务状况从动荡逐渐走向平稳。',
        reversed: '财务困境似乎看不到出口。',
      },
      health: {
        upright: '健康状况从困难期向好的方向转变。',
        reversed: '健康恢复的过程中出现反复。',
      },
      general: {
        upright: '一叶扁舟载你驶离风暴，前方是平静的水域。艰难的过渡终将到达彼岸。',
        reversed: '无法驶离困境的港口，内心的牵绊让你无法前行。',
      },
    },
    description: '一个摆渡人撑着船，载着一位女性和一个孩子渡过水面。船头插着六把宝剑，近处的水面波涛汹涌，远处的水面平静如镜。',
    element: 'Air',
  },
  {
    id: 56,
    name: '宝剑七',
    nameEn: 'Seven of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 7,
    keywords: {
      upright: ['策略', '欺骗', '偷偷摸摸', '自作聪明'],
      reversed: ['真相揭露', '坦白', '良心不安', '被抓住'],
    },
    meanings: {
      love: {
        upright: '感情中可能存在欺骗或隐瞒，有人没有完全坦诚。',
        reversed: '隐藏的秘密被揭露，感情中的谎言被戳穿。',
      },
      career: {
        upright: '工作中有人在暗中使诡计，或自己在用不光明的手段。',
        reversed: '不光彩的行为被发现，需要面对后果。',
      },
      wealth: {
        upright: '警惕财务上的欺诈和不诚实行为。',
        reversed: '财务欺诈被揭露，需要正视后果。',
      },
      health: {
        upright: '可能在对自己或他人隐瞒健康问题。',
        reversed: '隐藏的健康问题被发现，及时面对是好事。',
      },
      general: {
        upright: '趁夜色偷走了五把剑，但这种小聪明终究不是长久之计。',
        reversed: '真相终将大白，与其被揭穿不如主动坦白。',
      },
    },
    description: '一个人趁夜色偷偷摸摸地扛着五把宝剑溜走，留下两把在原地。他回头窥视营地的帐篷，脸上带着狡猾的表情。',
    element: 'Air',
  },
  {
    id: 57,
    name: '宝剑八',
    nameEn: 'Eight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 8,
    keywords: {
      upright: ['困境', '受限', '无助', '自我设限'],
      reversed: ['解脱', '新视角', '打破限制', '自我释放'],
    },
    meanings: {
      love: {
        upright: '在感情中感到被困和无助，但很多限制其实来自内心。',
        reversed: '从感情的困境中找到出路，打破自我限制。',
      },
      career: {
        upright: '工作中感到被困住，看不到出路。',
        reversed: '发现了摆脱职业困境的方法。',
      },
      wealth: {
        upright: '感觉在财务上被困住，到处都是限制。',
        reversed: '找到了突破财务困境的方法。',
      },
      health: {
        upright: '感觉被健康问题困住，心理上的恐惧加剧了困境。',
        reversed: '意识到很多恐惧是自己制造的，开始积极面对。',
      },
      general: {
        upright: '被蒙住眼睛，被剑围困，但仔细看——绳索是松的，你可以随时离开。',
        reversed: '摘下了蒙眼布，看清了围困你的不过是自己的恐惧。',
      },
    },
    description: '一位蒙着眼被绳索松松绑着的女子站在八把插在地上的宝剑之间，身后是城堡和水面。她似乎不知道自己随时可以逃脱。',
    element: 'Air',
  },
  {
    id: 58,
    name: '宝剑九',
    nameEn: 'Nine of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 9,
    keywords: {
      upright: ['焦虑', '噩梦', '绝望', '过度忧虑'],
      reversed: ['释放恐惧', '看到希望', '走出黑暗', '求助'],
    },
    meanings: {
      love: {
        upright: '对感情充满焦虑和恐惧，失眠的夜晚被担忧占据。',
        reversed: '开始放下对感情的过度忧虑，逐渐走出阴影。',
      },
      career: {
        upright: '工作压力导致严重焦虑和失眠。',
        reversed: '工作焦虑开始缓解，找到了应对方法。',
      },
      wealth: {
        upright: '对财务状况的过度担忧让人夜不能寐。',
        reversed: '财务焦虑逐渐减轻，情况没有想象的那么糟。',
      },
      health: {
        upright: '焦虑和失眠严重影响身心健康，需要寻求帮助。',
        reversed: '心理状态开始好转，睡眠质量改善。',
      },
      general: {
        upright: '深夜在床上惊醒，内心的恐惧在黑暗中被无限放大。很多恐惧比现实更可怕。',
        reversed: '噩梦渐渐散去，你开始意识到很多担忧是不必要的。',
      },
    },
    description: '一个人在黑暗中从床上坐起，双手掩面，墙上挂着九把宝剑。床单上雕刻着玫瑰和星象符号。',
    element: 'Air',
  },
  {
    id: 59,
    name: '宝剑十',
    nameEn: 'Ten of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 10,
    keywords: {
      upright: ['终结', '背叛', '触底', '最终的打击'],
      reversed: ['重生', '恢复', '最坏已过', '东山再起'],
    },
    meanings: {
      love: {
        upright: '感情遭受毁灭性的打击，一段关系走到了尽头。',
        reversed: '从感情的废墟中站起来，最黑暗的时刻已经过去。',
      },
      career: {
        upright: '事业遭受重大打击，如被解雇或项目彻底失败。',
        reversed: '从职业的低谷中开始恢复，新的开始在等待。',
      },
      wealth: {
        upright: '财务遭受重大损失，可能触及谷底。',
        reversed: '财务触底反弹，最坏的时期已经过去。',
      },
      health: {
        upright: '健康状况可能遭受严重打击，需要认真对待。',
        reversed: '健康危机过后开始恢复，黎明即将来临。',
      },
      general: {
        upright: '十把剑插在背上，已经不能更糟了。但看——地平线上的太阳正在升起。',
        reversed: '你已经触底，接下来的方向只有向上。拔出身上的剑，重新站起来。',
      },
    },
    description: '一个人面朝下倒在地上，背上插着十把宝剑。黑暗的天空下，远方的地平线上一轮金色的太阳正在升起。',
    element: 'Air',
  },
  {
    id: 60,
    name: '宝剑侍从',
    nameEn: 'Page of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 11,
    keywords: {
      upright: ['好奇', '机敏', '求知', '观察'],
      reversed: ['八卦', '尖刻', '散漫', '诡辩'],
    },
    meanings: {
      love: {
        upright: '以理性和好奇心面对感情，善于观察和分析。',
        reversed: '在感情中过于挑剔或尖刻，言语可能伤人。',
      },
      career: {
        upright: '以敏锐的头脑和求知欲在工作中表现出色。',
        reversed: '工作中散漫或爱搬弄是非。',
      },
      wealth: {
        upright: '以聪明的头脑研究理财知识。',
        reversed: '对财务问题分析过度却缺乏行动。',
      },
      health: {
        upright: '积极了解和学习健康知识。',
        reversed: '对健康问题过度担忧或查阅过多负面信息。',
      },
      general: {
        upright: '手持宝剑迎风而立，以敏锐的眼光洞察世界。知识就是力量。',
        reversed: '锋利的舌头可以伤人，用你的智慧去建设而非破坏。',
      },
    },
    description: '一位年轻人站在风中高地上，双手举起一把宝剑，头发和衣服被风吹起。他的表情机警，天空中飘着急速移动的云。',
    element: 'Air',
  },
  {
    id: 61,
    name: '宝剑骑士',
    nameEn: 'Knight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 12,
    keywords: {
      upright: ['迅速', '果断', '直接', '智慧'],
      reversed: ['冲动', '无方向', '破坏性', '傲慢'],
    },
    meanings: {
      love: {
        upright: '在感情中果断而直接，有话直说的沟通方式。',
        reversed: '在感情中过于尖锐和冲动，言语可能造成伤害。',
      },
      career: {
        upright: '以迅速果断的行动力推进工作，效率极高。',
        reversed: '工作中过于急躁和冲动，容易出错。',
      },
      wealth: {
        upright: '快速果断的财务决策带来收益。',
        reversed: '过于冲动的投资决策可能导致损失。',
      },
      health: {
        upright: '以坚定的意志力执行健康计划。',
        reversed: '运动或行动时需要注意安全，防止意外伤害。',
      },
      general: {
        upright: '骑士策马冲锋，剑指前方，没有什么能阻挡他前进的脚步。',
        reversed: '没有方向的冲锋只是鲁莽，停下来想清楚再行动。',
      },
    },
    description: '一位骑士骑着战马全速冲锋，高举宝剑。天空乌云密布，大风吹得树木弯腰，一切都显示着极速前进的动感。',
    element: 'Air',
  },
  {
    id: 62,
    name: '宝剑王后',
    nameEn: 'Queen of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 13,
    keywords: {
      upright: ['独立', '理性', '洞察', '直言不讳'],
      reversed: ['冷酷', '尖酸刻薄', '孤僻', '偏见'],
    },
    meanings: {
      love: {
        upright: '以理性和独立的态度面对感情，有清晰的情感边界。',
        reversed: '在感情中过于冷漠或刻薄，用理性武装来拒绝亲密。',
      },
      career: {
        upright: '以清晰的思维和独立的判断力在职场获得尊重。',
        reversed: '在职场中过于尖刻和冷漠，影响了人际关系。',
      },
      wealth: {
        upright: '以理性和独立的判断做出明智的财务决策。',
        reversed: '对财务过于苛刻或悲观。',
      },
      health: {
        upright: '以理性的态度管理健康。',
        reversed: '情感的封闭影响了身心健康。',
      },
      general: {
        upright: '剑之女王用智慧和真相的利刃切割虚假。独立而清醒。',
        reversed: '锋利过了头就变成了冷酷，别让理性成为拒绝温暖的借口。',
      },
    },
    description: '一位神情严肃的女王端坐在高处的宝座上，一手高举宝剑，另一手伸出做邀请状。天空中飘着云彩，一只蝴蝶飞在她的王冠旁。',
    element: 'Air',
  },
  {
    id: 63,
    name: '宝剑国王',
    nameEn: 'King of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 14,
    keywords: {
      upright: ['权威', '理智', '公正', '纪律'],
      reversed: ['暴君', '偏执', '滥权', '冷酷无情'],
    },
    meanings: {
      love: {
        upright: '以成熟理性的方式处理感情问题，值得信赖的伴侣。',
        reversed: '在感情中过于冷酷和专制，控制欲过强。',
      },
      career: {
        upright: '以权威和公正赢得职场尊重，适合领导和决策岗位。',
        reversed: '在职场中滥用权力或过于独裁。',
      },
      wealth: {
        upright: '以严格的纪律和清晰的逻辑管理财务。',
        reversed: '过于苛刻的财务管理可能适得其反。',
      },
      health: {
        upright: '以理性和纪律维持健康的生活方式。',
        reversed: '过于刻板的生活方式反而影响身心平衡。',
      },
      general: {
        upright: '剑之国王以真理和逻辑统治他的王国，公正而有智慧。',
        reversed: '权力和理性被滥用时就变成了暴政和冷酷。',
      },
    },
    description: '一位威严的国王端坐在宝座上，右手高举宝剑，宝座上刻着蝴蝶和天使的图案。他的表情冷静而严肃，天空中有云彩飘过。',
    element: 'Air',
  },
  // ==================== PENTACLES (星币) ====================
  {
    id: 64,
    name: '星币王牌',
    nameEn: 'Ace of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 1,
    keywords: {
      upright: ['新机遇', '繁荣', '物质', '丰盛'],
      reversed: ['错失机会', '财务损失', '规划不当', '贪婪'],
    },
    meanings: {
      love: {
        upright: '一段以稳定和实际为基础的新关系正在开始。',
        reversed: '过于注重物质条件而忽视了感情的本质。',
      },
      career: {
        upright: '令人兴奋的新工作机会或商业项目出现。',
        reversed: '错失了重要的职业机遇，或新项目不如预期。',
      },
      wealth: {
        upright: '新的财务机遇降临，可能是投资、奖金或新收入来源。',
        reversed: '财务上的机会被错过或投资不当。',
      },
      health: {
        upright: '适合开始新的健康投资和养生计划。',
        reversed: '在健康上的投入没有得到预期的回报。',
      },
      general: {
        upright: '一枚金币从天而降，物质世界向你敞开了丰盛的大门。抓住这个机会。',
        reversed: '丰盛之门虽然打开了，但你可能没准备好或不愿意走进去。',
      },
    },
    description: '一只手从云中伸出，掌心托着一枚金色的星币。下方是花园的入口，两侧开满了百合花，远处是青翠的山谷。',
    element: 'Earth',
  },
  {
    id: 65,
    name: '星币二',
    nameEn: 'Two of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 2,
    keywords: {
      upright: ['平衡', '灵活', '多任务', '适应'],
      reversed: ['失衡', '混乱', '超负荷', '顾此失彼'],
    },
    meanings: {
      love: {
        upright: '在感情和其他生活领域之间寻找平衡。',
        reversed: '无法平衡感情与其他事务，顾此失彼。',
      },
      career: {
        upright: '灵活地处理多个工作任务，展现出色的适应能力。',
        reversed: '工作任务过多导致混乱，需要简化和聚焦。',
      },
      wealth: {
        upright: '灵活地管理财务收支，保持平衡。',
        reversed: '财务管理失控，收支严重失衡。',
      },
      health: {
        upright: '在忙碌中保持身心平衡需要技巧。',
        reversed: '生活失衡影响了健康。',
      },
      general: {
        upright: '像杂耍艺人般灵活地平衡生活的各个方面。你做得到。',
        reversed: '太多球在空中让你手忙脚乱，是时候放下几个了。',
      },
    },
    description: '一个年轻人在海边轻松地玩着两枚星币的杂耍，星币被无限符号连接。身后是波涛中的两艘船。',
    element: 'Earth',
  },
  {
    id: 66,
    name: '星币三',
    nameEn: 'Three of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 3,
    keywords: {
      upright: ['合作', '技艺', '学习', '团队'],
      reversed: ['缺乏合作', '平庸', '不被认可', '马虎'],
    },
    meanings: {
      love: {
        upright: '两个人共同为关系的建设而努力，合作默契。',
        reversed: '感情中缺乏共同努力，一方在独自承担。',
      },
      career: {
        upright: '团队合作出色，专业技能得到认可和展示。',
        reversed: '团队合作不顺，专业能力没有得到发挥。',
      },
      wealth: {
        upright: '通过专业技能和团队合作获得收入。',
        reversed: '工作质量不高影响了收入。',
      },
      health: {
        upright: '寻求专业人士的健康指导会有好的效果。',
        reversed: '健康管理缺乏专业性和系统性。',
      },
      general: {
        upright: '工匠、建筑师和牧师合力打造杰作。合作和精进是成功的基石。',
        reversed: '缺乏沟通和配合让团队的努力付诸东流。',
      },
    },
    description: '在一座哥特式教堂内，一位石匠站在凳子上雕刻，两位修道士手持建筑图纸在旁讨论。拱门上刻着三枚星币。',
    element: 'Earth',
  },
  {
    id: 67,
    name: '星币四',
    nameEn: 'Four of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 4,
    keywords: {
      upright: ['保守', '控制', '安全感', '守财'],
      reversed: ['释放', '慷慨', '过度消费', '放手'],
    },
    meanings: {
      love: {
        upright: '在感情中过于保守和控制，害怕失去而紧紧抓住。',
        reversed: '学会放手和信任，在感情中变得更加开放。',
      },
      career: {
        upright: '工作上过于保守，不愿冒险尝试新事物。',
        reversed: '放下对安全的过度追求，开始尝试新的可能。',
      },
      wealth: {
        upright: '对金钱控制欲很强，善于储蓄但可能过于吝啬。',
        reversed: '开始学会合理消费和分享财富。',
      },
      health: {
        upright: '过度的焦虑和控制欲影响了身心放松。',
        reversed: '学会放松和释放，身心更加自在。',
      },
      general: {
        upright: '紧紧抱着你的金币，生怕失去一分一厘。但真正的富足包含给予。',
        reversed: '松开紧握的双手，你会发现放手后反而获得更多。',
      },
    },
    description: '一个人坐在城外的凳子上，头顶顶着一枚星币，双臂紧抱着一枚，两脚各踩着一枚，紧紧守护着他的财产。',
    element: 'Earth',
  },
  {
    id: 68,
    name: '星币五',
    nameEn: 'Five of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 5,
    keywords: {
      upright: ['困难', '贫困', '疾病', '孤立'],
      reversed: ['恢复', '找到帮助', '渡过难关', '好转'],
    },
    meanings: {
      love: {
        upright: '感情中经历困难时期，感到被冷落和孤独。',
        reversed: '感情的困难期正在过去，希望重现。',
      },
      career: {
        upright: '事业遭遇困境，可能面临失业或经济压力。',
        reversed: '职业困境开始好转，新的机会在出现。',
      },
      wealth: {
        upright: '经历财务困难，入不敷出。',
        reversed: '财务困难逐渐缓解，找到了帮助和出路。',
      },
      health: {
        upright: '健康状况不佳，可能同时面临身体和精神上的困扰。',
        reversed: '健康状况开始好转，找到了有效的治疗方法。',
      },
      general: {
        upright: '寒风中两个人走过教堂的彩窗外，帮助就在身边却浑然不觉。抬头看看。',
        reversed: '终于推开了教堂的门，温暖和帮助就在里面等着你。',
      },
    },
    description: '两个衣衫褴褛的人在风雪中走过一座教堂的彩色玻璃窗外，一人拄着拐杖，一人赤脚。窗内灯火温暖，窗上有五枚星币。',
    element: 'Earth',
  },
  {
    id: 69,
    name: '星币六',
    nameEn: 'Six of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 6,
    keywords: {
      upright: ['慷慨', '施与受', '公平', '分享'],
      reversed: ['不平等', '附条件的帮助', '贪婪', '债务'],
    },
    meanings: {
      love: {
        upright: '在感情中慷慨地给予和接受爱，关系平衡而美好。',
        reversed: '感情中的付出不对等，一方总在索取而不给予。',
      },
      career: {
        upright: '获得贵人的帮助或有能力帮助他人，互惠互利。',
        reversed: '职场中的帮助可能附带条件或期望。',
      },
      wealth: {
        upright: '财务上有能力帮助他人，或者得到他人的慷慨资助。',
        reversed: '借贷关系带来困扰，帮助他人时要注意界限。',
      },
      health: {
        upright: '慷慨和感恩的心态对健康有积极影响。',
        reversed: '过度为他人牺牲影响了自己的身心健康。',
      },
      general: {
        upright: '富人用天平称量金币分给需要的人。施与受都是一种福气。',
        reversed: '帮助背后有隐藏的目的，或者接受帮助让你失去了尊严。',
      },
    },
    description: '一位穿着华丽的商人手持天平，将金币分给跪在他面前的两位穷人。场景展示了慷慨和社会阶层的差异。',
    element: 'Earth',
  },
  {
    id: 70,
    name: '星币七',
    nameEn: 'Seven of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 7,
    keywords: {
      upright: ['耐心', '投资回报', '评估', '等待收获'],
      reversed: ['急躁', '投入无回报', '焦虑', '短视'],
    },
    meanings: {
      love: {
        upright: '对感情的长期投入正在显现成果，耐心等待花开。',
        reversed: '对感情的未来感到焦虑，怀疑自己的付出是否值得。',
      },
      career: {
        upright: '事业上长期的努力正在酝酿回报，需要再多一点耐心。',
        reversed: '对工作投入了大量精力却看不到回报，令人沮丧。',
      },
      wealth: {
        upright: '长期投资正在慢慢产生回报，继续耐心等待。',
        reversed: '投资回报不如预期，需要重新评估策略。',
      },
      health: {
        upright: '健康管理需要长期坚持，效果会逐渐显现。',
        reversed: '因为看不到即时效果而放弃健康计划。',
      },
      general: {
        upright: '农夫倚在锄头上审视着成长中的作物。播种已完成，丰收需要耐心。',
        reversed: '焦躁不安地等待果实成熟，考虑是否该换一块田地。',
      },
    },
    description: '一位农夫倚靠在锄头上，审视着面前一棵长满星币果实的灌木丛。他的表情若有所思，似在评估自己的劳动成果。',
    element: 'Earth',
  },
  {
    id: 71,
    name: '星币八',
    nameEn: 'Eight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 8,
    keywords: {
      upright: ['勤勉', '精进', '专注', '学徒'],
      reversed: ['敷衍', '缺乏热情', '完美主义', '重复无聊'],
    },
    meanings: {
      love: {
        upright: '用心经营感情，像匠人一样细心打磨每一个细节。',
        reversed: '对感情的经营敷衍了事，或者过于追求完美。',
      },
      career: {
        upright: '专注于提升专业技能，勤勉的态度将获得回报。',
        reversed: '对工作失去热情，机械地重复没有意义的任务。',
      },
      wealth: {
        upright: '通过勤劳和技能稳步增加收入。',
        reversed: '收入增长缓慢，可能在做没有价值的工作。',
      },
      health: {
        upright: '通过持续的努力建立健康的生活习惯。',
        reversed: '健康习惯的建立遇到瓶颈或失去动力。',
      },
      general: {
        upright: '工匠专注地雕刻着每一枚星币，精益求精。持续的努力终将创造杰作。',
        reversed: '失去了对工艺的热爱，变成了无灵魂的重复劳动。',
      },
    },
    description: '一位工匠坐在工作台前专注地雕刻着星币，旁边已经完成了六枚，一枚挂在柱子上展示。城镇在远方的背景中。',
    element: 'Earth',
  },
  {
    id: 72,
    name: '星币九',
    nameEn: 'Nine of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 9,
    keywords: {
      upright: ['独立', '丰足', '优雅', '自给自足'],
      reversed: ['过度依赖', '财务不独立', '虚荣', '空虚'],
    },
    meanings: {
      love: {
        upright: '在感情中保持独立和优雅，享受高品质的关系。',
        reversed: '物质上的追求影响了感情的纯粹性。',
      },
      career: {
        upright: '事业有成，享受独立工作带来的成就感和自由。',
        reversed: '表面的成功掩盖了内心的空虚。',
      },
      wealth: {
        upright: '财务独立，享受物质的丰足和精神的富裕。',
        reversed: '虽然物质丰富但内心不满足，或财务独立受到威胁。',
      },
      health: {
        upright: '有条件享受高品质的健康生活方式。',
        reversed: '过于奢侈的生活方式可能并不健康。',
      },
      general: {
        upright: '在丰饶的花园中漫步，手托猎鹰。你的努力换来了如今的丰足和优雅。',
        reversed: '金色的笼子虽然华丽，但里面的鸟渴望自由。',
      },
    },
    description: '一位优雅的女士在花园中漫步，手上栖着一只猎鹰。花园中葡萄累累，九枚星币散布其间，蜗牛在脚边爬行。',
    element: 'Earth',
  },
  {
    id: 73,
    name: '星币十',
    nameEn: 'Ten of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 10,
    keywords: {
      upright: ['传承', '家族', '长久财富', '稳固'],
      reversed: ['家族纠纷', '财务损失', '动荡', '遗产纷争'],
    },
    meanings: {
      love: {
        upright: '稳固而持久的家庭关系，代代传承的爱与幸福。',
        reversed: '家庭中的矛盾和遗产问题影响了感情。',
      },
      career: {
        upright: '事业建立在稳固的基础上，可以传承和长久发展。',
        reversed: '家族企业或长期事业面临动荡。',
      },
      wealth: {
        upright: '长久稳固的财富积累，遗产和家族财务安全。',
        reversed: '家族财产纠纷或长期财务基础出现动摇。',
      },
      health: {
        upright: '家族的支持和稳定的环境有益于长期健康。',
        reversed: '家族遗传性的健康问题需要关注。',
      },
      general: {
        upright: '三代同堂在古老的拱门下，十枚星币构成生命之树的图案。这是长久富足的象征。',
        reversed: '家族的稳固根基受到威胁，内部纷争可能动摇一切。',
      },
    },
    description: '在一座古老的城门下，老人、成年夫妻和孩子三代同堂。十枚星币排列成生命之树的图案，两只猎犬在旁玩耍。',
    element: 'Earth',
  },
  {
    id: 74,
    name: '星币侍从',
    nameEn: 'Page of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 11,
    keywords: {
      upright: ['学习', '机遇', '踏实', '好消息'],
      reversed: ['懒散', '缺乏远见', '错失机遇', '不脚踏实地'],
    },
    meanings: {
      love: {
        upright: '以认真踏实的态度对待感情，可能遇到务实可靠的对象。',
        reversed: '在感情中缺乏投入和认真度。',
      },
      career: {
        upright: '学习新技能的好时机，可能收到好的工作消息。',
        reversed: '缺乏学习的动力，错过了提升自己的机会。',
      },
      wealth: {
        upright: '收到关于财务的好消息，新的赚钱机会出现。',
        reversed: '财务上的好消息延迟，缺乏理财意识。',
      },
      health: {
        upright: '以认真的态度学习和实践健康知识。',
        reversed: '对健康管理不够重视和认真。',
      },
      general: {
        upright: '年轻人专注地端详手中的金币，充满了学习和成长的渴望。万丈高楼平地起。',
        reversed: '有了目标却缺乏执行力，空想不如踏实行动。',
      },
    },
    description: '一位年轻人站在绿色的原野上，双手小心翼翼地托着一枚金色星币，专注地端详着。远处是绿色的山脉和耕种过的田地。',
    element: 'Earth',
  },
  {
    id: 75,
    name: '星币骑士',
    nameEn: 'Knight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 12,
    keywords: {
      upright: ['勤劳', '可靠', '稳健', '负责任'],
      reversed: ['固执', '懒惰', '无趣', '过于保守'],
    },
    meanings: {
      love: {
        upright: '一个可靠而忠诚的伴侣，虽不浪漫但很踏实。',
        reversed: '在感情中过于沉闷和缺乏激情。',
      },
      career: {
        upright: '以勤劳和可靠的态度稳步推进工作，值得信赖。',
        reversed: '工作中过于保守和固执，效率低下。',
      },
      wealth: {
        upright: '以稳健和有纪律的方式积累财富。',
        reversed: '过于保守的理财方式限制了财富增长。',
      },
      health: {
        upright: '以稳定持续的方式保持健康习惯。',
        reversed: '健康管理过于刻板，缺乏灵活性。',
      },
      general: {
        upright: '骑士端坐在不动的马上，稳如磐石。缓慢但坚定地走向目标。',
        reversed: '过于谨慎以至于停滞不前，有时候需要加快脚步。',
      },
    },
    description: '一位骑士骑在一匹静止的黑马上，手中端详着一枚星币。他穿着朴实的盔甲，背景是已经耕种好的田地。',
    element: 'Earth',
  },
  {
    id: 76,
    name: '星币王后',
    nameEn: 'Queen of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 13,
    keywords: {
      upright: ['务实', '丰饶', '关怀', '家庭'],
      reversed: ['过度付出', '忽视自我', '物质主义', '控制'],
    },
    meanings: {
      love: {
        upright: '以温暖和务实的方式照顾伴侣和家庭，是理想的贤内助。',
        reversed: '过度牺牲自我来维系家庭，或者用物质来衡量爱。',
      },
      career: {
        upright: '以务实和关怀的方式管理团队和事业，事业与家庭兼顾。',
        reversed: '因过度关注家庭而影响了事业发展。',
      },
      wealth: {
        upright: '善于管理家庭财务，创造温馨富足的生活环境。',
        reversed: '可能因为过度消费或错误的理财方式影响家庭财务。',
      },
      health: {
        upright: '注重健康饮食和生活品质，身心状态良好。',
        reversed: '因为忙于照顾他人而忽视了自己的健康。',
      },
      general: {
        upright: '坐在花园宝座上，怀抱星币如同怀抱孩子。大地母亲的丰饶和关怀。',
        reversed: '付出太多忘了自己，也可能用物质代替了真正的关爱。',
      },
    },
    description: '一位温和的王后坐在花园中的宝座上，膝上温柔地捧着一枚大星币。周围繁花似锦，一只兔子在脚边跳跃。',
    element: 'Earth',
  },
  {
    id: 77,
    name: '星币国王',
    nameEn: 'King of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 14,
    keywords: {
      upright: ['富足', '安全', '成功', '务实领袖'],
      reversed: ['贪婪', '物质至上', '顽固', '投机'],
    },
    meanings: {
      love: {
        upright: '提供稳定和安全感的伴侣，物质和精神都很富足。',
        reversed: '用金钱代替情感，在感情中过于看重物质条件。',
      },
      career: {
        upright: '事业成功的领袖，以务实和稳健著称。',
        reversed: '过于贪婪或物质主义，为了利益不择手段。',
      },
      wealth: {
        upright: '达到了财务成功和安全的顶峰，是成功的商业领袖。',
        reversed: '过度追求物质财富而忽视了其他重要的价值。',
      },
      health: {
        upright: '有资源和条件维持良好的健康状态。',
        reversed: '过于忙碌赚钱而忽视了健康，注意体重和饮食。',
      },
      general: {
        upright: '金币之王坐在硕果累累的宝座上，是物质世界的成功典范。享受你的成就。',
        reversed: '被财富和权力腐蚀，忘记了真正重要的东西。守财奴的悲哀。',
      },
    },
    description: '一位富有的国王坐在装饰着公牛雕刻的宝座上，身穿葡萄图案的长袍，右手持权杖，左手放在膝上的星币上。周围是丰饶的花园和城堡。',
    element: 'Earth',
  },
]
