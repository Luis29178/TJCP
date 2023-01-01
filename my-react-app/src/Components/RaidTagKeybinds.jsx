import React from "react";

class RaidTagKeybinds extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currentKeyBind : this.props.keyBind
        }
        this.keybindClick = this.keybindClick.bind(this);
    }

    keybindClick = (event, pos) => {
        if (event.detail === 2) {
          console.log('double click ');
          //let tagClickedIndex = keyBinds.indexOf(event.target.innerHTML);
         // keyBinds[tagClickedIndex] = "New Keybind"
         this.setState({currentKeyBind: '...'})
        }
        
      };

    render(){
        return <a onClick={this.keybindClick}>

        <p className='tagbind'>{this.state.currentKeyBind}</p> 
        </a>
    }

}

export default RaidTagKeybinds;