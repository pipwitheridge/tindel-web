import React from 'react';
import data from './bibleData.json'
import { div } from 'react';
import TextInputGrow from './TextInputGrow';
import { Accordion, Form, Container } from 'react-bootstrap';
import '../fonts/SILEOTSR.ttf';






class ChapterText extends React.Component {
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
const bookChoice = this.props.bookChoice;
const chapterChoice = this.props.chapterChoice; 
const wordFreqSelect = this.props.wordFreqSelect;


if (!this.state.fontsLoaded) {
  return null;
}

     return ( 

      <Container>
      <div>

{ data.filter(bit => bit.bookName===bookChoice && bit.Chapter===parseInt(chapterChoice) && bit.freqBracket>=parseInt(wordFreqSelect)).map(FilteredBit => {
                    
                    const hebrewOriginalLang = data.some(bit => bit.bookName === bookChoice && bit.originalLang === "Hebrew");

                    return(
                        <>
                         
                        <div style={{marginBottom: 60}}>
                        <div  style={{fontWeight: "bold", marginBottom: 10}}>Verse {FilteredBit.Verse}</div>
                        <Accordion>
                        <Accordion.Header>
                        
                        
                        <div style={hebrewOriginalLang ? {fontSize: 30, marginBottom: 10, fontFamily: "Ezra SIL", 
                        textAlign: "end", width: "100%", marginRight: "10px", lineHeight: 1.8} :
                        {fontSize: 25, marginBottom: 10, fontFamily: "Times New Roman", 
                        divAlign:"left"}} key={FilteredBit.bookName+FilteredBit.Chapter}>{FilteredBit.originalText}
                        
                        </div>

                   
                       
                        
                        </Accordion.Header>
                       <Accordion.Body>
                        <div>
                        <div style={{fontSize: 15, marginBottom: 10} }>{FilteredBit.English} </div>
                        </div>
                        </Accordion.Body>
                        </Accordion>
                       
                        <Form style={{marginTop: 10}}>
                        <Form.Control as="textarea" rows={2} placeholder="Type translation here." />
                           
                        </Form>

                        </div>
                       
                        
                       

                

                </>
                    )   
                }   
                )}
            
            </div>
                </Container>
 )}
}
  
  export default ChapterText;


