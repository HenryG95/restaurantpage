const about = (function() {
    const content = document.querySelector('#content');
    const about = document.createElement('div');
    about.setAttribute('class','about');
    about.innerHTML = `<h1 id='aboutTitle'>About</h1>
                       <p>Mary's backery the best site
                          to find quality desserts
                          money can buy!</p
                        <br>
                        <p>Be sure to follow us on instagram: @mary.sbakery</p>`;
    return {about}
})();

export default about;