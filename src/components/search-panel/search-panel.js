import React, {Component} from 'react';

import './search-panel.css';

export default ({onChange, searchData}) =>  {
        console.log(this)
        return (
            <input type="text"
                   onChange={onChange}
                   value={searchData}
                   className="form-control search-input"
                   placeholder="type to search"/>
        );
};