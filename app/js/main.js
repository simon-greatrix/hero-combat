$(function() {

  $("#body").progressbar({
    value: 8,
    max: 11
  });

  $("#stun").progressbar({
    value: 16,
    max: 20
  });

  $("#end").progressbar({
    value: 29,
    max: 30
  });

  $("#setBody").click( function() {
    const val = Math.floor(Math.random() * 12);
    $("#body").progressbar("option", {
      value: val
    });
    $("#body .progress-label").text("" + val + "/11");
  })

  $("#setStun").click( function() {
    const val = Math.floor(Math.random() * 21);
    $("#stun").progressbar("option", {
      value: val
    });
    $("#stun .progress-label").text("" + val + "/20");
  })

  $("#setEnd").click( function() {
    const val = Math.floor(Math.random() * 31);
    $("#end").progressbar("option", {
      value: val
    });
    $("#end .progress-label").text("" + val + "/30");
  })
});

