var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];
const tickets_annuler = [];
//let Nombre_ticket = 0;
//let Nombre_ticket_annul = 0;
let ticket_id = 0;
let choix = -1;
do {
    console.log(`
    ================================= 
    RAILWAY MANAGER 
    ================================= 
    1. Afficher les trajets 
    2. Acheter un ticket 
    3. Afficher les tickets
    4. Annuler un ticket 
    5. Rechercher un ticket 
    6. Filtrer les trajets 
    7. Trier les trajets 
    0. Quitter 
 `);

    do {
        choix = Number(prompt("Votre choix : "));
    } while (choix < 0 || choix > 7);


    switch (choix) {
        case 1: console.log('=== TRAJETS DISPONIBLES === ');
            affichage_trajet(trips);
            break;

        case 2: console.log('===ACHETER UN TICKET===');
            achat_eticket(trips);
            break;

        case 3: console.log('=== TICKETS === ');
            Afficher_tickets(tickets, trips);
            break;

        case 4: console.log("===ANNULATION D'UN ETICKET===");
            annulation_ticket(tickets);
            break;

        case 5: console.log('===RECHERCHE UN TICKETS===');
            Rechercher_ticket(tickets);
            break;

        case 6: console.log('===FILTRAGE DES TRAJET===');
            Filtrer_trajets(trips);
            break;

        case 7: console.log('===TRI DE TRAGET===');
            Trier_trajets(trips)
            break;

        case 8: console.log("===NOMBRETOTALE DE TICKETS VUNDUS===");
        nombre
            console.log("")
            break;
        default: console.log("**AUCUN OPERATION EXISTE**");
    }

} while (choix != 0);
///////////////////////////////////////////////////////////////////////////////////////////////
function affichage_trajet() {
    for (let i = 0; i < trips.length; i++) {
        console.log(`
        #${trips[i].id} ${trips[i].departure} → ${trips[i].destination} 
        Départ : ${trips[i].departureTime}  
        Arrivée : ${trips[i].arrivalTime} 
        Prix : ${trips[i].price}DH 
        Places disponibles : ${trips[i].availableSeats} 
        `);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////
function achat_eticket() {
    let Name = prompt("Nom du passager : ");
    let Identifiant_trajet = Number(prompt("Identifiant du trajet : "));

    let index = trips.findIndex(trips => trips.id === Identifiant_trajet);
    if (index === -1) {
        console.log(`**Trajet introuvable.**`);
    }
    else {
        if (trips[index].availableSeats <= 0) {
            console.log(`
                **Train complet**
                `);
        }
        else {
            console.log(`trajet : ${trips[index].departureTime} → ${trips[index].arrivalTime}`);
            tickets.push(
                {
                    id: ticket_id,
                    passengerName: Name,
                    tripId: trips[index].id,
                    departure: trips[index].departure,
                    arrive: trips[index].destination,
                    seatNumber: trips[index].availableSeats,
                    price: trips[index].price
                }
            )
            //Nombre_ticket++;
            ticket_id++;
            console.log(`
   |==Ticket acheté avec succès==|
    _______________________________
    |    Ticket #${trips[index].id} 
    |    Passager : ${Name}                                            //rappel cet ligne doit chonge source des donnee
    |    Trajet   : ${trips[index].departure} → ${trips[index].destination}
    |    Place    : ${trips[index].availableSeats}
    |    Prix     : ${trips[index].price} DH 
    |______________________________`)

            trips[index].availableSeats--;
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Afficher_tickets() {

    for (let i = 0; i < tickets.length; i++) {
        console.log(`
    ${i + 1}: _______________________________
    |    Ticket #${tickets[i].id}
    |    Passager : ${tickets[i].passengerName}
    |    Trajet   : ${tickets[i].departure} → ${tickets[i].arrive}
    |    Place    : ${tickets[i].seatNumber}
    |    Prix     : ${tickets[i].price} DH 
    ______________________________`)
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function annulation_ticket() {
    let sersh_id = Number(prompt("saisir Identifiant du ticket : "));
    let index = tickets.findIndex(tickets => tickets.id === sersh_id);
    if (index === -1) {
        console.log(`**Ticket introuvable.**`);
    }

    else {
        console.log(`
     votre ticket :____________________
    |   Ticket #${tickets[index].id} 
    |    Passager : ${tickets[index].passengerName} 
    |    Trajet   : ${tickets[index].departure} → ${tickets[index].arrive}
    |    Place    : ${tickets[index].seatNumber}
    |    Prix     : ${tickets[index].price} DH 
    ______________________________`);

        tickets_annuler.push(tickets[index]);

        let stock = tickets[index].tripId;
        trips[stock - 1].availableSeats++;
        tickets.splice(index, 1);

        console.log(`**Ticket annulé avec succès.**`);

        //Nombre_ticket--;
        //Nombre_ticket_annul++;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Rechercher_ticket() {
    let sersh_name = prompt("Nom du passager : ");
    let flag = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (sersh_name === tickets[i].passengerName) {
            console.log(`
     votre ticket :_________________
    |   Ticket #${tickets[i].id} 
    |    Passager : ${tickets[i].passengerName} 
    |    Trajet   : ${tickets[i].departure} → ${tickets[i].arrive}
    |    Place    : ${tickets[i].seatNumber}
    |    Prix     : ${tickets[i].price} DH 
    ______________________________`);
            flag = -1;
        }
    }
    if (flag == 0) {
        console.log(`
            Aucun resultat..!`);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Filtrer_trajets() {
    let villeDepart = prompt('Ville de départ : ');
    for (let i = 0; i < trips.length; i++) {
        if (villeDepart.toLowerCase() === trips[i].departure.toLowerCase()) {
            console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH`);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////
function Trier_trajets() {
    let tabTri = [];
    for (let i = 0; i < trips.length; i++) {
        tabTri[i] = {
            depare: trips[i].departure,
            arrive: trips[i].destination,
            price: trips[i].price
        }
    }
    for (let i = 0; i < tabTri.length -1; i++) {
        for (let j = 1; j < tabTri.length; j++) {
            if (tabTri[j].price < tabTri[j - 1].price) {
                let tmp = tabTri[j];
                tabTri[j] = tabTri[j - 1];
                tabTri[j - 1] = tmp;
            }
        }
    }
    for (let i = 0; i < tabTri.length; i++) {
        console.log(`${tabTri[i].depare} → ${tabTri[i].arrive} : ${tabTri[i].price} DH`);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////