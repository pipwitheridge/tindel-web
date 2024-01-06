import React from 'react';
import {div, Image } from 'react';
import data from './bibleData.json'
import { Divider } from 'react';
import { Accordion, Button, Modal, Navbar } from 'react-bootstrap';
import { FaWrench, FaInfoCircle, FaFilter } from 'react-icons/fa';
import logo from './myLogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






class ChapterAccordion extends React.Component {  
  constructor(props) {
    super(props);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.setWrenchModalVisible = this.setWrenchModalVisible.bind(this);
    this.state = {
      modalVisible: false,
      wrenchModalVisible: false,      
  };

}



// Show Info Modal
setModalVisible = (visible) => {
  this.setState({ modalVisible: visible });
}



// Show Wrench Modal
setWrenchModalVisible = (visible) => {
  this.setState({ wrenchModalVisible: visible });
}


  render() {  

    const { modalVisible } = this.state;
    const { wrenchModalVisible } = this.state;


    return (

      <>
      <Row >
        <Col > 
      <div>
      <div><img src={logo} width="80" height="80"></img></div>   
      </div>
      </Col>
        <Col>
              <div className="d-flex flex-row-reverse">
              <Button variant="dark" onClick={() => this.setWrenchModalVisible(true)} style={{height: 80, width: 80, marginRight: 20}}>
              <div>
                <div style={{marginBottom: 5}}><FaFilter size={30}/></div>
                <div>{this.props.wordFreqSelect===0 ? "All" : this.props.wordFreqSelect+"+"}</div>
              </div>
              </Button>
              <Button variant="dark" onClick={() => this.setModalVisible(true)} style={{height: 80, width: 80, marginRight: 20}}><div><FaInfoCircle size={40}/></div></Button>
              </div>
        </Col>
      </Row>

  

        <div showsVerticalScrollIndicator={false}>


        <div style={{marginBottom: 20, marginTop: 50}}>

        <Button variant="secondary" onClick={() => this.props.enterRandomMode("Hebrew")} style={{height: 80, width: "100%", marginRight: 20, marginBottom: 20}}><div>Random Hebrew/OT Verses</div></Button>
        <Button variant="secondary" onClick={() => this.props.enterRandomMode("Greek")} style={{height: 80, width: "100%", marginRight: 20, marginBottom: 20}}><div>Random Greek/NT Verses</div></Button>

        </div>
        { data.filter(bit => bit.Chapter===1 && bit.Verse===1).map(FilteredBit => {
                return(

        <div>
        
    <Accordion flush className="accordionColour">
    <Accordion.Item className="accordionColour"></Accordion.Item>
    <Accordion.Header className="accordionColour">
    
      <div style={{flexDirection:'row', height: 50}} className="d-flex align-items-center">
      
        <div style={{fontSize: 20}}>{FilteredBit.bookName}</div>
    
      </div>

      </Accordion.Header>

      <Accordion.Body className="accordionColour">
    
    
    <div>
    <div style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'space-between', marginBottom: 30}}>
      
    { data.filter(thing => thing.Verse===1 && thing.bookName===FilteredBit.bookName).map(FilteredThing => {
                         const buttonNum = FilteredThing.Chapter;   
                        const bookTit = FilteredBit.bookName; 
      return(
      <Button variant="outline-secondary" style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width: 60, height: 60, borderColor: '#808080', borderWidth: 1, margin: 10}} onClick={() => this.props.chapterMenuClick(buttonNum, bookTit)}><div>{buttonNum}</div></Button>
      )})}
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>



    </div>
    </div>
    </Accordion.Body>
   
    </Accordion>
</div>

)})}

<div style={{height: 200}}></div>
        </div>  






        <Modal show={this.state.modalVisible} onHide={() => this.setModalVisible(!modalVisible)}>
        <Modal.Body>

        <Accordion>
        <Accordion.Header><div style={{fontSize: 20}}>What is Tindel?</div></Accordion.Header>
        <Accordion.Body>
        <div>Tindel lets you practice bible translation on the go! It also helps people find verses suitable for their skill level.</div> 
        <br />
        <div>The App is called Tindel as a homage to William Tyndale, who first translated the Bible into English from the original Greek and Hebrew div.</div>           
        </Accordion.Body>
        </Accordion>

        <Accordion>
        <Accordion.Header><div style={{fontSize: 20}}>How do I use it?</div></Accordion.Header>
        <Accordion.Body>
               <div >1: Choose a chapter.</div>
               <br />
              <div >2: Type your translation in the input box (or just translate in your head).</div>
              <br />
              <div >3: Click the Hebrew/Greek text to reveal an English version.</div>
              <br />
              <div >4: See how your translation compares!</div>
              <br />
              <div >Use the wrench at the top of the homepage to filter verses by their difficulty. You can filter verses based on how many occurrences their words have in the bible.</div>
              <br />
              <div >For example, choosing 90+ means you'll only see verses whose words all occur at least 90 times in the bible.</div>       
        </Accordion.Body>
        </Accordion>


        <Accordion>
        <Accordion.Header><div style={{fontSize: 20}}>Which bible versions does it use?</div></Accordion.Header>
        <Accordion.Body>
              <div >The English version used is called WEB (World English Bible). It's a fairly literal translation which many find helpful as a starting point.</div>
              <br />
              <div >The Hebrew version used is called WLC (Westminster Leningrad Codex).</div>
              <br />
              <div >The Greek version used is called SBLGNT (Greek New Testament from the Society of Biblical Literature).</div>
              <br />
              <div >Each version is either in the public domain or is used in a way that conforms to fair use standards.</div>
              </Accordion.Body>
        </Accordion>

        <Accordion>
        <Accordion.Header><div style={{fontSize: 20}}>Help improve the app!</div></Accordion.Header>
        <Accordion.Body>
        <div >Email phillipwitheridge@gmail.com</div>
        <br />
              <div >I'd love to hear from you about how I could improve this app! Any questions, suggestions or feedback welcome.</div>
                      </Accordion.Body>
        </Accordion>
          
          
     
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setModalVisible(!modalVisible)}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>




        <Modal show={this.state.wrenchModalVisible} onHide={() => this.setWrenchModalVisible(!wrenchModalVisible)}>
        <Modal.Header>
          <Modal.Title><div>Filter verses by how many occurrences their words have in the bible.</div></Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={() => this.setWrenchModalVisible(!wrenchModalVisible)}>

        <this.props.MyButtonGroup />

        </Modal.Body>
    
      </Modal>




      </>

    );
  }

}


  


 
export default ChapterAccordion;
