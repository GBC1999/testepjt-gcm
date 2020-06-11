import React, { Component } from 'react'

export default class PrimeiroPasso extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
 
    render() {

        const { values, handleChange } = this.props;

        return (
            <div>
                <input
                    name='numeroDaOcorrencia'
                    type='text'
                    onChange={handleChange('numeroDaOcorrencia')}
                    placeholder='Numero da ocorrência'
                    value={values.numeroDaOcorrencia}
                    required />
                <br />
                <input
                    name='data'
                    type='date'
                    onChange={handleChange('data')}
                    placeholder='Data'
                    value={values.data}
                    required />
                <br />
                <input
                    name='horaFato'
                    type='time'
                    onChange={handleChange('horaFato')}
                    placeholder='Hora Fato'
                    value={values.horaFato}
                    required />
                <br />
                <input
                    name='numTalao'
                    type='text'
                    onChange={handleChange('numTalao')}
                    placeholder='numTalao'
                    value={values.numTalao}
                    required />
                <br />
                <input
                    name='viatura'
                    type='text'
                    onChange={handleChange('viatura')}
                    placeholder='Viatura'
                    value={values.viatura}
                    required />
                <br />
                <button className='proximo' type="submit">
                    Próximo
                </button>
            </div>
        )
    }
}