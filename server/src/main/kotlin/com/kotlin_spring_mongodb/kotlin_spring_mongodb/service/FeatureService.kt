package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Feature
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository.FeatureRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class FeatureService(private val featureRepository: FeatureRepository) {
    
    fun getAllFeatures(): Flux<Feature> = featureRepository.findAll()
    
    fun getFeatureById(id: String): Mono<Feature> = featureRepository.findById(id)
    
    fun createFeature(feature: Feature): Mono<Feature> = featureRepository.save(feature)
    
    fun updateFeature(id: String, feature: Feature): Mono<Feature> = 
        featureRepository.findById(id)
            .flatMap { featureRepository.save(feature.copy(id = id)) }
    
    fun deleteFeature(id: String): Mono<Void> = featureRepository.deleteById(id)
}
