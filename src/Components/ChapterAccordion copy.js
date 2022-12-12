
import React from 'react';
import {div, Image, Button } from 'react';
import data from './bibleData.json'
import { Divider } from 'react';
import { Icon } from 'react'




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

        <div style={{width: '100%'}} showsVerticalScrollIndicator={false}>

        <div style={{paddingTop: 10, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{flexDirection: 'row', alignItems: 'center'}}>
              <div onPress={() => this.setWrenchModalVisible(true)} style={{marginRight: 20}}><div><Icon type='font-awesome' name='wrench' size={40}/></div></div>
              <div onPress={() => this.setModalVisible(true)} style={{marginRight: 20}}><div><Icon type='font-awesome' name='info-circle' size={40}/></div></div>
              </div>
              
        </div>

        <div style={{marginBottom: 20}}></div>

        { data.filter(bit => bit.Chapter===1 && bit.Verse===1).map(FilteredBit => {
                return(

        <div>
        
    <div >
      <div style={{flexDirection:'row', height: 50}}>
      
        <div style={{fontSize: 20}}>{FilteredBit.bookName}</div>
    
      </div>

      
    </div>
    
    <div style={{width: '100%'}}>
    <div style={{flexDirection:'row', flexWrap:'wrap', width: '100%', justifyContent: 'space-between', marginBottom: 30}}>
      
    { data.filter(thing => thing.Verse===1 && thing.bookName===FilteredBit.bookName).map(FilteredThing => {
                         const buttonNum = FilteredThing.Chapter;   
                        const bookTit = FilteredBit.bookName; 
      return(
      <Button style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width: 60, height: 60, borderColor: '#808080', borderWidth: 1, marginBottom: 10}} onPress={() => this.props.chapterMenuClick(buttonNum, bookTit)}><div>{buttonNum}</div></Button>
      )})}
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>
      <div style={{width: 60, height: 0}}/>



    </div>
    </div>

   

</div>

)})}

<div style={{height: 200}}></div>
        </div>  




        <Modal
          animationType= "slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <div showsVerticalScrollIndicator={false} style={{marginHorizontal: 20}}>
            <div style={{alignItems: 'center', marginTop: 100, marginBottom: 100}}>
            <div style={{alignItems: 'center'}}>
            <div><div style={{marginBottom: 20}}><div>What is Tindel?</div></div></div>
            <div>
            <div>Tindel lets you practice bible translation on the go! It also helps people find verses suitable for their skill level.</div> 
            <div >The App is called Tindel as a homage to William Tyndale, who first translated the Bible into English from the original Greek and Hebrew div.</div>           
            </div>
            </div>
            <div style={{alignItems: 'center'}}>
            <div><div style={{marginBottom: 20}}><div >How do I use it?</div></div></div>
            <div >
              
              <div >1: Choose a chapter.</div>
              <div >2: Type your translation in the input box (or just translate in your head).</div>
              <div >3: Click the Hebrew/Greek div to reveal an English version.</div>
              <div >4: See how your translation compares!</div>
              <div >Use the wrench at the top of the homepage to filter verses by their difficulty. You can filter verses based on how many occurrences their words have in the bible.</div>
              <div >For example, choosing 90+ means you'll only see verses whose words all occur at least 90 times in the bible.</div>
              
            </div>
            </div>
            <div style={{alignItems: 'center'}}>
            <div><div style={{marginBottom: 20}}><div >Which Bible versions does it use?</div></div></div>
            <div >
              <div >The English version used is called WEB (World English Bible). It's a fairly literal translation which many find helpful as a starting point.</div>
              <div >The Hebrew version used is called WLC (Westminster Leningrad Codex).</div>
              <div >The Greek version used is called SBLGNT (Greek New Testament from the Society of Biblical Literature).</div>
              <div >Each version is either in the public domain or is used in a way that conforms to fair use standards.</div>
            </div>
            </div>

            <div style={{alignItems: 'center'}}>
            <div><div style={{marginBottom: 20}}><div >How do I submit feedback / questions?</div></div></div>
            <div >
              <div >Email phillipwitheridge@gmail.com</div>
              <div >I'd love to hear from you about how I could improve this app!</div>
            </div>
            </div>

              




              <Button
                
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <div >Close</div>
              </Button>

              </div>
            </div>
        </Modal>








        <Modal
          animationType= "slide"
          transparent={false}
          visible={wrenchModalVisible}
          onRequestClose={() => {
            this.setWrenchModalVisible(!wrenchModalVisible);
          }}
        >
          <div >

          <div style={{width: 300}}>
          <div >Filter verses by how many occurrences their words have in the bible.</div>
          </div>
          
          <this.props.MyButtonGroup />
              

              <Button
                
                onPress={() => this.setWrenchModalVisible(!wrenchModalVisible)}
              >
                <div >Done</div>
              </Button>
            </div>
        </Modal>







      </>

    );
  }

}


  


 
export default ChapterAccordion;
