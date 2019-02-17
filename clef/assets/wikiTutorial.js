const form = document.querySelector('.searchForm');
form.addEventListener('submit',handleSubmit);
form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefualt();
    const input = document.querySelector('.searchForm').Value;
    const searchQuery = input.trim();
    console.log(searchQuery);
    // fetchResults(searchQuery);
    


}


// function fetchResults(searchQuery) {
//     const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
//     console.log(endpoint);
//   }
