class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav>
        <a class="logo" href="../index.html">Definir</a>
        <button class="btn-logo" type="button">
            <span class="logo-icon"></span>
        </button>
        <div>
            <ul>
            <li>
                <a>Categorias</a>
                <ul class="submenu">
                    <li><a href="../pages/vidros.html">Vidros</a></li>
                    <li><a href="../pages/carroceria.html">Carroceria</a></li>
                    <li><a href="../pages/interior.html">Interior</a></li>
                    <li><a href="../pages/capo.html">Capô</a></li>
                    <li><a href="../pages/traseira.html">Traseira</a></li>
                    <li><a href="../pages/interior.html">Faróis</a></li>
                </ul>
            </li>
            <li><a href="../agenda.html">Agendar</a></li>
            <li><a href="#">Contato</a></li>
            <li>
                <a>Configurações</a>
                <ul class="submenu">
                    <li><a href="../perfil.html">Meu perfil</a></li>
                    <li><a href="#">Excluir conta</a></li>
                    <li><a href="#">Sair da conta</a></li>
                </ul>
            </li>
            </ul>
            <form class="pesquisa">
                <input class="caixa-pesquisa" type="search" placeholder="Pesquisar">
                <button class="botao-pesquisar" type="submit">Pesquisar</button>
            </form>  
        </div>
    </nav>
    `;
    }
}

customElements.define('main-header', Header);