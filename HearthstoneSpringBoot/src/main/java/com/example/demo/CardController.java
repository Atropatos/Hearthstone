package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
   @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cards")

public class CardController {
    

public CardController(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }
    @Autowired
     CardRepository cardRepository;

    @PostMapping
    public Card createCard(@RequestBody Card card){
        return cardRepository.save(card);
        
    }
 
    @GetMapping
    public List<Card> getCards() {
        return cardRepository.findAll();
    }
 @DeleteMapping
    public ResponseEntity<Void> deleteAllCards() {
        // Delete all the cards
        cardRepository.deleteAll();
        
        // Return 200 OK status to indicate successful deletion
        return ResponseEntity.ok().build();
    }
    
}