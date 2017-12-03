import React, {Component} from 'react';

export default class BusPlanView extends Component {
    constructor() {
        super();
    }

    render() {
        const {layer} = this.props;
        const title = 'layer ' + layer;
        return (
            <div className="busPlan__layer">
                <p className="busPlan__layerTitle">{title}</p>
                {this.props.children}
            </div>
        );
    }
}