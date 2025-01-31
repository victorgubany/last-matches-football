// async function getChampionship(){
//     const url = "http://localhost:7000/api/leagues";

//     const selectElement = document.getElementById("campeonato");
//     selectElement.innerHTML = '<option value="" selected>Selecione um campeonato</option>';

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();

     

//       json.forEach(competition => {
//           const option = document.createElement("option");
//           option.value = competition.id;  
//           option.textContent = competition.name; 
//           selectElement.appendChild(option);
//       });
//     } catch (error) {
//     //   alert(error)
//     }
// }

// async function getTeams(){
//     const url = "http://localhost:7000/api/teams";

//     const selectElement = document.getElementById("time");
//     selectElement.innerHTML = '<option value="" selected>Selecione um time</option>';

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();

     

//       json.forEach(competition => {
//           const option = document.createElement("option");
//           option.value = competition.id;  
//           option.textContent = competition.name; 
//           selectElement.appendChild(option);
//       });
//     } catch (error) {
//       alert(error)
//     }
// }

// async function getSpecificTeams(id){

//     const url = `http://localhost:7000/api/specific/teams?id=${id}`;

//     const selectElement = document.getElementById("time");
//     selectElement.innerHTML = '<option value="" selected>Selecione um time</option>';

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//     //   console.log(json)

//       if (json.length === 0) {
//         alert('Não há equipes cadastradas nessa competição');
//         }

//       json.forEach(competition => {
//           const option = document.createElement("option");
//           option.value = competition.id;  
//           option.textContent = competition.name; 
//           selectElement.appendChild(option);
//       });
//     } catch (error) {
//     //   console.log(error)
//     }


// }

// async function getSpecificGames(id){

//     const url = `http://localhost:7000/api/get-matches-by-team?id=${id}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//     //   console.log(json)
//       if(json.length==0){
//         alert("Não foi encontrado nenhum jogo dessa equipe")
//       }



//     const tbody = document.getElementById("tabela-resultados");
//     tbody.innerHTML = ''; 

//     json.forEach(match => {
//         const row = document.createElement("tr");

//         const cells = [
//             match.competition.name, 
//             match.homeTeam.shortName,
//             `${match.homeTeam.crest} ${match.homeTeam.tla} ${match.score.home} x ${match.score.away} ${match.awayTeam.tla} ${match.awayTeam.crest}`,
//             match.awayTeam.shortName,
//             match.date,
//             match.status 
//         ];

//         cells.forEach((cellData, index) => {
//             const cell = document.createElement("td");
        
//             if (index === 2) { 
//                 const container = document.createElement("div");
//                 container.style.display = "flex";
//                 container.style.alignItems = "center";
//                 container.style.gap = "8px";
        
//                 const homeCrest = document.createElement("img");
//                 homeCrest.src = match.homeTeam.crest;
//                 homeCrest.style.width = "24px"; 
//                 homeCrest.style.height = "24px";
//                 container.appendChild(homeCrest);
        
//                 const homeTla = document.createElement("span");
//                 homeTla.textContent = match.homeTeam.tla;
//                 container.appendChild(homeTla);
        
//                 const homeScore = document.createElement("span");
//                 homeScore.textContent = match.score.home;
//                 container.appendChild(homeScore);
        
//                 const separator = document.createElement("span");
//                 separator.textContent = "x";
//                 container.appendChild(separator);
        
//                 const awayScore = document.createElement("span");
//                 awayScore.textContent = match.score.away;
//                 container.appendChild(awayScore);
        
//                 const awayTla = document.createElement("span");
//                 awayTla.textContent = match.awayTeam.tla;
//                 container.appendChild(awayTla);
        
//                 const awayCrest = document.createElement("img");
//                 awayCrest.src = match.awayTeam.crest;
//                 awayCrest.style.width = "24px"; 
//                 awayCrest.style.height = "24px";
//                 container.appendChild(awayCrest);
        
//                 cell.appendChild(container);
//             } else {
//                 cell.textContent = cellData;
//             }
        
//             row.appendChild(cell);
//         });

//         tbody.appendChild(row);
//         });

//     } catch (error) {
//         alert("Não foi encontrado nenhum jogo dessa equipe")
//     }

// }

// async function getSpecificTournaments(id){

//     const url = `http://localhost:7000/api/get-matches-by-league?id=${id}`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Response status: ${response.status}`);
//         }
//         const json = await response.json();
//       //   console.log(json)
//         if(json.length==0){
//           alert("Não foi encontrado nenhum jogo dessa equipe")
//         }
  
  
  
//       const tbody = document.getElementById("tabela-resultados");
//       tbody.innerHTML = ''; 
  
//       json.forEach(match => {
//           const row = document.createElement("tr");
  
//           const cells = [
//               match.competition.name, 
//               match.homeTeam.shortName,
//               `${match.homeTeam.crest} ${match.homeTeam.tla} ${match.score.home} x ${match.score.away} ${match.awayTeam.tla} ${match.awayTeam.crest}`,
//               match.awayTeam.shortName,
//               match.date,
//               match.status 
//           ];
  
//           cells.forEach((cellData, index) => {
//               const cell = document.createElement("td");
          
//               if (index === 2) { 
//                   const container = document.createElement("div");
//                   container.style.display = "flex";
//                   container.style.alignItems = "center";
//                   container.style.gap = "8px";
          
//                   const homeCrest = document.createElement("img");
//                   homeCrest.src = match.homeTeam.crest;
//                   homeCrest.style.width = "24px"; 
//                   homeCrest.style.height = "24px";
//                   container.appendChild(homeCrest);
          
//                   const homeTla = document.createElement("span");
//                   homeTla.textContent = match.homeTeam.tla;
//                   container.appendChild(homeTla);
          
//                   const homeScore = document.createElement("span");
//                   homeScore.textContent = match.score.home;
//                   container.appendChild(homeScore);
          
//                   const separator = document.createElement("span");
//                   separator.textContent = "x";
//                   container.appendChild(separator);
          
//                   const awayScore = document.createElement("span");
//                   awayScore.textContent = match.score.away;
//                   container.appendChild(awayScore);
          
//                   const awayTla = document.createElement("span");
//                   awayTla.textContent = match.awayTeam.tla;
//                   container.appendChild(awayTla);
          
//                   const awayCrest = document.createElement("img");
//                   awayCrest.src = match.awayTeam.crest;
//                   awayCrest.style.width = "24px"; 
//                   awayCrest.style.height = "24px";
//                   container.appendChild(awayCrest);
          
//                   cell.appendChild(container);
//               } else {
//                   cell.textContent = cellData;
//               }
          
//               row.appendChild(cell);
//           });
  
//           tbody.appendChild(row);
//           });
  
//       } catch (error) {
//           alert("Não foi encontrado nenhum jogo dessa equipe")
//       }

// }


// getTeams()  

// getChampionship()

// const selectElement = document.getElementById("campeonato");

// selectElement.addEventListener("change",function(){
//     getSpecificTeams(this.value)
// });

// const search = document.getElementById('search')
// const time = document.getElementById('time')

// search.addEventListener("click",function(){

//     if(time.value == ""){
//         getSpecificTournaments(selectElement.value)
//     }
//     else{
//         getSpecificGames(time.value)
//     }
    
// });

// Função para mostrar o carregamento
function showLoading() {
  const loading = document.getElementById("loading");
  loading.style.display = "block";
}

// Função para ocultar o carregamento
function hideLoading() {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
}

async function getChampionship() {
  showLoading(); // Mostra o carregamento
  const url = "http://localhost:7000/api/leagues";
  const selectElement = document.getElementById("campeonato");
  selectElement.innerHTML = '<option value="" selected>Selecione um campeonato</option>';

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      json.forEach(competition => {
          const option = document.createElement("option");
          option.value = competition.id;
          option.textContent = competition.name;
          selectElement.appendChild(option);
      });
  } catch (error) {
      console.error(error);
  } finally {
      hideLoading(); // Oculta o carregamento
  }
}

async function getTeams() {
  showLoading(); // Mostra o carregamento
  const url = "http://localhost:7000/api/teams";
  const selectElement = document.getElementById("time");
  selectElement.innerHTML = '<option value="" selected>Selecione um time</option>';

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      json.forEach(competition => {
          const option = document.createElement("option");
          option.value = competition.id;
          option.textContent = competition.name;
          selectElement.appendChild(option);
      });
  } catch (error) {
      alert(error);
  } finally {
      hideLoading(); // Oculta o carregamento
  }
}

async function getSpecificTeams(id) {
  showLoading(); // Mostra o carregamento
  const url = `http://localhost:7000/api/specific/teams?id=${id}`;
  const selectElement = document.getElementById("time");
  selectElement.innerHTML = '<option value="" selected>Selecione um time</option>';

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      if (json.length === 0) {
          alert('Não há equipes cadastradas nessa competição');
      }

      json.forEach(competition => {
          const option = document.createElement("option");
          option.value = competition.id;
          option.textContent = competition.name;
          selectElement.appendChild(option);
      });
  } catch (error) {
      console.error(error);
  } finally {
      hideLoading(); // Oculta o carregamento
  }
}

async function getSpecificGames(id) {
  showLoading(); // Mostra o carregamento
  const url = `http://localhost:7000/api/get-matches-by-team?id=${id}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      if (json.length == 0) {
          alert("Não foi encontrado nenhum jogo dessa equipe");
      }

      const tbody = document.getElementById("tabela-resultados");
      tbody.innerHTML = '';

      json.forEach(match => {
          const row = document.createElement("tr");

          const cells = [
              match.competition.name,
              match.homeTeam.shortName,
              `${match.homeTeam.crest} ${match.homeTeam.tla} ${match.score.home} x ${match.score.away} ${match.awayTeam.tla} ${match.awayTeam.crest}`,
              match.awayTeam.shortName,
              match.date,
              match.status
          ];

          cells.forEach((cellData, index) => {
              const cell = document.createElement("td");

              if (index === 2) {
                  const container = document.createElement("div");
                  container.style.display = "flex";
                  container.style.alignItems = "center";
                  container.style.gap = "8px";

                  const homeCrest = document.createElement("img");
                  homeCrest.src = match.homeTeam.crest;
                  homeCrest.style.width = "24px";
                  homeCrest.style.height = "24px";
                  container.appendChild(homeCrest);

                  const homeTla = document.createElement("span");
                  homeTla.textContent = match.homeTeam.tla;
                  container.appendChild(homeTla);

                  const homeScore = document.createElement("span");
                  homeScore.textContent = match.score.home;
                  container.appendChild(homeScore);

                  const separator = document.createElement("span");
                  separator.textContent = "x";
                  container.appendChild(separator);

                  const awayScore = document.createElement("span");
                  awayScore.textContent = match.score.away;
                  container.appendChild(awayScore);

                  const awayTla = document.createElement("span");
                  awayTla.textContent = match.awayTeam.tla;
                  container.appendChild(awayTla);

                  const awayCrest = document.createElement("img");
                  awayCrest.src = match.awayTeam.crest;
                  awayCrest.style.width = "24px";
                  awayCrest.style.height = "24px";
                  container.appendChild(awayCrest);

                  cell.appendChild(container);
              } else {
                  cell.textContent = cellData;
              }

              row.appendChild(cell);
          });

          tbody.appendChild(row);
      });
  } catch (error) {
      alert("Não foi encontrado nenhum jogo dessa equipe");
  } finally {
      hideLoading(); // Oculta o carregamento
  }
}

async function getSpecificTournaments(id) {
  showLoading(); // Mostra o carregamento
  const url = `http://localhost:7000/api/get-matches-by-league?id=${id}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      if (json.length == 0) {
          alert("Não foi encontrado nenhum jogo dessa competição");
      }

      const tbody = document.getElementById("tabela-resultados");
      tbody.innerHTML = '';

      json.forEach(match => {
          const row = document.createElement("tr");

          const cells = [
              match.competition.name,
              match.homeTeam.shortName,
              `${match.homeTeam.crest} ${match.homeTeam.tla} ${match.score.home} x ${match.score.away} ${match.awayTeam.tla} ${match.awayTeam.crest}`,
              match.awayTeam.shortName,
              match.date,
              match.status
          ];

          cells.forEach((cellData, index) => {
              const cell = document.createElement("td");

              if (index === 2) {
                  const container = document.createElement("div");
                  container.style.display = "flex";
                  container.style.alignItems = "center";
                  container.style.gap = "8px";

                  const homeCrest = document.createElement("img");
                  homeCrest.src = match.homeTeam.crest;
                  homeCrest.style.width = "24px";
                  homeCrest.style.height = "24px";
                  container.appendChild(homeCrest);

                  const homeTla = document.createElement("span");
                  homeTla.textContent = match.homeTeam.tla;
                  container.appendChild(homeTla);

                  const homeScore = document.createElement("span");
                  homeScore.textContent = match.score.home;
                  container.appendChild(homeScore);

                  const separator = document.createElement("span");
                  separator.textContent = "x";
                  container.appendChild(separator);

                  const awayScore = document.createElement("span");
                  awayScore.textContent = match.score.away;
                  container.appendChild(awayScore);

                  const awayTla = document.createElement("span");
                  awayTla.textContent = match.awayTeam.tla;
                  container.appendChild(awayTla);

                  const awayCrest = document.createElement("img");
                  awayCrest.src = match.awayTeam.crest;
                  awayCrest.style.width = "24px";
                  awayCrest.style.height = "24px";
                  container.appendChild(awayCrest);

                  cell.appendChild(container);
              } else {
                  cell.textContent = cellData;
              }

              row.appendChild(cell);
          });

          tbody.appendChild(row);
      });
  } catch (error) {
      alert("Não foi encontrado nenhum jogo dessa competição");
  } finally {
      hideLoading(); // Oculta o carregamento
  }
}

// Inicializa as funções
getTeams();
getChampionship();

const selectElement = document.getElementById("campeonato");
selectElement.addEventListener("change", function () {
  getSpecificTeams(this.value);
});

const search = document.getElementById('search');
const time = document.getElementById('time');
search.addEventListener("click", function () {
  if (time.value == "") {
      getSpecificTournaments(selectElement.value);
  } else {
      getSpecificGames(time.value);
  }
});