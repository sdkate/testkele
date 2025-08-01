const texts = {
  zh: {
    title: "🌟 趣味探索角",
    lines: [
      "如果你最近想找点轻松又有趣的内容，这里或许刚好合适。",
      "📦 多个互动场景，自由体验，有时还能收获小惊喜。",
      "🧩 操作简单、节奏轻快，适合轻松参与。",
      "🧭 功能优化流畅，适合喜欢效率的朋友。"
    ],
    btn: "🚀 开启今日小惊喜",
    loading: "加载中..."
  },
  "zh-HK": {
    title: "🌟 舒壓探索角",
    lines: [
      "如果你最近想找點輕鬆又有趣的內容，這裡或許正合適。",
      "📦 多個互動場景，自由體驗，有時還會有小驚喜。",
      "🧩 操作簡單、節奏輕快，非常適合輕鬆參與。",
      "🧭 功能優化流暢，適合喜歡效率的朋友。"
    ],
    btn: "🚀 開啟今日小驚喜",
    loading: "載入中..."
  },
  en: {
    title: "🌟 Explore Corner",
    lines: [
      "Looking for something fun and light? This might be a perfect fit.",
      "📦 Multiple interactive scenes, freely explore, surprises await.",
      "🧩 Easy to use, fast pace, perfect for casual discovery.",
      "🧭 Smooth experience optimized for comfort seekers."
    ],
    btn: "🚀 Discover Today's Surprise",
    loading: "Loading..."
  },
  vi: {
    title: "🌟 Góc khám phá mỗi ngày",
    lines: [
      "Nếu bạn muốn tìm gì đó nhẹ nhàng và thú vị để giải trí, thì đây có thể là sự lựa chọn.",
      "📦 Có nhiều tình huống tương tác, bạn tự do khám phá, có thể nhận bất ngờ.",
      "🧩 Dễ sử dụng, nhịp độ nhanh, rất phù hợp cho sự tham gia nhẹ nhàng.",
      "🧭 Một số tính năng được tối ưu để trải nghiệm mượt mà hơn."
    ],
    btn: "🚀 Khám phá niềm vui hôm nay",
    loading: "Đang tải..."
  },
  id: {
    title: "🌟 Sudut Eksplorasi Harian",
    lines: [
      "Jika kamu ingin sesuatu yang ringan dan menyenangkan, ini mungkin cocok.",
      "📦 Menyediakan berbagai skenario interaktif, eksplorasi bebas, kejutan sesekali.",
      "🧩 Mudah digunakan, cepat, cocok untuk ikut santai.",
      "🧭 Beberapa fitur dioptimalkan agar pengalaman lebih lancar."
    ],
    btn: "🚀 Temukan Kejutan Hari Ini",
    loading: "Memuat..."
  },
  ja: {
    title: "🌟 デイリーリラックス・探索コーナー",
    lines: [
      "ゆったり楽しめる軽いコンテンツを探しているなら、ここがちょうどいいかも。",
      "📦 さまざまなインタラクティブシーンを含み、自由に体験でき、時には驚きも。",
      "🧩 操作は簡単、テンポは軽快、カジュアル参加にぴったり。",
      "🧭 スムーズな体験のために一部機能を最適化しています。"
    ],
    btn: "🚀 今日のサプライズを見る",
    loading: "読み込み中..."
  },
  ko: {
    title: "🌟 매일 힐링 · 탐색 코너",
    lines: [
      "가볍고 재미있는 콘텐츠를 찾고 있다면, 여기가 딱일 수 있어요.",
      "📦 다양한 인터랙티브 장면이 포함되어 있어 자유롭게 체험할 수 있으며, 때로는 깜짝 놀람도.",
      "🧩 사용이 간편하고 템포가 빠르며 캐주얼 참여에 적합합니다.",
      "🧭 일부 기능은 부드러운 경험을 위해 최적화되어 있습니다."
    ],
    btn: "🚀 오늘의 깜짝을 확인",
    loading: "로딩 중..."
  },
  pt: {
    title: "🌟 Descoberta Diária • Cantinho",
    lines: [
      "Procurando algo leve e divertido para passar o tempo? Isso pode ser ideal.",
      "📦 Inclui várias cenas interativas, explore livremente, com surpresas ocasionais.",
      "🧩 Fácil de usar, ritmo rápido, perfeito para participação casual.",
      "🧭 Alguns recursos otimizados para experiência suave e eficiente."
    ],
    btn: "🚀 Descubra a surpresa de hoje",
    loading: "Carregando..."
  },
  hi: {
    title: "🌟 दैनिक आराम • एक्सप्लोर कोना",
    lines: [
      "अगर आप कुछ हल्का-फुल्का और मज़ेदार ढूंढ रहे हैं, तो यह जगह सही हो सकती है।",
      "📦 इसमें कई इंटरएक्टिव सीन हैं, अपनी गति से एक्सप्लोर करें, कभी-कभी छोटा सरप्राइज भी मिलता है।",
      "🧩 इस्तेमाल में आसान, तेज़ लय, आरामदायक भागीदारी के लिए उपयुक्त।",
      "🧭 कुछ फीचर्स स्मूथ अनुभव के लिए ऑप्टिमाइज़ किए गए हैं।"
    ],
    btn: "🚀 आज की सरप्राइज खोलें",
    loading: "लोड हो रहा है..."
  },
  ar: {
    title: "🌟 زاوية الاستكشاف اليومية",
    lines: [
      "إن كنت تبحث عن شيء بسيط وممتع لتمضية الوقت، فقد يكون هذا المكان مناسباً.",
      "📦 يحتوي على عدة مشاهد تفاعلية، استكشف بحرية، وأحياناً تجد مفاجآت.",
      "🧩 سهل الاستخدام وسريع الإيقاع، مناسب للمشاركة الخفيفة.",
      "🧭 بعض الميزات مُحسّنة لتجربة سلسة."
    ],
    btn: "🚀 اكتشف مفاجأة اليوم",
    loading: "جارٍ التحميل..."
  }
};
