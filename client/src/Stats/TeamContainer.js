import React from 'react';
import { useHistory } from 'react-router';
import PlayersList from './PlayersList';

const TeamContainer = ({team}) => {

    let history = useHistory()

    function teamPage(){
        <PlayersList team={team.full_name}/>
        {history.push('/teampage')}
    }
    
    return (
        <div>
            <ul onClick={teamPage} >
            {team.full_name}
            <br/>
            {team.abbreviation}
            <br/>
            Conference: {team.conference}
            <br/>
            Division: {team.division}
            <hr/>
            </ul>
        </div>
    )
}

export default TeamContainer;
