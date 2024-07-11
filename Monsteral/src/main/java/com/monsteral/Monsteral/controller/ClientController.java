package com.monsteral.Monsteral.controller;
import com.monsteral.Monsteral.model.Client;
import com.monsteral.Monsteral.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }

    @PostMapping
    public Client addClient(@RequestBody Client client){
        return clientService.addClient(client);
    }

    @DeleteMapping("/{id}")
    public void deleteClientById(@PathVariable Long id){
        clientService.deleteClientById(id);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client clientToUpdate){
        return clientService.updateClient(id, clientToUpdate);
    }

//    @GetMapping("/completadas")
//    public List<Client> getCompletedClients(){
//        return clientService.getCompletedClients();
//    }
}
