const CATEGORIES = [
        { name: "technology", color: "#3b82f6" },
        { name: "science", color: "#16a34a" },
        { name: "finance", color: "#ef4444" },
        { name: "society", color: "#eab308" },
        { name: "entertainment", color: "#db2777" },
        { name: "health", color: "#14b8a6" },
        { name: "history", color: "#f97316" },
        { name: "news", color: "#8b5cf6" },
      ];

      
    
    const allcategories = CATEGORIES.map((el)=>el.name);
    // console.log(allcategories);
    
    const allcategories2 = CATEGORIES.map((el)=>el.color);
    // console.log(allcategories2);
    
    
// Selecting DOM Elements
const button = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");


// Load Data from Supabase
loadFacts();
async function loadFacts(){
    const res =await fetch('https://lnsaoavwzafxgfhdctll.supabase.co/rest/v1/facts', {
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxuc2FvYXZ3emFmeGdmaGRjdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3OTAzODgsImV4cCI6MTk4OTM2NjM4OH0.M5-TRjZoDMLHy8eUJWCQ492qGiJtbLVjP7nlPxX4gyA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxuc2FvYXZ3emFmeGdmaGRjdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3OTAzODgsImV4cCI6MTk4OTM2NjM4OH0.M5-TRjZoDMLHy8eUJWCQ492qGiJtbLVjP7nlPxX4gyA",
    }
});
const data = await res.json();
createFactsList(data);
}




// Create DOM Elements
factsList.innerHTML = "";
function createFactsList(dataArray){
    
    const htmlArr = dataArray.map((fact)=>`<li class="fact">
    <p>${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a> 
    </p>
    <span class="tag" style="background-color: ${CATEGORIES.find((cat)=> cat.name === fact.category).color};">${fact.category}</span> 
    </li>`);
    const html = htmlArr.join(" ");
    factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle from visibility
button.addEventListener('click', function(){

    if(form.classList.contains('hidden')){
        form.classList.remove('hidden');
        button.textContent = "Close";
    }
    else{
        form.classList.add('hidden');
        button.textContent = "Share a fact";
    }
});



