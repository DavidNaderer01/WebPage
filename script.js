function Sort(content) {
    let list = "";
    fetch("link.json")
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.links.length; i++) {
                let tags = data.links[i].tags;

                tags.forEach(function (tag) {
                    if(tag === content) {
                        let url = data.links[i].url;
                        list += `<li><a href=${url}>${data.links[i].name}</a></li>`
                    }
                })
            }
            document.getElementById('ul-output').innerHTML = list;
        });
}

// Custom-Element my-element anlegen
class myElement extends HTMLElement {

    // Festlegen, welche Attribute überwacht werden solle
    static get observedAttributes() {
        return ['attribut1', 'attribut2'];
    }

    constructor() {

        // super muss als erstes im constructor aufgerufen werden, super ruft den construcor der Elternklasse auf
        super();
        this.style.width = "100%";
        this.style.height = "2rem";

        // Schatten-Dom anlegen
        // mode: 'open' : Vom Dokument aus ist der Zugriff auf das Schatten-Dom möglich.
        // mode: 'closed' : Der Zugriff auf das Schatten-Dom ist nicht möglich.
        const shadow = this.attachShadow({mode: 'open'});

        // Element für Inhalt anlegen und ins Schatten-Dom einhängen
        const contend = document.createElement('div');
        contend.className = "contend";
        shadow.appendChild(contend);

        // CSS anlegen und ins Schatten-Dom einhängen
        // :host selektiert das Custom Element
        const style = document.createElement('style');
        style.textContent = `
			:host { … }	
			.contend { … }
		`;
        shadow.appendChild(style);

        // Weiterer Code
    }

    connectedCallback() {
        // Element wurde ins DOM eingehängt
    }

    disconnectedCallback () {
        // Element wurde entfernt
    }

    adoptedCallback() {
        // Element ist in ein anderes Dokument umgezogen
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Elementparameter wurden geändert
        // Achtung attributeChangedCallback wird vor connectedCallback aufgerufen
    }

}
customElements.define('my-element', myElement);