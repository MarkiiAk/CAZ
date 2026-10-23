'use strict';
/* Sitio demostrativo: fotografías y jugadores ficticios procedentes del mockup de referencia. */
const PATHS={
 'ball':'<circle cx="12" cy="12" r="9"/><path d="m9 3 3 3 3-3M4.4 7.4l3.1.6 1.2 3.5-3 2.5M19.6 7.4l-3.1.6-1.2 3.5 3 2.5M8.6 11.4l3.4-2 3.4 2-.8 4.1h-5.2zM7 19l1.6-3.5M17 19l-1.6-3.5"/>',
 'users':'<circle cx="9" cy="8" r="3"/><path d="M2 20v-2a6 6 0 0 1 12 0v2H2ZM17 11a3 3 0 1 0-2-5.2M18 14a5 5 0 0 1 4 5v1h-5"/>',
 'shield':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
 'globe':'<circle cx="12" cy="12" r="9"/><path d="M3.3 10H21M4 16h16M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18Z"/>',
 'medical':'<rect x="4" y="6" width="16" height="15" rx="2"/><path d="M9 6V3h6v3M12 10v7M8.5 13.5h7"/>',
 'arrow-right':'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 'arrow-left':'<path d="M19 12H5m6 6-6-6 6-6"/>',
 'chevron-right':'<path d="m9 18 6-6-6-6"/>',
 'search':'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
 'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
 'trophy':'<path d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v3a4 4 0 0 0 4 4M17 6h3v3a4 4 0 0 1-4 4M12 14v5M8 21h8M9 19h6"/>',
 'foot':'<path d="m3 16 5 4h12l2-5-4-2-3-4-3 3-6 2-3 2Z"/><path d="m14 10 3 4M10 12l3 4M6 16l3 2"/>',
 'star':'<path d="m12 2 3.1 6.4 7.1 1-5.1 5 .9 7.1-6-3.3-6 3.3.9-7.1-5.1-5 7.1-1Z"/>',
 'handshake':'<path d="m2 10 6-5 4 2 4-2 6 5-6 7-4-3-4 3-6-7ZM6 15l3 3 2-1M15 16l-2 2-2-1"/>',
 'heart':'<path d="M20.8 4.9a5.3 5.3 0 0 0-7.5 0L12 6.2l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 21l8.8-8.6a5.3 5.3 0 0 0 0-7.5Z"/>',
 'share':'<circle cx="18" cy="5" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="19" r="2"/><path d="m8 11 8-5M8 13l8 5"/>',
 'map-pin':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
 'phone':'<path d="M22 17v3a2 2 0 0 1-2 2C10 22 2 14 2 4a2 2 0 0 1 2-2h3l2 5-2 2a16 16 0 0 0 8 8l2-2 5 2Z"/>',
 'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
 'menu':'<path d="M3 6h18M3 12h18M3 18h18"/>',
 'x':'<path d="M5 5 19 19M19 5 5 19"/>',
 'image':'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="m21 16-6-6L4 21"/>',
 'check':'<path d="m5 12 4 4L19 6"/>',
 'sparkles':'<path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7Z"/>',
 'book':'<path d="M12 6c-3-2-7-2-10-1v14c3-1 7-1 10 1 3-2 7-2 10-1V5c-3-1-7-1-10 1Zm0 0v14"/>',
 'award':'<circle cx="12" cy="8" r="6"/><path d="m8 13-2 9 6-3 6 3-2-9"/>',
 'goal':'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M8 4v16M16 4v16M3 10h18M3 15h18"/>',
 'chart':'<path d="M4 21V14h4v7M10 21V9h4v12M16 21V3h4v18"/>',
 'lock':'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
 'whatsapp':'<path d="M20.5 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5a8.5 8.5 0 1 1 15.5-4.5Z"/><path d="M8 9c1 3 3 5 6 6l2-1"/>'
};
function icons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{const name=el.getAttribute('data-icon');const svg=PATHS[name]||PATHS.star;el.innerHTML=`<svg class="ico" aria-hidden="true" viewBox="0 0 24 24">${svg}</svg>`;el.removeAttribute('data-icon');});}
const PLAYERS=[
 {id:1,name:'Mateo Sánchez',number:10,year:'2014',category:'Infantil',position:'Delantero',picture:'kid-01.webp',quote:'Me gusta el fútbol porque me divierto con mis amigos y siempre quiero aprender más.',dream:'Ser futbolista profesional',power:'¡Nunca rendirme!',favorite:'El trabajo en equipo',stat:[12,8,4,18,'100%']},
 {id:2,name:'Emiliano Torres',number:7,year:'2014',category:'Infantil',position:'Medio',picture:'kid-02.webp',quote:'Lo mejor de entrenar es jugar con mis compañeros.',dream:'Jugar en un gran estadio',power:'¡Dar lo mejor!',favorite:'Aprender cosas nuevas',stat:[10,5,6,17,'98%']},
 {id:3,name:'Santiago López',number:9,year:'2015',category:'Infantil',position:'Delantero',picture:'kid-03.webp',quote:'Me encanta correr y celebrar con el equipo.',dream:'Conocer un estadio enorme',power:'¡Mi energía!',favorite:'Marcar goles con mis amigos',stat:[9,6,3,16,'100%']},
 {id:4,name:'Diego Ramírez',number:8,year:'2015',category:'Infantil',position:'Medio',picture:'kid-04.webp',quote:'En cada entrenamiento aprendo algo nuevo.',dream:'Levantar una copa',power:'¡Mi entusiasmo!',favorite:'Hacer nuevos amigos',stat:[11,4,6,18,'95%']},
 {id:5,name:'Lucas Martínez',number:4,year:'2016',category:'Menores',position:'Defensa',picture:'kid-05.webp',quote:'Me gusta ayudar a mis amigos cuando jugamos.',dream:'Jugar una final',power:'¡Cuidar a mi equipo!',favorite:'Defender juntos',stat:[8,2,3,14,'100%']},
 {id:6,name:'Alan Cruz',number:11,year:'2016',category:'Menores',position:'Delantero',picture:'kid-06.webp',quote:'Mi parte favorita es que todos jugamos juntos.',dream:'Ser campeón con mis amigos',power:'¡Mi alegría!',favorite:'Los partidos divertidos',stat:[8,5,2,13,'92%']},
 {id:7,name:'Leonardo Vega',number:6,year:'2016',category:'Menores',position:'Medio',picture:'kid-07.webp',quote:'El fútbol me enseña a intentarlo otra vez.',dream:'Jugar en el Cruz Azul',power:'¡Mi constancia!',favorite:'Pasar el balón',stat:[9,3,5,16,'96%']},
 {id:8,name:'Sebastián Ruiz',number:14,year:'2017',category:'Menores',position:'Defensa',picture:'kid-08.webp',quote:'Me gusta aprender y jugar cada semana.',dream:'Ser portero por un día',power:'¡Mis ganas de jugar!',favorite:'Entrenar con amigos',stat:[7,1,2,12,'100%']}
];
function selectedPlayer(){const query=new URLSearchParams(location.search);let id=Number(query.get('id'));return PLAYERS.find(p=>p.id===id)||PLAYERS[0];}
function fillProfile(){const p=selectedPlayer();document.querySelectorAll('[data-player]').forEach(el=>{const k=el.getAttribute('data-player');if(k==='first-name')el.textContent=p.name.split(' ')[0];else if(k==='last-name')el.textContent=p.name.split(' ').slice(1).join(' ');else if(k.startsWith('stat-'))el.textContent=p.stat[Number(k.split('-')[1])];else el.textContent=p[k]||'';});
 document.querySelectorAll('[data-player-pic]').forEach(im=>{im.src=`assets/img/${p.id===1?'mateo-portrait.webp':p.picture}`;im.alt=`Retrato ilustrativo de ${p.name}`;});
 document.querySelectorAll('[data-player-link]').forEach(el=>{el.href=`${el.getAttribute('data-player-link')}.html?id=${p.id}`;});
 document.title=`${p.name} #${p.number} | Cruz Azul Tultepec · Demo`;
}
function initDirectory(){const search=document.getElementById('search-player');const yr=document.getElementById('year-filter');const cat=document.getElementById('category-filter');if(!search||!yr||!cat)return;
 const cards=[...document.querySelectorAll('.student-card')];function filter(){const t=search.value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');let n=0;cards.forEach(el=>{const s=el.dataset.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'');const show=s.includes(t)&&(!yr.value||el.dataset.year===yr.value)&&(!cat.value||el.dataset.category===cat.value);el.hidden=!show;if(show)n++;});document.getElementById('empty-state').hidden=n>0;document.getElementById('result-count').textContent=`${n} alumno${n===1?'':'s'} en esta vista`;}[search,yr,cat].forEach(i=>i.addEventListener('input',filter));filter();}
function initForm(){document.querySelectorAll('form[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const values=new FormData(form);let msg=`Hola, me gustaría recibir información de la Academia Cruz Azul Tultepec.\n\n`;for(const [key,value] of values.entries()){if(value&&key!=='honey')msg+=`${key}: ${value}\n`;}msg+='\nMensaje preparado desde el sitio demostrativo.';
 const href=`https://wa.me/525570530373?text=${encodeURIComponent(msg)}`;window.open(href,'_blank','noopener,noreferrer');const status=form.querySelector('.form-status');if(status){status.textContent='Se abrió WhatsApp con tu mensaje listo. Debes pulsar Enviar para contactar a la academia.';status.classList.add('visible');}}));}
function initGallery(){const lb=document.querySelector('.lightbox');if(!lb)return;const inner=lb.querySelector('img');document.querySelectorAll('[data-lightbox]').forEach(img=>{img.addEventListener('click',()=>{inner.src=img.src;inner.alt=img.alt;lb.classList.add('active');document.body.style.overflow='hidden';});img.setAttribute('tabindex','0');img.setAttribute('role','button');img.setAttribute('aria-label','Ampliar fotografía');img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();img.click();}});});const close=()=>{lb.classList.remove('active');document.body.style.overflow='';};lb.querySelector('.lightbox-close').addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
function initNav(){const btn=document.querySelector('.nav-toggle'),list=document.querySelector('.nav-list');if(!btn||!list)return;btn.addEventListener('click',()=>{const open=list.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.innerHTML=`<svg class="ico" aria-hidden="true" viewBox="0 0 24 24">${open?PATHS.x:PATHS.menu}</svg>`;});}
function initShare(){document.querySelectorAll('[data-share]').forEach(btn=>btn.addEventListener('click',async()=>{const p=selectedPlayer();try{if(navigator.share){await navigator.share({title:p.name+' | Cruz Azul Tultepec',url:location.href});}else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);btn.textContent='¡Enlace copiado!';}else{window.prompt('Copia el enlace:',location.href);}}catch(e){if(e.name!=='AbortError')window.prompt('Copia el enlace:',location.href);}}));}
document.addEventListener('DOMContentLoaded',()=>{icons();initNav();initDirectory();initForm();initGallery();initShare();if(document.body.classList.contains('profile-page'))fillProfile();});
