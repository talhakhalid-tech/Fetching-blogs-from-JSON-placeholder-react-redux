import React from 'react';
import {connect} from 'react-redux'

const SongDetail = (props) =>{
    if(!props.selectedSong){
        return(
            <div>Select a Song</div>
        )
    }
    return(
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header">
                        {props.selectedSong.title}
                    </div>
                    <div class="meta">
                        Duration: {props.selectedSong.duration}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {selectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);