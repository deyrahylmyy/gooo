export const data = [
	{
		title: 'Legal Perusahaan',
		description:
			'RAF369 perusahaan legal, sesuai Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia No AHU-0018856.AH.01.01.Tahun 2023',
		image: './assets/svg/Logo-RAF.svg',
	},
	{
		title: 'Our Directors',
		description: '',
		image: './assets/security.jpg',
	},
	{
		title: 'Our Team',
		description: 'Kenali lebih tentang kami.',
		image: './assets/teamwork.jpg',
	},

];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
