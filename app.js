(() => {
  // Edit this object for names, dates, images, events, gallery and bank details.
  const WEDDING_CONFIG = {
    themeStorageKey: "wedding-theme",
    // Paste the deployed Apps Script Web App URL ending in /exec here.
    inviteApiUrl: "https://script.google.com/macros/s/AKfycbxM7zLUDR_AsjkIt-UVIfATmPt6TtP1hLFYzFSZXZCqOu9_HyGI1rrjxtVvG_OXXmmDoQ/exec",
    inviteCachePrefix: "wedding-invite:",
    inviteCacheTtlMs: 3600000,
    // Apps Script can take several seconds to wake up on a first mobile visit.
    inviteRequestTimeoutMs: 12000,
    inviteOpeningDelayMs: 3000,
    rsvpStorageKey: "wedding-rsvp",
    guestbookStorageKey: "wedding-guestbook",
    guestbookInitialBatchSize: 3,
    guestbookBatchSize: 3,
    guestbookSamples: [
      {
        name: "Anh Minh & Chị Lan",
        message: "Chúc hai em trăm năm hạnh phúc, luôn yêu thương và đồng hành cùng nhau trên mọi chặng đường.",
        createdAt: "2026-09-22T19:30:00+07:00",
      },
      {
        name: "Thu Hà",
        message: "Chúc mừng hạnh phúc của hai bạn! Mong ngày vui sẽ thật trọn vẹn và ngập tràn tiếng cười.",
        createdAt: "2026-09-20T09:15:00+07:00",
      },
      {
        name: "Nhóm bạn đại học",
        message: "Chúc cho hành trình mới của Hà và Đức luôn bình yên, ấm áp và đầy ắp yêu thương.",
        createdAt: "2026-09-18T14:45:00+07:00",
      },
      {
        name: "Gia đình cô Mai",
        message: "Chúc hai con có một ngày cưới thật đẹp và một mái ấm luôn ngập tràn niềm vui.",
        createdAt: "2026-09-16T20:10:00+07:00",
      },
      {
        name: "Quang Huy",
        message: "Mừng cho hai bạn đã tìm thấy nhau. Chúc tình yêu luôn là điều dịu dàng nhất mỗi ngày.",
        createdAt: "2026-09-14T11:20:00+07:00",
      },
    ],
    dateLabel: "04.10.2026",
    weddingDateTime: "2026-10-04T15:00:00+07:00",
    locationLabel: "03–04 tháng 10 năm 2026 · Hà Nội",
    defaultGuest: "bạn thân mến",
    defaultHeroMessage: "Hẹn gặp bạn trong ngày vui",
    eveningHeroMessage: "Tiệc cưới buổi tối",
    galleryInitialBatchSize: 6,
    galleryBatchSize: 6,
    footerMessage: "Thank you for being part of our story · 04.10.2026",
    couples: {
      bride: {
        initials: "H & Đ",
        firstName: "Hồng Hà",
        secondName: "Hồng Đức",
        signature: "Hà & Đức",
        title: "Hồng Hà & Hồng Đức | Thiệp cưới",
        venueSide: "nhà gái",
      },
      groom: {
        initials: "Đ & H",
        firstName: "Hồng Đức",
        secondName: "Hồng Hà",
        signature: "Đức & Hà",
        title: "Hồng Đức & Hồng Hà | Thiệp cưới",
        venueSide: "nhà trai",
      },
    },
    images: {
      hero: {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=85",
        alt: "Không gian tiệc cưới",
      },
      story: {
        src: "./img/KR_01.png",
        alt: "Cặp đôi trong ngày cưới",
      },
      venue: {
        src: "./img/TG_01.jpeg",
        alt: "Không gian tổ chức tiệc cưới",
      },
    },
    storyIntro:
      "Có những cuộc gặp gỡ bắt đầu rất nhẹ nhàng, rồi lớn lên thành một điều không thể thiếu. Cảm ơn vì đã bước vào cuộc đời nhau đúng lúc.",
    storyItems: [
      [
        "23/1/2024",
        "Lần đầu gặp gỡ",
        "Một buổi gặp mặt tình cờ, chúng mình bắt đầu một câu chuyện chưa có hồi kết.",
      ],
      [
        "2024–2026",
        "Hành trình cùng nhau",
        "Có cả nước mắt lẫn tiếng cười, và giữa tất cả những điều đó, chúng mình vẫn chọn nhau mỗi ngày.",
      ],
      [
        "11/9/2026",
        "Lời cầu hôn",
        "Chẳng có gì hoành tráng, chỉ là một câu hỏi mà cả hai đã biết câu trả lời từ lâu.",
      ],
      [
        "4/10/2026",
        "Về chung một nhà",
        "Chúng mình chính thức bước vào một chương mới của cuộc đời.",
      ],
    ],
    events: [
      [
        "01",
        "Lễ ăn hỏi",
        "08:30 · 03.10.2026",
        "Nghi lễ ấm cúng của hai gia đình",
      ],
      [
        "02",
        "Tiệc cưới",
        "17:00 · 03.10.2026",
        "Tiệc cưới buổi tối tại {venueSide}",
      ],
      [
        "03",
        "Lễ Vu Quy & Lễ thành hôn",
        "13:00-15:00 · 04.10.2026",
        "Nghi lễ truyền thống của hai gia đình, trao nhẫn và lời thề ước",
      ],
    ],
    gallery: [
      ["Khoảnh khắc cùng nhau", "img/JLT_1539.jpg"],
      ["Ánh nhìn yêu thương", "img/JLT_1597.jpg"],
      ["Nụ cười ngày cưới", "img/JLT_1674.jpg"],
      ["Cô dâu và chú rể", "img/JLT_1676.jpg"],
      ["Bó hoa hạnh phúc", "img/JLT_1694.jpg"],
      ["Khoảnh khắc dịu dàng", "img/JLT_1868.jpg"],
      ["Cùng nhau bước tới", "img/JLT_1931.jpg"],
      ["Lời hứa trăm năm", "img/JLT_1955.jpg"],
      ["Ngày vui của chúng mình", "img/JLT_1986.jpg"],
      ["Sắc đỏ ngày hỷ", "img/JLT_2035.jpg"],
      ["Nét truyền thống", "img/JLT_2115.jpg"],
      ["Cặp đôi trong sắc đỏ", "img/JLT_2141.jpg"],
      ["Một ngày thật đẹp", "img/JLT_2166.jpg"],
      ["Khoảnh khắc bên hoa", "img/JLT_2195.jpg"],
      ["Chuyện tình chúng mình", "img/JLT_2204.jpg"],
      ["Mùa hoa cưới", "img/JLT_2311.jpg"],
      ["Bình yên bên nhau", "img/JLT_2404.jpg"],
      ["Hạnh phúc đong đầy", "img/JLT_2457.jpg"],
      ["Nơi tình yêu nở hoa", "img/JLT_2494.jpg"],
      ["Một đời có nhau", "img/JLT_2526.jpg"],
    ],
    venue: {
      groom: {
        title: "Nhà văn hoá thôn Cả",
        address: ["Nhà văn hoá thôn Cả, Xuân Kỳ, Sóc Sơn, Hà Nội"],
        mapUrl: "https://maps.app.goo.gl/J6sCKMSZ8Daxk7XB7",
        embedUrl:
          "https://www.google.com/maps?q=Nh%C3%A0%20v%C4%83n%20ho%C3%A1%20th%C3%B4n%20C%E1%BA%A3%2C%20Xu%C3%A2n%20K%E1%BB%B3%2C%20S%C3%B3c%20S%C6%A1n%2C%20H%C3%A0%20N%E1%BB%99i&z=16&output=embed",
      },
      bride: {
        title: "Tư gia nhà gái",
        address: ["Nhà số 01, ngõ Đồng Tâm, Phù Lỗ, Sóc Sơn, Hà Nội"],
        mapUrl: "https://maps.app.goo.gl/Y1Ep92neW4TWYMMB7",
        embedUrl:
          "https://www.google.com/maps?q=21.196063,105.849894&z=17&output=embed",
      },
    },
    gifts: [
      {
        side: "groom",
        label: "Mừng hỷ chú rể",
        bank: "MBBank",
        owner: "NGUYEN HONG DUC",
        account: "001202026509",
        qr: "img/MC_RE.jpeg",
      },
      {
        side: "bride",
        label: "Mừng hỷ cô dâu",
        bank: "Techcombank",
        owner: "DOAN THI HONG HA",
        account: "19038038101011",
        qr: "img/MC_DAU.jpeg",
      },
    ],
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));
  const text = (value) => document.createTextNode(value);

  const createElement = (tagName, options = {}, children = []) => {
    const element = document.createElement(tagName);
    Object.entries(options).forEach(([key, value]) => {
      if (key === "className") element.className = value;
      if (key === "textContent") element.textContent = value;
      if (key === "attributes")
        Object.entries(value).forEach(([name, attribute]) =>
          element.setAttribute(name, attribute),
        );
    });
    element.append(...children);
    return element;
  };

  const setText = (selector, value) => {
    $(selector).textContent = value;
  };

  const setImage = (selector, image) => {
    const element = $(selector);
    element.src = image.src;
    element.alt = image.alt;
  };

  const safeStorage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* The page still works without persistent preferences. */
      }
    },
  };

  const decodeInvite = (encodedInvite) => {
    if (!encodedInvite) return "";
    try {
      const base64 = encodedInvite
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .replace(/ /g, "+");
      const paddedBase64 = base64.padEnd(
        base64.length + ((4 - (base64.length % 4)) % 4),
        "=",
      );
      const bytes = Uint8Array.from(atob(paddedBase64), (character) =>
        character.charCodeAt(0),
      );
      return new TextDecoder().decode(bytes);
    } catch {
      return "";
    }
  };

  const getInvitationContext = () => {
    const urlParams = new URLSearchParams(location.search);
    const params = new URLSearchParams(decodeInvite(urlParams.get("invite")));
    const side = params.get("side") === "bride" ? "bride" : "groom";
    return {
      side,
      couple: WEDDING_CONFIG.couples[side],
      guest: params.get("to")?.trim(),
      invitationMessage: params.get("message")?.trim(),
      isEveningSlot: params.get("slot") === "evening",
    };
  };

  const requestInviteData = (invite) =>
    new Promise((resolve) => {
      const callbackName = `weddingInvite${Date.now()}`;
      const script = document.createElement("script");
      const separator = WEDDING_CONFIG.inviteApiUrl.includes("?") ? "&" : "?";
      let timeoutId;

      const cleanup = (data = { ok: false }) => {
        window.clearTimeout(timeoutId);
        script.remove();
        delete window[callbackName];
        resolve(data);
      };

      window[callbackName] = (data) => cleanup(data);
      script.onerror = () => cleanup();
      script.src = `${WEDDING_CONFIG.inviteApiUrl}${separator}invite=${encodeURIComponent(invite)}&callback=${callbackName}`;
      document.head.append(script);
      timeoutId = window.setTimeout(
        cleanup,
        WEDDING_CONFIG.inviteRequestTimeoutMs,
      );
    });

  const contextFromInviteData = (data) => {
    const side = data.side === "bride" ? "bride" : "groom";
    return {
      side,
      couple: WEDDING_CONFIG.couples[side],
      guest: String(data.to || "").trim(),
      invitationMessage: String(data.message || "").trim(),
      isEveningSlot: data.slot === "evening",
    };
  };

  const getCachedInviteData = (invite) => {
    try {
      const cached = JSON.parse(
        safeStorage.get(`${WEDDING_CONFIG.inviteCachePrefix}${invite}`) || "null",
      );
      if (!cached || cached.expiresAt <= Date.now() || !cached.data?.ok) return null;
      return cached.data;
    } catch {
      return null;
    }
  };

  const cacheInviteData = (invite, data) => {
    safeStorage.set(
      `${WEDDING_CONFIG.inviteCachePrefix}${invite}`,
      JSON.stringify({
        data,
        expiresAt: Date.now() + WEDDING_CONFIG.inviteCacheTtlMs,
      }),
    );
  };

  const loadInvitationContext = async () => {
    const invite = new URLSearchParams(location.search).get("invite");
    if (!invite || !WEDDING_CONFIG.inviteApiUrl.startsWith("https://")) {
      return getInvitationContext();
    }

    const cachedData = getCachedInviteData(invite);
    if (cachedData) return contextFromInviteData(cachedData);

    let data = await requestInviteData(invite);
    // A second request handles a transient Apps Script cold start or mobile
    // network hand-off without showing the default invitation permanently.
    if (!data?.ok) data = await requestInviteData(invite);
    if (!data?.ok) return getInvitationContext();
    cacheInviteData(invite, data);
    return contextFromInviteData(data);
  };

  const setCoupleNames = ({ firstName, secondName }) => {
    $("#couple-names").replaceChildren(
      createElement("span", {
        className: "couple-name",
        textContent: firstName,
      }),
      createElement("span", {
        className: "couple-name couple-name-second",
        textContent: `& ${secondName}`,
      }),
    );
  };

  const renderStory = () => {
    setText("#story-intro", WEDDING_CONFIG.storyIntro);
    $("#story-list").replaceChildren(
      ...WEDDING_CONFIG.storyItems.map(([year, title, description]) =>
        createElement("div", { className: "story-item" }, [
          createElement("div", { className: "story-year", textContent: year }),
          createElement("div", {}, [
            createElement("h3", { textContent: title }),
            createElement("p", { textContent: description }),
          ]),
        ]),
      ),
    );
  };

  const renderEvents = ({ venueSide }) => {
    $("#events-grid").replaceChildren(
      ...WEDDING_CONFIG.events.map(([number, title, time, description]) =>
        createElement(
          "article",
          { className: `event reveal${number === "02" ? " event-featured" : ""}` },
          [
          createElement("div", {
            className: "event-number",
            textContent: number,
          }),
          createElement("h3", { textContent: title }),
          createElement("p", { textContent: time }),
          createElement("p", {
            textContent: description.replace("{venueSide}", venueSide),
          }),
          createElement("a", {
            textContent: "Xem địa điểm",
            attributes: { href: "#venue" },
          }),
          ],
        ),
      ),
    );
  };

  const thumbnailFor = (fullImage) =>
    fullImage.replace("img/", "img/thumbs/");

  const createGalleryItem = ([alt, fullImage], index) =>
    createElement(
      "button",
      {
        attributes: {
          type: "button",
          "aria-label": `Mở ảnh ${index + 1}`,
          "data-image": fullImage,
        },
      },
      [
        createElement("img", {
          attributes: {
            src: thumbnailFor(fullImage),
            alt,
            loading: "lazy",
            decoding: "async",
            fetchpriority: index < 2 ? "high" : "low",
          },
        }),
      ],
    );

  const renderGallery = (count = WEDDING_CONFIG.galleryInitialBatchSize) => {
    $("#gallery-grid").replaceChildren(
      ...WEDDING_CONFIG.gallery
        .slice(0, count)
        .map((item, index) => createGalleryItem(item, index)),
    );
  };

  const renderVenue = ({ side }) => {
    const venue = WEDDING_CONFIG.venue[side];
    setText("#venue-title", venue.title);
    $("#venue-address").replaceChildren(
      ...venue.address.flatMap((line, index) =>
        index === 0 ? [text(line), document.createElement("br")] : [text(line)],
      ),
    );
    $("#venue-map").href = venue.mapUrl;
    $("#venue-map-embed").src = venue.embedUrl;
    $("#venue-map-embed").title = `Bản đồ ${venue.title}`;
  };

  const renderInvitation = ({ couple, guest, invitationMessage }) => {
    const guestName = guest || "bạn";
    const invitationAddressee = invitationMessage || guestName;
    setText("#invitation-guest-name", guestName);
    setText("#invitation-guest-reference", guestName);
    setText("#invitation-guest-reference-second", invitationAddressee);
    setText("#invitation-guest-reference-third", invitationAddressee);
    setText("#invitation-signature", couple.signature);
    $("#rsvp-name").value = guest || "";
  };

  const renderGifts = ({ side }) => {
    const gifts = WEDDING_CONFIG.gifts
      .filter((gift) => gift.side === side)
      .map(({ label, bank, owner, account, qr }) =>
        createElement("div", { className: "bank" }, [
          createElement("div", { className: "eyebrow", textContent: label }),
          createElement("img", {
            className: "gift-qr",
            attributes: { src: qr, alt: `Mã QR ${label}`, loading: "lazy" },
          }),
          createElement("h3", { textContent: bank }),
          createElement("p", { textContent: owner }),
          createElement("p", { className: "bank-account", textContent: account }),
          createElement("button", {
            className: "copy-account",
            textContent: "Sao chép số tài khoản",
            attributes: {
              type: "button",
              "data-copy-account": account.replace(/\s/g, ""),
            },
          }),
          createElement("p", {
            className: "copy-feedback",
            attributes: { "aria-live": "polite" },
          }),
        ]),
      );
    $("#bank-grid").replaceChildren(...gifts);
  };

  const getGuestbookEntries = () => {
    try {
      const entries = JSON.parse(
        safeStorage.get(WEDDING_CONFIG.guestbookStorageKey) || "[]",
      );
      return Array.isArray(entries) ? entries : [];
    } catch {
      return [];
    }
  };

  const getAllGuestbookEntries = () =>
    [...WEDDING_CONFIG.guestbookSamples, ...getGuestbookEntries()].sort(
      (first, second) => new Date(second.createdAt) - new Date(first.createdAt),
    );

  let visibleGuestbookCount = WEDDING_CONFIG.guestbookInitialBatchSize;

  const formatGuestbookTime = (createdAt, dateFormatter) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const isToday =
      createdDate.getFullYear() === now.getFullYear() &&
      createdDate.getMonth() === now.getMonth() &&
      createdDate.getDate() === now.getDate();

    if (!isToday) return dateFormatter.format(createdDate);

    const minutesAgo = Math.floor((now - createdDate) / 60000);
    if (minutesAgo < 1) return "Vừa xong";
    if (minutesAgo < 60) return `${minutesAgo} phút trước`;
    return `${Math.floor(minutesAgo / 60)} giờ trước`;
  };

  const renderGuestbook = () => {
    const guestbook = $("#guestbook-grid");
    const moreButton = $("#guestbook-more");
    const entries = getAllGuestbookEntries();

    if (!entries.length) {
      guestbook.replaceChildren(
        createElement("p", {
          className: "guestbook-empty",
          textContent: "Hãy để lại lời chúc đầu tiên cho chúng mình nhé.",
        }),
      );
      moreButton.hidden = true;
      return;
    }

    const dateFormatter = new Intl.DateTimeFormat("vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    guestbook.replaceChildren(
      ...entries.slice(0, visibleGuestbookCount).map(({ name, message, createdAt }) =>
        createElement("article", { className: "guestbook-entry" }, [
          createElement("p", {
            className: "guestbook-message",
            textContent: `“${message}”`,
          }),
          createElement("div", { className: "guestbook-meta" }, [
            createElement("strong", { textContent: name }),
            createElement("time", {
              textContent: formatGuestbookTime(createdAt, dateFormatter),
              attributes: { datetime: createdAt },
            }),
          ]),
        ]),
      ),
    );
    moreButton.hidden = entries.length <= WEDDING_CONFIG.guestbookInitialBatchSize;
    moreButton.setAttribute(
      "aria-expanded",
      String(visibleGuestbookCount > WEDDING_CONFIG.guestbookInitialBatchSize),
    );
    moreButton.textContent =
      visibleGuestbookCount >= entries.length
        ? "Thu gọn lời chúc"
        : "Xem thêm lời chúc";
  };

  const renderPage = (context) => {
    const { couple, isEveningSlot } = context;
    document.title = couple.title;
    setText("#couple-mark", couple.initials);
    setText("#hero-kicker", `Save the date · ${WEDDING_CONFIG.dateLabel}`);
    setText(
      "#hero-message",
      isEveningSlot
        ? WEDDING_CONFIG.eveningHeroMessage
        : WEDDING_CONFIG.defaultHeroMessage,
    );
    setText("#wedding-location", WEDDING_CONFIG.locationLabel);
    setText("#footer-names", couple.signature);
    setText("#footer-message", WEDDING_CONFIG.footerMessage);
    setCoupleNames(couple);
    setImage("#hero-image", WEDDING_CONFIG.images.hero);
    setImage("#story-image", WEDDING_CONFIG.images.story);
    setImage("#venue-image", WEDDING_CONFIG.images.venue);
    renderStory();
    renderEvents(couple);
    renderGallery();
    renderInvitation(context);
    renderVenue(context);
    renderGifts(context);
    renderGuestbook();
  };

  const setupCountdown = () => {
    const countdown = $("#countdown");
    const completeMessage = $("#countdown-complete");
    const targetTime = new Date(WEDDING_CONFIG.weddingDateTime).getTime();
    const units = [
      ["#countdown-days", 86400000],
      ["#countdown-hours", 3600000],
      ["#countdown-minutes", 60000],
      ["#countdown-seconds", 1000],
    ];

    const updateCountdown = () => {
      let remaining = targetTime - Date.now();
      if (remaining <= 0) {
        completeMessage.hidden = false;
        completeMessage.textContent = "Ngày vui đã đến";
        return true;
      }

      units.forEach(([selector, unit]) => {
        const value = Math.floor(remaining / unit);
        setText(selector, String(value).padStart(2, "0"));
        remaining %= unit;
      });
      return false;
    };

    if (!updateCountdown()) window.setInterval(() => updateCountdown(), 1000);
  };

  const setupRevealAnimation = () => {
    const revealItems = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  };

  const setupTheme = () => {
    const themeToggle = $("#theme-toggle");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const preferredTheme =
      safeStorage.get(WEDDING_CONFIG.themeStorageKey) ||
      (prefersDark ? "dark" : "light");

    const setTheme = (theme) => {
      const isDark = theme === "dark";
      document.body.dataset.theme = theme;
      themeToggle.textContent = isDark ? "☀" : "☾";
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối",
      );
      themeToggle.setAttribute("aria-pressed", String(isDark));
    };

    setTheme(preferredTheme);
    themeToggle.addEventListener("click", () => {
      const nextTheme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
      safeStorage.set(WEDDING_CONFIG.themeStorageKey, nextTheme);
      setTheme(nextTheme);
    });
  };

  const setupLightbox = () => {
    const lightbox = $("#lightbox");
    const lightboxImage = $("img", lightbox);
    const closeButton = $(".close", lightbox);
    let lastFocusedElement = null;

    const openLightbox = (imageUrl, imageAlt, trigger) => {
      lastFocusedElement = trigger;
      lightboxImage.src = imageUrl;
      lightboxImage.alt = imageAlt || "Ảnh phóng to";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    };

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      lightboxImage.removeAttribute("src");
      if (lastFocusedElement) lastFocusedElement.focus();
    };

    $("#gallery-grid").addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-image]");
      if (!trigger) return;
      const image = $("img", trigger);
      openLightbox(trigger.dataset.image, image.alt, trigger);
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target === closeButton)
        closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("open"))
        closeLightbox();
    });
  };

  const setupGalleryMore = () => {
    const gallery = $("#gallery-grid");
    const button = $("#gallery-more");
    let visibleCount = WEDDING_CONFIG.galleryInitialBatchSize;

    button.addEventListener("click", () => {
      if (visibleCount >= WEDDING_CONFIG.gallery.length) {
        visibleCount = WEDDING_CONFIG.galleryInitialBatchSize;
        renderGallery(visibleCount);
        button.setAttribute("aria-expanded", "false");
        button.textContent = "Xem thêm ảnh";
        return;
      }

      const nextCount = Math.min(
        visibleCount + WEDDING_CONFIG.galleryBatchSize,
        WEDDING_CONFIG.gallery.length,
      );
      const fragment = document.createDocumentFragment();
      WEDDING_CONFIG.gallery
        .slice(visibleCount, nextCount)
        .forEach((item, index) =>
          fragment.append(createGalleryItem(item, visibleCount + index)),
        );
      gallery.append(fragment);
      visibleCount = nextCount;
      button.setAttribute("aria-expanded", "true");
      button.textContent =
        visibleCount === WEDDING_CONFIG.gallery.length
          ? "Thu gọn album"
          : "Xem thêm ảnh";
    });
  };

  const setupGuestbookMore = () => {
    const button = $("#guestbook-more");
    button.addEventListener("click", () => {
      const totalEntries = getAllGuestbookEntries().length;
      visibleGuestbookCount =
        visibleGuestbookCount >= totalEntries
          ? WEDDING_CONFIG.guestbookInitialBatchSize
          : Math.min(
              visibleGuestbookCount + WEDDING_CONFIG.guestbookBatchSize,
              totalEntries,
            );
      renderGuestbook();
    });
    window.setInterval(renderGuestbook, 60000);
  };

  const submitRsvpToApi = async (data) => {
    const invite = new URLSearchParams(location.search).get("invite");
    if (!invite || !WEDDING_CONFIG.inviteApiUrl.startsWith("https://")) {
      return false;
    }

    await fetch(WEDDING_CONFIG.inviteApiUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify({ ...data, invite }),
    });
    return true;
  };

  const setupRsvp = () => {
    const toggle = $("#rsvp-toggle");
    const modal = $("#rsvp-modal");
    const form = $("#rsvp-form");
    const closeButton = $("#rsvp-close");
    const feedback = $("#rsvp-feedback");
    const savedRsvp = safeStorage.get(WEDDING_CONFIG.rsvpStorageKey);

    if (savedRsvp) {
      try {
        const { name, count, attendance, message } = JSON.parse(savedRsvp);
        $("#rsvp-name").value = name || $("#rsvp-name").value;
        $("#rsvp-count").value = count || 1;
        $("#rsvp-attendance").value = attendance || "";
        $("[name=message]", form).value = message || "";
      } catch {
        /* Ignore invalid data saved by an older page version. */
      }
    }

    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove("rsvp-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    };

    toggle.addEventListener("click", () => {
      modal.hidden = false;
      document.body.classList.add("rsvp-open");
      toggle.setAttribute("aria-expanded", "true");
      $("#rsvp-name").focus();
    });
    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const submitButton = $(".rsvp-submit", form);
      submitButton.disabled = true;
      feedback.textContent = "Đang gửi đăng ký…";
      safeStorage.set(WEDDING_CONFIG.rsvpStorageKey, JSON.stringify(data));

      try {
        const sentToApi = await submitRsvpToApi(data);
        if (!sentToApi) {
          feedback.textContent =
            "Không tìm thấy mã thiệp để gửi. Phản hồi đã được lưu trên thiết bị này.";
          return;
        }

        if (data.message.trim()) {
          const entries = getGuestbookEntries();
          entries.push({
            name: data.name,
            message: data.message.trim(),
            createdAt: new Date().toISOString(),
          });
          safeStorage.set(
            WEDDING_CONFIG.guestbookStorageKey,
            JSON.stringify(entries),
          );
          renderGuestbook();
        }
        feedback.textContent = "Cảm ơn bạn! Chúng mình đã ghi nhận phản hồi của bạn.";
      } catch {
        feedback.textContent =
          "Chưa thể gửi đăng ký. Vui lòng kiểm tra kết nối và thử lại.";
      } finally {
        submitButton.disabled = false;
      }
    });
  };

  const setupGiftCopy = () => {
    const bankGrid = $("#bank-grid");

    const copyText = async (value) => {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
      const helper = document.createElement("textarea");
      helper.value = value;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.append(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    };

    bankGrid.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy-account]");
      if (!button) return;
      const feedback = $(".copy-feedback", button.parentElement);
      try {
        await copyText(button.dataset.copyAccount);
        feedback.textContent = "Đã sao chép số tài khoản";
      } catch {
        feedback.textContent = "Không thể sao chép, vui lòng thử lại";
      }
    });
  };

  const setupOpeningInvitation = ({ couple, guest }) => {
    const stage = $("#opening-stage");
    const scene = $("#envelope-scene");
    const seal = $("#wax-seal");
    const letter = $("#opening-letter");
    const enterButton = $("#enter-invitation");
    const siteContent = $("#site-content");
    const mainSiteStart = $("#top");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let isOpen = false;
    let canEnter = false;
    let isEntering = false;
    let touchStartY = null;

    const unlockEnvelope = () => {
      seal.disabled = false;
      seal.setAttribute("aria-label", "Mở phong bì");
      stage.removeAttribute("aria-busy");
      seal.focus({ preventScroll: true });
    };

    const revealLetterActions = () => {
      canEnter = true;
      enterButton.disabled = false;
      letter.focus({ preventScroll: true });
    };

    const openEnvelope = () => {
      if (isOpen) return;
      isOpen = true;
      scene.classList.add("is-open");
      seal.setAttribute("aria-expanded", "true");
      seal.setAttribute("aria-label", "Phong bì đã mở");
      const revealDelay = prefersReducedMotion ? 0 : 1950;
      window.setTimeout(revealLetterActions, revealDelay);
    };

    const finishEntrance = () => {
      stage.hidden = true;
    };

    const enterInvitation = () => {
      if (!canEnter || isEntering) return;
      isEntering = true;
      stage.classList.add("is-leaving");
      siteContent.removeAttribute("inert");
      document.body.classList.remove("invitation-locked");
      window.scrollTo({ top: 0, behavior: "auto" });
      mainSiteStart.focus({ preventScroll: true });
      stage.setAttribute("aria-hidden", "true");
      const exitDelay = prefersReducedMotion ? 0 : 800;
      window.setTimeout(finishEntrance, exitDelay);
    };

    const enterOnScroll = (event) => {
      if (event.deltaY > 24) enterInvitation();
    };

    const rememberTouchStart = (event) => {
      touchStartY = event.changedTouches[0]?.clientY ?? null;
    };

    const enterOnSwipe = (event) => {
      const touchEndY = event.changedTouches[0]?.clientY;
      if (touchStartY === null || touchEndY === undefined) return;
      if (touchStartY - touchEndY > 36) enterInvitation();
      touchStartY = null;
    };

    const guestName = guest ? `${guest} thân mến` : WEDDING_CONFIG.defaultGuest;
    setText("#opening-guest-name", guestName);
    setText("#opening-couple-signature", couple.signature);
    stage.setAttribute("aria-busy", "true");
    seal.disabled = true;
    seal.setAttribute("aria-label", "Đang chuẩn bị thiệp");
    seal.addEventListener("click", openEnvelope);
    enterButton.addEventListener("click", enterInvitation);
    stage.addEventListener("wheel", enterOnScroll, { passive: true });
    stage.addEventListener("touchstart", rememberTouchStart, { passive: true });
    stage.addEventListener("touchend", enterOnSwipe, { passive: true });
    return unlockEnvelope;
  };

  const startInvitation = () => {
    const initialContext = getInvitationContext();
    renderPage(initialContext);
    setupCountdown();
    setupRevealAnimation();
    setupTheme();
    setupGalleryMore();
    setupGuestbookMore();
    setupRsvp();
    setupGiftCopy();
    setupLightbox();
    const unlockEnvelope = setupOpeningInvitation(initialContext);

    // Keep the envelope closed briefly so guest-specific data can arrive before
    // the recipient opens it. It always unlocks after three seconds.
    window.setTimeout(unlockEnvelope, WEDDING_CONFIG.inviteOpeningDelayMs);

    loadInvitationContext().then((invitationContext) => {
      renderPage(invitationContext);
      $$(".event.reveal").forEach((event) => event.classList.add("visible"));
      const guestName = invitationContext.guest
        ? `${invitationContext.guest} thân mến`
        : WEDDING_CONFIG.defaultGuest;
      setText("#opening-guest-name", guestName);
      setText("#opening-couple-signature", invitationContext.couple.signature);
    });
  };

  startInvitation();
})();
