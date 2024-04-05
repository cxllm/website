import { Album } from "./index";
const info: Album = {
	url: "sunset",
	cover: "Ramsgate1.jpg",
	fr: {
		name: "Couchers de Soleil",
		description: "Une colléction de mes photos de coucher de soleil."
	},
	en: {
		name: "Sunsets",
		description: "Some sunset pictures I have taken"
	},
	photos: [
		{
			image: "Ramsgate1.jpg",
			description: {
				fr: "Ramsgate Plage 1, Kent, Royaume-Uni",
				en: "Ramsgate Beach 1, Kent, England"
			}
		},
		{
			image: "Ramsgate2.jpg",
			description: {
				fr: "Ramsgate Plage 2, Kent, Royaume-Uni",
				en: "Ramsgate Beach 2, Kent, England"
			}
		},
		{
			image: "Motorway.jpg",
			description: {
				fr: "Coucher de Soleil sur un autoroute vide",
				en: "Sunset on an empty motorway"
			}
		},
		{
			image: "Field.jpg",
			description: {
				fr: "Un coucher de soleil dans les champs",
				en: "Sunset in the fields"
			}
		},
		{
			image: "Fethiye.jpg",
			description: {
				fr: "Plage de Çalış, Fethiye, Turquie",
				en: "Çalış Beach, Fethiye, Türkiye"
			}
		},
		{
			image: "Istanbul.jpg",
			description: {
				fr: "Détroit du Bosphore, Istanbul, Turquie",
				en: "Bosphorus Strait, Istanbul, Türkiye"
			}
		},
		{
			image: "Bruges.jpg",
			description: {
				fr: "Parc Minnewater, Bruges, Belgique",
				en: "Minnewater Park, Bruges, Belgium"
			}
		},
		{
			image: "Window.jpg",
			description: {
				fr: "Un jour de pluie par la fênetre",
				en: "Rainy day through the window"
			}
		}
	]
};
export default info;
