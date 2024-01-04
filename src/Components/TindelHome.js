import React from "react";
import ChapterText from "./ChapterText";
import ChapterNavbar from "./ChapterNavbar";
import data from './bibleData.json';
import { div, Text } from "react";
import ChapterAccordion from "./ChapterAccordion";
import { Icon } from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import RandomMode from "./RandomMode";




class TindelHome extends React.Component {
    constructor(props) {
      super(props);
      this.chapterMenuClick = this.chapterMenuClick.bind(this);
      this.closeBookMenu = this.closeBookMenu.bind(this);
      this.openBookMenu = this.openBookMenu.bind(this);
      this.updateWordFreqChoice = this.updateWordFreqChoice.bind(this);
      this.updateIndex = this.updateIndex.bind(this);
      this.enterRandomMode = this.enterRandomMode.bind(this);
      this.state = {
        showBookMenu: true,
        showChapterNavbar: false,
        showNextChapterNav: false,
        showPrevChapterNav: false,
        chapterChoice: 1,
        bookChoice: "",
        textInputValue: "",
        wordFreqSelect: 0,
        selectedIndex: 0,
        showRandomMode: false,
        randomLanguageChoice: "",
    };

  }


// Update wordFreqSelect on Wrench Menu options click

updateWordFreqChoice = () => {
if(this.state.selectedIndex===0) {
  this.setState({wordFreqSelect: 0})
}
if(this.state.selectedIndex===10) {
  this.setState({wordFreqSelect: 10});
}
if(this.state.selectedIndex===9) {
  this.setState({wordFreqSelect: 20});
}
if(this.state.selectedIndex===8) {
  this.setState({wordFreqSelect: 30})
}
if(this.state.selectedIndex===7) {
  this.setState({wordFreqSelect: 40})
}
if(this.state.selectedIndex===6) {
  this.setState({wordFreqSelect: 50})
}
if(this.state.selectedIndex===5) {
  this.setState({wordFreqSelect: 60})
}
if(this.state.selectedIndex===4) {
  this.setState({wordFreqSelect: 70})
}
if(this.state.selectedIndex===3) {
  this.setState({wordFreqSelect: 80})
}
if(this.state.selectedIndex===2) {
  this.setState({wordFreqSelect: 90})
}
if(this.state.selectedIndex===1) {
  this.setState({wordFreqSelect: 100})
}
}


// Word Freq Button Group Function
updateIndex (selectedIndex) {
  this.setState({selectedIndex}, () => {
   this.updateWordFreqChoice();
  });
}

// Button group 
MyButtonGroup = () => {
  const selectedIndex = this.state.selectedIndex;

  return(
   <div className="d-grid gap-2">
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 0})}><div>All</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 100})}><div>100+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 90})}><div>90+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 80})}><div>80+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 70})}><div>70+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 60})}><div>60+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 50})}><div>50+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 40})}><div>40+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 30})}><div>30+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 20})}><div>20+</div></Button>
    <Button variant="light" onClick={() => this.setState({wordFreqSelect: 10})}><div>10+</div></Button>
    </div>

  )
}


  // Close/Show Accordion Menu
  closeBookMenu = (e) => { this.setState({showBookMenu: false}); };

  openBookMenu = (e) => { 
    this.setState({showBookMenu: true}); 
    this.setState({chapterChoice: 1});
    this.setState({showBookMenu: true}); 
    this.setState({showChapterNavbar: false,}); 
    this.setState({showNextChapterNav: false,}); 
    this.setState({showPrevChapterNav: false,}); 
  };


  // Handle click of Accordion Menu Button
  chapterMenuClick = (chapterNumber, bookTitle) => {
    this.setState({chapterChoice: chapterNumber});
    this.setState({bookChoice: bookTitle});
    this.setState({showBookMenu: false});
    this.setState({showChapterNavbar: true}, () => {
    const bookChoice = this.state.bookChoice;
    const chapterChoice = this.state.chapterChoice; 
    const objectFilter = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice)+1);
    this.setState({showNextChapterNav: objectFilter});
    const objectFilterPrev = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice)-1);
    this.setState({showPrevChapterNav: objectFilterPrev});
    });    
  }


  // Only render if the click action of the nav link would produce a chapterText component containing something.

    nextChapter = (e) => {
      this.setState({chapterChoice: parseInt(this.state.chapterChoice)+1});
      const bookChoice = this.state.bookChoice;
      const chapterChoice = this.state.chapterChoice; 
      const objectFilter = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice)+2);
      const objectFilterPrev = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice));
      this.setState({showNextChapterNav: objectFilter});
      this.setState({showPrevChapterNav: objectFilterPrev});
      
      

    }  
  
    previousChapter = (e) => {
      this.setState({chapterChoice: parseInt(this.state.chapterChoice)-1}); 
      const bookChoice = this.state.bookChoice;
      const chapterChoice = this.state.chapterChoice; 
      const objectFilter = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice));
      const objectFilterPrev = data.some(bit => bit.bookName === bookChoice && bit.Chapter === parseInt(chapterChoice)-2);
      this.setState({showNextChapterNav: objectFilter});
      this.setState({showPrevChapterNav: objectFilterPrev});

    }  

  // Enter Random Mode
  enterRandomMode = (languageChoice) => {
    this.setState({showBookMenu: false});
    this.setState({showRandomMode: true});
    this.setState({randomLanguageChoice: languageChoice})
  }


    
// Render Book Menu
    BooKMenuRender = () => {
      return(
        this.state.showBookMenu?
        <ChapterAccordion enterRandomMode={this.enterRandomMode} MyButtonGroup={this.MyButtonGroup} updateIndex={this.updateIndex} updateWordFreqChoice={this.updateWordFreqChoice} wordFreqSelect={this.state.wordFreqSelect} chapterMenuClick={this.chapterMenuClick}/>
        :null
      ) 
    }

      // Only render the Next Chapter Button if its visibility is set to 'true'
NextChapterNavLinkRender = () => {
  return(
    this.state.showNextChapterNav?<Button variant="dark" style={{width: 80, height: 80}} onClick={this.nextChapter}><FaArrowRight style={{width: 30, height: 30}}/></Button>:null
  ) 
}

PrevChapterNavLinkRender = () => {
return(
  this.state.showPrevChapterNav?<Button variant="dark" style={{width: 80, height: 80}} onClick={this.previousChapter}><FaArrowLeft style={{width: 30, height: 30}}/></Button>:null
) 
}

   
  // Only render the Navbar once a chapter button has been clicked
  ChapterNavbarRender = () => {
    const showChapterNavbar = this.state.showChapterNavbar;
      return(
        showChapterNavbar?<div showsVerticalScrollIndicator={false}><ChapterNavbar chapterChoice={this.state.chapterChoice} bookChoice={this.state.bookChoice}
        nextChapter={this.nextChapter} previousChapter={this.previousChapter}
        NextChapterNavLinkRender={this.NextChapterNavLinkRender}
        PrevChapterNavLinkRender={this.PrevChapterNavLinkRender}
        openBookMenu={this.openBookMenu} textInputValue={this.state.textInputValue}/>
        <ChapterText wordFreqSelect={this.state.wordFreqSelect} chapterChoice={this.state.chapterChoice} bookChoice={this.state.bookChoice} textInputValue={this.state.textInputValue}/>
        </div>:null

      ) 
  }


    // Only render the Navbar once a chapter button has been clicked
    RandomModeRender = () => {
      const showRandomMode = this.state.showRandomMode;
        return(
          showRandomMode?
          <div showsVerticalScrollIndicator={false}>
            <RandomMode openBookMenu={this.openBookMenu} randomLanguageChoice={this.state.randomLanguageChoice} textInputValue={this.state.textInputValue} wordFreqSelect={this.state.wordFreqSelect}/>
          </div>:null
        ) 
    }




render() {

  console.log(this.state.randomNoGen)


    return (
        <div className="homeContainer" style={{height: "100%"}}>

        
<this.BooKMenuRender/>
<this.ChapterNavbarRender/>
<this.RandomModeRender/>

          
        </div>
     
 )}

}
  
  export default TindelHome;
  



