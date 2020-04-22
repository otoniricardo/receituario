/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  Container,
  CustomerSelector,
  CustomerList,
  CustomerContainer,
  CustomerData,
  CreateNewUser,
  CultivationContainer,
} from './styles';

const schema = Yup.object().shape({
  doc: Yup.string()
    .required('O CPF/CNPJ é Obrigatório')
    .min(9, 'Documento deve possuir no minimo 9 digitos'),
  name: Yup.string().required('O Nome é obrigatório'),

  street: Yup.string().required('O Logradouro é obrigatório'),
  number: Yup.string().required('O número é obrigatório'),
  cep: Yup.string()
    .required('O cep é obrigatório')
    .min(8, 'Documento deve possuir no minimo 8 digitos'),
  uf: Yup.string()
    .required('O Estado é obrigatório')
    .length(2, 'O estado deve possuir exatamente 2 caracteres'),
  city: Yup.string().required('A cidade é obrigatória'),
});

export default function Presciption() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setfilteredCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [showCreateNewUser, setshowCreateNewUser] = useState(false);
  const [cultivations, setCultivations] = useState([]);
  const [selectedCultivation, setSelectedCultivation] = useState('');
  useEffect(() => {
    setCustomers([
      {
        id: 1,
        name: 'RICARDO NEIVA',
        doc: '34061580809',
        address: { street: '', number: '', cep: '', city: '', state: '' },
      },
      {
        id: 2,
        name: 'RICARDO OTONI',
        doc: '34061580810',
        address: { street: '', number: '', cep: '', city: '', state: '' },
      },
      {
        id: 3,
        name: 'JOSE OTONI',
        doc: '061580810',
        address: { street: '', number: '', cep: '', city: '', state: '' },
      },
    ]);
    setCultivations(['Tomate', 'Laranja', 'Abacaxi']);
  }, []);

  function handleSelectCustomer(customer) {
    setSelectedCustomer(customer);
  }
  function handleInputChange(e) {
    if (e.target.value === '') return setfilteredCustomers([]);
    const regex = new RegExp(`^${e.target.value}`, 'gi');
    return setfilteredCustomers(
      customers.filter(
        customer => customer.name.match(regex) || customer.doc.match(regex)
      )
    );
  }
  function handleCreateNewCustomer({
    name,
    doc,
    street,
    number,
    cep,
    city,
    uf,
  }) {
    const newCustomer = {
      name,
      doc,
      address: { street, cep, number, uf, city },
    };
    setSelectedCustomer(newCustomer);
    setshowCreateNewUser(false);
    const id = customers[customers.length - 1].id + 1;
    setCustomers([...customers, { id, ...newCustomer }]);
  }
  function handleSelectCultivation(e) {
    // console.log(e.target.value);
    setSelectedCultivation(e.target.value);
  }

  return (
    <Container>
      <CustomerContainer>
        {selectedCustomer ? (
          <CustomerData>
            <strong>Nome: </strong> {selectedCustomer.name} <br />
            <strong>CPF/CNPJ: </strong> {selectedCustomer.doc} <br />
            <strong>Endereço: </strong>{' '}
            {`${selectedCustomer.address.street}, ${selectedCustomer.address.number}`}
            <br />
            <strong>Local de Aplicação: </strong> ZONA RURAL <br />
            <strong>CEP: </strong> {selectedCustomer.address.cep} <br />
            <strong>Município/UF: </strong>{' '}
            {`${selectedCustomer.address.city} / ${selectedCustomer.address.uf}`}{' '}
            <br />
            <button
              type="button"
              onClick={() => {
                setSelectedCustomer();
                setfilteredCustomers([]);
              }}
            >
              Remover
            </button>
          </CustomerData>
        ) : !showCreateNewUser ? (
          <CustomerSelector>
            <strong>Selecione um usuário da lista: </strong> <br />
            <input
              type="text"
              placeholder="Nome ou CPF/CNPJ ..."
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => {
                setshowCreateNewUser(true);
              }}
            >
              Criar Novo Usuário
            </button>
            <CustomerList>
              <ul>
                {filteredCustomers.map(customer => (
                  <li key={customer.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectCustomer(customer)}
                    >
                      <strong>{customer.name}</strong>
                      <p>{customer.doc}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </CustomerList>
          </CustomerSelector>
        ) : (
          <CreateNewUser>
            <Form onSubmit={handleCreateNewCustomer} schema={schema}>
              <Input placeholder="Nome" name="name" />
              <Input placeholder="CPF/CNPJ" name="doc" />
              <Input placeholder="Logradouro" name="street" />
              <Input placeholder="Número" name="number" />
              <Input placeholder="CEP" name="cep" />
              <Input placeholder="Municipio" name="city" />
              <Input placeholder="Estado" name="uf" />
              <button className="button" type="submit">
                Cadastrar
              </button>
            </Form>
          </CreateNewUser>
        )}
      </CustomerContainer>
      <CultivationContainer>
        <strong>Selecione a cultura: </strong>
        <select
          onChange={handleSelectCultivation}
          value={selectedCultivation || ''}
        >
          {cultivations.map(cultivation => (
            <option key={cultivation} value={cultivation}>
              {cultivation}
            </option>
          ))}
        </select>
      </CultivationContainer>
    </Container>
  );
}
