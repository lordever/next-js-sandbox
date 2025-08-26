package com.kotlin_spring_mongodb.kotlin_spring_mongodb.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "features")
data class Feature(
    @Id
    val id: String? = null,
    val title: String,
    val description: String,
    val imagePath: String
)
