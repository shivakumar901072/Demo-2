import React,{Component} from 'react';
import {push} from 'react-dom';
import "./Images.css"



class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesUrl: "",
            imagesUrlArray: [
        
         "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg",

         "https://newevolutiondesigns.com/images/freebies/cat-wallpaper-10.jpg",

         "https://cdn.pocket-lint.com/r/s/660x/assets/images/137055-cars-feature-tesla-models-compared-model-s-model-3-model-x-model-y-and-more-image10-bls1lhay3q-jpg.webp?v1",

         "https://newevolutiondesigns.com/images/freebies/cat-wallpaper-4.jpg",

         "https://images.all-free-download.com/images/wallpapers_large/orange_flower_wallpaper_flowers_nature_wallpaper_1665.jpg",

         "https://images.all-free-download.com/images/graphiclarge/beautiful_scenery_04_hd_pictures_166258.jpg"
    
         

        ]

        };
    }


    imageSubmitter =(e) => {
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange =(e) => {
     e.preventDefault();
     this.setState({
        imageUrl: e.target.value
     })
    }


    render() {
        const imagesUrlArray = this.state.imagesUrlArray;
        const images = imagesUrlArray.map((url,index) => {
            return(
                <img className="singleImage"
                src={url}
                key={index}
                />
            )
        })
        return (
            <div className="Images">
                <header>
                    <form onSubmit={this.imageSubmitter}>
               <input type="text" className="input" placeholder="Plz enter Url" onChange={this.handleLinkChange}></input>
               <button className="submitButton" type="Submit">Submit</button>
               </form>
               </header>  
                {images}
            </div>
        );
    }
}

export default Images;

