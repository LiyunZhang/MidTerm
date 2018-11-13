Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Jon Snow",
            isRequired: true
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate:",
            isRequired: true
        }, {
            name: "phone",
            type: "text",
            title: "Your phone number:",
            placeHolder: "xxx-xxx-xxxx",
            isRequired: true
        }, {
            name: "color",
            type: "text",
            inputType: "color",
            title: "Your favorite color:"
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            validators: [
                {
                    type: "email"
                }
            ]
        },{
            type: "radiogroup",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            colCount: 4,
            choices: [
                "None",
                "Ford",
                "Vauxhall",
                "Volkswagen",
                "Nissan",
                "Audi",
                "Mercedes-Benz",
                "BMW",
                "Peugeot",
                "Toyota",
                "Citroen"
            ]
        },{
            type: "dropdown",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            colCount: 0,
            choices: [
                "None",
                "Ford",
                "Vauxhall",
                "Volkswagen",
                "Nissan",
                "Audi",
                "Mercedes-Benz",
                "BMW",
                "Peugeot",
                "Toyota",
                "Citroen"
            ]
        }
    ],
    elements: [
        {
            type: "dropdown",
            name: "country",
            title: "Select the country...",
            isRequired: true,
            choicesByUrl: {
                url: "https://restcountries.eu/rest/v2/all",
                valueName: "name"
            }
        }, {
            type: "panel",
            name: "panel_countriesByRegion",
            title: "Show countries by region",
            elements: [
                {
                    type: "dropdown",
                    name: "region",
                    title: "Select the region...",
                    choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
                }, {
                    type: "dropdown",
                    name: "reg_country",
                    title: "Select the country...",
                    isRequired: true,
                    choicesByUrl: {
                        url: "https://restcountries.eu/rest/v2/region/{region}",
                        valueName: "name"
                    }
                }
            ]
        }

    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
