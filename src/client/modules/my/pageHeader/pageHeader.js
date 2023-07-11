import { LightningElement } from 'lwc';

export default class PageHeader extends LightningElement {
    value ='New';
    renderOptions=false;
    tabs = [
            { label: 'About', value: 'About' },
            { label: 'Work Experience', value: 'Work' },
            { label: 'Projects', value: 'Projects' },
            {label: 'Certifications', value: 'Certifications'}
        ];

    handleClick(event){
        let id = event.target.dataset.id;
        this.template.querySelectorAll(`[data-value="Menu"]`).forEach(item=> {
            if(item.dataset.id === id){
                item.style = 'color:#f06000;'
            }else{
                item.style = 'color:white;'
            }
        })

        this.hanldeOpenMenu();

        this.dispatchEvent(new CustomEvent('tabselect', {detail : id}));
    }

    hanldeOpenMenu(){
        if(this.template.querySelector(`[data-name="verticlemenu"]`).classList.contains('slds-hide')){
            this.template.querySelector(`[data-name="verticlemenu"]`).classList.add('slds-show');
            this.template.querySelector(`[data-name="verticlemenu"]`).classList.remove('slds-hide');
        } else if(this.template.querySelector(`[data-name="verticlemenu"]`).classList.contains('slds-show')) {
            this.template.querySelector(`[data-name="verticlemenu"]`).classList.add('slds-hide');
            this.template.querySelector(`[data-name="verticlemenu"]`).classList.remove('slds-show');
        }
    }
}
