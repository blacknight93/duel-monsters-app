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

//    //View the first card with the given cardNo
//    @GetMapping("/card/cardNo")
//    public ResponseEntity<Object> getCardNo() {
//        return new ResponseEntity<>(service.getFirstCardNo(), HttpStatus.OK);
//    }

    //Add a new card to repository. Does not allow duplicate cardNo
    @PostMapping("/add")
    public ResponseEntity<Object> addCard( @RequestBody Card newCard ) {
        try {
            return new ResponseEntity<>(service.addCard(newCard), HttpStatus.CREATED);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>(iae.getMessage(), HttpStatus.CONFLICT);
        }
    }

    //remove single card from repository. if cardNo count > 1, decrement count instead of full delete
    @PostMapping("/card/single")
    public ResponseEntity<Object> deleteSingleCardNo( @RequestBody SimpleInput cardNo ) {
        try {
            return new ResponseEntity<>(service.decreaseCardNoCount(cardNo), HttpStatus.OK);
        } catch (IllegalArgumentException iae) {
            return new ResponseEntity<>(iae.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
//
//    @DeleteMapping("/card/multiple")
//    public ResponseEntity<Object> deleteAllCardNo( @RequestBody String cardNo ) {
//        try {
//            return new ResponseEntity<>(service.removeAllCardNo(cardNo), HttpStatus.OK);
//        } catch (IllegalArgumentException iae) {
//            return new ResponseEntity<>(iae.getMessage(), HttpStatus.NOT_FOUND);
//        }
//    }
}
