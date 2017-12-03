import React, {Component} from 'react';
import dispatcher from '../dispatchers/dispatcher';
import BusPlanView from './views/BusPlanView';
import Seat from './Seat';

export default class BusPlan extends Component {
    constructor() {
        super();
        this.renderColumn = this.renderColumn.bind(this);
        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatcher.loadBusPlan(dispatch);
    }

    renderItems(items) {
        console.log('===renderItems===');
        console.log(items);
        if (!items || !items.firstColumn || !items.secondColumn) {

        }
        return (
            <div class="busPlan__items">
                {this.renderColumn(items.firstColumn, 'normal')}
                {this.renderColumn(items.secondColumn, 'narrow')}
                {this.renderColumn(items.thirdColumn, 'normal')}
            </div>
        );
    }

    renderColumn(items, type) {
        console.log(items);
        const column = items.map((item) => {
            console.log(item.type);
            switch (item.type) {
                case 'seat':
                    return (
                        <Seat
                            seat={item}
                            hasIndex={true}
                            dispatch={this.props.dispatch}
                        />
                    );
                case 'driver':
                    return (
                        <div class="busPlan__driver">
                            driver
                        </div>
                    );
                case 'stairs':
                    return (
                        <div className="busPlan__stairs">
                            stairs
                        </div>
                    );
                case 'table':
                    return (
                        <div className="busPlan__table">
                        </div>
                    );
                case 'door':
                    return (
                        <div className="busPlan__door">
                        </div>
                    );
                case 'toilet':
                    return (
                        <div className="busPlan__toilet">
                            WC
                        </div>
                    );
                case 'normal-seat':
                    return (
                        <div className="busPlan__normal_seat">
                        </div>
                    );
                case 'empty':
                    return (
                      <div className="busPlan__empty">
                      </div>
                    );
                case 'seatIndex': {
                    return (
                        <div className="busPlan__seatIndex">
                            {item.index}
                        </div>
                    )
                }
            }
        });
        let classNames = 'busPlan__column';
        if (type === 'narrow') {
            classNames += ' busPlan__column_narrow';
        }
        return (
            <div className={classNames}>
                {column}
            </div>
        );
    }



    render() {
        const {type, busPlan} = this.props;
        console.log(busPlan);
        if (type === 'single') {
            return (
                <BusPlanView
                    layer={1}
                >
                    {this.renderItems(busPlan.layout.first)}
                </BusPlanView>
            );
        } else {
            return (
                <div className="busPlan">
                    <BusPlanView
                        layer={1}
                    >
                        {this.renderItems(busPlan.layout.first)}
                    </BusPlanView>
                    <BusPlanView
                        layer={2}
                    >
                        {this.renderItems(busPlan.layout.second)}
                    </BusPlanView>
                </div>
            );
        }
    }
}