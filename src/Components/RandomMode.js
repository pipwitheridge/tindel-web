import React, { useState } from 'react';
import data from './bibleData.json'
import { div } from 'react';
import { Accordion, Form, Container, Button } from 'react-bootstrap';
import '../fonts/SILEOTSR.ttf';
import { FaArrowLeft, FaBars, FaBeer, FaCheckCircle, FaRegGrimace } from 'react-icons/fa';
import { GrStatusGood } from 'react-icons/gr';
import { IconContext } from 'react-icons';




class RandomMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            div: '', 
            height: 0,
            showEnglish: "",
            fontsLoaded: true            
        }
      }
      



render() {

    const randomVerses =  data.filter(bit => bit.freqBracket>=parseInt(this.props.wordFreqSelect) && bit.originalLang===this.props.randomLanguageChoice).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value).slice(0,20);

    const handleCheckClick = (id) => {
        document.getElementById(id).style.display=""
        document.getElementById("checkbutton"+id).style.display="none"
        document.getElementById("choiceButtons"+id).style.display="flex"

    }

    const handleYesClick = (id) => {
        document.getElementById("checkbutton"+id).style.display="none"
        document.getElementById("choiceButtons"+id).style.display="none"
        document.getElementById("goodIcon"+id).style.display="flex"


    }

    const handleNoClick = (id) => {
        document.getElementById("checkbutton"+id).style.display="none"
        document.getElementById("choiceButtons"+id).style.display="none"
        document.getElementById("badIcon"+id).style.display="flex"
    }

if (!this.state.fontsLoaded) {
  return null;
}

     return ( 

      <Container>
        <div>
            <Button variant="dark" style={{height: 80, width: 80, marginBottom: 30}} onClick={this.props.openBookMenu}><FaArrowLeft style={{height: 30, width: 30}}/></Button></div>
            <div className="d-flex justify-content-center" style={{fontSize: 30, marginTop: 20, marginBottom: 10}}><span>20x random {this.props.randomLanguageChoice} verses!</span></div>
            {this.props.wordFreqSelect!==0?<div className="d-flex justify-content-center" style={{fontSize: 15, marginTop: 10, marginBottom: 50}}><span>All words occur {this.props.wordFreqSelect}+ times in the Bible.</span></div>:<div style={{marginBottom: 50}}></div>}

       <div>

{ randomVerses.map(FilteredBit => {
   
                    
                    const hebrewOriginalLang = this.props.randomLanguageChoice === "Hebrew";

                    return(
                        <>

                        <div style={{marginBottom: 60}}>
                        <div key={FilteredBit.originalText}>
                        <div key={FilteredBit.originalText}>
                        
                        
                        <div style={hebrewOriginalLang ? {fontSize: 30, marginBottom: 10, fontFamily: "Ezra SIL", 
                        textAlign: "end", marginRight: "10px", lineHeight: 1.8} :
                        {fontSize: 25, marginBottom: 20, fontFamily: "Times New Roman", 
                        divAlign:"left"}} key={FilteredBit.bookName+FilteredBit.Chapter}>{FilteredBit.originalText}
                        
                        </div>

                   
                       
                        
                        </div>
                       <div style={{display: "none"}} id={FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse} key={FilteredBit.English}>
                        <div>
                        <div style={{fontSize: 15, marginBottom: 20} }>{FilteredBit.English} <strong>{'\u0028'}{FilteredBit.bookName} {FilteredBit.Chapter}:{FilteredBit.Verse}{'\u0029'}</strong></div>
                        </div>
                        </div>
                        </div>
                       <div>
                        <Form style={{marginTop: 10}} key={FilteredBit.English}>
                        <Form.Control style={{marginBottom: 10}}key={FilteredBit.English} as="textarea" rows={2} placeholder="Type translation here." />
                        <div style={{display: "flex", justifyContent: "end"}} id={"checkbutton"+FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse}>
                            <Button variant="secondary" onClick={() => handleCheckClick(FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse)}>Check</Button>
                        </div>
                        <div style={{display: "none", justifyContent: "end", alignItems: "center"}} id={"choiceButtons"+FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse}>
                            <span style={{marginRight: 20}}>Are you happy with your translation attempt?</span>
                            <Button variant="secondary" style={{marginRight: 10, width: 70}} onClick={() => handleYesClick(FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse)}>Yes</Button>
                            <Button variant="secondary" style={{width: 70}} onClick={() => handleNoClick(FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse)}>No</Button>
                        </div>
                        <div style={{display: "none", justifyContent: "end"}} id={"goodIcon"+FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse}>
                            <IconContext.Provider value={{color: "green", size: 40 }}>
                                <FaCheckCircle />
                            </IconContext.Provider>
                        </div>
                        <div style={{display: "none", justifyContent: "end"}} id={"badIcon"+FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse}>
                            <IconContext.Provider value={{color: "red", size: 40 }}>
                                <FaRegGrimace />
                            </IconContext.Provider>
                        </div>
                        </Form>                        
                        </div>
                        </div>
                       
                        
            

                </>
                    )   
                }   
                )}
            
            </div>
                </Container>
 )}
}
  
  export default RandomMode;


