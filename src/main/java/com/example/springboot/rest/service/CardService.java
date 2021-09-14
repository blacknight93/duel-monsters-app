package com.example.springboot.rest.service;

import com.example.SimpleInput;
import com.example.springboot.data.mongo.entity.Card;
import com.example.springboot.data.mongo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.application.CardType;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CardService {

    @Autowired
    CardRepository repository;

    public List<Card> getAll() {
        return repository.findAll();
    }

    public List<String> getDecks() {
        List<Card> cardList = getAll();
        Set<String> deckList = new HashSet<>();
        
        for(int i = 0; i < cardList.size(); i++) {
            deckList.addAll(cardList.get(i).getDeck());
        }

        return deckList.stream().collect(Collectors.toList());
    }

    public List<Card> findCardsByDeck(String deck) {
        return getAll().stream().filter( card -> card.getDeck().contains(deck) ).collect(Collectors.toList());
    }

    public List<String> getTags() {
        List<Card> cardList = getAll();
        Set<String> tagList = new HashSet<>();
        
        for(int i = 0; i < cardList.size(); i++) {
            tagList.addAll(cardList.get(i).getTag());
        }

        return tagList.stream().collect(Collectors.toList());
    }

    public List<Card> getAllCardType(String cardType) {
        if(!isValidCardType(cardType)) {
            throw new IllegalArgumentException("Invalid card type.");
        }
        return repository.findByCardType(cardType);
    }

    public List<Card> getAllCardName(String cardName) {
        return repository.findByCardName(cardName);
    }

    public String getFirstCardNo() {
        return repository.findAll().get(0).getCardNo();
    }

    public Card findCardByNo(String cardNo) {
        return repository.findByCardNo(cardNo);
    }

    public List<Card> findCardByName(String name) {
        return repository.findByCardName(name);
    }

    public List<Card> findCardsByTag(String tag) {
        return getAll().stream().filter( card -> card.getTag().contains(tag)).collect(Collectors.toList());
    }

    public String addCard(Card newCard) {
        Card existingCard = repository.findByCardNo(newCard.getCardNo());


        if (existingCard != null) {
            int count = newCard.getCount();
            existingCard.incrementCount(count);

            List<String> existingDecks = existingCard.getDeck();
            if (existingDecks.contains(newCard.getDeck().get(0))) {
                // the deck is the same; just increment the count
                repository.save(existingCard);
                return "Card exists. Incremented count for existing card.";
            }
            existingCard.addDeck(newCard.getDeck().get(0));
            repository.save(existingCard);
            return "Card exists. Incremented count and added deck for existing card.";
        }

        repository.insert(newCard);
        return "Added new card!";
    }

    // public String decreaseCardNoCount(SimpleInput cardNumber) {

    //     String cardNo = cardNumber.getInput();

    //     Card existingCard = repository.findByCardNo(cardNo);

    //     if(existingCard == null) {
    //         throw new IllegalArgumentException("Card with this card number does not exist");
    //     }
    //     if(existingCard.getCount() > 1) {
    //         existingCard.decrementCount();
    //         repository.save(existingCard);
    //         return "Removed single instance of " + cardNo;
    //     }

    //     repository.delete(existingCard);
    //     return "Removed only instance of " + cardNo;
    // }

    public String removeAllCardNo(String cardNo) {
        Card existingCard = repository.findByCardNo(cardNo);

        if(existingCard == null) {
            throw new IllegalArgumentException("Card with this card number does not exist");
        }
        repository.delete(existingCard);
        return "Removed all instances of " + cardNo;
    }

    private boolean isValidCardType(String cardType) {
        CardType[] cardTypes = CardType.values();
        boolean exists = false;
        int i = 0;

        while (i < cardTypes.length && !exists) {
            if (cardTypes[i].name().equalsIgnoreCase(cardType)) {
                exists = true;
            }
            i++;
        }
        return exists;
    }


}

