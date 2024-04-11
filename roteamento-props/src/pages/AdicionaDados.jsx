import React from "react";
import Button from "../components/Button";

const About = () => {
    return (
        <main>
            <form  >
                <div>
                    <label htmlFor="textInput">TÍTULO: </label>
                    <input type="text" id="textInput" />
                </div>
                <div>
                    <label htmlFor="textAreaInput">DESCRIÇÃO: </label>
                    <textarea id="textAreaInput" />
                </div>
       
                    <Button />
          
            </form>
        </main>
    );
};

export default About;
