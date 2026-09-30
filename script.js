var COL = { 
  "Rajis": "#c2306b", 
  "Chava": "#e0783a", 
  "Oliver": "#3a78e0", 
  "Chachis": "#2a9d6f",
  "Pensamiento": "#9c72e2"
};

// Rutas de Imágenes por defecto
var PATH_BG = "imagenes/fondos/";
var PATH_CHAR = "imagenes/personajes/";

// Estructura narrativa: [Personaje, Texto, ImagenDelPersonaje]
var SC = {
  r1: { 
    bg: PATH_BG + "calle.jpg", 
    l: [
      ["N", "Lunes, 11:30 am. El sol empieza a picar. Llevas más de dos horas parada afuera de la universidad con Oliver y Chachis.", null],
      ["Chava", "(mensaje) «Ando con los compas resolviendo unas cosas carnala, al rato te busco 😘»", PATH_CHAR + "chava_fresco.png"],
      ["Oliver", "Rajis... dime que no te acaba de cancelar otra vez. Es la tercera vez esta semana.", PATH_CHAR + "oliver_preocupado.png"],
      ["Chachis", "Y siempre te pone el emoji del beso al final para desarmarte y que no le reclames nada.", PATH_CHAR + "chachis_indignada.png"],
      ["Rajis", "(Sientes ese nudo en el estómago. Sabes que tienen razón, pero admitirlo se siente como fallarte).", PATH_CHAR + "rajis_triste.png"]
    ], 
    c: [
      ["«Es que anda realmente ocupado... sí me va a buscar más tarde»", "r2", 0, 1, "Justificarlo amortigua el dolor, pero el hecho no cambia: te volvió a dejar tirada."],
      ["«La neta sí me dolió... ya me cansé de esperar»", "r2", 1, 0, "Nombrar lo que sientes sin esconderlo es el primer paso para dejar de aguantar."]
    ]
  },

  r2: { 
    bg: PATH_BG + "calle.jpg",
    l: [
      ["Chachis", "Amiga, te trata con la punta del pie. ¿Cuándo fue la última vez que te preguntócómo estabas?", PATH_CHAR + "chachis_indignada.png"],
      ["Rajis", "(Intentas buscar un recuerdo reciente en tu cabeza... no encuentras ninguno).", PATH_CHAR + "rajis_pensativa.png"],
      ["Oliver", "No te lo decimos por joder, Rajis. Te lo decimos porque nos da coraje ver cómo te apagas.", PATH_CHAR + "oliver_serio.png"]
    ], 
    c: [
      ["«No es tan malo, ustedes solo ven cuando nos peleamos, también tiene cosas bonitas»", "r3", 0, 1, "Las migajas de cariño saben a gloria cuando tienes hambre, pero no alimentan."],
      ["«Tienen razón... déjenme pensarlo bien, necesito procesarlo»", "r3", 1, 0, "Escuchar a tus amigos sin ponerte a la defensiva ya es un avance."]
    ]
  },

  r3: { 
    bg: PATH_BG + "noche.jpg", 
    l: [
      ["N", "3:00 pm. Chava aparece caminando despacio, despeinado y oliendo a cerveza.", null],
      ["Chava", "Ay ya, Rajis, no me pongas esa cara de drama. Ya vine, ¿no?", PATH_CHAR + "chava_descarado.png"],
      ["Chava", "Ven acá, bebé... me haces mucha falta.", PATH_CHAR + "chava_descarado.png"],
      ["Rajis", "(Te abraza por la cintura. Ese «me haces falta» te reconforta por un segundo, pero sientes vacío).", PATH_CHAR + "rajis_triste.png"]
    ], 
    c: [
      ["Abrazarlo fuerte y olvidar que te dejó plantada", "r4", -1, 2, "Un abrazo a destiempo fue suficiente para borrar horas de falta de respeto."],
      ["Darte un paso atrás: «Me dejaste esperando dos horas sin avisar. Eso no está bien»", "r4", 2, 0, "Pusiste un límite firme y claro. Eso cuesta, pero construye."]
    ]
  },

  r4: { 
    bg: PATH_BG + "cuarto.jpg", 
    l: [
      ["N", "Al día siguiente le envías un mensaje explicándole por qué sus actitudes te lastiman.", null],
      ["Chava", "(nota de voz) «Neta qué intensa eres, Rajis. Por eso me desespero y me alejo de ti»", PATH_CHAR + "chava_descarado.png"],
      ["Rajis", "(En menos de tres minutos, dio un giro a la conversación y ahora la culpable eres tú).", PATH_CHAR + "rajis_enojada.png"]
    ], 
    c: [
      ["«Perdón... tienes razón, a veces soy muy dramática e intensa»", "r5", -1, 1, "Pedir perdón por expresar lo que sientes te enseña a callarte por complacer."],
      ["«No voy a pedir perdón por decirte cómo me siento. Lo que hiciste me dolió»", "r5", 2, -1, "No permitiste que distorsionara la realidad."]
    ]
  },

  r5: { 
    bg: PATH_BG + "cuarto.jpg", 
    l: [
      ["Oliver", "Rajis, no te pedimos que lo mandes a la fregada hoy mismo si no estás lista.", PATH_CHAR + "oliver_serio.png"],
      ["Chachis", "Haz una lista en tu cuaderno: escribe qué te suma esta relación y qué te quita.", PATH_CHAR + "chachis_apoyando.png"],
      ["Rajis", "(Ves la hoja en blanco. De un lado tienes promesas; del otro, ausencias).", PATH_CHAR + "rajis_pensativa.png"]
    ], 
    c: [
      ["Hacer la lista honestamente en tu cuaderno", "r6", 1, 0, "Poner los hechos en papel disuelve la fantasía."],
      ["Enojarte con tus amigos y dejar de contestarles", "r6", -1, 1, "Aislarte de quien te cuida hace que las migajas parezcan banquete."]
    ]
  },

  r6: { 
    bg: PATH_BG + "noche.jpg", 
    l: [
      ["N", "Pasan cuatro días sin saber de Chava. De repente, el teléfono vibra a medianoche.", null],
      ["Chava", "(mensaje) «Te extraño un buen. ¿Paso por ti ahorita o qué? 😘»", PATH_CHAR + "chava_fresco.png"],
      ["Rajis", "(Te tiemblan las manos. Es el patrón de siempre: desaparecer y volver).", PATH_CHAR + "rajis_triste.png"]
    ], 
    c: [
      ["Contestar en dos segundos: «¡Sí, dale, te espero abajo!»", "r7", -1, 2, "Responder de inmediato le enseña que siempre te encontrará disponible."],
      ["Apagar el celular y no contestar esa noche", "r7", 1, 0, "No reaccionar impulsivamente te devuelve el control."],
      ["«Podemos vernos mañana a hablar, pero necesito que cumplas lo que dices»", "r7", 2, 0, "Pusiste una condición madura. Ahora verás si cumple."]
    ]
  },

  r7: { 
    bg: PATH_BG + "plaza.jpg", 
    l: [
      ["N", "Se ven en la plaza. Chava llega con unas flores marchitas.", null],
      ["Chava", "Te prometo que ahora sí voy a cambiar, Rajis. Dame otra oportunidad.", PATH_CHAR + "chava_arrepentido.png"],
      ["Oliver", "(Oliver y Chachis te observan a lo lejos en una mesa del café, apoyándote).", PATH_CHAR + "oliver_preocupado.png"]
    ], 
    c: [
      ["«Está bien, te creo... una última oportunidad»", "rf", -2, 2, "Sin acciones diferentes, es la misma historia repetida con flores."],
      ["«Hasta aquí, Chava. Merezco a alguien que esté presente sin rogárselo»", "rf", 3, -1, "Elegirte a ti misma duele al principio, pero te libera."],
      ["«Demuéstralo con hechos, no con palabras. Yo voy a seguir con mi vida»", "rf", 1, 0, "Te pusiste en primer lugar y medirás con hechos."]
    ]
  },

  rf: { e: 1 }
};

var END = [
  {
    title: "💔 Final de Migajas",
    desc: "Te quedaste atrapada en el ciclo. Te aferraste a atenciones esporádicas y fuiste cediendo hasta olvidarte de ti. Salir lleva tiempo, apóyate en quienes te quieren bien.",
    img: PATH_CHAR + "rajis_triste.png"
  },
  {
    title: "⚡ Final en Proceso de Cambio",
    desc: "Empiezas a ver con claridad la situación. Aunque da miedo, diste los primeros pasos. Sigue midiendo a las personas por hechos y no por promesas.",
    img: PATH_CHAR + "rajis_pensativa.png"
  },
  {
    title: "✨ Final de Banquete Propio",
    desc: "Te elegiste a ti misma. Oliver y Chachis te abrazan fuerte y van por tacos. Las migajas se quedaron en el pasado.",
    img: PATH_CHAR + "rajis_feliz.png"
  }
];

// Lógica de Renderizado
var app = document.getElementById("app");
var st, cur, li, fbk, nextId;

function esc(t) { return String(t).replace(/</g, "&lt;"); }

function menu() {
  app.innerHTML =
    '<h1>Migajas</h1>' +
    '<p class="sub">Eres <strong>Rajis</strong>. Sales con Chava, que te trata mal y te da cariño a cuentagotas. Oliver y Chachis te dicen que lo dejes. ¿Qué camino tomarás?</p>' +
    '<button class="go" id="st">🎮 Empezar Historia</button>';
  document.getElementById("st").onclick = start;
}

function start() { st = { a: 0, m: 0 }; cur = "r1"; li = 0; fbk = null; draw(); }

function draw() {
  var s = SC[cur];
  if (s.e) return finish();

  var bg = s.bg || (PATH_BG + "calle.jpg");
  var topHUD = 
    '<div class="top">' +
      '<span>✨ Amor propio: ' + st.a + ' · 🍞 Migajas: ' + st.m + '</span>' +
      '<button id="mn">🏠 Menú</button>' +
    '</div>';

  var who = "", txt = "", ch = "", charImgTag = "";

  if (fbk) {
    who = "Nota de Reflexión"; 
    txt = '<p class="fb">' + esc(fbk) + '</p>';
  } else {
    var ln = s.l[li];
    who = ln[0] === "N" ? "" : ln[0];
    txt = '<p class="txt">' + esc(ln[1]) + '</p>';
    
    var charImgSrc = ln[2];
    if (charImgSrc) {
      charImgTag = '<img src="' + charImgSrc + '" class="char-sprite" alt="' + who + '" onerror="this.style.display=\'none\'">';
    }

    if (li === s.l.length - 1 && s.c) {
      ch = '<div class="ch">';
      s.c.forEach(function (c, i) { ch += '<button data-c="' + i + '">' + esc(c[0]) + '</button>'; });
      ch += '</div>';
    }
  }

  var hint = ch ? "" : '<div class="hint">Toca o presiona Enter para continuar ▶</div>';

  app.innerHTML = 
    topHUD + 
    '<div class="stage" style="background-image: url(\'' + bg + '\');">' +
      charImgTag +
    '</div>' +
    '<div class="box" id="bx" tabindex="0">' +
      '<div class="who" style="color:' + (COL[who] || "var(--mute)") + '">' + who + '</div>' + 
      txt + 
      hint + 
      ch + 
    '</div>';

  document.getElementById("mn").onclick = function (e) { e.stopPropagation(); menu(); };
  app.querySelectorAll("[data-c]").forEach(function (b) {
    b.onclick = function (e) { e.stopPropagation(); pick(+b.dataset.c); };
  });

  var bx = document.getElementById("bx");
  bx.onclick = adv;
  bx.focus({ preventScroll: true });
}

function adv() {
  var s = SC[cur];
  if (fbk) { fbk = null; cur = nextId; li = 0; return draw(); }
  if (li < s.l.length - 1) { li++; draw(); }
}

function pick(i) {
  var c = SC[cur].c[i];
  st.a += c[2]; st.m += c[3]; nextId = c[1];
  if (c[4]) { fbk = c[4]; draw(); } else { cur = nextId; li = 0; draw(); }
}

document.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === " ") && document.activeElement && document.activeElement.id === "bx") {
    e.preventDefault(); adv();
  }
});

function finish() {
  var sc = st.a - st.m, i = sc < 1 ? 0 : sc < 6 ? 1 : 2;
  var res = END[i];

  app.innerHTML = 
    '<div class="box end" style="border-radius:20px; cursor:default; padding:20px; text-align:center;">' +
      '<img src="' + res.img + '" style="max-height:180px; margin-bottom:10px;" onerror="this.style.display=\'none\'">' +
      '<h2>' + res.title + '</h2>' +
      '<p class="sub">Amor propio: ' + st.a + ' · Migajas: ' + st.m + '</p>' +
      '<p class="txt">' + res.desc + '</p>' +
      '<div class="ch" style="margin-top:20px;"><button class="go" id="re">🔄 Jugar otra vez</button></div>' +
    '</div>';

  document.getElementById("re").onclick = start;
}

menu();