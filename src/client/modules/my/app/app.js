import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    handleTabSelect(event){
        let dataId = event.detail;
        this.template.querySelector('my-body').scrollToElement(dataId);
    }
}
