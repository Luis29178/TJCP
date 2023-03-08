import React from "react";
import "./_GarbCircle.css"



export class GarbCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rootElm: document.querySelector(':root'),
            statDoc: this.props.playerDoc

        }

    }
    calculateOVColor() {

        var colorScore = 0;
        var OpCounter = 0;

        this.props.playerDoc.forEach(player => {

            console.log(player);

            if (player.user != "unset") {
                switch (player.ammo) {
                    case 0:
                        break;
                    case 1:
                        colorScore = colorScore + 30
                        break;
                    case 2:
                        colorScore = colorScore + 60
                        break;
                    case 3:
                        colorScore = colorScore + 90
                        break;
                }
                switch (player.health) {
                    case 0:
                        break;
                    case 1:
                        colorScore = colorScore + 30
                        break;
                    case 2:
                        colorScore = colorScore + 60
                        break;
                    case 3:
                        colorScore = colorScore + 90
                        break;
                }
                switch (player.armor) {
                    case 0:
                        break;
                    case 1:
                        colorScore = colorScore + 30
                        break;
                    case 2:
                        colorScore = colorScore + 60
                        break;
                    case 3:
                        colorScore = colorScore + 90
                        break;
                }
                OpCounter = OpCounter + 3
            }

            


            // ammo: Player.ammo,
            // armor: Player.armor,
            // health: Player.health,
            // username: Player.user

        });

        var trueScore = (colorScore/OpCounter);

        var colorVal = this.ScoreConverter(trueScore)

        return colorVal;



    }
    ConvertToColorHex(r,g,b){
        var red = Math.round(r)
        var green = Math.round(g)
        var blue = Math.round(b)

        if(red > 0){

            var redHex = red.toString(16)

            if(redHex.length === 1){
                redHex = `0${redHex}`
            }
        }
        else if(red == 0){
            
            var redHex = "00"

         }

        if(green !=0){

         var greenHex = green.toString(16)

         if(greenHex.length === 1){
            greenHex = `0${greenHex}`
        }

        }
        else if(green == 0){
            
            var greenHex = "00"



         }
        if(blue !=0){

            var blueHex = blue.toString(16)

            if(blueHex.length === 1){
                blueHex = `0${blueHex}`
            }

        }
        else if(blue == 0){
            
            var blueHex = "00"



         }

        


        var ColorString = `#${redHex}${greenHex}${blueHex}`

        return ColorString
        




    }
    ScoreConverter(Score) {

        if(Score > 0 && Score < 30){
            var divScore = 30 - Score;
            var colorRatio = 30/divScore;
            var rgbpreVal = 255/colorRatio;
            var rgbVal = 255-rgbpreVal

             rgbVal = this.ConvertToColorHex(rgbVal, 0,0)

            return rgbVal
            

        }
        else if(Score >= 30 && Score < 60){
            var divScore = 60 - Score;
            var colorRatio = 30/divScore;
            var rgbpreVal = 255/colorRatio;
            var rgbVal = 255-rgbpreVal

            rgbVal = this.ConvertToColorHex(255,rgbVal,0)

            return rgbVal

        }
        else if(Score >= 60 && Score < 90){
            var divScore = 90 - Score;
            var colorRatio = 30/divScore;
            var rgbVal = 255/colorRatio;

            rgbVal = this.ConvertToColorHex(rgbVal, 255,0)

            return rgbVal


        }
        else if(Score === 90){

            var rgbVal = this.ConvertToColorHex(0,255,0)

            return rgbVal

        }
        else if(Score === 0){

            var rgbVal = this.ConvertToColorHex(0,0,0)

            return rgbVal

        }

        






    }
    SetOVColor() {

        var cmpRoot = getComputedStyle(this.state.rootElm);
        console.log(cmpRoot.getPropertyValue('--OvColor'));

        var colfromCalc = this.calculateOVColor();
        document.documentElement.style.setProperty('--OvColor', `${colfromCalc}`);
        console.log(cmpRoot.getPropertyValue('--OvColor'));
        
    }




    render() {
        return (
            <>
                <div className="ovcontainer">
                    <div className="Overall" onClick={this.SetOVColor.bind(this)}>Calculate</div>
                    <div className="OvCircle"></div>
                </div>

            </>
        );
    }





}