import { useState } from "react";

const PAL = {
  cap1:  { m:"#1D4ED8", bg:"#EFF6FF", bd:"#BFDBFE", t:"#1E40AF" },
  cap2:  { m:"#059669", bg:"#ECFDF5", bd:"#A7F3D0", t:"#065F46" },
  cap3:  { m:"#0F766E", bg:"#F0FDFA", bd:"#99F6E4", t:"#134E4A" },
  cap4:  { m:"#6D28D9", bg:"#F5F3FF", bd:"#DDD6FE", t:"#4C1D95" },
  cap5:  { m:"#D97706", bg:"#FFFBEB", bd:"#FDE68A", t:"#92400E" },
  cap6:  { m:"#0891B2", bg:"#ECFEFF", bd:"#A5F3FC", t:"#164E63" },
  cap7:  { m:"#DC2626", bg:"#FEF2F2", bd:"#FECACA", t:"#7F1D1D" },
  cap8:  { m:"#BE185D", bg:"#FDF2F8", bd:"#FBCFE8", t:"#831843" },
  cap9:  { m:"#B45309", bg:"#FEF3C7", bd:"#FDE68A", t:"#78350F" },
  cap10: { m:"#0369A1", bg:"#F0F9FF", bd:"#BAE6FD", t:"#0C4A6E" },
  cap11: { m:"#4338CA", bg:"#EEF2FF", bd:"#C7D2FE", t:"#312E81" },
  cap12: { m:"#065F46", bg:"#ECFDF5", bd:"#A7F3D0", t:"#022C22" },
};

/* ── UI ── */
function Fm({ title, formula, vars, nota, c }) {
  return (
    <div style={{ background:c.bg, border:`1px solid ${c.bd}`, borderRadius:10, padding:"14px 18px", marginBottom:12 }}>
      {title && <div style={{ fontSize:11, fontWeight:700, color:c.t, marginBottom:6, textTransform:"uppercase", letterSpacing:.5 }}>{title}</div>}
      <div style={{ fontFamily:"monospace", fontSize:17, fontWeight:700, color:c.m, background:"#fff",
        border:`1px solid ${c.bd}`, borderRadius:6, padding:"10px 16px", marginBottom:vars?10:0, textAlign:"center" }}>
        {formula}
      </div>
      {vars && <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {vars.map((v,i)=><span key={i} style={{ fontSize:12, background:"#fff", border:`1px solid ${c.bd}`,
          borderRadius:4, padding:"2px 8px", color:"#374151" }}><strong style={{color:c.m}}>{v.n}</strong>: {v.d}</span>)}
      </div>}
      {nota && <div style={{ marginTop:8, fontSize:12, color:c.t, fontStyle:"italic" }}>💡 {nota}</div>}
    </div>
  );
}

function Ej({ titulo, enunciado, datos, pasos, respuesta, c }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border:`1px solid ${c.bd}`, borderRadius:10, marginBottom:10, overflow:"hidden" }}>
      <button onClick={()=>setOpen(!open)} style={{ width:"100%", textAlign:"left", padding:"11px 16px",
        background:open?c.bg:"#fff", border:"none", cursor:"pointer", display:"flex", justifyContent:"space-between",
        alignItems:"center", fontWeight:600, fontSize:14, color:c.t }}>
        <span>📝 {titulo}</span><span style={{ color:c.m }}>{open?"▲":"▼"}</span>
      </button>
      {open && <div style={{ padding:"14px 16px", borderTop:`1px solid ${c.bd}`, background:c.bg }}>
        {enunciado && <p style={{ margin:"0 0 10px", fontSize:14, color:"#374151", lineHeight:1.5 }}>{enunciado}</p>}
        {datos && <div style={{ background:"#fff", borderRadius:6, padding:"8px 12px", marginBottom:10, border:`1px solid ${c.bd}` }}>
          <div style={{ fontSize:11, fontWeight:700, color:c.t, marginBottom:4 }}>DATOS</div>
          {datos.map((d,i)=><div key={i} style={{ fontSize:13, color:"#374151" }}>• {d}</div>)}
        </div>}
        <div style={{ marginBottom:10 }}>
          <div style={{ fontSize:11, fontWeight:700, color:c.t, marginBottom:6, textTransform:"uppercase" }}>Resolución paso a paso</div>
          {pasos.map((p,i)=><div key={i} style={{ display:"flex", gap:8, marginBottom:6, alignItems:"flex-start" }}>
            <span style={{ background:c.m, color:"#fff", borderRadius:"50%", width:20, height:20, display:"flex",
              alignItems:"center", justifyContent:"center", fontSize:11, flexShrink:0, marginTop:1 }}>{i+1}</span>
            <span style={{ fontSize:13, color:"#374151", lineHeight:1.5 }}>{p}</span>
          </div>)}
        </div>
        <div style={{ background:c.m, color:"#fff", borderRadius:8, padding:"10px 14px", fontSize:14, fontWeight:600 }}>✅ {respuesta}</div>
      </div>}
    </div>
  );
}

function Ck({ term, def, c }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={()=>setOpen(!open)} style={{ border:`1px solid ${c.bd}`, borderRadius:8, padding:"10px 14px",
      marginBottom:8, cursor:"pointer", background:open?c.bg:"#fff" }}>
      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontWeight:700, fontSize:14, color:c.t }}>{term}</span>
        <span style={{ color:c.m, fontSize:12 }}>{open?"▲":"▼"}</span>
      </div>
      {open && <p style={{ margin:"8px 0 0", fontSize:13, color:"#374151", lineHeight:1.5 }}>{def}</p>}
    </div>
  );
}

/* ── INTERACTIVE GRAPHS ── */
function GraficoOyD({ c }) {
  const [sa,setSa]=useState(5); const [sb,setSb]=useState(2);
  const [da,setDa]=useState(30); const [db,setDb]=useState(3);
  const [pmaxOn,setPmaxOn]=useState(false); const [pmax,setPmax]=useState(10);
  const Qe=(da-sa)/(sb+db); const Pe=sa+sb*Qe;
  const EC=Qe>0?0.5*Qe*(da-Pe):0; const EP=Qe>0?0.5*Qe*(Pe-sa):0;
  const W=340,H=250,ox=55,oy=H-30;
  const mQ=Math.max(Qe*2.2,1); const mP=da*1.1;
  const sx=q=>ox+(q/mQ)*(W-ox-15); const sy=p=>oy-(p/mP)*(oy-20);
  const eq_x=sx(Qe); const eq_y=sy(Pe);
  let pmQo=0,pmPerd=0;
  if(pmaxOn&&pmax<Pe&&pmax>sa){pmQo=(pmax-sa)/sb; pmPerd=(0.5*(Qe-pmQo)*(Pe-pmax));}
  return (
    <div style={{ background:"#fff", border:`1px solid ${c.bd}`, borderRadius:12, padding:16 }}>
      <div style={{ fontWeight:700, color:c.t, marginBottom:10, fontSize:14 }}>🔢 Calculadora Oferta & Demanda</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:10 }}>
        {[["Intercepto O (a)",sa,setSa,0,20],["Pendiente O (b)",sb,setSb,.5,10],
          ["Intercepto D (c)",da,setDa,10,60],["Pendiente D (d)",db,setDb,.5,10]].map(([l,v,s,mn,mx])=>(
          <label key={l} style={{fontSize:12,color:"#374151"}}>
            {l}<input type="range" min={mn} max={mx} step={.5} value={v} onChange={e=>s(+e.target.value)}
              style={{display:"block",width:"100%",accentColor:c.m}}/><span style={{color:c.m,fontWeight:700}}>{v}</span>
          </label>))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",maxWidth:W}}>
        <line x1={ox} y1={20} x2={ox} y2={oy} stroke="#9CA3AF" strokeWidth={1.5}/>
        <line x1={ox} y1={oy} x2={W-5} y2={oy} stroke="#9CA3AF" strokeWidth={1.5}/>
        <text x={ox+4} y={16} fontSize={10} fill="#6B7280">P</text>
        <text x={W-14} y={oy+12} fontSize={10} fill="#6B7280">Q</text>
        {Qe>0&&<><polygon points={`${eq_x},${eq_y} ${sx(0)},${sy(da)} ${ox},${eq_y}`} fill={c.m} fillOpacity={.15}/>
          <text x={ox+6} y={(eq_y+sy(da))/2} fontSize={9} fill={c.m} fontWeight="bold">EC</text>
          <polygon points={`${ox},${sy(sa)} ${eq_x},${eq_y} ${ox},${eq_y}`} fill="#F59E0B" fillOpacity={.2}/>
          <text x={ox+6} y={(sy(sa)+eq_y)/2+8} fontSize={9} fill="#B45309" fontWeight="bold">EP</text></>}
        <line x1={sx(0)} y1={sy(da)} x2={sx(da/db)} y2={sy(0)} stroke={c.m} strokeWidth={2}/>
        <text x={sx(0)-14} y={sy(da)} fontSize={10} fill={c.m} fontWeight="bold">D</text>
        <line x1={sx(0)} y1={sy(sa)} x2={sx((mP-sa)/sb)} y2={sy(mP)} stroke="#F59E0B" strokeWidth={2}/>
        <text x={sx((mP-sa)/sb)+2} y={sy(mP)+3} fontSize={10} fill="#B45309" fontWeight="bold">O</text>
        {Qe>0&&<><line x1={ox} y1={eq_y} x2={eq_x} y2={eq_y} stroke="#9CA3AF" strokeWidth={1} strokeDasharray="4"/>
          <line x1={eq_x} y1={oy} x2={eq_x} y2={eq_y} stroke="#9CA3AF" strokeWidth={1} strokeDasharray="4"/>
          <circle cx={eq_x} cy={eq_y} r={5} fill={c.m}/>
          <text x={eq_x+6} y={eq_y-4} fontSize={9} fill={c.t}>({Qe.toFixed(1)},{Pe.toFixed(1)})</text>
          <text x={ox-34} y={eq_y+3} fontSize={9} fill="#374151">P={Pe.toFixed(1)}</text>
          <text x={eq_x-8} y={oy+12} fontSize={9} fill="#374151">Q={Qe.toFixed(1)}</text></>}
        {pmaxOn&&pmax<Pe&&<line x1={ox} y1={sy(pmax)} x2={W-5} y2={sy(pmax)} stroke="#DC2626" strokeWidth={1.5} strokeDasharray="6 3"/>}
      </svg>
      {Qe>0&&<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginTop:6}}>
        {[["EC",EC.toFixed(2),c.m],["EP",EP.toFixed(2),"#B45309"],["ET",(EC+EP).toFixed(2),"#374151"]].map(([k,v,col])=>(
          <div key={k} style={{background:"#F9FAFB",borderRadius:6,padding:8,textAlign:"center",border:`1px solid ${c.bd}`}}>
            <div style={{fontSize:11,color:"#6B7280"}}>{k}</div>
            <div style={{fontSize:18,fontWeight:700,color:col}}>{v}</div>
          </div>))}
      </div>}
      <div style={{marginTop:10,padding:"8px 12px",background:"#FEF3C7",borderRadius:8,border:"1px solid #FDE68A"}}>
        <label style={{fontSize:13,fontWeight:600,color:"#92400E",display:"flex",alignItems:"center",gap:8}}>
          <input type="checkbox" checked={pmaxOn} onChange={e=>setPmaxOn(e.target.checked)}/>
          Simular Precio Máximo
        </label>
        {pmaxOn&&<><input type="range" min={0} max={Math.floor(Pe)} step={.5} value={pmax}
          onChange={e=>setPmax(+e.target.value)} style={{display:"block",width:"100%",marginTop:4,accentColor:"#DC2626"}}/>
          <div style={{fontSize:12,color:"#7F1D1D",marginTop:2}}>
            Pmax={pmax} | Q_ofrecida={(pmax>sa?(pmax-sa)/sb:0).toFixed(2)} | Pérdida eficiencia≈{pmPerd.toFixed(2)}
          </div></>}
      </div>
    </div>
  );
}

function GraficoMonopolio({ c }) {
  const [a,setA]=useState(24); const [b,setB]=useState(1); const [mc,setMc]=useState(4);
  const Qopt=(a-mc)/(2*b); const Popt=a-b*Qopt; const benef=(Popt-mc)*Qopt;
  const W=340,H=250,ox=50,oy=H-30;
  const mQ=Math.max(Qopt*2.5,1); const mP=a*1.1;
  const sx=q=>ox+(q/mQ)*(W-ox-15); const sy=p=>oy-(p/mP)*(oy-20);
  return (
    <div style={{background:"#fff",border:`1px solid ${c.bd}`,borderRadius:12,padding:16}}>
      <div style={{fontWeight:700,color:c.t,marginBottom:10,fontSize:14}}>🔢 Calculadora Monopolio — P = a − b·Q</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:10}}>
        {[["a (intercepto D)",a,setA,8,50],["b (pendiente)",b,setB,.5,5],["CM",mc,setMc,0,20]].map(([l,v,s,mn,mx])=>(
          <label key={l} style={{fontSize:12,color:"#374151"}}>
            {l}<input type="range" min={mn} max={mx} step={.5} value={v} onChange={e=>s(+e.target.value)}
              style={{display:"block",width:"100%",accentColor:c.m}}/><span style={{color:c.m,fontWeight:700}}>{v}</span>
          </label>))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",maxWidth:W}}>
        <line x1={ox} y1={20} x2={ox} y2={oy} stroke="#9CA3AF" strokeWidth={1.5}/>
        <line x1={ox} y1={oy} x2={W-5} y2={oy} stroke="#9CA3AF" strokeWidth={1.5}/>
        {Qopt>0&&<rect x={ox} y={sy(Popt)} width={sx(Qopt)-ox} height={sy(mc)-sy(Popt)} fill={c.m} fillOpacity={.15}/>}
        <line x1={sx(0)} y1={sy(a)} x2={sx(a/b)} y2={sy(0)} stroke={c.m} strokeWidth={2}/>
        <text x={sx(0)-14} y={sy(a)+4} fontSize={10} fill={c.m} fontWeight="bold">D</text>
        <line x1={sx(0)} y1={sy(a)} x2={sx(a/(2*b))} y2={sy(0)} stroke="#7C3AED" strokeWidth={2}/>
        <text x={sx(a/(2*b))+2} y={sy(0)+11} fontSize={10} fill="#7C3AED" fontWeight="bold">IM</text>
        <line x1={ox} y1={sy(mc)} x2={W-5} y2={sy(mc)} stroke="#DC2626" strokeWidth={2} strokeDasharray="6 3"/>
        <text x={W-12} y={sy(mc)-3} fontSize={9} fill="#DC2626" fontWeight="bold">CM</text>
        {Qopt>0&&<><line x1={ox} y1={sy(Popt)} x2={sx(Qopt)} y2={sy(Popt)} stroke="#9CA3AF" strokeWidth={1} strokeDasharray="4"/>
          <line x1={sx(Qopt)} y1={oy} x2={sx(Qopt)} y2={sy(Popt)} stroke="#9CA3AF" strokeWidth={1} strokeDasharray="4"/>
          <circle cx={sx(Qopt)} cy={sy(mc)} r={4} fill="#DC2626"/>
          <circle cx={sx(Qopt)} cy={sy(Popt)} r={4} fill={c.m}/>
          <text x={ox-34} y={sy(Popt)+3} fontSize={9} fill={c.t}>P*={Popt.toFixed(1)}</text>
          <text x={sx(Qopt)-8} y={oy+12} fontSize={9} fill={c.t}>Q*={Qopt.toFixed(1)}</text></>}
      </svg>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginTop:6}}>
        {[["Q*",Qopt.toFixed(2)],["P*",Popt.toFixed(2)],["Beneficios",benef.toFixed(2)]].map(([k,v])=>(
          <div key={k} style={{background:"#F9FAFB",borderRadius:6,padding:8,textAlign:"center",border:`1px solid ${c.bd}`}}>
            <div style={{fontSize:11,color:"#6B7280"}}>{k}</div>
            <div style={{fontSize:18,fontWeight:700,color:c.m}}>{v}</div>
          </div>))}
      </div>
      <div style={{marginTop:6,fontSize:12,color:"#6B7280",background:"#F9FAFB",borderRadius:6,padding:8}}>
        IM = {a} − {2*b}·Q &nbsp;|&nbsp; Q* donde IM=CM: ({a}−{mc})/(2×{b}) = {Qopt.toFixed(2)} &nbsp;|&nbsp; P* = (a+CM)/2 = {Popt.toFixed(2)}
      </div>
    </div>
  );
}

function GraficoPresupuesto({ c }) {
  const [M,setM]=useState(1000); const [Px,setPx]=useState(25); const [Py,setPy]=useState(40);
  const maxX=M/Px; const maxY=M/Py; const co=Px/Py;
  return (
    <div style={{background:"#fff",border:`1px solid ${c.bd}`,borderRadius:12,padding:16}}>
      <div style={{fontWeight:700,color:c.t,marginBottom:10,fontSize:14}}>🔢 Restricción Presupuestaria</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:10}}>
        {[["M (ingreso)",M,setM,200,3000,100],["Px",Px,setPx,5,200,5],["Py",Py,setPy,5,200,5]].map(([l,v,s,mn,mx,st=1])=>(
          <label key={l} style={{fontSize:12,color:"#374151"}}>
            {l}<input type="range" min={mn} max={mx} step={st} value={v} onChange={e=>s(+e.target.value)}
              style={{display:"block",width:"100%",accentColor:c.m}}/><span style={{color:c.m,fontWeight:700}}>{v}</span>
          </label>))}
      </div>
      <svg viewBox="0 0 340 250" style={{width:"100%",maxWidth:340}}>
        <line x1={50} y1={20} x2={50} y2={220} stroke="#9CA3AF" strokeWidth={1.5}/>
        <line x1={50} y1={220} x2={330} y2={220} stroke="#9CA3AF" strokeWidth={1.5}/>
        <text x={18} y={25} fontSize={11} fill="#374151">Qy</text>
        <text x={318} y={233} fontSize={11} fill="#374151">Qx</text>
        <line x1={50} y1={35} x2={325} y2={220} stroke={c.m} strokeWidth={2.5}/>
        <circle cx={50} cy={35} r={5} fill={c.m}/>
        <text x={55} y={32} fontSize={10} fill={c.t} fontWeight="bold">M/Py={maxY.toFixed(1)}</text>
        <circle cx={325} cy={220} r={5} fill={c.m}/>
        <text x={285} y={215} fontSize={10} fill={c.t} fontWeight="bold">M/Px={maxX.toFixed(1)}</text>
        <text x={165} y={145} fontSize={11} fill={c.m} fontWeight="bold" transform="rotate(-38,165,145)">pendiente=−{co.toFixed(2)}</text>
      </svg>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:6,marginTop:6}}>
        {[["Máx Qx",maxX.toFixed(1)],["Máx Qy",maxY.toFixed(1)],["CO de X en Y",co.toFixed(2)]].map(([k,v])=>(
          <div key={k} style={{background:"#F9FAFB",borderRadius:6,padding:8,textAlign:"center",border:`1px solid ${c.bd}`}}>
            <div style={{fontSize:11,color:"#6B7280"}}>{k}</div>
            <div style={{fontSize:18,fontWeight:700,color:c.m}}>{v}</div>
          </div>))}
      </div>
      <div style={{marginTop:6,fontSize:12,color:"#6B7280"}}>
        Ecuación: {Px}·Qx + {Py}·Qy = {M} &nbsp;|&nbsp; Qy = {maxY.toFixed(1)} − {co.toFixed(2)}·Qx
      </div>
    </div>
  );
}

/* ── CHAPTERS ── */
const CAPS = [
{ id:"cap1", num:1, emoji:"🔬", titulo:"Principios de Economía", sub:"Optimización · Equilibrio · Empirismo", pal:"cap1",
  teoria:[
    "La economía estudia cómo agentes racionales asignan recursos escasos frente a necesidades ilimitadas.",
    "Tres principios organizan todo el análisis económico: (1) Optimización: los agentes eligen lo mejor dadas sus restricciones. (2) Equilibrio: nadie tiene incentivo de cambiar su conducta. (3) Empirismo: las teorías se validan con datos.",
    "Economía positiva: describe el mundo como es (verificable). Economía normativa: prescribe cómo debería ser (juicio de valor).",
    "Costo de oportunidad: lo que se resigna al elegir. El verdadero costo de cualquier decisión. Siempre está presente.",
    "Análisis marginal: comparar el beneficio marginal (BM: ganancia de la última unidad producida/consumida) y el costo marginal (CM: costo de esa última unidad). El óptimo siempre es donde BM = CM.",
  ],
  conceptos:[
    {t:"Optimización", d:"Elegir la mejor opción dadas las restricciones. Se usa análisis marginal: comparar el Beneficio Marginal (BM) y el Costo Marginal (CM) de la última unidad. Mientras BM > CM, conviene hacer más."},
    {t:"Equilibrio", d:"Nadie tiene incentivo de cambiar. Ejemplo del prof: filas del supermercado — en equilibrio todas tardan igual, si una fuera más corta todos migrarían."},
    {t:"Empirismo", d:"Las hipótesis se validan con datos. La evidencia empírica guía y corrige las teorías."},
    {t:"Economía Positiva", d:"Describe hechos verificables. 'Si sube el precio, cae la demanda'. Se puede probar con datos."},
    {t:"Economía Normativa", d:"Juicios de valor. 'El Estado debería subsidiar educación'. No verificable con datos."},
    {t:"Costo de Oportunidad", d:"Valor de la mejor alternativa resignada. Al abrir un kiosco, el CO es el sueldo que dejás de ganar + el alquiler que podrías cobrar por el local."},
    {t:"Análisis Marginal", d:"Comparar el beneficio y costo de UNA unidad más. Si BM>CM: producí/consumí más. Si BM<CM: reducí."},
    {t:"Problema del Polizón", d:"Ejemplo del prof: estudiantes que comparten depto y nadie quiere limpiar. El interés individual choca con el colectivo → falla de mercado."},
  ],
  formulas:[
    {title:"Condición de óptimo", formula:"BM = CM", vars:[{n:"BM",d:"beneficio marginal (última unidad)"},{n:"CM",d:"costo marginal (última unidad)"}], nota:"Mientras BM>CM: hacé más. Cuando BM<CM: hacé menos. El óptimo está en BM=CM."},
    {title:"Costo de Oportunidad", formula:"CO = Valor de la mejor alternativa resignada", nota:"No es el precio pagado. Es lo que dejás de obtener."},
  ],
  ejercicios:[
    {titulo:"Contaminación — Óptimo marginal (del profesor)",
     enunciado:"Se puede reducir la contaminación 0–4 unidades. Encontrar el nivel óptimo.",
     datos:["BT = Beneficio Total (ganancia social de reducir contaminación). CT = Costo Total (costo de hacerlo).",
       "Red=0: BT=0, CT=0","Red=1: BT=20, CT=9","Red=2: BT=38, CT=20","Red=3: BT=54, CT=33","Red=4: BT=68, CT=48"],
     pasos:["Calcular BM (Beneficio Marginal = ΔBT, variación en Beneficio Total): BM1=20, BM2=18, BM3=16, BM4=14.",
       "Calcular CM (Costo Marginal = ΔCT, variación en Costo Total): CM1=9, CM2=11, CM3=13, CM4=15.",
       "Comparar BM vs CM en cada nivel: Red=1: BM(20)>CM(9)✓. Red=2: BM(18)>CM(11)✓. Red=3: BM(16)>CM(13)✓. Red=4: BM(14)<CM(15)✗ → no conviene.",
       "Beneficio Neto (BN = BT − CT): BN1=11, BN2=18, BN3=21(MAX), BN4=20.",
       "Óptimo = 3 unidades (último nivel donde BM≥CM, y donde el BN se maximiza)."],
     respuesta:"Óptimo: 3 unidades de reducción. BN (Beneficio Neto) máximo = 21."},
    {titulo:"Kiosco — Costo de oportunidad económico",
     enunciado:"Persona abre un kiosco en su local. Ventas $3000/mes, costos explícitos $1500. Podría cobrar $500 de alquiler o ganar $800 en otro trabajo.",
     datos:["Ventas: $3000","Costos explícitos: $1500","CO local: $500/mes","CO trabajo: $800/mes"],
     pasos:["Ganancia contable: 3000 − 1500 = $1500.",
       "CO total (implícito): 500 + 800 = $1300.",
       "Costo económico: 1500 + 1300 = $2800.",
       "Beneficio económico: 3000 − 2800 = $200."],
     respuesta:"Beneficio económico = $200 (no $1500). El economista SIEMPRE incluye los costos de oportunidad implícitos."},
  ],
  tips:["Los 3 principios: OPTIMIZACIÓN, EQUILIBRIO y EMPIRISMO — memorizalos así.",
    "Positivo = descripción verificable. Normativo = juicio de valor. Te van a preguntar la diferencia.",
    "CO NO es el precio pagado: es lo que resignás al elegir esta opción.",
    "Óptimo marginal: mientras BM>CM conviene seguir. El punto óptimo es BM=CM.",
    "Equilibrio = nadie tiene incentivo de cambiar (ejemplo supermercado: filas iguales)."],
},

{ id:"cap2", num:2, emoji:"📈", titulo:"Oferta y Demanda", sub:"Las fuerzas del mercado", pal:"cap2",
  teoria:[
    "Ley de la Demanda: relación NEGATIVA entre precio y cantidad demandada (ceteris paribus). La curva de demanda tiene pendiente negativa.",
    "Ley de la Oferta: relación POSITIVA entre precio y cantidad ofrecida. La curva de oferta tiene pendiente positiva.",
    "CRÍTICO — Movimiento vs. Desplazamiento: Si cambia el PRECIO del bien → movimiento a lo largo de la curva (no se desplaza). Si cambia CUALQUIER OTRA cosa → la curva entera se desplaza.",
    "Demanda se desplaza por: ingreso, precios de bienes sustitutos/complementarios, preferencias, expectativas, nº compradores.",
    "Oferta se desplaza por: costos de insumos, tecnología (fracking desplazó la oferta de petróleo a la derecha), precios de otros bienes producibles, nº vendedores.",
  ],
  conceptos:[
    {t:"Disposición a Pagar (DAP)", d:"Máximo que un consumidor pagaría por una unidad adicional = beneficio marginal. La curva de demanda = suma horizontal de todas las DAP individuales."},
    {t:"Disposición a Aceptar (DAA)", d:"Mínimo precio al que un vendedor vendería una unidad = costo marginal de producción. La curva de oferta = suma de todas las DAA."},
    {t:"Bienes Sustitutos", d:"Nafta súper y nafta premium: si sube el precio de uno, sube la demanda del otro. Relación DIRECTA entre precio de A y demanda de B."},
    {t:"Bienes Complementarios", d:"Autos y nafta: si sube el precio de los autos, cae la demanda de nafta. Relación INVERSA entre precio de A y demanda de B."},
    {t:"Bien Normal vs Inferior", d:"Normal: si sube ingreso, sube demanda. Inferior: si sube ingreso, CAJA la demanda (ej: fideos baratos cuando te va mejor comés menos)."},
    {t:"Elasticidad Precio Demanda", d:"Mide sensibilidad de Q_D ante cambios en P. |ε|>1: elástica (Q cambia mucho). |ε|<1: inelástica (Q cambia poco)."},
  ],
  formulas:[
    {title:"Elasticidad Precio de la Demanda", formula:"ε_D = (Δ%Q_D) / (Δ%P)",
     vars:[{n:"ε_D",d:"siempre negativa (ley de la demanda)"},{n:"Δ%Q_D",d:"variación % en cantidad"},{n:"Δ%P",d:"variación % en precio"}],
     nota:"Si |ε|>1: elástica. |ε|<1: inelástica. |ε|=1: unitaria."},
    {title:"Elasticidad Precio de la Oferta", formula:"ε_O = (Δ%Q_O) / (Δ%P)",
     vars:[{n:"ε_O",d:"siempre positiva (ley de la oferta)"}],
     nota:"Siempre positiva. El ejemplo del prof: ε_D ≈ −6 en el ejercicio Cachalote."},
    {title:"Demanda de Mercado", formula:"Q_mercado = ΣQ_individuales(P)",
     nota:"Suma HORIZONTAL de las curvas individuales a cada nivel de precio."},
  ],
  ejercicios:[
    {titulo:"Cachalote S.A. — Elasticidad",
     enunciado:"Demanda P=3500−100q. Equilibrio viejo Qe=5, Pe=3000. Nueva oferta P=1000+300q. Calcular nueva elasticidad precio de la demanda.",
     datos:["Demanda: P = 3500 − 100q","Nueva oferta: P = 1000 + 300q","Equilibrio viejo: Q=5, P=3000"],
     pasos:["Nuevo equilibrio: 1000+300q=3500−100q → 400q=2500 → Qe'=6.25. Pe'=1000+300×6.25=2875.",
       "ΔQ = 6.25−5 = 1.25; Q_prom = 5.625; Δ%Q = (1.25/5.625)×100 = 22.2%.",
       "ΔP = 2875−3000 = −125; P_prom = 2937.5; Δ%P = (−125/2937.5)×100 = −4.26%.",
       "ε = 22.2/−4.26 ≈ −5.2 (el prof redondea a −6)."],
     respuesta:"ε ≈ −5 a −6 (demanda muy elástica). Ante una caída de precios del ~4%, la cantidad demandada sube ~22%."},
  ],
  tips:["MOVIMIENTO: cambia el precio del MISMO bien → nos movemos SOBRE la curva (la curva no se mueve).",
    "DESPLAZAMIENTO: cambia CUALQUIER OTRA COSA → la curva ENTERA se mueve.",
    "Sustitutos: precio de A sube → demanda de B SUBE. Complementarios: precio de A sube → demanda de B BAJA.",
    "La DAP (demanda) tiene pendiente negativa. La DAA (oferta) tiene pendiente positiva.",
    "ExxonMobil: si el precio sube, conviene extraer a mayor profundidad → oferta sube. Fracking = tecnología que desplazó la oferta a la derecha."],
  grafico:"od",
},

{ id:"cap3", num:3, emoji:"⚖️", titulo:"Equilibrio e Intervención", sub:"Precios máximos, mínimos y pérdida de eficiencia", pal:"cap3",
  teoria:[
    "Equilibrio: precio P* donde Q_O (cantidad ofrecida) = Q_D (cantidad demandada). Es el precio que vacía el mercado.",
    "Precio Máximo (techo): fijado POR DEBAJO del equilibrio → genera ESCASEZ (Q_D > Q_O: se demanda más de lo que se ofrece). Ejemplo: control de alquileres.",
    "Precio Mínimo (piso): fijado POR ENCIMA del equilibrio → genera EXCEDENTE (Q_O > Q_D: se ofrece más de lo que se demanda). Ejemplo: salario mínimo.",
    "Toda intervención aleja el precio del equilibrio y genera peso muerto (pérdida de eficiencia). El Excedente Total (ET = Excedente del Consumidor + Excedente del Productor) es menor que en el mercado libre.",
  ],
  conceptos:[
    {t:"Excedente del Consumidor (EC)", d:"Área del triángulo entre la curva de demanda y el precio pagado. Lo que los compradores 'ganan' al pagar menos de su DAP máxima."},
    {t:"Excedente del Productor (EP)", d:"Área del triángulo entre el precio recibido y la curva de oferta. Lo que los vendedores ganan al cobrar más que su DAA mínima."},
    {t:"Excedente Total (ET)", d:"ET = EC + EP. Mide el bienestar total de la sociedad. Se maximiza en el equilibrio libre."},
    {t:"Peso Muerto", d:"Pérdida de ET por alejarse del equilibrio. Es pura ineficiencia: nadie la captura, simplemente desaparece."},
    {t:"Precio Máximo Efectivo", d:"Solo genera efectos si P_max < P_equilibrio. Si P_max > P_eq, el mercado no cambia."},
  ],
  formulas:[
    {title:"Equilibrio: igualar O y D", formula:"Q_O(P) = Q_D(P) → Qe, Pe",
     nota:"Igualar ecuaciones y despejar Q. Luego reemplazar en cualquiera para hallar P."},
    {title:"Excedente del Consumidor", formula:"EC = (1/2) × Qe × (P_máx_D − Pe)",
     vars:[{n:"P_máx_D",d:"precio al que Q=0 en la demanda (intercepto Y)"},{n:"Pe",d:"precio de equilibrio"},{n:"Qe",d:"cantidad de equilibrio"}],
     nota:"Triángulo SOBRE el precio y BAJO la curva de demanda."},
    {title:"Excedente del Productor", formula:"EP = (1/2) × Qe × (Pe − P_mín_O)",
     vars:[{n:"P_mín_O",d:"precio al que Q=0 en la oferta (intercepto Y)"}],
     nota:"Triángulo BAJO el precio y SOBRE la curva de oferta."},
    {title:"Excedente Total", formula:"ET = EC + EP",
     nota:"El mercado competitivo maximiza el ET. Cualquier desvío crea peso muerto."},
  ],
  ejercicios:[
    {titulo:"Mercado — Equilibrio + Excedentes (del profesor)",
     enunciado:"Oferta: P = 2q + 5. Demanda: P = 30 − 3q. Calcular equilibrio, EC, EP y ET.",
     datos:["Oferta: P = 2q + 5 → intercepto P=5","Demanda: P = 30 − 3q → intercepto P=30"],
     pasos:["Igualar: 2q+5 = 30−3q → 5q = 25 → Qe = 5.",
       "Pe = 2(5)+5 = 15.",
       "EC: altura = 30−15=15; EC = (1/2)×5×15 = 37.5.",
       "EP: altura = 15−5=10; EP = (1/2)×5×10 = 25.",
       "ET = 37.5 + 25 = 62.5."],
     respuesta:"Qe=5, Pe=15. EC=37.5, EP=25, ET=62.5."},
    {titulo:"Precio Máximo Pmax=10 — Pérdida de eficiencia",
     enunciado:"Con el mismo mercado anterior (Qe=5, Pe=15, ET=62.5), el gobierno fija Pmax=10.",
     datos:["Equilibrio libre: Qe=5, Pe=15, ET=62.5","Pmax=10 (efectivo porque 10<15)"],
     pasos:["Con Pmax=10, la cantidad la fija la OFERTA (Q_O = cantidad ofrecida): Q_O=(10−5)/2 = 2.5.",
       "Nuevo EP: triángulo con base=2.5, altura=(10−5)=5. EP=(1/2)×2.5×5=6.25.",
       "Nuevo EC: el resultado del profesor es EC=40.625 (se calcula como trapecio).",
       "ET_nuevo = 40.625+6.25 = 46.875.",
       "Pérdida de eficiencia = 62.5 − 46.875 = 15.625."],
     respuesta:"Con Pmax=10: EC=40.625, EP=6.25, ET=46.875. Pérdida de eficiencia = 15.625."},
    {titulo:"Cachalote S.A. — Equilibrio + Excedentes",
     enunciado:"Oferta: P=1500+300q. Demanda: P=3500−100q. a) Equilibrio. b) EC, EP, ET.",
     datos:["Oferta: P=1500+300q","Demanda: P=3500−100q"],
     pasos:["1500+300q=3500−100q → 400q=2000 → Qe=5.",
       "Pe=1500+300×5=3000.",
       "EC: intercepto D=3500. Altura=3500−3000=500. EC=(1/2)×5×500=1250.",
       "EP: intercepto O=1500. Altura=3000−1500=1500. EP=(1/2)×5×1500=3750.",
       "ET=1250+3750=5000."],
     respuesta:"Qe=5, Pe=3000. EC=1250, EP=3750, ET=5000."},
  ],
  tips:["Para hallar equilibrio: igualar P_O = P_D, despejar Q, luego reemplazar en una ecuación para P.",
    "EC: triángulo ARRIBA del precio pagado. EP: triángulo ABAJO del precio recibido.",
    "Pmax EFECTIVO solo si P_max < P_equilibrio. Si está encima, no cambia nada.",
    "Con Pmax: la cantidad transada la fija la oferta (cuello de botella en el lado del vendedor).",
    "Peso muerto = ET_libre − ET_con_intervención. Es lo que la sociedad pierde en total."],
  grafico:"od",
},

{ id:"cap4", num:4, emoji:"🧠", titulo:"El Consumidor", sub:"Restricción presupuestaria y optimización", pal:"cap4",
  teoria:[
    "La restricción presupuestaria muestra todas las combinaciones de bienes que el consumidor puede adquirir con su ingreso M.",
    "La pendiente de la restricción presupuestaria es −Px/Py, que equivale al costo de oportunidad de X en términos de Y.",
    "El consumidor optimiza cuando el beneficio marginal (BM: satisfacción adicional de una unidad más) por peso gastado es igual en todos los bienes: BM_x/Px = BM_y/Py.",
    "Esto equivale a encontrar el punto de la restricción presupuestaria que toca la curva de indiferencia más alta posible.",
    "Si BM_x/Px > BM_y/Py: el peso rinde más en X → comprá más X y menos Y, hasta que los cocientes se igualen.",
  ],
  conceptos:[
    {t:"Restricción Presupuestaria", d:"Px·Qx + Py·Qy = M. Muestra el límite de lo que se puede comprar. Pendiente = −Px/Py = costo de oportunidad."},
    {t:"Interceptos", d:"Qx_máx = M/Px (si gasta todo en X). Qy_máx = M/Py (si gasta todo en Y)."},
    {t:"Costo de Oportunidad (CO)", d:"CO de una unidad de X en términos de Y = Px/Py. Si ropa cuesta $200 y pantalón $400, CO de un pantalón = 2 remeras."},
    {t:"Beneficio Marginal (BM)", d:"Satisfacción adicional de consumir una unidad más. Decreciente: cuanto más tengo de algo, menos me importa una unidad extra."},
    {t:"Condición de Optimización", d:"BM_x/P_x = BM_y/P_y. El beneficio marginal por peso gastado debe igualarse en todos los bienes."},
    {t:"Curvas de Indiferencia", d:"Muestran combinaciones que generan la misma satisfacción. Convexa al origen. El consumidor quiere llegar a la curva más alta posible."},
  ],
  formulas:[
    {title:"Restricción Presupuestaria", formula:"Px·Qx + Py·Qy = M",
     vars:[{n:"Px,Py",d:"precios de los bienes X e Y"},{n:"Qx,Qy",d:"cantidades consumidas"},{n:"M",d:"ingreso disponible"}],
     nota:"Pendiente = −Px/Py. Intercepto en Y: M/Py. Intercepto en X: M/Px."},
    {title:"Costo de Oportunidad de X", formula:"CO_x = Px / Py",
     nota:"Unidades de Y a las que se renuncia por consumir 1 unidad más de X."},
    {title:"Condición de Optimización", formula:"BM_x / Px = BM_y / Py",
     nota:"'El mismo gusto por el gasto': el peso gastado en X y en Y rinde lo mismo. Si BM_x/Px > BM_y/Py → comprá más X."},
  ],
  ejercicios:[
    {titulo:"Maya y los libros (del profesor)",
     enunciado:"Maya gana $1000/mes. Ropa a $25, libros a $40. a) Ecuación y restricción. b) Interceptos. c) Si el libro sube a $50, nueva restricción.",
     datos:["M=1000, P_ropa=25, P_libro=40 (luego P_libro=50)"],
     pasos:["a) Ecuación: 25·Q_r + 40·Q_l = 1000.",
       "b) Intercepto ropa: 1000/25=40. Intercepto libros: 1000/40=25.",
       "Pendiente: Q_r = 40 − (40/25)·Q_l = 40 − 1.6·Q_l.",
       "c) Nuevo P_libro=50: 25·Q_r + 50·Q_l = 1000.",
       "Nuevo intercepto libros: 1000/50=20 (bajó de 25 a 20). El intercepto de ropa no cambia: 40.",
       "Nueva pendiente: Q_r = 40 − 2·Q_l. El CO de un libro subió de 1.6 a 2 remeras."],
     respuesta:"Con P_libro=40: Qr_max=40, Ql_max=25. Con P_libro=50: Qr_max=40, Ql_max=20, CO sube a 2 remeras."},
    {titulo:"Jerséis y pantalones — Optimización BM/P (del profesor)",
     enunciado:"M=$300, P_jersey=$25, P_pantalón=$50. Tabla de beneficios marginales dada. Encontrar la cesta óptima.",
     datos:["M=300, P_j=25, P_p=50","Con 3 jerseys: BM_j=75, BM_j/P_j=3","Con 6 jerseys: BM_j=50, BM_j/P_j=2","Con 3 pantalones: BM_p=100, BM_p/P_p=2","Con 6 pantalones: BM_p=10 (muy bajo)"],
     pasos:["Comparar BM/P en cada paso.",
       "Con 3 jerseys (gastamos $75): BM_j/P_j=3. Con 3 pantalones: BM_p/P_p=2. El jersey rinde más → compramos más jerseys.",
       "Con 6 jerseys (gastamos $150): BM_j/P_j=2. Con 3 pantalones: BM_p/P_p=2. Ahora son iguales → óptimo.",
       "Gasto total: 6×25 + 3×50 = 150+150 = 300 = M ✓.",
       "Verificar: BM_j/P_j = BM_p/P_p = 2. Condición de optimización cumplida."],
     respuesta:"Óptimo: 6 jerseys + 3 pantalones. Gasto total = $300. BM por peso gastado = 2 en ambos bienes."},
    {titulo:"Ropa — Costo de oportunidad",
     enunciado:"M=$1600, P_remera=$200, P_pantalón=$400. b) CO de un pantalón. c) El pantalón sube a $800, nuevo CO.",
     datos:["M=1600, P_r=200, P_p=400 (luego P_p=800)"],
     pasos:["Ecuación: 200·Q_r + 400·Q_p = 1600.",
       "Intercepto remeras: 1600/200=8. Intercepto pantalones: 1600/400=4.",
       "CO de un pantalón = P_p/P_r = 400/200 = 2 remeras.",
       "Con P_p=800: CO = 800/200 = 4 remeras. Cada pantalón cuesta 4 remeras ahora."],
     respuesta:"CO pantalón original = 2 remeras. Con precio duplicado = 4 remeras."},
  ],
  tips:["La pendiente de la restricción = −Px/Py = CO de X en términos de Y.",
    "Cuando sube el precio de un bien, SOLO ese intercepto cambia (el otro queda igual).",
    "Optimización: BM_x/Px = BM_y/Py. Si el cociente es mayor para X, comprá más X.",
    "El BM es DECRECIENTE: cuanto más tenés de algo, menos vale la siguiente unidad.",
    "En el óptimo, el gasto agota todo el ingreso: Px·Qx* + Py·Qy* = M."],
  grafico:"presupuesto",
},

{ id:"cap5", num:5, emoji:"🏭", titulo:"El Productor", sub:"Costos y equilibrio de la empresa competitiva", pal:"cap5",
  teoria:[
    "Costos fijos (CF): no varían con la producción (alquiler, maquinaria). Costos variables (CV): varían con Q (materiales, trabajo).",
    "El costo marginal (CM) es el costo de producir una unidad adicional. La empresa maximiza beneficios cuando P = CM.",
    "En competencia perfecta, la empresa es tomadora de precio: P = IM (el precio es igual al ingreso marginal).",
    "Regla de cierre a corto plazo: si P < CVM (Costo Variable Medio = CV/Q) → cierra de inmediato, no cubre ni los costos variables. Si P > CVM → opera aunque tenga pérdidas, porque al menos recupera los costos variables y parte de los fijos.",
    "A largo plazo: si P < CTM (Costo Total Medio = CT/Q) → la empresa sale del mercado, tiene pérdidas económicas. Solo permanece si P ≥ CTM.",
  ],
  conceptos:[
    {t:"Costo Marginal (CM)", d:"Costo de producir una unidad adicional. CM = ΔCT/ΔQ. La curva de CM tiene forma de U: primero baja (economías de escala), luego sube (rendimientos decrecientes)."},
    {t:"Costo Total Medio (CTM)", d:"Costo promedio por unidad: CTM = CT/Q = CFM + CVM. La empresa tiene beneficios si P > CTM."},
    {t:"Costo Variable Medio (CVM)", d:"CVM = CV/Q. Umbral de cierre a corto plazo: si P < CVM, la empresa debe cerrar inmediatamente."},
    {t:"Costo Fijo Medio (CFM)", d:"CFM = CF/Q. Siempre decrece al aumentar Q (los fijos se 'diluyen')."},
    {t:"Ingreso Total / Marginal", d:"IT = P × Q. IM = ΔIT/ΔQ. En competencia perfecta: IM = P (precio constante)."},
    {t:"Beneficios Económicos", d:"Beneficios = IT − CT = (P − CTM) × Q. Si P>CTM: beneficios positivos. Si CTM>P>CVM: pérdidas pero opera. Si P<CVM: cierra."},
  ],
  formulas:[
    {title:"Costos", formula:"CT = CF + CV  |  CTM = CT/Q  |  CVM = CV/Q  |  CFM = CF/Q",
     vars:[{n:"CF",d:"costos fijos (constantes)"},{n:"CV",d:"costos variables"},{n:"CT",d:"costo total"}]},
    {title:"Costo Marginal", formula:"CM = ΔCT / ΔQ",
     nota:"Para funciones continuas: CM = derivada del CT respecto a Q. Ej: si CT=500+0.1Q², entonces CM=0.2Q."},
    {title:"Equilibrio de la empresa competitiva", formula:"P = IM = CM  →  Q*",
     nota:"La empresa maximiza beneficios produciendo donde el precio iguala el costo marginal."},
    {title:"Beneficios", formula:"Beneficios = (P − CTM) × Q*",
     vars:[{n:"P",d:"precio de mercado"},{n:"CTM",d:"costo total medio en Q*"},{n:"Q*",d:"cantidad óptima"}],
     nota:"Si P>CTM: ganancias. Si P=CTM: beneficio económico=0. Si P<CTM pero P>CVM: pérdidas, pero conviene operar."},
  ],
  ejercicios:[
    {titulo:"Nahum — ¿Operar o cerrar? (del profesor)",
     enunciado:"Empresa Nahum. Q=100, P=$50, CTMe=$60, CVMe=$40. a) ¿Tiene beneficios o pérdidas? b) ¿Debería seguir operando?",
     datos:["Q=100","P=$50","CTM=$60","CVM=$40"],
     pasos:["a) Comparar P vs CTM: P(50) < CTM(60) → tiene PÉRDIDAS.",
       "Pérdida total = (50−60)×100 = −$1000.",
       "b) Comparar P vs CVM: P(50) > CVM(40) → el precio cubre los costos variables.",
       "Si opera: pérdida = −$1000. Si cierra: pierde solo los CF. CF = (CTM−CVM)×Q = (60−40)×100 = $2000.",
       "Como pérdida operando ($1000) < pérdida cerrando ($2000), conviene SEGUIR OPERANDO a corto plazo.",
       "A largo plazo debe salir del mercado (P < CTM)."],
     respuesta:"Tiene pérdidas ($1000), pero DEBE SEGUIR OPERANDO a corto plazo porque P($50) > CVM($40). A largo plazo debe salir."},
    {titulo:"Camisetas Argonia — Función cuadrática (del profesor)",
     enunciado:"P=$20. CT = 500 + 0.1·c². a) CF. b) CVMe. c) Cantidad óptima. d) CTMe. e) ¿Opera?",
     datos:["P=20 (precio de mercado)","CT (Costo Total) = 500 + 0.1·c²","CM (Costo Marginal) = 0.2·c (es la derivada del CT respecto a c)"],
     pasos:["a) CF (Costo Fijo): es la parte del CT que no depende de Q. Cuando c=0, CT=500. CF=$500.",
       "b) CV (Costo Variable) = CT − CF = 0.1·c². CVM (Costo Variable Medio) = CV/c = 0.1c.",
       "c) Óptimo: P=CM → 20=0.2c → c*=100.",
       "d) CTM(100) = (500 + 0.1×100²)/100 = (500+1000)/100 = 15.",
       "e) P(20) > CVM(100)=0.1×100=10. P(20) > CTM=15. Opera y tiene beneficios.",
       "Beneficios = (P−CTM)×Q = (20−15)×100 = $500."],
     respuesta:"c*=100, CTM=15, CVM=10. Opera y tiene beneficios = $500."},
    {titulo:"Contratación de trabajadores — VPMT (del profesor)",
     enunciado:"Empresa competitiva. Precio del bien=$9, Salario=$27. ¿Cuántos trabajadores contratar?",
     datos:["P=$9 (precio del bien producido)","Salario=$27","PT = Producción Total (unidades producidas con ese nº de trabajadores)","PMT = Producto Marginal del Trabajo (unidades adicionales que agrega el último trabajador = ΔPT)","5 trabajadores: PT=42, PMT=4","6 trabajadores: PT=45, PMT=3"],
     pasos:["VPMT (Valor del Producto Marginal del Trabajo) = PMT (Producto Marginal del Trabajo: unidades adicionales que produce el trabajador extra) × Precio del bien.",
       "Con 5 trabajadores: PMT=4 → VPMT = 4×9 = $36. Como $36 > $27 (salario), conviene contratar el 6to.",
       "Con 6 trabajadores: PMT=3 → VPMT = 3×9 = $27. VPMT = Salario → óptimo, no conviene contratar más."],
     respuesta:"Contratar 6 trabajadores. Es el punto donde VPMT($27) = Salario($27)."},
  ],
  tips:["Regla de cierre CORTO PLAZO: si P < CVM → cerrá YA. Si P > CVM → seguí (aunque pierdas).",
    "Regla de salida LARGO PLAZO: si P < CTM → salí del mercado (pérdidas económicas).",
    "En competencia perfecta: P = IM. La empresa maximiza donde P = CM.",
    "Para CT cuadrático (CT = CF + a·Q²): CM = 2a·Q. No olvides derivar.",
    "VPMT = PMT × P. Contratás trabajadores mientras VPMT > Salario. Óptimo: VPMT = Salario."],
},

{ id:"cap6", num:6, emoji:"🎯", titulo:"Eficiencia de Mercado", sub:"La mano invisible y el excedente social", pal:"cap6",
  teoria:[
    "La 'mano invisible' (Adam Smith): los mercados competitivos, a través de los precios, asignan los recursos eficientemente sin coordinación central.",
    "El equilibrio competitivo maximiza el Excedente Total (EC + EP): ninguna otra asignación puede aumentar el bienestar total.",
    "La eficiencia significa que todos los intercambios mutuamente beneficiosos se realizan. No hay unidades sin producir donde el valor para el comprador supera el costo para el vendedor.",
    "Los mercados FALLAN cuando hay externalidades, bienes públicos, información asimétrica o poder de mercado. En esos casos, la intervención puede mejorar el bienestar.",
    "La Caja de Edgeworth muestra que el equilibrio competitivo es Pareto eficiente: no se puede mejorar a alguien sin empeorar a otro.",
  ],
  conceptos:[
    {t:"Eficiencia de Pareto", d:"Asignación donde no se puede mejorar a nadie sin empeorar a alguien más. El equilibrio competitivo es Pareto eficiente."},
    {t:"Mano Invisible", d:"El sistema de precios coordina las decisiones descentralizadas de compradores y vendedores logrando eficiencia social sin dirección central."},
    {t:"Peso Muerto", d:"Pérdida de excedente total por alejarse del equilibrio. Triángulo de ineficiencia que no captura nadie."},
    {t:"Falla de Mercado", d:"Situación donde el mercado no alcanza el óptimo social: externalidades, bienes públicos, poder de mercado, información asimétrica."},
    {t:"Redistribución vs Eficiencia", d:"El mercado es eficiente pero no necesariamente equitativo. Una política puede ser eficiente pero injusta, o justa pero ineficiente."},
  ],
  formulas:[
    {title:"Excedente del Consumidor", formula:"EC = (1/2) × Qe × (P_D(0) − Pe)",
     nota:"P_D(0) = precio al que la demanda es cero (intercepto en Y de la curva de demanda)."},
    {title:"Excedente del Productor", formula:"EP = (1/2) × Qe × (Pe − P_O(0))",
     nota:"P_O(0) = precio al que la oferta es cero (intercepto en Y de la curva de oferta)."},
    {title:"Excedente Total", formula:"ET = EC + EP",
     nota:"Se maximiza en el equilibrio competitivo. Cualquier precio diferente genera un peso muerto."},
    {title:"Pérdida de Eficiencia (Peso Muerto)", formula:"PM = ET_libre − ET_con_intervención",
     nota:"También = área del triángulo formado por la 'brecha' entre O y D en la cantidad transada con intervención."},
  ],
  ejercicios:[
    {titulo:"Mercado con intervención — comparación de ET",
     enunciado:"Mercado: O: P=2q+5, D: P=30−3q. Comparar ET libre vs. con impuesto que sube el costo en $6 (nueva oferta: P=2q+11).",
     datos:["O original: P=2q+5","O con impuesto: P=2q+11","D: P=30−3q"],
     pasos:["Equilibrio libre: Qe=5, Pe=15, EC=37.5, EP=25, ET=62.5.",
       "Con impuesto (O nueva=2q+11): 2q+11=30−3q → 5q=19 → Qe'=3.8.",
       "Pe' = 2(3.8)+11 = 18.6.",
       "EC' = (1/2)×3.8×(30−18.6) = (1/2)×3.8×11.4 = 21.66.",
       "EP' = (1/2)×3.8×(12.6−5) = (1/2)×3.8×7.6 = 14.44.",
       "ET' = 21.66+14.44 = 36.1. Recaudación impuesto = 6×3.8=22.8.",
       "Peso muerto = 62.5 − (36.1+22.8) = 3.6 (triangulito de ineficiencia)."],
     respuesta:"El impuesto genera una recaudación de $22.8 y un peso muerto de ~$3.6."},
  ],
  tips:["La mano invisible funciona SOLO si los mercados son competitivos y sin fallas.",
    "EC+EP se maximiza en el equilibrio libre. Cualquier intervención crea peso muerto.",
    "No confundir eficiencia (ET total) con equidad (quién se queda con qué parte del ET).",
    "El peso muerto es el triángulo que 'desaparece' → nadie lo captura, es pura pérdida social.",
    "Fallas de mercado: externalidades, bienes públicos, poder de mercado, info asimétrica → justifican intervención."],
  grafico:"od",
},

{ id:"cap7", num:7, emoji:"⚠️", titulo:"Externalidades y Bienes Públicos", sub:"Fallas de mercado y rol del Estado", pal:"cap7",
  teoria:[
    "Externalidad: cuando una acción afecta a terceros que no participan en la transacción y ese efecto no se refleja en los precios.",
    "Externalidad NEGATIVA (ej. contaminación): el productor impone un costo a terceros → el mercado SOBREPROUCE respecto al óptimo social.",
    "Externalidad POSITIVA (ej. educación, vacunación): el productor genera beneficios a terceros → el mercado INFRAPROUCE respecto al óptimo social.",
    "Soluciones privadas: Teorema de Coase — si los derechos de propiedad están bien definidos y los costos de negociación son bajos, las partes llegan al óptimo por sí solas.",
    "Soluciones públicas: impuesto pigouviano (externalidad negativa) = cantidad igual al daño marginal externo. Subsidio (externalidad positiva) = beneficio marginal externo.",
  ],
  conceptos:[
    {t:"Externalidad Negativa", d:"El costo social > costo privado. El mercado produce demasiado. Solución: impuesto pigouviano = daño marginal externo. Desplaza la oferta a la izquierda hasta el óptimo social."},
    {t:"Externalidad Positiva", d:"El beneficio social > beneficio privado. El mercado produce poco. Solución: subsidio = beneficio marginal externo. Desplaza la demanda a la derecha."},
    {t:"Teorema de Coase", d:"Con derechos de propiedad bien definidos y costos de transacción bajos, las partes negocian y llegan al óptimo social sin intervención estatal. Aplica solo cuando hay pocos involucrados."},
    {t:"Bien Público", d:"No rival (mi consumo no reduce el de otro) y no excluible (no se puede excluir a quien no paga). Ej: defensa nacional, faros. El mercado los subproduce → problema del polizón."},
    {t:"Bien Privado", d:"Rival y excluible. El mercado los provee eficientemente."},
    {t:"Bien Común (de club)", d:"No excluible pero rival. Ejemplo: banco de peces del océano. Sin regulación → tragedia de los bienes comunes."},
    {t:"Tragedia de los Bienes Comunes", d:"Cuando un recurso es rival pero no excluible, cada individuo tiene incentivo a sobreusarlo → el recurso se agota. Solución: regulación, privatización o normas sociales."},
    {t:"Impuesto Pigouviano", d:"Impuesto = externalidad marginal negativa. Hace que el productor internalice el costo social. Lleva la producción al óptimo social."},
  ],
  formulas:[
    {title:"Costo Social vs Privado (externalidad negativa)", formula:"C_social = C_privado + Daño externo marginal",
     nota:"El mercado iguala P=C_privado. El óptimo social exige P=C_social. El impuesto pigouviano cierra esa brecha."},
    {title:"Beneficio Social vs Privado (externalidad positiva)", formula:"B_social = B_privado + Beneficio externo marginal",
     nota:"El mercado iguala D_privada. El óptimo social exige D_social. El subsidio eleva la demanda efectiva."},
    {title:"Bienes: clasificación", formula:"Rival × Excluible → 4 tipos",
     vars:[{n:"Privado",d:"rival+excluible: pan, ropa"},{n:"Público",d:"no rival+no excluible: defensa"},{n:"Club",d:"no rival+excluible: Netflix"},{n:"Común",d:"rival+no excluible: banco de peces"}],
     nota:"Solo los bienes públicos y comunes son problemáticos para el mercado."},
  ],
  ejercicios:[
    {titulo:"Clasificar bienes y fallas de mercado",
     enunciado:"Clasificar: (a) defensa nacional, (b) banco de peces del océano, (c) Netflix, (d) una manzana. ¿Cuál falla el mercado?",
     datos:["Dimensiones: Rival (mi consumo reduce el disponible) y Excluible (puedo cobrar/excluir)"],
     pasos:["a) Defensa: No rival (que me defienda no impide que te defienda a vos) y No excluible (no puedo negar defensa a un ciudadano) → BIEN PÚBLICO. Problema del polizón.",
       "b) Banco de peces: Rival (si pesco uno hay uno menos) y No excluible (el océano es abierto) → BIEN COMÚN. Tragedia de los comunes.",
       "c) Netflix: No rival (que yo vea no impide que veas) y Excluible (te cobran) → BIEN DE CLUB. Mercado funciona.",
       "d) Manzana: Rival y Excluible → BIEN PRIVADO. Mercado funciona perfectamente."],
     respuesta:"Falla el mercado en (a) y (b). Defensa: Estado debe proveerla. Peces: regulación para evitar sobreexplotación."},
    {titulo:"Externalidad negativa — Impuesto pigouviano",
     enunciado:"Una fábrica contamina. C_privado=50, daño a terceros=20 por unidad. El mercado produce Q=100. ¿Cuál es el impuesto correcto y qué pasa con Q?",
     datos:["C_privado = 50","Daño externo = 20","Q_mercado = 100"],
     pasos:["C_social = C_privado + daño = 50 + 20 = 70.",
       "El mercado iguala P=50 y produce Q=100 (demasiado).",
       "El impuesto pigouviano = daño marginal = $20 por unidad.",
       "Con el impuesto: C_efectivo = 50+20=70. La empresa sube su costo marginal y reduce Q hasta el óptimo social.",
       "El óptimo social es menor que 100 (la empresa internaliza el costo externo)."],
     respuesta:"Impuesto pigouviano = $20/unidad. Eleva el CM privado al nivel social, reduciendo la producción al óptimo social."},
  ],
  tips:["Ext. negativa → SOBREPRODUCCIÓN → impuesto pigouviano = daño marginal.",
    "Ext. positiva → INFRAPRODUCCIÓN → subsidio = beneficio marginal externo.",
    "Coase solo aplica con POCOS involucrados y bajos costos de transacción (no sirve para contaminación masiva).",
    "Bien público: NO rival + NO excluible → polizón → Estado debe proveer.",
    "Bien común: rival + NO excluible → tragedia de los comunes → regulación o privatización."],
},

{ id:"cap8", num:8, emoji:"♟️", titulo:"Teoría de Juegos y Oligopolio", sub:"Interacciones estratégicas, Nash y competencia entre pocos", pal:"cap8",
  teoria:[
    "La teoría de juegos estudia decisiones estratégicas: el resultado de un jugador depende no solo de lo que él elige, sino también de lo que eligen los demás.",
    "Un juego tiene tres elementos: (1) Jugadores (quiénes deciden), (2) Estrategias (qué pueden hacer), (3) Ganancias o pagos (cuánto obtiene cada uno según el par de decisiones). Se representan en una Matriz de Pagos.",
    "Estrategia dominante: es la mejor respuesta de un jugador SIN IMPORTAR qué haga el rival. Cuando existe, un jugador racional siempre la elige.",
    "Equilibrio de Nash (EN): situación donde NINGÚN jugador puede mejorar su ganancia cambiando unilateralmente de estrategia, dadas las estrategias del resto. Todo equilibrio con estrategias dominantes es un EN, pero no todo EN requiere estrategias dominantes.",
    "El Dilema del Prisionero: ambos jugadores tienen estrategia dominante (Confesar). Al seguir su interés individual, ambos confiesan y terminan PEOR que si hubieran cooperado. La paradoja: el equilibrio de Nash no es el óptimo social.",
    "Un oligopolio es un mercado con POCOS vendedores que interactúan estratégicamente. Cada empresa toma decisiones considerando las respuestas de sus rivales.",
    "Bertrand (competencia en precios): con productos homogéneos, las empresas se roban clientes bajando el precio → guerra de precios → EN único: P = CM y beneficios económicos = 0 (igual que competencia perfecta).",
    "Cournot (competencia en cantidades): empresas eligen cuánto producir simultáneamente. El EN queda entre el monopolio (producción mínima, precio máximo) y la competencia perfecta (producción máxima, precio = CM).",
  ],
  conceptos:[
    {t:"Matriz de Pagos", d:"Tabla que muestra las ganancias de cada jugador para cada combinación de estrategias. Convención: primer número = ganancia del jugador FILA, segundo número = ganancia del jugador COLUMNA."},
    {t:"Estrategia Dominante", d:"Estrategia que es la mejor respuesta de un jugador independientemente de lo que haga el rival. Si existe, siempre debe elegirse (es racional no desviarse)."},
    {t:"Equilibrio de Nash (EN)", d:"Perfil de estrategias donde ningún jugador tiene incentivo a desviarse unilateralmente. Es 'estable': si todos están ahí, nadie quiere cambiar."},
    {t:"Dilema del Prisionero", d:"Juego donde ambos tienen estrategia dominante pero el EN (ambos la eligen) resulta peor para todos que si hubieran cooperado. Ejemplo: A y B confiesan → ambos obtienen −8 en vez de −1."},
    {t:"Oligopolio", d:"Estructura de mercado con pocos vendedores. Cada empresa ejerce cierto poder de mercado y sus decisiones afectan a las demás (interdependencia estratégica). Ejemplo extremo: duopolio (2 empresas)."},
    {t:"Competencia de Bertrand", d:"Oligopolio donde las empresas compiten fijando precios (productos homogéneos). Resultado: EN → P = CM, beneficio económico = 0. La competencia en precios destruye el poder de mercado."},
    {t:"Modelo de Cournot", d:"Oligopolio donde las empresas eligen cantidades a producir simultáneamente. El EN queda entre los extremos: más producción que el monopolio, menos que la competencia perfecta; precio entre CMg y precio de monopolio."},
    {t:"Colusión / Cártel", d:"Acuerdo explícito o tácito entre oligopolistas para actuar como un monopolio conjunto (reducir producción y subir precio). La colusión es inestable: cada empresa tiene incentivo a desviarse y producir más."},
  ],
  formulas:[
    {title:"Lectura de Matriz de Pagos", formula:"(Ganancia Fila, Ganancia Columna)",
     nota:"El primer número es siempre la ganancia del jugador que elige la FILA. El segundo es la del jugador COLUMNA. Para encontrar EN: busca la mejor respuesta de Fila para cada columna, y la mejor respuesta de Columna para cada fila. El EN es donde ambas mejores respuestas se cruzan."},
    {title:"Equilibrio de Nash — condición", formula:"Nadie quiere desviarse unilateralmente",
     nota:"Para verificar el EN: en cada celda candidata, preguntá '¿puede la Fila mejorar su ganancia cambiando de fila?' y '¿puede la Columna mejorar su ganancia cambiando de columna?'. Si ambas respuestas son NO, es EN."},
    {title:"Bertrand — resultado EN", formula:"P* = CM  →  Beneficio económico = 0",
     nota:"Con productos homogéneos y competencia en precios: la guerra de precios lleva el precio al nivel competitivo. El oligopolio de Bertrand se comporta como competencia perfecta."},
    {title:"Cournot — resultado cualitativo", formula:"Q_m < Q_cournot < Q_cp  y  P_cp < P_cournot < P_m",
     nota:"Q_m = cantidad de monopolio, Q_cp = cantidad competencia perfecta. Cournot queda en el medio. Con más empresas en Cournot, el resultado se acerca más a la competencia perfecta."},
  ],
  ejercicios:[
    {titulo:"Dilema del Prisionero clásico — empresas y publicidad",
     enunciado:"Empresa A y Empresa B deciden simultáneamente si hacen Publicidad (P) o No Publicidad (NP). Matriz de pagos (Benef. A, Benef. B): P/P=(2,2) · P/NP=(5,1) · NP/P=(1,5) · NP/NP=(4,4).",
     datos:["Cada empresa elige entre P (Publicidad) y NP (No Publicidad).",
       "Ganancias (millones $): si ambas eligen P → A obtiene 2, B obtiene 2.",
       "Si A elige P y B elige NP → A obtiene 5, B obtiene 1.",
       "Si A elige NP y B elige P → A obtiene 1, B obtiene 5.",
       "Si ambas eligen NP → A obtiene 4, B obtiene 4."],
     pasos:["Estrategia dominante de A: Si B elige P → A prefiere P (2>1). Si B elige NP → A prefiere P (5>4). La estrategia dominante de A es P.",
       "Estrategia dominante de B: Si A elige P → B prefiere P (2>1). Si A elige NP → B prefiere P (5>4). La estrategia dominante de B es P.",
       "EN: ambas eligen P → (P, P) → ganancias (2, 2).",
       "¿Es óptimo social? No. Si ambas cooperaran eligiendo NP → (NP,NP) → ganancias (4,4), MEJOR para las dos.",
       "Pero NP no es estable: si B está en NP, A puede pasarse a P y ganar 5 en vez de 4. Hay incentivo a desviarse."],
     respuesta:"Equilibrio de Nash: (P, P) con ganancias (2, 2). Es un Dilema del Prisionero: el EN no es el óptimo social porque cada empresa tiene incentivo individual a hacer publicidad."},
    {titulo:"Leer matriz y encontrar EN — juego simétrico",
     enunciado:"Dos empresas eligen Alta (A) o Baja (B) producción. Matriz: A/A=(3,3) · A/B=(6,1) · B/A=(1,6) · B/B=(4,4). Encontrar estrategias dominantes y el/los equilibrios de Nash.",
     datos:["Jugador Fila y Jugador Columna eligen simultáneamente Alta (A) o Baja (B).",
       "Formato: (ganancia Fila, ganancia Columna). A/A=(3,3), A/B=(6,1), B/A=(1,6), B/B=(4,4)."],
     pasos:["Mejor respuesta de Fila si Columna elige A: A→3 vs B→1. Fila prefiere A.",
       "Mejor respuesta de Fila si Columna elige B: A→6 vs B→4. Fila prefiere A.",
       "Estrategia dominante de Fila: siempre A.",
       "Por simetría, estrategia dominante de Columna: también A.",
       "EN: (A, A) con ganancias (3, 3).",
       "Notar: si pudieran coordinar (B,B) → (4,4), ambos ganarían más. Pero es inestable (cada uno tiene incentivo a pasarse a A)."],
     respuesta:"Equilibrio de Nash único: (A, A) con ganancias (3, 3). Es otro Dilema del Prisionero: el EN no es el óptimo social."},
    {titulo:"Duopolio de Bertrand — guerra de precios",
     enunciado:"Dos empresas (A y B) producen un bien homogéneo con CM constante = $10. Ambas eligen precio simultáneamente. ¿Cuál es el único Equilibrio de Nash?",
     datos:["Bien homogéneo: los consumidores compran al vendedor con menor precio.", "CM constante = $10 para ambas empresas.", "Si A y B cobran el mismo precio, se dividen el mercado mitad y mitad."],
     pasos:["Si B cobra P_B = $15: A puede cobrar $14.99 y llevarse todo el mercado. B responde bajando. Hay incentivo a bajar el precio.",
       "El incentivo continúa: cualquier precio por encima del CM puede ser 'robado' por el rival.",
       "El único precio donde ninguna empresa quiere bajar más: P = CM = $10.",
       "Si P = CM = $10: beneficio económico = 0. Ninguna empresa quiere bajar (perdería dinero) ni subir (perdería todo el mercado).",
       "Verificación de EN: dada P_B = 10, la mejor respuesta de A es P_A = 10 (no puede mejorar). Idem B."],
     respuesta:"EN de Bertrand: P* = CM = $10 y Beneficio económico = $0. La competencia en precios entre dos empresas lleva al mismo resultado que la competencia perfecta."},
  ],
  tips:["MATRIX: primer número = jugador FILA. Para EN, tachar las estrategias dominadas y buscar la celda estable.",
    "Equilibrio de Nash ≠ óptimo social. En el Dilema del Prisionero, el EN es peor para todos que la cooperación, pero la cooperación no es estable.",
    "Bertrand (precios) → P = CM → beneficio = 0. Dos empresas bastan para eliminar el poder de mercado si el bien es homogéneo.",
    "Cournot (cantidades) → resultado entre monopolio y competencia perfecta. No llega al CM.",
    "Estrategia dominante: si existe, siempre elegirla. No hace falta adivinar qué hace el rival.",
    "Colusión = resultado de monopolio, pero es inestable: cada empresa quiere 'traicionar' al cártel produciendo más."],
},

{ id:"cap9", num:9, emoji:"🏰", titulo:"Monopolio", sub:"Poder de mercado y pérdida de eficiencia", pal:"cap9",
  teoria:[
    "El monopolista es el único vendedor y enfrenta la curva de demanda de mercado completa. Tiene poder de precio (price maker).",
    "Para vender más, el monopolista debe bajar el precio a TODOS los compradores (demanda lineal decreciente). Por eso el Ingreso Marginal (IM) < Precio.",
    "REGLA CLAVE: Si la demanda es P = a − b·Q, entonces el IM = a − 2b·Q. El IM tiene el mismo intercepto pero el DOBLE de pendiente.",
    "El monopolista maximiza beneficios donde IM = CM (igual que cualquier empresa), pero a diferencia de la competencia perfecta, P > CM en el equilibrio.",
    "El monopolio genera pérdida de eficiencia (peso muerto): produce menos de lo socialmente óptimo y cobra más.",
  ],
  conceptos:[
    {t:"Ingreso Marginal del Monopolista", d:"IM = ΔIT/ΔQ. Para demanda lineal P=a−bQ: IT=aQ−bQ², IM=a−2bQ. El IM siempre cae más rápido que el precio."},
    {t:"Regla del Doble de Pendiente", d:"Si la demanda es P = a − b·Q, entonces IM = a − 2b·Q. Mismo intercepto, doble pendiente. El IM corta el eje horizontal a la mitad del tramo de la demanda."},
    {t:"Condición de Maximización", d:"IM = CM. El monopolista produce Q* donde IM=CM y cobra el precio P* que los consumidores están dispuestos a pagar por Q* (lee el precio de la curva de demanda, NO del IM)."},
    {t:"Precio de Monopolio", d:"P_monopolio > CM. La diferencia P−CM es el 'markup' de monopolio. Esta diferencia genera peso muerto."},
    {t:"Pérdida de Peso Muerto", d:"Triángulo entre la curva de demanda, el IM y la línea CM, entre Q_monopolio y Q_competitivo. El monopolio produce demasiado poco."},
    {t:"Discriminación de Precios", d:"El monopolista cobra precios diferentes a distintos consumidores según su disposición a pagar. Con discriminación perfecta, elimina todo el EC y no hay peso muerto."},
  ],
  formulas:[
    {title:"Demanda lineal → Ingreso Marginal", formula:"Si P = a − b·Q  →  IM = a − 2b·Q",
     nota:"SIEMPRE: mismo intercepto (a), doble pendiente (2b). El IM cruza el eje Q en Q=a/(2b), exactamente en la mitad."},
    {title:"Ingreso Marginal (fórmula general)", formula:"IM = ΔIT / ΔQ = P + Q·(ΔP/ΔQ)",
     nota:"Como ΔP/ΔQ < 0, el IM < P. El monopolista pierde algo del precio de las unidades anteriores al bajar el precio."},
    {title:"Equilibrio del Monopolista", formula:"IM = CM  →  Q*  →  P* = D(Q*)",
     nota:"1) Hallar Q* donde IM=CM. 2) El precio P* se lee de la CURVA DE DEMANDA, no del IM."},
    {title:"Beneficios del Monopolista", formula:"Beneficios = (P* − CTM(Q*)) × Q*",
     nota:"Rectángulo de beneficios en el gráfico: altura = P*−CTM, base = Q*."},
  ],
  ejercicios:[
    {titulo:"Monopolio con tabla discreta — CM=$12 (del profesor)",
     enunciado:"Monopolista con CM constante=$12. Tabla de demanda: Q=2→P=18; Q=3→P=16; Q=4→P=14. Encontrar Q*, P* y beneficios.",
     datos:["CM (Costo Marginal) constante = 12","IT = Ingreso Total = P × Q","Q=2: P=18, IT=P×Q=18×2=36","Q=3: P=16, IT=16×3=48","Q=4: P=14, IT=14×4=56"],
     pasos:["IM entre Q=2 y Q=3: ΔIT = 48−36 = 12. IM=12.",
       "IM entre Q=3 y Q=4: ΔIT = 56−48 = 8. IM=8.",
       "Condición IM=CM: en Q=3, IM=12=CM=12. ✓",
       "En Q=4: IM=8 < CM=12 → no conviene producir más.",
       "P* = P cuando Q=3 = 16.",
       "Beneficios: necesitamos CTM. Si CM=CTM=12 (sin costos fijos): Benef=(16−12)×3=12."],
     respuesta:"Q*=3, P*=$16, Beneficios=$12. El óptimo es donde IM(12)=CM(12)."},
    {titulo:"Monopolio Claritin — Tabla completa (del profesor)",
     enunciado:"Monopolista farmacéutico. CM=$1. Tabla parcial de demanda:",
     datos:["IT = Ingreso Total (P×Q). IM = Ingreso Marginal (ΔIT por unidad más vendida). CM = Costo Marginal. CTM = Costo Total Medio.",
       "Q=400M: P=$4.00, IT=$1600M, IM=2, CM=1, CTM=1.025",
       "Q=500M: P=$3.50, IT=$1750M, IM=1, CM=1, CTM=1.020",
       "Q=600M: P=$3.00, IT=$1800M, IM=0, CM=1, CTM=1.017"],
     pasos:["Buscar donde IM=CM: en Q=500M, IM=1=CM=1. ✓",
       "En Q=600M: IM=0 < CM=1. No conviene producir más.",
       "P* = $3.50 (precio de la demanda en Q=500M).",
       "Beneficios = (P−CTM)×Q = (3.50−1.020)×500M = 2.48×500M ≈ $1240M."],
     respuesta:"Q*=500M, P*=$3.50, Beneficios≈$1240M."},
    {titulo:"Monopolio demanda lineal P=24−Q",
     enunciado:"Demanda P=24−Q, CM constante=$4. Hallar Q*, P*, beneficios y comparar con competencia perfecta.",
     datos:["Demanda: P=24−Q","CM constante = 4"],
     pasos:["IM = 24−2Q (doble pendiente).",
       "IM=CM: 24−2Q=4 → 2Q=20 → Q*=10.",
       "P* = 24−10=14. (Lee de la DEMANDA, no del IM.)",
       "Beneficios = (14−4)×10 = 100.",
       "Competencia perfecta: P=CM → 24−Q=4 → Q_c=20, P_c=4.",
       "Pérdida de peso muerto = (1/2)×(Q_c−Q*)×(P*−CM) = (1/2)×10×10 = 50."],
     respuesta:"Q*=10, P*=$14, Beneficios=$100. Peso muerto vs competencia perfecta = $50."},
  ],
  tips:["IM de demanda lineal: MISMO INTERCEPTO, DOBLE PENDIENTE. Memorizar esto.",
    "El precio P* se lee de la CURVA DE DEMANDA en Q*. Nunca del IM.",
    "Pasos: (1) IM=CM → Q*. (2) D(Q*)→ P*. (3) (P*−CTM)×Q* → beneficios.",
    "El monopolista produce MENOS y cobra MÁS que la competencia perfecta → peso muerto.",
    "Con CM constante y demanda lineal: Q* = (a−CM)/(2b) y P* = (a+CM)/2."],
  grafico:"monopolio",
},

{ id:"cap10", num:10, emoji:"👷", titulo:"Mercados de Factores", sub:"Trabajo, capital y desigualdad salarial", pal:"cap10",
  teoria:[
    "En los mercados de factores (trabajo, capital, tierra), las empresas son las DEMANDANTES y los hogares son los OFERENTES. El análisis es análogo al mercado de bienes pero invertido.",
    "Valor del Producto Marginal del Trabajo (VPMT): mide en pesos cuánto aporta a los ingresos de la empresa un trabajador adicional. La empresa contrata trabajadores hasta que el aporte del último trabajador iguale su costo (el salario W).",
    "Regla de optimización: VPMT = W. Si VPMT > W → conviene contratar más. Si VPMT < W → conviene contratar menos. Esta regla es matemáticamente idéntica a P = CM en la producción.",
    "La curva de demanda de trabajo de una empresa es su curva de VPMT: a mayor salario, la empresa demanda menos trabajadores (relación negativa). La demanda de mercado es la suma de todas las empresas.",
    "Desigualdad salarial: los salarios difieren por tres razones principales: (1) Capital Humano (habilidades y formación), (2) Salarios compensatorios (primas por condiciones indeseables o riesgosas), (3) Discriminación.",
    "Discriminación basada en gustos o preferencias: el empleador discrimina por prejuicio (raza, género, etc.) y ESTÁ DISPUESTO A PERDER BENEFICIOS para no contratar ciertos trabajadores. El mercado tiende a penalizarla en el largo plazo.",
    "Discriminación estadística: el empleador usa características observables de un grupo (edad, género) para inferir productividad individual cuando no tiene información completa. Su objetivo es MAXIMIZAR BENEFICIOS, no satisfacer prejuicios.",
    "Capital físico (K): máquinas y equipos. La empresa los alquila hasta que VPMK = precio de alquiler del capital. La lógica marginal es idéntica para todos los factores: usar hasta que el valor aportado iguale el costo.",
  ],
  conceptos:[
    {t:"Producto Marginal del Trabajo (PMT)", d:"Producción adicional que genera el último trabajador contratado. PMT = ΔQ / ΔL. Decrece a medida que se contrata más mano de obra (rendimientos decrecientes)."},
    {t:"Valor del Producto Marginal del Trabajo (VPMT)", d:"VPMT = PMT × P (Precio del bien). Mide en pesos cuánto agregan los ingresos de la empresa el trabajador marginal. Es la curva de demanda de trabajo de la empresa."},
    {t:"Regla de Contratación Óptima", d:"Contratar trabajadores hasta que VPMT = W (salario). Equivalente a producir hasta P = CM. Más allá de ese punto, el costo supera el beneficio marginal del trabajador."},
    {t:"Capital Humano", d:"Habilidades, formación académica y experiencia de una persona. Mayor capital humano → mayor PMT → mayor salario. Las empresas invierten en formación específica (no general) porque la general puede emigrar."},
    {t:"Salarios Compensatorios", d:"Diferencias salariales que compensan condiciones de trabajo indeseables, peligrosas o inconvenientes (turnos nocturnos, zonas remotas, riesgos físicos). Ej: un minero gana más que un oficinista por igual productividad."},
    {t:"Discriminación por Gustos", d:"El empleador discrimina por prejuicio personal y acepta PERDER BENEFICIOS para no contratar ciertos grupos. En el largo plazo, empresas no discriminadoras tienen ventaja competitiva."},
    {t:"Discriminación Estadística", d:"El empleador usa variables observables (género, edad, etnia) como proxy de productividad promedio del grupo porque no puede observar la productividad individual. Objetivo: maximizar beneficios, no satisfacer prejuicios."},
    {t:"Valor del Producto Marginal del Capital (VPMK)", d:"VPMK = PMK × P. La empresa alquila capital hasta que VPMK = precio de alquiler (r). Misma lógica marginal que con el trabajo."},
  ],
  formulas:[
    {title:"Valor del Producto Marginal del Trabajo", formula:"VPMT = PMT × P",
     vars:[{n:"PMT",d:"Producto Marginal del Trabajo (ΔQ/ΔL)"},{n:"P",d:"Precio del bien producido"}],
     nota:"VPMT mide en pesos el aporte en ingresos del trabajador marginal. Es la curva de demanda de trabajo de la empresa."},
    {title:"Regla de Contratación Óptima", formula:"VPMT = W",
     vars:[{n:"VPMT",d:"Valor Producto Marginal del Trabajo"},{n:"W",d:"Salario (costo del trabajador)"}],
     nota:"Contratar hasta que VPMT = W. Si VPMT > W → contratar más. Si VPMT < W → contratar menos (despedir)."},
    {title:"Equivalencia de reglas de maximización", formula:"VPMT = W  ⟺  P = CM",
     nota:"Ambas reglas son matemáticamente idénticas: W/PMT = CM. Maximizar beneficios con trabajo da el mismo óptimo que maximizar con cantidades producidas."},
    {title:"Regla para el Capital", formula:"VPMK = r",
     vars:[{n:"VPMK",d:"Valor del Producto Marginal del Capital = PMK × P"},{n:"r",d:"Precio de alquiler del capital"}],
     nota:"La lógica marginal es idéntica para todos los factores: usar el factor hasta que su aporte iguala su costo."},
  ],
  ejercicios:[
    {titulo:"Contratar trabajadores — tabla de VPMT (del profesor)",
     enunciado:"Una empresa produce camisetas al precio P=$10. Tabla de productividad: L=1→PMT=20; L=2→PMT=15; L=3→PMT=10; L=4→PMT=6. El salario de mercado es W=$100. ¿Cuántos trabajadores debe contratar?",
     datos:["Precio del bien (P) = $10 por camiseta.", "PMT = Producto Marginal del Trabajo (camisetas extras por trabajador).", "L=1: PMT=20 → VPMT=PMT×P=20×10=200", "L=2: PMT=15 → VPMT=15×10=150", "L=3: PMT=10 → VPMT=10×10=100", "L=4: PMT=6 → VPMT=6×10=60", "W (salario) = $100 por trabajador."],
     pasos:["Regla: contratar hasta que VPMT = W = 100.",
       "L=1: VPMT=200 > W=100 → conviene contratar. ✓",
       "L=2: VPMT=150 > W=100 → conviene contratar. ✓",
       "L=3: VPMT=100 = W=100 → este es el último trabajador. ✓ (VPMT=W)",
       "L=4: VPMT=60 < W=100 → NO conviene contratar."],
     respuesta:"Contratar L*=3 trabajadores. Es el punto donde VPMT ($100) = W ($100)."},
    {titulo:"Discriminación — diferenciar los tipos",
     enunciado:"Un empleador rechaza contratar mujeres aunque son igual de productivas que los hombres. En otro caso, un banco contrata menos jóvenes menores de 30 porque en promedio tienen mayor rotación. ¿Qué tipo de discriminación es cada uno?",
     datos:["Caso 1: empleador rechaza mujeres por preferencia personal, aunque son igualmente productivas.",
       "Caso 2: banco evita contratar menores de 30 porque el promedio del grupo tiene mayor rotación (usa la edad como señal de productividad)."],
     pasos:["Caso 1: el empleador PIERDE BENEFICIOS al rechazar trabajadoras igual de productivas. Actúa por prejuicio, no por maximización. → Discriminación por GUSTOS o PREFERENCIAS.",
       "Caso 2: el banco usa una variable observable (edad) para inferir la productividad individual ante información incompleta. Su objetivo es maximizar beneficios usando promedios grupales. → Discriminación ESTADÍSTICA.",
       "Diferencia clave: el que discrimina por gustos acepta perder dinero. El que discrimina estadísticamente intenta maximizar beneficios (aunque sea injusto para el individuo)."],
     respuesta:"Caso 1: discriminación por gustos (acepta perder beneficios). Caso 2: discriminación estadística (maximiza beneficios usando promedios del grupo como señal)."},
    {titulo:"Tecnología y demanda de trabajo",
     enunciado:"¿Qué efecto tiene sobre el mercado laboral: (a) la automatización que reemplaza cajeros bancarios, y (b) el software de diseño que hace a cada diseñador más productivo?",
     datos:["Caso a: cajeros automáticos reemplazan trabajadores humanos en bancos.", "Caso b: software de diseño multiplica lo que puede producir cada diseñador."],
     pasos:["Caso a: tecnología que AHORRA mano de obra. El PMT de los cajeros humanos cae → VPMT = PMT×P cae → la curva de demanda de trabajo se desplaza a la IZQUIERDA. Resultado: menos empleo y/o menores salarios para cajeros.",
       "Caso b: tecnología COMPLEMENTARIA al trabajo. El PMT de los diseñadores sube → VPMT = PMT×P sube → la curva de demanda de trabajo se desplaza a la DERECHA. Resultado: más empleo y/o mayores salarios para diseñadores.",
       "Clave: no toda tecnología perjudica el empleo. Depende de si sustituye o complementa al trabajador."],
     respuesta:"Caso a: desplaza demanda de trabajo a la izquierda (tecnología sustituta). Caso b: desplaza demanda de trabajo a la derecha (tecnología complementaria)."},
  ],
  tips:["VPMT = PMT × P. Contratar hasta VPMT = W. Nunca más allá (el último trabajador no paga su sueldo).",
    "VPMT = W es lo mismo que P = CM. Son la misma condición de maximización vista desde el input (trabajo) o el output (producción).",
    "Discriminación por GUSTOS: pierde dinero → insostenible en el largo plazo competitivo.",
    "Discriminación ESTADÍSTICA: maximiza beneficios usando promedios del grupo → objetivo es lucrar, no discriminar por prejuicio.",
    "Tecnología sustituta → VPMT cae → demanda de trabajo se desplaza izquierda. Complementaria → VPMT sube → demanda de trabajo se desplaza derecha.",
    "VPMK = PMK × P = precio de alquiler del capital (r). Misma lógica para todos los factores."],
},

{ id:"cap11", num:11, emoji:"📊", titulo:"GDP y Macroeconomía", sub:"Medición del nivel de actividad económica", pal:"cap11",
  teoria:[
    "El GDP (Producto Interno Bruto / PIB) es el valor de mercado de todos los bienes y servicios FINALES producidos DENTRO de las fronteras de un país en un período.",
    "Identidad fundamental: Producción = Gasto = Ingreso. Tres enfoques diferentes para medir lo mismo.",
    "Componentes del GDP por el gasto: Y = C + I + G + (X−M), donde C = Consumo privado, I = Inversión (nueva maquinaria y construcción), G = Gasto público (sin transferencias), X = Exportaciones, M = Importaciones. El Consumo (C) es el mayor componente (~70% en EEUU).",
    "GDP Nominal: valorado a precios corrientes. GDP Real: valorado a precios de un año base. El Real mide el crecimiento genuino sin el efecto de la inflación.",
    "Deflactor del PIB y el IPC son dos formas de medir el nivel de precios (inflación).",
  ],
  conceptos:[
    {t:"GDP (PIB)", d:"Valor de mercado de todos los bienes y servicios FINALES producidos DENTRO de las fronteras de un país en un período. Excluye bienes intermedios (para evitar doble contabilización)."},
    {t:"Bienes Finales vs Intermedios", d:"Final: llega al consumidor final (el pan que compra una persona). Intermedio: insumo para producir otro bien (la harina que compra la panadería). Solo se cuenta el final."},
    {t:"GDP Nominal", d:"Valúa la producción a precios del año corriente. Sube si aumenta la producción O si suben los precios."},
    {t:"GDP Real", d:"Valúa la producción a precios de un año base fijo. Solo sube si aumenta la producción genuina. Permite comparar años."},
    {t:"Deflactor del PIB", d:"Deflactor = (PIB Nominal / PIB Real) × 100. Mide el nivel de precios de TODOS los bienes producidos en el país."},
    {t:"IPC (Índice de Precios al Consumidor)", d:"IPC = (costo de cesta actual / costo de cesta año base) × 100. Mide el costo de una 'cesta de consumo' típica. A diferencia del deflactor, incluye importaciones pero no bienes de capital."},
    {t:"Inflación", d:"Tasa de variación del nivel de precios. Inflación = (IPC₂ − IPC₁) / IPC₁ × 100. O con deflactor."},
  ],
  formulas:[
    {title:"GDP por el Gasto", formula:"Y = C + I + G + (X − M)",
     vars:[{n:"C",d:"consumo privado"},{n:"I",d:"inversión (nueva maquinaria, construcción)"},{n:"G",d:"gasto público (excluye transferencias)"},{n:"X",d:"exportaciones"},{n:"M",d:"importaciones (se resta)"}],
     nota:"NX = X−M son las exportaciones netas. Si X>M: superávit comercial."},
    {title:"GDP Real", formula:"GDP Real = GDP Nominal / (Deflactor/100)",
     nota:"O: valorar la producción del año corriente a precios del año base."},
    {title:"Deflactor del PIB", formula:"Deflactor = (PIB Nominal / PIB Real) × 100",
     nota:"Deflactor = 100 en el año base. Si deflactor = 128.6, los precios subieron 28.6% desde el año base."},
    {title:"IPC", formula:"IPC = (Costo cesta año t / Costo cesta año base) × 100",
     nota:"Cesta fija de bienes típicos del consumidor."},
    {title:"Tasa de Inflación", formula:"π = (IPC₂ − IPC₁) / IPC₁ × 100",
     nota:"O: (Deflactor₂ − Deflactor₁) / Deflactor₁ × 100."},
  ],
  ejercicios:[
    {titulo:"Fordica — 3 enfoques del GDP (del libro)",
     enunciado:"El país 'Fordica' solo produce autos. Fabrica 5 millones a $30.000 c/u. Calcular el GDP por los 3 enfoques.",
     datos:["Producción: 5M autos × $30.000 = $150.000M","Los autos son el único bien final"],
     pasos:["Por la PRODUCCIÓN: 5M × $30.000 = $150.000M.",
       "Por el GASTO: los compradores (hogares, empresas, gobierno, extranjeros) gastan en total $150.000M.",
       "Por el INGRESO: los trabajadores, accionistas y dueños del capital de las automotrices reciben en salarios + beneficios + intereses = $150.000M.",
       "Los tres enfoques dan el mismo número: $150.000M. La identidad Producción=Gasto=Ingreso se cumple."],
     respuesta:"GDP Fordica = $150.000 millones por cualquiera de los 3 enfoques."},
    {titulo:"Fords y Chevrolets — Nominal vs Real (del libro)",
     enunciado:"Año base 2012: 10 Fords a $30K + 5 Chevys a $20K. Año 2013: 10 Fords a $40K + 20 Chevys a $25K. Calcular GDP nominal 2013, real 2013, deflactor e inflación.",
     datos:["2012: 10F×$30K + 5C×$20K","2013 cantidades: 10F + 20C","2013 precios: Ford=$40K, Chevy=$25K"],
     pasos:["GDP Real 2012 (año base): 10×30K + 5×20K = 300K+100K = $400K.",
       "GDP Nominal 2013: 10×40K + 20×25K = 400K+500K = $900K.",
       "GDP Real 2013 (precios del año base 2012): 10×30K + 20×20K = 300K+400K = $700K.",
       "Deflactor 2013 = (900K/700K)×100 = 128.6.",
       "Inflación 2012→2013 = (128.6−100)/100×100 = 28.6%."],
     respuesta:"PIB Real 2013=$700K. PIB Nominal 2013=$900K. Deflactor=128.6. Inflación=28.6%."},
    {titulo:"Calcular IPC e inflación",
     enunciado:"Cesta: 2kg pan ($5/kg) + 1 litro leche ($3). En el año siguiente: pan=$6/kg, leche=$3.50. Calcular IPC y tasa de inflación.",
     datos:["Año base: 2kg×$5 + 1L×$3 = $13","Año siguiente: 2kg×$6 + 1L×$3.50"],
     pasos:["Costo cesta año base: 2×5 + 1×3 = $13.",
       "Costo cesta año siguiente: 2×6 + 1×3.50 = 12+3.50 = $15.50.",
       "IPC año base = (13/13)×100 = 100.",
       "IPC año siguiente = (15.50/13)×100 = 119.2.",
       "Inflación = (119.2−100)/100×100 = 19.2%."],
     respuesta:"IPC = 119.2. Tasa de inflación = 19.2%."},
  ],
  tips:["Y = C + I + G + NX. El mayor componente siempre es C (consumo).",
    "GDP Nominal incluye inflación. GDP Real = crecimiento genuino. Real sirve para comparar años.",
    "Deflactor = (Nominal/Real)×100. Si deflactor > 100 → hubo inflación desde el año base.",
    "IPC usa cesta FIJA de consumo. Deflactor abarca TODOS los bienes producidos. Son medidas distintas.",
    "Inflación = variación % del nivel de precios. Si IPC pasa de 100 a 128.6 → inflación del 28.6%."],
},

{ id:"cap12", num:12, emoji:"🌱", titulo:"Crecimiento Económico", sub:"Capital, tecnología e instituciones", pal:"cap12",
  teoria:[
    "El crecimiento económico es el aumento del GDP real per cápita a lo largo del tiempo. Tiene efecto compuesto: diferencias pequeñas en la tasa de crecimiento llevan a enormes diferencias a largo plazo.",
    "La función de producción agregada: Y = A × F(K, H). La producción depende de tecnología (A), capital físico (K) y capital humano (H).",
    "Rendimientos decrecientes del capital: manteniendo H y A constantes, cada unidad adicional de K genera menos producto adicional. Por eso el capital solo no puede generar crecimiento sostenido.",
    "La tecnología (A) puede superar los rendimientos decrecientes: desplaza toda la función de producción hacia arriba y permite crecimiento sostenido.",
    "Las instituciones son la causa FUNDAMENTAL del crecimiento: protegen la propiedad, hacen cumplir contratos y crean los incentivos para invertir e innovar.",
  ],
  conceptos:[
    {t:"Función de Producción Cobb-Douglas", d:"Y = A × K^(1/3) × H^(2/3). K: capital físico. H: capital humano (eficiencia laboral). A: productividad total de los factores (tecnología). Los exponentes suman 1 → rendimientos constantes a escala."},
    {t:"Rendimientos Decrecientes del Capital", d:"Cada unidad adicional de K produce menos Y (con H y A constantes). Implica que países pobres con poco capital crecen más rápido al acumular capital (convergencia condicional)."},
    {t:"Productividad Total de los Factores (A)", d:"También llamada tecnología o eficiencia. Mide cuánto produce la economía más allá de lo explicado por K y H. La diferencia EEUU−India se explica principalmente por A."},
    {t:"Capital Humano (H)", d:"Unidades de eficiencia del trabajo = cantidad de trabajadores × productividad promedio. Depende de educación, salud y habilidades."},
    {t:"Instituciones Inclusivas", d:"Protegen la propiedad privada, hacen cumplir contratos, permiten mercados libres. Generan incentivos para invertir e innovar → crecimiento."},
    {t:"Instituciones Extractivas", d:"Dictaduras que no protegen la propiedad. Bloquean la 'destrucción creativa' porque las élites temen perder poder → estancamiento."},
    {t:"Destrucción Creativa (Schumpeter)", d:"Las nuevas tecnologías reemplazan las viejas, destruyendo negocios establecidos. Las instituciones extractivas la bloquean para proteger a las élites."},
    {t:"Ejemplo: Corea del Norte vs Sur", d:"Geográficamente y culturalmente idénticos en 1947. En 2010: Corea del Sur: $26.609 per cápita. Corea del Norte: $1.612. Única diferencia: instituciones."},
  ],
  formulas:[
    {title:"Función de Producción Cobb-Douglas", formula:"Y = A × K^(1/3) × H^(2/3)",
     vars:[{n:"Y",d:"producción/GDP"},{n:"A",d:"tecnología/PTF"},{n:"K",d:"capital físico (máquinas, infraestructura)"},{n:"H",d:"capital humano (trabajadores × productividad)"}],
     nota:"Rendimientos constantes a escala (1/3+2/3=1): si K y H se duplican, Y se duplica."},
    {title:"Tasa de Crecimiento del GDP per cápita", formula:"g = (y_{t+1} − y_t) / y_t × 100%",
     vars:[{n:"y_t",d:"GDP per cápita en el período t"},{n:"y_{t+1}",d:"GDP per cápita en el período siguiente"}],
     nota:"Ejemplo: EEUU 2005: $42.482. 2006: $43.215. g=(43215−42482)/42482×100=1.7%."},
    {title:"Regla del 70 (aproximación)", formula:"Años para duplicar = 70 / tasa de crecimiento (%)",
     nota:"Si creces al 7% anual, tardas ~10 años en duplicar el GDP. Si crecés al 1%, tardas ~70 años."},
  ],
  ejercicios:[
    {titulo:"Corea del Norte vs Sur — Instituciones",
     enunciado:"Comparar el crecimiento de Corea del Norte y Corea del Sur desde 1947 a 2010. Explicar la diferencia.",
     datos:["1947: los dos países eran prácticamente iguales en GDP per cápita","2010: Corea del Sur: $26.609/cápita","2010: Corea del Norte: $1.612/cápita"],
     pasos:["Diferencia en 2010: $26.609 / $1.612 ≈ 16.5 veces más rico el Sur.",
       "Misma geografía, mismo clima, misma cultura, misma población inicial.",
       "Única diferencia: instituciones. Sur: mercados libres, derechos de propiedad, democracia.",
       "Norte: economía planificada, sin derechos de propiedad, dictadura → instituciones extractivas.",
       "Conclusión: las instituciones, no los recursos naturales ni la geografía, son la causa fundamental del crecimiento."],
     respuesta:"Corea del Sur es 16.5x más rica gracias a instituciones inclusivas. Las instituciones son la causa fundamental del crecimiento."},
    {titulo:"India vs EEUU — Rol de la tecnología",
     enunciado:"El GDP por trabajador en India es mucho menor que en EEUU. ¿Cuánto explicaría la tecnología (A)?",
     datos:["GDP/trabajador real EEUU: $72.000 (hipotético)","GDP/trabajador real India: mucho menor","Si India tuviera la A (tecnología) de EEUU: GDP/trabajador hipotético = $24.071"],
     pasos:["Diferencia entre EEUU e India NO se explica solo por el capital (K) o educación (H).",
       "Si India recibiera mágicamente la tecnología de EEUU (A_EEUU), su GDP/trabajador sería $24.071.",
       "Esto sigue siendo mucho menor que EEUU → parte se explica por K y H menores.",
       "Pero la tecnología es el factor MÁS importante para explicar las diferencias de riqueza entre naciones.",
       "Conclusión: la PTF (A) explica la mayor parte de la diferencia entre países ricos y pobres."],
     respuesta:"La tecnología (A) es el factor dominante en las diferencias de PIB entre países. Sin ella, más K y H no alcanzan para cerrar la brecha."},
    {titulo:"Tasa de crecimiento EEUU 2005-2006",
     enunciado:"GDP per cápita EEUU 2005: $42.482. GDP per cápita 2006: $43.215. Calcular tasa de crecimiento.",
     datos:["y_2005 = $42.482","y_2006 = $43.215"],
     pasos:["g = (43.215 − 42.482) / 42.482 × 100.",
       "Numerador: 43215−42482 = 733.",
       "g = 733 / 42482 × 100 = 1.72% ≈ 1.7%."],
     respuesta:"Tasa de crecimiento 2005-2006 = 1.7% anual."},
  ],
  tips:["Y = A × K^(1/3) × H^(2/3). Exponentes 1/3 y 2/3. Suman 1.",
    "Rendimientos decrecientes del K: más capital ayuda, pero cada unidad adicional ayuda MENOS.",
    "Tecnología (A) = PTF = la razón por la que países con el mismo K y H pueden tener GDP muy diferente.",
    "Instituciones inclusivas → derechos de propiedad → incentivos para invertir → crecimiento.",
    "Corea del Norte vs Sur: la ÚNICA diferencia son las instituciones. Es el ejemplo clave del libro."],
},
];

/* ── CHAPTER RENDERER ── */
function Cap({ cap }) {
  const c = PAL[cap.pal];
  const SECS = ["Teoría","Conceptos","Fórmulas","Ejercicios","Tips"];
  const [sec, setSec] = useState("Teoría");
  return (
    <div>
      <div style={{ padding:"20px 0 16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6 }}>
          <span style={{ fontSize:32 }}>{cap.emoji}</span>
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:c.m, textTransform:"uppercase", letterSpacing:1 }}>Capítulo {cap.num}</div>
            <h2 style={{ margin:0, fontSize:22, color:"#111827" }}>{cap.titulo}</h2>
            <div style={{ fontSize:13, color:"#6B7280" }}>{cap.sub}</div>
          </div>
        </div>
      </div>

      <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:20, padding:"10px 0",
        borderTop:`2px solid ${c.bd}`, borderBottom:`1px solid ${c.bd}` }}>
        {SECS.map(s=>(
          <button key={s} onClick={()=>setSec(s)} style={{ padding:"6px 16px", border:"none", borderRadius:20,
            cursor:"pointer", fontSize:13, fontWeight:s===sec?700:500,
            background:s===sec?c.m:"#F3F4F6", color:s===sec?"#fff":"#6B7280" }}>{s}</button>
        ))}
        {cap.grafico && <button onClick={()=>setSec("Gráfico")} style={{ padding:"6px 16px", border:"none", borderRadius:20,
          cursor:"pointer", fontSize:13, fontWeight:sec==="Gráfico"?700:500,
          background:sec==="Gráfico"?c.m:"#F3F4F6", color:sec==="Gráfico"?"#fff":"#6B7280" }}>Gráfico</button>}
      </div>

      {sec==="Teoría" && (
        <div>
          {cap.teoria.map((t,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12, alignItems:"flex-start" }}>
              <div style={{ background:c.m, color:"#fff", borderRadius:"50%", width:24, height:24,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, flexShrink:0, marginTop:1 }}>{i+1}</div>
              <p style={{ margin:0, fontSize:14, color:"#374151", lineHeight:1.7 }}>{t}</p>
            </div>
          ))}
        </div>
      )}

      {sec==="Conceptos" && (
        <div>
          {cap.conceptos.map((ck,i)=><Ck key={i} term={ck.t} def={ck.d} c={c}/>)}
        </div>
      )}

      {sec==="Fórmulas" && (
        <div>
          {cap.formulas.map((f,i)=><Fm key={i} title={f.title} formula={f.formula} vars={f.vars} nota={f.nota} c={c}/>)}
        </div>
      )}

      {sec==="Ejercicios" && (
        <div>
          <div style={{ background:c.bg, border:`1px solid ${c.bd}`, borderRadius:8, padding:"10px 14px", marginBottom:14, fontSize:13, color:c.t }}>
            💡 Hacé click en cada ejercicio para ver la resolución paso a paso
          </div>
          {cap.ejercicios.map((ej,i)=><Ej key={i} titulo={ej.titulo} enunciado={ej.enunciado}
            datos={ej.datos} pasos={ej.pasos} respuesta={ej.respuesta} c={c}/>)}
        </div>
      )}

      {sec==="Tips" && (
        <div style={{ background:c.bg, border:`1px solid ${c.bd}`, borderRadius:12, padding:"16px 18px" }}>
          <div style={{ fontSize:13, fontWeight:700, color:c.t, marginBottom:12, textTransform:"uppercase", letterSpacing:.5 }}>
            ⚡ Tips para el Parcial — Cap. {cap.num}
          </div>
          {cap.tips.map((t,i)=>(
            <div key={i} style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start", paddingBottom:10,
              borderBottom: i<cap.tips.length-1?`1px solid ${c.bd}`:"none" }}>
              <span style={{ background:c.m, color:"#fff", borderRadius:4, padding:"2px 7px", fontSize:12, fontWeight:700, flexShrink:0 }}>{i+1}</span>
              <span style={{ fontSize:14, color:"#374151", lineHeight:1.5 }}>{t}</span>
            </div>
          ))}
        </div>
      )}

      {sec==="Gráfico" && cap.grafico==="od" && <GraficoOyD c={c}/>}
      {sec==="Gráfico" && cap.grafico==="monopolio" && <GraficoMonopolio c={c}/>}
      {sec==="Gráfico" && cap.grafico==="presupuesto" && <GraficoPresupuesto c={c}/>}
    </div>
  );
}

/* ── APP ── */
export default function App() {
  const [activeId, setActiveId] = useState("cap1");
  const cap = CAPS.find(c=>c.id===activeId);
  const c = PAL[cap.pal];

  return (
    <div style={{ fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background:"#F9FAFB", minHeight:"100vh" }}>

      {/* Header */}
      <div style={{ background:"#fff", borderBottom:"1px solid #E5E7EB", padding:"12px 20px",
        position:"sticky", top:0, zIndex:100 }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <div style={{ fontSize:11, color:"#9CA3AF", fontWeight:600, letterSpacing:1, textTransform:"uppercase", marginBottom:2 }}>
            Parcial · Introducción a la Economía · UNSAM · Acemoglu
          </div>
          <div style={{ overflowX:"auto", display:"flex", gap:6, paddingBottom:4 }}>
            {CAPS.map(cap=>{
              const pc = PAL[cap.pal];
              const active = cap.id===activeId;
              return (
                <button key={cap.id} onClick={()=>setActiveId(cap.id)}
                  style={{ padding:"6px 14px", border:`1px solid ${active?pc.m:pc.bd}`, borderRadius:8,
                    cursor:"pointer", fontSize:12, fontWeight:active?700:500, whiteSpace:"nowrap",
                    background:active?pc.m:pc.bg, color:active?"#fff":pc.t, flexShrink:0,
                    transition:"all 0.12s" }}>
                  {cap.emoji} {cap.num}. {cap.titulo.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:800, margin:"0 auto", padding:"0 20px 40px" }}>
        {cap && <Cap key={activeId} cap={cap}/>}
      </div>

      {/* Footer */}
      <div style={{ borderTop:"1px solid #E5E7EB", padding:"16px 20px", textAlign:"center",
        fontSize:12, color:"#9CA3AF", background:"#fff" }}>
        Caps 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 · 11 · 12 — Acemoglu, Laibson & List + Slides Prof. Emanuel Lopez
      </div>
    </div>
  );
}
