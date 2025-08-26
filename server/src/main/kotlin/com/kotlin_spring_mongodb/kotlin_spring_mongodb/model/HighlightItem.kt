package com.kotlin_spring_mongodb.kotlin_spring_mongodb.model

import org.springframework.data.annotation.Id

data class HighlightItem(
    @Id
    val id: String? = null,
    val title: String,
    val description: String,
    val imagePath: String,
    val imageAlt: String,
    val buttonText: String? = null
)
