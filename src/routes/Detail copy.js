import React from "react";
import './Detail.css'



class Detail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }


    render() {
        const { location } = this.props;
        if (location.state) {
            return <div className="detail">
                <img src={location.state.poster} />
                <h1>{location.state.title}</h1>
                <h2>{location.state.year}</h2>
                <p>{location.state.summary.slice(0, 400)}</p>
            </div>
        } else {
            return null;
        }
    }
}

export default Detail;
