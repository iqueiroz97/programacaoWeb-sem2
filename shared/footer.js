class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
      <footer>            
        <p>Rodapé</p>
      </footer>     
    `;
    }
}


customElements.define('main-footer', Footer);