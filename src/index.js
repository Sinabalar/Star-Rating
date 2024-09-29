import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StarRating
            maxRating={5}
            messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
            defaultRating={3}
        />
        {/*<Test/>*/}
    </React.StrictMode>
);

// for test the onRate prop

/*
function Test(){
    const [rated,setRated]=useState(0)

    return(
        <div>
        <StarRating onRate={setRated}/>
            <p>Was rated by {rated} stars</p>
        </div>
    )
}
*/
