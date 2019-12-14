import React from 'react';
import './collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items, routeName}) => {
    return (
        <div>
            <div className='collection-preview'>
                <h1 className="title">
                    {title.toUpperCase()}
                    {routeName}
                </h1>
                <div className="preview">{
                items.filter((item, idx) => idx < 4)
                        .map(({id, ...itemProps}) =>(
                    <CollectionItem key={id} {...itemProps} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default CollectionPreview;
