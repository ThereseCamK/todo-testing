function leggtilNy(){
    let html = `Oppgave: <input type="text" oninput="model.oppgaverinnput.oppgavenavn = this.value"><br>
    Beskrivelse: <input type="text" oninput="model.oppgaverinnput.oppgavebeskrivelse = this.value"><br>
    <button onclick="lag()">lagre</button>`
    model.leggtilny = html
    show()
    }
    
    
    var d = new Date();
    function ergjort(checkbox, index){
    
        model.oppgaver[index].gjort = checkbox.checked
        if(checkbox.checked){
            model.oppgaver[index].gjortDato = d.toLocaleDateString();
        }
        else {
            model.oppgaver[index].gjortDato = ''
        }
        show()
    }
    
    function fjernOppgave(index){
        model.oppgaver.splice(index, 1)
        show()
    }
    function lag(){
         
        if(model.oppgaverinnput.oppgavenavn == '' ||
            model.oppgaverinnput.oppgavebeskrivelse == ''){
            model.feilmelding = 'Du må fylle inn! ';
            show()
        }
        else {
            model.oppgaver.push({
                oppgavenavn: model.oppgaverinnput.oppgavenavn,
                oppgavebeskrivelse: model.oppgaverinnput.oppgavebeskrivelse,
                gjortDato: '',
            })
            model.feilmelding = '';
        }
       
        model.oppgaverinnput.oppgavenavn = '';
        model.oppgaverinnput.oppgavebeskrivelse = '';
        
        model.leggtilny = ''; 
        show()
    }
    function endreOppgave(index){
       
        model.leggtilny = 
        `Oppgave: <input type="text" oninput="model.oppgaverinnput.oppgavenavn = this.value"><br>
        Beskrivelse: <input type="text" oninput="model.oppgaverinnput.oppgavebeskrivelse = this.value"><br>
        <button onclick="oppdater(${index})"> oppdater </button>`
    
    show()
    }
    function oppdater(index){
        if(model.oppgaverinnput.oppgavenavn == '' || model.oppgaverinnput.oppgavebeskrivelse == ''){
            model.feilmelding = 'Du må fylle inn! ';
            show()
        }else {
            model.oppgaver[index].oppgavenavn = model.oppgaverinnput.oppgavenavn;
            model.oppgaver[index].oppgavebeskrivelse = model.oppgaverinnput.oppgavebeskrivelse;
        }
        model.leggtilny = '';
        show()
      
      
    }
    