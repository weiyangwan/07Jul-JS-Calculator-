$(document).ready(function(){

  var $basicAnswer = $("#basic-answer-alert"),
      $tripAnswer = $("#trip-answer-alert"),
      $bmiAnswer = $("#bmi-answer-alert"),
      $mortAnswer = $("#mortgage-answer-alert");

  $basicAnswer.hide();
  $tripAnswer.hide();
  $bmiAnswer.hide();
  $mortAnswer.hide();

  $("#basic-calc").click(function(){
    var $operation = $("#basic-operation").val(),
        $input1 = $("#basic-num-1").val(),
        $input2 = $("#basic-num-2").val();

    $basicAnswer.show();
    $tripAnswer.hide();
    $bmiAnswer.hide();
    $mortAnswer.hide();

    $basicAnswer.html(eval($input1 + $operation + $input2));
  });

  $("#trip-calc").click(function(){
    var $miles = $("#trip-distance").val(),
        $mpg = $("#trip-mpg").val(),
        $cost = $("#trip-cost").val(),
        $speed = $("#trip-speed").val();

    $basicAnswer.hide();
    $tripAnswer.show();
    $bmiAnswer.hide();
    $mortAnswer.hide();

    if($speed < 60) {
      $tripAnswer.html(eval($miles / $mpg * $cost));
    } else {
      $tripAnswer.html("$" + parseFloat(eval($miles / ($mpg - ($speed - 60) * 2 )* $cost)).toFixed(2));
    }
  });

  $("#bmi-calc").click(function(){
    var $units = $("#bmi-units").val(),
        $mass = $("#bmi-mass").val(),
        $height = $("#bmi-height").val(),
        $bmi = ($mass / ($height * $height));

      $basicAnswer.hide();
      $tripAnswer.hide();
      $bmiAnswer.show();
      $mortAnswer.hide();

    if($units === "metric") {
      $bmiAnswer.html(parseFloat($bmi.toFixed(2)));
    } else if ($units === "imperial") {
      $bmiAnswer.html(parseFloat(($bmi * 703).toFixed(2)));
    }
  });

  $("#mortgage-calc").click(function(){
    var $loan = $("#mortgage-loan").val(),
        $apr = $("#mortgage-apr").val(),
        $term = $("#mortgage-term").val();

    $basicAnswer.hide();
    $tripAnswer.hide();
    $bmiAnswer.hide();
    $mortAnswer.show();

    $mortAnswer.html("&pound;" + parseInt($loan * $apr * ((1+$apr)^$term)  / (((1+$apr)^$term) - 1)));
  });
});
