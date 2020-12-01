import React, {Component} from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

    render() {
        const buttons = [
            {
                id: 'all',
                name: 'All'
            },
            {
                id: 'false',
                name: 'Active'
            },
            {
                id: 'true',
                name: 'Done'
            }
        ]
        return (
            <div className="btn-group">

                {buttons.map(({id, name}) => (
                        <button
                            onClick={this.props.onChange}
                            type="button"
                            className={`btn ${id === this.props.status ? 'btn-info' : 'btn-outline-secondary'}`}
                            key={id}
                            id={id}
                        >
                            {name}
                        </button>
                    )
                )}
            </div>
        );
    }
}