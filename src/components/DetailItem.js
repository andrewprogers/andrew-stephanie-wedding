import React from 'react';

const DetailItem = ({title, item, description}) => {
    return (
        <div className="DetailItem">
            <p>
                <span className="title">
                    {title}
                </span>
                {item.length > 0 ? ": " : ""}
                <span className="item">
                    {item}
                </span>
                <br />
                <span className="description">
                    <em>{description}</em>
                </span>
            </p>
        </div>
    )
}

export default DetailItem;