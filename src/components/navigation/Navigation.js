import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
            </nav>
        );
    }
}

export default Navigation;

// create the style for the navigation sign out ----- notice the suntax, since we are in javascript react, we need to do the double {{}} and use camelcase for justifyContent and use 'flex-end' instead of justify-content: flex-end; this is because we need to use 1 { } to tell the computer this will be javascript, then a 2nd { } to tell it to be a javascript object. different naming conventions because different language in a .js file. we can do flex-end with the dash, because it is a string in the ' '

// added tachyons to style nav signout ---- f3 for font size, link to make it a link, dim to dim it when we hover over it, black to make the font color black, underline to add decoration, pa3 for padding level 3, pointer to change the cursor to be the pointer on hover
// reference https://tachyons.io/ for tachyon info