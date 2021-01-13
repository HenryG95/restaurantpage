const home = (function() {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.setAttribute('class','home');
    home.innerHTML = `<h1 id='homeTitle'>Home of the Sweetest Things</h1>`;
    content.appendChild(home);
    return {home}
})();

export default home;