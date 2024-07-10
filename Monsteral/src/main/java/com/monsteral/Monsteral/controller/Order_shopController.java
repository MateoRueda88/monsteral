//package com.monsteral.Monsteral.controller;
//
//import com.monsteral.Monsteral.model.Plant;
//import com.monsteral.Monsteral.service.PlantService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/order_shop")
//public class Order_shopController {
//
//    @Autowired
//    private PlantService plantService;
//
//    @GetMapping
//    @ResponseStatus(HttpStatus.OK)
//    public List<Plant> getAllPlants(){
//        return plantService.getAllPlants();
//    }
//
//    @PostMapping
//    public Plant addPlant(@RequestBody Plant plant){
//        return plantService.addPlant(plant);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deletePlantById(@PathVariable Long id){
//        plantService.deletePlantById(id);
//    }
//
//    @PutMapping("/{id}")
//    public Plant updatePlant(@PathVariable Long id, @RequestBody Plant plantToUpdate){
//        return plantService.updatePlant(id, plantToUpdate);
//    }
//
//}
