
 let area = document.querySelector('#typed');
 let store = undefined;
let dirs;
let dataAll;
fetch('./data/data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log('data:', data);
    dataAll = data
    console.log(dataAll);
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
      console.log("update");
    $('.commands').keydown(function(e){
        let code = e.keyCode;
        let command = (e.target);
        console.log(command.parentNode.querySelector('.write').textContent);
        if(code === 13){
            e.preventDefault();
            console.log(command.textContent)
            console.log(document.querySelector('.input'))
            let split = command.textContent.split(' ');
            let val = split[0];
            
            if(split[1]){
                store = split[1];
            }
            console.log(split[1]);
            console.log(val);
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
                console.log(store);
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
                console.log(store)
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
    console.log(dataAll[load]);
    dataAll[load].map((arr)=>{
        let display = `
            <li>${arr}</li>
            `
            $('.commands').append(display);
        console.log(arr);
    })
}

let cd = (command,val)=>{
    console.log(val);
    if(dirs.indexOf(val) === -1 ){
        console.log(val);
        console.log(command.parentNode.querySelector('.write').textContent)
        error();
        resetCommand(command,command.parentNode.querySelector('.write').textContent.slice(1,command.parentNode.querySelector('.write').textContent.length));
    }
    else{
        resetCommand(command,val);
    }
        
}

let open = (command,val) =>{
    console.log(val);
    $('.commands').append(dataAll[val])
}
let resetCommand = (command,val)=>{
    console.log($('.commands'));
    const newCommand = command.parentNode.cloneNode(true);
    command.setAttribute('contenteditable', false);
    command.setAttribute('disabled',true);
    console.log(command);
    if(val === undefined || dirs.indexOf(val) === -1){
       newCommand.querySelector('.write').textContent = command.parentNode.querySelector('.write').textContent;
    }
    else{
        newCommand.querySelector('.write').textContent = `$${val}`;
    }
    $('.commands').append(newCommand);
    newCommand.querySelector('.input').innerHTML = "";
    console.log(newCommand.querySelector('.input'));
    newCommand.querySelector('.input').focus();
    console.log(newCommand);
}