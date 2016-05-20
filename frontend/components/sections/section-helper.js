let section = {}

section.getLinks = function(activeLink){
  let home = 'Acceuil';
  let roadmap = 'Parcours';
  let gallery = 'Gallerie';
  let about = 'A propos';
  return [
    {label:home, href:'/', active: activeLink === home},
    {label:roadmap, href:'/roadmap', active: activeLink === roadmap},
    {label:gallery, href:'/gallery', active: activeLink === gallery},
    {label:about, href:'/about', active: activeLink === about}
  ];
}

section.getWallpaperLinks = function(){
  return [
    {label:'Retour à la gallerie', href:'/gallery', active:true}
  ];
}
export default section;
