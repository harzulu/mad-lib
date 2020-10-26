// Business Logic
// User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event){
    let nameInput = $("input#name").val();
    let celebrityInput = $("input#celebrity").val();
    let verbInput = $("input#verb").val();
    let insectInput = $("input#insects").val();
    let exclameInput = $("input#exclamation").val();
    let placeInput = $("input#place").val();
    let nounInput = $("input#noun").val();
    const answers = [nameInput, celebrityInput, verbInput, insectInput, exclameInput, placeInput, nounInput];
    const classes = [".yourName",".celebrity",".verb",".insects",".exclamation",".place",".noun"];
    let loopNum = 0;
    answers.forEach(function(element) {
      $(classes[loopNum]).append(element);
      loopNum += 1;
    })
    //$(".yourName").append(nameInput);
    //$(".celebrity").append(celebrityInput);
    //$(".verb").append(verbInput);
    //$(".insects").append(insectInput);
    //$(".exclamation").append(exclameInput);
    //$(".place").append(placeInput);
    //$(".noun").append(nounInput);
    $("#story").show();
    $(".fields").hide();
    $("#restart").click(function(){
      window.location.reload();
    });
    event.preventDefault();
  });
});