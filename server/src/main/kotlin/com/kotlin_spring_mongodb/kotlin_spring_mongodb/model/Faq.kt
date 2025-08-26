package com.kotlin_spring_mongodb.kotlin_spring_mongodb.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "faqs")
data class Faq(
    @Id
    val id: String? = null,
    val category: String,
    val items: List<FaqItem>
)
