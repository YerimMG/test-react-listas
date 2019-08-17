import React from 'react';

class Pokemon extends React.Component {

    state = {
        pokemon: []
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => {
                this.setState({pokemon: data});
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                Pokemon: {this.props.nombre}
            </div>
        )
    }
}

export default Pokemon;