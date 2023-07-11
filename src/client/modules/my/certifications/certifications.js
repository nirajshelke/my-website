import { LightningElement, track } from 'lwc';
const CERTIFICATIONS = [
    {
        id: '0',
        name: 'Platform Developer I',
        pic_url: './resources/PD1.png',
        url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=TiXPMIu6l5ZhLg+AIA3miCwrVvFxViJNMOV1IDxWNDPJYZJxpbUdeI0ptGrpRJgv',
        tabindex: -1,
        ariahidden: true,
        isActive: true
    },
    {
        id: '1',
        name: 'Platform App Builder',
        pic_url: './resources/PAB.png',
        url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=TiXPMIu6l5ZhLg+AIA3miCwrVvFxViJNMOV1IDxWNDPJYZJxpbUdeI0ptGrpRJgv',
        tabindex: 0,
        ariahidden: false,
        isActive: false
    },
    {
        id: '2',
        name: 'Administrator',
        pic_url: './resources/Admin.png',
        url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=TiXPMIu6l5ZhLg+AIA3miCwrVvFxViJNMOV1IDxWNDPJYZJxpbUdeI0ptGrpRJgv',
        tabindex: -1,
        ariahidden: true,
        isActive: false
    }
];

export default class Certifications extends LightningElement {
    @track certificates = [...CERTIFICATIONS];
    // @track timer = 4000;
    // intervalId;
    // renderdOnce = false;

    // connectedCallback() {
    //     this.setTimeInterval();
    // }

    // setTimeInterval() {
    //     this.intervalId = setInterval(() => {
    //         //this.certificates.filter((item) => item.isActive === true)[0];
    //         let currentIndex = this.certificates.filter((item) => item.isActive === true)[0].id;
    //         currentIndex = parseInt(currentIndex);
    //         this.certificates[currentIndex].isActive = false;

    //         if (currentIndex + 1 === this.certificates.length) {
    //             this.certificates[0].isActive = true;
    //         } else {
    //             this.certificates[currentIndex + 1].isActive = true;
    //         }
    //         this.setShowImage();
    //         this.showActiveImageRadio();
    //     }, this.timer);
    // }

    // renderedCallback(){
    //     if(!this.renderdOnce){
    //         this.setShowImage();
    //         this.showActiveImageRadio();
    //         this.renderdOnce = true;
    //     }
    // }

    // setShowImage() {
    //     this.template.querySelectorAll("article").forEach(item => {
    //         if(this.certificates[parseInt(item.dataset.id)].isActive){
    //             item.classList.add('slds-show');
    //             item.classList.remove('slds-hide');
    //         } else {
    //             item.classList.add('slds-hide');
    //             item.classList.remove('slds-show');
    //         }
    //     })
    // }

    // showActiveImageRadio(){
    //     this.template.querySelectorAll('[data-id="radio"]').forEach(item => {
    //         if(this.certificates[parseInt(item.dataset.index)].isActive){
    //             item.classList.add('slds-is-active');
    //         } else {
    //             item.classList.remove('slds-is-active');
    //         }
    //     })
    // }
}
