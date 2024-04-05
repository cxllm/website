import { Album } from "./index";
const info: Album = {
	url: "lille",
	cover: "Rue%20Paul%20Duez.jpg",
	fr: {
		name: "Avril 2023 - Lille par Nuit",
		description: "Les photos que j'avais pris par nuit à Lille."
	},
	en: {
		name: "April 2023 - Lille by Night",
		description: "Pictures of Lille at night"
	},
	photos: [
		{
			image: "Rue%20Paul%20Duez.jpg",
			description: {
				fr: "Rue Paul Duez",
				en: "Rue Paul Duez"
			}
		},
		{
			image: "Passerelle%20Lille%20Flandres.jpg",
			description: {
				fr: "Passerelle Gare de Lille Flandres",
				en: "Lille Flanders Train Station Footbridge"
			}
		},
		{
			image: "Escalier%20Westfield%20Euralille.jpg",
			description: {
				fr: "Escalier Westfield Euralille",
				en: "Westfield Euralille Staircase"
			}
		},
		{
			image: "Escalier%20de%20Quai%20de%20la%20Gare.jpg",
			description: {
				fr: "Escalier de Quai de la Gare Lille Flandres",
				en: "Lille Flanders Platform Staircase"
			}
		},
		{
			image: "Avenue%20Willy%20Brandt.jpg",
			description: {
				fr: "Avenue Willy Brandt",
				en: "Avenue Willy Brandt"
			}
		},
		{
			image: "Tableau%20des%20Departs.jpg",
			description: {
				fr: "Tableau des Départs Gare de Lille Flandres",
				en: "Lille Flanders Station Departure Board"
			}
		}
	]
};
export default info;
