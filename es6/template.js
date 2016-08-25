// jshint esversion:6
document.addEventListener("DOMContentLoaded", function() {
	const skills = [
		{
			name: "HTML5",
			code: "&#xe636"
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


	// Wypisanie zawartości tablicy do html

	let $skills = $('<div>');

	for ( let i = 0, size = skills.length; i < size; i++) {
	
		let $oneskill = $('<div>').html(`
<div class="skills__single-skill-container">
	<div class="single-skill">
		<div class="single-skill__image-container">
			<p class="single-skill__image">${skills[i].code}</p>
		</div>
		<p class="single-skill__caption">${skills[i].name}</p>
	</div>
</div>`);

		$oneskill.appendTo($skills);
	}

	let $contacts = $('<div>');

	for ( let i = 0, size = contacts.length; i < size; i++) {
	
		let $onecontact = $('<div>').html(`
<div class="contact__method-item">
	<div class="contact-method">
		<div class="contact-method__image-container">
			<a class="contact-method__image ${contacts[i].code}" target="_blank" ${contacts[i].link}></a>
		</div>
		<p class="contact-method__caption">${contacts[i].name}</p>
	</div>
</div>
`);

		$onecontact.appendTo($contacts);
	}
	
	console.log($contacts.html());

	// Skopiować z konsoli do pliku HTML
	// albo dorobić parsowanie HTML

	// let filename = "skills.txt",
	// 	text = JSON.stringify($skills.html()),
	// 	blob = new Blob([text], {type: "text/plain;charset=utf-8"});
	// saveAs(blob, filename);

});

