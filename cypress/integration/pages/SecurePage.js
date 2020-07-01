export default class SecurePage{
    path = "/secure";

    successMessage = "div[id='flash']";

    getMessage(){
        return cy.get(this.successMessage).invoke('text');
    }
}