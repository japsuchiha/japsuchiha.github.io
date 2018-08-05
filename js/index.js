

 let area = document.querySelector('#typed');
// let command = document.querySelector('.commands');
let elem = $('#typed');
    var typed6 = new Typed(area,{
    strings: ["",'Welcome feel free to go through my stuff ...^1000 <br> `enter "help" to get started...`'],
    typeSpeed: 10,
    backSpeed: 0,
    startDelay: 2000,
    onStringTyped: function() {
    return elem.siblings('.typed-cursor').remove();}
  });
  let i = 0;
  let update = () =>{
      console.log("update");
    $('.commands').keydown(function(e){
        let code = e.keyCode;
        let command = (e.target);
        console.log(code);
        if(code === 13){
            e.preventDefault();
            console.log(command.textContent)
            console.log(document.querySelector('.input'))
            let val = command.textContent;
            console.log(val);
            switch(val){
                case "help":
                help();
                resetCommand(command);
                break;
                case "clear":
                clear(command);
                update();
                break;
                default:
                error();
                resetCommand(command);
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
setTimeout(root,4500);

let help = ()=>{
    let message = `<p class="result">cd projects cd about cd resume cd skills</p>`;
    return($('.commands').append(message));
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
}
let resetCommand = (command)=>{
    console.log($('.commands'));
    const newCommand = command.parentNode.cloneNode(true);
    command.setAttribute('contenteditable', false);
    command.setAttribute('disabled',true);
    console.log(command);
    if(command.innerHTML === "help"){
       newCommand.querySelector('.write').textContent = "$root ";
    }
    $('.commands').append(newCommand);
    newCommand.querySelector('.input').innerHTML = "";
    console.log(newCommand.querySelector('.input'));
    newCommand.querySelector('.input').focus();
    console.log(newCommand);
}