$(document).ready(function () {

  $('#get-data').click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
      .done(function (data) {

        let name = $('<p></p>').text(`Imię: ${data.imie}`);
        let lastName = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
        let occupation = $('<p></p>').text(`Zawód: ${data.zawod}`);
        let business = $('<p></p>').text(`Firma: ${data.firma}`);

        let container = $('<div id = dane-programisty></div>');

        container.append(name);
        container.append(lastName);
        container.append(occupation);
        container.append(business);

        let jqBody = $('body');
        jqBody.append(container);

      })
      .fail(function (error) {
        console.error(error);
      })
  })

})








