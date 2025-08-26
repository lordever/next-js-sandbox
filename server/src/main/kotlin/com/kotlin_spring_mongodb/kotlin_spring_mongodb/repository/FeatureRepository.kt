package com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Feature
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface FeatureRepository : ReactiveMongoRepository<Feature, String>
