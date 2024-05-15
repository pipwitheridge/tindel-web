import React from 'react';
import data from './bibleData.json'
import { div } from 'react';
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


const showEnglish = (thisEnglish) => {
    console.log(document.getElementById(thisEnglish).style.display)
if(document.getElementById(thisEnglish).style.display="none") {
    document.getElementById(thisEnglish).style.display=""
} 
} 



if (!this.state.fontsLoaded) {
  return null;
}

     return ( 

      <Container>

<div style={{marginBottom: 30}}>
{wordFreqSelect!==0 && <span>++ Only displaying verses whose words occur {wordFreqSelect}+ times. </span>}
<span>Click on a verse to reveal an English translation.</span>
</div>



      <div>

{ data.filter(bit => bit.bookName===bookChoice && bit.Chapter===parseInt(chapterChoice) && bit.freqBracket>=parseInt(wordFreqSelect)).map(FilteredBit => {
                    
                    const hebrewOriginalLang = data.some(bit => bit.bookName === bookChoice && bit.originalLang === "Hebrew");

                    return(
                        <>
                         
                        <div style={{marginBottom: 60}}>
                        <div  style={{fontWeight: "bold", marginBottom: 10}}>Verse {FilteredBit.Verse}</div>
                        <div key={FilteredBit.originalText}>
                        <div onClick={() => showEnglish(FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse+FilteredBit.English)} style={{backgroundColor: "white"}} key={FilteredBit.originalText}>
                        
                        
                        <div className="originalText" style={hebrewOriginalLang ? {fontSize: 30, marginBottom: 20, fontFamily: "Ezra SIL", 
                        textAlign: "end", marginRight: "10px", lineHeight: 1.8} :
                        {fontSize: 25, marginBottom: 10, fontFamily: "Times New Roman", 
                        divAlign:"left"}} key={FilteredBit.bookName+FilteredBit.Chapter}>{FilteredBit.originalText}
                        
                        </div>

                   
                       
                        
                        </div>
                       <div style={{display: "none"}} id={FilteredBit.bookName+FilteredBit.Chapter+FilteredBit.Verse+FilteredBit.English} key={FilteredBit.English}>
                        <div>
                        <div style={{fontSize: 15, marginBottom: 20} }>{FilteredBit.English} </div>
                        </div>
                        </div>
                        </div>
                       
                        <Form style={{marginTop: 10}} key={FilteredBit.English}>
                        <Form.Control key={FilteredBit.English} as="textarea" rows={2} placeholder="Type translation here." />
                           
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


