package com.example.demo;

import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.data.jpa.repository.JpaRepository;
@RepositoryRestController
public interface CardRepository extends JpaRepository<Card,Long> {
  
}
