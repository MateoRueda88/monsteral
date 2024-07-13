package com.monsteral.Monsteral.service;

import com.monsteral.Monsteral.model.Plant;
import com.monsteral.Monsteral.repository.PlantRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantService {

    @Autowired
    private PlantRepository plantRepository;

    public List<Plant> getAllPlant() {
        return plantRepository.findAll();
    }

    public Plant addPlant(Plant plant) {
        return plantRepository.save(plant);
    }

    public void deletePlantById(Long id) {
        plantRepository.deleteById(id);
    }

    public Plant updatePlant(Long id, Plant plant){

        Plant plantExist = plantRepository.findById(id).orElseThrow(()->new EntityNotFoundException("User with ID" + id + "not exist"));

        plantExist.setPlantName(plant.getPlantName());
        plantExist.setDescription(plant.getDescription());
        plantExist.setPrice(plant.getPrice());
        plantExist.setPlantsCategory(plant.getPlantsCategory());
        // Actualizar otros campos según sea necesario

        return plantRepository.save(plant);
    }

}
