package com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Faq
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface FaqRepository : ReactiveMongoRepository<Faq, String>
