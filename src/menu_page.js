const menu = (function() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('class','menu');
    menu.innerHTML = `
  <figure>
    <img src='./images/blueberryMuffins.jpeg'/>
    <figcaption>Blueberry Muffin</figcaption>
  </figure>
  <figure>
    <img src ='./images/brownieCake.jpeg'/>
    <figcaption>Brownie Cake</figcaption>
  </figure>
  <figure>
    <img src ='./images/cheesecake.jpeg'/>
    <figcaption>Cheesecake</figcaption>
  </figure>
  <figure>
    <img src ='./images/cherryPie.jpeg'/>
    <figcaption>Cherry Pie</figcaption>
  </figure>
  <figure>
    <img src ='./images/glazedDonuts.jpeg'/>
    <figcaption>Glazed Donuts</figcaption>
  </figure>`
    return {menu}

})();

export default menu;