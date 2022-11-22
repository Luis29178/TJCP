import React from "react";

function HomePage() {
    return (
        <>
            <div className='main-HomePage'>
                <Button
                    _onClick={() => { console.log("escaped from tarkov") }}
                    _type="btn"
                    _buttonStyle="btn--primary--outline"
                    _size="btn--menu"
                >
                    Escape From Tarkov
                </Button>


                <Button
                    _onClick={() => { console.log("To the tracker") }}
                    _type="btn"
                    _buttonStyle="btn--primary--outline"
                    _size="btn--menu"
                >
                    Tracker
                </Button>


                <Button
                    _onClick={() => { console.log("To plan a path") }}
                    _type="btn"
                    _buttonStyle="btn--primary--outline"
                    _size="btn--menu"
                >
                    Paths
                </Button>


                <Button
                    _onClick={() => { console.log("lets log in") }}
                    _type="btn"
                    _buttonStyle="btn--primary--outline"
                    _size="btn--menu"
                >
                    Login
                </Button>


            </div>
        </>
    );

}
export default HomePage;