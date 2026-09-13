const jobs=[
["MineLock","+300 usuarios","Admin"],["MineLool","+30 usuarios","Dueño"],["MineDay","+40 usuarios","Dueño"],
["MineNight","+100 usuarios","Dueño"],["ChowBox","+100 usuarios","Coordinador"],["MineBack","+200 usuarios","T-Mod"],
["MineCaribe","+30 usuarios","Admin"],["Valkyrian","+80 usuarios","T-Mod"],["MineFast","+30 usuarios","Manager"],
["EskMC","+30 usuarios","Founder"],["MineIron","+40 usuarios","Sr-Mod"],["SealMC","+25 usuarios","Manager"],
["VoltiumMC","+30 usuarios","Owner"],["IgnitemMC","+40 usuarios","Manager"],["TakeMC","+35 usuarios","Manager"],
["KeniBox","+50 usuarios","Helper"],["RotiunMC","No Abrio","Manager"],["GardenMC","En Creacion","Dueño"],
["MineMoon","+50 usuarios","Jr-Mod"],["NightBox","+20 usuarios","Sr-Admin"]
];
document.getElementById("cards").innerHTML=jobs.map(x=>`<article class="card"><b>${x[0]}</b><span>${x[1]}</span><strong>${x[2]}</strong></article>`).join("");
document.getElementById("discord").onclick=async()=>{try{await navigator.clipboard.writeText("idrako__");}catch(e){};document.getElementById("discord").innerHTML="Discord<br><b>idrako__</b> — Copiado";};
