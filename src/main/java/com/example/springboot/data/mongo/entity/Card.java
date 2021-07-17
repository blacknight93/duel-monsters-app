package com.example.springboot.data.mongo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Card {

    @NonNull
    String cardNo;
    @NonNull
    String cardType;
    @NonNull
    String cardName;
    int level;
    String attribute;
    List<String> type;
    String description;
    String atk;
    String def;
    @NonNull
    int count;
    List<String> tag;
    List<String> deck;

    Card(){}

    // Spells & Traps
    Card(String cardNo, String cardType, String cardName, List<String> type, String description, int count, List<String> tags, List<String> decks) {
        this.cardNo = cardNo;
        this.cardType = cardType;
        this.cardName = cardName;
        this.type = type;
        this.description = description;
        this.count = count;
        this.tag = tags;
        this.deck = decks;
    }

    //Monster
    Card(String cardNo, String cardType,
         String cardName, int level,
         String attribute, List<String> type,
         String description, String atk,
         String def, int count,
         List<String> tags, List<String> decks) {
            this.cardNo = cardNo;
            this.cardType = cardType;
            this.cardName = cardName;
            this.level = level;
            this.attribute = attribute;
            this.type = type;
            this.description = description;
            this.atk = atk;
            this.def = def;
            this.count = count;
            this.tag = tags;
            this.deck = decks;
    }

    public void setCardNo(String newCardNo) { cardNo = newCardNo; }
    public void setCardType(String newCardType) { cardType = newCardType; }
    public void setCardName(String newCardName) { cardName = newCardName; }
    public void setLevel(int newLevel) { level = newLevel; }
    public void setAttribute(String newAttribute) { attribute = newAttribute; }
    public void addType(String newType) { type.add(newType); }
    public void removeType(String oldType) { type.remove(oldType); }
    public void setDescription(String newDesc) { description = newDesc; }
    public void setAtk(String newAtk) { atk = newAtk; }
    public void setDef(String newDef) { def = newDef; }
    public void incrementCount() { count++; }
    public void decrementCount() { count--; }
    public void addTag(String newTag) { tag.add(newTag); }
    public void removeTag(String oldTag) { tag.remove(oldTag); }
    public void addDeck(String newDeck) { deck.add(newDeck); }
    public void removeDeck(String oldDeck) { deck.remove(oldDeck); }

    public String getCardNo() { return cardNo; }
    public String getCardType() { return cardType; }
    public String getCardName() { return cardName; }
    public int getLevel() { return level; }
    public String getAttribute() { return attribute; }
    public List<String> getType() { return type; }
    public String getDescription() { return description; }
    public String getAtk() { return atk; }
    public String getDef() { return def; }
    public int getCount() { return count; }
    public List<String> getTag() { return tag;}
    public List<String> getDeck() { return deck;}

}
