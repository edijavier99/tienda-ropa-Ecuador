import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CarouselHome from "../component/caruselhome";
import Colecion from "../component/colecion";
import Modelos from "../component/modelos";
import Produccion from "../component/produccion";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<CarouselHome/>
			<Colecion/>
			<Modelos/>
			<Produccion/>
		</div>
	);
};
