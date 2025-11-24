
export type LanguageCode = 'id' | 'en' | 'it' | 'fr' | 'es' | 'de' | 'ja' | 'ko' | 'zh' | 'ru' | 'pt' | 'ar';

export interface TranslationData {
  name: string;
  subtitle: string;
  waiting: string;
  selectMode: string;
  consulting: string;
  start: string;
  reset: string;
  running: string;
  footer: string;
  discover: string;
  modes: {
    focus: { title: string; subtitle: string; description: string };
    create: { title: string; subtitle: string; description: string };
    review: { title: string; subtitle: string; description: string };
    rest: { title: string; subtitle: string; description: string };
  };
  phrases: string[];
}

export const translations: Record<LanguageCode, TranslationData> = {
  id: {
    name: "Bahasa Indonesia",
    subtitle: "Waktu Agenda",
    waiting: "Silakan tunggu sampai proses selesai",
    selectMode: "Pilih mode di bawah",
    consulting: "Silakan tunggu, saat ini sedang diproses",
    start: "Klik Untuk Mulai Mempromosikan",
    reset: "Klik Untuk Mulai Mempromosikan",
    running: "Sedang Berjalan...",
    footer: "Agenda Kerja Gucci",
    discover: "SELENGKAPNYA",
    modes: {
      focus: { 
        title: "FOKUS MENDALAM", 
        subtitle: "UNTUK TUJUAN",
        description: "Dalami sistem periklanan P4P eksklusif kami. Mode ini dirancang untuk memaksimalkan konsentrasi Anda dalam mengelola kampanye berkinerja tinggi. Fokus pada metrik yang penting dan biarkan algoritma Gucci bekerja untuk Anda. Setiap detik adalah peluang untuk meningkatkan komisi melalui presisi digital."
      },
      create: { 
        title: "ALIRAN KREATIF", 
        subtitle: "EKSPRESI",
        description: "Bebaskan potensi narasi visual Anda. Dalam ekosistem afiliasi Gucci, kreativitas adalah mata uang utama. Gunakan waktu ini untuk merancang konten yang memikat, membangun cerita kemewahan yang resonan, dan menghubungkan audiens elit dengan estetika abadi Gucci."
      },
      review: { 
        title: "TINJAUAN STRATEGIS", 
        subtitle: "PRESISI",
        description: "Analisis adalah kunci dominasi pasar. Tinjau kembali data kinerja kampanye Anda, identifikasi tren yang sedang berkembang, dan sesuaikan strategi promosi otomatis Anda. Ketepatan dalam membaca data akan membedakan mitra biasa dari mitra elit global kami."
      },
      rest: { 
        title: "DOLCE FAR NIENTE", 
        subtitle: "ISI ULANG",
        description: "Seni melakukan ketiadaan yang manis. Dalam dunia berkecepatan tinggi, istirahat adalah kemewahan sejati. Biarkan sistem otomatis kami terus bekerja di latar belakang menghasilkan pendapatan pasif, sementara Anda memulihkan energi untuk visi besar berikutnya."
      }
    },
    phrases: [
      "PROGRAM AFILIASI GUCCI", 
      "SISTEM IKLAN P4P", 
      "KOMISI KINERJA TINGGI", 
      "MITRA DIGITAL EKSKLUSIF", 
      "JARINGAN PEMASARAN ELIT", 
      "PENDAPATAN BERBASIS HASIL", 
      "STRATEGI IKLAN MEWAH", 
      "MONETISASI TRAFIK PREMIUM", 
      "AKSES MITRA VIP", 
      "REVOLUSI DIGITAL GUCCI",
      "BAYAR PER PERFORMA"
    ]
  },
  en: {
    name: "English",
    subtitle: "Work Agenda",
    waiting: "Please wait until the process is complete",
    selectMode: "Select a mode below",
    consulting: "Consulting the Archives...",
    start: "Click to Start Automated Promotion",
    reset: "Reset Journey",
    running: "Running...",
    footer: "Gucci Work Agenda",
    discover: "Discover Mode",
    modes: {
      focus: { 
        title: "DEEP FOCUS", 
        subtitle: "IMMERSION",
        description: "Dive into our exclusive P4P advertising system. This mode is designed to maximize your concentration in managing high-performance campaigns. Focus on the metrics that matter and let the Gucci algorithm work for you."
      },
      create: { 
        title: "CREATIVE FLOW", 
        subtitle: "EXPRESSION",
        description: "Unleash your visual narrative potential. In the Gucci affiliate ecosystem, creativity is the ultimate currency. Use this time to design captivating content and connect elite audiences with Gucci's timeless aesthetics."
      },
      review: { 
        title: "STRATEGIC REVIEW", 
        subtitle: "PRECISION",
        description: "Analysis is the key to market dominance. Review your campaign performance data, identify emerging trends, and adjust your automated promotion strategy. Precision in reading data separates ordinary partners from our global elite."
      },
      rest: { 
        title: "DOLCE FAR NIENTE", 
        subtitle: "RECHARGE",
        description: "The art of sweet doing nothing. In a high-speed world, rest is true luxury. Let our automated systems continue working in the background generating passive revenue, while you restore energy for the next grand vision."
      }
    },
    phrases: [
      "GUCCI AFFILIATE PROGRAM", 
      "P4P ADVERTISING SYSTEM", 
      "HIGH PERFORMANCE COMMISSION", 
      "EXCLUSIVE DIGITAL PARTNER", 
      "ELITE MARKETING NETWORK", 
      "RESULTS-BASED REVENUE", 
      "LUXURY AD STRATEGY", 
      "PREMIUM TRAFFIC MONETIZATION", 
      "VIP PARTNER ACCESS", 
      "GUCCI DIGITAL REVOLUTION",
      "PAY FOR PERFORMANCE"
    ]
  },
  it: {
    name: "Italiano",
    subtitle: "Agenda di Lavoro",
    waiting: "Attendere prego il completamento del processo",
    selectMode: "Seleziona una modalità qui sotto",
    consulting: "Consultazione degli Archivi...",
    start: "Avvia Promozione Automatica",
    reset: "Reimposta Viaggio",
    running: "In Esecuzione...",
    footer: "Agenda di Lavoro Gucci",
    discover: "Scopri Modalità",
    modes: {
      focus: { 
        title: "FOCUS PROFONDO", 
        subtitle: "IMMERSIONE",
        description: "Immergiti nel nostro esclusivo sistema pubblicitario P4P. Questa modalità è progettata per massimizzare la tua concentrazione nella gestione di campagne ad alte prestazioni. Lascia che l'algoritmo Gucci lavori per te."
      },
      create: { 
        title: "FLUSSO CREATIVO", 
        subtitle: "ESPRESSIONE",
        description: "Libera il tuo potenziale narrativo visivo. Nell'ecosistema di affiliazione Gucci, la creatività è la valuta definitiva. Usa questo tempo per progettare contenuti accattivanti e collegare il pubblico d'élite con l'estetica senza tempo di Gucci."
      },
      review: { 
        title: "REVISIONE STRATEGICA", 
        subtitle: "PRECISIONE",
        description: "L'analisi è la chiave per il dominio del mercato. Rivedi i dati sulle prestazioni della campagna, identifica le tendenze emergenti e adatta la tua strategia. La precisione distingue i partner ordinari dalla nostra élite globale."
      },
      rest: { 
        title: "DOLCE FAR NIENTE", 
        subtitle: "RICARICA",
        description: "L'arte del dolce far niente. In un mondo ad alta velocità, il riposo è il vero lusso. Lascia che i nostri sistemi automatizzati continuino a lavorare in background generando entrate passive, mentre recuperi energia."
      }
    },
    phrases: [
      "PROGRAMMA DI AFFILIAZIONE GUCCI", 
      "SISTEMA PUBBLICITARIO P4P", 
      "COMMISSIONI AD ALTE PRESTAZIONI", 
      "PARTNER DIGITALE ESCLUSIVO", 
      "RETE DI MARKETING D'ÉLITE", 
      "ENTRATE BASATE SUI RISULTATI", 
      "STRATEGIA PUBBLICITARIA DI LUSSO", 
      "MONETIZZAZIONE DEL TRAFFICO PREMIUM", 
      "ACCESSO PARTNER VIP", 
      "RIVOLUZIONE DIGITALE GUCCI"
    ]
  },
  fr: {
    name: "Français",
    subtitle: "Agenda de Travail",
    waiting: "Veuillez attendre la fin du processus",
    selectMode: "Sélectionnez un mode ci-dessous",
    consulting: "Consultation des Archives...",
    start: "Lancer la Promotion Auto",
    reset: "Réinitialiser le Voyage",
    running: "En Cours...",
    footer: "Agenda de Travail Gucci",
    discover: "Mode Découverte",
    modes: {
      focus: { title: "CONCENTRATION PROFONDE", subtitle: "IMMERSION", description: "Plongez dans notre système publicitaire P4P exclusif. Maximisez votre concentration sur la gestion de campagnes haute performance." },
      create: { title: "FLUX CRÉATIF", subtitle: "EXPRESSION", description: "Libérez votre potentiel narratif visuel. La créativité est la monnaie ultime de l'écosystème Gucci." },
      review: { title: "REVUE STRATÉGIQUE", subtitle: "PRÉCISION", description: "L'analyse est la clé de la domination du marché. Révisez vos données et ajustez votre stratégie." },
      rest: { title: "DOLCE FAR NIENTE", subtitle: "RECHARGE", description: "L'art de la douce oisiveté. Laissez nos systèmes automatisés générer des revenus passifs pendant que vous vous reposez." }
    },
    phrases: [
      "PROGRAMME D'AFFILIATION GUCCI", 
      "SYSTÈME PUBLICITAIRE P4P", 
      "COMMISSIONS HAUTE PERFORMANCE", 
      "PARTENAIRE NUMÉRIQUE EXCLUSIF", 
      "RÉSEAU MARKETING D'ÉLITE", 
      "REVENUS BASÉS SUR LES RÉSULTATS", 
      "STRATÉGIE PUBLICITAIRE DE LUXE", 
      "MONÉTISATION DU TRAFIC PREMIUM", 
      "ACCÈS PARTENAIRE VIP", 
      "RÉVOLUTION NUMÉRIQUE GUCCI"
    ]
  },
  es: {
    name: "Español",
    subtitle: "Agenda de Trabajo",
    waiting: "Por favor espere hasta que el proceso termine",
    selectMode: "Seleccione un modo abajo",
    consulting: "Consultando los Archivos...",
    start: "Iniciar Promoción Automática",
    reset: "Reiniciar Viaje",
    running: "Corriendo...",
    footer: "Agenda de Trabajo Gucci",
    discover: "Modo Descubrir",
    modes: {
      focus: { title: "ENFOQUE PROFUNDO", subtitle: "INMERSIÓN", description: "Sumérjase en nuestro exclusivo sistema de publicidad P4P. Maximice su concentración en campañas de alto rendimiento." },
      create: { title: "FLUJO CREATIVO", subtitle: "EXPRESIÓN", description: "Desate su potencial narrativo visual. La creatividad es la moneda definitiva en el ecosistema Gucci." },
      review: { title: "REVISIÓN ESTRATÉGICA", subtitle: "PRECISIÓN", description: "El análisis es la clave del dominio del mercado. Revise sus datos y ajuste su estrategia." },
      rest: { title: "DOLCE FAR NIENTE", subtitle: "RECARGA", description: "El arte del dulce no hacer nada. Deje que nuestros sistemas automatizados generen ingresos pasivos mientras descansa." }
    },
    phrases: [
      "PROGRAMA DE AFILIADOS GUCCI", 
      "SISTEMA DE PUBLICIDAD P4P", 
      "COMISIONES DE ALTO RENDIMIENTO", 
      "SOCIO DIGITAL EXCLUSIVO", 
      "RED DE MARKETING DE ÉLITE", 
      "INGRESOS BASADOS EN RESULTADOS", 
      "ESTRATEGIA PUBLICITARIA DE LUJO", 
      "MONETIZACIÓN DE TRÁFICO PREMIUM", 
      "ACCESO DE SOCIO VIP", 
      "REVOLUCIÓN DIGITAL GUCCI"
    ]
  },
  de: {
    name: "Deutsch",
    subtitle: "Arbeitsagenda",
    waiting: "Bitte warten Sie, bis der Vorgang abgeschlossen ist",
    selectMode: "Wählen Sie unten einen Modus",
    consulting: "Konsultiere die Archive...",
    start: "Automatische Werbung Starten",
    reset: "Reise Zurücksetzen",
    running: "Läuft...",
    footer: "Gucci Arbeitsagenda",
    discover: "Entdeckungsmodus",
    modes: {
      focus: { title: "TIEFER FOKUS", subtitle: "IMMERSION", description: "Tauchen Sie ein in unser exklusives P4P-Werbesystem. Maximieren Sie Ihre Konzentration auf Hochleistungskampagnen." },
      create: { title: "KREATIVER FLUSS", subtitle: "AUSDRUCK", description: "Entfesseln Sie Ihr visuelles Erzählpotenzial. Kreativität ist die ultimative Währung im Gucci-Ökosystem." },
      review: { title: "STRATEGIC ÜBERPRÜFUNG", subtitle: "PRÄZISION", description: "Analyse ist der Schlüssel zur Marktbeherrschung. Überprüfen Sie Ihre Daten und passen Sie Ihre Strategie an." },
      rest: { title: "DOLCE FAR NIENTE", subtitle: "AUFLADEN", description: "Die Kunst des süßen Nichtstuns. Lassen Sie unsere automatisierten Systeme passives Einkommen generieren, während Sie ruhen." }
    },
    phrases: [
      "GUCCI PARTNERPROGRAMM", 
      "P4P WERBESYSTEM", 
      "HOCHLEISTUNGSPROVISION", 
      "EXKLUSIVER DIGITALER PARTNER", 
      "ELITE MARKETING NETZWERK", 
      "ERGEBNISORIENTIERTE EINNAHMEN", 
      "LUXUS WERBESTRATEGIE", 
      "PREMIUM TRAFFIC MONETARISIERUNG", 
      "VIP PARTNER ZUGANG", 
      "DIGITALE REVOLUTION"
    ]
  },
  ja: {
    name: "日本語",
    subtitle: "ワークアジェンダ",
    waiting: "処理が完了するまでお待ちください",
    selectMode: "以下のモードを選択してください",
    consulting: "アーカイブを参照中...",
    start: "自動プロモーションを開始",
    reset: "旅をリセット",
    running: "実行中...",
    footer: "グッチ ワークアジェンダ",
    discover: "発見モード",
    modes: {
      focus: { title: "深い集中", subtitle: "没入", description: "独自のP4P広告システムに没頭してください。高パフォーマンスなキャンペーン管理に集中力を最大化します。" },
      create: { title: "創造的フロー", subtitle: "表現", description: "視覚的な物語の可能性を解き放ちます。Gucciのエコシステムでは、創造性が究極の通貨です。" },
      review: { title: "戦略的レビュー", subtitle: "精度", description: "分析は市場支配の鍵です。データをレビューし、戦略を調整してください。" },
      rest: { title: "ドルチェ・ファ・ニエンテ", subtitle: "充電", description: "何もしないことの甘美な芸術。自動システムが受動的収益を生み出している間、休息してください。" }
    },
    phrases: [
      "GUCCI アフィリエイトプログラム", 
      "P4P 広告システム", 
      "高パフォーマンス報酬", 
      "独占デジタルパートナー", 
      "エリートマーケティングネットワーク", 
      "成果報酬型収益", 
      "ラグジュアリー広告戦略", 
      "プレミアムトラフィック収益化", 
      "VIPパートナーアクセス", 
      "GUCCI デジタル革命"
    ]
  },
  ko: {
    name: "한국어",
    subtitle: "업무 일정",
    waiting: "프로세스가 완료될 때까지 기다려 주세요",
    selectMode: "아래에서 모드를 선택하세요",
    consulting: "아카이브 상담 중...",
    start: "자동 프로모션 시작",
    reset: "여정 재설정",
    running: "실행 중...",
    footer: "구찌 업무 일정",
    discover: "발견 모드",
    modes: {
      focus: { title: "깊은 집중", subtitle: "몰입", description: "독점 P4P 광고 시스템에 빠져보세요. 고성능 캠페인 관리에 집중력을 극대화하도록 설계되었습니다." },
      create: { title: "창의적 흐름", subtitle: "표현", description: "시각적 서사 잠재력을 발휘하세요. 구찌 생태계에서 창의성은 궁극의 통화입니다." },
      review: { title: "전략적 검토", subtitle: "정밀", description: "분석은 시장 지배의 핵심입니다. 데이터를 검토하고 전략을 조정하세요." },
      rest: { title: "돌체 파 니엔테", subtitle: "충전", description: "아무것도 하지 않는 즐거움의 예술. 자동화 시스템이 수익을 창출하는 동안 휴식을 취하세요." }
    },
    phrases: [
      "GUCCI 제휴 프로그램", 
      "P4P 광고 시스템", 
      "고성능 수수료", 
      "독점 디지털 파트너", 
      "엘리트 마케팅 네트워크", 
      "성과 기반 수익", 
      "럭셔리 광고 전략", 
      "프리미엄 트래픽 수익화", 
      "VIP 파트너 액세스", 
      "GUCCI 디지털 혁명"
    ]
  },
  zh: {
    name: "中文",
    subtitle: "工作议程",
    waiting: "请等待过程完成",
    selectMode: "请在下方选择一种模式",
    consulting: "正在查阅档案...",
    start: "开始自动推广",
    reset: "重置旅程",
    running: "运行中...",
    footer: "古驰工作议程",
    discover: "探索模式",
    modes: {
      focus: { title: "深度聚焦", subtitle: "沉浸", description: "深入我们的独家 P4P 广告系统。此模式旨在最大限度地提高您管理高性能活动的专注力。" },
      create: { title: "创意心流", subtitle: "表达", description: "释放您的视觉叙事潜力。在 Gucci 生态系统中，创造力是终极货币。" },
      review: { title: "战略回顾", subtitle: "精准", description: "分析是市场主导的关键。回顾您的数据并调整您的策略。" },
      rest: { title: "无所事事的甜蜜", subtitle: "充电", description: "无所事事的甜蜜艺术。让我们的自动化系统在您休息时产生被动收入。" }
    },
    phrases: [
      "GUCCI 联盟计划", 
      "P4P 广告系统", 
      "高性能佣金", 
      "独家数字合作伙伴", 
      "精英营销网络", 
      "基于结果的收入", 
      "奢华广告策略", 
      "优质流量变现", 
      "VIP 合作伙伴访问", 
      "GUCCI 数字革命"
    ]
  },
  ru: {
    name: "Русский",
    subtitle: "Рабочая Повестка",
    waiting: "Пожалуйста, подождите завершения процесса",
    selectMode: "Выберите режим ниже",
    consulting: "Обращение к Архивам...",
    start: "Запустить Авто-Продвижение",
    reset: "Сбросить Путешествие",
    running: "Выполняется...",
    footer: "Рабочая Повестка Gucci",
    discover: "Режим Открытий",
    modes: {
      focus: { title: "ГЛУБОКИЙ ФОКУС", subtitle: "ПОГРУЖЕНИЕ", description: "Погрузитесь в нашу эксклюзивную рекламную систему P4P. Максимизируйте концентрацию на управлении высокоэффективными кампаниями." },
      create: { title: "ТВОРЧЕСКИЙ ПОТОК", subtitle: "ВЫРАЖЕНИЕ", description: "Раскройте свой потенциал визуального повествования. В экосистеме Gucci креативность — это главная валюта." },
      review: { title: "СТРАТЕГИЧЕСКИЙ ОБЗОР", subtitle: "ТОЧНОСТЬ", description: "Анализ — ключ к доминированию на рынке. Просматривайте данные и корректируйте стратегию." },
      rest: { title: "DOLCE FAR NIENTE", subtitle: "ПЕРЕЗАРЯДКА", description: "Искусство сладкого ничегонеделания. Позвольте нашим автоматизированным системам генерировать доход, пока вы отдыхаете." }
    },
    phrases: [
      "ПАРТНЕРСКАЯ ПРОГРАММА GUCCI", 
      "РЕКЛАМНАЯ СИСТЕМА P4P", 
      "ВЫСОКОЭФФЕКТИВНАЯ КОМИССИЯ", 
      "ЭКСКЛЮЗИВНЫЙ ЦИФРОВОЙ ПАРТНЕР", 
      "ЭЛИТНАЯ МАРКЕТИНГОВАЯ СЕТЬ", 
      "ДОХОД НА ОСНОВЕ РЕЗУЛЬТАТОВ", 
      "СТРАТЕГИЯ РОСКОШНОЙ РЕКЛАМЫ", 
      "МОНЕТИЗАЦИЯ ПРЕМИУМ-ТРАФИКА", 
      "VIP ДОСТУП ПАРТНЕРА", 
      "ЦИФРОВАЯ РЕВОЛЮЦИЯ GUCCI"
    ]
  },
  pt: {
    name: "Português",
    subtitle: "Agenda de Trabalho",
    waiting: "Por favor, aguarde até que o processo seja concluído",
    selectMode: "Selecione um modo abaixo",
    consulting: "Consultando os Arquivos...",
    start: "Iniciar Promoção Automática",
    reset: "Reiniciar Jornada",
    running: "Em Execução...",
    footer: "Agenda de Trabalho Gucci",
    discover: "Modo Descoberta",
    modes: {
      focus: { title: "FOCO PROFUNDO", subtitle: "IMERSÃO", description: "Mergulhe em nosso sistema de publicidade P4P exclusivo. Maximize sua concentração em campanhas de alta performance." },
      create: { title: "FLUXO CRIATIVO", subtitle: "EXPRESSÃO", description: "Liberte seu potencial narrativo visual. No ecossistema Gucci, a criatividade é a moeda definitiva." },
      review: { title: "REVISÃO ESTRATÉGICA", subtitle: "PRECISÃO", description: "A análise é a chave para o domínio do mercado. Revise seus dados e ajuste sua estratégia." },
      rest: { title: "DOLCE FAR NIENTE", subtitle: "RECARGA", description: "A arte do doce far niente. Deixe nossos sistemas automatizados gerarem receita passiva enquanto você descansa." }
    },
    phrases: [
      "PROGRAMA DE AFILIADOS GUCCI", 
      "SISTEMA DE PUBLICIDADE P4P", 
      "COMISSÃO DE ALTA PERFORMANCE", 
      "PARCEIRO DIGITAL EXCLUSIVO", 
      "REDE DE MARKETING DE ELITE", 
      "RECEITA BASEADA EM RESULTADOS", 
      "ESTRATÉGIA DE ANÚNCIOS DE LUXO", 
      "MONETIZAÇÃO DE TRÁFEGO PREMIUM", 
      "ACESSO DE PARCEIRO VIP", 
      "REVOLUÇÃO DIGITAL GUCCI"
    ]
  },
  ar: {
    name: "العربية",
    subtitle: "جدول الأعمال",
    waiting: "يرجى الانتظار حتى تكتمل العملية",
    selectMode: "اختر وضعاً أدناه",
    consulting: "جارٍ استشارة الأرشيف...",
    start: "بدء الترويج الآلي",
    reset: "إعادة تعيين الرحلة",
    running: "جارٍ التشغيل...",
    footer: "جدول أعمال غوتشي",
    discover: "وضع الاكتشاف",
    modes: {
      focus: { title: "تركيز عميق", subtitle: "انغماس", description: "انغمس في نظام إعلانات P4P الحصري لدينا. قم بزيادة تركيزك في إدارة الحملات عالية الأداء." },
      create: { title: "تدفق إبداعي", subtitle: "تعبير", description: "أطلق العنان لإمكاناتك السردية المرئية. الإبداع هو العملة النهائية في نظام غوتشي." },
      review: { title: "مراجعة استراتيجية", subtitle: "دقة", description: "التحليل هو مفتاح الهيمنة على السوق. راجع بياناتك وعدل استراتيجيتك." },
      rest: { title: "دولتشي فار نينتي", subtitle: "شحن", description: "فن الاستمتاع بعدم فعل شيء. دع أنظمتنا الآلية تولد دخلاً سلبياً بينما ترتاح." }
    },
    phrases: [
      "برنامج غوتشي للتسويق بالعمولة", 
      "نظام إعلانات الدفع مقابل الأداء (P4P)", 
      "عمولة عالية الأداء", 
      "شريك رقمي حصري", 
      "شبكة تسويق النخبة", 
      "إيرادات قائمة على النتائج", 
      "استراتيجية إعلانات فاخرة", 
      "تحقيق الدخل من الزيارات المتميزة", 
      "وصول شركاء VIP", 
      "ثورة غوتشي الرقمية"
    ]
  }
};
