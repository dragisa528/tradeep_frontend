import mock from '../mock';

const projectDashboardAppDB = {
	widgets: [
		{
			id: 'widget1',
			ranges: {
				DY: 'Yesterday',
				DT: 'Today',
				DTM: 'Tomorrow'
			},
			currentRange: 'DT',
			data: {
				name: 'Due Tasks',
				count: {
					DY: 21,
					DT: 25,
					DTM: 19
				},
				extra: {
					name: 'Completed',
					count: {
						DY: 6,
						DT: 7,
						DTM: '-'
					}
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget2',
			impressions: {
				value: '87k',
				ofTarget: 12
			},
			series: [
				{
					name: 'Impression',
					data: [
						67000,
						54000,
						82000,
						57000,
						72000,
						57000,
						87000,
						72000,
						89000,
						98700,
						112000,
						136000,
						110000,
						149000,
						98000
					]
				}
			],
			options: {
				chart: {
					type: 'area',
					height: '100%',
					background: 'transparent',
					toolbar: {
						show: false
					},
					zoom: {
						enabled: false
					}
				},
				theme: {
					mode: 'dark'
				},
				dataLabels: {
					enabled: false
				},
				xaxis: {
					categories: [
						'Jan 1',
						'Jan 2',
						'Jan 3',
						'Jan 4',
						'Jan 5',
						'Jan 6',
						'Jan 7',
						'Jan 8',
						'Jan 9',
						'Jan 10',
						'Jan 11',
						'Jan 12',
						'Jan 13',
						'Jan 14',
						'Jan 15'
					],
					tooltip: {
						enabled: false
					},
					axisBorder: {
						show: false
					}
				},
				yaxis: {
					axisBorder: {
						show: false
					}
				},
				markers: {
					size: 3,
					strokeWidth: 1.5,
					strokeOpacity: 1,
					strokeDashArray: 0,
					fillOpacity: 1,
					shape: 'circle',
					radius: 2,
					hover: {
						size: 5
					}
				},
				fill: {
					type: 'solid',
					opacity: 0.7,
					gradient: {
						shadeIntensity: 0.4,
						opacityFrom: 1,
						opacityTo: 0.5,
						stops: [30, 100, 100]
					}
				},
				grid: {
					show: true,
					strokeDashArray: 3,
					position: 'back',
					xaxis: {
						lines: {
							show: true
						}
					},
					yaxis: {
						lines: {
							show: true
						}
					},
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					}
				},
				stroke: {
					show: true,
					curve: 'smooth',
					lineCap: 'butt',
					width: 1.5,
					dashArray: 0
				}
			}
		},
		{
			id: 'widget3',
			title: 'Budget Details',
			table: {
				columns: [
					{
						id: 'model_type',
						title: 'Model Name'
					},
					{
						id: 'progress',
						title: 'Progress (epochs)'
					},
					{
						id: 'runtime',
						title: 'Runtime'
					},
					{
						id: 'creator',
						title: 'Creator'
					},
					{
						id: 'machine',
						title: 'Machine'
					},
					{
						id: 'icon',
						title: ''
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'model_type',
								value: 'AAPL Reggr,',
								classes: '',
								icon: ''
							},
							{
								id: 'progress',
								value: '10/3000',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'runtime',
								value: '02:03:44',
								classes: '',
								icon: ''
							},
							{
								id: 'creator',
								value: 'Adam',
								classes: '',
								icon: 'trending_up'
							},
							{
								id: 'machine',
								value: 'AWS c4.2xlarge',
								classes: '',
								icon: ''
							},
							{
								id: 'icon',
								value: 'edit',
								classes: '',
								icon: ''
							}
						]
					},
				]
			}
		},
		{
			id: 'widget4',
			title: 'Features',
			data: {
				name: 'Proposals',
				count: 42,
				extra: {
					name: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget5',
			title: 'Features',
			data: {
				name: 'Proposals',
				count: 42,
				extra: {
					name: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget6',
			title: 'Features',
			data: {
				name: 'Proposals',
				count: 42,
				extra: {
					name: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget7',
			table: {
				columns: [
					{
						id: 'name',
						title: 'Name'
					},
					{
						id: 'email',
						title: 'Email'
					},
					{
						id: 'role',
						title: 'Role'
					},
					{
						id: 'icon',
						title: ''
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'name',
								value: 'Smith John',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'email',
								value: 'Johns@deeptrade.com',
								classes: 'font-semibold',
								icon: ''
							},
							{
								id: 'role',
								value: 'admin',
								classes: 'px-3 py-2 bg-gray-500 rounded',
								icon: ''
							},
							{
								id: 'icon',
								value: 'edit',
								classes: '',
								icon: ''
							}
						]
					},
				]
			}
		},
		{
			id: 'widget8',
			table: {
				columns: [
					{
						id: 'email',
						title: 'Email'
					},
					{
						id: 'role',
						title: 'Role'
					},
					{
						id: 'icon',
						title: ''
					}
				],
				rows: [
					// {
					// 	id: 1,
					// 	cells: [
					// 		{
					// 			id: 'email',
					// 			value: 'Johns@deeptrade.com',
					// 			classes: 'font-bold',
					// 			icon: ''
					// 		},
					// 		{
					// 			id: 'role',
					// 			value: 'admin',
					// 			classes: 'px-3 py-2 bg-gray-500 rounded',
					// 			icon: ''
					// 		},
					// 		{
					// 			id: 'icon',
					// 			value: 'edit',
					// 			classes: '',
					// 			icon: ''
					// 		}
					// 	]
					// },
				]
			}
		},
		{
			id: 'widget13',
			title: 'Usage',
			table: {
				columns: [
					{
						id: 'date',
						title: 'Date'
					},
					{
						id: 'jobs_sent',
						title: 'Jobs Sent'
					},
					{
						id: 'recipients',
						title: 'Recipients'
					},
					{
						id: 'private',
						title: 'Private ID'
					},
					{
						id: 'delevery_tool',
						title: 'Contact Delivery Tools'
					},
					{
						id: 'email_plan',
						title: 'Email Plan'
					},
					{
						id: 'verification_count',
						title: 'Verification Count'
					},
					{
						id: 'verification_cost',
						title: 'Verification Cost'
					},
					{
						id: 'cost',
						title: 'Cost'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '16/1/2022'
							},
							{
								id: 'jobs_sent',
								value: '1,967'
							},
							{
								id: 'recipients',
								value: '1,967'
							},
							{
								id: 'private',
								value: '$2.37'
							},
							{
								id: 'delevery_tool',
								value: '$1.94'
							},
							{
								id: 'email_plan',
								value: '$5.00'
							},
							{
								id: 'verification_count',
								value: '0'
							},
							{
								id: 'verification_cost',
								value: '$0'
							},
							{
								id: 'cost',
								value: '$9.31'
							},
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'date',
								value: '15/1/2022'
							},
							{
								id: 'jobs_sent',
								value: '69,082'
							},
							{
								id: 'recipients',
								value: '69,086'
							},
							{
								id: 'private',
								value: '$2.37'
							},
							{
								id: 'delevery_tool',
								value: '$1.94'
							},
							{
								id: 'email_plan',
								value: '$5.00'
							},
							{
								id: 'verification_count',
								value: '0'
							},
							{
								id: 'verification_cost',
								value: '$0'
							},
							{
								id: 'cost',
								value: '$9.31'
							},
						]
					},
				]
			}
		},
		{
			id: 'widget14',
			title: 'Payment History',
			table: {
				columns: [
					{
						id: 'date',
						title: 'Date'
					},
					{
						id: 'source',
						title: 'Source'
					},
					{
						id: 'amount',
						title: 'Amount'
					},
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '01/04/2022'
							},
							{
								id: 'source',
								value: 'Auto-Rechange of Elastic Email Credit - Reference: ch_2KE0mAdE679NCTXH0bDbpKND'
							},
							{
								id: 'amount',
								value: '$150.00'
							},
						]
					},
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '12/19/2021'
							},
							{
								id: 'source',
								value: 'Auto-Rechange of Elastic Email Credit - Reference: ch_2KE0mAdE679NCTXH0bDbpKND'
							},
							{
								id: 'amount',
								value: '$150.00'
							},
						]
					},
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '12/06/2021'
							},
							{
								id: 'source',
								value: 'Manual Payment Refund - Reference: ch_2K2m2UdE679NCTDH1toTQ6qf'
							},
							{
								id: 'amount',
								value: '$150.00'
							},
						]
					},
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '12/06/2021'
							},
							{
								id: 'source',
								value: 'Purchase of Elastic Email Credit-Refernece: ch_2K2m2UdE679NCTDH1toTQ6qf'
							},
							{
								id: 'amount',
								value: '$100.00'
							},
						]
					},
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '12/04/2021'
							},
							{
								id: 'source',
								value: 'Auto-Rechange of Elastic Email Credit - Reference: ch_2KE0mAdE679NCTXH0bDbpKND'
							},
							{
								id: 'amount',
								value: '$100.00'
							},
						]
					},
					{
						id: 1,
						cells: [
							{
								id: 'date',
								value: '11/23/2022'
							},
							{
								id: 'source',
								value: 'Auto-Rechange of Elastic Email Credit - Reference: ch_2KE0mAdE679NCTXH0bDbpKND'
							},
							{
								id: 'amount',
								value: '$100.00'
							},
						]
					},
				]
			}
		},
		{
			id: 'weatherWidget',
			locations: {
				NewYork: {
					name: 'New York',
					icon: 'rainy2',
					temp: {
						C: '22',
						F: '72'
					},
					windSpeed: {
						KMH: 12,
						MPH: 7.5
					},
					windDirection: 'NW',
					rainProbability: '98%',
					next5Days: [
						{
							name: 'Sunday',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: 'Monday',
							icon: 'cloudy',
							temp: {
								C: '19',
								F: '66'
							}
						},
						{
							name: 'Tuesday',
							icon: 'windy3',
							temp: {
								C: '24',
								F: '75'
							}
						},
						{
							name: 'Wednesday',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: 'Thursday',
							icon: 'rainy2',
							temp: {
								C: '24',
								F: '75'
							}
						}
					]
				}
			},
			currentLocation: 'NewYork',
			tempUnit: 'C',
			speedUnit: 'KMH'
		}
	],
	projects: [
		{
			id: 1,
			name: 'ACME Corp. Backend App'
		},
		{
			id: 2,
			name: 'ACME Corp. Frontend App'
		},
		{
			id: 3,
			name: 'Creapond'
		},
		{
			id: 4,
			name: 'Withinpixels'
		}
	]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
	return [200, projectDashboardAppDB.projects];
});
