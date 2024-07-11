package com.monsteral.Monsteral.repository;

import com.monsteral.Monsteral.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
}
