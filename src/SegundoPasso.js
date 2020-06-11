import React, { Component } from 'react'

export default class SegundoPasso extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { handleChange, values } = this.props;

        return (
            <div>
                <input
                    name='horaIrradiacao'
                    type='time'
                    onChange={handleChange('horaIrradiacao')}
                    placeholder='Hora Irradiação'
                    value={values.horaIrradiacao}
                    required />
                <br />
                <input
                    name='horaLocal'
                    type='time'
                    onChange={handleChange('horaLocal')}
                    placeholder='Hora Local'
                    value={values.horaLocal}
                    required />
                <br />
                <input
                    name='primeiroTermino'
                    type='time'
                    onChange={handleChange('primeiroTermino')}
                    placeholder='Primeiro Termino'
                    value={values.primeiroTermino}
                    required />
                <br />
                <input
                    name='segundoTermino'
                    type='time'
                    onChange={handleChange('segundoTermino')}
                    placeholder='Segundo Termino'
                    value={values.segundoTermino}
                    required />
                <br />
                <input
                    name='kmIrradiacao'
                    type='text'
                    onChange={handleChange('kmIrradiacao')}
                    placeholder='Km da Irradiação'
                    value={values.kmIrradiacao}
                    required />
                <br />
                <input
                    name='kmLocal'
                    type='text'
                    onChange={handleChange('kmLocal')}
                    placeholder='Km Local'
                    value={values.kmLocal}
                    required />
                <br />
                <input
                    name='kmPrimeiroTermino'
                    type='text'
                    onChange={handleChange('kmPrimeiroTermino')}
                    placeholder='Km Primeiro Termino'
                    value={values.kmPrimeiroTermino}
                    required />
                <br />
                <input
                    name='kmSegundoTermino'
                    type='text'
                    onChange={handleChange('kmSegundoTermino')}
                    placeholder='Km Segundo Termino'
                    value={values.kmSegundoTermino}
                    required />
                <br />
                <button className='voltar' onClick={this.back}>
                    Voltar
                </button>
                <button className='proximo' onClick={this.continue}>
                    Próximo
                </button>
            </div>
        )
    }
}