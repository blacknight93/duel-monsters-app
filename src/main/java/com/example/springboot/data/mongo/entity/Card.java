package com.example.springboot.data.mongo.entity;

import org.springframework.data.annotation.Id;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.ArrayList;

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
    String type;
    String ability;
    String classification;
    String description;
    String atk;
    String def;
    @NonNull
    int count;
    String penEffect; //not implemented
    int redBound; //not implemented
    int blueBound; //not implemented
    List<Integer> linkZones;
    List<String> materials;
    List<String> tag;
    List<String> deck;
    boolean extraDeck;
    boolean sideDeck;

    Card(){}

    // Spells & Traps
    Card(String cardNo, String cardType, String cardName, String type, String description, int count, List<String> tags, List<String> deck, boolean extraDeck, boolean sideDeck) {
        this.cardNo = cardNo;
        this.cardType = cardType;
        this.cardName = cardName;
        this.type = type;
        this.description = description;
        this.count = count;
        this.tag = tags;
        this.deck = deck;
        this.extraDeck = extraDeck ? extraDeck : false;
        this.sideDeck = sideDeck ? sideDeck : false;
        // this.deck.add(deck);
    }

    //Monster
    Card(String cardNo, String cardType,
         String cardName, int level,
         String attribute, String type, String ability,
         String classification, String description, String atk,
         String def, int count,
         List<String> tags, List<String> deck, 
         boolean extraDeck, boolean sideDeck) {
            this.cardNo = cardNo;
            this.cardType = cardType;
            this.cardName = cardName;
            this.level = level;
            this.attribute = attribute;
            this.type = type;
            this.ability = ability;
            this.classification = classification;
            this.description = description;
            this.atk = atk;
            this.def = def;
            this.count = count;
            this.tag = tags;
            this.deck = deck;
            this.extraDeck = extraDeck ? extraDeck : false;
            this.sideDeck = sideDeck ? sideDeck : false;
            // this.deck.add(deck);
    }

    //ELEPHANT: Add different constructor for Pendulum, Link, and Material Monsters
    //Material
    Card(String cardNo, String cardType,
         String cardName, int level,
         String attribute, String type, String ability,
         String classification, String description, String atk,
         String def, int count, List<String> materials,
         List<String> tags, List<String> deck, 
         boolean extraDeck, boolean sideDeck) {
            this.cardNo = cardNo;
            this.cardType = cardType;
            this.cardName = cardName;
            this.level = level;
            this.attribute = attribute;
            this.type = type;
            this.ability = ability;
            this.classification = classification;
            this.description = description;
            this.atk = atk;
            this.def = def;
            this.count = count;
            this.materials = materials;
            this.tag = tags;
            this.deck = deck;
            this.extraDeck = extraDeck ? extraDeck : false;
            this.sideDeck = sideDeck ? sideDeck : false;
            // this.deck.add(deck);
    }
    
    //Link
    Card(String cardNo, String cardType,
         String cardName, int level,
         String attribute, String type, String ability,
         String classification, String description, String atk,
         int count, List<Integer> linkZones,
         List<String> materials, List<String> tags, List<String> deck, 
         boolean extraDeck, boolean sideDeck) {
            this.cardNo = cardNo;
            this.cardType = cardType;
            this.cardName = cardName;
            this.level = level;
            this.attribute = attribute;
            this.type = type;
            this.ability = ability;
            this.classification = classification;
            this.description = description;
            this.atk = atk;
            this.count = count;
            this.materials = materials;
            this.linkZones = linkZones;
            this.tag = tags;
            this.deck = deck;
            this.extraDeck = extraDeck ? extraDeck : false;
            this.sideDeck = sideDeck ? sideDeck : false;
            // this.deck.add(deck);
    }

    public void setCardNo(String newCardNo) { cardNo = newCardNo; }
    public void setCardType(String newCardType) { cardType = newCardType; }
    public void setCardName(String newCardName) { cardName = newCardName; }
    public void setLevel(int newLevel) { level = newLevel; }
    public void setAttribute(String newAttribute) { attribute = newAttribute; }
    public void setType(String newType) { type = newType; }
    public void setAbility(String newAbility) { ability = newAbility; }
    public void setClassification(String newClass) { classification = newClass; }
    public void setDescription(String newDesc) { description = newDesc; }
    public void setAtk(String newAtk) { atk = newAtk; }
    public void setDef(String newDef) { def = newDef; }
    public void incrementCount(int inc) { count += inc; }
    public void decrementCount(int dec) { count -= dec; }
    public void addTag(String newTag) { tag.add(newTag); }
    public void removeTag(String oldTag) { tag.remove(oldTag); }
    public void addDeck(String newDeck) { deck.add(newDeck); }
    public void removeDeck(String oldDeck) { deck.remove(oldDeck); }
    public void setExtraDeck(boolean flag) { extraDeck = flag; }
    public void setSideDeck(boolean flag) { sideDeck = flag; }

    public String getCardNo() { return cardNo; }
    public String getCardType() { return cardType; }
    public String getCardName() { return cardName; }
    public int getLevel() { return level; }
    public String getAttribute() { return attribute; }
    public String getType() { return type; }
    public String getAbility() { return ability; }
    public String getClassification() { return classification; }
    public String getDescription() { return description; }
    public String getAtk() { return atk; }
    public String getDef() { return def; }
    public int getCount() { return count; }
    public List<String> getMaterials() { return materials;}
    public List<Integer> getLinkZones() { return linkZones;}
    public List<String> getTag() { return tag;}
    public List<String> getDeck() { return deck;}
    public boolean getExtraDeck() { return extraDeck; }
    public boolean getSideDeck() { return sideDeck; }

}
