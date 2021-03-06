import React from 'react'



import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
    BackgroundImage

} from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    debugger

    return (
        <CollectionItemContainer>
            <BackgroundImage
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;

