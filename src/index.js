import utility from './utility';
import loader from './page_load';
import home from './home_page';
import menu from './menu_page';
import about from './about_page';


loader.menu.addEventListener('click', () => {
    console.log('Menu');
    utility.update(menu.menu);
})

loader.home.addEventListener('click', () => {
    console.log('Home');
    utility.update(home.home);
})

loader.about.addEventListener('click', () => {
    console.log('About');
    utility.update(about.about);
})

loader.title.addEventListener('click', () => {
    console.log('Home');
    utility.update(home.home);
})

