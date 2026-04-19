import { useState } from "react";

/* ─── PALETA CROMÁTICA POR CAPÍTULO ──────────────────────────────────────────
  Cap 1  Principios:    Azul    #1D4ED8  → rigor científico, fundamentos
  Cap 2  Demanda:       Verde   #059669  → flujo, movimiento, mercado vivo
  Cap 3  Equilibrio:    Teal    #0F766E  → balance, convergencia
  Cap 4  Consumidor:    Violeta #6D28D9  → mente, preferencias, decisión
  Cap 5  Productor:     Naranja #D97706  → producción, industria, energía
  Cap 6  Eficiencia:    Cian    #0891B2  → claridad, optimalidad social
  Cap 7  Externalidades:Rojo    #DC2626  → falla, externalidad, corrección
  Cap 9  Monopolio:     Ámbar   #B45309  → poder, concentración, distorsión
  Cap 11 GDP:           Índigo  #4338CA  → macro, agregado, medición
  Cap 12 Crecimiento:   Esmeralda #065F46 → largo plazo, prosperidad
──────────────────────────────────────────────────────────────────────────── */

const CAPITULOS = [
  /* ══════════════════════════════════════════════════════ CAP 1 */
  {
    id: "cap1",
    numero: 1,
    titulo: "Principios de Economía",
    subtitulo: "Los tres pilares: Optimización, Equilibrio y Empirismo",
    color: "#1D4ED8",
    colorBg: "#1D4ED818",
    colorBorder: "#1D4ED840",
    emoji: "🔬",
    resumen: [
      "La economía estudia cómo los agentes toman decisiones ante la escasez: recursos limitados frente a necesidades ilimitadas.",
      "Tres principios fundamentales organizan todo el análisis económico: optimización (los agentes eligen lo mejor posible), equilibrio (las interacciones entre agentes llevan a un estado estable) y empirismo (las teorías se verifican con datos).",
      "Economía positiva describe el mundo como es; economía normativa prescribe cómo debería ser.",
      "El costo de oportunidad es el verdadero costo de cualquier decisión: aquello a lo que se renuncia al elegir una opción.",
    ],
    conceptos: [
      { termino: "Escasez", def: "Los recursos son limitados pero los deseos son ilimitados. Toda elección implica resignar algo." },
      { termino: "Optimización", def: "Los agentes eligen la mejor opción posible dadas sus restricciones. Análisis marginal: comparar costos y beneficios de la última unidad." },
      { termino: "Equilibrio", def: "Situación donde ningún agente tiene incentivos para cambiar su comportamiento. Estado estable resultante de las interacciones." },
      { termino: "Empirismo", def: "Las hipótesis económicas se contrastan con datos reales. La evidencia empírica guía y corrige las teorías." },
      { termino: "Economía Positiva", def: "Describe el mundo como es, usando hechos verificables. Ejemplo: 'si sube el precio, cae la demanda'." },
      { termino: "Economía Normativa", def: "Establece juicios de valor sobre cómo debería ser el mundo. Ejemplo: 'el Estado debería subsidiar la educación'." },
      { termino: "Costo de Oportunidad", def: "El valor de la mejor alternativa resignada al tomar una decisión. Es el verdadero costo económico." },
      { termino: "Análisis Marginal", def: "Evaluar el beneficio y costo de una unidad adicional. La clave de toda optimización económica." },
    ],
    infografia: "tres_pilares",
    tips: [
      "Los TRES principios son: Optimización, Equilibrio y Empirismo — memorizarlos así",
      "COSTO DE OPORTUNIDAD: lo que resignás, no lo que pagás — siempre presente en preguntas",
      "Positivo = descripción del mundo real; Normativo = juicio de valor",
      "El análisis MARGINAL compara el beneficio y costo de la ÚLTIMA unidad, no el total",
      "Acemoglu no separa micro de macro: los tres principios aplican a AMBAS",
    ],
    cuadro: [
      { aspecto: "Unidad de análisis", positivo: "Hechos observables", normativo: "Valores y objetivos" },
      { aspecto: "Pregunta clave", positivo: "¿Qué ES?", normativo: "¿Qué DEBERÍA SER?" },
      { aspecto: "Verificable con datos", positivo: "Sí", normativo: "No" },
      { aspecto: "Ejemplo", positivo: "La suba de precios reduce la demanda", normativo: "Debe reducirse la pobreza" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 2 */
  {
    id: "cap2",
    numero: 2,
    titulo: "Oferta y Demanda",
    subtitulo: "Las fuerzas del mercado: compradores y vendedores",
    color: "#059669",
    colorBg: "#05966918",
    colorBorder: "#05966940",
    emoji: "📈",
    resumen: [
      "La demanda refleja el comportamiento de los compradores: cuánto desean comprar a cada precio. La ley de la demanda establece una relación negativa: a mayor precio, menor cantidad demandada.",
      "La oferta refleja el comportamiento de los vendedores: cuánto desean vender a cada precio. La ley de la oferta establece una relación positiva: a mayor precio, mayor cantidad ofrecida.",
      "Clave: distinguir movimientos a lo largo de la curva (cambia el precio) vs. desplazamientos de la curva entera (cambian otros factores).",
      "La disposición a pagar (demanda) y la disposición a aceptar (oferta) son los conceptos marginales centrales.",
    ],
    conceptos: [
      { termino: "Ley de la Demanda", def: "Relación negativa entre precio y cantidad demandada, ceteris paribus. Si el precio sube, la cantidad demandada cae." },
      { termino: "Disposición a Pagar", def: "El precio máximo que un consumidor pagaría por una unidad adicional. Es el beneficio marginal del consumidor." },
      { termino: "Curva de Demanda", def: "Pendiente negativa. Eje Y = precio, Eje X = cantidad. Suma horizontal de demandas individuales." },
      { termino: "Ley de la Oferta", def: "Relación positiva entre precio y cantidad ofrecida, ceteris paribus. Si el precio sube, la cantidad ofrecida sube." },
      { termino: "Disposición a Aceptar", def: "El precio mínimo que un vendedor aceptaría por una unidad. Equivale al costo marginal de producción." },
      { termino: "Curva de Oferta", def: "Pendiente positiva. Aumenta con el precio. Suma horizontal de ofertas individuales." },
      { termino: "Movimiento vs Desplazamiento", def: "Movimiento: cambia solo el precio (a lo largo de la curva). Desplazamiento: cambia otro factor (la curva entera se mueve)." },
      { termino: "Ceteris Paribus", def: "'Todo lo demás igual'. Permite aislar el efecto del precio sobre la cantidad." },
    ],
    infografia: "oferta_demanda",
    tips: [
      "MOVIMIENTO a lo largo: cambia solo el PRECIO del bien",
      "DESPLAZAMIENTO de la curva: cambia ingresos, gustos, precios de sustitutos/complementarios, número de compradores/vendedores, expectativas",
      "Demanda: pendiente NEGATIVA. Oferta: pendiente POSITIVA — siempre",
      "Disposición a pagar = beneficio marginal del CONSUMIDOR",
      "Disposición a aceptar = costo marginal del PRODUCTOR",
      "Factores que desplazan la DEMANDA: Y (ingreso), gustos, P sustitutos, P complementarios, nº compradores, expectativas",
      "Factores que desplazan la OFERTA: costos insumos, tecnología, nº vendedores, expectativas",
    ],
    cuadro: [
      { factor: "Sube el ingreso del consumidor", efectoDemanda: "Demanda sube (bien normal)", efectoOferta: "—" },
      { factor: "Bajan costos de insumos", efectoDemanda: "—", efectoOferta: "Oferta sube" },
      { factor: "Mejora la tecnología", efectoDemanda: "—", efectoOferta: "Oferta sube" },
      { factor: "Sube el precio del sustituto", efectoDemanda: "Demanda sube", efectoOferta: "—" },
      { factor: "Sube el precio del complementario", efectoDemanda: "Demanda baja", efectoOferta: "—" },
      { factor: "Más vendedores en el mercado", efectoDemanda: "—", efectoOferta: "Oferta sube" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 3 */
  {
    id: "cap3",
    numero: 3,
    titulo: "Equilibrio del Mercado",
    subtitulo: "Donde se cruzan oferta y demanda",
    color: "#0F766E",
    colorBg: "#0F766E18",
    colorBorder: "#0F766E40",
    emoji: "⚖️",
    resumen: [
      "El equilibrio de mercado es el punto donde las curvas de oferta y demanda se intersectan: precio de equilibrio y cantidad de equilibrio.",
      "Si el precio está por encima del equilibrio hay exceso de oferta (surplus): los vendedores no consiguen vender todo y el precio baja.",
      "Si el precio está por debajo del equilibrio hay exceso de demanda (shortage): los compradores compiten y el precio sube.",
      "Cuando algún determinante cambia, el equilibrio se desplaza: análisis comparativo de estática.",
    ],
    conceptos: [
      { termino: "Precio de Equilibrio", def: "Precio al que la cantidad ofrecida iguala a la cantidad demandada. El mercado se 'vacía'." },
      { termino: "Cantidad de Equilibrio", def: "Cantidad transada cuando el mercado está en equilibrio. Maximiza las ganancias del intercambio." },
      { termino: "Exceso de Oferta (Surplus)", def: "Precio > P*: los vendedores ofrecen más de lo que los compradores quieren. El precio tiende a bajar." },
      { termino: "Exceso de Demanda (Shortage)", def: "Precio < P*: los compradores quieren más de lo que los vendedores ofrecen. El precio tiende a subir." },
      { termino: "Estática Comparativa", def: "Técnica para analizar cómo cambia el equilibrio cuando varía un factor externo (desplazamiento de curvas)." },
      { termino: "Mecanismo de Precios", def: "Los precios actúan como señales: coordinan las decisiones descentralizadas de millones de agentes." },
    ],
    infografia: "equilibrio",
    tips: [
      "Equilibrio: Qd = Qs. Precio que 'vacía el mercado'",
      "Precio SOBRE equilibrio → exceso de OFERTA → precio BAJA",
      "Precio BAJO equilibrio → exceso de DEMANDA → precio SUBE",
      "Para estática comparativa: 1) ¿qué curva se desplaza? 2) ¿en qué dirección? 3) ¿cómo cambia P* y Q*?",
      "Si DEMANDA sube → P* sube y Q* sube",
      "Si OFERTA sube → P* baja y Q* sube",
      "Si AMBAS suben → Q* sube, P* indeterminado (depende magnitudes)",
    ],
    cuadro: [
      { cambio: "Demanda sube (curva → derecha)", precioEq: "Sube ↑", cantidadEq: "Sube ↑" },
      { cambio: "Demanda baja (curva → izquierda)", precioEq: "Baja ↓", cantidadEq: "Baja ↓" },
      { cambio: "Oferta sube (curva → derecha)", precioEq: "Baja ↓", cantidadEq: "Sube ↑" },
      { cambio: "Oferta baja (curva → izquierda)", precioEq: "Sube ↑", cantidadEq: "Baja ↓" },
      { cambio: "D sube + O sube (misma magnitud)", precioEq: "Sin cambio", cantidadEq: "Sube ↑" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 4 */
  {
    id: "cap4",
    numero: 4,
    titulo: "El Problema del Consumidor",
    subtitulo: "Preferencias, restricciones y optimización del consumo",
    color: "#6D28D9",
    colorBg: "#6D28D918",
    colorBorder: "#6D28D940",
    emoji: "🛒",
    resumen: [
      "El consumidor elige la canasta de bienes que maximiza su bienestar (utilidad) sujeto a su restricción presupuestaria.",
      "Las preferencias se representan con curvas de indiferencia: combinaciones de bienes que producen el mismo nivel de satisfacción.",
      "La restricción presupuestaria es la línea que delimita las canastas asequibles dado el ingreso y los precios.",
      "La optimización ocurre en el punto de tangencia entre la restricción presupuestaria y la curva de indiferencia más alta alcanzable: TMgS = Px/Py.",
    ],
    conceptos: [
      { termino: "Curva de Indiferencia", def: "Conjunto de canastas de bienes que le generan el mismo nivel de utilidad al consumidor. Pendiente negativa y convexa." },
      { termino: "Tasa Marginal de Sustitución (TMgS)", def: "Cuántas unidades del bien Y está dispuesto a resignar el consumidor para obtener una unidad más del bien X, manteniéndose igual de satisfecho." },
      { termino: "Restricción Presupuestaria", def: "Ingreso = Px·X + Py·Y. Línea recta con pendiente -Px/Py. Delimita lo que el consumidor puede comprar." },
      { termino: "Condición de Optimización", def: "En el punto óptimo: TMgS = Px/Py. La tasa a la que el consumidor desea sustituir iguala la tasa a la que el mercado permite hacerlo." },
      { termino: "Utilidad Marginal", def: "Satisfacción adicional que genera consumir una unidad más del bien. Es decreciente: cada unidad extra satisface menos." },
      { termino: "Efecto Sustitución", def: "Cuando sube el precio de X, el consumidor sustituye X por Y (bienes relativamente más baratos), manteniendo la utilidad constante." },
      { termino: "Efecto Ingreso", def: "Cuando sube el precio de X, el poder adquisitivo real cae, reduciendo la demanda del bien." },
      { termino: "Bienes Normales vs. Inferiores", def: "Normal: la demanda sube cuando sube el ingreso. Inferior: la demanda baja cuando sube el ingreso." },
    ],
    infografia: "consumidor",
    tips: [
      "Punto óptimo: tangencia entre CURVA DE INDIFERENCIA y RESTRICCIÓN PRESUPUESTARIA",
      "Condición: TMgS = Px/Py (o equivalentemente UMgx/Px = UMgy/Py)",
      "TMgS = pendiente de la curva de indiferencia (valor absoluto)",
      "Pendiente de la restricción presupuestaria = -Px/Py",
      "Utilidad marginal DECRECIENTE: cada unidad adicional satisface MENOS",
      "Efecto sustitución + efecto ingreso = efecto total del cambio de precio",
      "Bienes Giffen: bien inferior con efecto ingreso tan fuerte que la demanda SUBE cuando sube el precio (caso teórico)",
    ],
    cuadro: [
      { caso: "Sube el ingreso", restriccion: "Se desplaza hacia afuera (paralela)", optimo: "Más de ambos bienes (si normales)" },
      { caso: "Sube Px", restriccion: "Rota: intercepto en Y constante, intercepto en X baja", optimo: "Menos X, posiblemente más Y" },
      { caso: "Baja Px", restriccion: "Rota: intercepto en Y constante, intercepto en X sube", optimo: "Más X, posiblemente menos Y" },
      { caso: "Sube Py", restriccion: "Rota: intercepto en X constante, intercepto en Y baja", optimo: "Menos Y, posiblemente más X" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 5 */
  {
    id: "cap5",
    numero: 5,
    titulo: "El Problema del Productor",
    subtitulo: "Costos, producción y maximización de beneficios",
    color: "#D97706",
    colorBg: "#D9770618",
    colorBorder: "#D9770640",
    emoji: "🏭",
    resumen: [
      "En mercados competitivos, las empresas son tomadoras de precios: venden productos idénticos y no pueden influir en el precio de mercado.",
      "La empresa debe decidir cuánto producir para maximizar beneficios: comparar el ingreso marginal con el costo marginal.",
      "La regla de oro: producir hasta que Ingreso Marginal = Costo Marginal (IM = CM). En competencia perfecta, IM = P.",
      "La curva de Costo Marginal es la curva de oferta de la empresa: indica cuánto producir a cada precio.",
    ],
    conceptos: [
      { termino: "Competencia Perfecta", def: "Mercado con muchos compradores y vendedores, producto homogéneo, libre entrada/salida. Las empresas son tomadoras de precios." },
      { termino: "Función de Producción", def: "Relación técnica entre insumos y producto. Q = f(K, L). Muestra la máxima producción posible con cada combinación de factores." },
      { termino: "Producto Marginal", def: "Producción adicional al añadir una unidad más de un factor. Es decreciente: cada trabajador adicional aporta menos." },
      { termino: "Costo Fijo (CF)", def: "Costos que no varían con la producción a corto plazo (alquiler, maquinaria). Existen aunque no se produzca nada." },
      { termino: "Costo Variable (CV)", def: "Costos que sí varían con la producción (salarios, materias primas)." },
      { termino: "Costo Marginal (CM)", def: "Cambio en el costo total al producir una unidad adicional. ΔCT/ΔQ. Primero decrece, luego crece (forma de U)." },
      { termino: "Ingreso Marginal (IM)", def: "Ingreso adicional al vender una unidad más. En competencia perfecta: IM = Precio (la curva de demanda de la empresa es horizontal)." },
      { termino: "Regla IM = CM", def: "La empresa maximiza beneficios produciendo hasta que el ingreso de la última unidad iguala su costo. En competencia: P = CM." },
    ],
    infografia: "productor",
    tips: [
      "Competencia perfecta: IM = P (precio = ingreso marginal por ser tomadora de precios)",
      "REGLA DE ORO: producir hasta IM = CM → en competencia perfecta: P = CM",
      "Curva de CM tiene forma de U: primero baja (rendimientos crecientes), luego sube (rendimientos decrecientes)",
      "CURVA DE OFERTA de la empresa = curva de CM por encima del CVM mínimo",
      "Beneficio económico = IT - CT (incluyendo costo de oportunidad, no solo contable)",
      "Si P > CTM → beneficio positivo. Si P < CTM → pérdida. Si P = CTM → beneficio normal (= 0 económico)",
      "Largo plazo: libre entrada/salida → P = CTM mínimo (beneficio económico = 0)",
    ],
    cuadro: [
      { precio: "P > CTM", decision: "Producir (hay beneficio positivo)", resultado: "Ganancias económicas" },
      { precio: "P = CTM", decision: "Producir (punto de quiebre)", resultado: "Beneficio normal (= 0 económico)" },
      { precio: "CVM < P < CTM", decision: "Producir a corto plazo (cubre variables)", resultado: "Pérdida menor que costos fijos" },
      { precio: "P < CVM", decision: "Cerrar (incluso a corto plazo)", resultado: "Pérdida = costos fijos" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 6 */
  {
    id: "cap6",
    numero: 6,
    titulo: "Eficiencia del Mercado",
    subtitulo: "Excedentes, la Mano Invisible y fallas del mercado",
    color: "#0891B2",
    colorBg: "#0891B218",
    colorBorder: "#0891B240",
    emoji: "🤝",
    resumen: [
      "En competencia perfecta, el mercado asigna los recursos de manera eficiente: maximiza el bienestar total (excedente del consumidor + excedente del productor).",
      "Excedente del consumidor: diferencia entre la disposición a pagar y el precio pagado. Excedente del productor: diferencia entre el precio recibido y el costo marginal.",
      "La 'mano invisible' de Adam Smith: los agentes buscando su propio beneficio maximizan sin saberlo el bienestar social.",
      "Las fallas de mercado (externalidades, bienes públicos, información asimétrica, poder de mercado) impiden que la mano invisible funcione correctamente.",
    ],
    conceptos: [
      { termino: "Excedente del Consumidor (EC)", def: "Diferencia entre la máxima disposición a pagar y el precio de mercado. Área bajo la curva de demanda y sobre el precio." },
      { termino: "Excedente del Productor (EP)", def: "Diferencia entre el precio de mercado y el costo marginal (mínimo precio aceptado). Área sobre la curva de oferta y bajo el precio." },
      { termino: "Excedente Total (ET)", def: "EC + EP. El mercado competitivo en equilibrio maximiza el ET: asignación eficiente de Pareto." },
      { termino: "Mano Invisible", def: "Concepto de Adam Smith: los mercados competitivos coordinan la actividad económica sin planificación central, maximizando el bienestar social." },
      { termino: "Eficiencia de Pareto", def: "Asignación donde no se puede mejorar a nadie sin empeorar a otro. El equilibrio competitivo es eficiente en este sentido." },
      { termino: "Pérdida de Eficiencia (Deadweight Loss)", def: "Reducción en el excedente total cuando el mercado no produce la cantidad óptima (ej.: por impuestos, precios máximos/mínimos, monopolio)." },
      { termino: "Precio Máximo", def: "Techo de precio impuesto por el gobierno. Si está bajo P*, genera escasez (exceso de demanda) y pérdida de eficiencia." },
      { termino: "Precio Mínimo", def: "Piso de precio impuesto por el gobierno. Si está sobre P*, genera excedente (exceso de oferta) y pérdida de eficiencia." },
    ],
    infografia: "eficiencia",
    tips: [
      "EC = área triangular entre curva de DEMANDA y el precio (arriba del precio)",
      "EP = área triangular entre curva de OFERTA y el precio (abajo del precio)",
      "ET = EC + EP. El equilibrio competitivo lo MAXIMIZA",
      "Pérdida de eficiencia = triángulo que aparece cuando Q ≠ Q* de equilibrio",
      "Precio MÁXIMO efectivo: P_max < P* → escasez + deadweight loss",
      "Precio MÍNIMO efectivo: P_min > P* → superávit + deadweight loss",
      "Impuesto genera pérdida de eficiencia: consumidores y productores pierden más de lo que el Estado recauda",
    ],
    cuadro: [
      { intervencion: "Precio Máximo (P_max < P*)", ecambio: "Sube parcialmente", epambio: "Baja", efficiencia: "Pérdida de eficiencia, escasez" },
      { intervencion: "Precio Mínimo (P_min > P*)", ecambio: "Baja", epambio: "Sube parcialmente", efficiencia: "Pérdida de eficiencia, excedente" },
      { intervencion: "Impuesto al vendedor", ecambio: "Baja", epambio: "Baja", efficiencia: "Pérdida de eficiencia" },
      { intervencion: "Subsidio", ecambio: "Sube", epambio: "Sube", efficiencia: "Puede corregir externalidades" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 7 */
  {
    id: "cap7",
    numero: 7,
    titulo: "Externalidades y Bienes Públicos",
    subtitulo: "Fallas del mercado: cuando la mano invisible falla",
    color: "#DC2626",
    colorBg: "#DC262618",
    colorBorder: "#DC262640",
    emoji: "🌍",
    resumen: [
      "Una externalidad ocurre cuando la acción de un agente afecta el bienestar de terceros que no participaron en la transacción, sin compensación.",
      "Externalidad negativa: el costo social > costo privado. El mercado sobreproduceproduce. Ejemplo: contaminación industrial.",
      "Externalidad positiva: el beneficio social > beneficio privado. El mercado subproduce. Ejemplo: educación, vacunación.",
      "El Teorema de Coase: si los costos de transacción son bajos y los derechos de propiedad están definidos, la negociación privada puede resolver eficientemente las externalidades.",
    ],
    conceptos: [
      { termino: "Externalidad", def: "Costo o beneficio que recae sobre terceros ajenos a una transacción. El mercado no lo incorpora al precio automáticamente." },
      { termino: "Externalidad Negativa", def: "Costo impuesto a terceros. CSocial > CPrivado. El bien se sobreproduceproduce respecto al óptimo social. Ej.: contaminación." },
      { termino: "Externalidad Positiva", def: "Beneficio generado para terceros. BenSocial > BenPrivado. El bien se subproduce respecto al óptimo social. Ej.: educación." },
      { termino: "Internalizar la Externalidad", def: "Hacer que el agente enfrente el costo/beneficio total de su acción (privado + social). Objetivo de toda política correctora." },
      { termino: "Teorema de Coase", def: "Con bajos costos de transacción y derechos de propiedad bien definidos, la negociación privada lleva al resultado eficiente, independientemente de quién tiene los derechos." },
      { termino: "Impuesto Pigouviano", def: "Impuesto corrector igual al costo marginal externo de la externalidad negativa. Lleva la producción al óptimo social." },
      { termino: "Subsidio Pigouviano", def: "Subsidio corrector igual al beneficio marginal externo. Incentiva a producir/consumir hasta el óptimo social para externalidades positivas." },
      { termino: "Bienes Públicos", def: "No rivales (el consumo de uno no reduce el de otro) y no excluibles (no se puede impedir que alguien los consuma). El mercado los subprovee: problema del polizón." },
      { termino: "Bienes Comunes", def: "No excluibles pero SÍ rivales. El uso de uno reduce la disponibilidad para los demás. Tragedia de los bienes comunes: sobreexplotación." },
      { termino: "Problema del Polizón (Free Rider)", def: "Cuando un bien es no excluible, los individuos esperan que otros paguen. El mercado privado no provee suficiente bien público." },
    ],
    infografia: "externalidades",
    tips: [
      "Externalidad NEGATIVA → mercado SOBREPRODUCEPRODUCE → impuesto Pigouviano corrige",
      "Externalidad POSITIVA → mercado SUBPRODUCE → subsidio Pigouviano corrige",
      "Teorema de Coase: funciona solo con BAJOS costos de transacción y derechos de propiedad DEFINIDOS",
      "Bienes PÚBLICOS: no rival + no excluible → problema del POLIZÓN → Estado los provee",
      "Bienes COMUNES: no excluible + SÍ rival → tragedia de los comunes → sobreexplotación",
      "Regulaciones vs. Pigouvianos: los impuestos son más eficientes porque dan incentivos a innovar",
      "Impuesto óptimo = costo marginal EXTERNO (no el costo marginal privado)",
    ],
    cuadro: [
      { tipo: "Bien Privado", rival: "Sí", excluible: "Sí", ejemplo: "Pan, ropa, auto" },
      { tipo: "Bien Público", rival: "No", excluible: "No", ejemplo: "Defensa nacional, aire limpio, alumbrado" },
      { tipo: "Bien Común", rival: "Sí", excluible: "No", ejemplo: "Peces en lago libre, bosques públicos" },
      { tipo: "Monopolio Natural", rival: "No", excluible: "Sí", ejemplo: "Software, streaming, cable TV" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 9 */
  {
    id: "cap9",
    numero: 9,
    titulo: "Monopolio",
    subtitulo: "Poder de mercado, ineficiencia y discriminación de precios",
    color: "#B45309",
    colorBg: "#B4530918",
    colorBorder: "#B4530940",
    emoji: "👑",
    resumen: [
      "Un monopolista es el único vendedor del mercado y enfrenta la curva de demanda del mercado con pendiente negativa: puede fijar el precio.",
      "Como debe bajar el precio de TODAS las unidades para vender una más, su Ingreso Marginal es SIEMPRE menor que el precio (IM < P).",
      "El monopolista maximiza beneficios donde IM = CM, pero cobra el precio que la demanda acepta a esa cantidad: P > IM = CM.",
      "Resultado: menor producción y precio más alto que en competencia → pérdida irrecuperable de eficiencia (deadweight loss).",
    ],
    conceptos: [
      { termino: "Monopolio", def: "Único vendedor en el mercado. Enfrenta la demanda del mercado completa: es fijador de precios (no tomador)." },
      { termino: "Poder de Mercado", def: "Capacidad de fijar precios por encima del costo marginal. Surge de barreras de entrada." },
      { termino: "Barreras de Entrada", def: "Obstáculos que impiden que nuevas empresas compitan. Pueden ser legales (patentes) o naturales (economías de escala, control de recursos)." },
      { termino: "Monopolio Natural", def: "El CTM sigue decreciendo con Q: una sola empresa puede abastecer el mercado más eficientemente que varias. Ej.: agua, electricidad, infraestructura." },
      { termino: "IM < P en Monopolio", def: "Para vender una unidad más, el monopolista debe bajar el precio de TODAS las unidades. Por eso IM < P siempre. La curva de IM tiene el doble de pendiente que la demanda." },
      { termino: "Regla IM = CM", def: "El monopolista maximiza beneficios produciendo donde IM = CM, luego cobra el precio P de la curva de demanda a esa Q. Siempre P > CM." },
      { termino: "Pérdida Irrecuperable (DWL)", def: "El monopolista produce menos que el óptimo social: el excedente 'destruido' que no va ni al consumidor ni al productor. Ineficiencia del monopolio." },
      { termino: "Discriminación de Precios 1er Grado", def: "Cobra a cada consumidor su máxima disposición a pagar. Elimina DWL pero el monopolista captura TODO el excedente." },
      { termino: "Discriminación de Precios 2do Grado", def: "Precios según cantidad comprada (descuentos por volumen). Ej.: paquetes de servicios." },
      { termino: "Discriminación de Precios 3er Grado", def: "Precios distintos por características observables del comprador (edad, ubicación). Ej.: descuento estudiantes." },
    ],
    infografia: "monopolio",
    tips: [
      "Monopolio: IM < P SIEMPRE (pendiente de IM = doble de la pendiente de la demanda)",
      "Maximización: producir hasta IM = CM, luego SUBIR hasta la curva de demanda para el precio",
      "P > IM = CM: el monopolio siempre cobra más que el costo marginal",
      "DWL = triángulo entre P_monopolio, Q_monopolio y la curva de demanda/CM",
      "Competencia perfecta: P = CM = IM. Monopolio: P > CM = IM",
      "Discriminación 1er grado → elimina DWL pero el monopolista se queda con TODO el EC",
      "Discriminación 3er grado: IM₁ = IM₂ = CM. El mercado con menor elasticidad paga más precio",
      "Monopolio natural: regulación óptima → P = CM (pero da pérdidas si CF > 0)",
    ],
    cuadro: [
      { aspecto: "Número de vendedores", competencia: "Muchos", monopolio: "Uno" },
      { aspecto: "Control del precio", competencia: "Ninguno (tomador)", monopolio: "Total (fijador)" },
      { aspecto: "Curva de demanda", competencia: "Horizontal (perfectamente elástica)", monopolio: "Descendente (toda la demanda del mercado)" },
      { aspecto: "Relación IM y P", competencia: "IM = P", monopolio: "IM < P" },
      { aspecto: "Condición maximizadora", competencia: "P = CM", monopolio: "IM = CM, cobra P > CM" },
      { aspecto: "Eficiencia", competencia: "Eficiente (P = CM)", monopolio: "Ineficiente (DWL)" },
      { aspecto: "Beneficio largo plazo", competencia: "Cero (libre entrada)", monopolio: "Positivo (barreras)" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 11 */
  {
    id: "cap11",
    numero: 11,
    titulo: "GDP y Macroeconomía",
    subtitulo: "Medición de la actividad económica agregada",
    color: "#4338CA",
    colorBg: "#4338CA18",
    colorBorder: "#4338CA40",
    emoji: "📊",
    resumen: [
      "El GDP (Producto Interno Bruto) mide el valor de mercado de todos los bienes y servicios finales producidos en un país durante un período.",
      "Tres métodos equivalentes: por el gasto (C + I + G + NX), por el ingreso (suma de salarios, intereses, rentas y beneficios) y por el valor agregado.",
      "GDP nominal usa precios corrientes; GDP real usa precios del año base: elimina el efecto inflación para medir crecimiento real.",
      "El deflactor del PIB = (GDP Nominal / GDP Real) × 100: mide el nivel general de precios.",
    ],
    conceptos: [
      { termino: "GDP (PIB)", def: "Valor de mercado de todos los bienes y servicios FINALES producidos dentro de un país en un período. Solo se cuentan los finales (evitar doble conteo)." },
      { termino: "Método del Gasto", def: "GDP = C + I + G + NX. Suma todo el gasto de los distintos sectores de la economía." },
      { termino: "Consumo (C)", def: "Gasto de los hogares en bienes y servicios. El componente más grande del GDP (≈60-70%)." },
      { termino: "Inversión (I)", def: "Gasto en capital nuevo: maquinaria, construcción, variación de inventarios. Gasto de las empresas + construcción residencial." },
      { termino: "Gasto Público (G)", def: "Gasto del gobierno en bienes y servicios. No incluye transferencias (jubilaciones, subsidios) porque no son producción." },
      { termino: "Exportaciones Netas (NX)", def: "NX = X - M. Exportaciones (lo que el resto del mundo compra) menos Importaciones (lo que importamos). Puede ser negativo." },
      { termino: "GDP Nominal", def: "Valor de la producción a precios del año en curso. Sube por mayor cantidad producida O por inflación." },
      { termino: "GDP Real", def: "Valor de la producción a precios de un año base fijo. Elimina el efecto inflación. Mide el crecimiento genuino." },
      { termino: "Deflactor del PIB", def: "Deflactor = (PIB Nominal / PIB Real) × 100. Indica cuánto subieron los precios. Deflactor > 100 si los precios subieron respecto al año base." },
      { termino: "PNB vs PIB", def: "PIB: dentro de las fronteras del país (quién produce dónde). PNB: factores propiedad de residentes nacionales (sin importar dónde operan)." },
    ],
    infografia: "gdp",
    tips: [
      "GDP = C + I + G + NX — memorizar los cuatro componentes",
      "TRANSFERENCIAS (jubilaciones, planes sociales) NO van en G: no son producción nueva",
      "PIB NOMINAL: precios actuales. PIB REAL: precios del año base",
      "Deflactor = (PIB Nominal / PIB Real) × 100",
      "Si Deflactor > 100 → precios subieron respecto al año base",
      "Tasa de inflación ≈ (Deflactor año t - Deflactor año t-1) / Deflactor t-1 × 100",
      "PIB NO mide bienestar: ignora distribución, economía informal, ocio, externalidades, trabajo doméstico",
      "Valor agregado = evitar doble conteo: solo contar el valor que AGREGA cada etapa",
    ],
    cuadro: [
      { componente: "Consumo (C)", ejemplos: "Alimentos, ropa, servicios, autos", tipico: "≈ 65% del GDP" },
      { componente: "Inversión (I)", ejemplos: "Maquinaria, construcción, inventarios", tipico: "≈ 15-20%" },
      { componente: "Gasto Público (G)", ejemplos: "Salarios estatales, infraestructura, defensa", tipico: "≈ 15-25%" },
      { componente: "Export. Netas (NX)", ejemplos: "Exportaciones - Importaciones", tipico: "Variable (puede ser negativo)" },
    ],
  },

  /* ══════════════════════════════════════════════════════ CAP 12 */
  {
    id: "cap12",
    numero: 12,
    titulo: "Crecimiento Económico",
    subtitulo: "¿Por qué algunos países son ricos y otros pobres?",
    color: "#065F46",
    colorBg: "#065F4618",
    colorBorder: "#065F4640",
    emoji: "🚀",
    resumen: [
      "El crecimiento económico de largo plazo determina el nivel de vida de la población. Pequeñas diferencias en la tasa de crecimiento generan enormes diferencias en el nivel de vida a largo plazo.",
      "La función de producción agregada: Y = A · f(K, H) relaciona la producción con los factores productivos. La productividad total de factores (A) representa la tecnología.",
      "Capital físico (K) y capital humano (H) están sujetos a rendimientos decrecientes: no pueden sostener el crecimiento por sí solos.",
      "La tecnología (A) es el motor del crecimiento sostenido: no tiene rendimientos decrecientes y desplaza toda la función de producción hacia arriba.",
    ],
    conceptos: [
      { termino: "Función de Producción Agregada", def: "Y = A · f(K, H). Y = PIB, A = tecnología/PTF, K = capital físico, H = capital humano. Base del análisis del crecimiento." },
      { termino: "Productividad Total de Factores (PTF / A)", def: "Eficiencia con que se usan los factores. Mide todo lo que impulsa el crecimiento más allá de K y H. Motor del crecimiento sostenido." },
      { termino: "Capital Físico (K)", def: "Máquinas, equipos, infraestructura. Se acumula mediante ahorro e inversión (I = S). Sujeto a rendimientos decrecientes: cada unidad adicional aporta menos." },
      { termino: "Capital Humano (H)", def: "Conocimientos, educación y habilidades de los trabajadores. Aumenta la productividad del trabajo. Tiene límite: la vida es finita." },
      { termino: "Rendimientos Decrecientes del Capital", def: "Si aumentás K manteniendo A y H constantes, cada unidad adicional de K aporta menos al PIB. Por eso K solo no puede sostener el crecimiento." },
      { termino: "Hipótesis de Convergencia", def: "Países pobres deberían crecer más rápido que países ricos porque tienen más capital por instalar y pueden adoptar tecnologías ya desarrolladas. El 'atajo' del desarrollo." },
      { termino: "Instituciones Inclusivas", def: "Normas que protegen la propiedad privada, permiten libre mercado e incentivan la innovación. Causa fundamental del crecimiento según Acemoglu." },
      { termino: "Instituciones Extractivas", def: "Instituciones que concentran el poder en élites y bloquean la innovación (temen la destrucción creativa política). Causa del estancamiento." },
      { termino: "Destrucción Creativa", def: "Proceso (Schumpeter) donde nuevas tecnologías y empresas reemplazan a las antiguas. Motor del progreso pero amenaza para los que se benefician del statu quo." },
      { termino: "Estado Estacionario", def: "Nivel de capital donde la inversión apenas compensa la depreciación. Sin cambio tecnológico (A constante), la economía converge al estado estacionario y el crecimiento se detiene." },
    ],
    infografia: "crecimiento",
    tips: [
      "Y = A · f(K, H) — los tres motores: A (tecnología), K (capital físico), H (capital humano)",
      "PTF (A) = el único motor que NO tiene rendimientos decrecientes → único que sostiene crecimiento infinito",
      "K y H tienen rendimientos DECRECIENTES → llevan a estado estacionario sin cambio tecnológico",
      "CONVERGENCIA: países pobres crecen más rápido adoptando tecnología ya inventada",
      "INSTITUCIONES: causa FUNDAMENTAL del crecimiento (más profunda que K, H o A)",
      "Regla de los 70: años para duplicar el PIB ≈ 70 / tasa de crecimiento anual",
      "Estado estacionario: inversión = depreciación → sin tecnología, el crecimiento se DETIENE",
      "Acemoglu: instituciones INCLUSIVAS → crecimiento sostenido. EXTRACTIVAS → estancamiento",
    ],
    cuadro: [
      { factor: "Capital Físico (K)", mecanismo: "Ahorro → Inversión → Acumulación", limite: "Rendimientos decrecientes → Estado estacionario", politica: "Incentivar el ahorro y la inversión" },
      { factor: "Capital Humano (H)", mecanismo: "Educación, salud, capacitación", limite: "Vida finita; años de estudio reducen años activos", politica: "Invertir en educación pública" },
      { factor: "Tecnología (A)", mecanismo: "I+D, innovación, adopción de tecnología", limite: "Sin rendimientos decrecientes — motor ilimitado", politica: "Patentes, universidades, I+D público" },
      { factor: "Instituciones", mecanismo: "Protegen propiedad, incentivan esfuerzo", limite: "Difíciles de cambiar (path dependence)", politica: "Democratización, estado de derecho" },
    ],
  },
];

/* ─── INFOGRAFÍAS SVG INLINE ─────────────────────────────────────────────── */

function InfografiaTresPilares() {
  return (
    <svg viewBox="0 0 600 320" style={{ width: "100%", maxWidth: 600 }}>
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Círculo central */}
      <circle cx="300" cy="160" r="55" fill="#1D4ED820" stroke="#1D4ED8" strokeWidth="2" />
      <text x="300" y="153" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="bold">ECONOMÍA</text>
      <text x="300" y="168" textAnchor="middle" fill="#93C5FD" fontSize="10">Principios</text>
      {/* Pilar 1: Optimización */}
      <circle cx="120" cy="80" r="60" fill="#1D4ED825" stroke="#1D4ED8" strokeWidth="1.5" />
      <text x="120" y="68" textAnchor="middle" fill="#60A5FA" fontSize="22">🎯</text>
      <text x="120" y="88" textAnchor="middle" fill="#93C5FD" fontSize="12" fontWeight="bold">Optimización</text>
      <text x="120" y="103" textAnchor="middle" fill="#94A3B8" fontSize="9">Los agentes eligen</text>
      <text x="120" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">lo mejor posible</text>
      <line x1="175" y1="97" x2="248" y2="133" stroke="#1D4ED860" strokeWidth="1.5" />
      {/* Pilar 2: Equilibrio */}
      <circle cx="480" cy="80" r="60" fill="#1D4ED825" stroke="#1D4ED8" strokeWidth="1.5" />
      <text x="480" y="68" textAnchor="middle" fill="#60A5FA" fontSize="22">⚖️</text>
      <text x="480" y="88" textAnchor="middle" fill="#93C5FD" fontSize="12" fontWeight="bold">Equilibrio</text>
      <text x="480" y="103" textAnchor="middle" fill="#94A3B8" fontSize="9">Interacciones llevan</text>
      <text x="480" y="115" textAnchor="middle" fill="#94A3B8" fontSize="9">a estado estable</text>
      <line x1="425" y1="97" x2="352" y2="133" stroke="#1D4ED860" strokeWidth="1.5" />
      {/* Pilar 3: Empirismo */}
      <circle cx="300" cy="270" r="60" fill="#1D4ED825" stroke="#1D4ED8" strokeWidth="1.5" />
      <text x="300" y="258" textAnchor="middle" fill="#60A5FA" fontSize="22">📊</text>
      <text x="300" y="278" textAnchor="middle" fill="#93C5FD" fontSize="12" fontWeight="bold">Empirismo</text>
      <text x="300" y="293" textAnchor="middle" fill="#94A3B8" fontSize="9">Las teorías se</text>
      <text x="300" y="305" textAnchor="middle" fill="#94A3B8" fontSize="9">verifican con datos</text>
      <line x1="300" y1="215" x2="300" y2="248" stroke="#1D4ED860" strokeWidth="1.5" />
    </svg>
  );
}

function InfografiaOfertaDemanda() {
  return (
    <svg viewBox="0 0 500 340" style={{ width: "100%", maxWidth: 500 }}>
      {/* Ejes */}
      <line x1="60" y1="280" x2="440" y2="280" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="280" stroke="#475569" strokeWidth="1.5" />
      {/* Labels ejes */}
      <text x="450" y="285" fill="#94A3B8" fontSize="11">Q</text>
      <text x="45" y="25" fill="#94A3B8" fontSize="11">P</text>
      {/* Curva Demanda */}
      <line x1="90" y1="60" x2="400" y2="270" stroke="#059669" strokeWidth="2.5" />
      <text x="405" y="275" fill="#34D399" fontSize="12" fontWeight="bold">D</text>
      {/* Curva Oferta */}
      <line x1="90" y1="270" x2="400" y2="60" stroke="#F59E0B" strokeWidth="2.5" />
      <text x="405" y="65" fill="#FCD34D" fontSize="12" fontWeight="bold">O</text>
      {/* Punto de equilibrio */}
      <circle cx="245" cy="165" r="6" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Líneas punteadas */}
      <line x1="60" y1="165" x2="245" y2="165" stroke="#475569" strokeWidth="1" strokeDasharray="4,3" />
      <line x1="245" y1="165" x2="245" y2="280" stroke="#475569" strokeWidth="1" strokeDasharray="4,3" />
      <text x="30" y="169" fill="#CBD5E1" fontSize="10">P*</text>
      <text x="238" y="296" fill="#CBD5E1" fontSize="10">Q*</text>
      {/* Label equilibrio */}
      <text x="258" y="158" fill="#F1F5F9" fontSize="10" fontWeight="bold">Equilibrio</text>
      {/* Zona exceso oferta */}
      <text x="270" y="95" fill="#FCD34D" fontSize="9">Exceso</text>
      <text x="270" y="107" fill="#FCD34D" fontSize="9">de Oferta</text>
      <text x="270" y="119" fill="#FCD34D" fontSize="9">↓ Precio baja</text>
      {/* Zona exceso demanda */}
      <text x="100" y="230" fill="#34D399" fontSize="9">Exceso</text>
      <text x="100" y="242" fill="#34D399" fontSize="9">de Demanda</text>
      <text x="100" y="254" fill="#34D399" fontSize="9">↑ Precio sube</text>
    </svg>
  );
}

function InfografiaEquilibrio() {
  return (
    <svg viewBox="0 0 520 300" style={{ width: "100%", maxWidth: 520 }}>
      {/* Estática comparativa: desplazamiento de demanda */}
      <text x="260" y="22" textAnchor="middle" fill="#94A3B8" fontSize="12">Estática Comparativa: Sube la Demanda</text>
      {/* Ejes */}
      <line x1="60" y1="260" x2="460" y2="260" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="260" stroke="#475569" strokeWidth="1.5" />
      <text x="468" y="265" fill="#94A3B8" fontSize="11">Q</text>
      <text x="45" y="28" fill="#94A3B8" fontSize="11">P</text>
      {/* Oferta (fija) */}
      <line x1="80" y1="250" x2="380" y2="50" stroke="#F59E0B" strokeWidth="2" />
      <text x="385" y="52" fill="#FCD34D" fontSize="11" fontWeight="bold">O</text>
      {/* Demanda original D1 */}
      <line x1="80" y1="50" x2="360" y2="250" stroke="#0F766E" strokeWidth="2" strokeDasharray="5,3" />
      <text x="365" y="255" fill="#0F766E" fontSize="11">D₁</text>
      {/* Demanda nueva D2 */}
      <line x1="150" y1="50" x2="430" y2="250" stroke="#0F766E" strokeWidth="2.5" />
      <text x="435" y="255" fill="#2DD4BF" fontSize="11" fontWeight="bold">D₂</text>
      {/* Flecha de desplazamiento */}
      <text x="290" y="195" fill="#2DD4BF" fontSize="18">→</text>
      {/* Equilibrio 1 */}
      <circle cx="205" cy="155" r="5" fill="#0F766E" />
      <line x1="60" y1="155" x2="205" y2="155" stroke="#0F766E60" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="205" y1="155" x2="205" y2="260" stroke="#0F766E60" strokeWidth="1" strokeDasharray="3,3" />
      <text x="30" y="158" fill="#0F766E" fontSize="9">P₁*</text>
      <text x="198" y="275" fill="#0F766E" fontSize="9">Q₁*</text>
      {/* Equilibrio 2 */}
      <circle cx="265" cy="120" r="5" fill="#2DD4BF" />
      <line x1="60" y1="120" x2="265" y2="120" stroke="#2DD4BF60" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="265" y1="120" x2="265" y2="260" stroke="#2DD4BF60" strokeWidth="1" strokeDasharray="3,3" />
      <text x="30" y="123" fill="#2DD4BF" fontSize="9">P₂*</text>
      <text x="258" y="275" fill="#2DD4BF" fontSize="9">Q₂*</text>
      {/* Resultado */}
      <text x="380" y="110" fill="#2DD4BF" fontSize="9">P↑ Q↑</text>
    </svg>
  );
}

function InfografiaConsumidor() {
  return (
    <svg viewBox="0 0 500 320" style={{ width: "100%", maxWidth: 500 }}>
      {/* Ejes */}
      <line x1="60" y1="270" x2="440" y2="270" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="30" x2="60" y2="270" stroke="#475569" strokeWidth="1.5" />
      <text x="448" y="275" fill="#94A3B8" fontSize="11">Bien X</text>
      <text x="25" y="28" fill="#94A3B8" fontSize="11">Bien Y</text>
      {/* Restricción presupuestaria */}
      <line x1="60" y1="70" x2="360" y2="270" stroke="#6D28D9" strokeWidth="2.5" />
      <text x="370" y="275" fill="#A78BFA" fontSize="11" fontWeight="bold">RP</text>
      {/* Curva de indiferencia U1 */}
      <path d="M 100 260 Q 140 170 260 130 Q 350 115 400 105" stroke="#6D28D940" strokeWidth="1.5" fill="none" strokeDasharray="4,3" />
      {/* Curva de indiferencia U2 (óptima) */}
      <path d="M 80 245 Q 120 140 230 105 Q 320 82 380 75" stroke="#6D28D9" strokeWidth="2" fill="none" />
      <text x="383" y="78" fill="#A78BFA" fontSize="10" fontWeight="bold">U*</text>
      {/* Curva U3 (inalcanzable) */}
      <path d="M 60 220 Q 100 110 190 80 Q 280 55 350 48" stroke="#6D28D930" strokeWidth="1" fill="none" strokeDasharray="3,3" />
      {/* Punto óptimo */}
      <circle cx="195" cy="158" r="6" fill="#A78BFA" />
      <line x1="60" y1="158" x2="195" y2="158" stroke="#6D28D960" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="195" y1="158" x2="195" y2="270" stroke="#6D28D960" strokeWidth="1" strokeDasharray="3,3" />
      <text x="205" y="148" fill="#A78BFA" fontSize="10" fontWeight="bold">Óptimo</text>
      <text x="205" y="160" fill="#C4B5FD" fontSize="9">TMgS = Px/Py</text>
      {/* Labels interceptos */}
      <text x="40" y="73" fill="#94A3B8" fontSize="9">Y/Py</text>
      <text x="350" y="285" fill="#94A3B8" fontSize="9">X/Px</text>
      {/* Pendiente */}
      <text x="280" y="195" fill="#A78BFA" fontSize="9">pendiente = -Px/Py</text>
    </svg>
  );
}

function InfografiaProductor() {
  return (
    <svg viewBox="0 0 500 300" style={{ width: "100%", maxWidth: 500 }}>
      {/* Ejes */}
      <line x1="60" y1="260" x2="440" y2="260" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="260" stroke="#475569" strokeWidth="1.5" />
      <text x="448" y="265" fill="#94A3B8" fontSize="11">Q</text>
      <text x="40" y="20" fill="#94A3B8" fontSize="11">P, C</text>
      {/* Curva CM (forma U) */}
      <path d="M 80 220 Q 150 100 230 80 Q 310 75 420 160" stroke="#D97706" strokeWidth="2.5" fill="none" />
      <text x="425" y="163" fill="#FCD34D" fontSize="11" fontWeight="bold">CM</text>
      {/* Curva CTM (forma U más amplia) */}
      <path d="M 80 240 Q 170 130 260 108 Q 350 100 430 180" stroke="#F97316" strokeWidth="1.5" fill="none" strokeDasharray="5,3" />
      <text x="435" y="183" fill="#FDBA74" fontSize="10">CTM</text>
      {/* Precio de mercado (IM = P) */}
      <line x1="60" y1="110" x2="440" y2="110" stroke="#D97706" strokeWidth="1.5" strokeDasharray="5,3" />
      <text x="448" y="113" fill="#FCD34D" fontSize="10">P=IM</text>
      {/* Punto Q* donde P = CM */}
      <circle cx="305" cy="110" r="5" fill="#FCD34D" />
      <line x1="305" y1="110" x2="305" y2="260" stroke="#D9770660" strokeWidth="1" strokeDasharray="3,3" />
      <text x="295" y="275" fill="#FCD34D" fontSize="9">Q*</text>
      <text x="315" y="100" fill="#FCD34D" fontSize="9" fontWeight="bold">P=CM</text>
      {/* Área de beneficio */}
      <rect x="60" y="110" width="245" height="28" fill="#D9770620" />
      <text x="155" y="128" fill="#FCD34D" fontSize="8" textAnchor="middle">Beneficio = (P - CTM) × Q</text>
      {/* Label curvas */}
      <text x="90" y="195" fill="#94A3B8" fontSize="9">Rendimientos</text>
      <text x="90" y="207" fill="#94A3B8" fontSize="9">crecientes</text>
      <text x="330" y="180" fill="#94A3B8" fontSize="9">Rendimientos</text>
      <text x="330" y="192" fill="#94A3B8" fontSize="9">decrecientes</text>
    </svg>
  );
}

function InfografiaEficiencia() {
  return (
    <svg viewBox="0 0 520 300" style={{ width: "100%", maxWidth: 520 }}>
      {/* Ejes */}
      <line x1="60" y1="260" x2="460" y2="260" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="260" stroke="#475569" strokeWidth="1.5" />
      <text x="468" y="265" fill="#94A3B8" fontSize="11">Q</text>
      <text x="40" y="20" fill="#94A3B8" fontSize="11">P</text>
      {/* Demanda */}
      <line x1="80" y1="40" x2="420" y2="258" stroke="#0891B2" strokeWidth="2.5" />
      <text x="425" y="262" fill="#22D3EE" fontSize="11" fontWeight="bold">D</text>
      {/* Oferta */}
      <line x1="80" y1="258" x2="420" y2="40" stroke="#0891B2" strokeWidth="2.5" />
      <text x="425" y="43" fill="#22D3EE" fontSize="11" fontWeight="bold">O</text>
      {/* Equilibrio */}
      <circle cx="250" cy="149" r="5" fill="#F1F5F9" />
      <line x1="60" y1="149" x2="250" y2="149" stroke="#0891B260" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="250" y1="149" x2="250" y2="260" stroke="#0891B260" strokeWidth="1" strokeDasharray="3,3" />
      <text x="30" y="152" fill="#94A3B8" fontSize="9">P*</text>
      <text x="244" y="275" fill="#94A3B8" fontSize="9">Q*</text>
      {/* EC: triángulo excedente del consumidor */}
      <polygon points="60,149 60,40 250,149" fill="#0891B230" stroke="#0891B280" strokeWidth="1" />
      <text x="110" y="115" fill="#22D3EE" fontSize="10" fontWeight="bold">EC</text>
      {/* EP: triángulo excedente del productor */}
      <polygon points="60,149 60,260 250,149" fill="#0891B218" stroke="#0891B260" strokeWidth="1" />
      <text x="110" y="210" fill="#22D3EE" fontSize="10" fontWeight="bold">EP</text>
      {/* Leyendas */}
      <text x="340" y="80" fill="#22D3EE" fontSize="9">EC = área sobre P*</text>
      <text x="340" y="94" fill="#22D3EE" fontSize="9">bajo la demanda</text>
      <text x="340" y="115" fill="#22D3EE" fontSize="9">EP = área bajo P*</text>
      <text x="340" y="129" fill="#22D3EE" fontSize="9">sobre la oferta</text>
      <text x="340" y="150" fill="#F1F5F9" fontSize="9" fontWeight="bold">ET = EC + EP</text>
      <text x="340" y="164" fill="#94A3B8" fontSize="9">Máximo en equilibrio</text>
    </svg>
  );
}

function InfografiaExternalidades() {
  return (
    <svg viewBox="0 0 560 300" style={{ width: "100%", maxWidth: 560 }}>
      {/* ─── PANEL IZQUIERDO: Externalidad Negativa ─── */}
      <text x="140" y="20" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">Externalidad Negativa</text>
      <line x1="20" y1="270" x2="270" y2="270" stroke="#475569" strokeWidth="1.2" />
      <line x1="20" y1="30" x2="20" y2="270" stroke="#475569" strokeWidth="1.2" />
      {/* Demanda */}
      <line x1="30" y1="55" x2="255" y2="265" stroke="#DC2626" strokeWidth="1.8" />
      <text x="258" y="268" fill="#F87171" fontSize="9">D</text>
      {/* Oferta Privada (Smercado) */}
      <line x1="30" y1="265" x2="220" y2="60" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="224" y="62" fill="#FCD34D" fontSize="9">O_priv</text>
      {/* Oferta Social (más arriba, mayor costo) */}
      <line x1="70" y1="265" x2="260" y2="60" stroke="#DC2626" strokeWidth="1.8" strokeDasharray="4,3" />
      <text x="264" y="63" fill="#F87171" fontSize="9">O_soc</text>
      {/* Q_mercado */}
      <circle cx="133" cy="160" r="4" fill="#FCD34D" />
      <line x1="133" y1="160" x2="133" y2="270" stroke="#F59E0B50" strokeWidth="1" strokeDasharray="3,2" />
      <text x="127" y="282" fill="#FCD34D" fontSize="8">Q_m</text>
      {/* Q_optimo */}
      <circle cx="105" cy="185" r="4" fill="#F87171" />
      <line x1="105" y1="185" x2="105" y2="270" stroke="#DC262650" strokeWidth="1" strokeDasharray="3,2" />
      <text x="98" y="282" fill="#F87171" fontSize="8">Q*</text>
      {/* DWL */}
      <polygon points="105,185 133,160 133,185" fill="#DC262640" />
      <text x="112" y="178" fill="#F87171" fontSize="7">DWL</text>
      <text x="25" y="295" fill="#94A3B8" fontSize="8">↑ Impuesto Pigouviano corrige</text>

      {/* ─── PANEL DERECHO: Externalidad Positiva ─── */}
      <text x="420" y="20" textAnchor="middle" fill="#4ADE80" fontSize="11" fontWeight="bold">Externalidad Positiva</text>
      <line x1="300" y1="270" x2="550" y2="270" stroke="#475569" strokeWidth="1.2" />
      <line x1="300" y1="30" x2="300" y2="270" stroke="#475569" strokeWidth="1.2" />
      {/* Oferta */}
      <line x1="310" y1="265" x2="500" y2="60" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="504" y="63" fill="#FCD34D" fontSize="9">O</text>
      {/* Demanda Privada */}
      <line x1="310" y1="60" x2="500" y2="265" stroke="#059669" strokeWidth="1.8" />
      <text x="503" y="268" fill="#4ADE80" fontSize="9">D_priv</text>
      {/* Demanda Social (más a la derecha) */}
      <line x1="350" y1="60" x2="540" y2="265" stroke="#059669" strokeWidth="1.8" strokeDasharray="4,3" />
      <text x="543" y="268" fill="#4ADE80" fontSize="9">D_soc</text>
      {/* Q_mercado */}
      <circle cx="397" cy="162" r="4" fill="#FCD34D" />
      <line x1="397" y1="162" x2="397" y2="270" stroke="#05966950" strokeWidth="1" strokeDasharray="3,2" />
      <text x="391" y="282" fill="#FCD34D" fontSize="8">Q_m</text>
      {/* Q_optimo */}
      <circle cx="425" cy="145" r="4" fill="#4ADE80" />
      <line x1="425" y1="145" x2="425" y2="270" stroke="#05966950" strokeWidth="1" strokeDasharray="3,2" />
      <text x="418" y="282" fill="#4ADE80" fontSize="8">Q*</text>
      {/* DWL */}
      <polygon points="397,162 425,145 397,145" fill="#05996940" />
      <text x="403" y="157" fill="#4ADE80" fontSize="7">DWL</text>
      <text x="305" y="295" fill="#94A3B8" fontSize="8">↑ Subsidio Pigouviano corrige</text>
    </svg>
  );
}

function InfografiaMonopolio() {
  return (
    <svg viewBox="0 0 500 310" style={{ width: "100%", maxWidth: 500 }}>
      {/* Ejes */}
      <line x1="60" y1="270" x2="460" y2="270" stroke="#475569" strokeWidth="1.5" />
      <line x1="60" y1="20" x2="60" y2="270" stroke="#475569" strokeWidth="1.5" />
      <text x="468" y="275" fill="#94A3B8" fontSize="11">Q</text>
      <text x="40" y="20" fill="#94A3B8" fontSize="11">P</text>
      {/* Demanda del mercado */}
      <line x1="80" y1="40" x2="420" y2="265" stroke="#B45309" strokeWidth="2.5" />
      <text x="425" y="268" fill="#FCD34D" fontSize="11" fontWeight="bold">D</text>
      {/* Ingreso Marginal (doble pendiente) */}
      <line x1="80" y1="40" x2="250" y2="265" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,3" />
      <text x="255" y="268" fill="#FCD34D" fontSize="10">IM</text>
      {/* Costo Marginal */}
      <line x1="60" y1="195" x2="460" y2="195" stroke="#B45309" strokeWidth="1.8" />
      <text x="465" y="198" fill="#FCD34D" fontSize="10">CM</text>
      {/* Q monopolio: IM = CM */}
      <circle cx="173" cy="195" r="5" fill="#FCD34D" />
      <line x1="173" y1="195" x2="173" y2="270" stroke="#B4530960" strokeWidth="1" strokeDasharray="3,3" />
      <text x="164" y="283" fill="#FCD34D" fontSize="9">Q_m</text>
      {/* P monopolio: sobre la curva de demanda */}
      <circle cx="173" cy="118" r="5" fill="#EF4444" />
      <line x1="60" y1="118" x2="173" y2="118" stroke="#EF444460" strokeWidth="1" strokeDasharray="3,3" />
      <text x="30" y="121" fill="#EF4444" fontSize="9">P_m</text>
      {/* Precio competitivo: P = CM */}
      <circle cx="300" cy="195" r="4" fill="#94A3B8" />
      <line x1="300" y1="195" x2="300" y2="270" stroke="#47556950" strokeWidth="1" strokeDasharray="3,3" />
      <text x="290" y="283" fill="#94A3B8" fontSize="9">Q_c</text>
      <line x1="60" y1="195" x2="460" y2="195" stroke="#47556980" strokeWidth="1" />
      <text x="30" y="198" fill="#94A3B8" fontSize="9">P_c</text>
      {/* DWL triángulo */}
      <polygon points="173,118 173,195 300,195" fill="#EF444430" stroke="#EF444460" strokeWidth="1" />
      <text x="210" y="168" fill="#EF4444" fontSize="10" fontWeight="bold">DWL</text>
      {/* Beneficio monopolio */}
      <rect x="60" y="118" width="113" height="77" fill="#B4530920" stroke="#B4530940" strokeWidth="1" />
      <text x="85" y="160" fill="#FCD34D" fontSize="9">Beneficio</text>
      <text x="82" y="172" fill="#FCD34D" fontSize="9">monopolio</text>
    </svg>
  );
}

function InfografiaGDP() {
  const componentes = [
    { label: "Consumo (C)", pct: 65, color: "#4338CA" },
    { label: "Inversión (I)", pct: 17, color: "#6366F1" },
    { label: "Gasto Público (G)", pct: 18, color: "#818CF8" },
    { label: "Export. Netas (NX)", pct: 0, color: "#A5B4FC" },
  ];
  const total = 100;
  let acum = 0;
  return (
    <svg viewBox="0 0 520 280" style={{ width: "100%", maxWidth: 520 }}>
      <text x="145" y="20" textAnchor="middle" fill="#94A3B8" fontSize="12">GDP = C + I + G + NX</text>
      {/* Barra horizontal */}
      {componentes.map((c, i) => {
        const x = 20 + (acum / total) * 360;
        const w = (c.pct / total) * 360;
        acum += c.pct;
        return (
          <g key={i}>
            <rect x={x} y="35" width={w > 0 ? w : 4} height="50" fill={c.color} rx="3" />
            {w > 30 && <text x={x + w / 2} y="64" textAnchor="middle" fill="#F1F5F9" fontSize="10" fontWeight="bold">{c.pct}%</text>}
          </g>
        );
      })}
      {/* Leyenda */}
      {componentes.map((c, i) => (
        <g key={i}>
          <rect x={20} y={105 + i * 28} width={16} height={14} fill={c.color} rx="2" />
          <text x={44} y={118 + i * 28} fill="#CBD5E1" fontSize="11">{c.label}</text>
        </g>
      ))}
      {/* Fórmulas GDP */}
      <rect x="260" y="100" width="245" height="155" fill="#1e293b" stroke="#4338CA40" strokeWidth="1" rx="8" />
      <text x="383" y="120" textAnchor="middle" fill="#818CF8" fontSize="11" fontWeight="bold">Identidades Clave</text>
      <text x="275" y="143" fill="#C4B5FD" fontSize="10">GDP Nominal = precios actuales</text>
      <text x="275" y="160" fill="#C4B5FD" fontSize="10">GDP Real = precios año base</text>
      <text x="275" y="185" fill="#A5B4FC" fontSize="10" fontWeight="bold">Deflactor = (GDP_N / GDP_R) × 100</text>
      <text x="275" y="210" fill="#C4B5FD" fontSize="10">Si Deflactor {">"} 100 → precios subieron</text>
      <text x="275" y="235" fill="#C4B5FD" fontSize="10">Inflación = Δ% en el Deflactor</text>
      <text x="275" y="250" fill="#6366F1" fontSize="9">NX = Exportaciones − Importaciones</text>
    </svg>
  );
}

function InfografiaCrecimiento() {
  return (
    <svg viewBox="0 0 560 300" style={{ width: "100%", maxWidth: 560 }}>
      <text x="280" y="20" textAnchor="middle" fill="#94A3B8" fontSize="12">Y = A · f(K, H) — Función de Producción Agregada</text>
      {/* Ejes */}
      <line x1="50" y1="260" x2="320" y2="260" stroke="#475569" strokeWidth="1.5" />
      <line x1="50" y1="30" x2="50" y2="260" stroke="#475569" strokeWidth="1.5" />
      <text x="328" y="265" fill="#94A3B8" fontSize="10">K (capital)</text>
      <text x="15" y="28" fill="#94A3B8" fontSize="10">Y</text>
      {/* Función A1 */}
      <path d="M 50 240 Q 120 140 200 100 Q 260 80 310 72" stroke="#065F46" strokeWidth="2" fill="none" />
      <text x="314" y="74" fill="#10B981" fontSize="10">A₁</text>
      {/* Función A2 (mayor tecnología) */}
      <path d="M 50 210 Q 120 110 200 70 Q 260 50 310 44" stroke="#10B981" strokeWidth="2.5" fill="none" />
      <text x="314" y="46" fill="#34D399" fontSize="10" fontWeight="bold">A₂ ↑ Tecnología</text>
      {/* Estado estacionario */}
      <line x1="200" y1="30" x2="200" y2="260" stroke="#065F4660" strokeWidth="1" strokeDasharray="4,3" />
      <text x="165" y="275" fill="#10B981" fontSize="8">Estado est.</text>
      {/* Flecha desplazamiento */}
      <text x="155" y="88" fill="#34D399" fontSize="16">↑</text>
      <text x="142" y="70" fill="#34D399" fontSize="8">Cambio</text>
      <text x="138" y="80" fill="#34D399" fontSize="8">tecnológico</text>
      {/* Panel derecho: motores del crecimiento */}
      <rect x="335" y="30" width="215" height="235" fill="#1e293b" stroke="#065F4640" strokeWidth="1" rx="8" />
      <text x="443" y="50" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">Motores del Crecimiento</text>
      {[
        { icon: "🏭", label: "Capital Físico (K)", sub: "Rendimientos decrecientes", color: "#10B981" },
        { icon: "🎓", label: "Capital Humano (H)", sub: "Educación y salud", color: "#6EE7B7" },
        { icon: "💡", label: "Tecnología (A/PTF)", sub: "Motor ilimitado → ∞", color: "#34D399" },
        { icon: "🏛️", label: "Instituciones", sub: "Causa fundamental", color: "#A7F3D0" },
      ].map((m, i) => (
        <g key={i}>
          <text x="350" y={80 + i * 48} fill="#F1F5F9" fontSize="16">{m.icon}</text>
          <text x="378" y={80 + i * 48} fill={m.color} fontSize="10" fontWeight="bold">{m.label}</text>
          <text x="378" y={94 + i * 48} fill="#94A3B8" fontSize="9">{m.sub}</text>
        </g>
      ))}
    </svg>
  );
}

const INFOGRAFIAS = {
  tres_pilares: InfografiaTresPilares,
  oferta_demanda: InfografiaOfertaDemanda,
  equilibrio: InfografiaEquilibrio,
  consumidor: InfografiaConsumidor,
  productor: InfografiaProductor,
  eficiencia: InfografiaEficiencia,
  externalidades: InfografiaExternalidades,
  monopolio: InfografiaMonopolio,
  gdp: InfografiaGDP,
  crecimiento: InfografiaCrecimiento,
};

/* ─── COMPONENTES UI ─────────────────────────────────────────────────────── */

const s = {
  app: { minHeight: "100vh", background: "#0f172a", color: "#f1f5f9", fontFamily: "var(--font)" },

  // Header
  header: { background: "#1e293b", borderBottom: "1px solid #334155", padding: "16px 24px", display: "flex", alignItems: "center", gap: 16, position: "sticky", top: 0, zIndex: 100 },
  headerTitle: { fontSize: 20, fontWeight: 700, color: "#f1f5f9", margin: 0 },
  headerSub: { fontSize: 13, color: "#94a3b8", margin: 0 },
  backBtn: { background: "#27354a", border: "1px solid #334155", borderRadius: 8, color: "#cbd5e1", padding: "8px 14px", fontSize: 13, cursor: "pointer" },

  // Grid de capítulos
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, padding: 24 },
  card: (color) => ({
    background: `${color}12`,
    border: `1px solid ${color}40`,
    borderRadius: 14,
    padding: 22,
    cursor: "pointer",
    transition: "all 0.2s",
  }),
  cardNum: (color) => ({ fontSize: 12, color, fontWeight: 600, marginBottom: 4, letterSpacing: 1 }),
  cardTitle: { fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 },
  cardSub: { fontSize: 12, color: "#94a3b8" },
  cardEmoji: { fontSize: 32, marginBottom: 10 },

  // Detalle del capítulo
  detalle: { maxWidth: 900, margin: "0 auto", padding: "24px 20px" },
  chapHeader: (color) => ({
    background: `${color}15`,
    border: `1px solid ${color}40`,
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 20,
  }),
  chapNum: (color) => ({ fontSize: 13, color, fontWeight: 600, marginBottom: 4 }),
  chapTitle: { fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 },
  chapSub: { fontSize: 14, color: "#94a3b8" },

  // Tabs
  tabs: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" },
  tab: (active, color) => ({
    padding: "8px 16px",
    borderRadius: 8,
    border: active ? `1px solid ${color}60` : "1px solid #334155",
    background: active ? `${color}20` : "#1e293b",
    color: active ? color : "#94a3b8",
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    cursor: "pointer",
    transition: "all 0.15s",
  }),

  // Secciones
  section: { background: "#1e293b", borderRadius: 12, padding: 20, marginBottom: 16 },
  sectionTitle: (color) => ({ fontSize: 15, fontWeight: 700, color, marginBottom: 14 }),
  resumenItem: { display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" },
  resumenDot: (color) => ({ width: 7, height: 7, borderRadius: "50%", background: color, marginTop: 7, flexShrink: 0 }),
  resumenText: { fontSize: 14, color: "#cbd5e1", lineHeight: 1.65 },

  // Conceptos
  concepto: (color) => ({
    background: `${color}0e`,
    border: `1px solid ${color}30`,
    borderRadius: 10,
    padding: "12px 14px",
    marginBottom: 10,
  }),
  conceptoTerm: (color) => ({ fontSize: 13, fontWeight: 700, color, marginBottom: 4 }),
  conceptoDef: { fontSize: 13, color: "#94a3b8", lineHeight: 1.5 },

  // Tips
  tip: (color) => ({
    display: "flex",
    gap: 10,
    padding: "10px 14px",
    background: `${color}0c`,
    borderLeft: `3px solid ${color}`,
    borderRadius: "0 8px 8px 0",
    marginBottom: 8,
    fontSize: 13,
    color: "#cbd5e1",
    lineHeight: 1.5,
  }),

  // Tabla
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: (color) => ({ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${color}30`, color, fontWeight: 600, fontSize: 12 }),
  td: { padding: "9px 12px", borderBottom: "1px solid #1e293b", color: "#cbd5e1" },

  // Infografía
  infoBg: { background: "#273549", borderRadius: 12, padding: 20, display: "flex", justifyContent: "center" },

  // Hero
  hero: { textAlign: "center", padding: "40px 24px 20px" },
  heroTitle: { fontSize: 32, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 },
  heroSub: { fontSize: 16, color: "#94a3b8", marginBottom: 4 },
  heroBadge: { display: "inline-block", background: "#1e293b", border: "1px solid #334155", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "#64748b", marginBottom: 28 },
};

/* ─── FLASHCARD ─────────────────────────────────────────────────────────── */
function Flashcards({ cap }) {
  const [idx, setIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const cards = cap.conceptos;
  const card = cards[idx];
  return (
    <div>
      <div style={{ textAlign: "right", color: "#64748b", fontSize: 12, marginBottom: 8 }}>
        {idx + 1} / {cards.length}
      </div>
      <div
        onClick={() => setFlip(f => !f)}
        style={{
          background: flip ? `${cap.color}18` : "#273549",
          border: `1px solid ${flip ? cap.color + "60" : "#334155"}`,
          borderRadius: 14,
          minHeight: 160,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 28,
          cursor: "pointer",
          textAlign: "center",
          transition: "all 0.25s",
          marginBottom: 14,
        }}
      >
        {!flip ? (
          <>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>📌 ¿Qué es?</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: cap.color }}>{card.termino}</div>
            <div style={{ fontSize: 11, color: "#475569", marginTop: 12 }}>← toca para ver definición →</div>
          </>
        ) : (
          <>
            <div style={{ fontSize: 11, color: "#64748b", marginBottom: 8 }}>💡 Definición</div>
            <div style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.6 }}>{card.def}</div>
          </>
        )}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          style={{ flex: 1, padding: "10px 0", background: "#273549", border: "1px solid #334155", borderRadius: 8, color: "#cbd5e1", fontSize: 13, cursor: "pointer" }}
          onClick={() => { setIdx(i => Math.max(0, i - 1)); setFlip(false); }}
          disabled={idx === 0}
        >← Anterior</button>
        <button
          style={{ flex: 1, padding: "10px 0", background: `${cap.color}20`, border: `1px solid ${cap.color}40`, borderRadius: 8, color: cap.color, fontSize: 13, cursor: "pointer", fontWeight: 600 }}
          onClick={() => { setIdx(i => Math.min(cards.length - 1, i + 1)); setFlip(false); }}
          disabled={idx === cards.length - 1}
        >Siguiente →</button>
      </div>
    </div>
  );
}

/* ─── TABLA COMPARATIVA ─────────────────────────────────────────────────── */
function TablaComparativa({ cap }) {
  const cuadro = cap.cuadro;
  if (!cuadro || cuadro.length === 0) return <div style={{ color: "#64748b" }}>Sin tabla disponible</div>;
  const headers = Object.keys(cuadro[0]);
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={s.table}>
        <thead>
          <tr style={{ background: `${cap.color}15` }}>
            {headers.map(h => <th key={h} style={s.th(cap.color)}>{h.charAt(0).toUpperCase() + h.slice(1)}</th>)}
          </tr>
        </thead>
        <tbody>
          {cuadro.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#1e293b" : "#273549" }}>
              {headers.map(h => <td key={h} style={s.td}>{row[h]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── DETALLE CAPÍTULO ───────────────────────────────────────────────────── */
function DetalleCapitulo({ cap, onBack }) {
  const [tab, setTab] = useState("resumen");
  const InfoComp = INFOGRAFIAS[cap.infografia];

  const TABS = [
    { id: "resumen", label: "📋 Resumen" },
    { id: "conceptos", label: "🔑 Conceptos" },
    { id: "infografia", label: "📊 Infografía" },
    { id: "cuadro", label: "📐 Cuadro" },
    { id: "flashcards", label: "🃏 Flashcards" },
    { id: "tips", label: "⚡ Tips Parcial" },
  ];

  return (
    <div>
      <div style={s.header}>
        <button style={s.backBtn} onClick={onBack}>← Volver</button>
        <div>
          <div style={s.headerTitle}>Economía 1 — {cap.emoji} Cap. {cap.numero}</div>
          <div style={s.headerSub}>{cap.titulo}</div>
        </div>
      </div>
      <div style={s.detalle}>
        <div style={s.chapHeader(cap.color)}>
          <div style={s.chapNum(cap.color)}>CAPÍTULO {cap.numero}</div>
          <div style={s.chapTitle}>{cap.emoji} {cap.titulo}</div>
          <div style={s.chapSub}>{cap.subtitulo}</div>
        </div>

        <div style={s.tabs}>
          {TABS.map(t => (
            <button key={t.id} style={s.tab(tab === t.id, cap.color)} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "resumen" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>Resumen del Capítulo</div>
            {cap.resumen.map((r, i) => (
              <div key={i} style={s.resumenItem}>
                <div style={s.resumenDot(cap.color)} />
                <div style={s.resumenText}>{r}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "conceptos" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>Conceptos Clave</div>
            {cap.conceptos.map((c, i) => (
              <div key={i} style={s.concepto(cap.color)}>
                <div style={s.conceptoTerm(cap.color)}>{c.termino}</div>
                <div style={s.conceptoDef}>{c.def}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "infografia" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>Infografía</div>
            <div style={s.infoBg}>
              {InfoComp ? <InfoComp /> : <div style={{ color: "#64748b" }}>Sin infografía</div>}
            </div>
          </div>
        )}

        {tab === "cuadro" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>Cuadro Comparativo / Sinóptico</div>
            <TablaComparativa cap={cap} />
          </div>
        )}

        {tab === "flashcards" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>Flashcards — Repaso Rápido</div>
            <Flashcards cap={cap} />
          </div>
        )}

        {tab === "tips" && (
          <div style={s.section}>
            <div style={s.sectionTitle(cap.color)}>⚡ Tips para el Parcial</div>
            <div style={{ marginBottom: 8, fontSize: 12, color: "#64748b" }}>
              Lo que NO podés olvidar para el examen:
            </div>
            {cap.tips.map((t, i) => (
              <div key={i} style={s.tip(cap.color)}>
                <span style={{ color: cap.color, fontWeight: 700, marginRight: 4 }}>→</span>
                {t}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── HOME ───────────────────────────────────────────────────────────────── */
function Home({ onSelect }) {
  const [hover, setHover] = useState(null);
  return (
    <div>
      <div style={s.header}>
        <div>
          <div style={s.headerTitle}>📚 Economía 1</div>
          <div style={s.headerSub}>Acemoglu, Laibson & List — UNSAM</div>
        </div>
      </div>
      <div style={s.hero}>
        <div style={s.heroBadge}>Prof. Emanuel Lopez · UNSAM · 1er Parcial</div>
        <div style={s.heroTitle}>Repaso para el Parcial</div>
        <div style={s.heroSub}>10 capítulos · infografías · flashcards · cuadros · tips de examen</div>
      </div>
      <div style={s.grid}>
        {CAPITULOS.map(cap => (
          <div
            key={cap.id}
            style={{
              ...s.card(cap.color),
              transform: hover === cap.id ? "translateY(-3px)" : "none",
              boxShadow: hover === cap.id ? `0 8px 30px ${cap.color}30` : "none",
            }}
            onMouseEnter={() => setHover(cap.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onSelect(cap)}
          >
            <div style={s.cardEmoji}>{cap.emoji}</div>
            <div style={s.cardNum(cap.color)}>CAPÍTULO {cap.numero}</div>
            <div style={s.cardTitle}>{cap.titulo}</div>
            <div style={s.cardSub}>{cap.subtitulo}</div>
            <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Resumen", "Conceptos", "Infografía", "Flashcards", "Tips"].map(tag => (
                <span key={tag} style={{
                  fontSize: 10,
                  background: `${cap.color}18`,
                  border: `1px solid ${cap.color}30`,
                  color: cap.color,
                  borderRadius: 4,
                  padding: "2px 7px",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── APP ROOT ───────────────────────────────────────────────────────────── */
export default function App() {
  const [capActivo, setCapActivo] = useState(null);
  return (
    <div style={s.app}>
      {capActivo
        ? <DetalleCapitulo cap={capActivo} onBack={() => setCapActivo(null)} />
        : <Home onSelect={setCapActivo} />
      }
    </div>
  );
}
