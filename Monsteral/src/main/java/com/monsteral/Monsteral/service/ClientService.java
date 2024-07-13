package com.monsteral.Monsteral.service;

import com.monsteral.Monsteral.model.Client;
import com.monsteral.Monsteral.repository.ClientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client addClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClientById(Long id) {
        clientRepository.deleteById(id);
    }

    public Client updateClient(Long id, Client client){

        Client clientExist = clientRepository.findById(id).orElseThrow(()->new EntityNotFoundException("User with ID" + id + "not exist"));

        clientExist.setClientName(client.getClientName());
        clientExist.setCC(client.getCC());
        clientExist.setPhone(client.getPhone());
        clientExist.setAddress(client.getAddress());
        // Actualizar otros campos según sea necesario

        return clientRepository.save(client);
    }

//    public List<Client> getCompletedClients() {
//        return clientRepository.findCompletedClients();
//    }
}