package com.kotlin_spring_mongodb.kotlin_spring_mongodb.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "contacts")
data class Contact(
    @Id
    val id: String? = null,
    val position: String,
    val location: String
)
