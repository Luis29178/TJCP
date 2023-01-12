import { amber } from "@mui/material/colors";

export class GARBText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ammo: this.props.Player.ammo,
            health: this.props.Player.health,
            armor: this.props.Player.armor,
            user: this.props.Player.user
        }



    }


    changeAmmoColor(){
        switch(this.state.ammo){
            case "green": this.setState({ammo: "amber"});
            break;
            case "amber": this.setState({ammo: "red"});
            break;
            case "red": this.setState({ammo: "black"});
            break;
            case "black": this.setState({ammo: "green"});
            break;
            default: console.log("GARB : Ammo : String Error");
            break;
            
        }


    }
    changeHealthColor(){
        switch(this.state.health){
            case "green": this.setState({health: "amber"});
            break;
            case "amber": this.setState({health: "red"});
            break;
            case "red": this.setState({health: "black"});
            break;
            case "black": this.setState({health: "green"});
            break;
            default: console.log("GARB : Health : String Error");
            break;
            
        }


    }
    changeArmorColor(){
        switch(this.state.armor){
            case "green": this.setState({armor: "amber"});
            break;
            case "amber": this.setState({armor: "red"});
            break;
            case "red": this.setState({armor: "black"});
            break;
            case "black": this.setState({armor: "green"});
            break;
            default: console.log("GARB : Armor : String Error");
            break;
            
        }


    }
    

    render() {

        return (
            <>
            <div className="container">

            <div className={`Ammo-${this.state.ammo}`} onClick={this.changeAmmoColor.bind(this)}>A</div>

            <div className="SpacerA"></div>

            <div className={`Health-${this.state.health}`} onClick={this.changeHealthColor.bind(this)}>H</div>

            <div className="SpacerB"></div>

            <div className={`Armor-${this.state.armor}`} onClick={this.changeArmorColor.bind(this)}>AR</div>

            </div>


            </>
            // <>
            // <div className="User">{this.state.user}</div>
            // <div className={`Ammo`} style ={"--Ammo-Color": this.state.ammo(ie: Color((0-255),(0-255),(0-255))) } onClick={this.changeAmmoColor.bind(this)}>A</div>
            // <div className="SpacerA"></div>
            // <div className={`Health`} style = {"--Health-Color": this.state.health(ie: Color((0-255),(0-255),(0-255)))} onClick={this.changeHealthColor.bind(this)}>H</div>
            // <div className="SpacerB"></div>
            // <div className={`Armor`} style = {"--Armor-Color": this.state.armor(ie: Color((0-255),(0-255),(0-255)))} onClick={this.changeArmorColor.bind(this)}>AR</div>


            // </>
        );


    }




}