// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classNames';

// Instruments
import Styles from './styles.m.css';

// Store
import { store } from '../../init/store';

//Actions
import { showNextPhoto, showSelectedPhoto, showPrevPhoto } from '../../bus/gallery/actions';

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate();
    };

    _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
        this.forceUpdate();
    };

    _showSelectedPhoto = (event) => {
        store.dispatch(showSelectedPhoto(event.target.value));
        this.forceUpdate();
    };

    render () {
        const { gallery: { photos, selectedPhohoIndex }} = store.getState();
        const photo = photos.find((_, index) => index === selectedPhohoIndex);

        const buttonActiveStyle1 = cx({ [Styles.buttonActive]: selectedPhohoIndex === 0 });
        const buttonActiveStyle2 = cx({ [Styles.buttonActive]: selectedPhohoIndex === 1 });
        const buttonActiveStyle3 = cx({ [Styles.buttonActive]: selectedPhohoIndex === 2 });
        const buttonActiveStyle4 = cx({ [Styles.buttonActive]: selectedPhohoIndex === 3 });

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button onClick = { this._showPrevPhoto }>←</button>
                    <button
                        className = { buttonActiveStyle1 }
                        value = '0'
                        onClick = { this._showSelectedPhoto }>
                        1
                    </button>
                    <button
                        className = { buttonActiveStyle2 }
                        value = '1'
                        onClick = { this._showSelectedPhoto }>
                        2
                    </button>
                    <button
                        className = { buttonActiveStyle3 }
                        value = '2'
                        onClick = { this._showSelectedPhoto }>
                        3
                    </button>
                    <button
                        className = { buttonActiveStyle4 }
                        value = '3'
                        onClick = { this._showSelectedPhoto }>
                        4
                    </button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}
