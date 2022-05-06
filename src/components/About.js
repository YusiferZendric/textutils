import React, { useState } from 'react'
export default function About() {
    const [darkStyle, setStyle] = useState({
        backgroundColor: '#1c1c1c',
        color: '#fff',
        border: "1px solid #124999"

    })
    const [littleLight, setStyle2] = useState({
        backgroundColor: '#354152',
        color: 'white'
    })
    const [toggleButton, setButton] = useState("Enable dark mode")
    let light = {
        backgroundColor: '#fff',
        color: '#1c1c1c',
        border: "1px solid #d4d3c9"

    }

    let toggleDarkMode = () => {
        if (darkStyle.backgroundColor === '#1c1c1c' && littleLight.backgroundColor === '#354152') {
            setStyle(light)
            setStyle2(light)
            setButton("Enable dark mode")
        } else {
            setStyle({
                backgroundColor: '#1c1c1c',
                color: '#fff',
                border: "1px solid #124999"
            })
            setStyle2({
                backgroundColor: '#354152',
                color: 'white'
            })
            setButton("Enable light mode")
        }
    }
    return (
        <>
            <div className="container" style={darkStyle}>
                <h1 className="my-4">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={darkStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={darkStyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={littleLight}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={darkStyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={littleLight}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={darkStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={darkStyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={littleLight}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary my-4" onClick={toggleDarkMode}>{toggleButton}</button>
            </div>
        </>
    )
}
