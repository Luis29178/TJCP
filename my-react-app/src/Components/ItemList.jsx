import React from "react";
import ItemDisplay from "./ItemDisplay"
import LL from '../Images/Loot_Lord_plushie_icon.webp'
import './_TrackerPage.css'



class ItemList extends React.Component{
    state ={
        items: [        
        {imgSrc: LL, iCount: 2, iName: "The Loot Lord2"},
        {imgSrc: LL, iCount: 42, iName: "The Loot Lord42"},
        {imgSrc: LL, iCount: 4, iName: "The Loot Lord4"},
        {imgSrc: LL, iCount: 1, iName: "The Loot Lord1"},
        {imgSrc: LL, iCount: 0, iName: "The Loot Lord0"},]
    }


    render(){
        return(
            <>
            {this.state.items.map( item => (
                <ItemDisplay imgSrc={item.imgSrc} iCount={item.iCount} iName={item.iName}/>
            ))}
            
            
            </>
        )

    }
    
}
export default ItemList;