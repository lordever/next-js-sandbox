package com.kotlin_spring_mongodb.kotlin_spring_mongodb.controller

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Highlight
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.service.HighlightService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/highlights")
@CrossOrigin(origins = ["http://localhost:3000"])
class HighlightController(private val highlightService: HighlightService) {
    
    private val logger = KotlinLogging.logger {}
    
    @GetMapping
    fun getAllHighlights(): Mono<Highlight> {
        logger.info { "GET /api/highlights" }
        return highlightService.getAllHighlights().next()
    }
    
    @GetMapping("/{id}")
    fun getHighlightById(@PathVariable id: String): Mono<ResponseEntity<Highlight>> {
        logger.info { "GET /api/highlights/$id" }
        return highlightService.getHighlightById(id)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @PostMapping
    fun createHighlight(@RequestBody highlight: Highlight): Mono<ResponseEntity<Highlight>> {
        logger.info { "POST /api/highlights" }
        return highlightService.createHighlight(highlight)
            .map { ResponseEntity.status(HttpStatus.CREATED).body(it) }
    }
    
    @PutMapping("/{id}")
    fun updateHighlight(@PathVariable id: String, @RequestBody highlight: Highlight): Mono<ResponseEntity<Highlight>> {
        logger.info { "PUT /api/highlights/$id" }
        return highlightService.updateHighlight(id, highlight)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @DeleteMapping("/{id}")
    fun deleteHighlight(@PathVariable id: String): Mono<ResponseEntity<Void>> {
        logger.info { "DELETE /api/highlights/$id" }
        return highlightService.deleteHighlight(id)
            .then(Mono.just(ResponseEntity.noContent().build<Void>()))
    }
}
