/**
 * KAFANA SAN REMO SARAJEVO - OFFICIAL PARODY SCRIPT
 * Author / Webdesigner: Trako Webdesigner (TrakoArman)
 * WhatsApp: +387 61 248 690
 */

// --- 1. AMBIENT CURSOR GLOW ---
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
}

// --- 2. HEADER SCROLL EFFECT & NAV HIGHLIGHT ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scrollspy
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// --- 3. MOBILE MENU DRAWER ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
  mobileDrawer.classList.add('open');
  mobileMenuBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

drawerLinks.forEach((link) => {
  link.addEventListener('click', closeDrawer);
});

// --- 4. FOOD MENU FILTERING ---
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filterVal = btn.getAttribute('data-filter');

    menuCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      if (filterVal === 'all' || category === filterVal) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 5. GALLERY FILTER & FULLSCREEN LIGHTBOX ---
const gFilterBtns = document.querySelectorAll('.g-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

gFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    gFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const gFilter = btn.getAttribute('data-gfilter');

    galleryItems.forEach((item) => {
      const gcat = item.getAttribute('data-gcat') || '';
      if (gFilter === 'all' || gcat.includes(gFilter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Gallery Data for Lightbox
const galleryData = [
  { src: "images/hero_trio_sank.jpg", title: "Trio za šankom", desc: "Faruk, Čombe i drug Izet uz keramički točionik Sarajevsko i mesingani telefon." },
  { src: "images/combe_prica_za_sankom.jpg", title: "Čombe filozofira", desc: "Čombe strasno objašnjava teoriju za šankom dok Faruk i Izet slušaju." },
  { src: "images/marija_i_gosti_sank.jpg", title: "Marija za šankom", desc: "Gazdarica Marija Mrvica drži red pod neonskim znakom San Remo." },
  { src: "images/samir_i_marija_dil.jpg", title: "Poslovni dogovor", desc: "Samir Fazlinović pokušava uvjeriti Mariju u novi posao stoljeća." },
  { src: "images/combe_toceno_knjiga.jpg", title: "Pivo i kultura", desc: "Čombe na pultu sa točenom kriglom piva i knjigom." },
  { src: "images/zgrada_akord_eksterijer.png", title: "Zgrada & Akord Produkcija", desc: "Eksterijer preko puta San Rema, legendarna žuta Buba i ulaz u zgradu." },
  { src: "images/hrana_sarma.jpg", title: "Domaća Sarma", desc: "Vruća sarma u zemljanoj tepsiji sa suhim mesom — Izetov životni eliksir." },
  { src: "images/hrana_sogan_dolma.jpg", title: "Sogan-Dolma", desc: "Tradicionalne punjene lukovice sa finim crvenim saftom i limunom." },
  { src: "images/hrana_japrak.jpg", title: "Japrak sa Pavlakom", desc: "Mladi listovi raštike i vinove loze u rozeti sa domaćim mileramom." },
  { src: "images/hrana_janjetina_pecenje.jpg", title: "Janjetina na Ovalu", desc: "Vrhunsko pečenje s ražnja za posebne dane i Samirove uspješne dilove." },
  { src: "images/hrana_punjene_paprike.jpg", title: "Punjene Paprike („Papričice”)", desc: "Domaće paprike krčkane u gustom paradajz saftu." },
  { src: "images/hrana_pileci_bataci.jpg", title: "Ljuti Pileći Bataci", desc: "Marijin tajni specijalitet koji traži najmanje tri krigle piva." },
  { src: "images/pice_toceno_pivo.jpg", title: "Hladno Točeno Pivo", desc: "Sarajevsko pivo u teškoj staklenoj krigli sa dva prsta pjene." },
  { src: "images/pice_domaca_rakija.jpg", title: "Domaća Maksuzija", desc: "Čista prepečenica od šljiva — univerzalni lijek po receptu Izeta Fazlinovića." },
  { src: "images/pice_kafa_espresso.jpg", title: "„Kraća, Jača” Kafa", desc: "Espresso bez kompromisa i bosanska kafa u bakarnoj džezvi." },
  { src: "images/dino_refko_stocic.jpg", title: "Dino i Refko za stolom", desc: "Dino Mehmeda Mujkić i Refko uz flaše Sarajevskog piva." },
  { src: "images/gost_dino_wc.jpg", title: "Dino u Zelenom Toaletu", desc: "Kultna scena kafanske drame i iskrenih emocija." },
  { src: "images/gost_damir_viski.webp", title: "Damir i Viski", desc: "Damir Fazlinović sa čašom pića, traži trenutak mira od porodice." },
  { src: "images/trio_fazlinovici_pidzama.jpg", title: "Tri Generacije Fazlinovića", desc: "Damir, Izet u kultnoj prugastoj pidžami i Faruk Fazlinović." },
  { src: "images/gost_samir_biznis.webp", title: "Samir Fazlinović (Direktor)", desc: "Kralj kombinacija, poslova sa carinom i brzih nestanaka." },
  { src: "images/muzika_izet_roker.jpg", title: "Izet Fazlinović Roker", desc: "Svakog petka od 20:00 — Rokenrol uživo sa drugom Izetom!" }
];

let currentLightboxIndex = 0;
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const item = galleryData[currentLightboxIndex];
  if (!item) return;
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lbTitle.textContent = item.title;
  lbDesc.textContent = item.desc;
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  updateLightbox();
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
}

// Keyboard navigation for Lightbox
window.addEventListener('keydown', (e) => {
  if (!lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightboxImage();
  if (e.key === 'ArrowLeft') prevLightboxImage();
});

// --- 6. INTERACTIVE RECEIPT / MARIJIN TEFTER ---
let receiptItems = [];

// Set current date in receipt
const receiptDateEl = document.getElementById('receiptDate');
if (receiptDateEl) {
  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  receiptDateEl.textContent = `Datum: ${now.toLocaleDateString('bs-BA', options)}`;
}

function addToReceipt(name, price) {
  receiptItems.push({ name, price });
  renderReceipt();
  playCoinSound();

  // Scroll smoothly to receipt on mobile if requested
  const alertBox = document.getElementById('receiptAlertBox');
  if (alertBox) alertBox.style.display = 'none';
}

function removeItemFromReceipt(index) {
  receiptItems.splice(index, 1);
  renderReceipt();
}

function clearReceipt() {
  receiptItems = [];
  renderReceipt();
  const alertBox = document.getElementById('receiptAlertBox');
  if (alertBox) alertBox.style.display = 'none';
}

function renderReceipt() {
  const listEl = document.getElementById('receiptItemsList');
  const totalEl = document.getElementById('receiptTotalAmount');

  if (receiptItems.length === 0) {
    listEl.innerHTML = `
      <div class="receipt-empty-state">
        <span>Još ništa niste naručili za šankom.</span>
        <small>Kliknite na stavke s lijeve strane ili iz jelovnika!</small>
      </div>
    `;
    totalEl.textContent = '0.00 KM';
    return;
  }

  let total = 0;
  listEl.innerHTML = '';

  receiptItems.forEach((item, idx) => {
    total += item.price;
    const row = document.createElement('div');
    row.className = 'receipt-item-row';
    row.innerHTML = `
      <div class="receipt-item-name">
        <button class="btn-remove-item" onclick="removeItemFromReceipt(${idx})" title="Ukloni">&times;</button>
        <span>${item.name}</span>
      </div>
      <strong>${item.price.toFixed(2)} KM</strong>
    `;
    listEl.appendChild(row);
  });

  totalEl.textContent = `${total.toFixed(2)} KM`;
}

// Payment Scenarios with Subtle LZN Comedy
function attemptPayment(method) {
  const alertBox = document.getElementById('receiptAlertBox');
  const alertIcon = document.getElementById('alertIcon');
  const alertTitle = document.getElementById('alertTitle');
  const alertMessage = document.getElementById('alertMessage');

  if (receiptItems.length === 0) {
    alertBox.style.display = 'flex';
    alertIcon.textContent = '☕';
    alertTitle.textContent = 'Marija se krsti:';
    alertMessage.textContent = 'Pa niste ništa ni popili ni pojeli! Prvo naruči nešto, pa onda vadi novčanik!';
    playErrorBuzzer();
    return;
  }

  alertBox.style.display = 'flex';

  if (method === 'izet') {
    playErrorBuzzer();
    alertIcon.textContent = '🚨';
    alertTitle.textContent = 'Marija prekida muziku i viče:';
    alertMessage.textContent = '„Kakav crni Izetov račun?! On mi duguje još od 2008. godine za sedam tura maksuzije i tri sarmetine! Ako ne platiš odmah u kešu, zovem miliciju i gasim točionik!”';
  } else if (method === 'samir') {
    playRotaryPhone();
    alertIcon.textContent = '🚗';
    alertTitle.textContent = 'Poziv Samiru na mobilni:';
    alertMessage.textContent = '„Halo rođak, ma sve u redu, riješiće brat... samo da skoknem do gepeka žute Bube po devize, eto me za minut!” (U pozadini se čuje škripa guma — Samir je pobjegao prema Ilidži!).';
  } else if (method === 'tefter') {
    playErrorBuzzer();
    alertIcon.textContent = '📝';
    alertTitle.textContent = 'Marija vadi tefter i oklagiju:';
    alertMessage.textContent = '„Moj tefter je pun Farukovih pjesama i Čombetovih obećanja! U San Remu veresija ne postoji ni za rođenu majku. Vadi gotovinu!”';
  } else if (method === 'kes') {
    playCoinSound();
    alertIcon.textContent = '💰';
    alertTitle.textContent = 'Čudo u San Remu:';
    alertMessage.textContent = 'Marija uzima novčanice, pregleda ih prema neonskom znaku da nisu iz Akord štamparije, uredno vraća kusur i klima glavom: „E tako se posluje. Živjeli i dođite nam opet!”';
  }
}

// --- 7. RESERVATION FORM HANDLER ---
function handleReservation(e) {
  e.preventDefault();
  const name = document.getElementById('resName').value.trim();
  const guests = document.getElementById('resGuests').value;
  const day = document.getElementById('resDay').value;
  const payment = document.getElementById('resPayment').value;
  const box = document.getElementById('formResponseBox');
  const msg = document.getElementById('respMessage');

  playCoinSound();

  let paymentComment = '';
  if (payment === 'kes') {
    paymentComment = 'Pošto plaćate u gotovini, Marija vam je rezervisala najbolji sto blizu točionika!';
  } else if (payment === 'izet') {
    paymentComment = 'Marija je vidjela da planirate na Izetov račun: sto je rezervisan, ali morate ostaviti ličnu kartu na šanku!';
  } else {
    paymentComment = 'Zahtjev je zabilježen na salveti iza šanka. Dođite na vrijeme!';
  }

  msg.innerHTML = `<strong>Poštovani/a ${name}</strong>, rezervacija za <strong>${guests} osoba (${day})</strong> je uspješno proslijeđena Mariji. ${paymentComment}`;
  box.style.display = 'flex';
}

// --- 8. WEB AUDIO API SYNTHESIZER (100% INDEPENDENT SOUNDS) ---
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play Rock Guitar Riff (Izet's Friday Rock)
function playRockRiff() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Notes of a heavy power chord riff: E2 -> G2 -> A2 -> E2
    const notes = [82.41, 98.00, 110.00, 82.41];
    const durations = [0.22, 0.22, 0.35, 0.5];

    let t = now;
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const dist = ctx.createWaveShaper();

      // Simple distortion curve
      const k = 40;
      const n_samples = 44100;
      const curve = new Float32Array(n_samples);
      const deg = Math.PI / 180;
      for (let i = 0; i < n_samples; ++i) {
        let x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
      }
      dist.curve = curve;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + durations[idx]);

      osc.connect(dist);
      dist.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + durations[idx]);

      t += durations[idx] * 0.9;
    });
  } catch (err) {
    console.log('Audio error:', err);
  }
}

// Play Vintage Rotary Mechanical Phone Ring
function playRotaryPhone() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Dual-tone classic bell: 440Hz + 480Hz pulsating
    for (let i = 0; i < 2; i++) {
      const burstStart = now + i * 0.5;
      [440, 480].forEach(freq => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, burstStart);

        gain.gain.setValueAtTime(0.15, burstStart);
        gain.gain.exponentialRampToValueAtTime(0.001, burstStart + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(burstStart);
        osc.stop(burstStart + 0.35);
      });
    }
  } catch (err) {
    console.log('Audio error:', err);
  }
}

// Play Clinking Beer Glasses Cheers
function playKafanaCheer() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // High pitched glass chime
    [2400, 3100, 3800].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.2, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.6);
    });
  } catch (err) {
    console.log('Audio error:', err);
  }
}

// Play Coin / Register Drop
function playCoinSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    [987.77, 1318.51].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.18, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  } catch (err) {
    console.log('Audio error:', err);
  }
}

// Play Error Buzzer
function playErrorBuzzer() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.setValueAtTime(120, now + 0.15);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  } catch (err) {
    console.log('Audio error:', err);
  }
}

// Ambient Tavern Background Drone (Toggle)
let ambientDroneOsc = null;
let ambientDroneGain = null;
let isAmbientPlaying = false;

const soundToggleBtn = document.getElementById('soundToggleBtn');
if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    const ctx = getAudioContext();

    if (!isAmbientPlaying) {
      // Start soft warm tavern harmonic pad
      ambientDroneOsc = ctx.createOscillator();
      ambientDroneGain = ctx.createGain();

      ambientDroneOsc.type = 'triangle';
      ambientDroneOsc.frequency.setValueAtTime(110, ctx.currentTime); // A2 warm hum

      ambientDroneGain.gain.setValueAtTime(0.001, ctx.currentTime);
      ambientDroneGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.5);

      ambientDroneOsc.connect(ambientDroneGain);
      ambientDroneGain.connect(ctx.destination);

      ambientDroneOsc.start();

      isAmbientPlaying = true;
      soundToggleBtn.classList.add('playing');
      soundToggleBtn.querySelector('.sound-text').textContent = 'Zvuk Uključen';
    } else {
      // Fade out
      if (ambientDroneGain) {
        ambientDroneGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          if (ambientDroneOsc) ambientDroneOsc.stop();
          ambientDroneOsc = null;
          ambientDroneGain = null;
        }, 500);
      }
      isAmbientPlaying = false;
      soundToggleBtn.classList.remove('playing');
      soundToggleBtn.querySelector('.sound-text').textContent = 'Kafanski Zvuk';
    }
  });
}
