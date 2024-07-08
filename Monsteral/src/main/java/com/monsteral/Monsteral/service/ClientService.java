package com.monsteral.Monsteral.service;

import com.monsteral.Monsteral.model.Client;
import com.monsteral.Monsteral.repository.ClientRepository;
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

    public List<Client> getCompletedClients() {
        return clientRepository.findCompletedClients();
    }
}