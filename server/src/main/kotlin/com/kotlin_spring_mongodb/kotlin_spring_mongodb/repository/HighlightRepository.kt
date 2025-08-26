package com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Highlight
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface HighlightRepository : ReactiveMongoRepository<Highlight, String>
