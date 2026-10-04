document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); nav.style.display = open ? 'none' : 'flex'; nav.style.position = 'absolute'; nav.style.top = '70px'; nav.style.left = '0'; nav.style.right = '0'; nav.style.background = '#f7f4ee'; nav.style.padding = '20px'; nav.style.flexDirection = 'column'; nav.style.alignItems = 'flex-start'; nav.style.zIndex = '9999'; nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; nav.style.borderRadius = '4px'; nav.style.transition = 'all 0.3s ease-in-out'; });
