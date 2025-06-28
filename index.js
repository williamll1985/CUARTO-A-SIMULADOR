
const root = document.getElementById('root');

const questions = [
  {
    etapa: "Diagnóstico Inicial",
    pregunta: "¿Cuál sería la mejor decisión para iniciar el diagnóstico de Cuarto A?",
    opciones: [
      "Analizar los KPIs clave",
      "Despedir al personal",
      "Reducir inventario de inmediato",
      "Eliminar descuentos sin análisis"
    ],
    correcta: 0,
    puntos: 3
  },
  {
    etapa: "Etapa 1",
    pregunta: "¿Qué acción inicial ayudaría más a revertir la baja conversión?",
    opciones: [
      "Capacitar al equipo de ventas",
      "Reducir horario de atención",
      "Eliminar promociones",
      "Aumentar precios sin justificación"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 2",
    pregunta: "¿Qué estrategia ayudaría a incrementar el tráfico a la tienda?",
    opciones: [
      "Usar influencers locales",
      "Cerrar temporalmente",
      "Reducir marketing digital",
      "Quitar señalética"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 3",
    pregunta: "¿Cómo podrías aumentar el ticket promedio?",
    opciones: [
      "Rediseñar la vitrina principal",
      "Eliminar productos de alto margen",
      "Cerrar el probador",
      "Reducir personal en caja"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 4",
    pregunta: "¿Qué acción fomenta la venta cruzada?",
    opciones: [
      "Lanzar promociones cruzadas",
      "No agrupar productos",
      "Eliminar combos",
      "Vender solo productos individuales"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 5",
    pregunta: "¿Cómo podrías atraer nuevos clientes?",
    opciones: [
      "Invertir en publicidad digital",
      "Suspender todas las campañas",
      "Reducir visibilidad",
      "Quitar promociones online"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 6",
    pregunta: "¿Qué táctica incentiva la compra en volumen?",
    opciones: [
      "Implementar descuentos por volumen",
      "Eliminar promociones",
      "Aumentar precios",
      "Vender sin beneficios"
    ],
    correcta: 0,
    puntos: 1
  },
  {
    etapa: "Etapa 7",
    pregunta: "¿Cómo mejorarías la experiencia final del cliente?",
    opciones: [
      "Optimizar proceso de pago",
      "Reducir personal de caja",
      "Ocultar precios",
      "Desactivar pasarelas de pago"
    ],
    correcta: 0,
    puntos: 1
  }
];

let current = 0;
let selections = [];
let score = 0;

function render() {
  root.innerHTML = "";

  if (current < questions.length) {
    const q = questions[current];
    const container = document.createElement("div");
    container.innerHTML = `
      <h2>${q.etapa}</h2>
      <p>${q.pregunta}</p>
    `;

    q.opciones.forEach((op, i) => {
      const btn = document.createElement("button");
      btn.textContent = op;
      btn.style.margin = "5px";
      btn.onclick = () => {
        selections.push(i);
        if (i === q.correcta) score += q.puntos;
        current++;
        render();
      };
      container.appendChild(btn);
    });

    root.appendChild(container);
  } else {
    const resultado = document.createElement("div");
    resultado.innerHTML = `
      <h2>Resultado Final</h2>
      <p>Tu puntaje fue: <strong>${score}/10</strong></p>
      <p style="color:${score >= 7 ? 'green' : 'orange'};">
        ${score >= 7 ? "🎉 ¡Felicitaciones! Buen análisis y toma de decisiones." : "⚠️ Puedes mejorar. Revisa los KPIs y vuelve a intentarlo."}
      </p>
    `;
    root.appendChild(resultado);
  }
}

render();
