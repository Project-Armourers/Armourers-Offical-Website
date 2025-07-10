document.addEventListener("DOMContentLoaded", function() {
	const button = document.getElementById("ChangeColorBtn");
	button.addEventListener("click", e=> { e.target.classList.toggle('black')() 
		const randomcolor = colors[Math.floor(Math.random()* colors.length)];
		document.body.style.background = randomcolor;

	});
});
