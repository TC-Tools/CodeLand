const menuOPtions = document.querySelectorAll('.navbar-home-item a');

window.addEventListener('popstate', (e) => {
    console.log(e)
})

menuOPtions.forEach(menuOption => {
    menuOption.addEventListener('click', (e) => {
        e.preventDefault()
        history.pushState(null, null, e.target.href);
    })
})

// const $sidenavOptionContainer = document.querySelector('#sidenav-option-container');
// const $optionSidenav = document.querySelectorAll('.option-sidenav');
// const $optionContent =  document.querySelector('.projects');

// $optionSidenav.forEach($option => {
//     $option.addEventListener('click', async () => {
//         // remove active class from some option
//         $optionSidenav.forEach($option => {
//             $option.classList.remove('active');
//         });
//         // add active class to the selected option
//         $option.classList.add('active');
//         const cloneChildren = $option.children[0].cloneNode(true);
//         // remove childrens of option selected
//         $optionSelected.innerHTML = '';
//         // add childrens of option selected
//         $optionSelected.appendChild(cloneChildren);

//         // remove active class from sidenav
//         $sidenavOptionContainer.classList.remove('active');
//         $sidenavOptionContainer.classList.add('deactive');

//         switch($option.dataset.option) {
//             case 'projects':
//                 const getProjects = await fetch('/api/user/get_project')
//                 const projects = await getProjects.json();
//                 $optionContent.innerHTML = ''
//                 projects.forEach(project => {
//                     const html = template(
//                         project.author,
//                         project.project_name,
//                         project.image,
//                         project.user_image,
//                         project.url
//                     );
//                     $optionContent.innerHTML += html;
//                 });
//                 break;
//             case 'fragments':
//                 const getFragments = await fetch('/api/user/get_fragment')
//                 const fragments = await getFragments.json();
//                 $optionContent.innerHTML = ''
//                 fragments.forEach(project => {
//                     const html = template(
//                         project.author,
//                         project.fragment_name,
//                         project.image,
//                         project.user_image,
//                         project.url
//                     );
//                     $optionContent.innerHTML += html;
//                 });
//                 break;
//         }
//         // http://localhost:5000/api/user/get_project?user_id=
//     });
// });

// function template(username, projectName, projectImage, userImage, url) {
//     const html = `
//     <a href="${url}" class="project">
//         <div class="project-image">
//             <img src="${projectImage}" alt="${projectName}">
//         </div>
//         <div class="user-container">
//             <h2>${projectName}</h2>
//             <div class="user-profile">
//                 <img src="${userImage}" alt="${userImage}">
//                 <div class="user-data">
//                     <p>${username}</p>
//                     <span>Estudiante</span>
//                 </div>
//             </div>
//         </div>
//     </a>
//     `
//     return html;
// }
