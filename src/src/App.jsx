import { useState } from "react";

const frases=[
"How are you",
"What's up",
"I don't know",
"Never mind",
"Good luck"
];

export default function App(){

const[i,setI]=useState(0);

const speak=()=>{
const utt=new SpeechSynthesisUtterance(frases[i]);
utt.lang="en-US";
speechSynthesis.speak(utt);
};

return(

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>Entrenador de Pronunciación</h1>

<h2>{frases[i]}</h2>

<button onClick={speak}>
Escuchar
</button>

<br/><br/>

<button onClick={()=>setI((i-1+frases.length)%frases.length)}>
Anterior
</button>

<button onClick={()=>setI((i+1)%frases.length)}>
Siguiente
</button>

</div>

);

}
