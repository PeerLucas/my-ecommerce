import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const film = [
    { id: 1, image: "https://media.es.wired.com/photos/6324ebf464fe55a038bdcb09/1:1/w_1600,h_1600,c_limit/Beyonce%CC%81s-New-Album-Sparks-Conspiracy-Theories-Culture-970611876.jpg" , category:'artistas', title: "Beyonce" },
    { id: 2, image: "https://popular2.nyc3.digitaloceanspaces.com/wp-content/uploads/2023/02/13105621/rihana-1000x600.jpg",category:'artistas', title: "Rihanna" },
    { id: 3, image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FJC3LIADHFDRVCUBQQXVIFTOXE.jpg", category: 'artistas', title: "Mac Miller" },
    { id: 4, image: "https://i5.walmartimages.com/asr/546ad6be-c440-460e-a9a2-b4f62d1ab1fb.a3bda0626dd25880a06b2bd435e253de.jpeg", category:'albums', title:'Circles- Mac Miller'},
    { id: 5, image: "https://www.sopitas.com/wp-content/uploads/2019/04/beyonce-lemonade.jpg?w=1120", category:'albums', title:'Lemonade-Beyonce'},
    { id: 6, image: "https://media.pitchfork.com/photos/5929b0ed9d034d5c69bf494f/1:1/w_450%2Cc_limit/04826f73.jpg", category:'albums', title:'Good girl gone bad-Rihanna '},

];

export const ItemDetailContainer = () =>{

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() =>{
                resolve(film);
            }, 10);        
    });

    getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;

