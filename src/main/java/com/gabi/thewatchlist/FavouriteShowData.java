package com.gabi.thewatchlist;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.time.Instant;

@XmlAccessorType(XmlAccessType.NONE)
@XmlRootElement(name = "favouriteShowData")
public class FavouriteShowData {
    private static final long serialVersionUID = 1L;

    @XmlAttribute(name = "id")
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "FavouriteShowData{" +
                "id=" + id +
                '}';
    }
}
