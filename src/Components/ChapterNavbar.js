import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Button } from 'react-bootstrap';



class ChapterNavbar extends React.Component {

    render() { 
        const bookChoice = this.props.bookChoice; 
        const chapterChoice = this.props.chapterChoice; 
        const nextChapter = this.props.nextChapter;
        const previousChapter = this.props.previousChapter;


        return (        
      <>
       <div className="d-flex flex-direction-row" style={{marginBottom:20, justifyContent: "space-between", alignItems:"center"}}>
        <div><Button variant="dark" style={{height: 80, width: 80}} onClick={this.props.openBookMenu}><FaBars style={{height: 30, width: 30}}/></Button></div>
          <div className="d-flex flex-direction-row align-items-center">
          <this.props.PrevChapterNavLinkRender style={{marginRight: 20, marginLeft: 20}}/>
            <div className="bigScreen" style={{fontSize: 25, marginRight: 20, marginLeft: 20, fontSize: 30}}>{bookChoice} {chapterChoice}</div>
          <this.props.NextChapterNavLinkRender style={{marginRight: 20, marginLeft: 20}}/>
          </div>
      </div>
      <div className="smallScreen" style={{fontSize: 25, marginRight: 20, marginLeft: 20, marginBottom: 20, fontSize: 30, justifyContent: "right"}}><div>{bookChoice} {chapterChoice}</div></div>

      
      </>
     
    

        );
    }
}
 
export default ChapterNavbar;