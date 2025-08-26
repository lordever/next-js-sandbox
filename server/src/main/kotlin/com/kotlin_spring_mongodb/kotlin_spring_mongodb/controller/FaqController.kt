package com.kotlin_spring_mongodb.kotlin_spring_mongodb.controller

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Faq
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.service.FaqService
import mu.KotlinLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/faqs")
@CrossOrigin(origins = ["http://localhost:3000"])
class FaqController(private val faqService: FaqService) {
    
    private val logger = KotlinLogging.logger {}
    
    @GetMapping
    fun getAllFaqs(): Flux<Faq> {
        logger.info { "GET /api/faqs" }
        return faqService.getAllFaqs()
    }
    
    @GetMapping("/{id}")
    fun getFaqById(@PathVariable id: String): Mono<ResponseEntity<Faq>> {
        logger.info { "GET /api/faqs/$id" }
        return faqService.getFaqById(id)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @GetMapping("/category/{category}")
    fun getFaqByCategory(@PathVariable category: String): Mono<ResponseEntity<Faq>> {
        logger.info { "GET /api/faqs/category/$category" }
        return faqService.getFaqByCategory(category)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @PostMapping
    fun createFaq(@RequestBody faq: Faq): Mono<ResponseEntity<Faq>> {
        logger.info { "POST /api/faqs" }
        return faqService.createFaq(faq)
            .map { ResponseEntity.status(HttpStatus.CREATED).body(it) }
    }
    
    @PutMapping("/{id}")
    fun updateFaq(@PathVariable id: String, @RequestBody faq: Faq): Mono<ResponseEntity<Faq>> {
        logger.info { "PUT /api/faqs/$id" }
        return faqService.updateFaq(id, faq)
            .map { ResponseEntity.ok(it) }
            .defaultIfEmpty(ResponseEntity.notFound().build())
    }
    
    @DeleteMapping("/{id}")
    fun deleteFaq(@PathVariable id: String): Mono<ResponseEntity<Void>> {
        logger.info { "DELETE /api/faqs/$id" }
        return faqService.deleteFaq(id)
            .then(Mono.just(ResponseEntity.noContent().build<Void>()))
    }
}
