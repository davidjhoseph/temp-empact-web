module.exports = {
	purge: [],
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: '#020D1C',
				},
				white: {
					DEFAULT: '#FFFFFF',
				},
				gray: {
					10: '#F9FAFB',
					20: '#EEF0F2',
					30: '#DADEE2',
					40: '#C6CBD2',
					50: '#96A1B0',
					60: '#718198',
					70: '#4B586C',
					80: '#323B48',

				},
				green: {
					DEFAULT: '#36C555',
					10: '#E7F8EB',
					20: '#CFF2D7',
					30: '#A7E7B5',
					40: '#6FD886',
					50: '#62BC75;',
					60: '#4BAF61',
					70: '#46A45B',
					80: '#2B6437',
				},
				red: {
					DEFAULT: '#E92B0C',
					10: '#FEEAE6',
					20: '#FED4CD',
					30: '#FDB6AA',
					40: '#F6705A',
					50: '#F33616',
					60: '#CE2D12',
					70: '#AC2B15',
					80: '#731B0D',
				},
				blue: {
					DEFAULT: '#2C79EC',
					10: '#E8F0FD',
					20: '#D0E1FB',
					30: '#8EB8F5',
					40: '#5694F0',
					50: '#3174D8',
					60: '#2260BF',
					70: '#1D4786',
					80: '#102441',
				},
				orange: {
					DEFAULT: '#EFB854',
					10: '#FCF3E3',
					20: '#F9E4BE',
					30: '#F5D18F',
					40: '#EFBA57',
					50: '#EAA21F',
					60: '#D39422',
					70: '#B07C1C',
					80: '#7B5714',
				},
			},
			width: {
				'82': '350px'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
