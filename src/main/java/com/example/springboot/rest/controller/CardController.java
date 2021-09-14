package com.example.springboot.rest.controller;

import com.example.SimpleInput;
import com.example.springboot.data.mongo.entity.Card;
import com.example.springboot.data.mongo.repository.CardRepository;
import com.example.springboot.rest.service.CardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class CardController {

    private CardService service;
    private CardRepository repository;

    public CardController(CardRepository repository, CardService service) {
        this.service = service;
        this.repository = repository;
    }

    //Health Check
    @PostMapping("/healthcheck")
    public ResponseEntity<Object> healthCheck() {
        return new ResponseEntity<>("The world is quiet here.", HttpStatus.OK);
    }

    //View all
    @GetMapping("/inventory")
    public ResponseEntity<Object> getInventory() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    //View all of a cardType
    @GetMapping("/inventory/{cardType}")
    public ResponseEntity<Object> getByCardType(@PathVariable String cardType) {
        try {
            return new ResponseEntity<>(service.getAllCardType(cardType), HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //View all of a cardType
    @GetMapping("/inventory/name/{cardName}")
    public ResponseEntity<Object> getByCardName(@PathVariable String cardName) {
        try {
            return new ResponseEntity<>(service.getAllCardName(cardName), HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //View list of all decks
    @GetMapping("/inventory/decks")
    public ResponseEntity<Object> getDecks() {
        return new ResponseEntity<>(service.getDecks(), HttpStatus.OK);
    }

    //View list of all decks
    @GetMapping("/inventory/deck/{deckName}")
    public ResponseEntity<Object> getDeckByName(@PathVariable String deckName) {
        try {
            return new ResponseEntity<>(service.findCardsByDeck(deckName), HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>(iae.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //View list of all tags
    @GetMapping("/inventory/tags")
    public ResponseEntity<Object> getTags() {
        return new ResponseEntity<>(service.getTags(), HttpStatus.OK);
    }

    //Add a new card to repository. Does not allow duplicate cardNo
    @PostMapping("/add")
    public ResponseEntity<Object> addCard( @RequestBody Card newCard ) {
        // try {
            return new ResponseEntity<>(service.addCard(newCard), HttpStatus.CREATED);
        // } catch (IllegalArgumentException iae) {
        //     return new ResponseEntity<>(iae.getMessage(), HttpStatus.CONFLICT);
        // }
    }
}
