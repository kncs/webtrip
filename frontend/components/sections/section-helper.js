/**
 * Load actions creator
 */
import AppActionsCreator from '../../actions/app-actions-creator'

let handleClick = function(page) {
  return function(event) {
    event.preventDefault();
    AppActionsCreator.changePage(page);
  }
}

let section = {}


section.getLinks = function(activeLink){
  let home = 'Acceuil';
  let roadmap = 'Parcours';
  let gallery = 'Gallerie';
  let about = 'A propos';
  return [
    {label:home, href:'', active: activeLink === home, onClick:handleClick('home')},
    {label:roadmap, href:'', active: activeLink === roadmap, onClick:handleClick('roadmap')},
    {label:gallery, href:'', active: activeLink === gallery, onClick:handleClick('gallery')},
    {label:about, href:'', active: activeLink === about, onClick:handleClick('about')}
  ];
}
export default section;
