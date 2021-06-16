let appdiv = document.getElementById('app');


show();
function show(){
  
    let html = `${model.feilmelding} <br><table>`;
    model.overskrift.forEach(overskrif => html+= `<th>${overskrif}</th>`);
   html += `
   ${tabelHtml()}
   </table>`;
   html += `<button onclick="leggtilNy()"> Legg til oppgave  </button><br>
   ${model.leggtilny}
   
   `;
   appdiv.innerHTML = html;

  
 
}


function tabelHtml(){
    let html ='';
    let sjekket = model.oppgaver;
 
for(let i = 0; i < model.oppgaver.length; i ++){
    html += `<tr>
    <td>${model.oppgaver[i].oppgavenavn}</td>
    <td>${model.oppgaver[i].oppgavebeskrivelse}</td>
    <td><input type="checkbox" ${sjekket[i].gjort == true ? 'checked' : ''} onchange="ergjort(this, ${i})" /></td>
    <td>${model.oppgaver[i].gjortDato}</td>
    <td onclick="fjernOppgave(${i})">X</td>
    <td onclick="endreOppgave(${i})">ENDRE</td>
    </tr>`
}
    

    return html 
}

