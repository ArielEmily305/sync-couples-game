'use strict';

/* ═══════════════════════════════════════════════════════════
   DATA — Light Questions (41 cards)
   Cards 1–6 draw from this pool only.
   Cards 7–12 draw from this pool + DEEP_CARDS mixed.
   ═══════════════════════════════════════════════════════════ */
const LIGHT_CARDS = [
  { text: 'שחזרו איך הכרתם והשוו גרסאות. מי התחיל עם מי? קחו את הכל בהומור! יהיו הרבה אי דיוקים 😉❤️', timer: null },
  { text: 'מה היה הדבר הראשון שחשבת עליי כשנפגשנו לראשונה, שעוד לא סיפרת לי?', timer: 60 },
  { text: 'אם היית צריך/ה לבחור שיר אחד שמתאר את השנה הראשונה שלנו יחד, איזה שיר זה היה?', timer: null },
  { text: 'משימה: הראו תמונה מהחודשים הראשונים יחד ושחזרו מה הרגשתם באותו רגע.\nבונוס רשות לעומק: איך צלחתם את התקופות מאז?', timer: null },
  { text: 'מהו הזיכרון הכי מצחיק או מביך שקרה לנו ועדיין גורם לך לחייך?', timer: null },
  { text: 'איזה תכונה שלי גרמה לך להבין ש"זה זה"? מה התכונה האהובה עליך בי?', timer: null },
  { text: 'מהו הדבר שהכי הפתיע אותך לטובה באופי שלי ככל שהזמן עבר?', timer: null },
  { text: 'משימה: תנו שם ל"פרק" הנוכחי בחיים שלכם (בנייה, הרפתקה, צמיחה, וכו׳).', timer: null },
  { text: 'אם היית יכול/ה להתעורר מחר עם כישרון חדש או יכולת על-טבעית, מה זה היה?', timer: null },
  { text: 'מהו הדבר הקטן שאני עושה עבורך ביומיום שגורם לך להרגיש הכי אהוב/ה?', timer: null },
  { text: 'מה לדעתך הדבר הראשון שבן/בת הזוג שלך היה עושה אם היה זוכה ב-10 מיליון ש"ח?', timer: null },
  { text: 'איזה חלום אישי זנחת לאחרונה והיית רוצה להחזיר למרכז הבמה?\nבונוס רשות לעומק: איך אני יכול/ה לעזור?', timer: null },
  { text: 'מהו הדבר בי שהכי מעורר בך השראה בתקופה האחרונה?', timer: null },
  { text: 'מהו הדבר שהכי מעורר בך השראה באופן כללי בתקופה האחרונה?', timer: null },
  { text: 'אם היית יכול/ה לשנות דבר אחד בשגרה השבועית שלנו, מה זה היה?', timer: null },
  { text: 'משימה: שניכם כותבים בפתק בטלפון דבר אחד שתרצו לעשות יחד בחודש הקרוב ומראים בו זמנית.', timer: 120 },
  { text: 'איזה הרגל חדש שיטיב איתך היית רוצה לסגל לחיים שלך ומה את/ה הולכים לעשות למען זה?', timer: null },
  { text: 'מתי בפעם האחרונה הרגשת גאווה גדולה בי או בנו כזוג? מה היה המקור?', timer: null },
  { text: 'מהי "שפת האהבה" שחסרה לך כרגע מצידי?\n(מגע, מילים, עזרה, זמן איכות, מתנות)', timer: null },
  { text: 'מה הדבר שאני עושה שגורם לך להרגיש הכי בטוח/ה לצידי?', timer: null },
  { text: 'מהו הדבר שאת/ה צריך/ה כדי להרגיש יותר בטוח/ה לצידי?', timer: null },
  { text: 'מהו הדייט האידיאלי עבורך אם לא היו מגבלות של כסף או זמן?', timer: null },
  { text: 'איזה חלק ביום שלנו את/ה הכי אוהב/ת?', timer: null },
  { text: 'מה הדבר הכי נועז שהיית רוצה שנעשה יחד השנה?', timer: null },
  { text: 'אם היינו דמויות בסרט, איזה סוג של סרט זה היה?\n(קומדיה רומנטית, אקשן, דרמה...)', timer: null },
  { text: 'משימה: קבעו עכשיו "דייט בזק" של 30 דקות ליומיים הקרובים, בלי טלפונים ובלי ילדים.', timer: null },
  { text: 'מהו ה"כוח על" שלי בעינייך שמציל אותנו במצבים קשים?', timer: null },
  { text: 'אילו תכונה אחת של בן/בת הזוג היית רוצה שהילדים שלנו (או העתידיים) יירשו?', timer: null },
  { text: 'מה הדבר שהכי השתנה לטובה בקשר שלנו מאז שהתחלנו ועד היום?', timer: null },
  { text: 'משימה: כל אחד יזכיר 3 דברים שקרו השבוע שבהם הרגיש ש"אנחנו צוות מנצח".', timer: null },
  { text: 'מה הדבר שאני עושה שגורם לך להרגיש הכי גאה להיות בן/בת הזוג שלי?', timer: null },
  { text: 'אם היינו זוכים בחופשה של שבועיים בכל מקום בעולם — לאן היינו טסים ומה עושים שם?', timer: null },
  { text: 'אם היית יכול/ה להקפיא רגע אחד מהחיים שלנו ולהישאר בו לשעה שלמה, איזה רגע זה היה?', timer: null },
  { text: 'משימה: קחו 30 שניות שבהן כל אחד אומר "תודה" על משהו קטן שהשני עשה היום.', timer: 30 },
  { text: 'מהו השיר שגורם לך תמיד לרצות לרקוד איתי בסלון?', timer: null },
  { text: 'מה הדבר שאת/ה הכי מחכה לעשות יחד כשנהיה פנסיונרים?\nבונוס רשות לעומק: האם אפשר להקדים אותו? ואם כן, איך?', timer: null },
  { text: 'אם היינו צריכים לכתוב ספר על סיפור האהבה שלנו, איך היינו קוראים לו?', timer: null },
  { text: 'איזה חלק בבית שלנו הוא ה"אי השקט" שלך, ולמה?', timer: null },
  { text: 'אם היית יכול/ה לחזור לרגע אחד לעבר שלנו ולחוות אותו שוב — לאן היית הולך/ת?', timer: null },
  { text: 'משימה: החזיקו ידיים וספרו אחד לשנייה על חלום אחד שיש לכם לשנה הקרובה.', timer: null },
  { text: 'מהי המילה אחת שמתארת הכי טוב את ה"בית" שאנחנו בונים יחד?', timer: null },
];

/* ═══════════════════════════════════════════════════════════
   DATA — Deep Questions (13 cards — phase 2 only)
   ═══════════════════════════════════════════════════════════ */
const DEEP_CARDS = [
  { text: 'מהו הדבר שהכי קשה לך לבטא במילים מולי?', timer: null },
  { text: 'משימה: ספרו אחד לשנייה סוד קטן או זיכרון ילדות שאף פעם לא שיתפתם.', timer: null },
  { text: 'מהו הוויתור הכי גדול שעשית עבור הקשר שלנו, ואיך את/ה מרגיש/ה לגביו היום?', timer: null },
  { text: 'משימה: לחשו אחד לשנייה באוזן משהו שאתם אוהבים בגוף של הצד השני.', timer: null },
  { text: 'משימה: מבט בעיניים למשך דקה שלמה ללא דיבור. רק נשימות.', timer: 60 },
  { text: 'משימה: עיסוי כפות ידיים או עורף למשך 2 דקות. דברו או תיהנו מהשקט.', timer: 120 },
  { text: 'איזה "שיעור" חשוב לחיים למדת ממני מבלי שבכלל התכוונתי ללמד?', timer: null },
  { text: 'מהו הזיכרון הכי "הרפתקני" שיש לך מאיתנו, ואיזו הרפתקה בא לך להוסיף?', timer: null },
  { text: 'מהו הדבר שהכי מעסיק את המחשבות שלך בתקופה האחרונה וטרם שיתפת אותי?', timer: null },
  { text: 'מהו הדבר שהכי עוזר לך להירגע אחרי יום לחוץ, ואיך אני יכול/ה לסייע בזה?', timer: null },
  { text: 'איך אני יכול/ה להיות שותף/ה טובה יותר למסע שלך השבוע?', timer: null },
  { text: 'מהם שלושת הערכים הכי חשובים לך שלפיהם את/ה שואף/ת להתנהל בחיים?', timer: null },
  { text: 'מהו הפחד הכי גדול שלך כרגע שאת/ה מתמודד/ת איתו?', timer: null },
];

/* ═══════════════════════════════════════════════════════════
   DATA — Sweet Debts (12 options — uniform probability)
   ═══════════════════════════════════════════════════════════ */
const DEBTS = [
  { text: 'עיסוי אקספרס: 2 דקות עיסוי בכתפיים או בכפות רגליים.', timer: 120 },
  { text: 'חוב של קיפול כביסה / מדיח / אשפה מחוץ לתור ב-24 השעות הקרובות.', timer: null },
  { text: 'אחה"צ OFF: זמן אישי לצד השני לעשות משהו עבור עצמו באחד מימי השבוע.', timer: null },
  { text: 'נשיקה ארוכה של 30 שניות לפחות.', timer: 30 },
  { text: 'לבצע חיקוי משעשע של הצד השני אומר את המשפט הכי "טיפוסי" שלו.', timer: null },
  { text: 'להראות לצד השני את התמונה האחרונה שצולמה בטלפון.', timer: null },
  { text: 'הצד השני בוחר שיר, וחייבים לרקוד/לשיר את הפזמון שלו עכשיו.', timer: null },
  { text: 'להפקיד את הטלפון אצל הצד השני ל-10 דקות של "שקט דיגיטלי".', timer: null },
  { text: 'להעלות תמונה/סרטון של בן הזוג לסטורי עם מילה טובה (בלי להסביר שזה קנס).', timer: null },
  { text: 'להעלות סטורי עם מילה טובה ולתייג את @emilyod.relationships כחלק מהמשחק.', timer: null },
  { text: 'להגיד 3 דברים ספציפיים שאתם מעריכים בצד השני ברגע זה.', timer: null },
  { text: 'חוב לקנות לצד השני את ההפתעה האהובה עליו ב-3 הימים הקרובות.', timer: null },
];

/* ═══════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════ */
const state = {
  players:       { p1: '', p2: '' },
  deck:          [],   // phase1 (6 light) + phase2 (35 light + 13 deep), shuffled per phase
  deckIndex:     0,    // 0-based position
  debtDeck:      [],   // shuffled copy of DEBTS
  debtIndex:     0,
  timerInterval: null,
  junctionShown: false,
  audioCtx:      null,
  isAnimating:   false,  // guards deck tap
  isProcessing:  false,  // guards card action buttons
};

/* ═══════════════════════════════════════════════════════════
   DOM CACHE
   ═══════════════════════════════════════════════════════════ */
let dom = {};

function cacheDom() {
  dom = {
    btnStart:             document.getElementById('btn-start'),
    btnBegin:             document.getElementById('btn-begin'),
    btnInstructionsDone:  document.getElementById('btn-instructions-done'),
    btnDone:              document.getElementById('btn-done'),
    btnSkip:              document.getElementById('btn-skip'),
    btnDebtContinue:      document.getElementById('btn-debt-continue'),
    btnResume:            document.getElementById('btn-resume'),
    btnEndFromJunction:   document.getElementById('btn-end-from-junction'),
    btnRestart:           document.getElementById('btn-restart'),

    p1Input: document.getElementById('player1-name'),
    p2Input: document.getElementById('player2-name'),

    deckContainer: document.getElementById('deck-container'),

    cardFlipContainer: document.getElementById('card-flip-container'),
    cardInner:         document.getElementById('card-inner'),
    cardText:          document.getElementById('card-text'),
    timerDisplay:      document.getElementById('timer-display'),
    timerValue:        document.getElementById('timer-value'),

    debtText:         document.getElementById('debt-text'),
    debtTimerDisplay: document.getElementById('debt-timer-display'),
    debtTimerValue:   document.getElementById('debt-timer-value'),

    endMessage: document.getElementById('end-message'),
  };
}

/* ═══════════════════════════════════════════════════════════
   SCREEN NAVIGATION
   ═══════════════════════════════════════════════════════════ */
function showScreen(name) {
  stopTimer();
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
}

/* ═══════════════════════════════════════════════════════════
   AUDIO  (Web Audio API — no external files)
   ═══════════════════════════════════════════════════════════ */
function getAudioCtx() {
  if (!state.audioCtx) {
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }
  return state.audioCtx;
}

function playFlipSound() {
  try {
    const ctx = getAudioCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0,     ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.22);
  } catch (_) { /* silently ignore audio errors */ }
}

function playTimerEndSound() {
  try {
    const ctx = getAudioCtx();
    [0, 0.25, 0.5].forEach((offset, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = 880;
      const dur = i === 2 ? 0.3  : 0.15;
      const vol = i === 2 ? 0.35 : 0.25;
      gain.gain.setValueAtTime(0,   ctx.currentTime + offset);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + offset + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + dur);
      osc.start(ctx.currentTime + offset);
      osc.stop(ctx.currentTime  + offset + dur);
    });
  } catch (_) { /* silently ignore */ }
}

/* ═══════════════════════════════════════════════════════════
   TIMER
   ═══════════════════════════════════════════════════════════ */
function startTimer(seconds, valueEl, displayEl) {
  stopTimer();
  let remaining = seconds;
  displayEl.classList.remove('hidden', 'urgent');
  valueEl.textContent = remaining;

  state.timerInterval = setInterval(() => {
    remaining--;
    valueEl.textContent = remaining;
    if (remaining <= 10) displayEl.classList.add('urgent');
    if (remaining <= 0) {
      stopTimer();
      playTimerEndSound();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

/* ═══════════════════════════════════════════════════════════
   FISHER-YATES SHUFFLE — guarantees uniform probability (1/N)
   ═══════════════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ═══════════════════════════════════════════════════════════
   BUILD DECK
   Phase 1 (cards 1–6):   light questions only (uniform 1/41)
   Phase 2 (cards 7–end): remaining light + all 13 deep, mixed (uniform 1/N)
   No card repeats within a game.
   ═══════════════════════════════════════════════════════════ */
function buildDeck() {
  const lightShuffled = shuffle(LIGHT_CARDS);
  const phase1 = lightShuffled.slice(0, 6);
  const phase2 = shuffle([...lightShuffled.slice(6), ...DEEP_CARDS]);
  return [...phase1, ...phase2];
}

/* ═══════════════════════════════════════════════════════════
   GAME SETUP
   ═══════════════════════════════════════════════════════════ */
function startSetup() {
  getAudioCtx(); // unlock audio on first user gesture (iOS requirement)
  showScreen('setup');
  setTimeout(() => dom.p1Input.focus(), 300);
}

function startGame() {
  const p1 = dom.p1Input.value.trim();
  const p2 = dom.p2Input.value.trim();

  if (!p1) { dom.p1Input.style.borderColor = 'var(--color-red)'; }
  if (!p2) { dom.p2Input.style.borderColor = 'var(--color-red)'; }
  if (!p1 || !p2) return;

  state.players       = { p1, p2 };
  state.deck          = buildDeck();
  state.debtDeck      = shuffle(DEBTS);
  state.deckIndex     = 0;
  state.debtIndex     = 0;
  state.junctionShown = false;

  if (document.activeElement) document.activeElement.blur();
  showScreen('instructions');
}

/* ═══════════════════════════════════════════════════════════
   DECK SCREEN
   ═══════════════════════════════════════════════════════════ */
function handleDeckTap() {
  if (state.isAnimating) return;
  state.isAnimating = true;

  playFlipSound();
  dom.deckContainer.classList.add('shuffling');

  setTimeout(() => {
    dom.deckContainer.classList.remove('shuffling');
    state.isAnimating = false;
    revealCard();
  }, 650); // matches --shuffle-dur
}

/* ═══════════════════════════════════════════════════════════
   CARD REVEAL & 3D FLIP
   ═══════════════════════════════════════════════════════════ */
function revealCard() {
  const card = state.deck[state.deckIndex];

  // Instant reset to back face (no transition)
  dom.cardInner.style.transition = 'none';
  dom.cardFlipContainer.classList.remove('flipped');

  // Update content while card shows its back
  dom.cardText.textContent = card.text;
  dom.timerDisplay.classList.add('hidden');
  dom.timerDisplay.classList.remove('urgent');
  dom.timerValue.textContent = card.timer || 0;

  showScreen('card');

  // Double rAF forces a reflow so the browser sees the un-flipped state
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dom.cardInner.style.transition = '';
      dom.cardFlipContainer.classList.add('flipped');
      playFlipSound();

      if (card.timer) {
        setTimeout(() => {
          startTimer(card.timer, dom.timerValue, dom.timerDisplay);
        }, 650);
      }

      setTimeout(() => { state.isProcessing = false; }, 700);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   CARD ACTIONS
   ═══════════════════════════════════════════════════════════ */
function handleCardDone() {
  if (state.isProcessing) return;
  state.isProcessing = true;
  stopTimer();

  state.deckIndex++;

  // Junction: exactly 12 cards completed, not yet shown
  if (state.deckIndex === 12 && !state.junctionShown) {
    state.isProcessing = false;
    showScreen('junction');
    return;
  }

  if (state.deckIndex >= state.deck.length) {
    state.isProcessing = false;
    goToEnd();
    return;
  }

  revealCard();
}

function handleCardSkip() {
  if (state.isProcessing) return;
  stopTimer();

  // Cycle debts with uniform probability — reshuffle after all 12 used
  if (state.debtIndex >= state.debtDeck.length) {
    state.debtDeck = shuffle(DEBTS);
    state.debtIndex = 0;
  }

  const debt = state.debtDeck[state.debtIndex];
  state.debtIndex++;

  dom.debtText.textContent = debt.text;
  dom.debtTimerDisplay.classList.add('hidden');
  dom.debtTimerDisplay.classList.remove('urgent');
  dom.debtTimerValue.textContent = debt.timer || 0;

  showScreen('debt');

  if (debt.timer) {
    startTimer(debt.timer, dom.debtTimerValue, dom.debtTimerDisplay);
  }
}

/* ═══════════════════════════════════════════════════════════
   SWEET DEBT SCREEN
   Skip original question — advance to next card
   ═══════════════════════════════════════════════════════════ */
function handleDebtContinue() {
  if (state.isProcessing) return;
  state.isProcessing = true;
  stopTimer();

  state.deckIndex++;

  if (state.deckIndex === 12 && !state.junctionShown) {
    state.isProcessing = false;
    showScreen('junction');
    return;
  }

  if (state.deckIndex >= state.deck.length) {
    state.isProcessing = false;
    goToEnd();
    return;
  }

  revealCard();
}

/* ═══════════════════════════════════════════════════════════
   JUNCTION SCREEN
   ═══════════════════════════════════════════════════════════ */
function handleJunctionResume() {
  state.junctionShown = true;
  revealCard();
}

function handleJunctionEnd() {
  goToEnd();
}

/* ═══════════════════════════════════════════════════════════
   END SCREEN
   ═══════════════════════════════════════════════════════════ */
function goToEnd() {
  const { p1, p2 } = state.players;
  dom.endMessage.textContent =
    p1 + ' ו' + p2 + ', תודה שפיניתם זמן לסנכרן את הלבבות שלכם.\nמחכה לכם כאן גם בפעם הבאה 💛';
  showScreen('end');
}

function handleRestart() {
  state.players       = { p1: '', p2: '' };
  state.deck          = [];
  state.deckIndex     = 0;
  state.debtDeck      = [];
  state.debtIndex     = 0;
  state.junctionShown = false;
  state.isProcessing  = false;
  state.isAnimating   = false;
  dom.p1Input.value = '';
  dom.p2Input.value = '';
  dom.p1Input.style.borderColor = '';
  dom.p2Input.style.borderColor = '';
  showScreen('landing');
}

/* ═══════════════════════════════════════════════════════════
   EVENT BINDING
   ═══════════════════════════════════════════════════════════ */
function bindEvents() {
  dom.btnStart.addEventListener('click', startSetup);
  dom.btnBegin.addEventListener('click', startGame);

  dom.p1Input.addEventListener('input', () => { dom.p1Input.style.borderColor = ''; });
  dom.p2Input.addEventListener('input', () => { dom.p2Input.style.borderColor = ''; });

  dom.p1Input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); dom.p2Input.focus(); }
  });
  dom.p2Input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); startGame(); }
  });

  dom.btnInstructionsDone.addEventListener('click', () => showScreen('deck'));

  // Deck tap — touchstart for instant iOS response; click as fallback
  dom.deckContainer.addEventListener('touchstart', handleDeckTap, { passive: true });
  dom.deckContainer.addEventListener('click', handleDeckTap);

  dom.btnDone.addEventListener('click', handleCardDone);
  dom.btnSkip.addEventListener('click', handleCardSkip);
  dom.btnDebtContinue.addEventListener('click', handleDebtContinue);

  dom.btnResume.addEventListener('click', handleJunctionResume);
  dom.btnEndFromJunction.addEventListener('click', handleJunctionEnd);

  dom.btnRestart.addEventListener('click', handleRestart);
}

/* ═══════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  bindEvents();
});
