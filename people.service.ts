
export class PeopleService{

  peopleList = [
    {
      nom: "Lambert",
      prenom: "Achille",
      naissance: new Date(2017,5,14),
      mort: new Date(1942,6,15),
    },
    {
      nom: "Aristide",
      prenom: "Brian",
      naissance: new Date(1984,5,14),
      mort: new Date(1912,6,15),
    }
  ]

  constructor() { }

}
