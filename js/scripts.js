var sides = function(length1, length2, length3) {
  if ((length1 === length2) && (length2 === length3) && (length1 === length3)) {
    return "equilateral";
  } else if ((length1 + length2 <= length3) || (length2 + length3 <= length1) || (length1 + length3 <=length2)) {
    return false;
  } else if ((length1 === length2) || (length2 === length3) || (length3 === length1)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

$(document).ready(function() {
  $("form#sides").submit(function(event){
    var input1 = parseInt($("input#side-length1").val());
    var input2 = parseInt($("input#side-length2").val());
    var input3 = parseInt($("input#side-length3").val());
    var result = sides(input1, input2, input3);
    $("#result").hide();
    $('#error').hide();

    if (result) {
      $(".triangle-type").text(result);
      $("#result").show();
    } else {
      $('#error').show();
    }
    event.preventDefault();
  });
});
















