const lessons = {
  1: { title: 'Introducción al RETIE', src: 'SEMANA%201/RETIE_2026__Introducci%C3%B3n.mp4' },
  2: { title: 'Riesgo y peligro', src: 'SEMANA%201/RETIE%202026%20Riesgo%20y%20Peligro.mp4' },
  3: { title: 'El accidente', src: 'SEMANA%201/RETIE_2026__El_Accidente.mp4' },
  4: { title: 'Título 3 del RETIE', src: 'SEMANA%201/RETIE_Titulo_3.mp4' }
};

const STORAGE_KEY = 'retie_progress';
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"lessons":{},"quiz":0}');

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateGlobalProgress();
}

function updateGlobalProgress() {
  const totalLessons = Object.keys(lessons).length;
  const completedLessons = Object.keys(progress.lessons).length;
  const quizDone = progress.quiz > 0 ? 1 : 0;
  const total = totalLessons + 1;
  const completed = completedLessons + quizDone;
  const pct = Math.round((completed / total) * 100);
  const fill = document.getElementById('globalProgress');
  const text = document.getElementById('progressText');
  const label = document.getElementById('progressLabel');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
  if (label) {
    if (pct === 0) label.textContent = 'Aún no has iniciado';
    else if (pct < 50) label.textContent = 'Buen comienzo, sigue así';
    else if (pct < 100) label.textContent = 'Vas por buen camino';
    else label.textContent = '¡Curso completado! 🎉';
  }
}

function markLessonComplete(lessonId) {
  progress.lessons[lessonId] = true;
  saveProgress();
  const card = document.querySelector(`.lesson-card[data-lesson="${lessonId}"]`);
  if (card) {
    card.classList.add('completed');
    const btn = card.querySelector('.start-lesson');
    if (btn) btn.innerHTML = '✓ Completada <span>→</span>';
  }
}

function restoreProgress() {
  Object.keys(progress.lessons).forEach(id => {
    const card = document.querySelector(`.lesson-card[data-lesson="${id}"]`);
    if (card) {
      card.classList.add('completed');
      const btn = card.querySelector('.start-lesson');
      if (btn) btn.innerHTML = '✓ Completada <span>→</span>';
    }
  });
  updateGlobalProgress();
}

const mediaModal = document.querySelector('#media-modal');
const quizModal = document.querySelector('#quiz-modal');
const certificateModal = document.querySelector('#certificate-modal');

document.querySelectorAll('.start-lesson').forEach(button => button.addEventListener('click', () => {
  const lessonId = button.closest('.lesson-card').dataset.lesson;
  const lesson = lessons[lessonId];
  document.querySelector('#modal-content').innerHTML = `<h2 class="video-modal-title">${lesson.title}</h2><video controls autoplay><source src="${lesson.src}" type="video/mp4">Tu navegador no puede reproducir este video.</video><div class="lesson-actions"><button class="button primary" id="markComplete">Marcar como completada <span>→</span></button><button class="button text-button" id="nextLesson">Siguiente lección <span>→</span></button></div>`;
  mediaModal.showModal();
  document.getElementById('markComplete').addEventListener('click', () => {
    markLessonComplete(lessonId);
    mediaModal.close();
  });
  document.getElementById('nextLesson').addEventListener('click', () => {
    mediaModal.close();
    const nextId = Number(lessonId) + 1;
    if (lessons[nextId]) {
      const nextBtn = document.querySelector(`.lesson-card[data-lesson="${nextId}"] .start-lesson`);
      if (nextBtn) nextBtn.click();
    }
  });
}));

document.querySelectorAll('.resource').forEach(resource => resource.addEventListener('click', () => {
  const file = resource.dataset.resource;
  if (file.endsWith('.mp4')) {
    document.querySelector('#modal-content').innerHTML = `<h2 class="video-modal-title">Video: Amenaza</h2><video controls autoplay><source src="SEMANA%201/${encodeURIComponent(file)}" type="video/mp4">Tu navegador no puede reproducir este video.</video>`;
  } else {
    document.querySelector('#modal-content').innerHTML = `<img src="SEMANA%201/${encodeURIComponent(file)}" alt="Recurso de estudio RETIE">`;
  }
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
  { q: '¿Cuál es el propósito central del RETIE?', a: ['Aumentar el consumo eléctrico', 'Prevenir riesgos de origen eléctrico y proteger la vida', 'Reemplazar todas las normas técnicas'], correct: 1, note: 'Correcto. El RETIE busca proteger vida, bienes y ambiente.' },
  { q: 'En una obra, un cable energizado sin aislar representa…', a: ['Un peligro', 'Un riesgo controlado', 'Una condición segura'], correct: 0, note: 'Correcto. Es una fuente con potencial de daño: un peligro.' },
  { q: '¿Qué libro del RETIE contiene las definiciones y generalidades?', a: ['Libro 2', 'Libro 1', 'Libro 4'], correct: 1, note: 'Correcto. El Libro 1 cubre generalidades y definiciones.' },
  { q: '¿Quién es responsable de cumplir el RETIE en una construcción?', a: ['Solo el diseñador', 'Solo el constructor', 'Todos los que intervienen en la instalación'], correct: 2, note: 'Correcto. Diseñadores, constructores, inspectores y usuarios comparten responsabilidad.' },
  { q: '¿Qué documento certifica que una instalación cumple el RETIE?', a: ['Declaración de Cumplimiento y Dictamen de Inspección', 'Factura de compra', 'Contrato de obra'], correct: 0, note: 'Correcto. El Dictamen de Inspección es emitido por un organismo acreditado.' },
  { q: 'Si un trabajador se acerca a una parte energizada sin protección, el riesgo…', a: ['Disminuye', 'Aumenta', 'Permanece igual'], correct: 1, note: 'Correcto. La exposición al peligro aumenta el riesgo.' },
  { q: '¿Qué es una Declaración de Cumplimiento?', a: ['Un documento que afirma que la instalación cumple el RETIE', 'Un permiso de construcción', 'Un seguro de responsabilidad civil'], correct: 0, note: 'Correcto. Es el documento que declara el cumplimiento del reglamento.' },
  { q: '¿Cada cuánto debe revisarse una instalación comercial según el RETIE?', a: ['Cada 5 años', 'Anualmente', 'Nunca'], correct: 1, note: 'Correcto. Las instalaciones comerciales requieren revisión periódica anual.' }
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
  if (selection === item.correct) { score++; feedback.textContent = item.note; } else { event.currentTarget.classList.add('wrong'); feedback.textContent = `Incorrecto. ${item.note}`; }
  const next = document.createElement('button'); next.className = 'button primary next-question'; next.innerHTML = step === questions.length - 1 ? 'Ver resultado <span>→</span>' : 'Siguiente pregunta <span>→</span>';
  next.addEventListener('click', () => { step++; step === questions.length ? showResult() : renderQuiz(); }); document.querySelector('.quiz-wrap').append(next);
}

function showResult() {
  progress.quiz = score;
  saveProgress();
  const passed = score >= 7;
  document.querySelector('#quiz-content').innerHTML = `<div class="completed"><span class="assessment-icon">${passed ? '🏆' : '📚'}</span><p class="quiz-kicker">EVALUACIÓN COMPLETADA</p><h2>${score}/${questions.length} respuestas correctas</h2><p class="quiz-feedback">${passed ? '¡Felicitaciones! Has aprobado la evaluación.' : 'Necesitas al menos 7 respuestas correctas. Repasa los recursos e inténtalo de nuevo.'}</p><div class="result-actions">${passed ? '<button class="button primary" id="showCertificate">Ver certificado <span>→</span></button>' : ''}<button class="button text-button" onclick="document.querySelector(\'#quiz-modal\').close()">Cerrar <span>→</span></button></div></div>`;
  if (passed) {
    document.getElementById('showCertificate').addEventListener('click', showCertificate);
  }
}

function showCertificate() {
  const today = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('certificate-content').innerHTML = `
    <div class="certificate">
      <div class="certificate-border">
        <div class="certificate-header">
          <img src="LOGOTIPO%20DE%20RETIE%20LEARNING.png" alt="RETIE Learning" class="certificate-logo">
          <h2>Certificado de Finalización</h2>
          <p class="certificate-sub">RETIE para Constructores · Semana 1</p>
        </div>
        <div class="certificate-body">
          <p class="certificate-text">Se certifica que</p>
          <p class="certificate-name">_______________________</p>
          <p class="certificate-text">ha completado satisfactoriamente el curso</p>
          <p class="certificate-course">Fundamentos de Seguridad Eléctrica según el RETIE</p>
          <p class="certificate-detail">Con una calificación de ${score}/${questions.length} en la evaluación final</p>
        </div>
        <div class="certificate-footer">
          <p class="certificate-date">Fecha: ${today}</p>
          <p class="certificate-ref">Resolución 40117 de 2024 · Resolución 40284 de 2026</p>
        </div>
      </div>
      <button class="button primary" onclick="window.print()">Imprimir / Guardar PDF <span>→</span></button>
    </div>`;
  certificateModal.showModal();
}

document.querySelector('#quiz-open').addEventListener('click', () => { step = 0; score = 0; renderQuiz(); quizModal.showModal(); });

restoreProgress();
