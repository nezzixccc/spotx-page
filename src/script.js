const translations = {
    en: {
      "nav-features": "Features",
      "nav-platforms": "Platforms",
      "nav-download": "Download",
      "hero-title": "Listen to Spotify without ads",
      "hero-subtitle": "Spot-X is a universal ad blocker for the Spotify desktop application on Windows, Linux, and Mac",
      "btn-download": "Download for free",
      "btn-learn-more": "Learn more",
      "features-title": "Spot-X Features",
      "feature1-title": "Ad Blocking",
      "feature1-desc": "Completely removes all ad breaks from your music stream",
      "feature2-title": "Cross-platform",
      "feature2-desc": "Works on all major operating systems — Windows, Linux, and Mac",
      "feature3-title": "Easy Installation",
      "feature3-desc": "Simple installation process without complex settings",
      "feature4-title": "Completely Free",
      "feature4-desc": "No payments or subscriptions — use absolutely free",
      "platforms-title": "Supported Platforms",
      "platform1-title": "Windows",
      "platform1-desc": "Compatible with Windows 10 and 11",
      "platform2-title": "macOS",
      "platform2-desc": "Works on all current versions",
      "platform3-title": "Linux",
      "platform3-desc": "Support for popular distributions",
      "download-title": "Download Spot-X",
      "download-desc": "Choose the version for your operating system",
      "download-windows": "Windows",
      "download-macos": "macOS",
      "download-linux": "Linux",
      "github-link": "Source code on GitHub",
      "how-works-title": "How it works",
      "step1-title": "Download",
      "step1-desc": "Get Spot-X for your operating system",
      "step2-title": "Install",
      "step2-desc": "Follow the simple installation instructions",
      "step3-title": "Enjoy",
      "step3-desc": "Listen to music on Spotify without ads",
      "footer-product": "Product",
      "footer-disclaimer": "SpotX is not affiliated with Spotify AB.",
      "footer-description": "A versatile ad-blocker designed for the Spotify desktop application"
    },
    ru: {
      "nav-features": "Возможности",
      "nav-platforms": "Платформы",
      "nav-download": "Скачать",
      "hero-title": "Слушайте музыку в Spotify без рекламы",
      "hero-subtitle": "Spot-X — универсальный блокировщик рекламы для десктопного приложения Spotify на Windows, Linux и Mac",
      "btn-download": "Скачать бесплатно",
      "btn-learn-more": "Узнать больше",
      "features-title": "Возможности Spot-X",
      "feature1-title": "Блокировка рекламы",
      "feature1-desc": "Полностью убирает все рекламные вставки из потока музыки",
      "feature2-title": "Кроссплатформенность",
      "feature2-desc": "Работает на всех основных операционных системах — Windows, Linux и Mac",
      "feature3-title": "Легкая установка",
      "feature3-desc": "Простой процесс установки без сложных настроек",
      "feature4-title": "Полностью бесплатно",
      "feature4-desc": "Никаких платежей или подписок — используйте абсолютно бесплатно",
      "platforms-title": "Поддерживаемые платформы",
      "platform1-title": "Windows",
      "platform1-desc": "Совместимо с Windows 10 и 11",
      "platform2-title": "macOS",
      "platform2-desc": "Работает на всех актуальных версиях",
      "platform3-title": "Linux",
      "platform3-desc": "Поддержка популярных дистрибутивов",
      "download-title": "Скачать Spot-X",
      "download-desc": "Выберите версию для вашей операционной системы",
      "download-windows": "Windows",
      "download-macos": "macOS",
      "download-linux": "Linux",
      "github-link": "Исходный код на GitHub",
      "how-works-title": "Как это работает",
      "step1-title": "Скачайте",
      "step1-desc": "Загрузите Spot-X для вашей операционной системы",
      "step2-title": "Установите",
      "step2-desc": "Следуйте простым инструкциям по установке",
      "step3-title": "Наслаждайтесь",
      "step3-desc": "Слушайте музыку в Spotify без рекламы",
      "footer-product": "Продукт",
      "footer-disclaimer": "Spot-X не связан со Spotify AB.",
      "footer-description": "Универсальный блокировщик рекламы для десктопного приложения Spotify"
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });
  
  function initApp() {
    initScrollReveal();
    initSmootScroll();
    initNavigation();
    initLanguageSwitcher();
    initAnimations();
  }
  
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.reveal-text, .reveal-element').forEach(el => {
      revealObserver.observe(el);
    });
  }
  
  function initNavigation() {
    const header = document.querySelector('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    let lastScrollPosition = 0;
  
    window.addEventListener('scroll', () => {
      const currentScrollPosition = window.pageYOffset;
      
      if (currentScrollPosition > 80) {
        header.classList.add('scrolled');
        
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 200) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScrollPosition = currentScrollPosition;
    });
  
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  function initSmootScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          smoothScrollTo(targetElement, 800);
        }
      });
    });
  }
  
  function smoothScrollTo(element, duration = 800) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const ease = easeOutCubic(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    
    requestAnimationFrame(animation);
  }
  
  function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'en';
    
    applyLanguage(currentLang);
    
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang !== currentLang) {
          switchLanguage(targetLang);
          currentLang = targetLang;
          
          langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === targetLang) {
              button.classList.add('active');
            } else {
              button.classList.remove('active');
            }
          });
        }
      });
    });
  }
  
  function switchLanguage(lang) {
    document.documentElement.lang = lang;
    
    const i18nElements = document.querySelectorAll('[data-i18n]');
    
    i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.classList.add('changing');
        
        setTimeout(() => {
          element.textContent = translations[lang][key];
          element.classList.remove('changing');
        }, 300);
      }
    });
  }
  
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
  
  function initAnimations() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
      heroImage.addEventListener('mousemove', (e) => {
        const rect = heroImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 15;
        const yPercent = (y / rect.height - 0.5) * 8;
        
        const mockup = heroImage.querySelector('.spotify-mockup');
        if (mockup) {
          mockup.style.transform = `rotate3d(${-yPercent/10}, ${xPercent/10}, 0.1, ${Math.sqrt(xPercent**2 + yPercent**2)}deg)`;
        }
      });
      
      heroImage.addEventListener('mouseleave', () => {
        const mockup = heroImage.querySelector('.spotify-mockup');
        if (mockup) {
          mockup.style.transform = 'rotate3d(0.5, -0.8, 0.1, 15deg)';
        }
      });
    }
    
    const floatingShapes = document.querySelectorAll('.floating-shape');
    if (floatingShapes.length) {
      floatingShapes.forEach(shape => {
        const randomX = Math.random() * 50 - 25;
        const randomY = Math.random() * 50 - 25;
        const randomRotate = Math.random() * 360;
        const randomScale = 0.8 + Math.random() * 0.4;
        const randomDuration = 15 + Math.random() * 15;
        
        shape.style.animation = `float ${randomDuration}s linear infinite`;
        shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
      });
    }
    
    const cards = document.querySelectorAll('.feature-card, .platform-card, .download-option');
    cards.forEach(card => {
      card.addEventListener('mouseenter', cardMouseEnter);
      card.addEventListener('mousemove', cardMouseMove);
      card.addEventListener('mouseleave', cardMouseLeave);
    });
  }
  
  function cardMouseEnter(e) {
    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
  }
  
  function cardMouseMove(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  }
  
  function cardMouseLeave(e) {
    this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease';
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  }