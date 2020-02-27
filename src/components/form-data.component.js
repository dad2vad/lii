import React, { Component } from 'react';

export default class FormDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }


//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
// TO(
//       if (json.success) {
//         setResponse({
//           type: 'success',
//           message: 'ПАСИБА ТАДА'
//         });
//       } else {
//         setResponse({
//           type: 'error',
//           message: json.message
//         });
//       }
//     } catch (e) {
//       console.log('An error occurred', e);
//       setResponse({
//         type: 'error',
//         message: JSON.stringify(e)
//       });
//     }
//   };
    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
        const res = fetch('https://api.telegram.org/bot695543276:AAHqIsFuK-hzCor9q3nO2WgVlV6UfRFRE7c/sendMessage?chat_id=986940575&text=' + JSON.stringify(this.state, null,4), {
        method: 'POST'
    })
    const json = res.json()
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
      
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}
