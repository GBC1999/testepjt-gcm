import React, { Component } from 'react'

export default class QuartoPasso extends Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return(
            <div>
                <button> + Adicionar Envolvidos</button>
              <label name="condicaoDaParte">
                   <h5>condição da parte:          
                <select>
                    <option value="condicaoDaParte" disabled>condicaoDaParte</option>
                     <option value="autuante">Autuante</option>
                     <option value="vitima">Vitima</option>
                </select>
                    </h5>
              </label>
                <br />
                <input name='conduzido'
                     type="checkbox" 
                     onChange={handleChange('conduzido')}
                     checked={values.conduzido}
                     required />        
                <br />
                <input
                    name='nome'
                    type='text'
                    onChange={handleChange('nome')}
                    placeholder='Nome'
                    value={values.nome}
                    required />
                <br />
                <input
                    name='dataNascimento'
                    type='date'
                    onChange={handleChange('dataNascimento')}
                    placeholder='Data de Nascimento'
                    value={values.dataNascimento}
                    required />
                <br />
                <input
                    name='pai'
                    type='text'
                    onChange={handleChange('pai')}
                    placeholder='Pai'
                    value={values.pai}
                    required />
                <br />
                <input
                    name='mae'
                    type='text'
                    onChange={handleChange('mae')}
                    placeholder='Mae'
                    value={values.mae}
                    required />
                <br />
                <input
                    name='nacionalidade'
                    type='text'
                    onChange={handleChange('nacionalidade')}
                    placeholder='Nacionalidade'
                    value={values.nacionalidade}
                    required />
                <br />
                <input
                    name='naturalidadeCidade'
                    type='text'
                    onChange={handleChange('naturalidadeCidade')}
                    placeholder='Naturalidade Cidade'
                    value={values.bairro}
                    required />
                <br />
                <input
                    name='naturalidadeEstado'
                    type='text'
                    onChange={handleChange('naturalidadeEstado')}
                    placeholder='Naturalidade Estado'
                    value={values.bairro}
                    required />
                <br />
                <input
                    name='telefone'
                    type='text'
                    onChange={handleChange('telefone')}
                    placeholder='Telefone'
                    value={values.telefone}
                    required />
                <br />
                <input
                    name='localDeTrabalho'
                    type='text'
                    onChange={handleChange('localDeTrabalho')}
                    placeholder='Local de trabalho'
                    value={values.localDeTrabalho}
                    required />
                <br />
                <textarea
                    name='versaoDoEnvolvido'
                    type='textbox'
                    onChange={handleChange('versaoDoEnvolvido')}
                    placeholder='Versão do Envolvido'
                    value={values.versaoDoEnvolvido}
                    required />
                <br />
                <button onClick={this.back}>
                    Voltar
                </button>
                <button type="submit">
                    Próximo
                </button>

            </div>
        )
    }
}