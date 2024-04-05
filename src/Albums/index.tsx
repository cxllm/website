import Lille from "./Lille";
import Rouen from "./Rouen";
import Sunsets from "./Sunsets";
export type Album = {
	url: string;
	cover: string;
	fr: {
		name: string;
		description: string;
	};
	en: {
		name: string;
		description: string;
	};
	photos: { image: string; description: { fr: string; en: string } }[];
};
let albums: Album[] = [Lille, Rouen, Sunsets];
export default albums;
