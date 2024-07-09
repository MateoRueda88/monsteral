package com.monsteral.Monsteral.repository;

import com.monsteral.Monsteral.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query("SELECT c FROM Client c WHERE c.clientName LIKE :name")
    List<Client> findCompletedClients();
}


//public interface ClientRepository extends JpaRepository<Client, Long> {
//    @Query("SELECT t FROM Todo t WHERE t.completed = true")
//    List<Client> findCompletedClients();
//}




