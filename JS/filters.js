const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

const activeFilters = [];




function ActiverOuDesactiver(filter){
    if(filter.classList.contains("active")){
        filter.classList.remove("active");
    } else {
        filter.classList.add("active");
    }
}

function RecupererFiltresActifs(){

    activeFilters.length = 0;

    filters.forEach(function(filter){

        if(filter.classList.contains("active")){

            activeFilters.push(filter.dataset.filter);

        }

    });

}


function MettreAJourLesProjets(){
    if(activeFilters.length == 0){
        projects.forEach(function(project){
            project.style.display = "block";
        })
        return;
    } 
    projects.forEach(function(project){

         
        const categorie = project.dataset.category;

        let correspond = false;

        activeFilters.forEach(function(filter){

            if(categorie.includes(filter)){
                correspond = true;
            }             
        });
        if(correspond == true){

            project.style.display = "block";
        
        }
        else{
        
            project.style.display = "none";
        
        }
    })
}


filters.forEach(function(filter){

    filter.addEventListener("click", function(){
        ActiverOuDesactiver(filter);
        RecupererFiltresActifs();
        MettreAJourLesProjets();

    });

});
