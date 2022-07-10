import React from 'react';

const Player = () => {
    return (
        <div className='player--container'>
            <div className='player__head'>
                <div className='hair'></div>
                <div className='eyes__container'>
                    <div className='right__eye'></div>
                    <div className='left__eye'></div>
                </div>
                <div className='mouth__container'>
                    <div className='mouth'></div>
                </div>
            </div>
            <div className='player__body'>
                <div className='player__right__arm'></div>
                <div className='player__left__arm'></div>
            </div>
            <div className='player__right__leg'></div>
            <div className='player__left__leg'></div>
            <div className='player__right__foot'></div>
            <div className='player__left__foot'></div>
        </div>
    );
};

export default Player;