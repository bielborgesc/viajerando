package com.viajerando.demo.utils;

public enum StatusEnum {
    APPROVED("approved"),
    DISAPPROVED("disapproved"),
    PENDING("pending");

    private final String description;

    StatusEnum(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
