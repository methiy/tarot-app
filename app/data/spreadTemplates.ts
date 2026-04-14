export interface SpreadTemplate {
  pattern: string
  opening: string
  transition: string
  conclusion: string
}

export const spreadTemplates: SpreadTemplate[] = [
  {
    pattern: 'upright-upright-upright',
    opening: '命运之轮正向你微笑，过去种下的善因正在开花结果。你过往的努力和正确的选择为你铺就了一条光明之路，',
    transition: '当下的能量顺畅流动，宇宙的祝福正在降临于你。现在正是乘风破浪的最佳时机，你所走的方向完全正确，',
    conclusion: '未来一片光明，继续保持当下的信念和行动。星辰为你排列出最美的图案，勇敢前行，丰盛和喜悦将如约而至。',
  },
  {
    pattern: 'upright-upright-reversed',
    opening: '过去的积累为你打下了坚实的基础，你的努力和付出没有白费。正向的能量一直在推动着你前进，',
    transition: '当下的局势对你有利，但需要注意一些潜在的暗流。享受此刻的顺遂，同时保持清醒的头脑，',
    conclusion: '未来可能遇到一些阻碍或需要调整方向。这并非终点，而是宇宙在提醒你做好准备，灵活应对即将到来的挑战，方能化险为夷。',
  },
  {
    pattern: 'upright-reversed-upright',
    opening: '过去的经历给予了你宝贵的智慧和力量，这些积累将成为你度过当下考验的基石，',
    transition: '当下你正面临一些内在或外在的挑战，迷雾暂时遮挡了前路。不必惊慌，这是蜕变必经的黑夜，',
    conclusion: '黎明就在前方，未来的前景令人欣喜。当你穿越当下的困境，等待你的将是更加广阔的天地。坚持住，光明终将到来。',
  },
  {
    pattern: 'reversed-upright-upright',
    opening: '过去的某些经历可能留下了遗憾或伤痛，但那些都是成长的养分。不要再回头凝望那些已经过去的阴影，',
    transition: '当下你已经找到了正确的方向，能量在好转。此刻正是放下过去、拥抱当下的最佳时机，你的觉醒和改变正在发生，',
    conclusion: '未来充满了美好的期许。过去的阴霾终将散去，你正走向一个更加璀璨的明天。前方的路上布满了星光与祝福。',
  },
  {
    pattern: 'reversed-reversed-upright',
    opening: '过去的困境和挫折似乎还在影响着你，那些未愈合的伤口需要被温柔地对待，',
    transition: '当下依然处于调整和蜕变的过程中，你可能感到迷茫或无力。但请相信，黑暗中的挣扎正是破茧前的必经之路，',
    conclusion: '未来的曙光已经出现在地平线上。所有的苦难都将化为你重生的力量，最终的结果将超出你的期待。坚持到底，黎明即将破晓。',
  },
  {
    pattern: 'upright-reversed-reversed',
    opening: '你有着良好的起点和基础，过去的正面经历赋予了你面对挑战的勇气和智慧，',
    transition: '然而当下和近期的道路上布满了荆棘和迷雾。外在的阻力和内心的动摇都在考验着你的意志，',
    conclusion: '虽然前路充满挑战，但这并非惩罚而是磨炼。宇宙在邀请你深入内在，重新校准方向。保持初心，在困境中寻找转机，逆流而上方显真金本色。',
  },
  {
    pattern: 'reversed-upright-reversed',
    opening: '过去的某些阴影仍在影响着你的脚步，未解决的课题需要被正视和面对，',
    transition: '当下你获得了短暂的喘息和清明，这是宇宙赐予的窗口期。抓住这个清醒的时刻，审视自己的内心和方向，',
    conclusion: '未来仍有波折需要应对，但你已经获得了宝贵的洞察。带着当下的觉悟前行，即使再次遇到挑战，你也不再是从前的自己了。',
  },
  {
    pattern: 'reversed-reversed-reversed',
    opening: '你正在经历一段深刻的灵魂暗夜，过去的积累似乎都被推翻，一切回到了原点，',
    transition: '当下的困境是对你最深层信念的考验。迷雾重重，方向不明，你可能感到前所未有的迷失和无力，',
    conclusion: '但请记住——至暗时刻往往是黎明前的最后黑暗。当一切都被打碎，正是重建的最好时机。在废墟中寻找那颗不灭的火种，它将照亮你全新的人生之路。涅槃重生，从这里开始。',
  },
]
