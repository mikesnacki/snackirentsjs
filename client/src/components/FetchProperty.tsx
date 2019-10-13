import React, {Component} from 'react';

interface FetchPropertyDataState {
    propList: PropertyData[];
    loading: boolean;
}

interface Props{}

export class FetchPropData extends Component<Props, FetchPropertyDataState> {

    constructor(props: Props){
        super(props)
        this.state={propList:[],
        loading: true}
    }

    componentDidMount(){
        fetch("api/Property/Index")
        .then(response=> response.json() as Promise<PropertyData[]>)
        .then(data=>this.setState({
                                    propList: data,
                                    loading: false
                                }))
    }

    public render() {  
        let contents = (this.state.loading === true) ?
        <p>Loading properties list</p> :
            this.renderPropertiesTable(this.state.propList)

        return (
            contents
            )
    }  

    renderPropertiesTable(propList: PropertyData[]){
        return (
        <div>
            {propList.map(prop =>
                <div key={prop.propertyId}>
                    <img src={prop.propertyImage} 
                    alt={`${prop.propertyName} is a gorgeous and affordable residence`}></img>
                    <div>{prop.propertyName}</div>
                    <div>{prop.propertyAddress}</div>
                    <div>{prop.propertyCity}</div>
                    <div>{prop.propertyState}</div>
                    <div>{prop.propertyCatsAllowed}</div>
                    <div>{prop.propertyDogsAllowed}</div>
                </div>
            )}
        </div>
        )
    }
}
 

export class PropertyData {
    propertyId: number = 0;
    propertyName: string = "";
    propertyAddress: string = "";
    propertyCity: string = "";
    propertyState: string = "";
    propertyZip: number = 0;
    propertyStudioUnitsRented: number = 0;
    propertyStudioUnits: number = 0;
    propertyOneBedroomUnitsRented: number = 0;
    propertyOneBedroomUnits: number = 0;
    propertyCatsAllowed: string="";
    propertyDogsAllowed: string="";
    propertyDescription: string="";
    propertyImage: string="";
}