import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let Greetings;
    if(familiar){
        Greetings = <p>Welcome, my Friend.</p>
    }
    else{
        Greetings = <p>Who the hell are you?</p>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>

                {Greetings}

            </div>
            <div>
                <h2>Food</h2>

                {/* Ternary Operator */}
                {familiar ? <p>I will buy Food for you.</p> : <p>Let's eat his whose?</p>}

            </div>
            <div>
                <h2>Connection</h2>

                {/* Logical End */}
                {
                    familiar && <p>Let's join my Friend</p>
                }
            </div>
        </div>

        //Main part---

        // <div>
        //     <div>
        //         <h2>Greetings</h2>
        //         <p>Welcome, my Friend.</p>
        //         <p>Who the hell are you</p>
        //     </div>
        //     <div>
        //         <h2>Food</h2>
        //         <p>I will buy Food for you.</p>
        //         <p>Lets eat his whose?</p>
        //     </div>
        //     <div>
        //         <h2>Connection</h2>
        //         <p>Let's join my Friend</p>
        //         <p>I don't add stranger?</p>
        //     </div>
        // </div>
    );
};

export default User;