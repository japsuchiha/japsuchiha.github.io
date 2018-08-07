
 let area = document.querySelector('#typed');
 let store = undefined;
let dirs;
let dataAll;
fetch('./data/data.json')
  .then((res) => res.json())
  .then((data) => {
    dataAll = data
    dirs = dataAll.dir;
  })
  window.onload = ()=>{
      setTimeout(()=>{
          document.querySelector('.bash').style.display = "block";
      }, 1000);
  }
let elem = $('#typed');
    var typed6 = new Typed(area,{
    strings: ["",'Welcome feel free to go through my stuff ...^1000 <br> `enter "help" to get started...`'],
    typeSpeed: 10,
    backSpeed: 0,
    startDelay: 3000,
    onStringTyped: function() {
    return elem.siblings('.typed-cursor').remove();}
  });
  let i = 0;
  let update = () =>{
    $('.commands').keydown(function(e){
        let code = e.keyCode;
        let command = (e.target);
        if(code === 13){
            e.preventDefault();
            let split = command.textContent.split(' ');
            let val = split[0];
            
            if(split[1]){
                store = split[1];
            }
            switch(val){
                case "help":
                help();
                resetCommand(command,split[1]);
                break;
                case "clear":
                clear();
                update();
                break;
                case "ls":
                ls(command.parentNode.querySelector('.write').textContent);
                resetCommand(command,store);
                break;
                case "cd":
                cd(command,store);
                break;
                case "home":
                store = "root";
                resetCommand(command,store);
                break;
                case "open":
                open(command,store)
                resetCommand(command,store)
                break;
                default:
                error();
                resetCommand(command,store);
            }
        }
        
    })
}


  let enter = `<div class="root">
  <span class="write">$root</span>
  <span contenteditable = "true"  class="input"></span>
  </div>`;
  let root = function(){
      $('.commands').append(enter);
      $('.input').focus();
      update();
  }
setTimeout(root,5500);

let help = ()=>{
    dataAll.help.map((obj)=>{
        let display = `
        <li>${obj}</li>
        `
        $('.commands').append(display);
    })
}

let error = ()=>{
    let message = '<p class="result">command not found</p>';
    return ($('.commands').append(message));
}

let clear = () =>{
    document.querySelector('.bash').innerHTML= `<div class="commands">
    <div class="root">
    <span class="write">$root</span>
    <span contenteditable = "true"  class="input"></span>
    </div>
    </div>`;
    $('.input').focus();
    store = undefined;
}

let ls = (load) =>{
    load = load.slice(1,load.length)
    dataAll[load].map((arr)=>{
        let display = `
            <li>${arr}</li>
            `
            $('.commands').append(display);
    })
}

let cd = (command,val)=>{
    if(dirs.indexOf(val) === -1 ){
        error();
        resetCommand(command,command.parentNode.querySelector('.write').textContent.slice(1,command.parentNode.querySelector('.write').textContent.length));
    }
    else{
        resetCommand(command,val);
    }
        
}

let open = (command,val) =>{
    if(command.parentNode.querySelector('.write').textContent === "$contactme"){
        dataAll[val].map((obj)=>{
            obj.map((stuff)=>{
                let display;
                if(store === "mail.ju")
                    display = `<a class = "link" href="mailto:${stuff} target="_blank">${stuff}</a>`;
                else{
                    display = `<a class="link" href="${stuff}" target="_blank">${stuff}</a>`;
                }
            $('.commands').append(display);
            })
            
        })
    }
    else{
        let display = dataAll[val];
        $('.commands').append(display)
    }
    
}
let resetCommand = (command,val)=>{
    const newCommand = command.parentNode.cloneNode(true);
    command.setAttribute('contenteditable', false);
    command.setAttribute('disabled',true);
    if(val === undefined || dirs.indexOf(val) === -1){
       newCommand.querySelector('.write').textContent = command.parentNode.querySelector('.write').textContent;
    }
    else{
        newCommand.querySelector('.write').textContent = `$${val}`;
    }
    $('.commands').append(newCommand);
    newCommand.querySelector('.input').innerHTML = "";
    newCommand.querySelector('.input').focus();
}