const copy={
tr:{navServices:'Hizmetler',navProjects:'Projeler',navAbout:'Hakkımızda',navContact:'İletişim',eyebrow:'İSTANBUL · RENOVASYON · DEKORASYON',titleA:'Mekânları',titleB:'yeniden tasarlıyoruz.',heroText:'Tasarımdan uygulamaya kadar; estetik, işlev ve uygulama kalitesini tek ekipte buluşturuyoruz.',cta:'Ücretsiz keşif talep et',portfolio:'Projeleri keşfet',trust1:'İstanbul merkezli',trust2:'Doğrudan WhatsApp iletişimi',trust3:'Türkçe / English',servicesTitle:'Tek ekip. Baştan sona çözüm.',servicesText:'Daire, villa, ofis ve ticari mekânlar için yenileme sürecini planlamadan teslimata kadar yönetiyoruz.',projectTitle:'İşin ruhu dönüşümde.',projectText:'Siteyi hızlı yayına almak için bu görseller temsili kullanılıyor. Zinet’in yeni çalışmalarını Instagram üzerinden doğrudan takip edebilirsiniz.',before:'ÖNCE',after:'SONRA',g1:'Yaşam Alanları',g2:'İç Mekân',g3:'Anahtar Teslim',sample:'Temsili görsel',instaTitle:'En güncel işler Instagram’da.',instaText:'Mohammad Hossein yeni proje fotoğrafı veya videosu paylaştığında en güncel içerik burada tek tıkla erişilebilir.',photoNote:'Portföy görselleri geçicidir; gerçek Zinet proje fotoğrafları geldikçe kolayca değiştirilecektir.',aboutTitle:'Detayda güven, uygulamada disiplin.',aboutText:'Zinet Dekorasyon İnşaat Sanayi Ticaret Limited Şirketi, İstanbul merkezli renovasyon ve dekorasyon hizmetleri sunar. Projelerde açık iletişim, düzenli saha yönetimi ve temiz teslim yaklaşımı ön plandadır.',appointmentTitle:'Keşif görüşmesi planlayın.',appointmentText:'Tarih ve saati seçin. Bilgileriniz hazır WhatsApp mesajına dönüşsün; Zinet Dekorasyon sizi doğrudan geri arasın veya mesajla yanıtlasın.',name:'Adınız',date:'Tarih',time:'Saat',project:'Proje türü',notes:'Kısa not',send:'WhatsApp ile gönder',contactTitle:'İletişim kolay olmalı.',call:'Ara',email:'E-posta',officeAddress:'İletişim / Ofis',registeredAddress:'Kayıtlı Merkez',corp:'Kurumsal Bilgiler',legalName:'Ticari Unvan',registry:'Ticaret Sicil / Dosya No',ilan:'İlan Sıra No',authority:'Sicil Müdürlüğü',footer:'Tasarımdan uygulamaya kadar yanınızdayız.',services:[['Anahtar Teslim Renovasyon','Yıkım, altyapı, ince işler ve son uygulamalar tek koordinasyon altında.'],['İç Mimari & Dekorasyon','Mekâna özel malzeme, renk, aydınlatma ve mobilya kararları.'],['Mutfak & Banyo','Fonksiyonel planlama, kaplama, tesisat ve özel imalat çözümleri.'],['Boya & Yüzey Uygulamaları','Duvar, tavan, dekoratif yüzey ve profesyonel boya uygulamaları.'],['Elektrik & Tesisat','Yenileme sürecine entegre elektrik, su ve mekanik altyapı çalışmaları.'],['Ticari Mekânlar','Mağaza, ofis ve işletmeler için hızlı ve kontrollü dönüşüm.']],types:['Daire renovasyonu','Villa renovasyonu','Mutfak / Banyo','Ofis / Ticari alan','Diğer']},
en:{navServices:'Services',navProjects:'Projects',navAbout:'About',navContact:'Contact',eyebrow:'ISTANBUL · RENOVATION · INTERIORS',titleA:'We redesign',titleB:'the way spaces feel.',heroText:'From concept to completion, we bring aesthetics, function and build quality together under one team.',cta:'Request a free site visit',portfolio:'Explore projects',trust1:'Based in Istanbul',trust2:'Direct WhatsApp contact',trust3:'Türkçe / English',servicesTitle:'One team. End-to-end delivery.',servicesText:'We manage renovation for apartments, villas, offices and commercial spaces from planning through handover.',projectTitle:'Transformation is the proof.',projectText:'Representative images are used for the initial launch. Zinet’s newest work is always one click away on Instagram.',before:'BEFORE',after:'AFTER',g1:'Living Spaces',g2:'Interiors',g3:'Turnkey Renovation',sample:'Representative image',instaTitle:'Latest work lives on Instagram.',instaText:'Whenever Mohammad Hossein shares a new project photo or video, the latest work is available here with one click.',photoNote:'Portfolio photography is temporary and can be replaced with real Zinet project images at any time.',aboutTitle:'Trust in the details. Discipline on site.',aboutText:'Zinet Dekorasyon İnşaat Sanayi Ticaret Limited Şirketi is an Istanbul-based renovation and decoration company focused on clear communication, organised site management and clean handover.',appointmentTitle:'Schedule a site visit.',appointmentText:'Choose a date and time. Your details become a ready-to-send WhatsApp message so Zinet Dekorasyon can call or message you back directly.',name:'Your name',date:'Date',time:'Time',project:'Project type',notes:'Short note',send:'Send via WhatsApp',contactTitle:'Getting in touch should be easy.',call:'Call',email:'Email',officeAddress:'Contact / Office',registeredAddress:'Registered Office',corp:'Corporate Information',legalName:'Legal Name',registry:'Trade Registry / File No.',ilan:'Announcement No.',authority:'Registry Authority',footer:'With you from design to implementation.',services:[['Turnkey Renovation','Demolition, infrastructure, finishes and final detailing under one coordination.'],['Interior Design & Decoration','Material, colour, lighting and furnishing decisions tailored to your space.'],['Kitchen & Bathroom','Functional planning, surfaces, plumbing and custom-built solutions.'],['Painting & Finishes','Walls, ceilings, decorative surfaces and professional paint systems.'],['Electrical & Plumbing','Electrical, water and mechanical works integrated into the renovation process.'],['Commercial Spaces','Fast, controlled transformation for stores, offices and businesses.']],types:['Apartment renovation','Villa renovation','Kitchen / Bathroom','Office / Commercial','Other']}
};

// Load the production polish layer after the critical stylesheet.
const polish=document.createElement('link');
polish.rel='stylesheet';
polish.href='/polish.css';
document.head.appendChild(polish);

const storedLang=localStorage.getItem('zinet-lang');
const browserEnglish=(navigator.language||'').toLowerCase().startsWith('en');
let lang=storedLang==='en'||storedLang==='tr'?storedLang:(browserEnglish?'en':'tr');
const grid=document.getElementById('servicesGrid');
const typeSelect=document.getElementById('projectType');
const langBtn=document.getElementById('langBtn');
const description=document.querySelector('meta[name="description"]');

function render(){
  document.documentElement.lang=lang;
  langBtn.textContent=lang==='tr'?'EN':'TR';
  langBtn.setAttribute('aria-label',lang==='tr'?'Switch to English':'Türkçeye geç');
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(copy[lang][k])el.textContent=copy[lang][k]});
  grid.innerHTML=copy[lang].services.map((s,i)=>`<article class="service-card"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
  typeSelect.innerHTML=copy[lang].types.map(v=>`<option>${v}</option>`).join('');
  document.getElementById('name').placeholder=lang==='tr'?'Ad Soyad':'Full name';
  document.getElementById('notes').placeholder=lang==='tr'?'Kısaca projenizi anlatın…':'Tell us briefly about your project…';
  document.title=lang==='tr'?'Zinet Dekorasyon | İstanbul Renovasyon & Dekorasyon':'Zinet Dekorasyon | Renovation & Interiors in Istanbul';
  if(description) description.content=lang==='tr'?'Zinet Dekorasyon — İstanbul’da anahtar teslim renovasyon, iç dekorasyon, mutfak-banyo yenileme, boya, elektrik ve tesisat çözümleri.':'Zinet Dekorasyon — turnkey renovation, interiors, kitchens, bathrooms, painting, electrical and plumbing services in Istanbul.';
}

langBtn.addEventListener('click',()=>{
  lang=lang==='tr'?'en':'tr';
  localStorage.setItem('zinet-lang',lang);
  render();
});

function localDateISO(date){
  const y=date.getFullYear();
  const m=String(date.getMonth()+1).padStart(2,'0');
  const d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

const dateInput=document.getElementById('date');
const today=new Date();
dateInput.min=localDateISO(today);

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  if(!e.currentTarget.reportValidity()) return;
  const name=document.getElementById('name').value.trim()||'-';
  const date=dateInput.value||'-';
  const time=document.getElementById('time').value||'-';
  const type=typeSelect.value||'-';
  const notes=document.getElementById('notes').value.trim()||'-';
  const msg=lang==='tr'?`Merhaba Zinet Dekorasyon, keşif görüşmesi talep ediyorum.\n\nAd: ${name}\nTarih: ${date}\nSaat: ${time}\nProje: ${type}\nNot: ${notes}`:`Hello Zinet Dekorasyon, I would like to request a site visit.\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nProject: ${type}\nNote: ${notes}`;
  const url=`https://wa.me/905401691699?text=${encodeURIComponent(msg)}`;
  const win=window.open(url,'_blank','noopener,noreferrer');
  if(win) win.opener=null;
});

document.getElementById('year').textContent=today.getFullYear();
render();

// Gentle reveal animations and active navigation state. Everything remains visible
// when IntersectionObserver is unavailable or reduced motion is preferred.
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced && 'IntersectionObserver' in window){
  const revealTargets=document.querySelectorAll('.section-head,.service-card,.project-stage,.gallery-grid figure,.instagram-live,.about-copy,.appointment-copy,.booking-card,.contact-grid,.address-stack,.corp-data');
  revealTargets.forEach(el=>el.classList.add('reveal'));
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
    });
  },{threshold:.12,rootMargin:'0px 0px -30px'});
  revealTargets.forEach(el=>revealObserver.observe(el));

  const navLinks=[...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const sectionObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    navLinks.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===`#${visible.target.id}`));
  },{threshold:[.2,.45,.7],rootMargin:'-15% 0px -60%'});
  sections.forEach(section=>sectionObserver.observe(section));
}
