package com.kotlin_spring_mongodb.kotlin_spring_mongodb.controller

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Value
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.service.ValueService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/values")
@CrossOrigin(origins = ["http://localhost:3000"])
class ValueController(private val valueService: ValueService) {
    
    private val logger = KotlinLogging.logger {}
    
    @GetMapping
    fun getAllValues(): Flux<Value> {
        logger.info { "GET /api/values" }
        return valueService.getAllValues()
    }
    
    @GetMapping("/{id}")
    fun getValueById(@PathVariable id: String): Mono<ResponseEntity<Value>> {
        logger.info { "GET /api/values/$id" }
        return valueService.getValueById(id)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @PostMapping
    fun createValue(@RequestBody value: Value): Mono<ResponseEntity<Value>> {
        logger.info { "POST /api/values" }
        return valueService.createValue(value)
            .map { ResponseEntity.status(HttpStatus.CREATED).body(it) }
    }
    
    @PutMapping("/{id}")
    fun updateValue(@PathVariable id: String, @RequestBody value: Value): Mono<ResponseEntity<Value>> {
        logger.info { "PUT /api/values/$id" }
        return valueService.updateValue(id, value)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @DeleteMapping("/{id}")
    fun deleteValue(@PathVariable id: String): Mono<ResponseEntity<Void>> {
        logger.info { "DELETE /api/values/$id" }
        return valueService.deleteValue(id)
            .then(Mono.just(ResponseEntity.noContent().build<Void>()))
    }
}
