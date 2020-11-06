import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data //將res.data丟到memes array
                this.setState({ allMemeImg: memes }) //再存到allMeme state
            })
    }

    handleChange(event) {
        const {name, value} = event.target //input的name屬性(name of state, suppose to update)
        this.setState({ [name]: value })  //update the state
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" name="topText" 
                        className="input-placeholder"
                        placeholder="Top Text" 
                        value={this.state.topText}
                        onChange={this.handleChange}  
                    />
                    <input 
                        type="text" name="bottomText"
                        className="input-placeholder" 
                        placeholder="Bottom Text" 
                        value={this.state.bottomText}
                        onChange={this.handleChange}  
                    />
                    <button>Go</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator 