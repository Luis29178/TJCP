import React from "react";

class RaidTagKeybinds extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currentKeyBind: this.props.keyBind,
            currentKeyBindDisplay : this.props.keyBind,
            isEditing: false,
            editingKeybind: this.props.keyBind
        }
        this.keybindClick = this.keybindClick.bind(this);

        document.addEventListener('keyBindEditing', function({ detail }) {
            this.setState({editingKeybind: detail.key})

            if(detail.task == "Editing"){
                this.setState({isEditing: true})
            }
            if(detail.key == this.state.currentKeyBind){
                this.setState({editingKeybind: detail.key})
                console.log(detail)
            }
            
        }.bind(this));

        document.addEventListener('keydown', function(e) {
            if(this.state.isEditing == true && this.state.editingKeybind == this.state.currentKeyBind){
                console.log("listen for changed key")
                
                this.setState({
                    isEditing: false,
                    currentKeyBind: e.key,
                    currentKeyBindDisplay: e.key.toUpperCase()
                })
                console.log('keyChanged')
            }else{
                if(e.key == this.state.currentKeyBind.toLowerCase()){
                    console.log('clicked: ' + e.key);
                    const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
                    document.dispatchEvent(customEvent);
                }
            }
            
        }.bind(this));      
        
    }

    keybindClick = (event, pos) => {
        if(this.state.editingKeybind == this.state.currentKeyBind){
            if (event.detail === 2) {
                console.log('double click ');
                //let tagClickedIndex = keyBinds.indexOf(event.target.innerHTML);
               // keyBinds[tagClickedIndex] = "New Keybind"
               this.setState({currentKeyBindDisplay: '...', isEditing: true})
              
      
               const customEvent = new CustomEvent('keyBindEditing', { detail: { task : "Editing", key: this.state.currentKeyBind} });
      
               document.dispatchEvent(customEvent);
               //create a global keybind manager to track if a keybind can be edited
               //on double click send a custom event, listen on the keybind manager and block all double clicks until new one has been set
              }

        }else{
            console.log("Cant edit current key")
        }
        
      };




    render(){
        return <a onClick={this.keybindClick}>

        <p className='tagbind'>{this.state.currentKeyBindDisplay.toUpperCase()}</p> 
        </a>
    }

}

export default RaidTagKeybinds;