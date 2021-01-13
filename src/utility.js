const utility = (function() {
    const content = document.querySelector('#content');
    function render(element) {
        content.appendChild(element);
    }

    function remove() {
        content.removeChild(content.lastChild);
    }

    function update(element) {
        remove();
        render(element);
    }

    return {
        update
    }
})();

export default utility