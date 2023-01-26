import React from "react";
import LL from '../Images/Loot_Lord_plushie_icon.webp'
import { UserListItemDisplay } from "./UserListItemDisplay";
import './_TrackerPage.css'







export class UserSavedItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],


        }



    }


    componentDidMount() {

        this.getAll();


    }



    render() {
        return (
            <>
                {this.state.items.map(item => (
                    <UserListItemDisplay imgSrc={item.imgSrc} iCount={item.iCount} iName={item.iName}></UserListItemDisplay>
                ))}


            </>
        )

    }

    getAll() {


        this.setState(
            {
                items: [{
                    imgSrc: LL,
                    iCount: 0,
                    iName: "Loot Lord Plush"
                },
                {
                    imgSrc: LL,
                    iCount: 1,
                    iName: "Loot Lord Plush"
                },
                {
                    imgSrc: LL,
                    iCount: 2,
                    iName: "Loot Lord Plush"
                },
                {
                    imgSrc: LL,
                    iCount: 3,
                    iName: "Loot Lord Plush"
                },]
            })



    }










}