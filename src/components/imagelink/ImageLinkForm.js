import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This is a Magic Brain. It will detect faces in the pictures you give it. Try it out!'}
            </p>
            <ol>
                <li>Find any weblink to an image</li>
                <li>Copy and Paste that link in this text box</li>
                <li>Wait for the AI to do its magic</li>
            </ol>
            <p>You can give it a try with this link: https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest?cb=20170927034529</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={ onInputChange }/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib ml3 pa2'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;


// this is the input and button field on our page
// remember to include everything inside a main div for the return statement
// starts with a sentence at the top using the <p> tag
// we use the { } for our text to maintain that we are working in a .js file and adding html
// seperate div for the input box and the button
// tachyons style the input field and button size and shadowing
// button is also given grow function with tachyons and makes it a link
// center is a class we gave it to use in css

// when usiong css, remember to import the css file from the correct direcory so that it can see the changes on the web page

// to add the functionality we made in app.js we need to pass in as parameter to ImageLinkFOrm, oninputchange, onbuttonsubmit to declare them, then we can use them on the object we want by adding them to the tags. in this case, the input tag, and the button tag
// onClick is  javascript event that can be used in react. we declare the event listener with onClick, then tell it to do a function after the =...... onClick, do {onButtonSubmit} function...
// same goes for onChange. this event listens for changes to an input field