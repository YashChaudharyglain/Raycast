const links = document.querySelectorAll('.nav-links a');
const underline = document.querySelector('.nav-underline');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.querySelector('.overlay');

function moveUnderline(activeLink) {
  const linkRect = activeLink.getBoundingClientRect();
  const parentRect = activeLink.parentElement.getBoundingClientRect();
  underline.style.width = `${linkRect.width}px`;
  underline.style.left = `${linkRect.left - parentRect.left}px`;
}

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveUnderline(link);
  });
});

window.addEventListener('load', () => {
  const active = document.querySelector('.nav-links a.active');
  moveUnderline(active);
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});






// MAC-SECTION
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
      card.style.transition = '0.3s ease';
      card.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = 'none';
    });
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 10);
});















const toggle = document.getElementById('toggleButton');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});









document.addEventListener("DOMContentLoaded", () => {
  const cards = document.getElementById("themes-cards");

  // 🖼️ Step 1: 5 main images
  const myImages = [
    "./images/img11.svg",
    "./images/img12.svg",
    "./images/img13.svg",
    "./images/img14.svg",
    "./images/img15.svg"
  ];

  // 🌀 Step 2: Repeat 3 times to make 15
  for (let i = 0; i < 3; i++) {
    myImages.forEach((src) => {
      cards.innerHTML += `
        <div class='themes-card'>
          <img src='${src}' alt='theme image'>
          <p>Custom Theme<br>5120×2880</p>
        </div>`;
    });
  }

  // 🎨 Step 3: Keep your color picker logic as before
  function setupPicker(barId, iconId, hexBoxId) {
    const bar = document.getElementById(barId);
    const icon = document.getElementById(iconId);
    const hexBox = document.getElementById(hexBoxId);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = bar.offsetWidth;
    canvas.height = bar.offsetHeight;

    let grad;
    if (barId.includes("hue")) {
      grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0, "#FF3333");
      grad.addColorStop(0.1667, "#FFFF33");
      grad.addColorStop(0.3333, "#33FF33");
      grad.addColorStop(0.5, "#33FFFF");
      grad.addColorStop(0.6667, "#3333FF");
      grad.addColorStop(0.8333, "#FF33FF");
      grad.addColorStop(1, "#FF3333");
    } else {
      grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0, "#999999");
      grad.addColorStop(0.5, "#CC6666");
      grad.addColorStop(1, "#FF3333");
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function pickColor(clientX) {
      const rect = bar.getBoundingClientRect();
      let x = clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      icon.style.left = `${x}px`;

      const pixel = ctx.getImageData(x, rect.height / 2, 1, 1).data;
      const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2])
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
      hexBox.textContent = hex;
    }

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      pickColor(clientX);
    };

    bar.addEventListener("click", (e) => pickColor(e.clientX));
    icon.addEventListener("mousedown", () => {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener(
        "mouseup",
        () => window.removeEventListener("mousemove", handleMove),
        { once: true }
      );
    });
  }

  setupPicker("themes-hue", "themes-hue-icon", "themes-hex");
  setupPicker("themes-sat", "themes-sat-icon", "themes-hex");
});








// ===========================
// Infinity Section Hover Effect
// ===========================
const tag = document.querySelector(".button-tag");

tag.addEventListener("mouseenter", () => {
  tag.style.background = "rgba(255,255,255,0.12)";
});

tag.addEventListener("mouseleave", () => {
  tag.style.background = "rgba(255,255,255,0.06)";
});








document.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('.translator-btn');
btn.addEventListener('mouseover', () => {
btn.style.background = 'rgba(255,255,255,0.15)';
});
btn.addEventListener('mouseout', () => {
btn.style.background = 'rgba(255,255,255,0.06)';
});
});




const image = document.getElementById("zoom-image");
const lens = document.getElementById("zoom-lens");

// Zoom Level Control
const zoomLevel = 4;

// Run zoom only if desktop screen (width ≥ 1024px)
const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

if (isDesktop) {
  // 🖱️ Desktop Mouse Events
  image.addEventListener("mousemove", moveLens);
  image.addEventListener("mouseenter", showLens);
  image.addEventListener("mouseleave", hideLens);
}

function showLens() {
  lens.style.display = "block";
  lens.style.backgroundImage = `url(${image.src})`;
  lens.style.backgroundRepeat = "no-repeat";

  const bgWidth = image.width * zoomLevel;
  const bgHeight = image.height * zoomLevel;
  lens.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;

  setTimeout(() => {
    lens.style.opacity = "1";
    lens.style.transform = "scale(1)";
  }, 10);
}

function hideLens() {
  lens.style.opacity = "0";
  lens.style.transform = "scale(0.8)";
  setTimeout(() => (lens.style.display = "none"), 200);
}

function moveLens(e) {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const lensSize = lens.offsetWidth / 2;

  let lensX = x - lensSize;
  let lensY = y - lensSize;

  if (lensX < 0) lensX = 0;
  if (lensY < 0) lensY = 0;
  if (lensX > rect.width - lens.offsetWidth)
    lensX = rect.width - lens.offsetWidth;
  if (lensY > rect.height - lens.offsetHeight)
    lensY = rect.height - lens.offsetHeight;

  lens.style.left = `${lensX}px`;
  lens.style.top = `${lensY}px`;

  const bgPosX = -((x * zoomLevel) - lensSize);
  const bgPosY = -((y * zoomLevel) - lensSize);

  lens.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
}








const monthlyBtn = document.getElementById('pricing-monthly');
const yearlyBtn = document.getElementById('pricing-yearly');
const cardsContainer = document.getElementById('pricing-cards');

const pricingData = {
  monthly: [
    { title: 'Free', price: '$0', subtitle: '/ month', details: [
      "<img src='images/tick.svg'> Calculator, Quicklinks, Snippets, Window Management, and many more core features",
      "<img src='images/tick.svg'> More than 1000 Extensions",
      "<img src='images/tick.svg'> Custom Extensions",
      "<img src='images/tick.svg'> Developer Tools"
    ] },
    { title: 'Pro', price: '$8', subtitle: '/ month', discount: '-20%', billed: '$8 billed monthly', details: [
      "<img src='images/tickk.svg'> Everything in Free",
      "<img src='images/tickk.svg'> Raycast AI",
      "<img src='images/tickk.svg'> Cloud Sync",
      "<img src='images/tickk.svg'> Custom Themes",
      "<img src='images/tickk.svg'> Unlimited Clipboard History",
      "<img src='images/starr.png' class='special-icon'> More Coming Soon"
    ], gpt: '+ $8 / month' },
    { title: 'Team', price: '$12', subtitle: '/ month / user', discount: '-20%', billed: '$12 billed monthly', details: [
      "<img src='images/tick.svg'> Everything in Pro",
      "<img src='images/tick.svg'> Unlimited Shared Commands",
      "<img src='images/tick.svg'> Unlimited Shared Quicklinks",
      "<img src='images/tick.svg'> Unlimited Shared Snippets",
      "<img src='images/tick.svg'> Unlimited Team Members",
      "<img src='images/star.svg' class='special-icon'> More Coming Soon"
    ], gpt: '+ $12 / month' }
  ],
  yearly: [
    { title: 'Free', price: '$0', subtitle: '/ year', details: [
      "<img src='images/tick.svg'> Calculator, Quicklinks, Snippets, Window Management, and many more core features",
      "<img src='images/tick.svg'> More than 1000 Extensions",
      "<img src='images/tick.svg'> Custom Extensions",
      "<img src='images/tick.svg'> Developer Tools"
    ] },
    { title: 'Pro', price: '$72', subtitle: '/ year', discount: '-20%', billed: '$72 billed annually', details: [
      "<img src='images/tickk.svg'> Everything in Free",
      "<img src='images/tickk.svg'> Raycast AI",
      "<img src='images/tickk.svg'> Cloud Sync",
      "<img src='images/tickk.svg'> Custom Themes",
      "<img src='images/tickk.svg'> Unlimited Clipboard History",
      "<img src='images/starr.png' class='special-icon'> More Coming Soon"
    ], gpt: '+ $72 / year' },
    { title: 'Team', price: '$112', subtitle: '/ year / user', discount: '-20%', billed: '$112 billed annually', details: [
      "<img src='images/tick.svg'> Everything in Pro",
      "<img src='images/tick.svg'> Unlimited Shared Commands",
      "<img src='images/tick.svg'> Unlimited Shared Quicklinks",
      "<img src='images/tick.svg'> Unlimited Shared Snippets",
      "<img src='images/tick.svg'> Unlimited Team Members",
      "<img src='images/star.svg' class='special-icon'> More Coming Soon"
    ], gpt: '+ $112 / year' }
  ]
};

function cardInnerHTML(card) {
  return `
    <div class="pricing-card-content">
      <h3>
        ${card.title}
        ${card.title === 'Team' ? `<img src="images/team-icon.svg" alt="Pro badge" class="team-icon-inline">` : ''}
      </h3>

      <p>${card.subtitle.includes('month') ? 'Everything you need to supercharge your productivity.' : 'Everything you need to supercharge your productivity for the year.'}</p>
      
      <div class="price">
        <h1>${card.price}</h1>
        <span>${card.subtitle}</span>
        ${card.discount ? `<div class="discount">${card.discount}</div>` : ''}
        ${card.billed ? `<div class="billed">${card.billed}</div>` : ''}
      </div>

      <div class="divider"></div>

      <!-- ✅ Added What’s included -->
      <div class="features">
        <strong>What’s included</strong>
        ${card.details.map(item => `<div>${item}</div>`).join('')}
      </div>

      ${card.gpt ? `
        <div class='gpt-box'>
          <div class='gpt-left'>
            <img src='images/divCheck.svg'>
            <span>Include GPT-4</span>
          </div>
          <span>${card.gpt}</span>
        </div>` : ''}

      <div class="select-plan">Select Plan</div>
    </div>`;
}

function createCards(planType) {
  const data = pricingData[planType];
  cardsContainer.innerHTML = '';
  data.forEach(d => {
    const wrapper = document.createElement('div');
    wrapper.className = 'pricing-card';
    wrapper.innerHTML = cardInnerHTML(d);
    cardsContainer.appendChild(wrapper);
  });
}

function magicalSwitch(planType) {
  const data = pricingData[planType];
  const cards = document.querySelectorAll('.pricing-card');
  cards.forEach((card, i) => {
    const content = card.querySelector('.pricing-card-content');
    content.style.animation = 'fadeSlide 0.8s ease';
    setTimeout(() => {
      card.innerHTML = cardInnerHTML(data[i]);
    }, 200);
  });
}

monthlyBtn.addEventListener('click', () => {
  if (!monthlyBtn.classList.contains('active')) {
    monthlyBtn.classList.add('active');
    yearlyBtn.classList.remove('active');
    magicalSwitch('monthly');
  }
});

yearlyBtn.addEventListener('click', () => {
  if (!yearlyBtn.classList.contains('active')) {
    yearlyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    magicalSwitch('yearly');
  }
});

createCards('monthly');










const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      faqItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    }
  });
});








const footerLinks = document.querySelectorAll('.footer-column a');


footerLinks.forEach(link => {
link.addEventListener('mouseover', () => {
link.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.6)';
});


link.addEventListener('mouseout', () => {
link.style.textShadow = 'none';
});
});


window.addEventListener('resize', () => {
if (window.innerWidth < 768) {
console.log('📱 Mobile footer layout active');
}
});