'use strict';

angular.module('ezrxServices', []).service('Data', function ($http) {
	return {

		all: function() {
			var data = [
				{
					id: 1,
					name: 'Tylenol',
					brandName: 'TYLENOL REGULAR STRENGTH',
					manufacturerName: 'JOHNSON & JOHNSON CONSUMER INC., MCNEIL CONSUMER HEALTHCARE DIVISION',
					fdaApproval: true,
					adverseReports: true,
					symptoms: [
						{label: "Nausea", value: 24},
						{label: "Fatigue", value: 20},
						{label: "Headache", value: 19},
						{label: "Dyspnoea", value: 19},
						{label: "Vomiting", value: 18}
					]
				},
				{
					id: 2,
					name: 'Infants Tylenol',
					brandName: 'INFANTS TYLENOL',
					manufacturerName: 'MCNEIL CONSUMER HEALTHCARE DIV. MCNEIL-PPC, INC',
					fdaApproval: true,
					adverseReports: true,
					symptoms: [
						{label: "Complete Suicide", value: 27},
						{label: "Nausea", value: 20},
						{label: "Pyrexia", value: 18},
						{label: "Toxicity to Various Agents", value: 17},
						{label: "Vomiting", value: 18}
					]
				},
				{
					id: 3,
					name: 'Lucky Antibacterial Hand Soap Supersoft',
					brandName: 'LUCKY ANTIBACTERIAL HAND SOAP SUPERSOFT',
					manufacturerName: 'DELTA BRANDS INC',
					fdaApproval: true,
					adverseReports: true,
					symptoms: [
						{label: "Toxic Epidermal Necrolysis", value: 20},
						{label: "Skin Lesion", value: 20},
						{label: "Rash", value: 20},
						{label: "Granulocytopenia", value: 20},
						{label: "Drug Hypersensitivity", value: 20}
					]
				}

			];


			return data;
		},

		autoCompleteData: function () {
			var data = [
				{id: 1, name: 'Tylenol'},
				{id: 2, name: 'Infants Tylenol'},
				{id: 3, name: 'Lucky Antibacterial Hand Soap Supersoft'}
			];

			return data;
		}

	};
});
