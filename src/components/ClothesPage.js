import React from "react";
import { Container } from "semantic-ui-react";
import Items from "./Items";

function ClothesPage({items, setItems}){
    const updatedItems = items.filter((item) => (
        (item.type !== 'Shoes' && item.type !=='Accessory')
    ))

    return(
        <div>
            <br/>
            <h1>My Clothes</h1>
            <Container>
                <Items items={updatedItems} setItems={setItems}/>
            </Container>
        </div>
    );
}

export default ClothesPage;