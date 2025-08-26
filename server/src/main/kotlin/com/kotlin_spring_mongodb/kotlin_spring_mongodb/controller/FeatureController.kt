package com.kotlin_spring_mongodb.kotlin_spring_mongodb.controller

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Feature
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.service.FeatureService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/features")
@CrossOrigin(origins = ["http://localhost:3000"])
class FeatureController(private val featureService: FeatureService) {
    
    private val logger = KotlinLogging.logger {}
    
    @GetMapping
    fun getAllFeatures(): Flux<Feature> {
        logger.info { "GET /api/features" }
        return featureService.getAllFeatures()
    }
    
    @GetMapping("/{id}")
    fun getFeatureById(@PathVariable id: String): Mono<ResponseEntity<Feature>> {
        logger.info { "GET /api/features/$id" }
        return featureService.getFeatureById(id)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @PostMapping
    fun createFeature(@RequestBody feature: Feature): Mono<ResponseEntity<Feature>> {
        logger.info { "POST /api/features" }
        return featureService.createFeature(feature)
            .map { ResponseEntity.status(HttpStatus.CREATED).body(it) }
    }
    
    @PutMapping("/{id}")
    fun updateFeature(@PathVariable id: String, @RequestBody feature: Feature): Mono<ResponseEntity<Feature>> {
        logger.info { "PUT /api/features/$id" }
        return featureService.updateFeature(id, feature)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @DeleteMapping("/{id}")
    fun deleteFeature(@PathVariable id: String): Mono<ResponseEntity<Void>> {
        logger.info { "DELETE /api/features/$id" }
        return featureService.deleteFeature(id)
            .then(Mono.just(ResponseEntity.noContent().build<Void>()))
    }
}
