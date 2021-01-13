const loader = (function() {
    const content = document.querySelector('#content');
    const top_bar = document.createElement('div');
    top_bar.setAttribute('class','top_bar');
    top_bar.innerHTML = `<h1 id='title'>Mary's Bakery</h1>
                         <nav id='nav'>
                            <div id='home' class='nav_button'>Home</div>
                            <div id='menu' class='nav_button'>Menu</div>
                            <div id='about' class='nav_button'>About</div>
                         </nav>`;
    content.appendChild(top_bar);
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');
    const title = document.querySelector('#title');
    return {home,menu,about,title}

})();

export default loader;