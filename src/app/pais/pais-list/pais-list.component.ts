import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service'; 

@Component({
  selector: 'app-pais-list',
  standalone: false,
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises=[
    {
        "id": 1,
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "formation_year": 1707,
        "official-language": "English (de facto)",
        "capital": "London",
        "description": "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
    },
        {
        "id": 2,
        "name": "Portugal",
        "formation_year": 1143,
        "official-language": "Portuguese",
        "capital": "Lisbon",
        "description": "Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1920px-Flag_of_Portugal.svg.png"
    },
        {
        "id": 3,
        "name": "Canada",
        "formation_year": 1867,
        "official-language": "English and French",
        "capital": "Ottawa",
        "description": "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, making it the world's second-largest country by total area, with the world's longest coastline.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png"
    },
        {
        "id": 4,
        "name": "Nicaragua",
        "formation_year": 1821,
        "official-language": "Spanish",
        "capital": "Managua",
        "description": "Nicaragua, set between the Pacific Ocean and the Caribbean Sea, is a Central American nation known for its dramatic terrain of lakes, volcanoes and beaches. Vast Lake Managua and the iconic stratovolcano Momotombo sit north of the capital Managua. To its south is Granada, noted for its Spanish colonial architecture and an archipelago of navigable islets rich in tropical bird life.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1920px-Flag_of_Nicaragua.svg.png"
    },
        {
        "id": 5,
        "name": "Vanuatu",
        "formation_year": 1980,
        "official-language": "Bislama, English and French",
        "capital": "Port Vila",
        "description": "Vanuatu is a South Pacific Ocean nation made up of roughly 80 islands that stretch 1,300 kilometers. The islands offer scuba diving at coral reefs, underwater caverns and wrecks such as the WWII-era troopship SS President Coolidge. Harborside Port Vila, the nation’s capital and economic center, is on the island of Efate. The city is home to the Vanuatu National Museum, which explores the nation’s Melanesian culture.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1920px-Flag_of_Vanuatu.svg.png"
    },
        {
        "id": 6,
        "name": "Vietnam",
        "formation_year": 1945,
        "official-language": "Vietnamese",
        "capital": "Hanoi",
        "description": "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers.",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png"
    },
    selected: Boolean = false,
    selectedCountry: any = null
  ];


  constructor(private paisService: PaisService) { }

  ngOnInit() {

    };
  }

