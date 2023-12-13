import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
	<footer class="d-flex flex-wrap justify-content-between  align-items-center p-5 my-3  text-white border-top">
		<p class="col-md-4 mb-0 ">© 2022 Company, Inc</p>
		<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"></a>

		<ul class="nav col-md-4 justify-content-end">
			<li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
		</ul>
	</footer>
);
