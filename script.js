const lessons = {
  1: { title: 'Introducción al RETIE', src: 'SEMANA%201/RETIE_2026__Introducci%C3%B3n.mp4' },
  2: { title: 'Riesgo y peligro', src: 'SEMANA%201/RETIE%202026%20Riesgo%20y%20Peligro.mp4' },
  3: { title: 'El accidente', src: 'SEMANA%201/RETIE_2026__El_Accidente.mp4' }
};
const mediaModal = document.querySelector('#media-modal');
const quizModal = document.querySelector('#quiz-modal');
document.querySelectorAll('.start-lesson').forEach(button => button.addEventListener('click', () => {
  const lesson = lessons[button.closest('.lesson-card').dataset.lesson];
  document.querySelector('#modal-content').innerHTML = `<h2 class="video-modal-title">${lesson.title}</h2><video controls autoplay><source src="${lesson.src}" type="video/mp4">Tu navegador no puede reproducir este video.</video>`;
  mediaModal.showModal();
}));
document.querySelectorAll('.resource').forEach(resource => resource.addEventListener('click', () => {
  const file = resource.dataset.resource;
  document.querySelector('#modal-content').innerHTML = `<img src="SEMANA%201/${encodeURIComponent(file)}" alt="Recurso de estudio RETIE">`;
  mediaModal.showModal();
}));
document.querySelectorAll('.close-modal').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));
mediaModal.addEventListener('close', () => {
  const video = mediaModal.querySelector('video');
  if (video) { video.pause(); video.src = ''; video.load(); }
  document.querySelector('#modal-content').innerHTML = '';
});
const questions = [
  { q: '¿Qué describe mejor un peligro?', a: ['La probabilidad de un accidente', 'Una fuente o situación con potencial de causar daño', 'Una medida de protección'], correct: 1, note: 'Correcto. El peligro existe por sí mismo, aun sin una persona expuesta.' },
  { q: 'El riesgo depende principalmente de…', a: ['La probabilidad y la severidad de las consecuencias', 'El color de la señalización', 'La edad de la instalación'], correct: 0, note: 'Correcto. Riesgo = probabilidad × consecuencias.' },
  { q: '¿Cuál es el propósito central del RETIE?', a: ['Aumentar el consumo eléctrico', 'Prevenir riesgos de origen eléctrico y proteger la vida', 'Reemplazar todas las normas técnicas'], correct: 1, note: 'Correcto. El RETIE busca proteger vida, bienes y ambiente.' }
];
let step = 0, score = 0;
function renderQuiz() {
  const item = questions[step];
  document.querySelector('#quiz-content').innerHTML = `<div class="quiz-wrap"><p class="quiz-kicker">EVALUACIÓN · SEMANA 01</p><p class="quiz-progress">PREGUNTA ${step + 1} DE ${questions.length}</p><h2>${item.q}</h2><div class="answers">${item.a.map((answer, index) => `<button class="answer" data-index="${index}">${answer}</button>`).join('')}</div><p class="quiz-feedback"></p></div>`;
  document.querySelectorAll('.answer').forEach(answer => answer.addEventListener('click', checkAnswer));
}
function checkAnswer(event) {
  const selection = Number(event.currentTarget.dataset.index), item = questions[step];
  document.querySelectorAll('.answer').forEach((button, index) => { button.disabled = true; if (index === item.correct) button.classList.add('correct'); });
  const feedback = document.querySelector('.quiz-feedback');
  if (selection === item.correct) { score++; feedback.textContent = item.note; } else { event.currentTarget.classList.add('wrong'); feedback.textContent = `Revisa el concepto. ${item.note}`; }
  const next = document.createElement('button'); next.className = 'button primary next-question'; next.innerHTML = step === questions.length - 1 ? 'Ver resultado <span>→</span>' : 'Siguiente pregunta <span>→</span>';
  next.addEventListener('click', () => { step++; step === questions.length ? showResult() : renderQuiz(); }); document.querySelector('.quiz-wrap').append(next);
}
function showResult() { document.querySelector('#quiz-content').innerHTML = `<div class="completed"><span class="assessment-icon">✓</span><p class="quiz-kicker">EVALUACIÓN COMPLETADA</p><h2>${score}/${questions.length} respuestas correctas</h2><p class="quiz-feedback">Has terminado la comprobación de la Semana 1. Sigue repasando los recursos para afianzar los conceptos.</p><button class="button primary" onclick="document.querySelector('#quiz-modal').close()">Cerrar <span>→</span></button></div>`; }
document.querySelector('#quiz-open').addEventListener('click', () => { step = 0; score = 0; renderQuiz(); quizModal.showModal(); });
