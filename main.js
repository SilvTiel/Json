fetch('generated.json')
  .then(function (response) {
      return response.json();
  })

  .then(function (data) {
      appendData(data);
  })

  .catch(function (err) {
      console.log('error:' + err);
  });

//   function appendData(data) {
//       data.forEach(element => document.getElementById("cards").innerHTML += '<div id="main"><img src='+element.foto+'><div id="container"><h1 id="naam">'+element.naam+'</h1> <p id="opleiding">'+element.opleiding+'</p> <p id="leeftijd">'+element.leeftijd+'</p> <p id="hobbys">'+element.hobbys+'</p><p id="sport">'+element.sport+'</p><p id="lengte">'+element.lengte+'</p>' );
//   }

  function appendData(data) {
      data.forEach(element => document.getElementById("cards").innerHTML += '<div id="main"><div id="container"><h1 id="naam">'+element.name+'</h1> <p id="age">'+element.age+'</p> <p id="gender">'+element.gender+'</p> <p id="email">'+element.email+'</p> <p id="phone">'+element.phone+'</p> <p id="about">'+element.about+'</p>');
  }