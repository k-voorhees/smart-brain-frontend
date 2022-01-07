import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className='Tilt br2 shadow-2' max='40'>
                <div className='Tilt-inner pa3'>
                    <img src={brain} alt='logo'/>
                </div>
            </Tilty>
        </div>
    );
}

export default Logo

// we downloaded a png we found online for our logo and moved it into our logo folder in our project
// used an npm packed called react-tilty to use the tilt function on the logo icon
// we can change the effects by following the documentation
// max 40 is the max amount of tilt degree on the object.
// we use css in the .css file to change the look of it
// we includec the logo image we downloaded by including a img tag and adding the source to be destructured from the import