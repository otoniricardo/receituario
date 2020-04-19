/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import {
  Container,
  CustomerSelector,
  CustomerList,
  CustomerContainer,
  CustomerData,
  CreateNewUser,
} from './styles';

export default function Presciption() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setfilteredCustomers] = useState([]);
  const [selectedCustomer, setselectedCustomer] = useState();
  const [showCreateNewUser, setshowCreateNewUser] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    doc: '',
    address: { street: '', number: '', cep: '', city: '', state: '' },
  });
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
  }, []);

  function handleSelectCustomer(customer) {
    setselectedCustomer(customer);
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
  function handleCreateNewCustomer(e) {
    e.preventDefault();
    setselectedCustomer(newCustomer);
    setshowCreateNewUser(false);
    const id = customers[customers.length - 1].id + 1;
    setCustomers([...customers, { id, ...newCustomer }]);
  }

  return (
    <Container>
      <CustomerContainer>
        {selectedCustomer ? (
          <CustomerData>
            <strong>Nome: </strong> {selectedCustomer.name} <br />
            <strong>CPF/CNPJ: </strong> {selectedCustomer.doc} <br />
            <strong>Endereço: </strong> AV. DOS ARECIFES 134 <br />
            <strong>Local de Aplicação: </strong> ZONA RURAL <br />
            <strong>CEP: </strong> 59570-000 <br />
            <strong>Município/UF: </strong> Ceara Mirim / RN <br />
            <button
              type="button"
              onClick={() => {
                setselectedCustomer();
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
            <form onSubmit={handleCreateNewCustomer}>
              <input
                placeholder="Nome"
                value={newCustomer.name}
                onChange={e =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
              />
              <input
                placeholder="CPF/CNPJ"
                value={newCustomer.doc}
                onChange={e =>
                  setNewCustomer({ ...newCustomer, doc: e.target.value })
                }
              />
              <input
                placeholder="Logradouro"
                value={newCustomer.address.street}
                onChange={e =>
                  setNewCustomer({
                    ...newCustomer,
                    address: { ...newCustomer.address, street: e.target.value },
                  })
                }
              />
              <input
                placeholder="CEP"
                value={newCustomer.address.cep}
                onChange={e =>
                  setNewCustomer({
                    ...newCustomer,
                    address: { ...newCustomer.address, cep: e.target.value },
                  })
                }
              />
              <input
                placeholder="Municipio"
                value={newCustomer.address.city}
                onChange={e =>
                  setNewCustomer({
                    ...newCustomer,
                    address: { ...newCustomer.address, city: e.target.value },
                  })
                }
              />
              <input
                placeholder="Estado"
                value={newCustomer.address.state}
                onChange={e =>
                  setNewCustomer({
                    ...newCustomer,
                    address: { ...newCustomer.address, state: e.target.value },
                  })
                }
              />

              <button className="button" type="submit">
                Cadastrar
              </button>
            </form>
          </CreateNewUser>
        )}
      </CustomerContainer>
    </Container>
  );
}
