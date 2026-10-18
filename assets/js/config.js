/*
 * НАСТРОЙКИ ЛЕНДИНГА — ВАРИАНТ B (репозиторий ArtroFlexIT3-B).
 * Единственное место для правки цены, условий, названий и статуса проверки данных.
 *
 * Вариант B по ТЗ «ArtroFlex Active — версия B» v1.0 (18.10.2026): без скидки, таймера,
 * остатка, отзывов и лечебных обещаний. Подробности — README.md, раздел «Вариант B».
 */
window.LANDING_CONFIG = {
  // "draft"      — жёлтая подсветка плейсхолдеров [В КВАДРАТНЫХ СКОБКАХ] и непроверенных значений.
  // "production" — без подсветки. Переключать только когда все пункты verified = true.
  mode: "draft",

  // Идентификатор варианта: уходит в журнал заявок (lead_log.landing_version) и в аналитику (track_event.lv).
  // У варианта A своё значение — "tsl-it-1.0".
  landingVersion: "artro-it-b-1",
  offerId: "208",             // тот же оффер, что у A: предложение не меняется

  // Что подтверждено документально. Пока есть хоть один false — на странице красная плашка «BOZZA — НЕ ПУБЛИКОВАТЬ».
  verified: {
    label: true,       // состав и упаковка сверены с этикеткой (18.10.2026)
    usage: true,       // применение и предупреждения — по инструкции производителя (получено 18.10.2026)
    price: true,       // 39 € за 1 упаковку — подтверждено (18.10.2026)
    shipping: false,   // price.shipping и price.extraFees заполнены
    terms: false,      // способы оплаты, сроки и география доставки, продавец (text.seller*)
    caller: true,      // звонит Geberich — подтверждено (18.10.2026); данные получает Neo Elementum OÜ
    legal: false       // privacy.html, termini.html, текст согласия в форме согласованы юристом
  },

  // Тексты, подставляемые в элементы data-t="..."
  text: {
    productName: "ArtroFlex Active",
    partnerName: "Neo Elementum OÜ",       // партнёрская сеть (Webvork), получает заявки
    callerName: "Geberich",                // звонит оператор Geberich (подтверждено)
    sellerName: "[RAGIONE SOCIALE VENDITORE]",
    sellerAddress: "[INDIRIZZO SEDE LEGALE]",
    sellerVat: "[PARTITA IVA]",
    sellerPhone: "[TELEFONO]",
    sellerEmail: "[EMAIL]",
    units: "30 capsule",
    packs: "1 confezione",
    paymentMethods: "[METODI DI PAGAMENTO CONFERMATI]",
    deliveryArea: "[ZONE DI CONSEGNA]",
    deliveryTime: "[TEMPI DI CONSEGNA]"
  },

  // Цены в евро. null — не подтверждено (на странице «€ —», «Totale» не считается).
  // Скидку и прежнюю цену 78 € не показывать без надлежащей ценовой истории (ТЗ B, п. 5).
  price: {
    old: null,
    current: 39,
    discountPercent: null,
    shipping: null,     // 0 = доставка бесплатна
    extraFees: null,    // иные обязательные платежи (напр. контрассегно); null — нет
    afterExpiry: null
  },

  offer: { personalHours: 0 },

  // В B нет утверждений из концепции: всё недостоверное удалено из HTML, а не скрыто переключателями.
  approvedClaims: {},

  form: {
    endpoint: "api/lead.php",
    timeoutMs: 40000,   // сервер пробует 2 адреса Webvork дважды
    // Обязательная галочка «прошу перезвонить» (не отмечена заранее).
    // Отключать только если юрист определил иное правовое основание (и тогда же — require_consent в api/config.php).
    requireConsent: true,
    privacyVersion: "privacy-it-b-1"
  },

  analytics: {
    metaPixelId: "973449535833462"  // пусто — пиксель не загружается
    // Без cookie-баннера: пиксель грузится сразу, как в варианте A (решение заказчика, риск по GDPR — на заказчике)
  },

  // Демо-режим: заявки не отправляются, ответ сервера имитируется. Включается автоматически
  // при открытии файла с диска (file://) или вручную здесь.
  demo: false
};
