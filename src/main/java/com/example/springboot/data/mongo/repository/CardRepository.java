package com.example.springboot.data.mongo.repository;

import com.example.springboot.data.mongo.entity.Card;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends MongoRepository<Card, String> {

    List<Card> findAll();
    List<Card> findByCardType(String cardType);
    List<Card> findByAttribute(String attribute);
    List<Card> findByType(String type);
    List<Card> findByTag(String tag);
    List<Card> findByDeck(String deck);
    Card findByCardNo(String cardNo);
    Card findByCardName(String cardName);
}
