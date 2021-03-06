import React, { Component } from 'react';
import PreviewCard from './PreviewCard'

export default class Cardform extends Component {


    render() {
      const cardInfo = this.props.cardInfo
        
        return(
          <div className="cardform">
              Card Form
              <div id="preview">
                Preview: <PreviewCard cardInfo={cardInfo} />
                </div>
                <form id="card-form" onSubmit={this.props.handleSubmit}>
                    <label htmlFor="name-input">Enter Name: </label>
                    <input onChange={this.props.previewCard} id="name-input" type="text" name="name" placeholder="Enter Card Name" value={cardInfo.pName} /><br></br>
                    <label htmlFor="mana-input">Enter Mana: </label>
                    <input onChange={this.props.previewCard} id="mana-input" type="text" name="mana_cost" placeholder="Mana Cost" value={cardInfo.pMana}/><br></br>
                    <label htmlFor="image-input">Enter Image Url: </label>
                    <input onChange={this.props.previewCard} id="image-input" type="text" name="img_url" placeholder="Enter Card Image Url" value={cardInfo.pImg} /><br></br>
                    <label htmlFor="type-input">Enter Spell Type: </label>
                    <input onChange={this.props.previewCard} id="type-input" type="text" name="spell_type" placeholder="Enter Spell Type" value={cardInfo.pType} /><br></br>
                    <label htmlFor="description-input">Enter Description: </label>
                    {/* <input id="description-input" type="text" name="description" placeholder="Enter Card Description" /><br></br> */}
                    <textarea onChange={this.props.previewCard} id="description-input" name="description" placeholder="Enter Text Here" value={cardInfo.pDesc} ></textarea>
                    <button type="submit">Submit New Card</button>
                </form>
                

              <br></br>
              <button className="toggle" onClick={this.props.toggleForm}>Go to Nav</button>
          </div>
        )
    }
}