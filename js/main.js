@include("functions/documentReady.js");

documentReady(() => {
	const navTogglerBtn = document.querySelector(".nav-toggler__btn");
	const navDrop = document.querySelector(".nav-drop");
	const modalToggler = document.getElementsByClassName("modal-toggler");
	const elementsToAnimate = document.querySelectorAll("[data-aos]");
	const cardSlider = document.querySelectorAll(".card-slider");

	// Swiper config and function to initialize it
	const swiperCong = {
		grabCursor: true,
		slidesPerView: "auto",
		spaceBetween: 15,
		breakpoints: {
			481: {
				spaceBetween: 30,
			},
			768: {
				spaceBetween: 60,
				slidesPerView: 2,
			},
			1024: {
				spaceBetween: 120,
				slidesPerView: 2,
			},
		},
	}

	function initSwiper(sl, config) {
		new Swiper(sl, config);
	}

	// Toggle mobile navigation
	navTogglerBtn.addEventListener("click", (e) => {
		const navTogglerWrapper = e.currentTarget.parentElement;

		navTogglerWrapper.classList.toggle("nav-toggler--active");
		navDrop.classList.toggle("nav-drop--active");
	});

	window.addEventListener("resize", () => {
		navTogglerBtn.parentElement.classList.remove("nav-toggler--active");
		navDrop.classList.remove("nav-drop--active");
	});

	// Modal initialization
	const modal = new tingle.modal();

	if (modalToggler.length) {
		Array.from(modalToggler).forEach((toggler) => {
			toggler.addEventListener("click", function() {
				modal.open();
			});
		});
	}

	modal.setContent(document.querySelector(".modal-content").innerHTML);

	// AOS INITIALIZATION
	if (elementsToAnimate.length) {
		AOS.init({
			once: true,
		});
	}

	// Swiper slider initialization
	if (cardSlider.length) {
		Array.from(cardSlider).forEach((slider) => {
			initSwiper(slider, swiperCong);
		});
	}
});
