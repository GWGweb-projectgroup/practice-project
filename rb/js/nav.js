new Vue({
	el: '#brand-logos',
	data: {
		image: "old\\Logos",
		description: '',
		height: ''
	},
	methods: {
		logos: function () {
			//alert('');
		}
	});

new Vue({
	el: '#pool-cue-brands',
	data: {
		link: 'brandLink',
		brand: [
			'Action',
			'Athena',
			'',
		]

	},
	methods: {

	},
	template: { // idea for links
		'<li><a v-bind:href="link">'{{ brand }}'</a></li>'
	}
});
