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
let Nombre_plice = 0;
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
            break;

        case 4: console.log("===ANNULATION D'UN ETICKET===");
            break;

        case 5: console.log('===ACHETER UN TICKET===');
            break;

        case 6: console.log('===FILTRAGE DES TRAJET===');
            break;

        case 7: console.log('===TRI DE TRAGET===');
            break;
        default: console.log("**LR PROGRAMME QUETTE**");
    }

} while (choix != 0);

function affichage_trajet() {
    for (let i = 0; i < trips.length; i++) {
        console.log(`
        #${trips[i].id} ${trips[i].destination} → ${trips[i].departure} 
        Départ : ${trips[i].departureTime}  
        Arrivée : ${trips[i].arrivalTime} 
        Prix : ${trips[i].price}DH 
        Places disponibles : ${trips[i].availableSeats} 
        `);
    }
}

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
                **Train complet.**
                `);
        }
        else {
            Nombre_plice++;
            console.log(`trajet : ${trips[index].departureTime} → ${trips[index].arrivalTime}`);
            for (let i = 0; i < tickets.length; i++) {
                tickets[i].id = trips[index].id;
                tickets[i].passengerName = Name;
                tickets[i].tripId = Identifiant_trajet;               // t2akd mn hadi..!
                tickets[i].seatNumber = trips[index].availableSeats   //hta hadi
                tickets[i].price = trips[index].price;
            }

            console.log(`
   |==Ticket acheté avec succès==|
    _______________________________
    |    Ticket #${trips[index].id} 
    |    Passager : ${Name} 
    |    Trajet   : ${trips[index].departure} → ${trips[index].destination}
    |    Place    : ${trips[index].availableSeats}
    |    Prix     : ${trips[index].price} DH 
    ______________________________`)
    
        }
        trips[index].availableSeats--;
    }
}