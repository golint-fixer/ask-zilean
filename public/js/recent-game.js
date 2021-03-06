import React from 'react';

export default function RecentGame(props) {
  const nonTrinkets = props.game.summoner.items.filter(item => !item.isTrinket).map(item =>
  (
    <img key={item.imageURL} role="presentation" className="item-image" src={item.imageURL} />
  ));
  const trinket = props.game.summoner.items.filter(item => item.isTrinket).map(item =>
  (
    <img key={item.imageURL} role="presentation" className="item-image" src={item.imageURL} />
  ));
  const kills = props.game.summoner.kills;
  const deaths = props.game.summoner.deaths;
  const assists = props.game.summoner.kills;
  const creepScore = props.game.summoner.creepScore;
  const gold = props.game.summoner.gold;
  const isWinner = props.game.summoner.isWinner;
  const barClass = isWinner ? 'results-bar-victory' : 'results-bar-defeat';
  const outcomeTextClass = isWinner ? 'victory-text' : 'defeat-text';
  const outcomeText = isWinner ? 'VICTORY' : 'DEFEAT';
  return (
    <li className="list-group-item">
      <span className={barClass} />
      <span>
        <span className="champion">
          <span className="centered-image-helper" />
          <img
            role="presentation"
            className="large-image"
            src={props.game.summoner.championImageURL}
          />
        </span>
        <span className="queue-description">
          <div className={outcomeTextClass}>{outcomeText}</div>
          <div>{props.game.mapName}</div>
          <div>{props.game.queueDescription}</div>
        </span>
        <span className="score">
          {`${kills}/${deaths}/${assists}`}
        </span>
        <span className="minions">
          {creepScore}
        </span>
        <span className="gold">
          {gold}
        </span>
        <span className="items">
          <span className="non-trinkets">
            {nonTrinkets}
          </span>
          <span className="trinket">
            {trinket}
          </span>
        </span>
      </span>
    </li>
  );
}

RecentGame.propTypes = {
  game: React.PropTypes.object,
};
