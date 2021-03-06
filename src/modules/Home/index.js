import "./index.css";

import { setSelectedViagem, setViagens } from "../../actions";

import CommentCard from "./components/CommentCard";
import React from "react";
import Slide from "../../images/Rectangle.jpg";
import ViagemCard from "./components/ViagemCard";
import { connect } from "react-redux";
import { getViagens } from "../../services/index";

class Home extends React.Component {
  componentDidMount() {
    getViagens()
      .then(sucess => this.props.setViagens(sucess.data))
      .catch(err => console.log(err));
  }

  handleCardClick = Viagem => {
    this.props.setSelectedViagem(Viagem);
    this.props.history.push("/viagem");
  };

  render() {
    const { viagens } = this.props;
    return (
      <div>
        <div className="home__slide">
          <img src={Slide} alt="Slide" className="home__image" />
        </div>
        <div className="viagens__cards">
          <div className="viagem__cabeçalho">
            <span className="viagens__patrocine">Patrocine:</span>
          </div>
          <div className="viagem__card">
            {viagens.slice(0, 3).map((viagem, index) => (
              <ViagemCard
                viagem={viagem}
                onClick={() => this.handleCardClick(viagem)}
              />
            ))}
          </div>
          <div className="viagem__card">
            {viagens.slice(3, 6).map((viagem, index) => (
              <ViagemCard
                viagem={viagem}
                onClick={() => this.handleCardClick(viagem)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="viagem__comment-card">
            {viagens.slice(0, 3).map((viagem, index) => (
              <CommentCard viagem={viagem} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viagens: state.viagens.viagens
  };
};

export default connect(
  mapStateToProps,
  { setViagens, setSelectedViagem }
)(Home);
