let section = {}

section.getLinks = function(activeLink){
  let home = 'Acceuil';
  let roadmap = 'Parcours';
  let gallery = 'Gallerie';
  let about = 'A propos';
  return [
    {label:home, href:'', active: activeLink === home},
    {label:roadmap, href:'', active: activeLink === roadmap},
    {label:gallery, href:'', active: activeLink === gallery},
    {label:about, href:'', active: activeLink === about}
  ];
}
export default section;
