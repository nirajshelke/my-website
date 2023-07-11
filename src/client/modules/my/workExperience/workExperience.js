import { LightningElement,track } from 'lwc';
const WORK_EXPERIENCE = [
    {
        id:"1", 
        organization: "ClearTax", 
        designation: "Senior Salesforce Developer", 
        start: "Jun'22", 
        end: "Now", 
        isCurrent: true,
        description: [
            {id:"1", value:'Driving the sales and service automation journey of ClearTax by designing and implementing the solutions using Salesforce Platform and Salesforce Sales, Service and Experience Cloud.'},
            {id:"2", value:'Driving the end to end Salesforce - Product integration from design and development to make Salesforce the source of truth / the Interface to manage customer licenses / product consumption based on the contract available in Salesforce.'},
            {id:"3", value:'Communicating with the Sales, Service, CSM stakeholders on regular basis to discuss about the requirements and to plan automations accordingly to reduce the manual efforts and time to close deals effectively.'},
            {id:"4", value:'Have implemented multiple integrations such as Salesforce - Clear Product DB, Salesforce - SAP, Salesforce - JIRA, Salesforce - SignDesk, etc.'},
            {id:"5", value:'Involved in all phases of SDLC.'}
        ],
        displayDescription:false
    },
    {
        id:"2", 
        organization: "Principal Global Services", 
        designation: "Software Engineer", 
        start: "Feb'21", 
        end: "Jun'22", 
        isCurrent: false,
        description: [
            {id:"1", value:'Working to create an high efficiency custom-build application for end to end Insurance policy management using Salesforce Platform, Mulesoft and other web technologies.'},
            {id:"2", value:'Received an appreciation for active contribution in organisation level Ideathons and Innovations.'},
            {id:"3", value:'Working on Core Apex, Aura Components, LWC, Integration, Apex based API, Salesforce Configurations, Mulesoft and other web technologies.'},
            {id:"4", value:'Involved in all phases of SDLC.'}
        ],
        displayDescription:false
    },
    {
        id:"3", 
        organization: "Accenture", 
        designation: "Application Development Analyst", 
        start: "Oct'18", 
        end: "Feb'21", 
        isCurrent: false,
        description: [
            {id:"1", value:'Worked to create highly efficient and scalable custom-build Job board application for a globally renowned staffing client using Salesforce Platform Development.'},
            {id:"2", value:'Received an appreciation for contribution in Project level Automation to reduce manual efforts and monitoring.'},
            {id:"3", value:'Worked on Apex, Visualforce, Aura Components, LWC, Integration, Apex based API and Salesforce Configurations.'},
            {id:"4", value:'Involved in all phases of SDLC.'}
        ],
        displayDescription:false
    }
];

export default class WorkExperience extends LightningElement {
    @track workExperience = WORK_EXPERIENCE;

    handleShowWorkDetails(event) {
        var id = event.target.dataset.id;
        this.workExperience.forEach(item => {
            if(item.id === id){
                item.displayDescription = !item.displayDescription;
            }
        })
    }
}