// jshint esversion:6
document.addEventListener("DOMContentLoaded", function() {
	// Definiowanie obiektu Skills
	const skills = [
		{
			name: "HTML5",
			code: "&#xe636",
			desc: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard."
		},
		{
			name: "CSS3",
			code: "&#xe649"
		},
		{
			name: "JavaScript",
			code: "&#xe681"
		},
		{
			name: "jQuery",
			code: "&#xe650"
		},
		{
			name: "Sass",
			code: "&#xe64b"
		},
		{
			name: "Gulp",
			code: "&#xe663"
		},
		{
			name: "Git",
			code: "&#xe609"
		},
		{
			name: "Bootstrap",
			code: "&#xe647"
		},
		{
			name: "WordPress",
			code: "&#xe60b"
		},
		{
			name: "PHP basics",
			code: "&#xe63d"
		},
		{
			name: "Photoshop",
			code: "&#xe6b8"
		},
		{
			name: "Illustrator",
			code: "&#xe6b4"
		},
		{
			name: "Apple",
			code: "&#xe611"
		},
		{
			name: "Windows",
			code: "&#xe60f"
		},
		
	];
	// Definiowanie obiektu Kontakty
	const contacts = [
		{
			name: 'info@grzegorzlaszczyk.pl',
			code: "ion-ios-email",
			link: 'href="mailto: info@grzegorzlaszczyk.pl"'
		},
		{
			name: "LinkedIn",
			code: "ion-social-linkedin",
			link: 'href="https://pl.linkedin.com/in/greglas"'
		},
		{
			name: "facebook",
			code: "ion-social-facebook",
			link: 'href="http://www.facebook.com/glaszczyk"'
		},
		{
			name: "GitHub",
			code: "ion-social-github",
			link: 'href="https://github.com/glaszczyk"'
		}
	];

	// let $skillsBox = $(".skills__all-skills-container");
	let $skillsBox = document.querySelector(".skills__all-skills-container"),
		$image = $skillsBox.addEventListener('click', (event) => {
			console.log(event.target.dataset.desc);
		});

});

