import { LightningElement,api } from 'lwc';

export default class Body extends LightningElement {

    @api
    scrollToElement(dataId){
        console.log('Hi2: '+dataId);
        const element = this.template.querySelector(`[data-id="${dataId}"]`);
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
}