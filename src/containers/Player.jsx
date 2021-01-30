import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import NotFound from '../containers/NotFound';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import { Redirect } from 'react-router-dom';

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    // const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        props.getVideoSource(id);
        // setLoading(false);
    }, [])

    // if(loading)
    //     return <h2>Cargando...</h2>

    return hasPlaying ? (
        <div className="Player">
            <video muted controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}> 
                    Regresar
                </button>
            </div>
        </div>
    ) : setTimeout(<Redirect to='/404/' />, 0);
};

const mapStateToProps = state =>{
    return{
        playing: state.playing,
    }
};

const mapDispatchToProps = {
    getVideoSource,
};
    
export default connect(mapStateToProps, mapDispatchToProps) (Player);